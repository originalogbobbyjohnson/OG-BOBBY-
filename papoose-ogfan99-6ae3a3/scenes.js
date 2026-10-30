/* Bed-Stuy opening scenes for the Papoose game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}.flk3{animation-delay:1.4s}' +
    '@keyframes leaf{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,150px) rotate(320deg);opacity:0}}' +
    '.lf{transform-box:fill-box;transform-origin:50% 50%;animation:leaf 5s linear infinite}.lf2{animation-delay:1.3s}.lf3{animation-delay:2.6s}.lf4{animation-delay:3.8s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}' +
    '.thp{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-46px);opacity:0}}' +
    '.nt{animation:note 2.4s ease-out infinite}.nt2{animation-delay:.8s}.nt3{animation-delay:1.6s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}' +
    '.spn{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.6s linear infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}' +
    '.bob{animation:bob .55s ease-in-out infinite}.bob2{animation-delay:.27s}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}' +
    '.bannr{transform-box:fill-box;transform-origin:50% 0;animation:sway 3s ease-in-out infinite}' +
    '@keyframes glow{0%,100%{opacity:.9}50%{opacity:.45}}' +
    '.glw{animation:glow 2.8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  /* graffiti tag: outlined, slightly tilted */
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#ffcc33", PURPLE = "#a66cff", BROWN = "#e07a3f", ACE = "#0039a6";

  /* 1. A train pulling into Nostrand Av, underground on Fulton St: maize tile band with saddle-brown border */
  function train() {
    let tiles = "";
    for (let y = 0; y < 180; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9d2bf" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 0v180" stroke="#d9d2bf" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="126" width="30" height="22" rx="3" fill="#fff4c9" opacity=".9"/>';
    let lights = "";
    for (let x = 30; x < 400; x += 90) lights += '<rect class="flk' + (x % 180 ? " flk2" : "") + '" x="' + x + '" y="4" width="54" height="5" rx="2" fill="#fffbe6"/>';
    return svg(
      '<rect width="400" height="180" fill="#ece5d2"/>' + tiles +
      '<rect x="0" y="0" width="400" height="12" fill="#2a2620"/>' + lights +
      /* the Nostrand Av tile band: maize with a saddle-brown border */
      '<rect x="0" y="22" width="400" height="22" fill="#8b4513"/><rect x="0" y="26" width="400" height="14" fill="#f2c649"/>' +
      /* station sign */
      '<rect x="80" y="56" width="240" height="34" rx="4" fill="#111"/>' +
      '<rect x="80" y="56" width="240" height="4" fill="#fff"/>' +
      '<text x="94" y="81" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Nostrand Av</text>' +
      bullet(272, 74, "A", ACE) + bullet(298, 74, "C", ACE) +
      /* train slides in from the right and stops */
      '<g class="anim-train">' +
        '<rect x="8" y="114" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="156" width="304" height="5" fill="' + ACE + '"/>' + windows +
        '<circle cx="304" cy="168" r="4" fill="#fff6c2"/>' +
        bullet(296, 134, "A", ACE) +
      '</g>' +
      /* platform edge + platform floor */
      '<rect x="0" y="176" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#2a241d"/>' +
      '<rect x="14" y="0" width="12" height="186" fill="#3a3329"/><rect x="374" y="0" width="12" height="186" fill="#3a3329"/>' +
      tag("SWEEPERS", 30, 238, 30, GOLD, -4) + tag("PAPOOSE", 262, 242, 30, PURPLE, -8),
      "");
  }

  /* 2. Stuyvesant Heights: a row of brownstones with high stoops, hoodie-season leaves falling */
  function brownstones() {
    let row = "";
    for (let i = 0; i < 4; i++) {
      const x = 8 + i * 98, tone = i % 2 ? "#6b4430" : "#7a4e36";
      row += '<rect x="' + x + '" y="56" width="94" height="168" fill="' + tone + '"/>' +
        /* bracketed cornice */
        '<rect x="' + (x - 2) + '" y="50" width="98" height="10" fill="#3a2418"/>' +
        '<path d="M' + (x + 6) + ' 60v8M' + (x + 30) + ' 60v8M' + (x + 62) + ' 60v8M' + (x + 86) + ' 60v8" stroke="#3a2418" stroke-width="4"/>';
      for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) {
        const lit = (i + r + c) % 3 === 0;
        row += '<rect' + (lit && c === 1 ? ' class="flk flk' + (2 + (i % 2)) + '"' : '') + ' x="' + (x + 10 + c * 28) + '" y="' + (78 + r * 44) + '" width="18" height="30" fill="' + (lit ? "#ffd27a" : "#2b1b14") + '" stroke="#4a2e20" stroke-width="2"/>' +
          '<rect x="' + (x + 8 + c * 28) + '" y="' + (74 + r * 44) + '" width="22" height="4" fill="#4a2e20"/>';
      }
      /* stoop: steps climbing to the parlor door, black iron railing */
      const d = x + 64;
      row += '<rect x="' + d + '" y="164" width="22" height="34" fill="#2b1b14" stroke="#4a2e20" stroke-width="2"/>' +
        '<path d="M' + (d - 6) + ' 162h34" stroke="#4a2e20" stroke-width="5"/>';
      for (let s = 0; s < 5; s++) row += '<rect x="' + (d - 30 + s * 6) + '" y="' + (220 - s * 4.4) + '" width="' + (60 - s * 6) + '" height="4.4" fill="#5a3826"/>';
      row += '<path d="M' + (d - 32) + ' 210L' + (d - 4) + ' 190M' + (d - 32) + ' 210v14M' + (d - 4) + ' 190v8" stroke="#111" stroke-width="2"/>' +
        '<rect x="' + (x + 4) + '" y="200" width="18" height="18" fill="#2b1b14"/>';
    }
    const tree = (x, s) => '<rect x="' + (x - 3) + '" y="150" width="6" height="80" fill="#2a1a10"/>' +
      '<circle cx="' + x + '" cy="140" r="' + (26 * s) + '" fill="#c4581f"/><circle cx="' + (x - 18 * s) + '" cy="152" r="' + (18 * s) + '" fill="#e07a3f"/><circle cx="' + (x + 18 * s) + '" cy="150" r="' + (18 * s) + '" fill="#d9a03a"/>';
    const leaf = (x, y, c, k) => '<ellipse class="lf ' + k + '" cx="' + x + '" cy="' + y + '" rx="4" ry="2.4" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pb2)"/>' + stars(14) +
      '<circle cx="345" cy="30" r="13" fill="#ffe9c2" opacity=".9"/>' + row +
      '<rect x="0" y="224" width="400" height="36" fill="#3b3631"/><rect x="0" y="224" width="400" height="4" fill="#77706a"/>' +
      tree(56, 1) + tree(258, .9) +
      /* gas-style lamp */
      '<rect x="160" y="160" width="4" height="64" fill="#111"/><rect x="154" y="148" width="16" height="14" rx="2" fill="#ffe7a8" class="glw"/><path d="M152 148h20l-4-6h-12z" fill="#111"/>' +
      leaf(70, 120, "#e07a3f", "") + leaf(240, 118, "#d9a03a", "lf2") + leaf(120, 110, "#c4581f", "lf3") + leaf(300, 120, "#e07a3f", "lf4") + leaf(30, 116, "#d9a03a", "lf2") +
      '<rect x="110" y="12" width="180" height="28" rx="4" fill="#2b1240" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="31" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="2" textLength="160" lengthAdjust="spacingAndGlyphs" fill="#fff">STUYVESANT HEIGHTS</text>',
      sky("pb2", "#1c0f33", "#7a3f5e"));
  }

  /* 3. Restoration Plaza on Fulton St: the old cream terra-cotta milk plant, a mixtape table out front, boombox thumping */
  function restoration() {
    let arches = "";
    for (let i = 0; i < 6; i++) {
      const x = 34 + i * 56;
      arches += '<path d="M' + x + ' 150v-40a16 16 0 0 1 32 0v40z" fill="#3c2d1d" stroke="#c9b48a" stroke-width="3"/>' +
        '<path d="M' + (x + 16) + ' 96v54" stroke="#c9b48a" stroke-width="1.5"/>';
    }
    let bottles = "";
    for (let i = 0; i < 5; i++) { const x = 72 + i * 56; bottles += '<path d="M' + (x - 3) + ' 74h6v4l3 4v12h-12v-12l3-4z" fill="#fffaf0" stroke="#a8946a" stroke-width="1"/>'; }
    let tapes = "";
    const tc = ["#ffcc33", "#a66cff", "#e07a3f", "#4fd1c5", "#ff5a7a", "#ffffff"];
    for (let r = 0; r < 2; r++) for (let i = 0; i < 9; i++) tapes += '<rect x="' + (58 + i * 15) + '" y="' + (196 + r * 11) + '" width="12" height="9" rx="1" fill="' + tc[(i + r * 2) % 6] + '" stroke="#111" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pb3)"/>' +
      /* the facade */
      '<rect x="14" y="56" width="372" height="130" fill="#efe4cc"/>' +
      '<rect x="10" y="50" width="380" height="10" fill="#d8c8a2"/><rect x="14" y="96" width="372" height="3" fill="#d8c8a2"/>' +
      bottles + arches +
      '<rect x="120" y="60" width="160" height="14" fill="#2f5d3a"/>' +
      '<text x="200" y="71" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="11" letter-spacing="3" textLength="146" lengthAdjust="spacingAndGlyphs" fill="#fff">RESTORATION PLAZA</text>' +
      '<rect x="0" y="186" width="400" height="74" fill="#4a4540"/><rect x="0" y="186" width="400" height="4" fill="#77706a"/>' +
      /* the mixtape table */
      '<rect x="50" y="190" width="150" height="34" fill="#1d1a17"/><rect x="50" y="218" width="150" height="5" fill="#111"/>' + tapes +
      '<path d="M58 224v24M192 224v24" stroke="#111" stroke-width="4"/>' +
      '<rect x="62" y="160" width="126" height="22" rx="3" fill="' + PURPLE + '" stroke="#111" stroke-width="2" class="bannr"/>' +
      '<text x="125" y="176" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="2" textLength="100" lengthAdjust="spacingAndGlyphs" fill="#fff" class="bannr">MIXTAPES</text>' +
      /* boombox */
      '<rect x="248" y="196" width="104" height="48" rx="6" fill="#222" stroke="#666" stroke-width="2"/><path d="M268 196v-10h64v10" stroke="#666" stroke-width="4" fill="none"/>' +
      '<g class="thp"><circle cx="272" cy="222" r="15" fill="#444"/><circle cx="272" cy="222" r="7" fill="#111"/></g>' +
      '<g class="thp"><circle cx="328" cy="222" r="15" fill="#444"/><circle cx="328" cy="222" r="7" fill="#111"/></g>' +
      '<rect x="290" y="204" width="20" height="10" fill="' + GOLD + '"/>' +
      '<text class="nt" x="300" y="186" font-size="18" fill="' + GOLD + '">♪</text><text class="nt nt2" x="320" y="184" font-size="16" fill="' + PURPLE + '">♫</text><text class="nt nt3" x="280" y="186" font-size="14" fill="#fff">♪</text>',
      sky("pb3", "#2b1240", "#c46a4a"));
  }

  /* 4. Herbert Von King Park: summer night show, DJ on the turntables, Streetsweepers banner, crowd bouncing */
  function park() {
    let crowd = "";
    for (let i = 0; i < 14; i++) {
      const x = 12 + i * 29, h = 18 + (i * 7) % 10;
      crowd += '<g class="bob' + (i % 2 ? " bob2" : "") + '"><circle cx="' + x + '" cy="' + (226 - h) + '" r="8" fill="#0c0714"/><rect x="' + (x - 11) + '" y="' + (232 - h) + '" width="22" height="' + (40 + h) + '" rx="8" fill="#0c0714"/></g>';
    }
    const lamp = x => '<rect x="' + (x - 2) + '" y="120" width="4" height="96" fill="#111"/><circle class="glw" cx="' + x + '" cy="116" r="8" fill="#fff2c2"/>' +
      '<circle cx="' + x + '" cy="116" r="18" fill="#fff2c2" opacity=".12"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pb4)"/>' + stars(24) +
      /* tree line */
      '<path d="M0 150q20-40 50-20q20-36 56-14q24-30 60 0q30-28 64 0q28-30 60-4q24-24 56 4q30-20 54 6v100H0z" fill="#12301c"/>' +
      /* amphitheater shell */
      '<path d="M110 196V132q90-70 180 0v64z" fill="#e8e0cf"/><path d="M124 196V138q76-56 152 0v58z" fill="#2b1240"/>' +
      '<path d="M140 196v-50q60-40 120 0v50" fill="none" stroke="' + PURPLE + '" stroke-width="2" opacity=".7"/>' +
      /* DJ booth */
      '<rect x="150" y="164" width="100" height="32" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/>' +
      '<circle cx="176" cy="166" r="12" fill="#222"/><g class="spn"><circle cx="176" cy="166" r="10" fill="#111"/><rect x="175" y="157" width="2" height="9" fill="' + GOLD + '"/></g>' +
      '<circle cx="224" cy="166" r="12" fill="#222"/><g class="spn"><circle cx="224" cy="166" r="10" fill="#111"/><rect x="223" y="157" width="2" height="9" fill="' + GOLD + '"/></g>' +
      '<g class="bannr"><rect x="130" y="100" width="140" height="22" rx="2" fill="' + GOLD + '" stroke="#111" stroke-width="2"/>' +
      '<text x="200" y="116" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="2" textLength="124" lengthAdjust="spacingAndGlyphs" fill="#2b1240">STREETSWEEPERS</text></g>' +
      lamp(40) + lamp(360) +
      '<rect x="0" y="216" width="400" height="44" fill="#0c0714"/>' + crowd +
      '<rect x="96" y="14" width="208" height="28" rx="4" fill="#1d4a2b" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="33" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" letter-spacing="2" textLength="188" lengthAdjust="spacingAndGlyphs" fill="#fff">HERBERT VON KING PARK</text>',
      sky("pb4", "#0a0618", "#3a1c5c"));
  }

  /* 5. Fulton St and Nostrand Av: subway entrance with green globes, street signs, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 70; y < 220; y += 12) for (let x = (y / 12) % 2 ? 10 : 20; x < 250; x += 30) bricks += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#6e3a26"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pb5)"/>' + stars(16) +
      /* tag wall */
      '<rect x="20" y="70" width="230" height="150" fill="#53291b"/>' + bricks +
      tag("PAPOOSE", 34, 146, 38, GOLD, -7) + tag("BED-STUY", 58, 196, 26, PURPLE, -3) +
      /* subway entrance: railing + green globes */
      '<rect x="262" y="176" width="70" height="44" fill="#1a1a1a"/><path d="M262 176h70M262 190h70" stroke="#2f6b3c" stroke-width="3"/>' +
      '<rect x="264" y="164" width="3" height="56" fill="#2f6b3c"/><rect x="327" y="164" width="3" height="56" fill="#2f6b3c"/>' +
      '<circle class="glw" cx="265.5" cy="160" r="7" fill="#5ee38a"/><circle class="glw" cx="328.5" cy="160" r="7" fill="#5ee38a"/>' +
      '<text x="297" y="208" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">SUBWAY</text>' +
      /* streetlight with flicker */
      '<rect x="352" y="56" width="5" height="164" fill="#1d2329"/><path d="M354 58h-26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M312 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M312 70h26l34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="270" y="88" width="80" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="310" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Fulton St</text>' +
      '<rect x="264" y="110" width="92" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="310" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Nostrand Av</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#17141c"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("pb5", "#140a24", "#4a2a5a"));
  }

  window.SCENES = { train, brownstones, restoration, park, corner };
})();
