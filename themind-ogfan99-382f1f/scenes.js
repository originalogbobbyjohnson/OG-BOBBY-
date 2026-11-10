/* themind scenes (Regions tab: Chicago; Philly-born, came up in the South Loop at Columbia College Chicago, where he met THEMpeople in the cafeteria on day one). CSS classes prefixed tm- (the page's own anim-train is kept).
   1 Harrison on the Red Line: underground under State St, white tile walls, black CTA station sign with the red line bar, a silver CTA train sliding in.
   2 The Wabash Arts Corridor (Columbia College's South Loop mural street): big painted walls under the green steel of the Loop 'L', a Brown Line train rattling overhead.
   3 The THEMpeople studio (Coffee Grounds / Atlas Complex): mixing desk, monitor cones pumping, steaming coffee, a sweating mason jar.
   4 The green room (Black Aura): green walls, bulb mirror, sage smoke curling up, a lemon quartz on the table, honey jar with a bee (Mad Honey).
   5 S Wabash Ave and E Harrison St in the South Loop: green signs, theMIND tagged, the Loop 'L' curving over Wabash behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.tm-flk{animation:tmflick 2.4s infinite}' +
    '@keyframes tmsmoke{0%{transform:translate(0,0) scale(1);opacity:0}20%{opacity:.8}100%{transform:translate(14px,-80px) scale(1.8);opacity:0}}.tm-smk{transform-box:fill-box;transform-origin:50% 100%;animation:tmsmoke 3.6s ease-out infinite}.tm-smk2{animation-delay:-1.2s}.tm-smk3{animation-delay:-2.4s}' +
    '@keyframes tmcone{0%,100%{transform:scale(1)}50%{transform:scale(.8)}}.tm-cone{transform-box:fill-box;transform-origin:50% 50%;animation:tmcone .55s ease-in-out infinite}' +
    '@keyframes tmlvl{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.tm-lv{transform-box:fill-box;transform-origin:50% 100%;animation:tmlvl .7s ease-in-out infinite}.tm-lv2{animation-delay:-.2s}.tm-lv3{animation-delay:-.45s}.tm-lv4{animation-delay:-.6s}' +
    '@keyframes tmdrip{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(22px);opacity:0}}.tm-drip{animation:tmdrip 2.2s ease-in infinite}.tm-drip2{animation-delay:-1.1s}' +
    '@keyframes tmbee{0%{transform:translate(0,0)}25%{transform:translate(14px,-8px)}50%{transform:translate(26px,2px)}75%{transform:translate(10px,10px)}100%{transform:translate(0,0)}}.tm-bee{animation:tmbee 2.6s ease-in-out infinite}' +
    '@keyframes tmel{from{transform:translateX(-260px)}to{transform:translateX(460px)}}.tm-el{animation:tmel 6s linear infinite}' +
    '@keyframes tmglow{0%,100%{opacity:.35}50%{opacity:1}}.tm-glow{animation:tmglow 1.4s ease-in-out infinite}.tm-g2{animation-delay:-.5s}' +
    '@keyframes tmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tm-sp{animation:tmspray 1.4s ease-out infinite}.tm-sp2{animation-delay:.45s}' +
    '@keyframes tmcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.tm-car{animation:tmcar 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const RED = "#c60c30", PURP = "#b48cff", HONEY = "#ffc94a", SAGE = "#5fd68a", ELG = "#3f5a3f";

  /* the Loop 'L' steel: green girders + cross bracing */
  const elSteel = (y, h) => '<rect x="0" y="' + y + '" width="400" height="' + h + '" fill="' + ELG + '"/>' +
    Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' ' + y + 'l10 ' + h + 'l10 -' + h + '" stroke="#2c402c" stroke-width="2" fill="none"/>').join("") +
    [20, 150, 280, 390].map(x => '<rect x="' + (x - 5) + '" y="' + (y + h) + '" width="10" height="' + (230 - y - h) + '" fill="' + ELG + '"/><path d="M' + (x - 5) + ' ' + (y + h) + 'l-12 18M' + (x + 5) + ' ' + (y + h) + 'l12 18" stroke="' + ELG + '" stroke-width="5"/>').join("");
  const elTrain = (y) => '<g class="tm-el">' + Array.from({ length: 2 }, (_, c) =>
    '<rect x="' + (c * 122) + '" y="' + y + '" width="118" height="30" rx="4" fill="#cfd4d8" stroke="#7d858c" stroke-width="1.5"/>' +
    Array.from({ length: 5 }, (_, i) => '<rect x="' + (c * 122 + 8 + i * 22) + '" y="' + (y + 6) + '" width="16" height="11" rx="1" fill="#26313a"/>').join("") +
    '<rect x="' + (c * 122) + '" y="' + (y + 21) + '" width="118" height="3" fill="#62361b"/>').join("") + '</g>';

  /* 1. Harrison, Red Line subway under State St */
  function tmstation() {
    const train = '<g class="anim-train">' +
      '<rect x="20" y="72" width="336" height="92" rx="8" fill="#d3d8dc" stroke="#7a828a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (36 + i * 50) + '" y="86" width="34" height="30" rx="2" fill="#1f2a33"/>').join("") +
      '<rect x="20" y="124" width="336" height="5" fill="' + RED + '"/>' +
      [108, 238].map(x => '<rect x="' + x + '" y="86" width="26" height="72" rx="1" fill="#aab1b7" stroke="#7a828a"/><path d="M' + (x + 13) + ' 86v72" stroke="#7a828a"/>').join("") +
      '<rect x="326" y="80" width="26" height="16" rx="2" fill="#111"/><text x="339" y="92" text-anchor="middle" ' + font + ' font-size="8" fill="#ff4a6a">RED</text>' +
      '<circle cx="344" cy="150" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#1a1c20"/>' +
      '<rect x="0" y="0" width="400" height="40" fill="#2a2d33"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 42 + 6) + '" y="10" width="30" height="5" fill="#f5f2e3" class="tm-flk" opacity=".9"/>').join("") +
      '<rect x="0" y="40" width="400" height="128" fill="#e8e6df"/>' +
      Array.from({ length: 16 }, (_, i) => '<path d="M0 ' + (40 + i * 8) + 'h400" stroke="#cfccc2" stroke-width="1"/>').join("") +
      Array.from({ length: 26 }, (_, i) => '<path d="M' + (i * 16) + ' 40v128" stroke="#cfccc2" stroke-width="1"/>').join("") +
      '<rect x="0" y="60" width="400" height="6" fill="' + RED + '"/>' +
      train +
      '<rect x="0" y="168" width="400" height="6" fill="#f2c200"/><rect x="0" y="174" width="400" height="86" fill="#77746d"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44) + '" y="174" width="2" height="86" fill="#6a675f"/>').join("") +
      /* black CTA sign hanging from the ceiling */
      '<rect x="98" y="40" width="3" height="16" fill="#333"/><rect x="298" y="40" width="3" height="16" fill="#333"/>' +
      '<rect x="80" y="196" width="240" height="46" rx="3" fill="#111" stroke="#555"/>' +
      '<text x="200" y="224" text-anchor="middle" ' + font + ' font-size="24" fill="#fff">Harrison</text>' +
      '<rect x="92" y="230" width="216" height="6" fill="' + RED + '"/>' +
      '<rect x="90" y="203" width="24" height="16" rx="2" fill="' + RED + '"/><text x="102" y="215" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">Red</text>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e6df">STATE ST · SOUTH LOOP</text>' +
      tag("THEMPEOPLE", 14, 190, 13, PURP, -4),
      "");
  }

  /* 2. Wabash Arts Corridor under the Loop 'L' */
  function tmwabash() {
    const mural = (x, w, a, b, c) => '<rect x="' + x + '" y="94" width="' + w + '" height="104" fill="' + a + '"/>' +
      '<circle cx="' + (x + w * 0.35) + '" cy="136" r="' + (w * 0.22) + '" fill="' + b + '"/>' +
      '<path d="M' + x + ' 198q' + (w / 2) + ' -60 ' + w + ' -20v20z" fill="' + c + '"/>' +
      '<path d="M' + (x + w * 0.6) + ' 106l' + (w * 0.15) + ' 30l-' + (w * 0.3) + ' 0z" fill="' + c + '" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tms2)"/>' +
      '<rect x="0" y="84" width="400" height="120" fill="#7c5a46"/>' +
      Array.from({ length: 14 }, (_, i) => '<path d="M0 ' + (88 + i * 8) + 'h400" stroke="#6a4b3a" stroke-width="1"/>').join("") +
      mural(12, 110, "#2b6fd6", HONEY, "#ff5f7e") + mural(140, 120, "#ff8a3d", PURP, "#1fb59a") + mural(278, 110, "#1fb59a", "#ffe9c2", "#7a3cff") +
      
      elSteel(36, 34) + elTrain(8) +
      '<rect x="0" y="204" width="400" height="56" fill="#55524d"/><rect x="0" y="202" width="400" height="4" fill="#d9d6cf"/>' +
      '<path d="M0 236h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="296" y="210" width="96" height="20" rx="2" fill="#0f6b3a" stroke="#fff"/><text x="344" y="224" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">S Wabash Av</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f0e6d0">WABASH ARTS CORRIDOR · SOUTH LOOP</text>',
      sky("tms2", "#7fb6e8", "#f2d9b0"));
  }

  /* 3. THEMpeople studio */
  function tmstudio() {
    const cone = (x, y) => '<rect x="' + (x - 22) + '" y="' + (y - 34) + '" width="44" height="80" rx="4" fill="#1c1a20" stroke="#3a3540"/>' +
      '<circle cx="' + x + '" cy="' + (y - 14) + '" r="9" fill="#333" class="tm-cone"/><circle cx="' + x + '" cy="' + (y + 20) + '" r="16" fill="#2a2a2e" stroke="#555" class="tm-cone"/>';
    return svg(
      '<rect width="400" height="260" fill="#241a2e"/>' +
      Array.from({ length: 8 }, (_, i) => Array.from({ length: 5 }, (_, j) => '<path d="M' + (i * 52 + (j % 2) * 26) + ' ' + (j * 26) + 'l13 13l-13 13l-13 -13z" fill="#2f2340"/>').join("")).join("") +
      '<rect x="0" y="130" width="400" height="6" fill="' + PURP + '" opacity=".5"/>' +
      cone(46, 96) + cone(354, 96) +
      '<rect x="110" y="40" width="180" height="84" rx="4" fill="#0f0c14" stroke="#4a4256"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (122 + i * 12) + '" y="70" width="8" height="44" fill="' + (i % 3 ? SAGE : HONEY) + '" class="tm-lv tm-lv' + (1 + i % 4) + '"/>').join("") +
      '<text x="200" y="58" text-anchor="middle" ' + font + ' font-size="11" fill="' + PURP + '">THEMPEOPLE · LATE SESSION</text>' +
      '<path d="M40 170l40 -26h240l40 26z" fill="#3a3340"/><rect x="40" y="170" width="320" height="14" fill="#2a2430"/>' +
      Array.from({ length: 24 }, (_, i) => '<rect x="' + (92 + i * 9.5) + '" y="' + (150 + (i * 7) % 12) + '" width="4" height="10" rx="1" fill="#ddd"/>').join("") +
      '<rect x="0" y="184" width="400" height="76" fill="#3b2a22"/>' +
      /* coffee cup with steam (Coffee Grounds) */
      '<path d="M86 210h34l-4 34h-26z" fill="#f2efe8"/><path d="M120 216q12 2 0 16" stroke="#f2efe8" stroke-width="3" fill="none"/><rect x="88" y="210" width="30" height="5" fill="#4a2c1a"/>' +
      [0, 1, 2].map(i => '<circle cx="' + (98 + i * 6) + '" cy="204" r="4" fill="#f0f0f0" class="tm-smk' + (i ? ' tm-smk' + (i + 1) : '') + '"/>').join("") +
      /* mason jar with water, sweating */
      '<rect x="262" y="202" width="40" height="48" rx="5" fill="#bfe6f2" opacity=".55" stroke="#e8f8ff" stroke-width="2"/><rect x="264" y="196" width="36" height="8" rx="2" fill="#c9a24a"/>' +
      '<rect x="264" y="218" width="36" height="30" fill="#7fc8e8" opacity=".55"/>' +
      '<circle cx="268" cy="214" r="1.8" fill="#fff" class="tm-drip"/><circle cx="296" cy="210" r="1.8" fill="#fff" class="tm-drip tm-drip2"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="' + HONEY + '">COFFEE GROUNDS</text>',
      "");
  }

  /* 4. The green room: sage, lemon quartz, mad honey */
  function tmgreen() {
    return svg(
      '<rect width="400" height="260" fill="#1f4a33"/>' +
      Array.from({ length: 13 }, (_, i) => '<rect x="' + (i * 32) + '" y="0" width="16" height="190" fill="#24553b"/>').join("") +
      /* bulb mirror */
      '<rect x="120" y="22" width="160" height="110" rx="4" fill="#d9c9a0"/><rect x="130" y="32" width="140" height="90" fill="#9fb8b0"/><path d="M140 40l30 0l-40 60z" fill="#c6dcd4" opacity=".7"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle cx="' + (134 + i * 26.4) + '" cy="26" r="5" fill="#fff4c4" class="tm-glow' + (i % 2 ? ' tm-g2' : '') + '"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<circle cx="124" cy="' + (44 + i * 24) + '" r="5" fill="#fff4c4" class="tm-glow' + (i % 2 ? '' : ' tm-g2') + '"/><circle cx="276" cy="' + (44 + i * 24) + '" r="5" fill="#fff4c4" class="tm-glow' + (i % 2 ? ' tm-g2' : '') + '"/>').join("") +
      /* couch */
      '<rect x="292" y="132" width="104" height="44" rx="10" fill="' + PURP + '"/><rect x="292" y="156" width="104" height="30" rx="6" fill="#8d68d6"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#3a2a1f"/><rect x="40" y="168" width="230" height="18" rx="3" fill="#5a3d2a"/><rect x="40" y="186" width="230" height="8" fill="#47301f"/>' +
      /* sage bundle + smoke */
      '<g transform="rotate(-20 92 160)"><rect x="84" y="140" width="16" height="30" rx="6" fill="#8fae86"/><path d="M84 148h16M84 156h16M84 164h16" stroke="#d9c9a0" stroke-width="2"/></g>' +
      '<rect x="78" y="164" width="40" height="6" rx="3" fill="#cfc6b8"/>' +
      [0, 1, 2].map(i => '<circle cx="' + (86 + i * 4) + '" cy="136" r="7" fill="#e6e6e6" class="tm-smk' + (i ? ' tm-smk' + (i + 1) : '') + '"/>').join("") +
      /* lemon quartz */
      '<path d="M150 168l10 -24l10 24z" fill="#ffe36b" stroke="#c9a400"/><path d="M160 144l4 24" stroke="#fff6b0" stroke-width="1.5"/>' +
      /* honey jar + bee */
      '<rect x="206" y="146" width="34" height="24" rx="6" fill="' + HONEY + '" stroke="#a46d00" stroke-width="2"/><rect x="210" y="140" width="26" height="8" rx="2" fill="#7a4e1a"/>' +
      '<g class="tm-bee"><ellipse cx="248" cy="124" rx="6" ry="4" fill="#ffd21f"/><path d="M246 120v8M250 120v8" stroke="#111" stroke-width="1.6"/><ellipse cx="246" cy="118" rx="4" ry="3" fill="#e8f6ff" opacity=".85"/><ellipse cx="251" cy="118" rx="4" ry="3" fill="#e8f6ff" opacity=".85"/></g>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="14" fill="' + SAGE + '">BURN SAGE, BURN SAGE</text>',
      "");
  }

  /* 5. S Wabash Ave & E Harrison St, the Loop 'L' behind */
  function tmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tms5)"/>' +
      '<g fill="#2c2738"><rect x="0" y="40" width="50" height="90"/><rect x="60" y="20" width="40" height="110"/><rect x="300" y="30" width="44" height="100"/><rect x="352" y="56" width="48" height="74"/></g>' +
      '<g fill="#ffd98a" opacity=".6">' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + (i % 2) * 14) + '" y="' + (30 + i * 14) + '" width="8" height="6"/><rect x="' + (308 + (i % 2) * 16) + '" y="' + (40 + i * 13) + '" width="8" height="6"/>').join("") + '</g>' +
      /* curving Loop 'L' behind */
      '<path d="M0 92h220q40 0 60 -20l40 -40" stroke="' + ELG + '" stroke-width="16" fill="none"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 20) + ' 84l10 16l10 -16" stroke="#2c402c" stroke-width="2" fill="none"/>').join("") +
      [30, 120, 210].map(x => '<rect x="' + (x - 4) + '" y="100" width="8" height="34" fill="' + ELG + '"/>').join("") +
      elTrain(62) +
      '<rect x="0" y="130" width="400" height="96" fill="#6e5e52"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#5c4e44" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#5c4e44" stroke-width="1"/>').join("")).join("") +
      tag("theMIND", 22, 194, 50, PURP, -6) + tag("THEMPEOPLE", 40, 216, 15, HONEY, -3) + tag("ZIGG", 210, 212, 18, SAGE, -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524d"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(250, 96, 140, "S Wabash Av") + sign(262, 122, 116, "E Harrison St") +
      '<g class="tm-car"><rect x="0" y="238" width="58" height="14" rx="5" fill="' + HONEY + '"/><rect x="12" y="230" width="32" height="10" rx="3" fill="' + HONEY + '"/><rect x="15" y="232" width="12" height="6" fill="#bfe3ff"/><rect x="30" y="232" width="12" height="6" fill="#bfe3ff"/><circle cx="13" cy="252" r="5" fill="#111"/><circle cx="45" cy="252" r="5" fill="#111"/></g>' +
      '<g class="tm-sp"><circle cx="196" cy="162" r="3" fill="' + PURP + '" opacity=".7"/></g><g class="tm-sp tm-sp2"><circle cx="202" cy="156" r="2" fill="' + PURP + '" opacity=".6"/></g>',
      sky("tms5", "#1e1838", "#c58bd8"));
  }

  window.SCENES = { tmstation: tmstation, tmwabash: tmwabash, tmstudio: tmstudio, tmgreen: tmgreen, tmcorner: tmcorner };
})();
