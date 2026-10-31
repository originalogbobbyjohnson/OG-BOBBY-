/* Brownsville opening scenes for the Thirstin Howl the 3rd game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes neon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.25}96%{opacity:1}}' +
    '.neon{animation:neon 3.4s infinite}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.55}50%{transform:translateX(14px);opacity:.95}}' +
    '.shim{animation:shim 2.4s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}' +
    '.bob{animation:bob 1.8s ease-in-out infinite}.bob2{animation-delay:.6s}.bob3{animation-delay:1.1s}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}' +
    '@keyframes bus{from{transform:translateX(-200px)}to{transform:translateX(560px)}}' +
    '.bus{animation:bus 9s linear infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}' +
    '.sway{transform-box:fill-box;transform-origin:50% 0;animation:sway 3s ease-in-out infinite}.sway2{animation-delay:1.4s}' +
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
  const YEL = "#ffd23f", RED = "#e2333f", BLU = "#3a7bd5", GRN = "#1f6b45";
  /* a plaid pattern (navy, red, yellow, green) used for shirts and hats, no logos */
  const plaid = (id, base, a, b) =>
    '<pattern id="' + id + '" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="' + base + '"/>' +
    '<rect x="0" y="5" width="16" height="5" fill="' + a + '" opacity=".75"/><rect x="5" y="0" width="5" height="16" fill="' + a + '" opacity=".6"/>' +
    '<rect x="0" y="13" width="16" height="1.2" fill="' + b + '"/><rect x="13" y="0" width="1.2" height="16" fill="' + b + '"/></pattern>';

  /* 1. The 3 train pulling into Rockaway Av, up on the el over Livonia Avenue */
  function train() {
    let girders = "";
    for (let x = 0; x <= W; x += 50) girders += '<rect x="' + (x - 3) + '" y="58" width="6" height="150" fill="#4a4f57"/><path d="M' + (x + 3) + ' 196 L' + (x + 47) + ' 214 M' + (x + 47) + ' 196 L' + (x + 3) + ' 214" stroke="#4a4f57" stroke-width="3"/>';
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#ffe9c2" opacity=".85"/>';
    let towers = "";
    [[6, 70, 60], [330, 60, 64]].forEach(([x, y, w]) => {
      towers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (120 - y + 70) + '" fill="#5a3326"/>';
      for (let yy = y + 8; yy < 180; yy += 12) for (let xx = x + 6; xx < x + w - 6; xx += 12) towers += '<rect x="' + xx + '" y="' + yy + '" width="6" height="6" fill="' + (((xx + yy) % 5) ? "#2a1a14" : "#ffd98a") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(14) +
      '<circle cx="70" cy="34" r="14" fill="#ffe1a8" opacity=".9"/>' + towers +
      '<rect x="0" y="50" width="400" height="10" fill="#4a4f57"/>' + girders +
      /* station sign */
      '<rect x="80" y="66" width="240" height="34" rx="4" fill="#111"/>' +
      '<rect x="80" y="66" width="240" height="4" fill="#fff"/>' +
      '<text x="94" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Rockaway Av</text>' +
      bullet(296, 84, "3", "#ee352e") +
      /* train slides in and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="#ee352e"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#ffe9c2" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(296, 136, "3", "#ee352e") +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1c1414"/>' +
      '<text x="200" y="210" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="4" fill="#8d939b">LIVONIA AV · BROWNSVILLE</text>' +
      tag("LO-LIFE", 22, 244, 30, YEL, -4) + tag("BVILLE", 286, 246, 28, RED, -8),
      sky("g1", "#1a1030", "#c0603a"));
  }

  /* 2. Betsy Head Park: the 1936 pool and its red-brick bathhouse on a summer day */
  function pool() {
    let wins = "";
    for (let x = 60; x < 340; x += 22) if (x < 170 || x > 230) wins += '<rect x="' + x + '" y="88" width="12" height="40" rx="2" fill="#a9d7e8" stroke="#e9dcc0" stroke-width="2"/>';
    let tall = "";
    for (let x = 178; x < 226; x += 12) tall += '<rect x="' + x + '" y="56" width="8" height="72" fill="#a9d7e8" stroke="#e9dcc0" stroke-width="1.5"/>';
    let lanes = "";
    for (let y = 168; y < 250; y += 18) lanes += '<path d="M10 ' + y + 'h380" stroke="#e8f7ff" stroke-width="2" stroke-dasharray="6 6" opacity=".7"/>';
    const head = (x, y, c, k) => '<g class="bob ' + k + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + c + '"/><ellipse cx="' + x + '" cy="' + (y + 6) + '" rx="10" ry="3" fill="#fff" opacity=".5"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="340" cy="34" r="18" fill="#fff4b8"/>' +
      /* trees behind */
      '<circle cx="24" cy="110" r="30" fill="#2f7a3e"/><circle cx="380" cy="104" r="32" fill="#2f7a3e"/><circle cx="352" cy="118" r="22" fill="#3c8f4a"/>' +
      /* bathhouse: red brick with pale stone trim, taller center block */
      '<rect x="40" y="80" width="320" height="64" fill="#a8553a"/>' +
      '<rect x="40" y="76" width="320" height="6" fill="#e9dcc0"/>' +
      '<rect x="166" y="44" width="68" height="100" fill="#9a4a32"/><rect x="166" y="40" width="68" height="6" fill="#e9dcc0"/>' +
      wins + tall +
      '<rect x="40" y="136" width="320" height="8" fill="#e9dcc0"/>' +
      /* flag on the center block */
      '<rect x="199" y="12" width="2" height="30" fill="#333"/><path class="flag" d="M201 13h22v13h-22z" fill="' + RED + '"/><path class="flag" d="M201 17h22M201 21h22" stroke="#fff" stroke-width="1.5"/>' +
      /* sign */
      '<rect x="86" y="58" width="72" height="16" rx="2" fill="' + GRN + '"/><text x="122" y="70" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="1" fill="#fff">BETSY HEAD</text>' +
      '<rect x="242" y="58" width="72" height="16" rx="2" fill="' + GRN + '"/><text x="278" y="70" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="1" fill="#fff">POOL · 1936</text>' +
      /* pool deck + water */
      '<rect x="0" y="144" width="400" height="16" fill="#e7e2d6"/>' +
      '<rect x="0" y="158" width="400" height="102" fill="#2fa4dc"/>' + lanes +
      '<g class="shim"><path d="M30 186q20-6 40 0t40 0M190 222q20-6 40 0t40 0M300 178q16-5 32 0" stroke="#bfeaff" stroke-width="2" fill="none"/></g>' +
      '<g class="shim shim2"><path d="M110 208q20-6 40 0t40 0M260 240q20-6 40 0" stroke="#bfeaff" stroke-width="2" fill="none"/></g>' +
      head(90, 196, "#3b2418", "") + head(232, 178, "#ffd23f", "bob2") + head(320, 214, "#e2333f", "bob3") +
      /* lifeguard chair */
      '<path d="M18 160l8-40h14l8 40" stroke="#fff" stroke-width="3" fill="none"/><rect x="22" y="112" width="22" height="6" fill="' + RED + '"/>',
      sky("g2", "#4fb3ff", "#bfe6ff"));
  }

  /* 3. Pitkin Avenue: the old theater's cream terracotta front and the shopping strip, a bus rolling by */
  function pitkin() {
    let orn = "";
    for (let i = 0; i < 6; i++) orn += '<circle cx="' + (162 + i * 15.2) + '" cy="72" r="3" fill="#c9a24a"/>';
    const shop = (x, w, awn, a2, label) => {
      let stripes = "";
      for (let i = 0; i < w; i += 12) stripes += '<rect x="' + (x + i) + '" y="132" width="6" height="16" fill="' + a2 + '"/>';
      return '<rect x="' + x + '" y="96" width="' + w + '" height="104" fill="#6a3a2a"/>' +
        '<rect x="' + (x + 4) + '" y="102" width="' + (w - 8) + '" height="24" fill="#2a1a14"/>' +
        '<text class="neon" x="' + (x + w / 2) + '" y="119" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" letter-spacing="1" fill="' + YEL + '">' + label + '</text>' +
        '<rect x="' + x + '" y="132" width="' + w + '" height="16" fill="' + awn + '"/>' + stripes +
        '<rect x="' + (x + 6) + '" y="152" width="' + (w - 12) + '" height="48" fill="#ffe9c2" opacity=".75"/>';
    };
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(16) +
      shop(0, 70, RED, "#fff", "KICKS") + shop(72, 76, BLU, "#fff", "FASHION") +
      shop(254, 74, GRN, "#fff", "99 CENTS") + shop(330, 70, YEL, RED, "BAKERY") +
      /* the theater front: cream terracotta, arched window, ornate crest */
      '<path d="M150 200V70q0-30 50-40q50 10 50 40v130z" fill="#e9dcc0" stroke="#b9a37a" stroke-width="2"/>' +
      '<path d="M200 30l-10 -14h20z" fill="#c9a24a"/>' + orn +
      '<path d="M170 140V96q30-26 60 0v44z" fill="#2a1a14" stroke="#c9a24a" stroke-width="3"/>' +
      '<path d="M200 98v42M170 118h60" stroke="#c9a24a" stroke-width="2"/>' +
      '<rect x="156" y="146" width="88" height="18" fill="#2a1a14"/>' +
      '<text class="neon" x="200" y="160" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="12" letter-spacing="2" fill="#ff8a5b">PITKIN AV</text>' +
      '<rect x="164" y="168" width="72" height="32" fill="#3b2418"/><path d="M182 168v32M200 168v32M218 168v32" stroke="#c9a24a" stroke-width="1.5"/>' +
      /* sidewalk + street */
      '<rect x="0" y="200" width="400" height="12" fill="#8d8a84"/>' +
      '<rect x="0" y="212" width="400" height="48" fill="#22201e"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      /* city bus rolling down Pitkin */
      '<g class="bus"><rect x="0" y="206" width="130" height="34" rx="5" fill="#e8eef4" stroke="#4a4f57" stroke-width="2"/>' +
      '<rect x="0" y="228" width="130" height="5" fill="' + BLU + '"/>' +
      '<rect x="8" y="211" width="20" height="12" rx="2" fill="#2a3a4a"/><rect x="34" y="211" width="20" height="12" rx="2" fill="#2a3a4a"/><rect x="60" y="211" width="20" height="12" rx="2" fill="#2a3a4a"/><rect x="86" y="211" width="20" height="12" rx="2" fill="#2a3a4a"/>' +
      '<rect x="110" y="211" width="16" height="12" rx="2" fill="#ffd98a"/><text x="118" y="221" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7" fill="#111">B14</text>' +
      '<circle cx="26" cy="242" r="6" fill="#111"/><circle cx="104" cy="242" r="6" fill="#111"/></g>',
      sky("g3", "#140f24", "#4a2d4f"));
  }

  /* 4. The Lo-Life closet: plaid shirts on the rack, stacks of collared shirts, a plaid bucket hat */
  function closet() {
    const shirt = (x, fill, k) =>
      '<g class="sway ' + k + '"><path d="M' + (x + 22) + ' 52q0-8 6-8" stroke="#c9ced6" stroke-width="2" fill="none"/>' +
      '<path d="M' + (x + 4) + ' 64l14-10h20l14 10l-6 14h-6v62h-34v-62h-6z" fill="' + fill + '" stroke="#111" stroke-width="2"/>' +
      '<path d="M' + (x + 18) + ' 54l10 10 10-10" fill="#f7f3ea" stroke="#111" stroke-width="1.5"/>' +
      '<path d="M' + (x + 28) + ' 64v26" stroke="#111" stroke-width="1"/><circle cx="' + (x + 28) + '" cy="72" r="1.5" fill="#f7f3ea"/><circle cx="' + (x + 28) + '" cy="82" r="1.5" fill="#f7f3ea"/></g>';
    const fold = (x, y, c, s) => '<rect x="' + x + '" y="' + y + '" width="60" height="14" rx="2" fill="' + c + '" stroke="#111" stroke-width="1.5"/>' +
      '<path d="M' + (x + 24) + ' ' + y + 'l6 7 6-7" fill="' + s + '" stroke="#111" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="#1b1410"/>' +
      /* wood wall */
      (function () { let b = ""; for (let x = 0; x < 400; x += 26) b += '<rect x="' + x + '" y="0" width="24" height="200" fill="' + (x % 52 ? "#3b2418" : "#432a1c") + '"/>'; return b; })() +
      /* banner */
      '<g class="sway sway2"><path d="M120 8h160v28l-80 10-80-10z" fill="#0e1630" stroke="' + YEL + '" stroke-width="2"/>' +
      '<text x="200" y="28" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" letter-spacing="3" fill="' + YEL + '">LO-LIFE · 1988</text></g>' +
      /* the rack */
      '<path d="M14 46h250" stroke="#c9ced6" stroke-width="4"/>' +
      shirt(14, "url(#p1)", "") + shirt(74, "url(#p2)", "sway2") + shirt(134, YEL, "") + shirt(194, "url(#p3)", "sway2") +
      /* the folded stack */
      '<rect x="280" y="60" width="104" height="140" fill="#2a1a14" stroke="#111" stroke-width="2"/>' +
      fold(302, 176, RED, "#fff") + fold(302, 160, BLU, "#fff") + fold(302, 144, YEL, "#fff") + fold(302, 128, GRN, YEL) + fold(302, 112, "#f7f3ea", RED) +
      '<path d="M296 92q0-14 36-14t36 14z" fill="url(#p2)" stroke="#111" stroke-width="2"/><path d="M286 94q46 8 92 0" stroke="#111" stroke-width="3" fill="none"/>' +
      /* floor */
      '<rect x="0" y="200" width="400" height="60" fill="#2a1a14"/><path d="M0 200h400" stroke="#111" stroke-width="3"/>' +
      tag("LO HEADS", 24, 246, 30, YEL, -4) + tag("SKILLZ", 268, 246, 28, RED, -7),
      plaid("p1", "#1a2f6b", RED, YEL) + plaid("p2", RED, "#0e1630", YEL) + plaid("p3", GRN, "#0e1630", YEL));
  }

  /* 5. Chester Street and Pitkin Avenue: street signs, streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 60; y < 220; y += 12) for (let x = (y / 12) % 2 ? 10 : 20; x < 222; x += 30) bricks += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#7a3a26"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(20) +
      '<rect x="20" y="60" width="230" height="160" fill="#5a2a1c"/>' + bricks +
      tag("THIRSTIN", 32, 130, 34, YEL, -7) + tag("LO-LIFE", 48, 178, 28, "#5ad1ff", -3) + tag("3RD", 186, 206, 22, RED, -9) +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="258" y="88" width="88" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Chester St</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Pitkin Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0e1630", "#3a2a4f"));
  }

  window.SCENES = { train, pool, pitkin, closet, corner };
})();
