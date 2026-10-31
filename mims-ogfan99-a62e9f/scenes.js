/* Washington Heights opening scenes for the Mims game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}.flk3{animation-delay:1.4s}' +
    '@keyframes ripple{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}' +
    '.rip{animation:ripple 3s linear infinite}' +
    '@keyframes boat{from{transform:translateX(-80px)}to{transform:translateX(480px)}}' +
    '.boat{animation:boat 16s linear infinite}.slow{animation-duration:22s;animation-delay:-8s}' +
    '@keyframes fly{0%{transform:translate(-40px,20px)}100%{transform:translate(440px,-30px)}}' +
    '.bird{animation:fly 9s linear infinite}.bird2{animation-delay:3s}' +
    '@keyframes beam{0%,100%{opacity:.08}50%{opacity:.35}}' +
    '.beam{animation:beam 2s ease-in-out infinite}' +
    '@keyframes leaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-60px,260px) rotate(360deg)}}' +
    '.leaf{transform-box:fill-box;animation:leaf 7s linear infinite}.lf2{animation-delay:2.3s}.lf3{animation-delay:4.6s}' +
    '@keyframes heat{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.15)}}' +
    '.heat{transform-box:fill-box;transform-origin:50% 100%;animation:heat .8s ease-in-out infinite}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const FIRE = "#ff5a1f", GOLD = "#ffc93c", SKY = "#4fc3f7";
  const river = (y, color) => {
    let r = '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + color + '"/><g class="rip">';
    for (let row = 0; row < 4; row++) for (let x = -20; x < 460; x += 40) r += '<path d="M' + (x + (row % 2) * 20) + ' ' + (y + 10 + row * 12) + 'q10 -4 20 0" stroke="#fff" stroke-width="1.2" fill="none" opacity=".25"/>';
    return r + '</g>';
  };

  /* 1. The A train pulling into 181 St, deep underground under Fort Washington Av */
  function train() {
    let tiles = "";
    for (let y = 0; y < 116; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#e9e3d2"/>';
    let windows = "";
    for (let x = 18; x < 280; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#d6f0ff" opacity=".85"/>';
    let cols = "";
    for (let x = 24; x < 400; x += 88) cols += '<rect x="' + x + '" y="0" width="10" height="182" fill="#2c4a6a"/>';
    return svg(
      '<rect width="400" height="260" fill="#cfc6b0"/>' + tiles +
      '<rect x="0" y="16" width="400" height="10" fill="#7a4a8a"/><rect x="0" y="100" width="400" height="8" fill="#7a4a8a"/>' +
      '<rect x="0" y="108" width="400" height="74" fill="#1a1a1e"/>' + cols +
      '<rect x="96" y="40" width="208" height="34" rx="4" fill="#111"/>' +
      '<rect x="96" y="40" width="208" height="4" fill="#fff"/>' +
      '<text x="110" y="65" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">181 St</text>' +
      bullet(280, 58, "A", "#0039a6") +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="#0039a6"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#d6f0ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(272, 139, "A", "#0039a6") +
      '</g>' +
      '<rect x="0" y="180" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#2a2724"/>' +
      tag("THE HEIGHTS", 18, 240, 26, GOLD, -4) + tag("MIMS", 290, 242, 34, FIRE, -8));
  }

  /* 2. The George Washington Bridge: gray steel towers, the cables, the Little Red Lighthouse underneath */
  function gwb() {
    const tower = x => {
      let t = '<rect x="' + x + '" y="30" width="34" height="140" fill="#8c9399"/>';
      for (let y = 38; y < 160; y += 22) t += '<path d="M' + (x + 3) + ' ' + y + 'l28 20M' + (x + 31) + ' ' + y + 'l-28 20" stroke="#5f666c" stroke-width="2.4"/>';
      return t + '<rect x="' + (x - 2) + '" y="26" width="38" height="6" fill="#6e757b"/>';
    };
    let hang = "";
    for (let x = 4; x < 400; x += 10) {
      const y = x < 92 ? 100 - (x / 92) * 70 : x < 316 ? 30 + 78 * (1 - Math.pow((x - 204) / 112, 2)) : 30 + ((x - 316) / 84) * 70;
      hang += '<path d="M' + x + ' ' + y.toFixed(1) + 'V122" stroke="#8c9399" stroke-width=".8" opacity=".7"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<path d="M0 132q100-24 200-8t200-10v40H0z" fill="#3c5a3a"/>' +
      hang +
      '<path d="M0 100L92 30Q204 140 316 30L400 100" fill="none" stroke="#8c9399" stroke-width="3"/>' +
      tower(75) + tower(299) +
      '<rect x="0" y="120" width="400" height="10" fill="#6e757b"/><rect x="0" y="130" width="400" height="4" fill="#4a5056"/>' +
      river(160, "#22445e") +
      '<path d="M300 160l10-8 30 0 10 8z" fill="#5a4a36"/>' +
      '<path d="M314 152l3-34h16l3 34z" fill="#c8202e"/><rect x="315" y="110" width="20" height="9" fill="#2a2a2a"/><path d="M313 110l12-8 12 8z" fill="#c8202e"/>' +
      '<rect class="flk" x="319" y="112" width="12" height="5" fill="#fff4b0"/>' +
      '<path class="beam" d="M331 114l70-18v30z" fill="#fff4b0"/>' +
      '<g class="boat slow"><path d="M0 206h56l-8 10h-40z" fill="#f2f2f2"/><rect x="14" y="196" width="22" height="10" fill="' + SKY + '"/></g>' +
      '<text x="200" y="246" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="4" fill="' + GOLD + '">GEORGE WASHINGTON BRIDGE</text>',
      sky("g2", "#ff9a52", "#ffd9a0"));
  }

  /* 3. The ornate theater on Broadway at 175th: cream and terracotta facade, gold trim, a marquee of lights */
  function palace() {
    let bulbs = "";
    for (let x = 84; x <= 316; x += 12) bulbs += '<circle class="flk' + (x % 36 === 0 ? " flk2" : x % 24 === 0 ? " flk3" : "") + '" cx="' + x + '" cy="152" r="3" fill="#fff2a8"/><circle class="flk' + (x % 36 === 0 ? " flk3" : "") + '" cx="' + x + '" cy="186" r="3" fill="#fff2a8"/>';
    let arches = "";
    for (let i = 0; i < 5; i++) arches += '<path d="M' + (118 + i * 34) + ' 128v-34a12 14 0 0 1 24 0v34z" fill="#7a3d22" stroke="' + GOLD + '" stroke-width="1.5"/>';
    let orn = "";
    for (let x = 64; x < 340; x += 16) orn += '<circle cx="' + x + '" cy="64" r="4" fill="none" stroke="' + GOLD + '" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<rect x="0" y="80" width="60" height="140" fill="#5a3a2c"/><rect x="340" y="70" width="60" height="150" fill="#6a4433"/>' +
      '<rect x="56" y="44" width="288" height="176" fill="#e8d6b4"/>' +
      '<path d="M56 44h288l-12-14H68z" fill="#c26a3a"/>' + orn +
      '<rect x="56" y="74" width="288" height="6" fill="#c26a3a"/>' +
      '<rect x="100" y="84" width="200" height="48" fill="#d4b58a"/>' + arches +
      '<rect x="74" y="140" width="252" height="54" rx="3" fill="#2a1a12" stroke="' + GOLD + '" stroke-width="3"/>' + bulbs +
      '<text x="200" y="175" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" letter-spacing="3" fill="' + FIRE + '">TONIGHT: MIMS</text>' +
      '<rect x="150" y="196" width="100" height="24" fill="#3a2418"/><path d="M200 196v24" stroke="' + GOLD + '"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#25282d"/><path d="M0 240h400" stroke="#f4f1e8" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<text x="200" y="24" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="4" fill="' + GOLD + '">BROADWAY AT 175TH</text>',
      sky("g3", "#0d0a18", "#3a2240"));
  }

  /* 4. Fort Tryon Park: the stone monastery tower on the hill over the Hudson, autumn leaves falling */
  function cloisters() {
    let trees = "";
    [[20, 170, "#d9822b"], [60, 160, "#b8461e"], [330, 166, "#e0a030"], [372, 158, "#c0521e"], [110, 182, "#7a8a2a"], [290, 184, "#d9822b"]].forEach(t => {
      trees += '<rect x="' + (t[0] - 2) + '" y="' + t[1] + '" width="4" height="40" fill="#4a3424"/><circle cx="' + t[0] + '" cy="' + t[1] + '" r="22" fill="' + t[2] + '"/>';
    });
    let leaves = "";
    [[80, "#d9822b", ""], [220, "#b8461e", " lf2"], [340, "#e0a030", " lf3"], [160, "#c0521e", " lf2"]].forEach(l => {
      leaves += '<ellipse class="leaf' + l[2] + '" cx="' + l[0] + '" cy="10" rx="4" ry="2.5" fill="' + l[1] + '"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<path d="M0 160q100-60 200-50t200 30v80H0z" fill="#4e6a34"/>' +
      '<rect x="120" y="100" width="170" height="60" fill="#b7aa92"/>' +
      '<path d="M120 100h170l-6-10H126z" fill="#8a4a32"/>' +
      '<rect x="176" y="34" width="54" height="76" fill="#c2b59c"/>' +
      '<path d="M172 34h62l-31-18z" fill="#8a4a32"/>' +
      '<path d="M190 60v-10a6 8 0 0 1 12 0v10zM206 60v-10a6 8 0 0 1 12 0v10z" fill="#3a3228"/>' +
      '<path d="M138 140v-18a8 10 0 0 1 16 0v18zM162 140v-18a8 10 0 0 1 16 0v18zM234 140v-18a8 10 0 0 1 16 0v18zM258 140v-18a8 10 0 0 1 16 0v18z" fill="#3a3228"/>' +
      '<path d="M120 100v60M290 100v60" stroke="#9c8e76" stroke-width="3"/>' +
      '<path d="M0 200q200-30 400 0v60H0z" fill="#3c5a2a"/>' + trees + leaves +
      '<g class="bird"><path d="M0 50q6-6 12 0q6-6 12 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<g class="bird bird2"><path d="M0 70q5-5 10 0q5-5 10 0" stroke="#222" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="246" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="15" letter-spacing="4" fill="#fff">FORT TRYON PARK</text>',
      sky("g4", "#5d8fc4", "#f2d6a0"));
  }

  /* 5. St Nicholas Av and W 181 St: green street signs, streetlight, the tag wall with a little heat coming off it */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(14) +
      '<rect x="20" y="70" width="230" height="150" fill="#3a3a40"/>' +
      '<g class="heat"><path d="M190 120q-12-20 4-40q2 14 10 18q4-12 0-22q22 18 10 44z" fill="' + FIRE + '" opacity=".9"/><path d="M196 120q-4-12 4-22q4 10 8 12q2 8-4 10z" fill="' + GOLD + '"/></g>' +
      tag("MIMS", 40, 146, 50, FIRE, -7) + tag("I'M HOT", 52, 200, 30, GOLD, -3) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="256" y="88" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">St Nicholas Av</text>' +
      '<rect x="262" y="110" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">W 181 St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1424", "#2a3a5a"));
  }

  window.SCENES = { train, gwb, palace, cloisters, corner };
})();
