/* St. George / North Shore opening scenes for the NYOIL game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ferry{from{transform:translateX(-150px)}to{transform:translateX(430px)}}' +
    '.fry{animation:ferry 16s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}' +
    '.bob{animation:bob 2.4s ease-in-out infinite}' +
    '@keyframes wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}' +
    '.wv{animation:wave 3s linear infinite}' +
    '@keyframes gull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-12px)}100%{transform:translate(440px,4px)}}' +
    '.gul{animation:gull 11s linear infinite}' +
    '@keyframes carR{from{transform:translateX(-60px)}to{transform:translateX(460px)}}' +
    '@keyframes carL{from{transform:translateX(460px)}to{transform:translateX(-60px)}}' +
    '.cr1{animation:carR 5s linear infinite}.cr2{animation:carR 5s linear infinite;animation-delay:-2.6s}' +
    '.cl1{animation:carL 6s linear infinite}.cl2{animation:carL 6s linear infinite;animation-delay:-3.1s}' +
    '@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}' +
    '.blk{animation:blink 1.6s infinite}.blk2{animation-delay:.8s}' +
    '@keyframes fall{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,120px) rotate(200deg);opacity:0}}' +
    '.lf{animation:fall 5s linear infinite}.lf2{animation-delay:1.7s}.lf3{animation-delay:3.3s}' +
    '@keyframes drip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(16px);opacity:0}}' +
    '.drp{animation:drip 2.2s ease-in infinite}' +
    '@keyframes flutter{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}' +
    '.flg{transform-box:fill-box;transform-origin:0 50%;animation:flutter 1.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  /* Staten Island Railway "SIR" bullet: blue, a little wider than a subway bullet */
  const sir = (x, y) =>
    '<rect x="' + (x - 17) + '" y="' + (y - 11) + '" width="34" height="22" rx="11" fill="#0039a6"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">SIR</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffd34d", ORANGE = "#ff7a1a", BLUE = "#4fb3ff";
  /* the orange Staten Island Ferry, facing right; s = scale */
  const ferryBoat = s =>
    '<g transform="scale(' + s + ')">' +
      '<path d="M0 40h140l-10 16H10z" fill="#e8601c" stroke="#7a2a08" stroke-width="1.5"/>' +
      '<rect x="6" y="36" width="128" height="5" fill="#f7f3ea"/>' +
      '<rect x="14" y="20" width="112" height="16" fill="' + ORANGE + '" stroke="#7a2a08" stroke-width="1.2"/>' +
      (function () { let w = ""; for (let x = 18; x < 122; x += 10) w += '<rect x="' + x + '" y="24" width="6" height="7" fill="#1b2a3a"/>'; return w; })() +
      '<rect x="30" y="8" width="80" height="12" fill="' + ORANGE + '" stroke="#7a2a08" stroke-width="1.2"/>' +
      '<rect x="56" y="0" width="28" height="8" fill="#f7f3ea" stroke="#7a2a08" stroke-width="1"/>' +
      '<rect x="66" y="-10" width="8" height="10" fill="#1b1b1b"/>' +
      '<rect x="34" y="11" width="72" height="5" fill="#1b2a3a" opacity=".85"/>' +
    '</g>';

  /* 1. St. George: the SIR train waiting at the end of the line, in the terminal's covered platform */
  function station() {
    let ribs = "";
    for (let x = 0; x <= W; x += 40) ribs += '<rect x="' + (x - 3) + '" y="40" width="6" height="140" fill="#3a4450"/>';
    let windows = "";
    for (let x = 20; x < 290; x += 44) windows += '<rect x="' + x + '" y="124" width="28" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#11161d"/>' +
      /* the trainshed roof and its skylights */
      '<path d="M0 0h400v44H0z" fill="#232b35"/>' +
      (function () { let l = ""; for (let x = 20; x < 400; x += 80) l += '<rect x="' + x + '" y="10" width="44" height="14" rx="2" fill="#5d7b93" opacity=".6"/>'; return l; })() +
      '<rect x="0" y="40" width="400" height="6" fill="#3a4450"/>' + ribs +
      /* hanging lights */
      '<circle cx="60" cy="58" r="4" fill="#fff3c4"/><circle cx="200" cy="58" r="4" fill="#fff3c4"/><circle cx="340" cy="58" r="4" fill="#fff3c4"/>' +
      /* station sign */
      '<rect x="88" y="66" width="224" height="34" rx="4" fill="#111"/>' +
      '<rect x="88" y="66" width="224" height="4" fill="#fff"/>' +
      '<text x="102" y="91" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">St. George</text>' +
      sir(284, 84) +
      /* SIR car: stainless with the blue band */
      '<g class="anim-train">' +
        '<rect x="8" y="112" width="300" height="66" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="154" width="300" height="6" fill="#0039a6"/>' + windows +
        '<rect x="286" y="124" width="14" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="300" cy="168" r="4" fill="#fff6c2"/>' +
        sir(270, 168) +
      '</g>' +
      /* platform edge + the floor */
      '<rect x="0" y="178" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="188" width="400" height="72" fill="#1c232c"/>' +
      '<text x="200" y="212" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="3" fill="#9fb2c4">FERRY ↑ THIS WAY</text>' +
      tag("NYOIL", 26, 246, 30, GOLD, -4) + tag("UMC'S", 292, 246, 28, BLUE, -7));
  }

  /* 2. The St. George ferry terminal, the orange boat pulling out across the harbor at sunset */
  function ferry() {
    let waves = "";
    for (let x = 0; x < 460; x += 40) waves += '<path d="M' + x + ' 0q10-4 20 0t20 0" stroke="#9fd0f0" stroke-width="1.5" fill="none" opacity=".5"/>';
    let sky2 = "";
    [[20, 112, 10, 26], [36, 104, 12, 34], [54, 96, 10, 42], [68, 108, 14, 30], [86, 100, 8, 38], [98, 110, 12, 28]].forEach(([x, y, w, h]) => sky2 += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#3c3552"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="90" cy="92" r="22" fill="#ffd38a" opacity=".9"/>' +
      /* lower Manhattan far across the harbor */
      sky2 + '<path d="M58 96l4-24 4 24z" fill="#3c3552"/>' +
      /* water */
      '<rect x="0" y="138" width="400" height="122" fill="#1d4f75"/>' +
      '<g class="wv" transform="translate(0 0)"><g transform="translate(0 160)">' + waves + '</g><g transform="translate(-20 190)">' + waves + '</g><g transform="translate(0 224)">' + waves + '</g></g>' +
      /* the terminal on the right: glass front, big green-trimmed canopy, ST. GEORGE letters */
      '<rect x="252" y="80" width="148" height="64" fill="#cfd8de" stroke="#5a6670" stroke-width="2"/>' +
      '<path d="M240 82h160v-14q-80-18-160 0z" fill="#2f6b58"/>' +
      (function () { let g = ""; for (let x = 258; x < 400; x += 16) g += '<rect x="' + x + '" y="90" width="12" height="34" fill="#8fb3c9" opacity=".8"/>'; return g; })() +
      '<rect x="252" y="128" width="148" height="16" fill="#9aa6ae"/>' +
      '<text x="326" y="140" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" letter-spacing="3" fill="#1b2a3a">ST. GEORGE</text>' +
      /* the slip pilings */
      '<rect x="240" y="132" width="5" height="24" fill="#3b2c22"/><rect x="226" y="134" width="5" height="22" fill="#3b2c22"/>' +
      /* the ferry */
      '<g class="fry"><g transform="translate(0 106)"><g class="bob">' + ferryBoat(0.8) + '</g></g></g>' +
      '<g class="gul"><path d="M0 50q5-5 10 0q5-5 10 0" stroke="#f7f3ea" stroke-width="1.6" fill="none"/></g>' +
      '<rect x="0" y="236" width="400" height="24" fill="#0f2b40" opacity=".7"/>' +
      '<text x="18" y="252" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="3" fill="#ffd38a">FREE RIDE · 24 HOURS</text>',
      sky("g2", "#2a1d3d", "#f08a4b"));
  }

  /* 3. St. Peter's on St. Marks Pl (New Brighton, 1903): the big Romanesque church with the tall square bell tower over the North Shore, tan brick, red tile roof, leaves coming down */
  function snug() {
    let brick = ""; for (let y = 100; y < 212; y += 8) for (let x = (y / 8) % 2 ? 60 : 68; x < 254; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="13" height="5" fill="#c8a678" opacity=".7"/>';
    let tb = ""; for (let y = 40; y < 212; y += 8) for (let x = (y / 8) % 2 ? 264 : 270; x < 310; x += 12) tb += '<rect x="' + x + '" y="' + y + '" width="9" height="5" fill="#c8a678" opacity=".7"/>';
    const rarch = (x, y, w, h) => '<path d="M' + x + ' ' + (y + h) + 'V' + (y + w / 2) + 'a' + (w / 2) + ' ' + (w / 2) + ' 0 0 1 ' + w + ' 0V' + (y + h) + 'z" fill="#2a3040" stroke="#f2e6c8" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#sn)"/>' +
      /* the harbor glimpsed below on the right */
      '<rect x="320" y="150" width="80" height="40" fill="#4a7aa0"/><g class="fry" style="animation-duration:22s">' + '<g transform="translate(0 150)">' + ferryBoat(.25) + '</g></g>' +
      /* nave: tan brick under a red tile roof */
      '<path d="M50 104L156 54 262 104z" fill="#b5442a"/>' + (function () { let r = ""; for (let i = 0; i < 6; i++) { const y = 98 - i * 7, hw = (y - 54) / 50 * 106 - 6; r += '<path d="M' + (156 - hw) + ' ' + y + 'H' + (156 + hw) + '" stroke="#8a2e1a" stroke-width="1.5"/>'; } return r; })() +
      '<rect x="56" y="100" width="204" height="112" fill="#d9b98a"/>' + brick +
      rarch(80, 130, 26, 50) + rarch(126, 120, 34, 70) + rarch(176, 130, 26, 50) + rarch(218, 130, 26, 50) +
      '<circle cx="143" cy="88" r="11" fill="#2a3040" stroke="#f2e6c8" stroke-width="2"/>' +
      /* the bell tower */
      '<rect x="262" y="34" width="58" height="178" fill="#d4b080"/>' + tb +
      rarch(274, 52, 14, 30) + rarch(294, 52, 14, 30) + rarch(281, 120, 20, 40) +
      '<path d="M258 36L291 6 324 36z" fill="#b5442a"/><path d="M291 6v-8M287 -2h8" stroke="#5a3a2a" stroke-width="2"/>' +
      '<rect x="258" y="34" width="66" height="5" fill="#f2e6c8"/>' +
      '<circle cx="34" cy="168" r="28" fill="#d9822b"/><rect x="31" y="190" width="6" height="22" fill="#5a3a2a"/>' +
      '<rect y="212" width="400" height="12" fill="#9a9a9a"/><rect y="224" width="400" height="36" fill="#2c2c30"/>' +
      '<g class="lf"><path d="M40 150l5 3-5 3-5-3z" fill="#e6b13a"/></g><g class="lf lf2"><path d="M60 150l5 3-5 3-5-3z" fill="#b8461f"/></g><g class="lf lf3"><path d="M20 156l5 3-5 3-5-3z" fill="#d9822b"/></g>' +
      '<g class="cr1"><rect x="0" y="234" width="44" height="14" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="248" r="4" fill="#111"/><circle cx="34" cy="248" r="4" fill="#111"/></g>' +
      '<text x="200" y="256" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="2" fill="#fff">ST. PETER\'S · ST. MARKS PL · NEW BRIGHTON</text>',
      sky("sn", "#9fcff2", "#f6e8cc"));
  }

  /* 4. The Staten Island Lighthouse (Lighthouse Hill, 1912): the yellow-brick octagonal tower on the ridge, black lantern, the beam sweeping out toward the harbor */
  function bridge() {
    let courses = ""; for (let y = 70; y < 200; y += 6) courses += '<path d="M' + (186 - (y - 70) * .06) + ' ' + y + 'H' + (214 + (y - 70) * .06) + '" stroke="#c8a040" stroke-width="1" opacity=".6"/>';
    return svg(
      '<style>@keyframes sweep{0%,100%{transform:rotate(-30deg)}50%{transform:rotate(30deg)}}.bm{transform-box:view-box;transform-origin:200px 56px;animation:sweep 5s ease-in-out infinite}</style>' +
      '<rect width="400" height="260" fill="url(#lh)"/>' + stars(22) +
      /* the harbor far off and the ridge */
      '<rect y="150" width="400" height="26" fill="#1f3550"/><g class="wv"><path d="M0 162q10-3 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#7fb0d0" stroke-width="1" fill="none" opacity=".4"/></g>' +
      '<g class="bm"><path d="M200 56L-40 20V92z" fill="#fff6c2" opacity=".22"/><path d="M200 56L440 20V92z" fill="#fff6c2" opacity=".12"/></g>' +
      '<path d="M0 200Q120 168 200 184T400 196V260H0z" fill="#2a4a2a"/>' +
      '<circle cx="80" cy="186" r="20" fill="#1f3a1f"/><circle cx="320" cy="190" r="22" fill="#1f3a1f"/><circle cx="350" cy="196" r="16" fill="#244424"/>' +
      /* limestone base, yellow brick shaft, gallery, black lantern */
      '<path d="M178 206h44l-4-14h-36z" fill="#d8d0bc"/>' +
      '<path d="M182 192L188 70h24l6 122z" fill="#e8c35a"/>' + courses + '<path d="M196 70v122" stroke="#d4ae48" stroke-width="2"/>' +
      '<rect x="196" y="100" width="8" height="12" fill="#2a2a30"/><rect x="196" y="140" width="8" height="12" fill="#2a2a30"/>' +
      '<rect x="182" y="64" width="36" height="6" fill="#2a2a30"/><path d="M184 64v-4M190 64v-4M196 64v-4M204 64v-4M210 64v-4M216 64v-4" stroke="#2a2a30" stroke-width="1.5"/>' +
      '<rect x="188" y="44" width="24" height="20" fill="#1a1a1a"/><rect x="191" y="48" width="18" height="12" fill="#fff6c2" class="blk"/>' +
      '<path d="M186 44L200 32 214 44z" fill="#1a1a1a"/><circle cx="200" cy="30" r="2.5" fill="#1a1a1a"/>' +
      '<g class="gul"><path d="M0 110q6-6 12 0q6-6 12 0" stroke="#e8e8e8" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="244" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="1" fill="#fff">STATEN ISLAND LIGHTHOUSE · LIGHTHOUSE HILL · 1912</text>',
      sky("lh", "#0b1530", "#3a4a7a"));
  }
  /* 5. Bay St & Victory Blvd: green street signs, a wall with NYOIL tagged on it, an oil drop dripping */
  function corner() {
    let bricks = "";
    for (let y = 0; y < 200; y += 14) for (let x = (y / 14) % 2 ? -20 : 0; x < 400; x += 40) bricks += '<rect x="' + x + '" y="' + y + '" width="38" height="12" fill="#6b3524"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a1710"/>' + bricks +
      /* sidewalk */
      '<rect x="0" y="200" width="400" height="60" fill="#5b5e63"/><rect x="0" y="200" width="400" height="5" fill="#7b7f85"/>' +
      /* the pole and the two green signs */
      '<rect x="326" y="40" width="7" height="162" fill="#3d4a40"/>' +
      '<rect x="262" y="40" width="134" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="329" y="56" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">Bay St</text>' +
      '<rect x="270" y="66" width="120" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="330" y="82" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">Victory Blvd</text>' +
      /* the piece */
      tag("NYOIL", 34, 150, 66, GOLD, -6) +
      '<g class="drp"><path d="M196 152q-6 9 0 13q6-4 0-13z" fill="#1b1b1b" stroke="' + GOLD + '" stroke-width="1"/></g>' +
      tag("APPROVED", 60, 188, 24, ORANGE, -3) +
      tag("KOOL KIM", 40, 70, 22, BLUE, -8) +
      '<text x="20" y="236" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="11" letter-spacing="3" fill="#e8e8e8">STATEN ISLAND · 10301</text>');
  }

  window.SCENES = { station, ferry, snug, bridge, corner };
})();
