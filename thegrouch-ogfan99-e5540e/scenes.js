/* Oakland opening scenes for The Grouch game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}.tw{animation:tw 2.6s ease-in-out infinite}.tw2{animation-delay:1.3s}' +
    '@keyframes shim{0%,100%{opacity:.25}50%{opacity:.8}}.shim{animation:shim 2.4s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes row{from{transform:translateX(-70px)}to{transform:translateX(470px)}}.row{animation:row 16s linear infinite}' +
    '@keyframes skate{from{transform:translateX(-50px)}to{transform:translateX(450px)}}.sk{animation:skate 6s linear infinite}' +
    '@keyframes ray{0%,100%{opacity:.08}50%{opacity:.3}}.ray{animation:ray 4s ease-in-out infinite}.ray2{animation-delay:-2s}' +
    '@keyframes fall{0%{transform:translate(0,-10px) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(30px,200px) rotate(200deg);opacity:0}}.lf{animation:fall 7s linear infinite}.lf2{animation-delay:-2.3s}.lf3{animation-delay:-4.6s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.2}}.blk{animation:blink 1.4s steps(1) infinite}.blk2{animation-delay:-.7s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="tw ' + (i % 2 ? "tw2" : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const LEAF = "#9bd35a", SUN = "#ffcf56", CLAY = "#e07a5f";
  const RED = "#ed1c24", ORG = "#f7a51e", YEL = "#ffd200";
  const dot = (x, y, c) => '<circle cx="' + x + '" cy="' + y + '" r="5" fill="' + c + '" stroke="#fff" stroke-width="1"/>';

  /* 1. 12th St Oakland City Center BART: underground platform downtown, tiled wall, the silver train rolling in */
  function station() {
    let tiles = "";
    for (let y = 30; y < 112; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="' + ((x + y) % 3 ? "#c8b9a0" : "#bba98e") + '"/>';
    let win = "";
    for (let x = 26; x < 300; x += 40) win += '<rect x="' + x + '" y="124" width="26" height="16" rx="3" fill="#1c2733"/><rect x="' + (x + 2) + '" y="126" width="22" height="6" fill="#ffd98a" opacity=".35"/>';
    return svg(
      '<rect width="400" height="260" fill="#1a1a1e"/>' + tiles +
      '<rect x="0" y="0" width="400" height="30" fill="#2a2a30"/><rect class="flk" x="40" y="22" width="80" height="4" fill="#fff6d8"/><rect class="flk flk2" x="280" y="22" width="80" height="4" fill="#fff6d8"/>' +
      '<rect x="92" y="44" width="216" height="46" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="72" text-anchor="middle" ' + F + ' font-weight="700" font-size="20" fill="#fff">12th St Oakland</text>' +
      '<text x="102" y="85" ' + F + ' font-size="7" fill="#dbe6f3">BART · CITY CENTER</text>' +
      dot(266, 82, RED) + dot(280, 82, ORG) + dot(294, 82, YEL) +
      '<g class="anim-train">' +
        '<rect x="8" y="112" width="300" height="52" rx="6" fill="#d9dde2" stroke="#7d848c" stroke-width="2"/>' +
        '<rect x="8" y="144" width="300" height="5" fill="#00a6e0"/>' + win +
        '<path d="M296 112h6q14 4 18 26v26h-24z" fill="#e7eaee" stroke="#7d848c" stroke-width="2"/>' +
        '<path d="M300 118q10 4 14 18h-14z" fill="#1c2733"/><circle cx="312" cy="156" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="164" width="400" height="4" fill="#e8c547"/><rect x="0" y="168" width="400" height="92" fill="#6f6a62"/>' +
      tag("LEGENDS", 30, 240, 30, LEAF, -4) + tag("G&amp;E", 270, 236, 30, SUN, -7),
      "");
  }

  /* 2. Lake Merritt at night: the Necklace of Lights around the lake, the pergola columns, a boat rowing across */
  function lake() {
    let neck = "", refl = "";
    for (let x = 0; x <= 400; x += 14) {
      const y = 132 + Math.sin(x / 40) * 4;
      neck += '<circle class="tw ' + (x % 28 ? "tw2" : "") + '" cx="' + x + '" cy="' + y.toFixed(1) + '" r="2" fill="#fff4c2"/>';
      refl += '<rect class="shim ' + (x % 28 ? "shim2" : "") + '" x="' + (x - 1) + '" y="' + (150 + (x % 3) * 8) + '" width="2" height="10" fill="#fff4c2" opacity=".5"/>';
    }
    let bld = "";
    [[20, 30, 40], [60, 24, 60], [96, 30, 34], [270, 30, 52], [310, 22, 70], [340, 40, 40]].forEach(([x, w, h]) => bld += '<rect x="' + x + '" y="' + (130 - h) + '" width="' + w + '" height="' + h + '" fill="#2a3150"/><rect class="tw" x="' + (x + 6) + '" y="' + (136 - h) + '" width="4" height="4" fill="#ffd98a"/>');
    let cols = "";
    for (let x = 140; x <= 260; x += 20) cols += '<rect x="' + x + '" y="188" width="8" height="46" fill="#ece6d6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(16) + bld +
      '<rect x="0" y="134" width="400" height="90" fill="#16284a"/>' + refl + neck +
      '<g class="row"><path d="M0 176h36l-6 8H6z" fill="#c9a77c"/><circle cx="18" cy="168" r="4" fill="#2a1d14"/><path d="M8 178l-10 8M28 178l10 8" stroke="#c9a77c" stroke-width="2"/></g>' +
      /* pergola */
      '<rect x="130" y="180" width="140" height="10" fill="#ece6d6"/>' + cols + '<rect x="120" y="232" width="160" height="6" fill="#cfc6b0"/>' +
      '<rect x="0" y="238" width="400" height="22" fill="#2f4a2a"/>' +
      '<text x="20" y="254" font-family="Anton, Impact, sans-serif" font-size="13" fill="' + SUN + '">LAKE MERRITT</text>',
      sky("g2", "#0b1022", "#2a3a6a"));
  }

  /* 3. Telegraph Avenue: a long painted mural wall, record shop awning, a skater rolling by */
  function telegraph() {
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      '<rect x="0" y="60" width="400" height="140" fill="#3a3550"/>' +
      /* mural: sun, waves, mountains, all colors, no faces */
      '<circle cx="90" cy="120" r="34" fill="' + SUN + '"/><path d="M90 74v-10M90 176v-10M44 120h-10M146 120h-10M58 88l-7-7M122 88l7-7" stroke="' + SUN + '" stroke-width="4"/>' +
      '<path d="M150 190l50-80 40 50 30-40 60 70z" fill="#5a8f6a"/><path d="M200 110l12 20h-24z" fill="#f4f1e8"/>' +
      '<path d="M0 170q30-14 60 0t60 0t60 0" stroke="#4aa3df" stroke-width="8" fill="none"/>' +
      '<path d="M320 70l30 30-30 30-30-30z" fill="' + CLAY + '"/><circle cx="320" cy="100" r="8" fill="' + LEAF + '"/>' +
      tag("TELEGRAPH", 150, 92, 24, "#f4f1e8", -4) +
      /* awning + window */
      '<path d="M250 150h140l-8 14H258z" fill="#2a7a5a"/><rect x="262" y="164" width="116" height="36" fill="#22303a"/>' +
      '<circle cx="290" cy="182" r="12" fill="#0b0b0b"/><circle cx="290" cy="182" r="4" fill="' + CLAY + '"/><circle cx="330" cy="182" r="12" fill="#0b0b0b"/><circle cx="330" cy="182" r="4" fill="' + LEAF + '"/>' +
      '<rect x="0" y="200" width="400" height="8" fill="#b1aea6"/><rect x="0" y="208" width="400" height="52" fill="#3a3a3e"/>' +
      '<path d="M0 234h40M70 234h40M140 234h40M210 234h40M280 234h40M350 234h40" stroke="#e8c547" stroke-width="3"/>' +
      '<g class="sk"><rect x="0" y="196" width="26" height="4" rx="2" fill="' + CLAY + '"/><circle cx="5" cy="202" r="2.2" fill="#222"/><circle cx="21" cy="202" r="2.2" fill="#222"/>' +
        '<path d="M8 196l5-16M18 196l-5-16" stroke="#1d1d24" stroke-width="3"/><rect x="8" y="164" width="10" height="18" rx="3" fill="' + LEAF + '"/><circle cx="13" cy="158" r="5" fill="#2a1d14"/>' +
        '<path d="M8 168l-8 6M18 168l8 6" stroke="' + LEAF + '" stroke-width="3"/></g>',
      sky("g3", "#f2a65a", "#7a4f8a"));
  }

  /* 4. Redwood Regional Park in the Oakland hills: tall redwoods, sun rays through the trees, leaves drifting */
  function redwoods() {
    let trunks = "";
    [[30, 26], [96, 34], [170, 22], [250, 38], [330, 28], [384, 20]].forEach(([x, w], i) =>
      trunks += '<rect x="' + x + '" y="0" width="' + w + '" height="230" fill="' + (i % 2 ? "#7a3f25" : "#8c4a2c") + '"/><path d="M' + (x + w / 3) + ' 20v200" stroke="#5e2e1a" stroke-width="2"/>');
    let ferns = "";
    for (let x = 0; x < 400; x += 30) ferns += '<path d="M' + x + ' 236q10-24 20-30M' + (x + 10) + ' 236q0-26 6-34M' + (x + 20) + ' 236q-6-22-16-28" stroke="#3e7a3a" stroke-width="3" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      '<path class="ray" d="M220 0l-60 240h60z" fill="#fff4c2"/><path class="ray ray2" d="M300 0l-30 240h40z" fill="#fff4c2"/><path class="ray" d="M140 0l-70 240h40z" fill="#fff4c2"/>' +
      trunks +
      '<path d="M0 0h400v30q-50 20-100 0t-100 0t-100 0t-100 0z" fill="#1f4a2a"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#3a2a1a"/>' + ferns +
      '<circle class="lf" cx="120" cy="20" r="3" fill="' + LEAF + '"/><circle class="lf lf2" cx="230" cy="16" r="3" fill="' + SUN + '"/><circle class="lf lf3" cx="300" cy="24" r="3" fill="' + LEAF + '"/>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" fill="' + SUN + '">REDWOOD PARK · OAKLAND HILLS</text>',
      sky("g4", "#2f5a3a", "#a9c97a"));
  }

  /* 5. The corner: Telegraph Av and 40th St in Oakland, the Bay Bridge lit up behind */
  function corner() {
    let bricks = "";
    for (let y = 80; y < 210; y += 13) for (let x = (y / 13) % 2 ? -18 : 0; x < 400; x += 36) bricks += '<rect x="' + x + '" y="' + y + '" width="34" height="11" fill="#3a4a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="#141a14"/>' +
      '<rect x="0" y="0" width="400" height="80" fill="url(#g5)"/>' + stars(10) + IC_BAYB + bricks +
      '<rect x="0" y="78" width="400" height="4" fill="#1a241a"/>' +
      tag("THE GROUCH", 20, 140, 42, LEAF, -5) + tag("LIVING LEGENDS", 40, 184, 24, SUN, -3) + tag("G&amp;E", 280, 196, 26, CLAY, -8) +
      '<rect x="0" y="210" width="400" height="50" fill="#8d8b85"/><rect x="0" y="208" width="400" height="4" fill="#b1aea6"/>' +
      '<rect x="356" y="86" width="5" height="124" fill="#4a5058"/>' +
      '<rect x="300" y="84" width="96" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="348" y="99" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Telegraph Av</text>' +
      '<rect x="300" y="108" width="96" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/>' +
      '<text x="348" y="123" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">40th St</text>',
      sky("g5", "#0b1022", "#3a3a6a"));
  }

  /* Iconic landmark behind the corner: the Bay Bridge, the white self-anchored tower of the eastern span and the cable lights */
  const IC_BAYB = (function () {
    let lights = "";
    for (let x = 10; x < 400; x += 16) lights += '<circle class="tw ' + (x % 32 ? "tw2" : "") + '" cx="' + x + '" cy="58" r="1.4" fill="#fff4c2"/>';
    return '<g>' +
      '<rect x="0" y="66" width="400" height="14" fill="#1a2a4a"/>' +
      '<rect x="0" y="58" width="400" height="5" fill="#d9dde2"/>' +
      '<path d="M196 58l2-50h4l2 50z" fill="#eef0f2"/><rect x="194" y="30" width="12" height="3" fill="#cfd4da"/>' +
      '<path d="M200 10Q120 52 20 58M200 10Q280 52 380 58" stroke="#eef0f2" stroke-width="1.6" fill="none"/>' +
      (function () { let s = ""; for (let i = 1; i < 10; i++) { const t = i / 10, x = (1 - t) * (1 - t) * 200 + 2 * (1 - t) * t * 120 + t * t * 20, y = (1 - t) * (1 - t) * 10 + 2 * (1 - t) * t * 52 + t * t * 58; s += '<path d="M' + x.toFixed(1) + ' ' + y.toFixed(1) + 'V58M' + (400 - x).toFixed(1) + ' ' + y.toFixed(1) + 'V58" stroke="#cfd4da" stroke-width=".8"/>'; } return s; })() +
      '<circle class="blk" cx="200" cy="6" r="2" fill="#ff3b30"/>' + lights +
      '</g>';
  })();
  window.SCENES = { station, lake, telegraph, redwoods, corner };
})();
