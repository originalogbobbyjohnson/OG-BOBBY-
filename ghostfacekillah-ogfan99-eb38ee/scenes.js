/* Stapleton, Staten Island opening scenes for Ghostface Killah's game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes leaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,240px) rotate(300deg);opacity:.9}}' +
    '.leaf{animation:leaf 6s linear infinite}.l2{animation-delay:-1.5s}.l3{animation-delay:-3s}.l4{animation-delay:-4.5s}' +
    '@keyframes tug{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.tug{animation:tug 18s linear infinite;animation-delay:-7s}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}' +
    '.bob{animation:bob 1.8s ease-in-out infinite}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-12px)}100%{transform:translate(440px,4px)}}' +
    '.gul{animation:gull 12s linear infinite}' +
    '@keyframes win{0%,60%,100%{opacity:.95}65%,90%{opacity:.15}}' +
    '.win{animation:win 5s infinite}.w2{animation-delay:-1.7s}.w3{animation-delay:-3.3s}' +
    '@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}' +
    '.bnc{animation:bounce 1s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}' +
    '.drp{animation:drip 2.2s ease-in infinite}' +
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
  const GOLD = "#f2c14e", RED = "#e63946", BLUE = "#5ec8ff";
  const FONT = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';

  /* 1. Stapleton: the elevated SIR station over Bay St, island platform, the train pulling in at dusk */
  function station() {
    let windows = "";
    for (let x = 22; x < 290; x += 44) windows += '<rect x="' + x + '" y="98" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let shops = "";
    [[10, "#7a4a3a"], [92, "#5a6a7a"], [174, "#8a6a4a"], [256, "#6a4a5a"], [338, "#4a5a4a"]].forEach(b => {
      shops += '<rect x="' + b[0] + '" y="196" width="76" height="40" fill="' + b[1] + '"/>' +
        '<rect class="flk' + (b[0] % 3 ? "" : " flk2") + '" x="' + (b[0] + 8) + '" y="210" width="26" height="18" fill="#ffd98a" opacity=".85"/>' +
        '<rect x="' + (b[0] + 42) + '" y="210" width="26" height="18" fill="#ffd98a" opacity=".55"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g1)"/>' + stars(10) +
      '<circle cx="352" cy="54" r="12" fill="#ffe2a8"/>' +
      /* the canopy over the island platform */
      '<path d="M0 14h400v8H0z" fill="#3a4250"/><rect x="0" y="22" width="400" height="3" fill="#0039a6"/>' +
      '<rect x="60" y="25" width="5" height="64" fill="#59616e"/><rect x="200" y="25" width="5" height="64" fill="#59616e"/><rect x="340" y="25" width="5" height="64" fill="#59616e"/>' +
      '<circle class="flk" cx="130" cy="30" r="3" fill="#fff4c8"/><circle class="flk flk2" cx="270" cy="30" r="3" fill="#fff4c8"/>' +
      /* black station sign */
      '<rect x="98" y="40" width="204" height="32" rx="4" fill="#111"/><rect x="98" y="40" width="204" height="4" fill="#fff"/>' +
      '<text x="112" y="64" ' + FONT + ' font-size="16" fill="#fff">Stapleton</text>' + sir(276, 57) +
      /* the SIR car: stainless with the blue band */
      '<g class="anim-train">' +
        '<rect x="8" y="88" width="300" height="56" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="124" width="300" height="6" fill="#0039a6"/>' + windows +
        '<circle cx="300" cy="136" r="4" fill="#fff6c2"/>' + sir(262, 136) +
      '</g>' +
      /* platform edge + the elevated deck and its steel columns down to Bay St */
      '<rect x="0" y="144" width="400" height="8" fill="#eab308"/>' +
      '<rect x="0" y="152" width="400" height="16" fill="#4a505a"/><path d="M0 168h400" stroke="#2a2e36" stroke-width="3"/>' +
      '<rect x="40" y="168" width="10" height="68" fill="#3a3f48"/><rect x="190" y="168" width="10" height="68" fill="#3a3f48"/><rect x="340" y="168" width="10" height="68" fill="#3a3f48"/>' +
      shops +
      '<rect x="0" y="236" width="400" height="24" fill="#16191e"/><path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      tag("STAPLETON", 14, 250, 24, GOLD, -3) + tag("GHOST", 290, 252, 26, RED, -6),
      sky("g1", "#1c2148", "#d8875a"));
  }

  /* 2. Tappen Park: the old Edgewater Village Hall, red brick with its tall square tower, autumn leaves coming down */
  function villagehall() {
    let arches = "";
    [140, 176, 212, 248].forEach(x => arches += '<path d="M' + x + ' 196v-26a8 8 0 0 1 16 0v26z" fill="#2c3a4a" stroke="#e8dcc0" stroke-width="2"/>');
    let upper = "";
    [140, 176, 212, 248].forEach(x => upper += '<path d="M' + x + ' 150v-18a8 8 0 0 1 16 0v18z" fill="#2c3a4a" stroke="#e8dcc0" stroke-width="2"/>');
    let leaves = "";
    ["", " l2", " l3", " l4"].forEach((l, i) => { leaves += '<path class="leaf' + l + '" d="M' + (40 + i * 100) + ' 0q6-6 10 0q-4 6-10 0z" fill="' + ["#e09a2a", "#c8551f", "#e0b22a", "#a83a22"][i] + '"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="60" cy="44" r="18" fill="#fff1c8" opacity=".9"/>' +
      /* trees on both sides of the park */
      '<rect x="30" y="120" width="8" height="90" fill="#4a3a2c"/><circle cx="34" cy="112" r="34" fill="#c8551f"/><circle cx="60" cy="132" r="22" fill="#e09a2a"/>' +
      '<rect x="356" y="116" width="8" height="94" fill="#4a3a2c"/><circle cx="360" cy="108" r="34" fill="#d9862a"/><circle cx="332" cy="130" r="20" fill="#a83a22"/>' +
      /* the hall: red brick body, stone trim, gray slate roof */
      '<rect x="128" y="118" width="144" height="86" fill="#a3402c" stroke="#5e2216" stroke-width="2"/>' +
      '<path d="M122 120l18-20h120l18 20z" fill="#4c5560" stroke="#2e343c" stroke-width="2" stroke-linejoin="round"/>' +
      '<rect x="128" y="158" width="144" height="5" fill="#e8dcc0"/>' + upper + arches +
      /* the tower with its clock and pyramid roof */
      '<rect x="186" y="44" width="30" height="78" fill="#a3402c" stroke="#5e2216" stroke-width="2"/>' +
      '<path d="M182 46l19-26 19 26z" fill="#4c5560" stroke="#2e343c" stroke-width="2" stroke-linejoin="round"/>' +
      '<rect x="182" y="44" width="38" height="5" fill="#e8dcc0"/>' +
      '<circle cx="201" cy="66" r="9" fill="#f6efdc" stroke="#2e343c" stroke-width="2"/><path d="M201 66v-6M201 66l4 3" stroke="#2e343c" stroke-width="1.6"/>' +
      '<path d="M195 104v-16a6 6 0 0 1 12 0v16z" fill="#2c3a4a" stroke="#e8dcc0" stroke-width="1.6"/>' +
      /* steps, lawn, a park bench and a lamp */
      '<rect x="182" y="196" width="38" height="8" fill="#cfc6b2"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#4f7a33"/><path d="M160 260l26-56h30l26 56z" fill="#c9b48a"/>' +
      '<rect x="70" y="218" width="44" height="5" fill="#2f5a3a"/><rect x="72" y="223" width="3" height="10" fill="#222"/><rect x="108" y="223" width="3" height="10" fill="#222"/>' +
      '<rect x="300" y="170" width="4" height="56" fill="#222"/><circle class="flk" cx="302" cy="168" r="6" fill="#ffe7a8"/>' +
      leaves + tag("TAPPEN PARK", 18, 248, 22, GOLD, -3),
      sky("g2", "#7fb0d8", "#f2d9a8"));
  }

  /* 3. The Stapleton waterfront: the old Homeport pier, a tugboat on the Upper Bay, Brooklyn across the water, gulls */
  function waterfront() {
    let brooklyn = "";
    [[0, 30, 10], [32, 20, 18], [54, 26, 8], [82, 18, 22], [102, 30, 12], [134, 24, 16], [160, 40, 9], [202, 22, 20], [226, 30, 11], [258, 20, 15], [280, 34, 9], [316, 26, 18], [344, 56, 10]].forEach(b =>
      brooklyn += '<rect x="' + b[0] + '" y="' + (112 - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '" fill="#4a5a76"/>');
    let rail = "";
    for (let x = 4; x < 400; x += 16) rail += '<rect x="' + x + '" y="196" width="3" height="18" fill="#1d2329"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<circle cx="300" cy="56" r="20" fill="#ffd27a"/>' +
      '<path class="gul" d="M20 50q6-6 12 0q6-6 12 0" stroke="#2a2a2a" stroke-width="2" fill="none"/>' +
      '<rect x="0" y="112" width="400" height="76" fill="#2f6488"/>' + brooklyn +
      '<path class="shim" d="M30 130h50M180 146h70M300 128h60" stroke="#ffd27a" stroke-width="2"/>' +
      '<path class="shim shim2" d="M90 162h60M240 170h70" stroke="#cde4f2" stroke-width="2"/>' +
      /* a red tugboat pushing across */
      '<g class="tug"><g class="bob">' +
        '<path d="M0 160h78l-8 14H8z" fill="' + RED + '" stroke="#5a1418" stroke-width="1.5"/>' +
        '<rect x="22" y="144" width="30" height="16" fill="#f4efe2" stroke="#5a5a5a" stroke-width="1.2"/><rect x="30" y="134" width="18" height="10" fill="#f4efe2" stroke="#5a5a5a" stroke-width="1.2"/>' +
        '<rect x="56" y="140" width="6" height="20" fill="#222"/><rect x="26" y="148" width="6" height="6" fill="#2c3a4a"/><rect x="38" y="148" width="6" height="6" fill="#2c3a4a"/>' +
        '<path d="M78 160v14" stroke="#1d1d1d" stroke-width="4"/>' +
      '</g></g>' +
      /* the pier deck, rail and lamps */
      '<rect x="0" y="186" width="400" height="30" fill="#3d4a56"/><rect x="0" y="186" width="400" height="6" fill="#8a8f96"/>' + rail + '<path d="M0 196h400" stroke="#1d2329" stroke-width="3"/>' +
      '<rect x="0" y="214" width="400" height="46" fill="#5c5f66"/><path d="M0 228h400M0 244h400" stroke="#4a4d54" stroke-width="2"/>' +
      '<rect x="110" y="150" width="4" height="64" fill="#1d2329"/><circle class="flk" cx="112" cy="148" r="5" fill="#ffe7a8"/>' +
      '<rect x="290" y="150" width="4" height="64" fill="#1d2329"/><circle class="flk flk2" cx="292" cy="148" r="5" fill="#ffe7a8"/>' +
      tag("SHAOLIN", 18, 250, 26, GOLD, -3) + tag("WIZZOP", 270, 250, 22, BLUE, -5),
      sky("g3", "#f0a868", "#ffd9a0"));
  }

  /* 4. Stapleton Houses: the brick towers at night, windows lighting up, a ball bouncing on the courtyard court */
  function houses() {
    const tower = (x, w, top) => {
      let s = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (210 - top) + '" fill="#7a3a2a" stroke="#3e1a12" stroke-width="2"/>';
      let k = 0;
      for (let y = top + 10; y < 200; y += 14) for (let xx = x + 8; xx < x + w - 8; xx += 14) {
        k++;
        const lit = (k * 7) % 5;
        s += '<rect class="' + (lit === 0 ? "win" : lit === 1 ? "win w2" : lit === 2 ? "win w3" : "") + '" x="' + xx + '" y="' + y + '" width="7" height="8" fill="' + (lit < 4 ? "#ffd98a" : "#2a1e1a") + '"/>';
      }
      return s;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(22) +
      '<circle cx="200" cy="34" r="12" fill="#fff1d6"/>' +
      tower(10, 110, 60) + tower(150, 100, 40) + tower(280, 110, 70) +
      /* the courtyard, a hoop and a bouncing ball */
      '<rect x="0" y="210" width="400" height="50" fill="#3a3f46"/><path d="M60 260l30-50h220l30 50" fill="none" stroke="#eadfc8" stroke-width="2"/>' +
      '<rect x="196" y="172" width="4" height="40" fill="#1d1d1d"/><rect x="186" y="166" width="24" height="14" fill="#f4f4f4" stroke="#1d1d1d" stroke-width="1.5"/>' +
      '<path d="M190 182h16" stroke="' + RED + '" stroke-width="2.5"/>' +
      '<circle class="bnc" cx="230" cy="236" r="6" fill="#e07a2a" stroke="#6a3010" stroke-width="1.2"/>' +
      '<rect x="20" y="214" width="56" height="6" fill="#2f5a3a"/><rect x="330" y="214" width="56" height="6" fill="#2f5a3a"/>' +
      tag("STAPLETON", 14, 252, 24, GOLD, -3) + tag("WU", 340, 250, 30, RED, -8),
      sky("g4", "#0b0d22", "#2a2440"));
  }

  /* 5. Broad St and Tompkins Ave in Stapleton: green signs, the tag wall, a wet drip under the piece */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="30" r="12" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="60" width="240" height="160" fill="#4a2a24"/>'; for (let y = 62; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#5a3229"/>'; return b; })() +
      '<rect x="16" y="56" width="240" height="6" fill="#2a1a16"/>' +
      tag("GHOSTFACE", 24, 122, 36, GOLD, -7) + tag("TONY STARKS", 34, 168, 26, RED, -3) + tag("WIZZOP", 50, 204, 24, BLUE, -2) +
      '<rect class="drp" x="120" y="126" width="3" height="8" fill="' + GOLD + '"/><rect class="drp" x="186" y="114" width="3" height="8" fill="' + GOLD + '" style="animation-delay:-1s"/>' +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="266" y="88" width="72" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Broad St</text>' +
      '<rect x="258" y="110" width="88" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" ' + FONT + ' font-size="11" fill="#fff">Tompkins Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1022", "#3a2a3a"));
  }

  window.SCENES = { station, villagehall, waterfront, houses, corner };
})();
