(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes leaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,240px) rotate(300deg);opacity:.9}}' +
    '.leaf{animation:leaf 6s linear infinite}.l2{animation-delay:-1.5s}.l3{animation-delay:-3s}.l4{animation-delay:-4.5s}' +
    '@keyframes snow{0%{transform:translateY(-20px)}100%{transform:translateY(270px)}}' +
    '.snw{animation:snow 7s linear infinite}.sn2{animation-delay:-2.3s}.sn3{animation-delay:-4.6s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}' +
    '.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes drive{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.drv{animation:drive 7s linear infinite}' +
    '@keyframes sail{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.sail{animation:sail 18s linear infinite;animation-delay:-8s}' +
    '@keyframes fly{0%{transform:translate(-80px,20px)}100%{transform:translate(480px,-30px)}}.fly{animation:fly 9s linear infinite}' +
    '@keyframes win{0%,60%,100%{opacity:.95}65%,90%{opacity:.15}}' +
    '.win{animation:win 5s infinite}.w2{animation-delay:-1.7s}.w3{animation-delay:-3.3s}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}' +
    '.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes wave{0%,100%{transform:skewX(0)}50%{transform:skewX(-10deg)}}.wav{animation:wave 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spn{animation:spin 12s linear infinite;transform-box:view-box}.spf{animation:spin 2s linear infinite;transform-box:view-box}' +
    '@keyframes glow{0%,100%{opacity:.35}50%{opacity:.85}}.glw{animation:glow 3s ease-in-out infinite}.g2{animation-delay:-1.5s}' +
    '@keyframes beam{0%{transform:translate(0,0);opacity:0}20%{opacity:.8}100%{transform:translate(40px,140px);opacity:0}}.dst{animation:beam 6s linear infinite}.d2{animation-delay:-2s}.d3{animation-delay:-4s}' +
    '@keyframes swing{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.swg{animation:swing 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:center top}' +
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
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const brick = (x, y, w, h, base, mortar) => { let b = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + base + '"/>'; for (let yy = y + 2; yy < y + h; yy += 12) for (let xx = x + ((yy - y) / 12 % 2 ? -6 : 4); xx < x + w - 4; xx += 30) { const x0 = Math.max(x, xx), x1 = Math.min(x + w, xx + 28); if (x1 > x0) b += '<rect x="' + x0 + '" y="' + yy + '" width="' + (x1 - x0) + '" height="10" fill="' + mortar + '"/>'; } return b; };
  const signs = (a, b) =>
    '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
    '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
    '<rect x="252" y="88" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="302" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">' + a + '</text>' +
    '<rect x="252" y="110" width="100" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="302" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">' + b + '</text>' +
    '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>';
  const wall = (base, alt) => { let b = '<rect x="16" y="60" width="232" height="160" fill="' + base + '"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 18 : 28; x < 219; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="' + alt + '"/>'; return b; };
  /* an SIR R211S-style car body, silver with the blue band */
  const sirTrain = (y) => {
    let w = ""; for (let x = 22; x < 290; x += 44) w += '<rect x="' + x + '" y="' + (y + 10) + '" width="28" height="20" rx="3" fill="#fff1b8" opacity=".9"/>';
    return '<g class="anim-train"><rect x="8" y="' + y + '" width="300" height="56" rx="8" fill="#b9bfc9" stroke="#5b6270" stroke-width="2"/>' +
      '<rect x="8" y="' + (y + 36) + '" width="300" height="6" fill="#0039a6"/>' + w + '<circle cx="300" cy="' + (y + 48) + '" r="4" fill="#fff6c2"/>' + sir(262, y + 48) + '</g>';
  };
  /* Park Hill and around Staten Island: opening scenes for Cappadonna's game */
  const W1 = "#ffffff", GLD = "#e8b84a", ICE = "#9fd8ff";

  /* 1. Grasmere in the snow (Winter Warz): the SIR pulling into the open cut, island platform, the Clove Rd bridge overhead */
  function station() {
    let flakes = ""; for (let i = 0; i < 26; i++) flakes += '<circle class="snw ' + ["", "sn2", "sn3"][i % 3] + '" cx="' + ((i * 61) % 400) + '" cy="' + ((i * 37) % 120) + '" r="' + (i % 2 ? 1.6 : 2.4) + '" fill="#fff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' +
      /* cut walls with snow on top */
      '<rect x="0" y="40" width="400" height="18" fill="#f4f7fb"/><rect x="0" y="58" width="400" height="34" fill="#7a7468"/>' +
      '<path d="M0 66h400M0 76h400M0 86h400" stroke="#625c52" stroke-width="1.5"/>' +
      /* the Clove Rd bridge over the cut */
      '<rect x="0" y="20" width="400" height="14" fill="#5a5f68"/><rect x="0" y="16" width="400" height="5" fill="#f4f7fb"/><path d="M0 34h400" stroke="#2f333a" stroke-width="3"/>' +
      '<rect x="110" y="40" width="180" height="32" rx="4" fill="#111"/><rect x="110" y="40" width="180" height="4" fill="#fff"/>' +
      '<text x="124" y="64" ' + FONT + ' font-size="16" fill="#fff">Grasmere</text>' + sir(262, 57) +
      sirTrain(88) +
      '<rect x="0" y="144" width="400" height="8" fill="#eab308"/><rect x="0" y="152" width="400" height="16" fill="#8a8f98"/><rect x="0" y="150" width="400" height="3" fill="#fff"/>' +
      '<rect x="0" y="168" width="400" height="92" fill="#3a3a44"/>' +
      '<path d="M0 196h400M0 202h400M0 228h400M0 234h400" stroke="#9a9aa8" stroke-width="2"/>' +
      (function () { let t = ""; for (let x = 0; x < 400; x += 14) t += '<rect x="' + x + '" y="194" width="6" height="10" fill="#4a3a2c"/><rect x="' + (x + 7) + '" y="226" width="6" height="10" fill="#4a3a2c"/>'; return t; })() +
      flakes + tag("WINTER WARZ", 14, 252, 24, W1, -3) + tag("CAPPACHINO", 262, 254, 20, GLD, -6),
      sky("g1", "#8a98aa", "#d6dde6"));
  }

  /* 2. Silver Lake Park: the reservoir under the hill, the stone path and old iron lamps, fall leaves coming down */
  function silverlake() {
    let leaves = ""; [[60, ""], [150, "l2"], [240, "l3"], [330, "l4"], [110, "l3"], [290, "l2"]].forEach((l, i) => leaves += '<ellipse class="leaf ' + l[1] + '" cx="' + l[0] + '" cy="10" rx="4" ry="2.4" fill="' + ["#e0782a", "#d4a12a", "#b8401e"][i % 3] + '"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="320" cy="50" r="18" fill="#fff0c8"/>' +
      /* far ridge with houses */
      '<path d="M0 118q100-40 200-24t200-6v40H0z" fill="#5a6e4a"/>' +
      '<rect x="60" y="96" width="16" height="12" fill="#d8cbb0"/><path d="M58 97l10-8 10 8z" fill="#7a4a3a"/><rect x="250" y="92" width="18" height="12" fill="#e6dccb"/><path d="M248 93l11-8 11 8z" fill="#5a3a3a"/>' +
      /* the lake */
      '<path d="M0 128h400v52H0z" fill="#5a8eb6"/>' +
      '<path class="shim" d="M40 140h60M200 150h80M120 166h50" stroke="#e8f4fb" stroke-width="2"/><path class="shim shim2" d="M300 138h50M20 160h40" stroke="#e8f4fb" stroke-width="2"/>' +
      '<path d="M0 132q100 6 200 0t200 0" stroke="#c9b48a" stroke-width="3" fill="none" opacity=".6"/>' +
      /* trees in fall color */
      '<rect x="30" y="120" width="7" height="70" fill="#4a3424"/><circle cx="34" cy="112" r="28" fill="#d4762a"/><circle cx="54" cy="128" r="18" fill="#e0a02a"/>' +
      '<rect x="356" y="116" width="7" height="74" fill="#4a3424"/><circle cx="360" cy="106" r="30" fill="#b8481e"/><circle cx="336" cy="124" r="16" fill="#d4762a"/>' +
      /* the stone path and an iron lamp */
      '<path d="M0 180h400v80H0z" fill="#5c8a3a"/><path d="M0 214q200-26 400 0v18q-200-26-400 0z" fill="#b8ad98"/>' +
      '<rect x="196" y="140" width="4" height="70" fill="#1d1d24"/><rect x="190" y="128" width="16" height="14" rx="2" fill="#1d1d24"/><rect class="flk" x="193" y="131" width="10" height="9" fill="#ffe7a8"/>' +
      leaves + tag("SILVER LAKE", 14, 252, 24, W1, -3) + tag("THE PILLAGE", 252, 254, 20, GLD, -5),
      sky("g2", "#7ab0dc", "#f2dcb4"));
  }

  /* 3. Mount Loretto: the old brownstone Prince's Bay lighthouse on the bluff over Raritan Bay, the lamp glowing, a sailboat going by */
  function lighthouse() {
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(10) +
      /* the bay */
      '<rect x="0" y="150" width="400" height="60" fill="#2f5a7e"/>' +
      '<path class="shim" d="M20 166h70M220 176h90M120 194h60" stroke="#c9e2f2" stroke-width="2"/>' +
      '<g class="sail"><g class="bob"><path d="M20 176h44l-6 8H26z" fill="#f2f2f2"/><path d="M42 174V138l20 34z" fill="#fff"/><path d="M40 174V146l-14 26z" fill="' + GLD + '"/></g></g>' +
      /* the bluff */
      '<path d="M180 150q20-30 80-40h140v150H170z" fill="#8a6a46"/><path d="M190 140q30-26 80-30h130v20H200z" fill="#5c8a3a"/>' +
      /* the brownstone tower and the keeper's house */
      '<rect x="300" y="78" width="70" height="44" fill="#a4553a"/><path d="M296 80l39-22 39 22z" fill="#4a3a32"/><rect x="312" y="92" width="12" height="14" fill="#2c3a4a" stroke="#f4efe2" stroke-width="2"/><rect x="346" y="92" width="12" height="14" fill="#2c3a4a" stroke="#f4efe2" stroke-width="2"/>' +
      '<path d="M262 120l6-70h20l6 70z" fill="#9a5038" stroke="#5a2a1a" stroke-width="2"/>' +
      '<path d="M266 70h24M264 92h28" stroke="#7a3a26" stroke-width="2"/>' +
      '<rect x="264" y="40" width="28" height="12" fill="#2a2a32"/><rect class="flk" x="268" y="42" width="20" height="9" fill="#ffe08a"/><path d="M262 40l16-12 16 12z" fill="#2a2a32"/>' +
      '<path class="glw" d="M268 46L120 20v52z" fill="#ffe8a8" opacity=".4"/>' +
      tag("MOUNT LORETTO", 14, 252, 22, W1, -3) + tag("WU-TANG", 290, 250, 22, GLD, -6),
      sky("g3", "#1a2440", "#c7887a"));
  }

  /* 4. Victory Blvd at night: a yellow cab climbing past Grymes Hill, the rooftop light glowing, headlights on the wet street */
  function cab() {
    let bld = ""; [[10, 90, 70], [96, 110, 50], [176, 80, 80], [270, 120, 60], [340, 100, 60]].forEach((b, i) => {
      bld += '<rect x="' + b[0] + '" y="' + b[1] + '" width="' + b[2] + '" height="' + (190 - b[1]) + '" fill="' + ["#3a3346", "#2e2a3a", "#433a4e"][i % 3] + '"/>';
      for (let y = b[1] + 10; y < 180; y += 16) for (let x = b[0] + 8; x < b[0] + b[2] - 8; x += 16) bld += '<rect class="' + (((x + y) / 8) % 3 < 1 ? "win w2" : "") + '" x="' + x + '" y="' + y + '" width="7" height="8" fill="' + (((x * 3 + y) % 5) < 3 ? "#ffd98a" : "#1d1a24") + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(18) +
      '<circle cx="60" cy="40" r="12" fill="#f4ecff"/>' + bld +
      '<rect x="0" y="190" width="400" height="70" fill="#1c1c24"/><path d="M0 228h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<path d="M0 248h400" stroke="#3a3a48" stroke-width="10" opacity=".6"/>' +
      '<g class="drv">' +
        '<path d="M0 214v-14q4-8 14-10l12-12h44l14 12q12 2 14 10v14z" fill="#f4c20d" stroke="#3a2a00" stroke-width="2"/>' +
        '<path d="M30 190l8-9h26l8 9z" fill="#9fc8e8"/><path d="M52 181v9" stroke="#3a2a00" stroke-width="2"/>' +
        '<rect x="38" y="170" width="24" height="8" rx="2" fill="#fff6c8" class="flk"/>' +
        '<path d="M2 202h104" stroke="#111" stroke-width="2" stroke-dasharray="4 4"/>' +
        '<circle cx="24" cy="216" r="9" fill="#111"/><circle cx="24" cy="216" r="4" fill="#bbb"/><circle cx="84" cy="216" r="9" fill="#111"/><circle cx="84" cy="216" r="4" fill="#bbb"/>' +
        '<circle cx="106" cy="204" r="3" fill="#fff6c2"/><path d="M108 204l60-8v20z" fill="#fff6c2" opacity=".25"/>' +
      '</g>' +
      tag("VICTORY BLVD", 14, 252, 22, W1, -3) + tag("CAPPADONNA", 250, 254, 22, GLD, -5),
      sky("g4", "#0e0c22", "#4a2a4a"));
  }

  /* 5. Park Hill Ave and Vanderbilt Ave: green signs, the tag wall, a white drip */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#f4ecff"/>' + wall("#33363e", "#3e424c") +
      tag("CAPPADONNA", 26, 120, 28, W1, -7) + tag("CAPPACHINO", 40, 170, 26, GLD, -3) + tag("THE PILLAGE", 46, 206, 22, ICE, -2) +
      '<rect class="drp" x="96" y="126" width="3" height="8" fill="#fff"/><rect class="drp" x="170" y="112" width="3" height="8" fill="#fff" style="animation-delay:-1.1s"/>' +
      signs("Park Hill Ave", "Vanderbilt Ave"),
      sky("g5", "#0d0a22", "#2a2e40"));
  }

  window.SCENES = { station, silverlake, lighthouse, cab, corner };
})();
