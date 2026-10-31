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

  /* 3. Snug Harbor: the white Greek Revival temple fronts, autumn leaves coming down */
  function snug() {
    const temple = (x, w, cols) => {
      let c = "", step = w / (cols + 1);
      for (let i = 1; i <= cols; i++) c += '<rect x="' + (x + i * step - 4) + '" y="118" width="8" height="58" fill="#f4f1e8" stroke="#b9b2a2" stroke-width="1"/><rect x="' + (x + i * step - 6) + '" y="114" width="12" height="4" fill="#e7e1d2"/>';
      return '<rect x="' + x + '" y="110" width="' + w + '" height="70" fill="#d9d2c0"/>' +
        '<path d="M' + (x - 6) + ' 112L' + (x + w / 2) + ' 82L' + (x + w + 6) + ' 112z" fill="#f4f1e8" stroke="#b9b2a2" stroke-width="1.5"/>' +
        '<rect x="' + (x - 6) + '" y="110" width="' + (w + 12) + '" height="6" fill="#ece6d6"/>' + c +
        '<rect x="' + (x - 4) + '" y="176" width="' + (w + 8) + '" height="6" fill="#c8c0ae"/>';
    };
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      /* side wings in brick-and-stucco */
      '<rect x="0" y="122" width="400" height="60" fill="#c9b99a"/>' +
      (function () { let w = ""; for (let x = 8; x < 400; x += 22) w += '<rect x="' + x + '" y="134" width="10" height="16" fill="#3b4a5a"/>'; return w; })() +
      temple(30, 96, 5) + temple(158, 84, 4) + temple(274, 96, 5) +
      /* lawn + path */
      '<rect x="0" y="182" width="400" height="78" fill="#4f7a3a"/>' +
      '<path d="M170 260l20-78h20l20 78z" fill="#d8ccb0"/>' +
      /* autumn trees */
      '<rect x="12" y="160" width="6" height="30" fill="#4a3220"/><circle cx="15" cy="150" r="22" fill="#d9822b"/><circle cx="28" cy="160" r="14" fill="#c4581f"/>' +
      '<rect x="380" y="160" width="6" height="30" fill="#4a3220"/><circle cx="383" cy="150" r="22" fill="#e0a12b"/><circle cx="368" cy="162" r="14" fill="#c4581f"/>' +
      '<path class="lf" d="M30 140q4-4 8 0q-4 4-8 0z" fill="#e0a12b"/>' +
      '<path class="lf lf2" d="M376 136q4-4 8 0q-4 4-8 0z" fill="#d9822b"/>' +
      '<path class="lf lf3" d="M200 90q4-4 8 0q-4 4-8 0z" fill="#c4581f"/>' +
      /* sign */
      '<rect x="110" y="18" width="180" height="44" rx="4" fill="#1f3a2e" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" letter-spacing="1" fill="#fff">SNUG HARBOR</text>' +
      '<text x="200" y="56" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="1.5" fill="' + GOLD + '">RICHMOND TERRACE · 1833</text>',
      sky("g3", "#7fb4dc", "#e6f0f6"));
  }

  /* 4. The Verrazzano-Narrows Bridge at night over Fort Wadsworth, cars rolling over the span */
  function bridge() {
    let cables = "";
    for (let x = 0; x <= 400; x += 10) {
      const y = x < 110 ? 120 - (110 - x) * 0.55 + 66 : x > 290 ? 120 - (x - 290) * 0.55 + 66 : 186 - 104 * (1 - Math.pow((x - 200) / 90, 2));
      const yy = Math.min(150, Math.max(50, y));
      cables += '<path d="M' + x + ' ' + yy.toFixed(1) + 'V150" stroke="#9fb2c4" stroke-width=".8" opacity=".55"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + stars(22) +
      '<circle cx="340" cy="34" r="14" fill="#eaf6ff" opacity=".9"/>' +
      /* towers: steel painted light grey, two arches each */
      '<rect x="100" y="40" width="8" height="140" fill="#b6c0c8"/><rect x="118" y="40" width="8" height="140" fill="#b6c0c8"/>' +
      '<rect x="100" y="40" width="26" height="6" fill="#b6c0c8"/><rect x="100" y="90" width="26" height="5" fill="#b6c0c8"/>' +
      '<rect x="274" y="40" width="8" height="140" fill="#b6c0c8"/><rect x="292" y="40" width="8" height="140" fill="#b6c0c8"/>' +
      '<rect x="274" y="40" width="26" height="6" fill="#b6c0c8"/><rect x="274" y="90" width="26" height="5" fill="#b6c0c8"/>' +
      '<circle class="blk" cx="113" cy="38" r="2.5" fill="#ff4a3a"/><circle class="blk blk2" cx="287" cy="38" r="2.5" fill="#ff4a3a"/>' +
      /* main cables */
      '<path d="M0 132Q56 96 113 44Q200 150 287 44Q344 96 400 132" stroke="#dfe7ee" stroke-width="2.4" fill="none"/>' +
      cables +
      /* the necklace lights and the deck */
      '<rect x="0" y="150" width="400" height="10" fill="#4f5b66"/>' +
      (function () { let l = ""; for (let x = 6; x < 400; x += 14) l += '<circle cx="' + x + '" cy="149" r="1.3" fill="#fff3c4"/>'; return l; })() +
      '<g class="cr1"><rect x="0" y="152" width="12" height="4" rx="1" fill="#ffd38a"/></g><g class="cr2"><rect x="0" y="152" width="12" height="4" rx="1" fill="#ffd38a"/></g>' +
      '<g class="cl1"><rect x="0" y="156" width="12" height="3" rx="1" fill="#ff6a5a"/></g><g class="cl2"><rect x="0" y="156" width="12" height="3" rx="1" fill="#ff6a5a"/></g>' +
      /* the Narrows */
      '<rect x="0" y="180" width="400" height="80" fill="#0f2b40"/>' +
      '<path d="M0 196h400M0 214h400" stroke="#2f5c7d" stroke-width="1" stroke-dasharray="14 10"/>' +
      /* Fort Wadsworth: granite fort walls on the bluff at the left */
      '<path d="M0 168h96l20 22H0z" fill="#3b5a2e"/>' +
      '<path d="M4 196h120l10 20H0z" fill="#8a8478" stroke="#4d4840" stroke-width="1.5"/>' +
      (function () { let w = ""; for (let x = 12; x < 126; x += 18) w += '<rect x="' + x + '" y="202" width="7" height="7" rx="3" fill="#2a2620"/>'; return w; })() +
      '<rect x="40" y="168" width="2" height="22" fill="#222"/><rect class="flg" x="42" y="168" width="14" height="8" fill="#e8e8e8"/>' +
      '<text x="20" y="246" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="2" fill="#dfe7ee">FORT WADSWORTH</text>' +
      '<text x="380" y="246" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="' + GOLD + '">THE NARROWS</text>',
      sky("g4", "#060d1c", "#1e3a5c"));
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
