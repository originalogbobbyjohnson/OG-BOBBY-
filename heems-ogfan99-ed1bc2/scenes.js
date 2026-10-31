/* Queens opening scenes for the Heems game (Flushing / Jackson Heights / Flushing Meadows). Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes glow{0%,100%{opacity:1}50%{opacity:.5}}' +
    '.glw{animation:glow 2.2s ease-in-out infinite}.glw2{animation-delay:1.1s}' +
    '@keyframes spray{0%{transform:translate(0,0) scale(1);opacity:.9}100%{transform:translate(0,-34px) scale(1.6);opacity:0}}' +
    '.jet{transform-box:fill-box;transform-origin:50% 100%;animation:spray 1.8s ease-out infinite}.jet2{animation-delay:-.6s}.jet3{animation-delay:-1.2s}' +
    '@keyframes turn{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.82)}}' +
    '.globe{transform-box:fill-box;transform-origin:50% 50%;animation:turn 6s ease-in-out infinite}' +
    '@keyframes run{0%{transform:translate(-420px,0)}100%{transform:translate(420px,0)}}' +
    '.el7{animation:run 7s linear infinite}' +
    '@keyframes flag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}' +
    '.fl{transform-box:fill-box;transform-origin:0 0;animation:flag 1.4s ease-in-out infinite}.fl2{animation-delay:-.7s}' +
    '@keyframes flick{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.3)}}' +
    '.flm{transform-box:fill-box;transform-origin:50% 100%;animation:flick .8s ease-in-out infinite}' +
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
  const SAF = "#f4a52b", MAG = "#e0457b", TEAL = "#3fb7a5", SEVEN = "#b933ad";

  /* 1. The 7 pulling into Flushing–Main St, the last stop, underground under Main Street */
  function train() {
    let tiles = "";
    for (let x = 0; x < 400; x += 20) for (let y = 20; y < 112; y += 10) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#e9e4d6"/>';
    let cols = "";
    for (let x = 24; x < 400; x += 340) cols += '<rect x="' + x + '" y="20" width="12" height="160" fill="' + SEVEN + '"/><rect x="' + (x - 2) + '" y="20" width="16" height="6" fill="#7a1f72"/>';
    let windows = "";
    for (let x = 22; x < 280; x += 46) windows += '<rect x="' + x + '" y="130" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#1b1f24"/>' +
      '<rect x="0" y="0" width="400" height="20" fill="#2a2f36"/>' + tiles +
      '<rect x="0" y="40" width="400" height="8" fill="' + SEVEN + '"/>' + cols +
      '<rect class="glw" x="60" y="6" width="80" height="6" rx="3" fill="#fff8d8"/><rect class="glw glw2" x="260" y="6" width="80" height="6" rx="3" fill="#fff8d8"/>' +
      '<rect x="66" y="58" width="268" height="34" rx="4" fill="#111"/><rect x="66" y="58" width="268" height="4" fill="#fff"/>' +
      '<text x="80" y="83" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Flushing–Main St</text>' +
      bullet(310, 76, "7", SEVEN) +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="160" width="300" height="5" fill="' + SEVEN + '"/>' + windows +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(292, 140, "7", SEVEN) +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#3a3d42"/>' +
      tag("SWET SHOP", 20, 238, 26, SAF, -4) + tag("HIMA", 300, 240, 30, MAG, -8));
  }

  /* 2. The Unisphere in Flushing Meadows Corona Park: stainless-steel globe, rings, fountains */
  function unisphere() {
    let lat = "", lon = "";
    for (let i = -3; i <= 3; i++) { const y = 100 + i * 18, r = Math.sqrt(Math.max(0, 66 * 66 - (i * 18) * (i * 18))); lat += '<ellipse cx="200" cy="' + y + '" rx="' + r.toFixed(1) + '" ry="' + (r * .12).toFixed(1) + '" fill="none" stroke="#c8d0d8" stroke-width="1.5"/>'; }
    for (let i = 1; i <= 3; i++) lon += '<ellipse cx="200" cy="100" rx="' + (66 * i / 3.4).toFixed(1) + '" ry="66" fill="none" stroke="#c8d0d8" stroke-width="1.5"/>';
    let jets = "";
    for (let x = 60; x <= 340; x += 28) jets += '<path class="jet' + (x % 3 ? " jet2" : "") + (x % 5 ? "" : " jet3") + '" d="M' + x + ' 214q-3-14 0-24q3 10 0 24z" fill="#d8f0ff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5f9a46"/>' +
      '<ellipse cx="200" cy="216" rx="180" ry="20" fill="#5aa0c8"/><ellipse cx="200" cy="216" rx="180" ry="20" fill="none" stroke="#d9d4c6" stroke-width="4"/>' +
      jets +
      /* tripod base */
      '<path d="M200 166L180 214M200 166L220 214M200 166v48" stroke="#9aa3ad" stroke-width="5"/>' +
      '<g class="globe">' +
        '<circle cx="200" cy="100" r="66" fill="none" stroke="#c8d0d8" stroke-width="3"/>' + lat + lon +
        /* the continents in steel plate */
        '<path d="M156 72q14-12 30-6q6 12-6 22q-10 10-18 0q-10-6-6-16z" fill="#aeb8c2"/><path d="M190 108q16-6 22 8q-4 18-14 22q-12-12-8-30z" fill="#aeb8c2"/>' +
        '<path d="M214 66q20-6 34 6q4 14-10 18q-16 0-24-10z" fill="#aeb8c2"/><path d="M236 112q10-2 14 8q-6 8-14 2z" fill="#aeb8c2"/>' +
      '</g>' +
      /* the three orbit rings */
      '<ellipse cx="200" cy="96" rx="96" ry="18" transform="rotate(-18 200 96)" fill="none" stroke="#dfe5ea" stroke-width="2.5"/>' +
      '<ellipse cx="200" cy="100" rx="90" ry="14" transform="rotate(14 200 100)" fill="none" stroke="#dfe5ea" stroke-width="2.5"/>' +
      '<ellipse cx="200" cy="104" rx="84" ry="22" transform="rotate(-4 200 104)" fill="none" stroke="#dfe5ea" stroke-width="2.5"/>' +
      '<circle cx="292" cy="68" r="3" fill="#fff"/><circle cx="114" cy="122" r="3" fill="#fff"/>',
      sky("g2", "#6db6e8", "#cfe9f7"));
  }

  /* 3. The Ganesh Temple on Bowne Street: carved pale-granite gopuram tower, temple bells, flame lamps */
  function temple() {
    let tiers = "";
    for (let i = 0; i < 5; i++) {
      const w = 120 - i * 20, x = 200 - w / 2, y = 120 - i * 16;
      tiers += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="16" fill="' + (i % 2 ? "#e2d6bd" : "#d6c8aa") + '" stroke="#a8977a" stroke-width="1"/>';
      for (let k = x + 6; k < x + w - 6; k += 12) tiers += '<rect x="' + k + '" y="' + (y + 4) + '" width="6" height="8" rx="3" fill="#a8977a"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<rect x="0" y="120" width="70" height="100" fill="#8a6a58"/><rect x="330" y="110" width="70" height="110" fill="#7a5e4e"/>' +
      /* the gopuram */
      tiers +
      '<path d="M176 56q24-26 48 0z" fill="#e2d6bd" stroke="#a8977a"/><circle cx="188" cy="48" r="3" fill="' + SAF + '"/><circle cx="200" cy="36" r="4" fill="' + SAF + '"/><circle cx="212" cy="48" r="3" fill="' + SAF + '"/>' +
      /* temple hall */
      '<rect x="100" y="136" width="200" height="84" fill="#e8dcc3" stroke="#a8977a"/>' +
      '<rect x="96" y="132" width="208" height="6" fill="#c9b994"/>' +
      '<path d="M176 220v-46q24-24 48 0v46z" fill="#5a3a24"/><path d="M182 220v-44q18-18 36 0v44z" fill="#7a4a2a"/>' +
      '<rect x="120" y="150" width="6" height="70" fill="#d6c8aa"/><rect x="274" y="150" width="6" height="70" fill="#d6c8aa"/>' +
      /* saffron flags and lamps */
      '<path d="M120 150v-22" stroke="#6a5a4a" stroke-width="2"/><path class="fl" d="M120 128l16 4-16 6z" fill="' + SAF + '"/>' +
      '<path d="M280 150v-22" stroke="#6a5a4a" stroke-width="2"/><path class="fl fl2" d="M280 128l16 4-16 6z" fill="' + SAF + '"/>' +
      '<path d="M146 212h14l-3 6h-8z" fill="#c9962e"/><path class="flm" d="M153 212q-4-6 0-12q4 6 0 12z" fill="#ffb53b"/>' +
      '<path d="M240 212h14l-3 6h-8z" fill="#c9962e"/><path class="flm" d="M247 212q-4-6 0-12q4 6 0 12z" fill="#ffb53b"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#2c2f36"/><rect x="0" y="220" width="400" height="4" fill="#8a8d95"/>',
      sky("g3", "#f28a5b", "#f9d58a"));
  }

  /* 4. Jackson Heights: 74th Street under the elevated 7, sari shops and sweet shops, the train rolling by up top */
  function jackson() {
    const shop = (x, w, c, sign) => '<rect x="' + x + '" y="120" width="' + w + '" height="100" fill="' + c + '"/>' +
      '<rect x="' + (x + 6) + '" y="128" width="' + (w - 12) + '" height="20" fill="#111"/><text x="' + (x + w / 2) + '" y="143" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="#ffe28a">' + sign + '</text>' +
      '<rect x="' + (x + 8) + '" y="158" width="' + (w - 16) + '" height="44" fill="#ffe9b0" opacity=".85"/>';
    let ties = "";
    [2, 95, 201, 295, 392].forEach(x => { ties += '<rect x="' + (x - 3) + '" y="60" width="7" height="160" fill="#4a7a5a"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      shop(0, 96, MAG, "SARIS") + shop(98, 104, TEAL, "SWEETS") + shop(204, 92, SAF, "CHAAT") + shop(298, 102, "#6a4fb0", "JEWELERS") +
      /* sari colors in the window */
      '<rect x="16" y="162" width="14" height="38" fill="' + SAF + '"/><rect x="34" y="162" width="14" height="38" fill="' + TEAL + '"/><rect x="52" y="162" width="14" height="38" fill="#ffe28a"/><rect x="70" y="162" width="12" height="38" fill="#7cc6e8"/>' +
      /* the el structure, green steel */
      ties + '<rect x="0" y="40" width="400" height="22" fill="#3f6e50"/><rect x="0" y="36" width="400" height="6" fill="#2c4f39"/>' +
      '<g class="el7"><rect x="20" y="8" width="360" height="28" rx="5" fill="#c9ced6"/><rect x="20" y="28" width="360" height="4" fill="' + SEVEN + '"/>' +
        '<rect x="40" y="14" width="22" height="10" fill="#cfe6ff"/><rect x="90" y="14" width="22" height="10" fill="#cfe6ff"/><rect x="140" y="14" width="22" height="10" fill="#cfe6ff"/><rect x="230" y="14" width="22" height="10" fill="#cfe6ff"/><rect x="280" y="14" width="22" height="10" fill="#cfe6ff"/>' +
        bullet(350, 20, "7", SEVEN) + '</g>' +
      /* string lights */
      '<path d="M0 108q100 14 200 0t200 0" stroke="#555" stroke-width="1" fill="none"/>' +
      '<circle class="glw" cx="40" cy="112" r="3" fill="#ffe28a"/><circle class="glw glw2" cx="100" cy="115" r="3" fill="' + MAG + '"/><circle class="glw" cx="160" cy="112" r="3" fill="' + TEAL + '"/><circle class="glw glw2" cx="240" cy="111" r="3" fill="#ffe28a"/><circle class="glw" cx="300" cy="114" r="3" fill="' + MAG + '"/><circle class="glw glw2" cx="360" cy="112" r="3" fill="' + SAF + '"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#2c2f36"/><rect x="0" y="220" width="400" height="4" fill="#8a8d95"/>',
      sky("g4", "#2a1e4a", "#7a4a7a"));
  }

  /* 5. The corner: Bowne St and Holly Av, by the temple in Flushing */
  function corner() {
    let brick = "";
    for (let y = 60; y < 220; y += 12) for (let x = (y / 12) % 2 ? 0 : -18; x < 250; x += 36) brick += '<rect x="' + Math.max(0, x) + '" y="' + y + '" width="' + Math.min(34, 250 - Math.max(0, x), x + 34) + '" height="10" fill="#6a3a2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' +
      '<rect x="0" y="56" width="250" height="168" fill="#4e2a1e"/>' + brick +
      tag("DAS RACIST", 22, 92, 20, TEAL, -4) + tag("HEEMS", 26, 156, 50, SAF, -7) + tag("QUEENS", 70, 200, 24, MAG, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#2c2f36"/><rect x="0" y="224" width="400" height="4" fill="#8a8d95"/>' +
      '<rect x="292" y="40" width="5" height="184" fill="#1d2329"/>' +
      '<rect x="254" y="44" width="82" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="295" y="57" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Bowne St</text>' +
      '<rect x="258" y="66" width="74" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="295" y="79" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Holly Av</text>' +
      /* a little tree and a saffron flag */
      '<rect x="362" y="70" width="5" height="154" fill="#4a3424"/><circle cx="364" cy="66" r="22" fill="#5f9a46"/>' +
      '<path d="M330 224v-80" stroke="#6a5a4a" stroke-width="2"/><path class="fl" d="M330 144l18 5-18 7z" fill="' + SAF + '"/>',
      sky("g5", "#f6c87a", "#e88b6a"));
  }

  window.SCENES = { train, unisphere, temple, jackson, corner };
})();
