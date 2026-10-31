/* Park Slope opening scenes for the Talib Kweli game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}' +
    '@keyframes jet{0%,100%{transform:scaleY(.85)}50%{transform:scaleY(1.08)}}' +
    '.jet{transform-box:fill-box;transform-origin:50% 100%;animation:jet 1.4s ease-in-out infinite}.jet2{animation-delay:.5s}' +
    '@keyframes drop{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(26px);opacity:0}}' +
    '.drp{animation:drop 1.2s linear infinite}.drp2{animation-delay:.4s}.drp3{animation-delay:.8s}' +
    '@keyframes shine{0%,100%{opacity:.15}50%{opacity:.6}}' +
    '.shn{animation:shine 3s ease-in-out infinite}.shn2{animation-delay:1.5s}' +
    '@keyframes leaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-60px,280px) rotate(320deg)}}' +
    '.lf{animation:leaf 7s linear infinite}.lf2{animation-delay:-2.3s}.lf3{animation-delay:-4.6s}' +
    '@keyframes swing{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}' +
    '.swg{transform-box:fill-box;transform-origin:50% 0;animation:swing 2.6s ease-in-out infinite}' +
    '@keyframes car{from{transform:translateX(-120px)}to{transform:translateX(520px)}}' +
    '.car{animation:car 6s linear infinite}.car2{animation-delay:-3s}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2c14e", RED = "#e85d3a", BLUE = "#7fb7e8";
  const leaf = (x, cls, c) => '<g class="lf ' + cls + '"><path d="M' + x + ' 0q8-6 14 0q-6 8-14 0z" fill="' + c + '"/></g>';

  /* 1. The F pulling into 7 Av at 9th St, underground on the Culver line: white tile, mustard band with sienna-brown border, island platform */
  function train() {
    let tiles = "";
    for (let y = 0; y < 120; y += 10) for (let x = (y / 10) % 2 ? -10 : 0; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#efede6"/>';
    let cols = "";
    [36, 364].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="196" fill="#2b3a4a"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="128" width="30" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#dcd9d0"/>' + tiles +
      /* mustard band, sienna border (wider on top), three tiles high */
      '<rect x="0" y="18" width="400" height="26" fill="#8a4a24"/><rect x="0" y="24" width="400" height="17" fill="#d9a92b"/>' +
      (function () { let b = ""; for (let x = 24; x < 400; x += 60) b += '<rect x="' + x + '" y="24" width="4" height="17" fill="#8a4a24"/>'; return b; })() +
      '<rect x="0" y="0" width="400" height="8" fill="#2b2b2b"/>' +
      '<rect x="0" y="112" width="400" height="74" fill="#1c1c1c"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="118" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="158" width="300" height="5" fill="#ff6319"/>' + windows +
        '<rect x="285" y="128" width="16" height="22" rx="3" fill="#cfe6ff" opacity=".85"/>' +
        '<circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        bullet(296, 136, "F", "#ff6319") +
      '</g>' + cols +
      /* station sign */
      '<rect x="80" y="58" width="240" height="34" rx="4" fill="#111"/><rect x="80" y="58" width="240" height="4" fill="#fff"/>' +
      '<text x="94" y="83" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">7 Av</text>' +
      '<text x="134" y="83" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#cfd4dc">9 St</text>' +
      bullet(270, 76, "F", "#ff6319") + bullet(296, 76, "G", "#6cbe45") +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5c5a55"/>' +
      tag("BLACK STAR", 24, 240, 26, GOLD, -4) + tag("KWELI", 290, 244, 30, RED, -8));
  }

  /* 2. Grand Army Plaza: the pale granite Soldiers' and Sailors' Arch, the dark bronze chariot on top, the fountain splashing in front */
  function arch() {
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' + stars(10) +
      /* trees */
      '<ellipse cx="30" cy="170" rx="50" ry="40" fill="#25402a"/><ellipse cx="372" cy="170" rx="50" ry="40" fill="#25402a"/>' +
      /* arch body */
      '<rect x="96" y="70" width="208" height="150" fill="#d8d2c4"/>' +
      '<path d="M156 220v-80a44 44 0 0 1 88 0v80z" fill="#3a4250"/>' +
      '<rect x="90" y="62" width="220" height="12" fill="#e6e0d2"/><rect x="96" y="74" width="208" height="20" fill="#cbc4b4"/>' +
      '<text x="200" y="88" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="7" letter-spacing="2.4" fill="#8a8272">TO THE DEFENDERS OF THE UNION</text>' +
      /* paired columns */
      '<rect x="108" y="100" width="8" height="120" fill="#e6e0d2"/><rect x="122" y="100" width="8" height="120" fill="#e6e0d2"/><rect x="270" y="100" width="8" height="120" fill="#e6e0d2"/><rect x="284" y="100" width="8" height="120" fill="#e6e0d2"/>' +
      '<path d="M156 140a44 44 0 0 1 88 0" fill="none" stroke="#bdb5a3" stroke-width="5"/>' +
      /* bronze relief groups on the sides */
      '<path d="M100 220v-22q10-14 28-6v28z" fill="#3f5a4a"/><path d="M300 220v-22q-10-14-28-6v28z" fill="#3f5a4a"/>' +
      /* the quadriga on top: four horses, the chariot, the figure with the flag */
      '<rect x="120" y="54" width="160" height="8" fill="#cbc4b4"/>' +
      '<g fill="#3d5246"><path d="M150 54l4-16h14l6-6 4 2-4 8 2 12zM172 54l4-16h14l6-6 4 2-4 8 2 12zM196 54l4-16h14l6-6 4 2-4 8 2 12zM220 54l4-16h14l6-6 4 2-4 8 2 12z"/>' +
      '<path d="M236 54v-14h22v14z"/><path d="M246 40v-16h6v16z"/><circle cx="249" cy="20" r="4"/><path d="M252 22l14-12v8z"/></g>' +
      '<path d="M120 54l-12-14 6 0 6 8M280 54l12-14-6 0-6 8" stroke="#3d5246" stroke-width="3" fill="none"/>' +
      /* plaza + fountain */
      '<rect x="0" y="218" width="400" height="42" fill="#2b2f36"/>' +
      '<ellipse cx="200" cy="236" rx="110" ry="14" fill="#5a6070"/><ellipse cx="200" cy="234" rx="100" ry="10" fill="#3a8fc8"/>' +
      '<path class="jet" d="M196 234q4-50 8 0z" fill="#d6f3ff" opacity=".85"/><path class="jet jet2" d="M160 234q3-30 6 0zM234 234q3-30 6 0z" fill="#d6f3ff" opacity=".75"/>' +
      '<circle class="drp" cx="190" cy="196" r="2" fill="#d6f3ff"/><circle class="drp drp2" cx="210" cy="198" r="2" fill="#d6f3ff"/><circle class="drp drp3" cx="200" cy="192" r="2" fill="#d6f3ff"/>',
      sky("g2", "#1b2a4a", "#e2a26a"));
  }

  /* 3. The Central Library at Grand Army Plaza: the pale limestone facade curved like an open book, the tall gilded portal shining */
  function library() {
    let figs = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) {
      const x = 174 + c * 18, y = 72 + r * 23;
      figs += '<rect x="' + x + '" y="' + y + '" width="16" height="21" fill="#3a3226" stroke="#e8b84a" stroke-width="1"/>' +
        ((r + c) % 2 ? '<path d="M' + (x + 8) + ' ' + (y + 3) + 'l2.4 5 5.4.6-4 3.6 1.2 5.4-5-2.8-5 2.8 1.2-5.4-4-3.6 5.4-.6z" fill="#e8b84a"/>'
                     : '<path d="M' + (x + 2) + ' ' + (y + 7) + 'l6 2 6-2v9l-6 2-6-2z" fill="#e8b84a"/><path d="M' + (x + 8) + ' ' + (y + 9) + 'v9" stroke="#3a3226" stroke-width="1"/>');
    }
    let lines = "";
    for (let y = 60; y < 210; y += 12) lines += '<path d="M20 ' + y + 'h130M250 ' + y + 'h130" stroke="#cdc4ad" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      /* the two wings angle back like the covers of an open book */
      '<path d="M8 214V58l150 -14v170z" fill="#e9e1cc"/><path d="M392 214V58l-150 -14v170z" fill="#e9e1cc"/>' + lines +
      '<path d="M8 58l150-14M392 58l-150-14" stroke="#b9ae92" stroke-width="3"/>' +
      /* slit windows */
      '<path d="M40 90v80M70 88v84M100 86v88M300 86v88M330 88v84M360 90v80" stroke="#8d8570" stroke-width="5"/>' +
      /* the portal */
      '<rect x="150" y="40" width="100" height="180" fill="#ddd3ba"/>' +
      '<rect x="162" y="62" width="76" height="158" fill="#2a2620"/>' + figs +
      '<rect x="162" y="62" width="76" height="158" fill="none" stroke="#e8b84a" stroke-width="3"/>' +
      '<rect class="shn" x="162" y="62" width="76" height="158" fill="#ffd56a"/>' +
      '<rect x="176" y="168" width="48" height="52" fill="#1a1712"/><path d="M200 168v52" stroke="#e8b84a" stroke-width="2"/>' +
      '<rect x="160" y="46" width="80" height="12" fill="#cfc5aa"/>' +
      '<text x="200" y="55" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="7" letter-spacing="2" fill="#6b6350">PUBLIC LIBRARY</text>' +
      /* steps + plaza */
      '<rect x="120" y="220" width="160" height="6" fill="#cfc5aa"/><rect x="110" y="226" width="180" height="6" fill="#bdb39a"/>' +
      '<rect x="0" y="232" width="400" height="28" fill="#2b2f36"/>' +
      '<g class="car"><rect x="0" y="238" width="44" height="12" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="240" width="40" height="11" rx="4" fill="#f2c14e"/><circle cx="9" cy="252" r="4" fill="#111"/><circle cx="31" cy="252" r="4" fill="#111"/></g>',
      sky("g3", "#7fb7e8", "#e8eef4"));
  }

  /* 4. The bookshop window on St Marks Av: shelves of spines, a stack on the sill, the hanging OPEN sign swinging, autumn leaves falling */
  function books() {
    let shelves = "";
    const cs = ["#e85d3a", "#f2c14e", "#3f8a3a", "#7fb7e8", "#1f2937", "#8a3a7a", "#f7f3ea", "#c26a2a"];
    [78, 118, 158].forEach((y, r) => {
      let x = 72;
      for (let i = 0; x < 320; i++) { const w = 7 + ((i * 7 + r * 3) % 6), h = 24 + ((i * 5 + r) % 10); shelves += '<rect x="' + x + '" y="' + (y + 32 - h) + '" width="' + w + '" height="' + h + '" fill="' + cs[(i + r * 3) % 8] + '"/>'; x += w + 1; }
      shelves += '<rect x="66" y="' + (y + 32) + '" width="264" height="5" fill="#6b4a2a"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="#3a2a22"/>' +
      /* brick */
      (function () { let b = ""; for (let y = 0; y < 260; y += 14) for (let x = (y / 14) % 2 ? -20 : 0; x < 400; x += 40) b += '<rect x="' + x + '" y="' + y + '" width="38" height="12" fill="#6e3424"/>'; return b; })() +
      /* sign board */
      '<rect x="40" y="14" width="320" height="34" fill="#1a3a2a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="38" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" letter-spacing="4" fill="' + GOLD + '">BOOKS &amp; CULTURE</text>' +
      /* window */
      '<rect x="56" y="58" width="284" height="168" fill="#f6e3b0"/>' +
      '<rect x="56" y="58" width="284" height="168" fill="none" stroke="#1a3a2a" stroke-width="8"/>' + shelves +
      /* front stack + reading lamp */
      '<rect x="80" y="208" width="60" height="8" fill="#e85d3a"/><rect x="84" y="200" width="52" height="8" fill="#3f8a3a"/><rect x="88" y="192" width="44" height="8" fill="#f2c14e"/>' +
      '<path d="M290 216v-30l-14-8" stroke="#1f2937" stroke-width="3" fill="none"/><path d="M262 172l26 0-6-12h-14z" fill="#1f7a3a"/><path class="flk" d="M266 172h18l8 14h-34z" fill="#fff6c2" opacity=".5"/>' +
      '<rect x="56" y="216" width="284" height="10" fill="#1a3a2a"/>' +
      /* OPEN sign swinging */
      '<g class="swg"><path d="M180 58l-10 14M220 58l10 14" stroke="#222" stroke-width="1.5"/><rect x="164" y="72" width="72" height="22" rx="3" fill="#fff" stroke="#1a3a2a" stroke-width="2"/>' +
      '<text x="200" y="88" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="3" fill="' + RED + '">OPEN</text></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#8a8a86"/><path d="M0 230h400" stroke="#6b6b67" stroke-width="2"/>' +
      leaf(300, "", "#e0892a") + leaf(160, "lf2", "#c94a2a") + leaf(380, "lf3", "#f2c14e"));
  }

  /* 5. St Marks Av and Flatbush Av: green street signs, a streetlight, brownstone stoops, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<rect x="0" y="40" width="400" height="30" fill="#3a2a22"/><path d="M0 40h400" stroke="#5a4232" stroke-width="5"/>' +
      '<rect x="20" y="70" width="230" height="150" fill="#3a3f47"/><path d="M20 70h230" stroke="#2a2e34" stroke-width="4"/>' +
      tag("TALIB KWELI", 30, 140, 34, GOLD, -7) + tag("PARK SLOPE", 50, 192, 26, BLUE, -3) + tag("GET BY", 172, 214, 18, RED, -10) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="258" y="88" width="88" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">St Marks Av</text>' +
      '<rect x="256" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="302" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Flatbush Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      leaf(240, "", "#e0892a") + leaf(120, "lf2", "#c94a2a"),
      sky("g5", "#0d1b2e", "#24435f"));
  }

  window.SCENES = { train, arch, library, books, corner };
})();
