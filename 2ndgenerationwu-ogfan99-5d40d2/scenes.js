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

  /* 1. Tompkinsville at dusk: the open SIR platform by the water, the harbor and lower Manhattan lighting up, the train rolling in */
  function station1() {
    let city = ""; for (let x = 150; x < 300; x += 12) { const h = 10 + ((x * 7) % 26); city += '<rect x="' + x + '" y="' + (96 - h) + '" width="10" height="' + h + '" fill="#3a3a5a"/><rect x="' + (x + 3) + '" y="' + (98 - h) + '" width="2" height="2" fill="#ffd98a" class="blk"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + city +
      '<rect y="96" width="400" height="30" fill="#3a4a7a"/>' +
      '<g class="wv"><path d="M0 110q10-3 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#ffb98a" stroke-width="1.2" fill="none" opacity=".6"/></g>' +
      '<rect x="0" y="50" width="400" height="8" fill="#4a4a5a"/>' +
      (function () { let p = ""; for (let x = 30; x < 400; x += 120) p += '<rect x="' + x + '" y="58" width="5" height="116" fill="#4a4a5a"/>'; return p; })() +
      station("Tompkinsville", 92, 70, 216) +
      '<g class="anim-train">' + sirCar(-40, 116, 360) + '</g>' +
      '<rect y="178" width="400" height="10" fill="#eab308"/><rect y="188" width="400" height="72" fill="#4a4a52"/>' +
      '<rect y="230" width="400" height="30" fill="#2c2c30"/>' +
      '<g class="cr1"><rect x="0" y="238" width="44" height="14" rx="4" fill="' + COR + '"/><circle cx="10" cy="252" r="4" fill="#111"/><circle cx="34" cy="252" r="4" fill="#111"/></g>' +
      tag("2ND GEN", 30, 220, 24, COR, -4) + tag("WU", 250, 222, 26, GOLD, -5),
      sky("s1", "#3a2a6a", "#ff9a6a"));
  }

  /* 2. Lyons Pool: the red brick Art Moderne bathhouse, blue water, swimmers splashing, the footbridge over the SIR behind */
  function lyons() {
    return svg(
      '<style>@keyframes spl{0%,100%{transform:translateY(0);opacity:.2}50%{transform:translateY(-8px);opacity:1}}.sp{transform-box:fill-box;animation:spl 1.4s ease-in-out infinite}.sp2{animation-delay:.7s}</style>' +
      '<rect width="400" height="260" fill="url(#y1)"/>' + '<g class="dft">' + cloud(90, 30, .9) + '</g>' +
      /* footbridge */
      '<rect x="0" y="62" width="400" height="6" fill="#6a6a6a"/><path d="M0 62h400" stroke="#888" stroke-width="2"/>' +
      (function () { let r = ""; for (let x = 0; x < 400; x += 14) r += '<rect x="' + x + '" y="52" width="2" height="10" fill="#6a6a6a"/>'; return r; })() + '<rect y="50" width="400" height="3" fill="#6a6a6a"/>' +
      /* bathhouse */
      '<rect x="40" y="76" width="320" height="60" fill="#b8503a"/>' +
      (function () { let b = ""; for (let y = 80; y < 136; y += 7) b += '<rect x="40" y="' + y + '" width="320" height="1" fill="#8a3a2a" opacity=".6"/>'; return b; })() +
      '<rect x="36" y="72" width="328" height="6" fill="#8a8a8a"/>' +
      '<rect x="160" y="64" width="80" height="72" fill="#c45a42"/><rect x="156" y="60" width="88" height="6" fill="#8a8a8a"/>' +
      '<rect x="150" y="104" width="100" height="6" rx="2" fill="#e6e0d0"/>' +
      '<rect x="176" y="110" width="20" height="26" fill="#5a6a7a"/><rect x="204" y="110" width="20" height="26" fill="#5a6a7a"/>' +
      (function () { let w = ""; [60, 96, 270, 306].forEach(x => w += '<rect x="' + x + '" y="92" width="26" height="14" fill="#cfe2ee" stroke="#e6e0d0" stroke-width="2"/>'); return w; })() +
      '<text x="200" y="88" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="8" letter-spacing="2" fill="#f7f3ea">LYONS POOL</text>' +
      /* deck + pool */
      '<rect y="136" width="400" height="124" fill="#e6e0d0"/>' +
      '<rect x="20" y="152" width="360" height="86" fill="#3ab0e0"/>' +
      (function () { let l = ""; for (let x = 70; x < 380; x += 60) l += '<rect x="' + x + '" y="152" width="2" height="86" fill="#1a7ab0" opacity=".6"/>'; return l; })() +
      '<g class="wv"><path d="M0 190q10-3 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#d8f4ff" stroke-width="1.5" fill="none" opacity=".7" transform="translate(20 0)"/></g>' +
      '<rect x="0" y="152" width="20" height="86" fill="#e6e0d0"/><rect x="380" y="152" width="20" height="86" fill="#e6e0d0"/>' +
      '<circle cx="110" cy="182" r="5" fill="#8a5a3a"/><circle cx="230" cy="206" r="5" fill="#d8a07a"/><circle cx="320" cy="176" r="5" fill="#5a3a2a"/>' +
      '<g class="sp"><circle cx="104" cy="176" r="2" fill="#fff"/><circle cx="118" cy="178" r="2" fill="#fff"/></g><g class="sp sp2"><circle cx="226" cy="198" r="2" fill="#fff"/><circle cx="238" cy="200" r="2" fill="#fff"/></g>' +
      '<rect x="20" y="238" width="360" height="4" fill="#c9c2b0"/>' +
      '<text x="200" y="254" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="#5a4a3a">VICTORY BLVD · TOMPKINSVILLE</text>',
      sky("y1", "#4f9ad8", "#d8ecff"));
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

  window.SCENES = { station: station1, lyons, victory, princesbay, corner };
})();
