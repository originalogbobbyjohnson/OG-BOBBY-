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
  /* Downtown Brooklyn and Fort Greene: opening scenes for Killah Priest's game */
  const PUR = "#c9a4ff", GLD = "#f2c14e", TEAL = "#5ee0d0", RED3 = "#ee352e", GRN = "#00933c";

  /* 1. Atlantic Av-Barclays Ctr, underground: white tile walls with the mosaic band, the 2 train rolling in */
  function station() {
    let w = ""; for (let x = 22; x < 290; x += 44) w += '<rect x="' + x + '" y="102" width="28" height="22" rx="3" fill="#fff1b8" opacity=".9"/>';
    let tile = ""; for (let y = 0; y < 90; y += 8) tile += '<path d="M0 ' + y + 'h400" stroke="#d8d6ce" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="#ecebe4"/>' + tile +
      '<rect x="0" y="22" width="400" height="12" fill="#7a3a2a"/><rect x="0" y="34" width="400" height="4" fill="' + GLD + '"/>' +
      '<rect class="flk" x="30" y="4" width="120" height="6" rx="3" fill="#fffbe8"/><rect class="flk flk2" x="250" y="4" width="120" height="6" rx="3" fill="#fffbe8"/>' +
      '<rect x="44" y="44" width="312" height="34" rx="4" fill="#111"/><rect x="44" y="44" width="312" height="4" fill="#fff"/>' +
      '<text x="54" y="68" ' + FONT + ' font-size="14" fill="#fff">Atlantic Av-Barclays Ctr</text>' +
      bullet(256, 62, "2", RED3) + bullet(280, 62, "3", RED3) + bullet(304, 62, "4", GRN) + bullet(328, 62, "5", GRN) +
      '<rect x="0" y="86" width="400" height="66" fill="#2a2a30"/>' +
      '<g class="anim-train"><rect x="8" y="92" width="300" height="56" rx="8" fill="#c9d0d8" stroke="#5b6270" stroke-width="2"/>' + w +
      '<rect x="8" y="130" width="300" height="4" fill="#7a8088"/>' + bullet(270, 140, "2", RED3) + '<circle cx="300" cy="140" r="4" fill="#fff6c2"/></g>' +
      '<rect x="0" y="152" width="400" height="8" fill="#eab308"/><rect x="0" y="160" width="400" height="100" fill="#8a8a88"/>' +
      '<path d="M0 190h400M0 222h400" stroke="#7a7a78" stroke-width="1.5"/>' +
      '<rect x="180" y="168" width="10" height="60" fill="#1d4a8a"/><rect x="176" y="164" width="18" height="8" fill="#1d4a8a"/>' +
      tag("HEAVY MENTAL", 14, 252, 24, PUR, -3) + tag("SUNZ OF MAN", 250, 254, 20, GLD, -5),
      sky("g1", "#000", "#000"));
  }

  /* 2. The Williamsburgh Savings Bank tower over Atlantic and Flatbush: brick and limestone shaft, four clock faces, the gold dome, hands turning */
  function tower() {
    let wins = ""; for (let y = 120; y < 216; y += 12) for (let x = 172; x < 226; x += 12) wins += '<rect class="' + ((x + y) % 5 === 0 ? "win" : "") + '" x="' + x + '" y="' + y + '" width="6" height="8" fill="' + ((x * 7 + y) % 4 ? "#ffd98a" : "#2a1e1a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(14) +
      /* neighbors */
      '<rect x="20" y="150" width="80" height="70" fill="#3a3448"/><rect x="110" y="170" width="44" height="50" fill="#2e2a3a"/><rect x="250" y="160" width="60" height="60" fill="#3a3448"/><rect x="320" y="140" width="70" height="80" fill="#2e2a3a"/>' +
      /* the shaft */
      '<rect x="164" y="104" width="72" height="116" fill="#b07a5a" stroke="#5a3a2a" stroke-width="2"/>' + wins +
      '<rect x="160" y="96" width="80" height="10" fill="#e6dcc4"/>' +
      /* clock stage */
      '<rect x="170" y="54" width="60" height="44" fill="#e6dcc4" stroke="#8a7a5a" stroke-width="2"/>' +
      '<circle cx="200" cy="76" r="18" fill="#fffaf0" stroke="' + GLD + '" stroke-width="3"/>' +
      '<g class="spn" style="transform-origin:200px 76px"><path d="M200 76v-14" stroke="#1d1d24" stroke-width="2.5" stroke-linecap="round"/></g>' +
      '<g class="spf" style="transform-origin:200px 76px"><path d="M200 76h11" stroke="#1d1d24" stroke-width="1.5" stroke-linecap="round"/></g>' +
      /* the gold dome and lantern */
      '<path d="M174 54q26-40 52 0z" fill="' + GLD + '" stroke="#8a6a1a" stroke-width="2"/><path d="M186 54q14-30 28 0" fill="none" stroke="#c99a2e" stroke-width="1.5"/>' +
      '<rect x="196" y="12" width="8" height="10" fill="' + GLD + '"/><path d="M200 2v10" stroke="#8a6a1a" stroke-width="2"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#1c1c24"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      tag("FLATBUSH AV", 14, 252, 22, PUR, -3) + tag("PRIESTHOOD", 266, 252, 20, GLD, -5),
      sky("g2", "#0e0c26", "#4a2a5a"));
  }

  /* 3. The opera house on Lafayette Av in Fort Greene: cream terracotta and buff brick, tall arched windows, colored tile trim, marquee bulbs chasing */
  function opera() {
    let bulbs = ""; for (let x = 108; x < 296; x += 10) bulbs += '<circle class="flk' + ((x / 10) % 2 ? " flk2" : "") + '" cx="' + x + '" cy="176" r="2.4" fill="#ffe7a8"/>';
    let arches = ""; [128, 176, 224, 272].forEach(x => arches += '<path d="M' + (x - 16) + ' 150v-56q16-24 32 0v56z" fill="#2c3a4a" stroke="#c87a3a" stroke-width="3"/><path class="glw" d="M' + (x - 12) + ' 148v-50q12-18 24 0v50z" fill="#ffd98a" opacity=".5"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(10) +
      brick(80, 56, 240, 150, "#d8c09a", "#ccb38c") +
      '<rect x="80" y="50" width="240" height="12" fill="#efe4cc"/><path d="M80 62h240" stroke="#3a7a8a" stroke-width="3"/><path d="M80 66h240" stroke="#c87a3a" stroke-width="2" stroke-dasharray="6 4"/>' +
      '<path d="M150 50l50-22 50 22z" fill="#efe4cc" stroke="#b8a888" stroke-width="2"/><circle cx="200" cy="40" r="6" fill="#3a7a8a"/>' +
      arches +
      '<rect x="100" y="164" width="200" height="22" fill="#1d1d24"/>' + bulbs +
      '<rect x="120" y="186" width="160" height="20" fill="#5a3a24"/><path d="M160 186v20M200 186v20M240 186v20" stroke="#efe4cc" stroke-width="2"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#2a2a32"/><rect x="0" y="206" width="400" height="6" fill="#8a8a92"/>' +
      tag("FORT GREENE", 14, 252, 22, PUR, -3) + tag("BLACK AUGUST", 240, 254, 20, TEAL, -5),
      sky("g3", "#141436", "#6a3a6a"));
  }

  /* 4. Behind the stained glass: inside a Brooklyn church, the rose window glowing, light beams with dust drifting down, the pews */
  function glass() {
    let petals = ""; for (let i = 0; i < 12; i++) { const a = i * 30; petals += '<path d="M200 92L200 44" transform="rotate(' + a + ' 200 92)" stroke="#2a1a2a" stroke-width="3"/><circle cx="200" cy="58" r="10" transform="rotate(' + (a + 15) + ' 200 92)" fill="' + ["#c9a4ff", "#5ee0d0", "#f2c14e", "#ee5a6a"][i % 4] + '" stroke="#2a1a2a" stroke-width="2"/>'; }
    let pews = ""; for (let y = 184; y < 250; y += 20) pews += '<rect x="30" y="' + y + '" width="130" height="10" rx="2" fill="#5a3218"/><rect x="240" y="' + y + '" width="130" height="10" rx="2" fill="#5a3218"/>';
    let dust = ""; [[160, ""], [190, "d2"], [222, "d3"], [176, "d3"], [210, ""]].forEach(d => dust += '<circle class="dst ' + d[1] + '" cx="' + d[0] + '" cy="110" r="1.6" fill="#fff6d8"/>');
    return svg(
      '<rect width="400" height="260" fill="#1a1420"/>' +
      '<path d="M90 260V80q110-90 220 0v180z" fill="#2a2030"/>' +
      '<circle cx="200" cy="92" r="52" fill="#3a2a4a" stroke="#8a7a6a" stroke-width="4"/>' + petals +
      '<circle cx="200" cy="92" r="14" fill="#f2c14e" stroke="#2a1a2a" stroke-width="2"/>' +
      '<path class="glw" d="M170 120L120 260h160L230 120z" fill="#ffe8b8" opacity=".25"/>' + dust +
      '<path d="M40 30v200M360 30v200" stroke="#3a2e3e" stroke-width="16"/>' +
      '<rect x="150" y="150" width="100" height="30" fill="#4a2a18"/><rect x="146" y="146" width="108" height="6" fill="#6a3e22"/>' +
      '<rect x="166" y="132" width="4" height="16" fill="#f4ecd8"/><path class="flk" d="M168 126q-3 4 0 6 3-2 0-6z" fill="#ffd27a"/>' +
      '<rect x="230" y="132" width="4" height="16" fill="#f4ecd8"/><path class="flk flk2" d="M232 126q-3 4 0 6 3-2 0-6z" fill="#ffd27a"/>' +
      pews + tag("STAINED GLASS", 14, 252, 22, PUR, -3) + tag("B.I.B.L.E.", 282, 252, 22, GLD, -5),
      "");
  }

  /* 5. Hanson Pl and St Felix St, under the bank tower: green signs, the tag wall, a lavender drip */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#f4ecff"/>' + wall("#2e2a3a", "#3a3446") +
      tag("KILLAH PRIEST", 24, 118, 28, PUR, -7) + tag("HEAVY MENTAL", 36, 166, 24, GLD, -3) + tag("SUNZ OF MAN", 46, 206, 22, TEAL, -2) +
      '<rect class="drp" x="96" y="120" width="3" height="8" fill="' + PUR + '"/><rect class="drp" x="176" y="108" width="3" height="8" fill="' + PUR + '" style="animation-delay:-1.1s"/>' +
      signs("Hanson Pl", "St Felix St"),
      sky("g5", "#0d0a22", "#2e2244"));
  }

  window.SCENES = { station, tower, opera, glass, corner };
})();
