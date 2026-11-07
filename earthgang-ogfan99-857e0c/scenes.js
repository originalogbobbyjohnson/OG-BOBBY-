/* earthgang scenes (Regions tab: Atlanta; West End, Southwest Atlanta). CSS classes and ids prefixed eg- (the page's own anim-train is kept).
   1 West End on MARTA (Red + Gold lines): open-air platform under the long concrete canopy, a silver MARTA train with its blue band sliding in.
   2 Shrine of the Black Madonna, West End (Olu's family church, where an organ part for Mirrorland was recorded): the organ pipes, red-black-green banners, light through the windows.
   3 The learning-garden mural they gave Jean Childs Young Middle School in Southwest Atlanta: flowers and vegetables, a watering can watering the globe, raised beds, bees.
   4 Fernbank Museum (the "Up" video): the glass Great Hall, the giant long-neck dinosaur skeleton, its neck swaying.
   5 Ralph David Abernathy Blvd and Lee St in West End: green signs, EARTHGANG tagged on the brick, downtown's Bank of America Plaza with its gold spire behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes egflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.eg-flk{animation:egflick 2.4s infinite}.eg-flk2{animation-delay:.8s}' +
    '@keyframes egglow{0%,100%{opacity:.45}50%{opacity:1}}.eg-glow{animation:egglow 2.2s ease-in-out infinite}.eg-g2{animation-delay:-1.1s}' +
    '@keyframes egbeam{0%,100%{opacity:.10}50%{opacity:.28}}.eg-beam{animation:egbeam 4s ease-in-out infinite}.eg-beam2{animation-delay:-2s}' +
    '@keyframes egban{0%,100%{transform:skewX(0)}50%{transform:skewX(5deg)}}.eg-ban{transform-box:fill-box;transform-origin:50% 0%;animation:egban 3s ease-in-out infinite}.eg-ban2{animation-delay:-1.5s}' +
    '@keyframes egdrop{0%{transform:translateY(0);opacity:1}100%{transform:translateY(40px);opacity:0}}.eg-dr{animation:egdrop 1.1s linear infinite}.eg-dr2{animation-delay:.35s}.eg-dr3{animation-delay:.7s}' +
    '@keyframes egbee{0%{transform:translate(0,0)}25%{transform:translate(16px,-8px)}50%{transform:translate(30px,4px)}75%{transform:translate(12px,10px)}100%{transform:translate(0,0)}}.eg-bee{animation:egbee 3.2s ease-in-out infinite}.eg-bee2{animation-delay:-1.6s}' +
    '@keyframes egsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.eg-neck{transform-box:fill-box;transform-origin:100% 100%;animation:egsway 4s ease-in-out infinite}' +
    '@keyframes egspin{to{transform:rotate(360deg)}}.eg-globe{transform-box:fill-box;transform-origin:50% 50%;animation:egspin 14s linear infinite}' +
    '@keyframes egsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.eg-sp{animation:egsp 1.4s ease-out infinite}.eg-sp2{animation-delay:.45s}' +
    '@keyframes egcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.eg-car{animation:egcar 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 10) + '" width="30" height="20" rx="4" fill="' + color + '"/><text x="' + (x + 15) + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GREEN = "#7ed957", GOLD = "#f2c14e", ORANGE = "#e86a33", RED = "#e8202e", MGOLD = "#d4a017", BLUE = "#0072bc";

  /* 1. West End station: open-air platform, long concrete canopy on columns, black station sign with the RD + GD bullets, silver MARTA train with a blue band */
  function egstation() {
    const tr = '<g class="anim-train"><rect x="20" y="112" width="340" height="74" rx="8" fill="#c9ced4" stroke="#6b7178" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 46) + '" y="124" width="32" height="26" rx="3" fill="#1d262e"/>').join("") +
      '<rect x="20" y="156" width="340" height="9" fill="' + BLUE + '"/><rect x="20" y="167" width="340" height="3" fill="' + ORANGE + '"/>' +
      '<path d="M120 124v58M246 124v58" stroke="#9aa1a8" stroke-width="2"/>' +
      '<rect x="340" y="116" width="20" height="68" rx="4" fill="#a3a9b0"/><circle cx="352" cy="176" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#eg1)"/>' +
      '<g fill="#9fb3c6" opacity=".7"><rect x="20" y="70" width="40" height="40"/><rect x="70" y="80" width="30" height="30"/><rect x="300" y="64" width="34" height="46"/><rect x="344" y="78" width="40" height="32"/></g>' +
      '<g fill="#2f6b3a"><circle cx="110" cy="96" r="16"/><circle cx="132" cy="100" r="13"/><circle cx="270" cy="98" r="15"/></g>' +
      /* canopy */
      '<rect x="0" y="22" width="400" height="18" fill="#bdb6aa"/><rect x="0" y="38" width="400" height="5" fill="#8e877b"/>' +
      [40, 160, 280].map((x, i) => '<rect class="eg-flk' + (i === 1 ? " eg-flk2" : "") + '" x="' + x + '" y="43" width="70" height="4" rx="2" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="108" width="400" height="80" fill="#3a3a3c" opacity=".35"/>' + tr +
      '<rect x="0" y="188" width="400" height="7" fill="#f2c200"/><rect x="0" y="195" width="400" height="65" fill="#a9a49a"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 195v65" stroke="#97928a" stroke-width="1"/>').join("") +
      [26, 374].map(x => '<rect x="' + (x - 7) + '" y="43" width="14" height="145" fill="#a39c8f"/>').join("") +
      '<rect x="78" y="54" width="244" height="40" rx="3" fill="#111"/><text x="92" y="80" ' + font + ' font-size="19" fill="#fff">West End</text>' +
      bullet(234, 74, "RD", RED) + bullet(272, 74, "GD", MGOLD) +
      '<rect x="150" y="212" width="100" height="6" rx="3" fill="#fff6c2" opacity=".4" class="eg-flk"/>',
      sky("eg1", "#7fb6e6", "#e9e2cf"));
  }

  /* 2. Shrine of the Black Madonna, West End: the organ, pipes, red/black/green banners, sun beams */
  function egshrine() {
    const pipes = Array.from({ length: 15 }, (_, i) => { const h = 40 + Math.abs(7 - i) * -4 + 34; const x = 132 + i * 9.5; return '<rect x="' + x + '" y="' + (112 - h) + '" width="7" height="' + h + '" rx="3" fill="#d9b25a" stroke="#8a6a2a" stroke-width="1"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="#3a2a22"/>' +
      '<rect x="0" y="0" width="400" height="190" fill="#6b4a36"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 0v190" stroke="#5a3e2e" stroke-width="2"/>').join("") +
      /* tall windows with beams */
      [30, 330].map(x => '<path d="M' + x + ' 120v-80q20 -26 40 0v80z" fill="#f6dd9a"/><path d="M' + (x + 20) + ' 40v80M' + x + ' 80h40" stroke="#6b4a36" stroke-width="3"/>').join("") +
      '<path class="eg-beam" d="M70 50L180 250H120L30 120z" fill="#fff2c0"/><path class="eg-beam eg-beam2" d="M330 50L220 250H280L370 120z" fill="#fff2c0"/>' +
      /* banners red black green */
      [["#c8102e", 92], ["#111", 102], ["#138a36", 112]].map((b, i) => '<rect class="eg-ban' + (i % 2 ? " eg-ban2" : "") + '" x="' + b[1] + '" y="20" width="9" height="62" fill="' + b[0] + '"/>').join("") +
      [["#c8102e", 290], ["#111", 300], ["#138a36", 310]].map((b, i) => '<rect class="eg-ban' + (i % 2 ? "" : " eg-ban2") + '" x="' + b[1] + '" y="20" width="9" height="62" fill="' + b[0] + '"/>').join("") +
      /* organ */
      '<rect x="122" y="104" width="156" height="14" fill="#5a3a22"/>' + pipes +
      '<rect x="140" y="118" width="120" height="58" rx="4" fill="#4a2e1a" stroke="#2a180c" stroke-width="2"/>' +
      [128, 140, 152].map((y, k) => '<rect x="' + (150 + k * 4) + '" y="' + y + '" width="' + (100 - k * 8) + '" height="9" fill="#f2ead8"/>' + Array.from({ length: 12 - k }, (_, i) => '<rect x="' + (155 + k * 4 + i * 8) + '" y="' + y + '" width="4" height="5" fill="#111"/>').join("")).join("") +
      '<g class="eg-glow"><circle cx="164" cy="98" r="2" fill="#fff"/><circle cx="234" cy="90" r="2" fill="#fff"/></g>' +
      /* pews */
      '<rect x="0" y="190" width="400" height="70" fill="#2a1c14"/>' + [200, 222, 244].map(y => '<rect x="20" y="' + y + '" width="150" height="12" rx="2" fill="#7a4a2a"/><rect x="230" y="' + y + '" width="150" height="12" rx="2" fill="#7a4a2a"/>').join("") +
      '<path d="M200 160v30M188 172h24" stroke="' + GOLD + '" stroke-width="4"/>' +
      '<text x="200" y="14" text-anchor="middle" ' + font + ' font-size="9" fill="#f6dd9a" letter-spacing="3">WEST END</text>',
      "");
  }

  /* 3. The learning-garden mural at Young Middle School: flowers, vegetables, a watering can pouring on the globe, raised beds, bees */
  function eggarden() {
    const flower = (x, y, c) => '<path d="M' + x + ' ' + (y + 8) + 'v30" stroke="#2f7a2a" stroke-width="3"/>' + [0, 72, 144, 216, 288].map(a => '<circle cx="' + (x + 8 * Math.cos(a * Math.PI / 180)).toFixed(1) + '" cy="' + (y + 8 * Math.sin(a * Math.PI / 180)).toFixed(1) + '" r="6" fill="' + c + '"/>').join("") + '<circle cx="' + x + '" cy="' + y + '" r="4.5" fill="#f9d64a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#eg3)"/>' +
      /* mural wall */
      '<rect x="10" y="20" width="380" height="150" rx="4" fill="#f2e6c8"/><rect x="10" y="20" width="380" height="150" rx="4" fill="none" stroke="#b9a782" stroke-width="3"/>' +
      '<path d="M10 150q90 -30 190 0t190 -6v26H10z" fill="#9fd46a"/>' +
      flower(40, 110, "#e8456b") + flower(74, 98, "#f28c28") + flower(330, 104, "#9b5de5") + flower(362, 116, "#e8456b") +
      /* carrot, tomato, eggplant */
      '<path d="M108 130l14 -40l10 4z" fill="#f28c28"/><path d="M124 90l-2 -12M128 92l6 -10M126 90l0 -14" stroke="#2f7a2a" stroke-width="3"/>' +
      '<circle cx="290" cy="128" r="13" fill="#e23b2e"/><path d="M284 116l6 4l6 -4l-6 -3z" fill="#2f7a2a"/>' +
      '<ellipse cx="262" cy="94" rx="9" ry="18" fill="#6a2d8a" transform="rotate(20 262 94)"/><path d="M266 76l4 -6" stroke="#2f7a2a" stroke-width="4"/>' +
      /* globe */
      '<circle cx="200" cy="104" r="40" fill="#2f86c8"/><g class="eg-globe"><path d="M176 88q10 -12 22 -6q6 10 -4 16q-12 4 -18 -10zM204 112q12 -6 20 4q2 14 -10 18q-12 -4 -10 -22zM210 72q8 2 12 8l-10 2z" fill="#5cb85c"/></g>' +
      '<circle cx="200" cy="104" r="40" fill="none" stroke="#1d5f91" stroke-width="3"/>' +
      /* watering can */
      '<g transform="rotate(-18 268 46)"><rect x="244" y="34" width="42" height="28" rx="6" fill="' + GREEN + '" stroke="#2f6b2a" stroke-width="2"/><path d="M244 44l-30 10l2 6l28 -6" fill="' + GREEN + '" stroke="#2f6b2a" stroke-width="2"/><path d="M286 38q14 4 4 22" stroke="#2f6b2a" stroke-width="4" fill="none"/></g>' +
      '<g fill="#7cc8f0"><circle class="eg-dr" cx="216" cy="66" r="2.4"/><circle class="eg-dr eg-dr2" cx="210" cy="64" r="2.4"/><circle class="eg-dr eg-dr3" cx="222" cy="62" r="2.4"/></g>' +
      /* raised beds */
      '<rect x="0" y="170" width="400" height="90" fill="#8a6a44"/>' +
      [[24, 120], [160, 90], [266, 112]].map(b => '<rect x="' + b[0] + '" y="190" width="' + b[1] + '" height="34" fill="#b07a44" stroke="#6a4626" stroke-width="2"/><rect x="' + (b[0] + 4) + '" y="190" width="' + (b[1] - 8) + '" height="8" fill="#4a3220"/>' +
        Array.from({ length: Math.floor(b[1] / 22) }, (_, i) => '<path d="M' + (b[0] + 14 + i * 22) + ' 190q-6 -14 0 -20q6 6 0 20zM' + (b[0] + 14 + i * 22) + ' 190q8 -10 12 -10q-2 8 -12 10z" fill="#3f9b3a"/>').join("")).join("") +
      '<g class="eg-bee"><ellipse cx="140" cy="60" rx="5" ry="3.5" fill="#f9d64a"/><path d="M138 57v6M141 57v6" stroke="#111" stroke-width="1.2"/><ellipse cx="139" cy="56" rx="3" ry="2" fill="#fff" opacity=".8"/></g>' +
      '<g class="eg-bee eg-bee2"><ellipse cx="320" cy="70" rx="5" ry="3.5" fill="#f9d64a"/><path d="M318 67v6M321 67v6" stroke="#111" stroke-width="1.2"/><ellipse cx="319" cy="66" rx="3" ry="2" fill="#fff" opacity=".8"/></g>',
      sky("eg3", "#8fd0f2", "#e6f4d8"));
  }

  /* 4. Fernbank Museum's Great Hall: glass atrium, the giant long-neck dinosaur skeleton, neck swaying */
  function egfernbank() {
    const bone = "#efe6d2", dk = "#a89c84";
    const ribs = Array.from({ length: 9 }, (_, i) => '<path d="M' + (150 + i * 12) + ' 132q-2 26 6 40" stroke="' + bone + '" stroke-width="4" fill="none"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#eg4)"/>' +
      /* glass atrium grid */
      Array.from({ length: 11 }, (_, i) => '<path d="M' + (i * 40) + ' 0v190" stroke="#cfe2ee" stroke-width="2" opacity=".7"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<path d="M0 ' + (i * 40) + 'h400" stroke="#cfe2ee" stroke-width="2" opacity=".7"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#d9c9a8"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 190l-30 70" stroke="#c4b28e" stroke-width="2"/>').join("") +
      /* skeleton: legs, body, ribs, tail, neck */
      '<path d="M160 130l-10 66M176 134l6 62M244 134l-6 62M262 130l10 66" stroke="' + bone + '" stroke-width="9" stroke-linecap="round"/>' +
      '<path d="M140 132q70 -26 140 0" stroke="' + bone + '" stroke-width="10" fill="none" stroke-linecap="round"/>' + ribs +
      '<path d="M280 132q60 10 110 50" stroke="' + bone + '" stroke-width="6" fill="none" stroke-linecap="round" stroke-dasharray="7 3"/>' +
      '<g class="eg-neck"><path d="M144 132q-40 -40 -60 -104" stroke="' + bone + '" stroke-width="8" fill="none" stroke-linecap="round" stroke-dasharray="9 3"/>' +
      '<ellipse cx="82" cy="24" rx="16" ry="8" fill="' + bone + '" stroke="' + dk + '" stroke-width="1.5"/><circle cx="76" cy="22" r="2.5" fill="#3a3a3a"/></g>' +
      '<rect x="120" y="198" width="170" height="10" rx="2" fill="#8a7a5a"/>' +
      /* visitors silhouettes */
      [40, 330, 352].map((x, i) => '<g opacity=".85"><circle cx="' + x + '" cy="208" r="6" fill="#33302a"/><rect x="' + (x - 6) + '" y="214" width="12" height="26" rx="4" fill="#33302a"/></g>').join("") +
      '<rect x="20" y="226" width="60" height="18" rx="2" fill="#2a3a2a"/><text x="50" y="239" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">GREAT HALL</text>',
      sky("eg4", "#a8d8f2", "#f2f4f0"));
  }

  /* 5. Ralph David Abernathy Blvd and Lee St, West End: green signs, EARTHGANG tagged, downtown skyline with Bank of America Plaza's gold spire */
  function egcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#eg5)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle class="' + (i % 4 ? "" : "eg-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 50) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>').join("") +
      /* skyline */
      '<g fill="#232a44"><rect x="60" y="80" width="30" height="60"/><rect x="96" y="66" width="24" height="74"/><rect x="250" y="70" width="30" height="70"/><rect x="286" y="88" width="40" height="52"/><rect x="330" y="76" width="22" height="64"/><rect x="128" y="92" width="28" height="48"/></g>' +
      /* Bank of America Plaza: dark tower, open gold-leaf pyramid lattice and spire */
      '<rect x="180" y="44" width="40" height="96" fill="#3a2e3a"/><path d="M180 44l20 -22l20 22z" fill="none" stroke="' + GOLD + '" stroke-width="2.5"/>' +
      '<path d="M186 44l14 -16l14 16M192 44l8 -10l8 10" fill="none" stroke="' + GOLD + '" stroke-width="1.5"/><path class="eg-glow" d="M200 22v-18" stroke="' + GOLD + '" stroke-width="2.5"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="186" y="' + (52 + i * 10) + '" width="28" height="3" fill="#f6d27a" opacity=".55"/>').join("") +
      /* brick wall */
      '<rect x="0" y="132" width="400" height="92" fill="#8a4a34"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#743c2a" stroke-width="1"/>').join("") +
      tag("SPILLAGE", 22, 154, 18, GOLD, -3) + tag("EARTHGANG", 18, 196, 44, GREEN, -6) + tag("VENUS", 40, 218, 16, "#fff", -3) + tag("+ DOT", 130, 216, 18, ORANGE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55524c"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="eg-car"><rect x="0" y="232" width="70" height="18" rx="5" fill="' + ORANGE + '"/><rect x="12" y="226" width="42" height="10" rx="3" fill="#2a3442"/><circle cx="14" cy="250" r="6" fill="#111"/><circle cx="56" cy="250" r="6" fill="#111"/></g>' +
      '<rect x="356" y="94" width="6" height="130" fill="#2f2f2f"/>' + sign(270, 96, 128, "R D Abernathy Blvd") + sign(300, 122, 78, "Lee St SW") +
      '<g class="eg-sp"><circle cx="196" cy="160" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="eg-sp eg-sp2"><circle cx="202" cy="154" r="2" fill="' + GREEN + '" opacity=".6"/></g>',
      sky("eg5", "#141a3a", "#d0703e"));
  }

  window.SCENES = { egstation: egstation, egshrine: egshrine, eggarden: eggarden, egfernbank: egfernbank, egcorner: egcorner };
})();
