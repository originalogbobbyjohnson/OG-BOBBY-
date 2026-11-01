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
  /* East New York: opening scenes for Masta Killa's game */
  const W1 = "#ffffff", JADE = "#3ccf8e", GLD = "#e8b84a", RED3 = "#ee352e";

  /* 1. Pennsylvania Av: the 3 train pulling in up on the el over Livonia Av, the steel trestle, the street below */
  function station() {
    let w = ""; for (let x = 22; x < 290; x += 44) w += '<rect x="' + x + '" y="94" width="28" height="22" rx="3" fill="#fff1b8" opacity=".9"/>';
    let legs = ""; for (let x = 20; x < 400; x += 64) legs += '<rect x="' + x + '" y="150" width="10" height="66" fill="#3a4a3a"/><path d="M' + (x + 5) + ' 158l20 22M' + (x + 5) + ' 158l-20 22" stroke="#3a4a3a" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(12) +
      '<circle cx="350" cy="40" r="14" fill="#ffd9a8"/>' +
      /* platform canopy */
      '<rect x="0" y="18" width="400" height="8" fill="#4a5a4a"/><rect x="60" y="26" width="5" height="58" fill="#4a5a4a"/><rect x="334" y="26" width="5" height="58" fill="#4a5a4a"/>' +
      '<rect x="96" y="36" width="208" height="32" rx="4" fill="#111"/><rect x="96" y="36" width="208" height="4" fill="#fff"/>' +
      '<text x="108" y="59" ' + FONT + ' font-size="15" fill="#fff">Pennsylvania Av</text>' + bullet(282, 53, "3", RED3) +
      '<g class="anim-train"><rect x="8" y="84" width="300" height="56" rx="8" fill="#c9d0d8" stroke="#5b6270" stroke-width="2"/>' + w +
      '<rect x="8" y="122" width="300" height="5" fill="#7a8088"/>' + bullet(270, 132, "3", RED3) + '<circle cx="300" cy="132" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="140" width="400" height="8" fill="#eab308"/><rect x="0" y="148" width="400" height="10" fill="#4a5a4a"/>' + legs +
      /* Livonia Av under the el */
      '<rect x="0" y="216" width="400" height="44" fill="#1d1d24"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="40" y="186" width="70" height="30" fill="#6a3a2a"/><rect x="48" y="194" width="54" height="14" fill="#ffd98a" class="flk"/><rect x="290" y="180" width="80" height="36" fill="#5a4a3a"/><rect x="298" y="188" width="64" height="16" fill="#ffd98a"/>' +
      tag("EAST NEW YORK", 14, 252, 22, W1, -3) + tag("NO SAID DATE", 254, 254, 20, JADE, -5),
      sky("g1", "#141a2e", "#b0687a"));
  }

  /* 2. The Empire State Dairy building on Atlantic Av: red brick with the old blue-and-cream tile murals of cows in the mountains, a cloud drifting */
  function dairy() {
    const panel = (x) =>
      '<rect x="' + x + '" y="70" width="84" height="64" fill="#f4ecd4" stroke="#2c4a7a" stroke-width="3"/>' +
      '<path d="M' + (x + 3) + ' 112l18-24 14 14 16-22 30 32v18h-78z" fill="#5a86b8"/><path d="M' + (x + 30) + ' 82l6 6M' + (x + 51) + ' 80l5 7" stroke="#fff" stroke-width="3"/>' +
      '<rect x="' + (x + 3) + '" y="112" width="78" height="19" fill="#7aa85a"/>' +
      '<ellipse cx="' + (x + 30) + '" cy="118" rx="10" ry="5" fill="#8a5a3a"/><rect x="' + (x + 22) + '" y="120" width="2" height="6" fill="#3a2418"/><rect x="' + (x + 36) + '" y="120" width="2" height="6" fill="#3a2418"/><circle cx="' + (x + 40) + '" cy="115" r="3" fill="#8a5a3a"/>' +
      '<ellipse cx="' + (x + 58) + '" cy="122" rx="9" ry="4.5" fill="#f4f0e8" stroke="#3a2418" stroke-width=".8"/><rect x="' + (x + 51) + '" y="124" width="2" height="5" fill="#3a2418"/><rect x="' + (x + 63) + '" y="124" width="2" height="5" fill="#3a2418"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<g class="sail" style="animation-duration:30s"><ellipse cx="60" cy="34" rx="34" ry="10" fill="#fff" opacity=".85"/><ellipse cx="80" cy="28" rx="20" ry="9" fill="#fff" opacity=".85"/></g>' +
      brick(20, 50, 360, 160, "#9a4a32", "#a85a3e") +
      '<rect x="20" y="44" width="360" height="10" fill="#d8cbb0"/><rect x="20" y="140" width="360" height="6" fill="#d8cbb0"/>' +
      panel(40) + panel(158) + panel(276) +
      '<rect x="60" y="156" width="40" height="44" fill="#2c3a4a" stroke="#d8cbb0" stroke-width="3"/><rect x="180" y="156" width="40" height="44" fill="#2c3a4a" stroke="#d8cbb0" stroke-width="3"/><rect x="300" y="156" width="40" height="44" fill="#2c3a4a" stroke="#d8cbb0" stroke-width="3"/>' +
      '<rect class="win" x="184" y="160" width="32" height="18" fill="#ffd98a" opacity=".7"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2a2a32"/><rect x="0" y="210" width="400" height="6" fill="#8a8a92"/>' +
      tag("ATLANTIC AV", 14, 252, 22, W1, -3) + tag("MADE IN BROOKLYN", 214, 254, 18, GLD, -4),
      sky("g2", "#6ea4d4", "#e6d6b8"));
  }

  /* 3. The 36 chambers: a kung fu hall, a wooden dummy, scrolls on the wall, a heavy bag swinging, lanterns glowing */
  function chamber() {
    return svg(
      '<rect width="400" height="260" fill="#2a1a14"/>' +
      '<rect x="0" y="0" width="400" height="190" fill="url(#g3)"/>' +
      '<path d="M0 30h400" stroke="#5a2a1a" stroke-width="10"/><path d="M60 0v190M200 0v190M340 0v190" stroke="#4a2414" stroke-width="10"/>' +
      /* scrolls */
      '<rect x="86" y="46" width="34" height="90" fill="#f2e6c8" stroke="#8a6a3a" stroke-width="2"/><rect x="82" y="42" width="42" height="6" fill="#5a3a1a"/><rect x="82" y="134" width="42" height="6" fill="#5a3a1a"/>' +
      '<text x="103" y="78" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="22" fill="#1d1d24">36</text><path d="M95 92h16M95 102h16M95 112h12" stroke="#3a2a1a" stroke-width="2"/>' +
      '<rect x="230" y="46" width="34" height="90" fill="#f2e6c8" stroke="#8a6a3a" stroke-width="2"/><rect x="226" y="42" width="42" height="6" fill="#5a3a1a"/><rect x="226" y="134" width="42" height="6" fill="#5a3a1a"/>' +
      '<path d="M247 60l-10 22h20zM247 92v30M238 106h18" stroke="#3a2a1a" stroke-width="2.5" fill="none"/>' +
      /* lanterns */
      '<g class="swg"><path d="M150 30v14" stroke="#1d1d24" stroke-width="2"/><ellipse cx="150" cy="58" rx="12" ry="15" fill="' + RED3 + '"/><ellipse class="glw" cx="150" cy="58" rx="8" ry="11" fill="#ffd27a"/></g>' +
      '<g class="swg" style="animation-delay:-.7s"><path d="M300 30v14" stroke="#1d1d24" stroke-width="2"/><ellipse cx="300" cy="58" rx="12" ry="15" fill="' + RED3 + '"/><ellipse class="glw g2" cx="300" cy="58" rx="8" ry="11" fill="#ffd27a"/></g>' +
      /* the floor */
      '<path d="M0 190h400v70H0z" fill="#8a5a32"/><path d="M0 206h400M0 226h400M0 248h400" stroke="#6a4224" stroke-width="2"/>' +
      /* wooden dummy */
      '<rect x="140" y="110" width="22" height="96" rx="6" fill="#a8743e" stroke="#5a3a1a" stroke-width="2"/><path d="M162 132h22M162 150h18M140 150h-18M150 170l-14 18" stroke="#a8743e" stroke-width="7" stroke-linecap="round"/><rect x="130" y="204" width="42" height="8" fill="#5a3a1a"/>' +
      /* heavy bag */
      '<g class="swg"><path d="M290 30v70" stroke="#1d1d24" stroke-width="2"/><rect x="276" y="100" width="28" height="70" rx="12" fill="' + JADE + '" stroke="#1a5a3a" stroke-width="2"/><rect x="276" y="118" width="28" height="5" fill="#1a5a3a"/></g>' +
      tag("36 CHAMBERS", 14, 252, 24, W1, -3) + tag("HIGH CHIEF", 260, 252, 22, GLD, -6),
      sky("g3", "#5a2a1c", "#7a3a24"));
  }

  /* 4. New Lots Reformed Church: the white 1820s clapboard church with its steeple on New Lots Av, the bell swinging, leaves coming down */
  function church() {
    let leaves = ""; [[50, ""], [140, "l2"], [230, "l3"], [320, "l4"], [370, "l2"]].forEach((l, i) => leaves += '<ellipse class="leaf ' + l[1] + '" cx="' + l[0] + '" cy="10" rx="4" ry="2.4" fill="' + ["#e0782a", "#d4a12a", "#b8401e"][i % 3] + '"/>');
    let clap = ""; for (let y = 116; y < 200; y += 6) clap += '<path d="M140 ' + y + 'h120" stroke="#d8d4c8" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<circle cx="66" cy="50" r="18" fill="#fff0c8"/>' +
      /* body */
      '<rect x="140" y="112" width="120" height="90" fill="#f6f4ee" stroke="#8a8678" stroke-width="2"/>' + clap +
      '<path d="M132 114l68-38 68 38z" fill="#f6f4ee" stroke="#8a8678" stroke-width="2" stroke-linejoin="round"/>' +
      /* steeple */
      '<rect x="186" y="50" width="28" height="40" fill="#f6f4ee" stroke="#8a8678" stroke-width="2"/><rect x="190" y="26" width="20" height="26" fill="#f6f4ee" stroke="#8a8678" stroke-width="2"/>' +
      '<path d="M188 28l12-24 12 24z" fill="#5a6470" stroke="#3a4048" stroke-width="1.5"/>' +
      '<rect x="193" y="58" width="14" height="22" fill="#2c3a4a"/><g class="swg"><path d="M195 62h10l2 12h-14z" fill="' + GLD + '"/></g>' +
      /* windows */
      '<path d="M156 130h18v38h-18zM226 130h18v38h-18z" fill="#2c3a4a" stroke="#fff" stroke-width="2"/><path d="M156 130q9-12 18 0M226 130q9-12 18 0" fill="#2c3a4a" stroke="#fff" stroke-width="2"/>' +
      '<rect x="190" y="160" width="20" height="42" fill="#3a5a3a" stroke="#fff" stroke-width="2"/>' +
      /* yard, trees, fence */
      '<rect x="0" y="200" width="400" height="60" fill="#5c8a3a"/>' +
      '<rect x="40" y="130" width="8" height="74" fill="#4a3424"/><circle cx="44" cy="122" r="30" fill="#d4762a"/><rect x="340" y="126" width="8" height="78" fill="#4a3424"/><circle cx="344" cy="116" r="30" fill="#b8481e"/>' +
      (function () { let f = '<path d="M0 214h400" stroke="#1d1d24" stroke-width="2"/>'; for (let x = 4; x < 400; x += 10) f += '<path d="M' + x + ' 206v16" stroke="#1d1d24" stroke-width="2"/>'; return f; })() +
      leaves + tag("NEW LOTS", 14, 252, 24, W1, -3) + tag("LOYALTY IS ROYALTY", 196, 254, 17, JADE, -4),
      sky("g4", "#7ab0dc", "#f2dcb4"));
  }

  /* 5. Pennsylvania Av and Livonia Av: green signs, the tag wall, the el overhead, a jade drip */
  function corner() {
    let legs = ""; for (let x = 0; x < 400; x += 80) legs += '<rect x="' + x + '" y="14" width="8" height="46" fill="#3a4a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(10) +
      '<rect x="0" y="0" width="400" height="16" fill="#3a4a3a"/>' + legs + wall("#3a2e2a", "#46382f") +
      tag("MASTA KILLA", 26, 120, 30, W1, -7) + tag("HIGH CHIEF", 40, 168, 26, JADE, -3) + tag("NOODLES", 56, 206, 22, GLD, -2) +
      '<rect class="drp" x="96" y="122" width="3" height="8" fill="' + JADE + '"/><rect class="drp" x="176" y="110" width="3" height="8" fill="' + JADE + '" style="animation-delay:-1.1s"/>' +
      signs("Pennsylvania Av", "Livonia Av"),
      sky("g5", "#0d0a22", "#2e2a3a"));
  }

  window.SCENES = { station, dairy, chamber, church, corner };
})();
