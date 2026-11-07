/* jid scenes (Regions tab: Atlanta; East Atlanta). CSS classes and ids prefixed ji- (the page's own anim-train is kept).
   1 Edgewood/Candler Park on MARTA (Blue + Green lines): open-air platform, concrete canopy, a silver MARTA train sliding in. Moreland Ave runs south from here to East Atlanta.
   2 Stephenson High School, Stone Mountain (he played defensive back there): Friday night lights, royal blue and black end zone, a spiral pass in the air.
   3 Hampton University's Emancipation Oak, Hampton, VA (he went there on a football scholarship and met EarthGang): the huge spreading live oak, moss swaying, the river behind.
   4 Memorial Drive at night ("Motor running on Memorial Drive" - Dance Now): the road running west to the Georgia State Capitol's gold dome, headlights cruising.
   5 Flat Shoals Ave and Glenwood Ave in East Atlanta Village: green signs, JID tagged on the brick, string lights, downtown's skyline with the round glass hotel tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jiflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.ji-flk{animation:jiflick 2.4s infinite}.ji-flk2{animation-delay:.8s}' +
    '@keyframes jiglow{0%,100%{opacity:.4}50%{opacity:1}}.ji-glow{animation:jiglow 2.2s ease-in-out infinite}.ji-g2{animation-delay:-1.1s}.ji-g3{animation-delay:-.5s}' +
    '@keyframes jiball{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(250px,-10px) rotate(720deg)}}.ji-ball{transform-box:fill-box;transform-origin:50% 50%;animation:jiball 2.6s linear infinite}' +
    '@keyframes jiarc{0%{transform:translateY(0)}50%{transform:translateY(-46px)}100%{transform:translateY(0)}}.ji-arc{animation:jiarc 2.6s ease-in-out infinite}' +
    '@keyframes jimoss{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.ji-moss{transform-box:fill-box;transform-origin:50% 0%;animation:jimoss 3.4s ease-in-out infinite}.ji-moss2{animation-delay:-1.7s}' +
    '@keyframes jibird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.ji-bird{animation:jibird 9s linear infinite}.ji-bird2{animation-delay:-4s}' +
    '@keyframes jiwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.ji-wave{animation:jiwave 3s ease-in-out infinite}' +
    '@keyframes jicar{0%{transform:translate(0,0) scale(1)}100%{transform:translate(-8px,-74px) scale(.18)}}.ji-car{transform-box:fill-box;transform-origin:50% 100%;animation:jicar 4.5s ease-in infinite}' +
    '@keyframes jicar2{0%{transform:translate(0,-70px) scale(.18)}100%{transform:translate(10px,0) scale(1)}}.ji-car2{transform-box:fill-box;transform-origin:50% 100%;animation:jicar2 5s ease-out infinite;animation-delay:-2s}' +
    '@keyframes jisp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ji-sp{animation:jisp 1.4s ease-out infinite}.ji-sp2{animation-delay:.45s}' +
    '@keyframes jiscoot{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ji-scoot{animation:jiscoot 8s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="30" height="20" rx="4" fill="' + color + '"/><text x="' + (x + 15) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const RED = "#ff5a36", ROYAL = "#2f5fd0", GOLD = "#f4d35e", BLUE = "#0072bc", GREENL = "#00a651";

  /* 1. Edgewood/Candler Park: open-air platform, concrete canopy, black sign with BL + GN bullets, silver MARTA train with blue band */
  function jistation() {
    const tr = '<g class="anim-train"><rect x="20" y="112" width="340" height="74" rx="8" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 46) + '" y="124" width="32" height="26" rx="3" fill="#1d262e"/>').join("") +
      '<rect x="20" y="156" width="340" height="9" fill="' + BLUE + '"/><rect x="20" y="167" width="340" height="3" fill="#f39a1e"/>' +
      '<path d="M120 124v58M246 124v58" stroke="#9aa1a8" stroke-width="2"/>' +
      '<rect x="340" y="116" width="20" height="68" rx="4" fill="#a3a9b0"/><circle cx="352" cy="176" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ji1)"/>' +
      /* treetops of Candler Park / Edgewood behind the tracks */
      '<g fill="#3d7a44"><circle cx="40" cy="98" r="20"/><circle cx="72" cy="92" r="17"/><circle cx="104" cy="100" r="15"/><circle cx="300" cy="96" r="18"/><circle cx="334" cy="90" r="20"/><circle cx="370" cy="98" r="16"/></g>' +
      '<g fill="#a7b8c8" opacity=".75"><rect x="150" y="76" width="22" height="34"/><rect x="178" y="68" width="18" height="42"/><rect x="214" y="80" width="26" height="30"/></g>' +
      /* canopy */
      '<rect x="0" y="22" width="400" height="18" fill="#c4bdb1"/><rect x="0" y="38" width="400" height="5" fill="#8e877b"/>' +
      [40, 160, 280].map((x, i) => '<rect class="ji-flk' + (i === 1 ? " ji-flk2" : "") + '" x="' + x + '" y="43" width="70" height="4" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="108" width="400" height="80" fill="#3a3a3c" opacity=".3"/>' + tr +
      '<rect x="0" y="188" width="400" height="7" fill="#f2c200"/><rect x="0" y="195" width="400" height="65" fill="#a9a49a"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 195v65" stroke="#97928a" stroke-width="1"/>').join("") +
      [26, 374].map(x => '<rect x="' + (x - 7) + '" y="43" width="14" height="145" fill="#a39c8f"/>').join("") +
      '<rect x="58" y="52" width="284" height="44" rx="3" fill="#111"/><text x="70" y="72" ' + font + ' font-size="15" fill="#fff">Edgewood/</text><text x="70" y="89" ' + font + ' font-size="15" fill="#fff">Candler Park</text>' +
      bullet(262, 74, "BL", BLUE) + bullet(300, 74, "GN", GREENL) +
      '<rect x="150" y="212" width="100" height="6" rx="3" fill="#fff6c2" opacity=".4" class="ji-flk"/>',
      sky("ji1", "#86bde8", "#efe6d2"));
  }

  /* 2. Stephenson High, Stone Mountain: Friday night lights, royal blue + black end zone, a spiral pass */
  function jistephenson() {
    const light = x => '<rect x="' + (x - 2) + '" y="22" width="4" height="96" fill="#5b6270"/><rect x="' + (x - 18) + '" y="10" width="36" height="16" rx="2" fill="#2a2f3a"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle class="ji-glow' + (i % 2 ? " ji-g2" : "") + '" cx="' + (x - 13 + i * 5.2) + '" cy="18" r="2.4" fill="#fffbe0"/>').join("") +
      '<path d="M' + (x - 18) + ' 26L' + (x - 70) + ' 190H' + (x + 70) + 'L' + (x + 18) + ' 26z" fill="#fffbe0" opacity=".07"/>';
    const yard = Array.from({ length: 9 }, (_, i) => '<path d="M' + (60 + i * 35) + ' 150l' + (-14 + i * 3.5) + ' 110" stroke="#fff" stroke-width="2" opacity=".8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ji2)"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 37) % 60) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      /* bleachers with crowd dots */
      '<path d="M0 118h400v32H0z" fill="#1b2230"/>' +
      Array.from({ length: 3 }, (_, r) => Array.from({ length: 40 }, (_, i) => '<circle class="' + ((i + r) % 7 ? "" : "ji-glow ji-g3") + '" cx="' + (6 + i * 10 + r * 3) + '" cy="' + (124 + r * 9) + '" r="3" fill="' + ((i + r) % 3 ? ROYAL : "#e8e8e8") + '"/>').join("")).join("") +
      light(40) + light(360) +
      /* scoreboard */
      '<rect x="138" y="30" width="124" height="62" rx="3" fill="#0d0f14" stroke="' + ROYAL + '" stroke-width="3"/><text x="200" y="46" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">STEPHENSON JAGUARS</text>' +
      '<text x="168" y="62" text-anchor="middle" ' + font + ' font-size="9" fill="#bfc8d8">HOME</text><text x="232" y="62" text-anchor="middle" ' + font + ' font-size="9" fill="#bfc8d8">GUEST</text>' +
      '<text class="ji-glow" x="168" y="84" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="20" fill="#ffb02e">21</text><text x="232" y="84" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="20" fill="#ffb02e">14</text>' +
      '<rect x="196" y="70" width="8" height="16" fill="#1d2230"/>' +
      '<rect x="134" y="92" width="6" height="26" fill="#5b6270"/><rect x="260" y="92" width="6" height="26" fill="#5b6270"/>' +
      /* field */
      '<path d="M0 150h400v110H0z" fill="#2f8a3e"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M0 ' + (160 + i * 22) + 'h400" stroke="#2a7d37" stroke-width="10" opacity=".5"/>').join("") + yard +
      /* end zone */
      '<path d="M0 222h400v38H0z" fill="' + ROYAL + '"/><path d="M0 222h400" stroke="#fff" stroke-width="3"/>' +
      '<text x="200" y="250" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" letter-spacing="6" fill="#111" stroke="#fff" stroke-width="1.2" paint-order="stroke">JAGUARS</text>' +
      /* goal post */
      '<path d="M352 214v-34M332 180h40M332 180v-38M372 180v-38" stroke="#ffd23a" stroke-width="4" fill="none"/>' +
      /* spiral pass */
      '<g class="ji-arc"><g class="ji-ball"><ellipse cx="60" cy="176" rx="10" ry="6" fill="#7a3e1c" stroke="#3a1c0a" stroke-width="1.5"/><path d="M55 176h10M57 174v4M60 174v4M63 174v4" stroke="#fff" stroke-width="1"/></g></g>',
      sky("ji2", "#0b1430", "#2c3e6a"));
  }

  /* 3. Hampton University's Emancipation Oak: the huge spreading live oak, moss, the river behind */
  function jihampton() {
    const limb = (d, w) => '<path d="' + d + '" stroke="#4e3a2a" stroke-width="' + w + '" fill="none" stroke-linecap="round"/>';
    const leafs = [[60, 70, 46], [120, 52, 50], [200, 42, 58], [280, 52, 50], [340, 72, 46], [30, 100, 32], [370, 104, 30], [160, 86, 40], [244, 86, 40], [100, 96, 34], [300, 98, 34]]
      .map(c => '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '" fill="#3f6b33"/><circle cx="' + (c[0] - c[2] / 3) + '" cy="' + (c[1] - c[2] / 3) + '" r="' + (c[2] / 1.7) + '" fill="#4f7f3f"/>').join("");
    const moss = [70, 118, 166, 236, 284, 330].map((x, i) => '<path class="ji-moss' + (i % 2 ? " ji-moss2" : "") + '" d="M' + x + ' 100c-3 12 3 22 -1 36c-2 -8 -5 -10 -4 0c-3 -12 -4 -24 1 -36zM' + (x + 6) + ' 102c-2 10 2 16 0 26c-2 -6 -4 -6 -3 0c-2 -10 -2 -18 1 -26z" fill="#9aa786" opacity=".85"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ji3)"/>' +
      /* river */
      '<rect x="0" y="150" width="400" height="34" fill="#4f8fb8"/><g class="ji-wave">' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 46) + ' ' + (160 + (i % 3) * 8) + 'q8 -4 16 0" stroke="#d6ecf7" stroke-width="2" fill="none"/>').join("") + '</g>' +
      '<path d="M0 150h400" stroke="#2d5e80" stroke-width="2"/>' +
      /* lawn */
      '<rect x="0" y="180" width="400" height="80" fill="#6a9a4a"/><path d="M0 180q200 -10 400 0v8H0z" fill="#5b8a3f"/>' +
      /* trunk and wide low limbs */
      limb("M200 214C196 170 190 150 150 128C110 106 60 110 20 128", 16) + limb("M200 214C206 170 214 150 252 128C292 106 342 110 386 128", 16) +
      limb("M200 214C198 160 196 120 200 80", 22) + limb("M196 150C170 120 130 92 100 84", 10) + limb("M204 150C232 120 272 92 304 84", 10) +
      '<path d="M182 214q18 -14 36 0v12h-36z" fill="#4e3a2a"/>' +
      leafs + moss +
      '<g class="ji-bird"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#222" stroke-width="2" fill="none"/></g><g class="ji-bird ji-bird2"><path d="M0 26q5 -5 10 0q5 -5 10 0" stroke="#222" stroke-width="1.8" fill="none"/></g>' +
      /* marker sign */
      '<rect x="292" y="196" width="4" height="34" fill="#3a3a3a"/><rect x="264" y="182" width="96" height="30" rx="3" fill="#1d3f7a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="312" y="195" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">EMANCIPATION</text><text x="312" y="207" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">OAK</text>' +
      '<rect x="40" y="228" width="320" height="10" rx="5" fill="#cbbf9e" opacity=".9"/>',
      sky("ji3", "#9fd0f0", "#f3ecd8"));
  }

  /* 4. Memorial Drive at night, west to the Georgia State Capitol's gold dome */
  function jimemorial() {
    const lamps = [[40, 120, 1], [96, 140, .8], [304, 140, .8], [360, 120, 1]].map((l, i) => '<rect x="' + (l[0] - 2) + '" y="' + l[1] + '" width="4" height="' + (230 - l[1]) + '" fill="#3a3a44"/><circle class="ji-glow' + (i % 2 ? " ji-g2" : "") + '" cx="' + l[0] + '" cy="' + l[1] + '" r="' + (6 * l[2]) + '" fill="#ffe7a8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ji4)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle class="' + (i % 5 ? "" : "ji-glow") + '" cx="' + ((i * 71) % 400) + '" cy="' + (6 + (i * 29) % 70) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      /* Capitol: pale stone body, columned portico, drum, gold dome, statue on top */
      '<rect x="130" y="96" width="140" height="44" fill="#cfc7b6"/><path d="M178 96l22 -14l22 14z" fill="#d9d2c2" stroke="#9a9283" stroke-width="1"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (181 + i * 7.4) + '" y="98" width="3" height="24" fill="#efe9dc"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (136 + i * 17) + '" y="' + (i > 2 && i < 5 ? 124 : 104) + '" width="7" height="9" fill="#ffe7a8" opacity=".8"/>').join("") +
      '<rect x="180" y="62" width="40" height="20" fill="#d9d2c2"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (183 + i * 6.4) + '" y="64" width="2.5" height="16" fill="#efe9dc"/>').join("") +
      '<path d="M178 62q22 -40 44 0z" fill="#e8b93a" stroke="#a37a12" stroke-width="1.5"/><path d="M190 62q10 -32 20 0" fill="none" stroke="#fff3b0" stroke-width="2" opacity=".7"/>' +
      '<rect x="196" y="18" width="8" height="6" fill="#e8b93a"/><circle cx="200" cy="7" r="2" fill="#cdbf9a"/><path d="M200 9v9M198 18l2 -6l2 6z" stroke="#cdbf9a" stroke-width="2" fill="#cdbf9a"/><path d="M201 11l4 -6" stroke="#cdbf9a" stroke-width="1.6"/><circle cx="205" cy="4" r="1.6" fill="#ffd96a" class="ji-glow"/>' +
      '<path class="ji-glow" d="M178 62q22 -40 44 0" fill="none" stroke="#fff6c8" stroke-width="2" opacity=".6"/>' +
      /* trees on the sides */
      '<g fill="#0f2a1e"><circle cx="70" cy="128" r="26"/><circle cx="110" cy="134" r="18"/><circle cx="290" cy="134" r="18"/><circle cx="330" cy="128" r="26"/></g>' +
      /* road in perspective */
      '<path d="M0 260L176 140H224L400 260z" fill="#2b2b30"/><path d="M0 260L176 140H160L0 220z" fill="#3c3a36"/><path d="M400 260L224 140H240L400 220z" fill="#3c3a36"/>' +
      '<path d="M198 144L190 260M202 144L210 260" stroke="#f2c200" stroke-width="2" stroke-dasharray="10 8"/>' +
      lamps +
      /* cars: one heading west (taillights), one coming at you (headlights) */
      '<g class="ji-car"><rect x="128" y="226" width="54" height="22" rx="5" fill="#ff5a36"/><rect x="136" y="216" width="38" height="14" rx="4" fill="#1b1b22"/><rect x="130" y="232" width="9" height="5" fill="#ff2a2a"/><rect x="171" y="232" width="9" height="5" fill="#ff2a2a"/><circle cx="140" cy="248" r="5" fill="#111"/><circle cx="170" cy="248" r="5" fill="#111"/></g>' +
      '<g class="ji-car2"><rect x="232" y="222" width="54" height="22" rx="5" fill="#d8dbe2"/><rect x="240" y="212" width="38" height="14" rx="4" fill="#1b1b22"/><circle cx="240" cy="232" r="4" fill="#fffbe0"/><circle cx="278" cy="232" r="4" fill="#fffbe0"/><circle cx="244" cy="244" r="5" fill="#111"/><circle cx="274" cy="244" r="5" fill="#111"/></g>' +
      '<rect x="20" y="186" width="5" height="40" fill="#2f2f2f"/>' + sign(0, 166, 92, "Memorial Dr SE"),
      sky("ji4", "#0a0f26", "#3a2a52"));
  }

  /* 5. Flat Shoals Ave and Glenwood Ave, East Atlanta Village: green signs, JID tagged, string lights, downtown skyline behind */
  function jicorner() {
    const bulbs = Array.from({ length: 21 }, (_, i) => { const x = 10 + i * 19, y = 104 + Math.sin(i / 20 * Math.PI) * 14; return '<circle class="ji-glow' + (i % 3 === 1 ? " ji-g2" : i % 3 === 2 ? " ji-g3" : "") + '" cx="' + x + '" cy="' + y + '" r="3" fill="#ffd98a"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ji5)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle class="' + (i % 4 ? "" : "ji-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 44) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>').join("") +
      /* skyline */
      '<g fill="#232a44"><rect x="40" y="70" width="28" height="60"/><rect x="74" y="58" width="22" height="72"/><rect x="104" y="80" width="30" height="50"/><rect x="226" y="66" width="26" height="64"/><rect x="258" y="54" width="20" height="76"/><rect x="284" y="78" width="38" height="52"/><rect x="330" y="70" width="24" height="60"/></g>' +
      /* the round glass hotel tower */
      '<rect x="160" y="30" width="34" height="100" rx="6" fill="#2f3f5e"/><rect x="156" y="24" width="42" height="10" rx="4" fill="#3c4f74"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M161 ' + (40 + i * 10) + 'h32" stroke="#8fb0e0" stroke-width="1.5" opacity=".55"/>').join("") +
      '<rect class="ji-glow" x="160" y="27" width="34" height="3" fill="#8fd0ff"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (46 + (i * 31) % 300) + '" y="' + (84 + (i * 13) % 36) + '" width="3" height="4" fill="#ffe7a8" opacity=".7"/>').join("") +
      /* brick wall */
      '<rect x="0" y="130" width="400" height="94" fill="#8a4a34"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#743c2a" stroke-width="1"/>').join("") +
      '<path d="M0 98q200 34 400 0" stroke="#222" stroke-width="1" fill="none"/>' + bulbs +
      tag("ZOINK GANG", 20, 152, 16, GOLD, -3) + tag("JID", 26, 202, 54, RED, -6) + tag("JIDDY", 140, 196, 22, "#fff", -4) + tag("NEVER STORY", 128, 218, 15, "#7fc8ff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="ji-scoot"><rect x="0" y="232" width="70" height="18" rx="5" fill="' + ROYAL + '"/><rect x="12" y="226" width="42" height="10" rx="3" fill="#2a3442"/><circle cx="14" cy="250" r="6" fill="#111"/><circle cx="56" cy="250" r="6" fill="#111"/></g>' +
      '<rect x="356" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(246, 94, 140, "Flat Shoals Ave SE") + sign(262, 120, 120, "Glenwood Ave SE") +
      '<g class="ji-sp"><circle cx="118" cy="168" r="3" fill="' + RED + '" opacity=".7"/></g><g class="ji-sp ji-sp2"><circle cx="124" cy="162" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("ji5", "#141a3a", "#c8603a"));
  }

  window.SCENES = { jistation: jistation, jistephenson: jistephenson, jihampton: jihampton, jimemorial: jimemorial, jicorner: jicorner };
})();
