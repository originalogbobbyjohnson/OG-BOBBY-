/* Flatbush opening scenes for the Joey Bada$$ game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes chase{0%,100%{opacity:1}50%{opacity:.25}}' +
    '.bulb{animation:chase .9s steps(1) infinite}.bulb2{animation-delay:.45s}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.3}96%{opacity:1}}' +
    '.neon{animation:neon 3.4s infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}' +
    '.swy{transform-box:fill-box;transform-origin:50% 0;animation:sway 2.6s ease-in-out infinite}.swy2{animation-delay:.6s}.swy3{animation-delay:1.2s}' +
    '@keyframes drift{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.cld{animation:drift 22s linear infinite}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}25%{opacity:1}100%{transform:translateY(-40px);opacity:0}}' +
    '.nt{animation:note 2.4s ease-out infinite}.nt2{animation-delay:.8s}.nt3{animation-delay:1.6s}' +
    '@keyframes beam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}' +
    '.bm{transform-box:fill-box;transform-origin:50% 100%;animation:beam 5s ease-in-out infinite}.bm2{animation-delay:-2.5s}' +
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
  const GOLD = "#f2c14e", GREEN = "#1fae5b", TERRA = "#e2703a";

  /* 1. The 2 train pulling into Church Av, underground on the Nostrand Avenue line */
  function train() {
    let tiles = "";
    for (let y = 22; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#cbbf9f" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 22v96" stroke="#cbbf9f" stroke-width=".6"/>';
    let band = "";
    for (let x = 0; x < 400; x += 16) band += '<rect x="' + x + '" y="104" width="8" height="8" fill="' + (x % 32 ? "#2f6b4f" : "#7d2a22") + '"/>';
    let cols = "";
    [38, 362].forEach(x => cols += '<rect x="' + (x - 5) + '" y="16" width="10" height="164" fill="#1f2a24"/><rect x="' + (x - 8) + '" y="16" width="16" height="6" fill="#1f2a24"/>');
    let windows = "";
    for (let x = 22; x < 250; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#14110d"/>' +
      /* ceiling + lights */
      '<rect x="0" y="0" width="400" height="16" fill="#0c0b09"/>' +
      '<rect class="flk" x="70" y="10" width="90" height="4" rx="2" fill="#fff6d8"/><rect class="flk flk2" x="240" y="10" width="90" height="4" rx="2" fill="#fff6d8"/>' +
      /* cream tile wall with the mosaic band */
      '<rect x="0" y="16" width="400" height="104" fill="#e9e0c6"/>' + tiles + band +
      '<rect x="0" y="16" width="400" height="6" fill="#7d2a22"/>' +
      /* station sign */
      '<rect x="92" y="40" width="216" height="38" rx="4" fill="#111"/>' +
      '<rect x="92" y="40" width="216" height="4" fill="#fff"/>' +
      '<text x="106" y="68" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">Church Av</text>' +
      bullet(258, 62, "2", "#ee352e") + bullet(284, 62, "5", "#00933c") +
      cols +
      /* the 2 slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c3c8cf" stroke="#6b7280" stroke-width="2"/>' +
        '<path d="M8 162h300" stroke="#9aa1aa" stroke-width="2"/>' + windows +
        '' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(292, 140, "2", "#ee352e") +
      '</g>' +
      /* platform edge + platform */
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1c1813"/>' +
      tag("PRO ERA", 22, 238, 30, GOLD, -4) + tag("BADMON", 262, 240, 28, GREEN, -8));
  }

  /* 2. Kings Theatre on Flatbush Avenue: terracotta facade, the big arched window, the KINGS blade sign and the marquee */
  function kings() {
    let bulbs = "";
    for (let x = 96; x <= 304; x += 8) bulbs += '<circle class="bulb' + ((x / 8) % 2 ? " bulb2" : "") + '" cx="' + x + '" cy="186" r="2" fill="#ffe08a"/><circle class="bulb' + ((x / 8) % 2 ? "" : " bulb2") + '" cx="' + x + '" cy="214" r="2" fill="#ffe08a"/>';
    let mullions = "";
    for (let x = 166; x <= 234; x += 17) mullions += '<path d="M' + x + ' 82v84" stroke="#7a4a22" stroke-width="2"/>';
    let orn = "";
    for (let x = 52; x < 352; x += 20) orn += '<circle cx="' + (x + 10) + '" cy="58" r="3" fill="#f3e2b8"/>';
    let letters = "";
    "KINGS".split("").forEach((c, i) => letters += '<text x="200" y="' + (62 + i * 20) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" fill="#ff4a3d">' + c + '</text>');
    return svg(
      '<rect width="400" height="260" fill="url(#jk)"/>' + stars(20) +
      /* searchlights */
      '<g opacity=".1"><path class="bm" d="M110 236l-8-236h16z" fill="#fff4c9"/><path class="bm bm2" d="M290 236l-8-236h16z" fill="#fff4c9"/></g>' +
      /* facade body: tan terracotta with cream trim */
      '<rect x="40" y="48" width="320" height="180" fill="#c58a52"/>' +
      '<rect x="40" y="44" width="320" height="12" fill="#e9d2a2"/>' + orn +
      '<path d="M170 44l30-18 30 18z" fill="#e9d2a2"/><circle cx="200" cy="36" r="5" fill="' + GOLD + '"/>' +
      /* pilasters */
      '<rect x="56" y="64" width="16" height="112" fill="#e9d2a2"/><rect x="328" y="64" width="16" height="112" fill="#e9d2a2"/>' +
      '<rect x="128" y="64" width="12" height="112" fill="#e9d2a2"/><rect x="260" y="64" width="12" height="112" fill="#e9d2a2"/>' +
      /* side windows */
      '<rect x="84" y="78" width="32" height="40" rx="2" fill="#5a3216"/><rect x="84" y="128" width="32" height="40" rx="2" fill="#5a3216"/>' +
      '<rect x="284" y="78" width="32" height="40" rx="2" fill="#5a3216"/><rect x="284" y="128" width="32" height="40" rx="2" fill="#5a3216"/>' +
      '<rect x="88" y="82" width="24" height="32" fill="#ffcf6b" opacity=".55"/><rect x="288" y="132" width="24" height="32" fill="#ffcf6b" opacity=".55"/>' +
      /* the great arch window, lit gold */
      '<path d="M150 170V104a50 50 0 0 1 100 0v66z" fill="#f3e2b8"/>' +
      '<path d="M158 170V106a42 42 0 0 1 84 0v64z" fill="#ffc35a"/>' + mullions +
      '<path d="M158 124h84M158 146h84" stroke="#7a4a22" stroke-width="2"/>' +
      /* blade sign */
      '<rect x="186" y="44" width="28" height="108" rx="4" fill="#2a0f0c" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<g class="neon">' + letters + '</g>' +
      /* marquee */
      '<rect x="88" y="178" width="224" height="44" rx="3" fill="#1b0f08" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="206" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="1.5" fill="#fff3d0">JOEY BADA$$ TONIGHT</text>' +
      /* sidewalk */
      '<rect x="0" y="228" width="400" height="32" fill="#1a1410"/><path d="M0 230h400" stroke="#3a2c20" stroke-width="2"/>',
      sky("jk", "#120a1c", "#5a2a3a"));
  }

  /* 3. Erasmus Hall: gray Gothic stone with the tower, and the white 1786 Academy in the courtyard with its cupola bell */
  function erasmus() {
    let wins = "";
    for (let x = 14; x < 120; x += 22) for (let y = 100; y < 190; y += 34) wins += '<path d="M' + x + ' ' + (y + 24) + 'v-16l7-8 7 8v16z" fill="#2c3440"/>';
    for (let x = 290; x < 396; x += 22) for (let y = 100; y < 190; y += 34) wins += '<path d="M' + x + ' ' + (y + 24) + 'v-16l7-8 7 8v16z" fill="#2c3440"/>';
    let cren = "";
    for (let x = 0; x < 132; x += 12) cren += '<rect x="' + x + '" y="84" width="7" height="8" fill="#b9b2a2"/>';
    for (let x = 272; x < 400; x += 12) cren += '<rect x="' + x + '" y="84" width="7" height="8" fill="#b9b2a2"/>';
    let towerCren = "";
    for (let x = 160; x < 240; x += 12) towerCren += '<rect x="' + x + '" y="26" width="7" height="9" fill="#c7c0b0"/>';
    let shut = "";
    [150, 176, 222, 248].forEach(x => shut += '<rect x="' + x + '" y="176" width="14" height="20" fill="#2c3440"/><rect x="' + (x - 3) + '" y="176" width="3" height="20" fill="#2f5a3b"/><rect x="' + (x + 14) + '" y="176" width="3" height="20" fill="#2f5a3b"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#je)"/>' +
      '<g class="cld"><ellipse cx="60" cy="40" rx="50" ry="10" fill="#fff" opacity=".35"/><ellipse cx="90" cy="34" rx="30" ry="9" fill="#fff" opacity=".35"/></g>' +
      /* side Gothic wings */
      '<rect x="0" y="92" width="132" height="130" fill="#b9b2a2"/>' + '<rect x="272" y="92" width="128" height="130" fill="#b9b2a2"/>' + cren + wins +
      /* central tower */
      '<rect x="156" y="34" width="88" height="188" fill="#c7c0b0"/>' + towerCren +
      '<rect x="150" y="18" width="8" height="30" fill="#c7c0b0"/><path d="M150 18l4-10 4 10z" fill="#c7c0b0"/>' +
      '<rect x="242" y="18" width="8" height="30" fill="#c7c0b0"/><path d="M242 18l4-10 4 10z" fill="#c7c0b0"/>' +
      '<path d="M182 92v-24l18-20 18 20v24z" fill="#2c3440"/><path d="M200 48v44M182 72h36" stroke="#c7c0b0" stroke-width="2"/>' +
      '<path d="M186 130v-14l14-14 14 14v14z" fill="#2c3440"/>' +
      /* the white wooden Academy, front and center */
      '<path d="M128 166l72-26 72 26z" fill="#3f4a55"/>' +
      '<rect x="134" y="166" width="132" height="56" fill="#f4f1ea"/>' + shut +
      '<rect x="192" y="190" width="16" height="32" fill="#3a2a1e"/><path d="M188 190h24l-12-8z" fill="#f4f1ea" stroke="#c9c3b6"/>' +
      /* cupola with its bell */
      '<rect x="188" y="120" width="24" height="22" fill="#f4f1ea" stroke="#c9c3b6"/><path d="M184 120l16-14 16 14z" fill="#3f4a55"/><path d="M200 106v-10" stroke="#3f4a55" stroke-width="2"/>' +
      '<rect x="192" y="124" width="16" height="14" fill="#2c3440"/>' +
      '<g class="swy"><path d="M200 125l-5 10h10z" fill="' + GOLD + '"/><circle cx="200" cy="136" r="1.6" fill="' + GOLD + '"/></g>' +
      /* lawn, path, fence */
      '<rect x="0" y="222" width="400" height="38" fill="#2f5a3b"/><path d="M186 260l8-38h12l8 38z" fill="#d9d2c0"/>' +
      tag("ERASMUS", 18, 250, 22, GOLD, -4),
      sky("je", "#2a3f66", "#e9a46a"));
  }

  /* 4. Little Caribbean on Church Avenue: island flags strung across the street, a steelpan ringing out */
  function caribbean() {
    const flags = [
      /* Jamaica */ '<rect width="34" height="22" fill="#009b3a"/><path d="M0 0l34 22M34 0L0 22" stroke="#fed100" stroke-width="5"/><path d="M0 2v18l14-9zM34 2v18l-14-9z" fill="#000"/>',
      /* St Lucia */ '<rect width="34" height="22" fill="#66ccff"/><path d="M17 3l8 17H9z" fill="#fff"/><path d="M17 6l6.5 14h-13z" fill="#000"/><path d="M17 12l8 8H9z" fill="#fcd116"/>',
      /* Trinidad & Tobago */ '<rect width="34" height="22" fill="#ce1126"/><path d="M0 0h8l26 17v5h-8L0 5z" fill="#fff"/><path d="M2 0h4l28 19v3h-4L0 3V0z" fill="#000"/>',
      /* Haiti */ '<rect width="34" height="11" fill="#00209f"/><rect y="11" width="34" height="11" fill="#d21034"/><rect x="12" y="7" width="10" height="8" fill="#fff"/>',
      /* Guyana */ '<rect width="34" height="22" fill="#009e49"/><path d="M0 0l34 11L0 22z" fill="#fff"/><path d="M0 1.5l30 9.5L0 20.5z" fill="#fcd116"/><path d="M0 0l17 11L0 22z" fill="#000"/><path d="M0 2l14 9L0 20z" fill="#ce1126"/>',
      /* Grenada */ '<rect width="34" height="22" fill="#ce1126"/><rect x="3" y="3" width="28" height="16" fill="#fcd116"/><path d="M3 3l28 16V3zM3 19L31 3v16z" fill="#007a5e"/><path d="M3 3l14 8L31 3zM3 19l14-8 14 8z" fill="#fcd116"/><circle cx="17" cy="11" r="3" fill="#ce1126"/>'
    ];
    let line = '<path d="M0 34q200 30 400 0" stroke="#222" stroke-width="1.5" fill="none"/>';
    flags.forEach((f, i) => {
      const x = 14 + i * 64, t = (x + 17) / 400, y = Math.round(34 + 60 * t * (1 - t)) - 1;
      line += '<g transform="translate(' + x + ' ' + y + ')"><g class="swy' + (i % 3 === 1 ? " swy2" : i % 3 === 2 ? " swy3" : "") + '">' + f + '</g></g>';
    });
    const awn = (x, w, c1, c2) => { let a = ""; for (let i = 0; i < w; i += 14) a += '<rect x="' + (x + i) + '" y="110" width="7" height="16" fill="' + c1 + '"/><rect x="' + (x + i + 7) + '" y="110" width="7" height="16" fill="' + c2 + '"/>'; return a; };
    const shop = (x, w, wall, label, lc) => '<rect x="' + x + '" y="70" width="' + w + '" height="150" fill="' + wall + '"/>' +
      '<rect x="' + (x + 8) + '" y="80" width="' + (w - 16) + '" height="22" fill="#111"/><text x="' + (x + w / 2) + '" y="96" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="1" fill="' + lc + '">' + label + '</text>' +
      '<rect x="' + (x + 10) + '" y="132" width="' + (w - 20) + '" height="56" fill="#ffd27a" opacity=".55"/><rect x="' + (x + w / 2 - 9) + '" y="168" width="18" height="52" fill="#2a1a10"/>';
    const notes = '<g class="nt"><text x="300" y="196" font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="nt nt2"><text x="322" y="190" font-size="16" fill="#fff">&#9835;</text></g><g class="nt nt3"><text x="342" y="198" font-size="18" fill="' + GREEN + '">&#9834;</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jc)"/>' +
      shop(0, 130, "#e8b04a", "ROTI SHOP", "#ffd34d") + awn(0, 130, "#009b3a", "#fed100") +
      shop(134, 132, "#2f8f6b", "PATTIES", "#fff") + awn(134, 132, "#ce1126", "#fff") +
      shop(270, 130, "#c2543a", "BAKERY", "#ffe7a8") + awn(270, 130, "#66ccff", "#fcd116") +
      line +
      /* street sign + sidewalk */
      '<rect x="0" y="220" width="400" height="40" fill="#2a2420"/><path d="M0 222h400" stroke="#4a4038" stroke-width="3"/>' +
      /* steelpan on its stand */
      '<path d="M296 236l10-22M340 236l-10-22" stroke="#555" stroke-width="3"/>' +
      '<ellipse cx="318" cy="212" rx="28" ry="9" fill="#d6d9de" stroke="#7d848c" stroke-width="2"/><ellipse cx="318" cy="210" rx="22" ry="6" fill="#aeb4bb"/>' +
      '<circle cx="310" cy="209" r="3" fill="#8a9099"/><circle cx="324" cy="208" r="3" fill="#8a9099"/><circle cx="318" cy="213" r="2.5" fill="#8a9099"/>' +
      notes +
      tag("LITTLE CARIBBEAN", 16, 252, 22, GOLD, -3),
      sky("jc", "#ffb066", "#ffe2a8"));
  }

  /* 5. Church Avenue and Nostrand Avenue: subway globes, the green signs, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? 6 : 16; x < 230; x += 22) bricks += '<rect x="' + x + '" y="' + y + '" width="20" height="10" fill="#4a2a1e"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jn)"/>' + stars(16) +
      /* rowhouse cornices up top */
      '<rect x="0" y="30" width="260" height="40" fill="#2a1c16"/><rect x="0" y="26" width="260" height="6" fill="#5a3a2a"/>' +
      '<rect x="20" y="40" width="20" height="24" fill="#ffcf6b" opacity=".6"/><rect x="90" y="40" width="20" height="24" fill="#ffcf6b" opacity=".35"/><rect x="170" y="40" width="20" height="24" fill="#ffcf6b" opacity=".6"/>' +
      /* tag wall */
      '<rect x="6" y="70" width="244" height="150" fill="#3a2018"/>' + bricks +
      tag("JOEY BADA$$", 16, 146, 34, GOLD, -7) + tag("FLATBUSH", 52, 196, 26, GREEN, -3) +
      /* subway entrance globes */
      '<rect x="262" y="160" width="4" height="60" fill="#1d2329"/><circle class="flk" cx="264" cy="156" r="7" fill="#3fd17a"/>' +
      '<rect x="262" y="196" width="40" height="24" fill="#1d2329"/><text x="282" y="212" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">SUBWAY</text>' +
      /* streetlight */
      '<rect x="330" y="50" width="5" height="170" fill="#1d2329"/><path d="M332 52h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk flk2" d="M348 56h24l-6 8h-12z" fill="#ffe7a8"/><g opacity=".14"><path class="flk flk2" d="M348 64h24l26 156h-80z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="292" y="86" width="84" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="334" y="99" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Church Av</text>' +
      '<rect x="288" y="108" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="334" y="121" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Nostrand Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("jn", "#0d1220", "#3a2440"));
  }

  window.SCENES = { train, kings, erasmus, caribbean, corner };
})();
