(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.wv{animation:wave 3s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}.blk{animation:blink 1.6s infinite}.blk2{animation:blink 1.6s infinite;animation-delay:.8s}' +
    '@keyframes flick{0%,100%{opacity:1;transform:scaleY(1)}30%{opacity:.75;transform:scaleY(.85)}60%{opacity:.95;transform:scaleY(1.1)}}.flk{transform-box:fill-box;transform-origin:50% 100%;animation:flick .9s ease-in-out infinite}.flk2{animation-delay:.35s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.spn{transform-box:view-box;animation:spin 12s linear infinite}' +
    '@keyframes sweep{0%,100%{transform:rotate(-28deg)}50%{transform:rotate(28deg)}}.swp{animation:sweep 5s ease-in-out infinite}' +
    '@keyframes flutter{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.flg{transform-box:fill-box;transform-origin:0 50%;animation:flutter 1.4s ease-in-out infinite}' +
    '@keyframes fall{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,120px) rotate(200deg);opacity:0}}.lf{animation:fall 5s linear infinite}.lf2{animation-delay:1.7s}.lf3{animation-delay:3.3s}' +
    '@keyframes drift{from{transform:translateX(-80px)}to{transform:translateX(460px)}}.dft{animation:drift 26s linear infinite}' +
    '@keyframes boat{from{transform:translateX(-120px)}to{transform:translateX(440px)}}.bt{animation:boat 18s linear infinite}' +
    '@keyframes swim{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}.swm{animation:swim 7s ease-in-out infinite}' +
    '@keyframes peek{0%,30%,100%{transform:translateY(14px)}45%,85%{transform:translateY(0)}}.pk{animation:peek 4s ease-in-out infinite}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes carR{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.cr1{animation:carR 6s linear infinite}.cr2{animation:carR 6s linear infinite;animation-delay:-3s}' +
    '@keyframes steam{0%{transform:translateY(0);opacity:0}30%{opacity:.6}100%{transform:translateY(-26px);opacity:0}}.stm{animation:steam 3s ease-out infinite}.stm2{animation-delay:1.5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* Staten Island Railway "SIR" bullet */
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const cloud = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="10"/><ellipse cx="-12" cy="-4" rx="11" ry="8"/></g>';
  /* SIR car (stainless, blue band), w long, at x,y top-left */
  const sirCar = (x, y, w) => {
    let win = ""; for (let i = x + 14; i < x + w - 40; i += 42) win += '<rect x="' + i + '" y="' + (y + 12) + '" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
      '<rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="6" fill="#0039a6"/>' + win +
      '<rect x="' + (x + w - 18) + '" y="' + (y + 12) + '" width="12" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>' +
      '<circle cx="' + (x + w - 8) + '" cy="' + (y + 54) + '" r="4" fill="#fff6c2"/>' + sir(x + w - 40, y + 54);
  };
  /* green NYC street sign blade */
  const blade = (x, y, w, txt, rot) =>
    '<g transform="rotate(' + (rot || 0) + ' ' + (x + w / 2) + ' ' + (y + 11) + ')"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="3" fill="#0f7a3d" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">' + txt + '</text></g>';
  const station = (name, x, y, w) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="34" rx="4" fill="#111"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="4" fill="#fff"/>' +
    '<text x="' + (x + 14) + '" y="' + (y + 25) + '" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">' + name + '</text>' + sir(x + w - 28, y + 18);
  const COR = "#ff8a5b", GOLD = "#ffd34d", CYAN = "#38e8ff";

  /* 1. Tompkinsville on the Staten Island Railway: the blue-and-white car pulling in along the harbor, the HEREDITARY wheat-paste and the sons' tags on the wall */
  function station1() {
    const { svg, sky, tag, T, cloud } = LM1;
    let win = ""; for (let x = 20; x < 280; x += 40) win += '<rect x="' + x + '" y="112" width="26" height="20" rx="3" fill="#cfe6ff" opacity=".9"/>';
    let sky2 = ""; [[0, 30], [14, 50], [30, 38], [44, 70], [58, 44], [72, 34], [88, 56]].forEach(([x, h]) => sky2 += '<rect x="' + (280 + x) + '" y="' + (96 - h) + '" width="12" height="' + h + '" fill="#7a8aa6"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#gw1)"/>' + cloud("lm-drift", 0, 24, 1) +
      /* the harbor and lower Manhattan across it */
      sky2 + '<rect x="0" y="96" width="400" height="12" fill="#3d7aa6"/>' +
      '<g class="lm-boat"><path d="M150 96h40l-4 6h-32z" fill="#ff8a1e"/><rect x="158" y="88" width="24" height="8" fill="#ff8a1e"/></g>' +
      /* the car */
      '<g class="anim-train"><rect x="-10" y="102" width="310" height="62" rx="8" fill="#e8ecf2" stroke="#4a5a7a" stroke-width="2"/>' +
      '<rect x="-10" y="138" width="310" height="10" fill="#0039a6"/>' + win +
      '<rect x="282" y="108" width="14" height="26" rx="3" fill="#1d2a3a"/><circle cx="294" cy="156" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="164" width="400" height="7" fill="#eab308"/><rect x="0" y="171" width="400" height="89" fill="#a49e94"/>' +
      /* the station sign on posts */
      '<rect x="52" y="34" width="5" height="44" fill="#333"/><rect x="184" y="34" width="5" height="44" fill="#333"/>' +
      '<rect x="20" y="40" width="200" height="28" rx="3" fill="#111"/><rect x="20" y="40" width="200" height="3" fill="#fff"/>' +
      T(30, 61, "Tompkinsville", 16, "#fff", { a: "start", f: "Helvetica, Arial, sans-serif", w: 700 }) +
      '<rect x="176" y="47" width="36" height="15" rx="7" fill="#0039a6"/>' + T(194, 58, "SIR", 9, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
      /* the wall: HEREDITARY poster, the sons' tags */
      '<rect x="0" y="180" width="400" height="80" fill="#5a5048"/>' +
      '<g transform="rotate(-3 300 210)"><rect x="262" y="186" width="96" height="58" fill="#111" stroke="#ffd34d" stroke-width="2"/>' +
      '<path d="M310 240v-10M310 230l-12-8M310 230l12-8M298 222l-5-6M322 222l5-6" stroke="#ffd34d" stroke-width="2.5" fill="none"/>' +
      T(310, 200, "HEREDITARY", 12, "#ffd34d") + '</g>' +
      tag("2ND GEN WU", 14, 220, 32, "#ff8a5b", -5) + tag("NEW BAP", 30, 252, 24, "#38e8ff", -3),
      sky("gw1", "#8fc3ea", "#f6d9a6"));
  }

  /* 2. Album world, Hereditary: the family tree in gold on black, its two great limbs splitting in a W, the fathers in the roots and the sons out on the branches */
  function lyons() {
    const { svg, T, stars, tag } = LM1;
    const G = "#e8b84a", g2 = "#ffd34d";
    let leaves = ""; [[80, 60], [118, 46], [150, 70], [200, 96], [250, 70], [282, 46], [320, 60], [100, 84], [300, 84], [176, 80], [224, 80]].forEach(([x, y], k) =>
      leaves += '<g class="lm-bob' + (k % 3 ? " lm-b" + (k % 3 + 1) : "") + '"><circle cx="' + x + '" cy="' + y + '" r="' + (9 + k % 3 * 2) + '" fill="' + (k % 2 ? G : g2) + '" opacity=".9"/></g>');
    let roots = ""; [-80, -50, -20, 20, 50, 80].forEach((d, k) => roots += '<path d="M200 196q' + (d / 2) + ' 16 ' + d + ' 40" stroke="' + G + '" stroke-width="' + (6 - k % 3) + '" fill="none" stroke-linecap="round"/>');
    let falling = ""; [[120, ""], [210, " lm-l2"], [290, " lm-l3"]].forEach(([x, c]) => falling += '<g class="lm-fall' + c + '"><circle cx="' + x + '" cy="80" r="3.5" fill="' + g2 + '"/></g>');
    return svg(
      '<rect width="400" height="260" fill="#0b0906"/>' + stars(30) +
      '<circle cx="200" cy="120" r="110" fill="' + G + '" opacity=".06"/>' +
      /* the trunk and the two limbs that each fork again: a W */
      '<path d="M190 200V150L120 90M210 200V150L280 90M190 150L200 110L210 150M120 90L90 60M120 90L150 70M280 90L250 70M280 90L310 60" stroke="' + G + '" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M120 90L100 84M280 90L300 84M200 110L176 80M200 110L224 80" stroke="' + G + '" stroke-width="5" fill="none" stroke-linecap="round"/>' +
      leaves + roots + falling +
      '<rect x="0" y="196" width="400" height="3" fill="' + G + '" opacity=".5"/>' +
      T(200, 252, "THE FATHERS", 10, G, { f: "Barlow, Arial, sans-serif", w: 700, ls: 4 }) +
      T(200, 24, "THE SONS", 10, G, { f: "Barlow, Arial, sans-serif", w: 700, ls: 4 }) +
      '<rect x="124" y="154" width="152" height="30" rx="3" fill="#0b0906" stroke="' + g2 + '" stroke-width="2"/>' + T(200, 177, "HEREDITARY", 20, g2) +
      tag("2ND GEN WU", 12, 44, 20, "#ff8a5b", -4),
      "");
  }

  /* 3. Little Sri Lanka on Victory Blvd: a row of small shops, string lights at night, steam off the kitchens */
  function victory() {
    const shop = (x, w, awn, sign) => '<rect x="' + x + '" y="90" width="' + w + '" height="120" fill="' + ["#7a5a4a", "#5a5a6a", "#6a4a3a", "#4a5a5a"][(x / 100 | 0) % 4] + '"/>' +
      '<rect x="' + (x + 10) + '" y="104" width="' + (w - 20) + '" height="20" fill="#f7f3ea"/><text x="' + (x + w / 2) + '" y="118" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#3a2a2a">' + sign + '</text>' +
      (function () { let s = ""; for (let i = 0; i < w; i += 14) s += '<path d="M' + (x + i) + ' 132h14l-2 12h-10z" fill="' + (i % 28 ? "#f7f3ea" : awn) + '"/>'; return s; })() +
      '<rect x="' + (x + 8) + '" y="148" width="' + (w - 40) + '" height="42" fill="#ffd98a" opacity=".85"/><rect x="' + (x + w - 26) + '" y="148" width="18" height="62" fill="#3a2a1a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#v1)"/>' + stars(20) +
      shop(0, 100, "#d22a2a", "SPICE") + shop(100, 100, "#159a4a", "GROCERY") + shop(200, 100, GOLD, "KOTTU") + shop(300, 100, COR, "TEA HOUSE") +
      '<path d="M0 84q50 14 100 0t100 0t100 0t100 0" stroke="#333" stroke-width="1" fill="none"/>' +
      (function () { let b = ""; for (let x = 6; x < 400; x += 16) { const y = 84 + 7 * Math.sin(((x % 100) / 100) * Math.PI); b += '<circle cx="' + x + '" cy="' + y.toFixed(1) + '" r="2.6" fill="' + [GOLD, COR, CYAN, "#fff"][(x / 16 | 0) % 4] + '" class="' + ((x / 16 | 0) % 2 ? "blk" : "blk2") + '"/>'; } return b; })() +
      '<g class="stm"><path d="M240 80q-6-10 0-20" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/></g><g class="stm stm2"><path d="M140 80q6-10 0-20" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/></g>' +
      '<rect y="210" width="400" height="10" fill="#9a9a9a"/><rect y="220" width="400" height="40" fill="#2c2c30"/>' +
      '<g class="cr1"><rect x="0" y="232" width="44" height="14" rx="4" fill="' + CYAN + '"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="34" cy="246" r="4" fill="#111"/></g>' +
      '<text x="200" y="40" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">LITTLE SRI LANKA · VICTORY BLVD</text>',
      sky("v1", "#141a3a", "#4a2a5a"));
  }

  /* 4. Mount Loretto: the brownstone Prince's Bay Light and keeper's cottage on the bluff over Raritan Bay, the light pulsing at dusk */
  function princesbay() {
    return svg(
      '<style>@keyframes pulse{0%,100%{opacity:.15}50%{opacity:.9}}.pl{animation:pulse 2.4s ease-in-out infinite}</style>' +
      '<rect width="400" height="260" fill="url(#q1)"/>' +
      '<rect y="150" width="400" height="110" fill="#3a5a7a"/>' +
      '<g class="wv"><path d="M0 200q10-3 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#ffd2a8" stroke-width="1.5" fill="none" opacity=".6"/></g>' +
      '<g class="bt"><path d="M0 176h24l-4 6H4z" fill="#f7f3ea"/><path d="M12 176v-18l10 16z" fill="#f7f3ea"/></g>' +
      '<path d="M0 140q60-30 160-28q70 2 100 26l20 122H0z" fill="#7a8a4a"/><path d="M260 138l20 122h-14l-18-118z" fill="#a8885a"/><path d="M0 150q80-24 180-22q50 2 76 14v6q-26-12-76-14q-100-2-180 22z" fill="#9a9a5a"/>' +
      /* keeper's cottage */
      '<rect x="168" y="96" width="70" height="40" fill="#8a5a3a" stroke="#5a3a22" stroke-width="2"/><path d="M162 98l41-22 41 22z" fill="#4a3a3a"/>' +
      '<rect x="180" y="106" width="12" height="14" fill="#ffd98a"/><rect x="214" y="106" width="12" height="14" fill="#ffd98a"/><rect x="198" y="114" width="10" height="22" fill="#3a2a1a"/>' +
      /* tower */
      '<path d="M128 136l8-84h20l8 84z" fill="#8a5a3a" stroke="#5a3a22" stroke-width="2"/>' +
      (function () { let s = ""; for (let y = 60; y < 136; y += 10) s += '<path d="M' + (136 - (y - 52) * .1) + ' ' + y + 'h' + (20 + (y - 52) * .2) + '" stroke="#6a4024" stroke-width="1" opacity=".7"/>'; return s; })() +
      '<rect x="134" y="44" width="24" height="10" fill="#3a3a3a"/><rect x="138" y="32" width="16" height="12" fill="#cfe6ff" stroke="#333" stroke-width="1.5"/><path d="M136 32l10-8 10 8z" fill="#333"/>' +
      '<circle cx="146" cy="38" r="22" fill="#fff6c2" class="pl"/>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#fff">PRINCE\'S BAY LIGHT · MOUNT LORETTO</text>',
      sky("q1", "#2a3a6a", "#ffb07a"));
  }

  /* 5. Victory Blvd & Murray Hulbert Av by Lyons Pool: green signs, the tag wall, a coral drip */
  function corner() {
    let bricks = ""; for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? -12 : 0; x < 400; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="10" fill="#7a4038"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#c1)"/>' +
      '<rect y="68" width="400" height="154" fill="#552a24"/>' + bricks +
      tag("2ND GEN WU", 18, 146, 44, COR, -6) + tag("HEREDITARY", 30, 198, 30, GOLD, -4) + tag("NEW BAP", 214, 206, 24, CYAN, -7) +
      '<g class="drp"><rect x="74" y="148" width="3" height="10" fill="' + COR + '"/></g>' +
      '<rect x="352" y="22" width="6" height="208" fill="#4a4a4a"/>' +
      blade(274, 24, 124, "Victory Blvd", 0) + blade(232, 50, 166, "Murray Hulbert Av", 0) +
      '<rect y="222" width="400" height="38" fill="#2c2c30"/><rect y="222" width="400" height="6" fill="#9a9a9a"/>' +
      '<g class="cr2"><rect x="0" y="236" width="44" height="14" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>',
      sky("c1", "#ff8a5b", "#2a1210"));
  }

  /* LM1 helpers for the redrawn landmark rooms: same svg / sky / tag / bullet style as above, with their own little animations */
  const LM1 = (function () {
    const css = '<style>' +
      '@keyframes lmDrift{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.lm-drift{animation:lmDrift 24s linear infinite}.lm-d2{animation-delay:-12s}' +
      '@keyframes lmCar{from{transform:translateX(-110px)}to{transform:translateX(510px)}}.lm-car{animation:lmCar 6s linear infinite}.lm-c2{animation-delay:-3s}' +
      '@keyframes lmCarL{from{transform:translateX(510px)}to{transform:translateX(-110px)}}.lm-carL{animation:lmCarL 7.5s linear infinite}' +
      '@keyframes lmFlick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lm-flk{animation:lmFlick 2.2s infinite}.lm-f2{animation-delay:-.8s}' +
      '@keyframes lmSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.lm-sway{transform-box:fill-box;transform-origin:50% 0;animation:lmSway 3s ease-in-out infinite}' +
      '.lm-swayb{transform-box:fill-box;transform-origin:50% 100%;animation:lmSway 3.6s ease-in-out infinite}.lm-s2{animation-delay:-1.5s}' +
      '@keyframes lmBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.lm-bob{animation:lmBob 1.4s ease-in-out infinite}.lm-b2{animation-delay:-.7s}.lm-b3{animation-delay:-.35s}' +
      '@keyframes lmRise{0%{transform:translate(0,0);opacity:1}80%{opacity:1}100%{transform:translate(14px,-150px);opacity:0}}.lm-rise{animation:lmRise 6s ease-in infinite}' +
      '@keyframes lmBlink{0%,49%{opacity:1}50%,100%{opacity:.25}}.lm-blink{animation:lmBlink 1s steps(1) infinite}.lm-k2{animation-delay:-.5s}' +
      '@keyframes lmSpin{to{transform:rotate(360deg)}}.lm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:lmSpin 14s linear infinite}' +
      '@keyframes lmFly{from{transform:translate(-80px,30px)}to{transform:translate(480px,-30px)}}.lm-fly{animation:lmFly 9s linear infinite}' +
      '@keyframes lmLand{from{transform:translate(460px,-40px)}to{transform:translate(-120px,40px)}}.lm-land{animation:lmLand 10s linear infinite}' +
      '@keyframes lmRip{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.lm-rip{animation:lmRip 3s ease-in-out infinite}.lm-r2{animation-delay:-1.5s}' +
      '@keyframes lmBoat{0%,100%{transform:translateX(0)}50%{transform:translateX(-60px)}}.lm-boat{animation:lmBoat 12s ease-in-out infinite}' +
      '@keyframes lmWalk{from{transform:translateX(0)}to{transform:translateX(70px)}}.lm-walk{animation:lmWalk 5s ease-in-out infinite alternate}.lm-w2{animation-delay:-2.5s}' +
      '@keyframes lmFall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,250px) rotate(300deg);opacity:0}}.lm-fall{animation:lmFall 6s linear infinite}.lm-l2{animation-delay:-2s}.lm-l3{animation-delay:-4s}' +
      '@keyframes lmDrop{0%{transform:translateY(0)}100%{transform:translateY(118px)}}.lm-drop{animation:lmDrop 2.6s cubic-bezier(.5,0,.9,.6) infinite}' +
      '@keyframes lmBall{0%{transform:translate(0,0)}50%{transform:translate(-90px,-26px)}100%{transform:translate(-180px,0)}}.lm-ball{animation:lmBall 2.4s linear infinite}' +
      '@keyframes lmSwim{0%,100%{transform:translateX(0)}50%{transform:translateX(90px)}}.lm-swim{animation:lmSwim 7s ease-in-out infinite}.lm-sw2{animation-delay:-3.5s}' +
      '</style>';
    const svg = (inner, defs) =>
      '<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
    const sky = (id, top, bottom) =>
      '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
    const tag = (txt, x, y, size, fill, rot) =>
      '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
      '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
    const bullet = (x, y, letter, color, dark, r) => { r = r || 11;
      return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * .5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36).toFixed(1) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
    const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
    const T = (x, y, txt, size, fill, o) => { o = o || {};
      return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || "middle") + '" font-family="' + (o.f || "Anton, Impact, sans-serif") + '"' + (o.w ? ' font-weight="' + o.w + '"' : '') +
        (o.ls ? ' letter-spacing="' + o.ls + '"' : '') + ' font-size="' + size + '" fill="' + fill + '"' + (o.cls ? ' class="' + o.cls + '"' : '') + '>' + txt + '</text>'; };
    /* a name plaque: dark box, title + subtitle */
    const plaque = (x, y, w, title, sub, bg, accent) => {
      const ts = Math.min(12, (w - 14) / (title.length * .66)), ss = sub ? Math.min(8, (w - 12) / (sub.length * .62 + sub.length * 1.5 / 8)) : 0;
      return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (sub ? 34 : 22) + '" rx="4" fill="' + bg + '" stroke="' + accent + '" stroke-width="2"/>' +
        T(x + w / 2, y + 16, title, ts.toFixed(1), "#fff") + (sub ? T(x + w / 2, y + 28, sub, ss.toFixed(1), accent, { f: "Barlow, Arial, sans-serif", w: 700, ls: (ss * 1.5 / 8).toFixed(2) }) : ""); };
    /* green NYC street sign blade */
    const blade = (x, y, w, txt) =>
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      T(x + w / 2, y + 13, txt, 11, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 });
    const car = (cls, y, c, w) => { w = w || 44;
      return '<g class="' + cls + '"><rect x="0" y="' + y + '" width="' + w + '" height="12" rx="4" fill="' + c + '"/><rect x="' + (w * .22) + '" y="' + (y - 7) + '" width="' + (w * .5) + '" height="8" rx="3" fill="' + c + '"/>' +
        '<rect x="' + (w * .27) + '" y="' + (y - 5) + '" width="' + (w * .4) + '" height="5" fill="#cfe6ff" opacity=".8"/><circle cx="' + (w * .22) + '" cy="' + (y + 12) + '" r="3.5" fill="#111"/><circle cx="' + (w * .78) + '" cy="' + (y + 12) + '" r="3.5" fill="#111"/>' +
        '<rect x="' + (w - 3) + '" y="' + (y + 3) + '" width="3" height="3" fill="#fff6c2"/></g>'; };
    /* faceless figure (silhouette), optional sign held up */
    const fig = (x, y, c, sign, sc) => { sc = sc || 1;
      return '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')"><circle cx="0" cy="-30" r="5" fill="' + c + '"/><path d="M-6 -24h12l2 16h-4l-1 14h-6l-1-14h-4z" fill="' + c + '"/>' +
        (sign ? '<path d="M5 -22l6-14" stroke="' + c + '" stroke-width="2.5"/><rect x="' + (13 - Math.max(30, sign[0].length * 4.6 + 6) / 2) + '" y="-58" width="' + Math.max(30, sign[0].length * 4.6 + 6) + '" height="20" fill="' + sign[1] + '" stroke="#222" stroke-width="1"/>' +
          T(13, -44, sign[0], 7, sign[2] || "#111", { f: "Barlow, Arial, sans-serif", w: 700 }) : "") + '</g>'; };
    const wins = (x0, y0, cols, rows, dx, dy, w, h, c, lit) => { let s = "";
      for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) s += '<rect x="' + (x0 + k * dx) + '" y="' + (y0 + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + ((lit && (k * 7 + r * 3) % 4 === 0) ? lit : c) + '"/>';
      return s; };
    const brickLines = (x, y, w, h, c, step) => { let s = ""; for (let yy = y + (step || 7); yy < y + h; yy += (step || 7)) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + c + '" stroke-width=".6"/>'; return s; };
    const cloud = (cls, x, y, s, op) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" opacity="' + (op || .8) + '"><ellipse cx="0" cy="0" rx="26" ry="9" fill="#fff"/><ellipse cx="12" cy="-6" rx="14" ry="9" fill="#fff"/><ellipse cx="-10" cy="-4" rx="11" ry="7" fill="#fff"/></g></g>';
    const tree = (x, y, r, c, cls) => '<g class="' + (cls || "lm-swayb") + '"><rect x="' + (x - 2.5) + '" y="' + (y - 4) + '" width="5" height="' + (r + 6) + '" fill="#5a3a22"/><circle cx="' + x + '" cy="' + (y - r * .6) + '" r="' + r + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y - r * .2) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y - r * .2) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '"/></g>';
    const bird = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" fill="none" stroke="#222" stroke-width="1.6"/></g>';
    /* subway car side (R-type), for the station rooms */
    const subCar = (x, y, w, stripe, letters) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="60" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="4" fill="' + stripe + '"/>';
      for (let k = x + 14; k < x + w - 40; k += 44) s += '<rect x="' + k + '" y="' + (y + 10) + '" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
      return s + '<rect x="' + (x + w - 22) + '" y="' + (y + 10) + '" width="14" height="22" rx="3" fill="#1d2a3a"/><circle cx="' + (x + w - 8) + '" cy="' + (y + 50) + '" r="3.5" fill="#fff6c2"/>' + (letters || ""); };
    return { svg, sky, tag, bullet, stars, T, plaque, blade, car, fig, wins, brickLines, cloud, tree, bird, subCar };
  })();

  window.SCENES = { station: station1, lyons, victory, princesbay, corner };
})();
