/* liluglymane scenes (Regions tab: Virginia; Richmond). 400 x 260 SVGs. CSS classes prefixed lm- (the page's own anim-train is kept).
   0 the GRTC Pulse at Convention Center station (Broad St & 4th St), 1 a Jackson Ward row house with cast-iron porches and a basement house show,
   2 the little alternative venue on W Grace St, 3 the homecoming show at the Broadberry on W Broad St,
   4 W Grace St & N Laurel St: LIL UGLY MANE tagged on the wall, the Altria Theater's twin domed towers behind. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lm-flk{animation:lmflick 2.6s infinite}' +
    '@keyframes lmglow{0%,100%{opacity:.45}50%{opacity:1}}.lm-glow{animation:lmglow 1.6s ease-in-out infinite}.lm-g2{animation-delay:-.8s}' +
    '@keyframes lmbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.lm-bn{animation:lmbounce .6s ease-in-out infinite}.lm-b2{animation-delay:-.3s}.lm-b3{animation-delay:-.15s}' +
    '@keyframes lmwave{0%{transform:scale(.6);opacity:.9}100%{transform:scale(1.6);opacity:0}}.lm-wv{transform-box:fill-box;transform-origin:50% 50%;animation:lmwave 1.4s ease-out infinite}.lm-w2{animation-delay:.7s}' +
    '@keyframes lmsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.lm-sw{transform-box:fill-box;transform-origin:50% 0;animation:lmsweep 3.2s ease-in-out infinite}.lm-sw2{animation-delay:-1.6s}' +
    '@keyframes lmwalk{0%{transform:translateX(0)}100%{transform:translateX(440px)}}.lm-wk{animation:lmwalk 14s linear infinite}.lm-wk2{animation-delay:-7s}' +
    '@keyframes lmcar{0%{transform:translateX(-120px)}100%{transform:translateX(460px)}}.lm-car{animation:lmcar 7s linear infinite}' +
    '@keyframes lmbird{0%{transform:translate(0,0)}100%{transform:translate(-440px,-24px)}}.lm-bd{animation:lmbird 12s linear infinite}' +
    '@keyframes lmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lm-sp{animation:lmspray 1.4s ease-out infinite}.lm-sp2{animation-delay:.45s}' +
    '@keyframes lmleaf{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.lm-lf{transform-box:fill-box;transform-origin:50% 100%;animation:lmleaf 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="' + (txt.length * 9 + 16) + '" height="20" rx="10" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + (txt.length * 9 + 16) / 2) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const person = (x, y, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 22) + '" r="6" fill="' + c + '"/><rect x="' + (x - 6) + '" y="' + (y - 16) + '" width="12" height="16" rx="4" fill="' + c + '"/></g>';
  const LIME = "#9ad14b", LAVA = "#e8572a", ICE = "#7fb6d9", GRTC = "#1f4e79", TEAL = "#3fb8a0";

  /* 0. Convention Center station, Broad St & 4th St: the glass canopy on the median, the tall pylon with the PULSE badge, the long Greater Richmond Convention Center behind, the Pulse bus pulling in */
  function lmstation() {
    const bus = '<g class="anim-train"><rect x="20" y="132" width="300" height="72" rx="12" fill="#f4f6f7" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (36 + i * 40) + '" y="144" width="32" height="26" rx="3" fill="#22313e"/>').join("") +
      '<rect x="282" y="142" width="34" height="32" rx="4" fill="#22313e"/><rect x="20" y="178" width="300" height="7" fill="' + GRTC + '"/><rect x="20" y="187" width="300" height="3" fill="' + TEAL + '"/>' +
      '<rect x="146" y="140" width="26" height="60" rx="2" fill="none" stroke="#9aa1a8" stroke-width="2"/>' +
      '<rect x="228" y="134" width="88" height="10" rx="2" fill="#111"/><text x="272" y="142" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">PULSE  ROCKETTS LDG</text>' +
      '<circle cx="76" cy="206" r="12" fill="#222"/><circle cx="76" cy="206" r="5" fill="#9aa1a8"/><circle cx="264" cy="206" r="12" fill="#222"/><circle cx="264" cy="206" r="5" fill="#9aa1a8"/>' +
      '<circle cx="317" cy="192" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lm0)"/>' +
      /* convention center: long low hall, tan precast + a glass band */
      '<rect x="0" y="62" width="400" height="80" fill="#c9b79a"/><rect x="0" y="74" width="400" height="26" fill="#8fb3c4" opacity=".85"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="74" width="2" height="26" fill="#5b6a72"/>').join("") +
      '<rect x="0" y="58" width="400" height="6" fill="#9e8b6e"/><rect x="0" y="110" width="400" height="32" fill="#b4a283"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (12 + i * 40) + '" y="116" width="22" height="20" fill="#6d5f4b"/>').join("") +
      /* canopy on the median */
      '<rect x="100" y="46" width="210" height="8" fill="#5a646e"/><rect x="100" y="54" width="210" height="14" fill="#bfe3ef" opacity=".75"/>' + [120, 290].map(x => '<rect x="' + x + '" y="68" width="5" height="76" fill="#5a646e"/>').join("") +
      /* pylon */
      '<rect x="334" y="22" width="44" height="122" rx="2" fill="#1c252e"/><rect x="334" y="22" width="44" height="5" fill="' + TEAL + '"/>' + badge(330, 48, "PULSE", GRTC) +
      '<text x="356" y="80" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">CONVENTION</text><text x="356" y="92" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">CENTER</text>' +
      '<rect x="342" y="102" width="28" height="12" rx="2" fill="#000"/><text x="356" y="111" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb84a" class="lm-flk">2 MIN</text>' +
      '<rect x="0" y="144" width="400" height="10" fill="#cfcac0"/><rect x="0" y="154" width="400" height="106" fill="#3a3d42"/>' +
      '<rect x="0" y="212" width="400" height="4" fill="#b7342b" opacity=".7"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44) + '" y="236" width="24" height="4" fill="#f7f3ea"/>').join("") +
      bus +
      sign(118, 14, 164, "E BROAD ST") + '<rect x="196" y="36" width="3" height="10" fill="#5a646e"/>',
      sky("lm0", "#7ab3d8", "#dcebf3"));
  }

  /* 1. Jackson Ward: a brick row house with black cast-iron porch lace, the basement windows glowing with a house show, sound waves pumping out, kids on the stoop */
  function lmhouse() {
    const lace = (x, y, w) => '<g stroke="#111" stroke-width="1.6" fill="none">' + '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="6" fill="#111"/>' +
      Array.from({ length: Math.floor(w / 14) }, (_, i) => '<path d="M' + (x + 7 + i * 14) + ' ' + (y + 6) + 'q-6 8 0 14q6 -6 0 -14M' + (x + i * 14) + ' ' + (y + 20) + 'q7 -10 14 0"/>').join("") +
      '<path d="M' + x + ' ' + (y + 6) + 'v54M' + (x + w) + ' ' + (y + 6) + 'v54"/>' +
      '<rect x="' + x + '" y="' + (y + 44) + '" width="' + w + '" height="3" fill="#111"/>' +
      Array.from({ length: Math.floor(w / 6) }, (_, i) => '<path d="M' + (x + 3 + i * 6) + ' ' + (y + 47) + 'v13"/>').join("") + '</g>';
    const house = (x, brick, trim) => '<rect x="' + x + '" y="40" width="130" height="150" fill="' + brick + '"/><rect x="' + x + '" y="34" width="130" height="8" fill="' + trim + '"/>' +
      '<rect x="' + (x + 16) + '" y="54" width="26" height="36" fill="#2b2a33"/><rect x="' + (x + 52) + '" y="54" width="26" height="36" fill="#2b2a33"/><rect x="' + (x + 88) + '" y="54" width="26" height="36" fill="#2b2a33"/>' +
      '<rect x="' + (x + 16) + '" y="50" width="26" height="4" fill="' + trim + '"/><rect x="' + (x + 52) + '" y="50" width="26" height="4" fill="' + trim + '"/><rect x="' + (x + 88) + '" y="50" width="26" height="4" fill="' + trim + '"/>' +
      '<rect x="' + (x + 16) + '" y="120" width="26" height="40" fill="#2b2a33"/><rect x="' + (x + 88) + '" y="120" width="26" height="40" fill="#2b2a33"/><rect x="' + (x + 52) + '" y="116" width="28" height="48" fill="#3b2a22"/>' +
      lace(x + 6, 104, 118);
    return svg(
      '<rect width="400" height="260" fill="url(#lm1)"/>' +
      '<circle cx="330" cy="30" r="12" fill="#f2efe0" opacity=".85"/>' +
      house(4, "#8a3b2c", "#d9cdb4") + house(136, "#a0563d", "#e6dcc6") + house(268, "#7a3a33", "#d0c3a8") +
      /* sidewalk + stoop */
      '<rect x="0" y="190" width="400" height="70" fill="#5b5754"/><rect x="0" y="190" width="400" height="6" fill="#8c8780"/>' +
      '<rect x="182" y="164" width="44" height="8" fill="#9b958c"/><rect x="178" y="172" width="52" height="8" fill="#8c8780"/><rect x="174" y="180" width="60" height="10" fill="#7b766f"/>' +
      /* basement windows glowing at street level, a crowd jumping inside */
      '<rect x="140" y="196" width="48" height="22" fill="' + LAVA + '" class="lm-glow"/><rect x="220" y="196" width="48" height="22" fill="' + LIME + '" class="lm-glow lm-g2"/>' +
      '<g fill="#1a1416">' + [148, 160, 172, 180].map((x, i) => '<g class="lm-bn' + [" lm-b2", "", " lm-b3", ""][i] + '"><circle cx="' + x + '" cy="208" r="3"/><rect x="' + (x - 4) + '" y="211" width="8" height="8" rx="2"/></g>').join("") +
      [228, 240, 252, 262].map((x, i) => '<g class="lm-bn' + ["", " lm-b3", " lm-b2", ""][i] + '"><circle cx="' + x + '" cy="208" r="3"/><rect x="' + (x - 4) + '" y="211" width="8" height="8" rx="2"/></g>').join("") + '</g>' +
      '<rect x="140" y="196" width="48" height="22" fill="none" stroke="#111" stroke-width="2.5"/><rect x="220" y="196" width="48" height="22" fill="none" stroke="#111" stroke-width="2.5"/>' +
      '<path d="M140 218h48M220 218h48" stroke="#111" stroke-width="3"/>' +
      /* sound waves */
      '<circle cx="164" cy="207" r="18" fill="none" stroke="' + LAVA + '" stroke-width="2" class="lm-wv"/><circle cx="244" cy="207" r="18" fill="none" stroke="' + LIME + '" stroke-width="2" class="lm-wv lm-w2"/>' +
      person(196, 180, "#2a2f3a", "lm-bn lm-b2") + person(214, 180, "#3a2a40", "lm-bn") +
      '<rect x="40" y="226" width="80" height="14" rx="3" fill="#f7f3ea"/><text x="80" y="236" text-anchor="middle" ' + font + ' font-size="8" fill="#111">SHOW DOWNSTAIRS</text>' +
      '<rect x="0" y="244" width="400" height="16" fill="#3a3a3e"/>',
      sky("lm1", "#1b1d33", "#46395a"));
  }

  /* 2. The little alternative venue on W Grace St: a two-story brick storefront, its blank marquee box flickering LIVE TONIGHT, the line out front, a VCU-area street at night */
  function lmgrace() {
    return svg(
      '<rect width="400" height="260" fill="url(#lm2)"/>' +
      '<rect x="0" y="70" width="90" height="120" fill="#4a3b36"/><rect x="310" y="60" width="90" height="130" fill="#3b3a44"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (12 + (i % 2) * 40) + '" y="' + (84 + Math.floor(i / 2) * 36) + '" width="22" height="24" fill="#e7c76a" opacity=".7"/><rect x="' + (322 + (i % 2) * 40) + '" y="' + (76 + Math.floor(i / 2) * 40) + '" width="22" height="26" fill="#9fc0d8" opacity=".55"/>').join("") +
      /* the venue */
      '<rect x="94" y="40" width="212" height="150" fill="#6e3a2e"/><rect x="94" y="34" width="212" height="8" fill="#2a1d1a"/>' +
      [112, 172, 232].map(x => '<rect x="' + x + '" y="52" width="44" height="34" fill="#20161a"/><rect x="' + x + '" y="52" width="44" height="34" fill="none" stroke="#d8c8b0" stroke-width="2"/>').join("") +
      /* marquee box */
      '<rect x="110" y="94" width="180" height="30" rx="3" fill="#111" stroke="' + LIME + '" stroke-width="2"/><text x="200" y="115" text-anchor="middle" ' + font + ' font-size="16" fill="' + LIME + '" class="lm-flk" letter-spacing="2">LIVE TONIGHT</text>' +
      /* storefront glass + door */
      '<rect x="104" y="132" width="80" height="58" fill="#2c2228"/><rect x="104" y="132" width="80" height="58" fill="' + LAVA + '" opacity=".35" class="lm-glow"/>' +
      '<rect x="216" y="132" width="80" height="58" fill="#2c2228"/><rect x="216" y="132" width="80" height="58" fill="' + ICE + '" opacity=".3" class="lm-glow lm-g2"/>' +
      '<rect x="186" y="128" width="28" height="62" fill="#1a1214"/><rect x="190" y="134" width="20" height="30" fill="' + LAVA + '" opacity=".6" class="lm-glow"/>' +
      '<text x="144" y="166" text-anchor="middle" ' + font + ' font-size="9" fill="#f7f3ea" opacity=".85">ALL AGES</text><text x="256" y="166" text-anchor="middle" ' + font + ' font-size="9" fill="#f7f3ea" opacity=".85">DOORS 8</text>' +
      /* sidewalk + street */
      '<rect x="0" y="190" width="400" height="16" fill="#77716b"/><rect x="0" y="206" width="400" height="54" fill="#2c2d31"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 48) + '" y="232" width="26" height="3" fill="#e8d36a"/>').join("") +
      /* the line out front */
      '<g class="lm-bn">' + person(30, 200, "#2a2f3a") + person(48, 200, "#4a2a3a") + person(66, 200, "#2f3a2a") + '</g>' +
      '<g class="lm-bn lm-b2">' + person(330, 200, "#3a2a40") + person(350, 200, "#2a3340") + '</g>' +
      /* street lamp */
      '<rect x="370" y="110" width="4" height="82" fill="#222"/><path d="M372 110q0 -10 -14 -10" stroke="#222" stroke-width="4" fill="none"/><circle cx="356" cy="104" r="6" fill="#fff3c2" class="lm-glow"/>' +
      sign(6, 6, 116, "W GRACE ST") +
      '<g class="lm-car"><rect x="0" y="214" width="70" height="18" rx="5" fill="#5b7f9a"/><rect x="12" y="206" width="40" height="12" rx="4" fill="#4a6a82"/><circle cx="14" cy="234" r="6" fill="#111"/><circle cx="56" cy="234" r="6" fill="#111"/><circle cx="68" cy="220" r="3" fill="#fff6c2"/></g>',
      sky("lm2", "#120f1d", "#3a2a3e"));
  }

  /* 3. The homecoming show at the Broadberry on W Broad St: the stage, a single mic stand, amps stacked, lights sweeping over the crowd, a cassette on the monitor */
  function lmstage() {
    return svg(
      '<rect width="400" height="260" fill="url(#lm3)"/>' +
      /* truss + lights */
      '<rect x="20" y="14" width="360" height="8" fill="#2a2a30"/>' +
      [70, 150, 250, 330].map((x, i) => '<rect x="' + (x - 8) + '" y="20" width="16" height="12" rx="2" fill="#555"/><path d="M' + (x - 8) + ' 32L' + (x - 50) + ' 190L' + (x + 50) + ' 190L' + (x + 8) + ' 32z" fill="' + [LIME, LAVA, ICE, LAVA][i] + '" opacity=".22" class="lm-sw' + (i % 2 ? " lm-sw2" : "") + '"/>').join("") +
      /* back wall + amps */
      '<rect x="40" y="70" width="320" height="100" fill="#141218"/>' +
      [56, 100, 300, 256].map(x => '<rect x="' + x + '" y="104" width="40" height="64" rx="2" fill="#1f1d22" stroke="#3a383e" stroke-width="2"/><circle cx="' + (x + 20) + '" cy="124" r="10" fill="#2c2a30"/><circle cx="' + (x + 20) + '" cy="152" r="10" fill="#2c2a30"/>').join("") +
      /* stage deck */
      '<rect x="20" y="168" width="360" height="14" fill="#3b2e26"/><rect x="20" y="182" width="360" height="6" fill="#1a1412"/>' +
      /* mic stand */
      '<rect x="198" y="112" width="4" height="56" fill="#bfc4c9"/><path d="M200 112l14 -10" stroke="#bfc4c9" stroke-width="3"/><circle cx="216" cy="100" r="5" fill="#333" stroke="#bfc4c9" stroke-width="1.5"/>' +
      '<path d="M190 168h20" stroke="#bfc4c9" stroke-width="3"/>' +
      /* wedge monitor with a cassette */
      '<path d="M150 168l10 -16h34l6 16z" fill="#222"/><rect x="156" y="146" width="30" height="18" rx="2" fill="' + LIME + '" transform="rotate(-6 171 155)"/><circle cx="165" cy="155" r="3" fill="#111" transform="rotate(-6 171 155)"/><circle cx="178" cy="154" r="3" fill="#111" transform="rotate(-6 171 155)"/>' +
      /* crowd */
      '<rect x="0" y="188" width="400" height="72" fill="#0b0a0e"/>' +
      Array.from({ length: 16 }, (_, i) => '<g class="lm-bn' + [" lm-b2", "", " lm-b3"][i % 3] + '"><circle cx="' + (14 + i * 25) + '" cy="' + (206 + (i % 2) * 8) + '" r="9" fill="#1d1a22"/><rect x="' + (5 + i * 25) + '" y="' + (214 + (i % 2) * 8) + '" width="18" height="40" rx="6" fill="#1d1a22"/></g>').join("") +
      '<path d="M86 200l-6 -22M318 204l8 -24" stroke="#1d1a22" stroke-width="5" stroke-linecap="round" class="lm-bn lm-b2"/>' +
      '<text x="200" y="58" text-anchor="middle" ' + font + ' font-size="13" fill="' + LIME + '" letter-spacing="3" class="lm-flk">HOMECOMING</text>',
      sky("lm3", "#0e0b14", "#2a1f30"));
  }

  /* 4. W Grace St & N Laurel St: green signs, LIL UGLY MANE on the brick wall, the Altria Theater's twin domed towers over Monroe Park behind at dusk */
  function lmcorner() {
    const tower = x => '<rect x="' + x + '" y="62" width="34" height="90" fill="#d9b98a"/><rect x="' + (x - 3) + '" y="58" width="40" height="8" fill="#b8915e"/>' +
      '<path d="M' + x + ' 58q17 -36 34 0z" fill="#3f7f86"/><rect x="' + (x + 15) + '" y="14" width="4" height="10" fill="#c9a24a"/><circle cx="' + (x + 17) + '" cy="14" r="3" fill="#c9a24a"/>' +
      '<rect x="' + (x + 9) + '" y="76" width="16" height="26" rx="8" fill="#5a3a2a"/><rect x="' + (x + 9) + '" y="112" width="16" height="22" rx="8" fill="#5a3a2a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (x + i * 6) + '" y="150" width="3" height="4" fill="#b8915e"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lm4)"/>' +
      '<g class="lm-bd"><path d="M420 40q5 -5 10 0q5 -5 10 0" stroke="#2a2030" stroke-width="2" fill="none"/></g>' +
      /* theater behind */
      tower(150) + tower(250) +
      '<rect x="184" y="92" width="66" height="60" fill="#cfae7e"/><path d="M184 92h66" stroke="#b8915e" stroke-width="4"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (190 + i * 15) + '" y="104" width="10" height="20" rx="5" fill="#5a3a2a"/>').join("") +
      '<path d="M184 132h66" stroke="#3f7f86" stroke-width="5"/>' +
      /* Monroe Park trees */
      Array.from({ length: 3 }, (_, i) => '<g class="lm-lf"><rect x="' + (116 + i * 64) + '" y="150" width="5" height="22" fill="#4a3424"/><circle cx="' + (118.5 + i * 64) + '" cy="146" r="16" fill="#2f5d3a"/></g>').join("") +
      /* the wall */
      '<rect x="0" y="120" width="104" height="96" fill="#7c3a2c"/>' +
      Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (128 + r * 12) + 'h104" stroke="#5e2a20" stroke-width="1"/>').join("") +
      tag("LIL UGLY", 8, 160, 21, LIME, -8) + tag("MANE", 22, 196, 26, LAVA, -6) +
      '<g class="lm-sp"><circle cx="92" cy="182" r="2" fill="' + LAVA + '"/></g><g class="lm-sp lm-sp2"><circle cx="96" cy="176" r="1.6" fill="' + LIME + '"/></g>' +
      '<rect x="312" y="132" width="88" height="84" fill="#3a3540"/>' + tag("LUM", 324, 184, 22, ICE, -10) +
      /* sidewalk + street */
      '<rect x="0" y="216" width="400" height="10" fill="#8c8780"/><rect x="0" y="226" width="400" height="34" fill="#2e2f33"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 48) + '" y="242" width="26" height="3" fill="#f7f3ea"/>').join("") +
      /* sign post */
      '<rect x="282" y="96" width="5" height="122" fill="#4a4f55"/>' + sign(232, 78, 112, "W GRACE ST") + sign(244, 102, 92, "N LAUREL ST") +
      '<g class="lm-car"><rect x="0" y="228" width="66" height="16" rx="5" fill="' + LAVA + '"/><rect x="12" y="220" width="36" height="11" rx="4" fill="#b8431f"/><circle cx="14" cy="246" r="5" fill="#111"/><circle cx="52" cy="246" r="5" fill="#111"/></g>',
      sky("lm4", "#3a2c52", "#e89a6a"));
  }

  window.SCENES = { lmstation, lmhouse, lmgrace, lmstage, lmcorner };
})();
