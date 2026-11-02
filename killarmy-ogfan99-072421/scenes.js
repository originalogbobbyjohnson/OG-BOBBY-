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
  /* Staten Island to Steubenville, Ohio: opening scenes for Killarmy's game */
  const W1 = "#ffffff", OLV = "#8a9a4a", GLD = "#e8b84a", CAMO = ["#4a5a32", "#6a7a3e", "#3a3a28", "#8a8a5a"];
  const camo = (x, y, w, h) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + CAMO[0] + '"/>'; for (let i = 0; i < 14; i++) s += '<ellipse cx="' + (x + (i * 37) % w) + '" cy="' + (y + (i * 23) % h) + '" rx="' + (10 + i % 4 * 3) + '" ry="' + (6 + i % 3 * 2) + '" fill="' + CAMO[1 + i % 3] + '"/>'; return s; };

  /* 1. Grasmere at night, looking down from the Clove Rd bridge rail: camo netting on the fence, a searchlight sweeping, the SIR sliding into the cut below, a stenciled SILENT WEAPONS poster on the retaining wall */
  function station() {
    let fence = "";
    for (let x = 0; x <= 400; x += 10) fence += '<path d="M' + x + ' 196l10 12M' + (x + 10) + ' 196l-10 12" stroke="#7a828c" stroke-width="1"/>';
    return svg(
      '<style>@keyframes srch{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.srch{transform-origin:200px 196px;animation:srch 5s ease-in-out infinite}</style>' +
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(22) +
      '<path class="srch" d="M200 196L170 0h60z" fill="#f4ecff" opacity=".1"/>' +
      /* far side of the cut: stone retaining wall with the poster */
      '<rect x="0" y="40" width="400" height="60" fill="#4a463e"/><path d="M0 52h400M0 66h400M0 80h400M0 94h400" stroke="#3a362e" stroke-width="1.5"/>' +
      '<rect x="292" y="44" width="96" height="50" fill="#1a1c14" stroke="' + OLV + '" stroke-width="2"/>' +
      '<text x="340" y="62" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="10" fill="' + GLD + '">SILENT</text>' +
      '<text x="340" y="74" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="10" fill="' + GLD + '">WEAPONS</text>' +
      '<text x="340" y="88" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="7" fill="' + W1 + '">FOR QUIET WARS</text>' +
      /* platform with the station sign */
      '<rect x="20" y="50" width="180" height="30" rx="4" fill="#111"/><rect x="20" y="50" width="180" height="4" fill="#fff"/>' +
      '<text x="32" y="73" ' + FONT + ' font-size="15" fill="#fff">Grasmere</text>' + sir(172, 67) +
      sirTrain(100) +
      '<rect x="0" y="156" width="400" height="8" fill="#eab308"/><rect x="0" y="164" width="400" height="20" fill="#6a6f78"/>' +
      '<circle class="flk" cx="380" cy="120" r="4" fill="#ff4a3a"/><rect x="376" y="124" width="8" height="34" fill="#111"/>' +
      /* the bridge rail in the foreground, with camo netting draped on the chain-link */
      '<rect x="0" y="184" width="400" height="12" fill="#3a3e46"/><rect x="0" y="194" width="400" height="3" fill="#1d2026"/>' + fence +
      camo(30, 198, 150, 22) + camo(250, 200, 120, 20) +
      '<rect x="0" y="220" width="400" height="40" fill="#22222c"/>' +
      tag("KILLARMY", 14, 252, 30, OLV, -4) + tag("WU-TANG", 280, 250, 22, GLD, -6),
      sky("g1", "#0a0c18", "#2a3040"));
  }

  /* 2. Miller Field in New Dorp: the old Army airfield's brick hangars, the windsock, a biplane flying over the field */
  function millerfield() {
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="330" cy="44" r="18" fill="#fff0c8"/>' +
      '<g class="fly"><g transform="translate(0,60)"><rect x="20" y="10" width="40" height="8" rx="4" fill="' + OLV + '" stroke="#3a3a28" stroke-width="1.5"/><path d="M30 2h16v4H30zM30 22h16v4H30z" fill="#e6dcb8" stroke="#3a3a28"/><path d="M34 6v16M44 6v16" stroke="#3a3a28" stroke-width="1"/><path d="M20 10l-6-6v14z" fill="' + OLV + '"/><circle cx="62" cy="14" r="5" fill="none" stroke="#ccc" stroke-width="1" opacity=".7"/></g></g>' +
      /* hangars: yellow brick with curved roofs */
      '<rect x="40" y="120" width="140" height="80" fill="#c9a86a" stroke="#6a5a3a" stroke-width="2"/><path d="M36 122q74-40 148 0z" fill="#7a8088" stroke="#3a4048" stroke-width="2"/>' +
      '<rect x="64" y="146" width="92" height="54" fill="#5a4a3a"/><path d="M87 146v54M110 146v54M133 146v54" stroke="#3a2e24" stroke-width="2"/>' +
      '<rect x="210" y="128" width="120" height="72" fill="#c9a86a" stroke="#6a5a3a" stroke-width="2"/><path d="M206 130q64-36 128 0z" fill="#7a8088" stroke="#3a4048" stroke-width="2"/>' +
      '<rect x="232" y="152" width="76" height="48" fill="#5a4a3a"/><path d="M251 152v48M270 152v48M289 152v48" stroke="#3a2e24" stroke-width="2"/>' +
      /* windsock */
      '<rect x="360" y="110" width="3" height="92" fill="#e6e6e6"/><path class="wav" d="M363 112h28l-4 6 4 6h-28z" fill="#ff7a2a"/><path d="M372 112v12M381 112v12" stroke="#fff" stroke-width="2"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#6a9a46"/><path d="M0 224h400" stroke="#8aba5a" stroke-width="6" opacity=".5"/>' +
      tag("MILLER FIELD", 14, 252, 22, W1, -3) + tag("SILENT WEAPONS", 214, 254, 18, GLD, -4),
      sky("g2", "#7ab0dc", "#f2e2bc"));
  }

  /* 3. Fort Steuben in Steubenville, Ohio: the log palisade and blockhouses of the old 1786 fort, the flag flying */
  function fort() {
    let logs = ""; for (let x = 40; x < 360; x += 10) logs += '<path d="M' + x + ' 200V' + (136 + (x % 20 ? 0 : -2)) + 'l5-6 5 6V200z" fill="' + ((x / 10) % 2 ? "#7a5a3a" : "#6a4a2c") + '" stroke="#3a2a1a" stroke-width="1"/>';
    let stripes = ""; for (let i = 0; i < 7; i++) stripes += '<rect x="214" y="' + (40 + i * 6) + '" width="56" height="3" fill="#c8102e"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="70" cy="50" r="16" fill="#fff0c8"/>' +
      '<path d="M0 150q100-30 200-20t200-10v80H0z" fill="#5a7a4a"/>' +
      /* blockhouses */
      '<rect x="40" y="104" width="54" height="40" fill="#7a5a3a" stroke="#3a2a1a" stroke-width="2"/><path d="M34 106l33-22 33 22z" fill="#4a3a2a" stroke="#2a1a0a" stroke-width="2"/><rect x="58" y="116" width="12" height="8" fill="#1d1d24"/>' +
      '<rect x="306" y="104" width="54" height="40" fill="#7a5a3a" stroke="#3a2a1a" stroke-width="2"/><path d="M300 106l33-22 33 22z" fill="#4a3a2a" stroke="#2a1a0a" stroke-width="2"/><rect x="326" y="116" width="12" height="8" fill="#1d1d24"/>' +
      logs +
      '<rect x="180" y="150" width="40" height="50" fill="#4a3424" stroke="#2a1a0a" stroke-width="2"/><path d="M200 150v50" stroke="#2a1a0a" stroke-width="2"/>' +
      /* the flag */
      '<rect x="210" y="34" width="3" height="104" fill="#3a3a3a"/>' +
      '<g class="wav"><rect x="214" y="40" width="56" height="40" fill="#fff"/>' + stripes + '<rect x="214" y="40" width="24" height="21" fill="#0a3161"/><circle cx="226" cy="50" r="6" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="1.5 1.6"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#6a8a4a"/><path d="M180 260l14-60h12l14 60z" fill="#b89a6a"/>' +
      tag("STEUBENVILLE", 14, 252, 22, W1, -3) + tag("FORT STEUBEN", 236, 254, 20, GLD, -5),
      sky("g3", "#86b8de", "#f6e2b8"));
  }

  /* 4. The Ohio River at Steubenville at night: the Market Street Bridge, its steel towers and hanging cables, a towboat pushing barges by */
  function river() {
    let hang = ""; for (let x = 109; x < 304; x += 12) { const t = (x - 205) / 108; hang += '<path d="M' + x + ' ' + (60 + 46 * (1 - t * t)) + 'V138" stroke="#7a8a7a" stroke-width="1"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(24) +
      '<circle cx="346" cy="40" r="12" fill="#f4ecff"/>' +
      '<path d="M0 140q60-40 120-30t140-10 140 20v20H0z" fill="#1e2a22"/>' +
      '<rect x="0" y="146" width="400" height="80" fill="#1a2a3e"/>' +
      '<path class="shim" d="M30 166h60M220 176h80M120 196h50" stroke="#6a8aa8" stroke-width="2"/><path class="shim shim2" d="M300 160h50M40 206h40" stroke="#6a8aa8" stroke-width="2"/>' +
      /* towers, deck, main cable */
      '<rect x="92" y="54" width="10" height="92" fill="#4a5a4a"/><rect x="308" y="54" width="10" height="92" fill="#4a5a4a"/><rect x="88" y="50" width="18" height="8" fill="#5a6a5a"/><rect x="304" y="50" width="18" height="8" fill="#5a6a5a"/>' +
      '<path d="M0 132q50-20 97-76 108 100 216 0 47 56 87 76" fill="none" stroke="#8a9a8a" stroke-width="3"/>' + hang +
      '<rect x="0" y="136" width="400" height="8" fill="#3a4a3a"/><path d="M0 140h400" stroke="#ffd98a" stroke-width="1" stroke-dasharray="3 9" class="flk"/>' +
      /* towboat with barges */
      '<g class="sail" style="animation-duration:22s"><g class="bob"><rect x="0" y="182" width="56" height="12" fill="#3a2a1a"/><rect x="58" y="182" width="56" height="12" fill="#3a2a1a"/><rect x="116" y="178" width="30" height="16" fill="#c8102e"/><rect x="122" y="168" width="18" height="10" fill="#efe4cc"/><rect class="flk" x="125" y="171" width="5" height="4" fill="#ffd98a"/></g></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#14181d"/>' +
      tag("OHIO RIVER", 14, 252, 22, W1, -3) + tag("DIRTY WEAPONRY", 222, 254, 18, OLV, -4),
      sky("g4", "#0a0c1e", "#2a2a4a"));
  }

  /* 5. Broad St and Targee St in Stapleton: green signs, the tag wall over a camo stripe, an olive drip */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#f4ecff"/>' + wall("#2e3028", "#383a30") +
      '<g opacity=".85">' + camo(16, 190, 232, 30) + '</g>' +
      tag("KILLARMY", 28, 118, 34, OLV, -7) + tag("9TH PRINCE", 40, 164, 26, GLD, -3) + tag("WU-TANG", 56, 210, 22, W1, -2) +
      '<rect class="drp" x="96" y="120" width="3" height="8" fill="' + OLV + '"/><rect class="drp" x="170" y="108" width="3" height="8" fill="' + OLV + '" style="animation-delay:-1.1s"/>' +
      signs("Broad St", "Targee St"),
      sky("g5", "#0d0a22", "#2a2e2a"));
  }

  window.SCENES = { station, millerfield, fort, river, corner };
})();
