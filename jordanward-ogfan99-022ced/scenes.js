/* Jordan Ward scenes (Regions tab: St. Louis + Ohio). Born and raised in St. Louis — "raised in south St. Louis" (St. Louis Public Radio, May 2023), grew up in the church
   with his mom singing gospel, danced through his teens, then moved to LA to dance before FORWARD (Interscope). He came home to play Blueberry Hill's Duck Room in the Delmar Loop;
   BUSSDOWN is his St. Louis song ("racing down the 64", the mall, the food court). CSS classes prefixed jw- (the page's own anim-train is kept).
   0 MetroLink Shrewsbury–Lansdowne I-44: the Blue Line's last stop at the south city edge, a train sliding in, black sign with the blue bullet.
   1 The Duck Room under Blueberry Hill: a basement stage, string lights, mic stand, crowd hands up.
   2 FAMJAM4000: a south city red-brick two-family flat, porch light on, the family jam on the stoop, speaker thumping.
   3 BUSSDOWN: Highway 64 at dusk, cars racing west under the green guide sign toward the mall.
   4 Cherokee St and S Jefferson Ave: green signs, JORDAN WARD tagged on a brick wall, the Gateway Arch shining behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jwglow{0%,100%{opacity:.5}50%{opacity:1}}.jw-glow{animation:jwglow 2.4s ease-in-out infinite}.jw-g2{animation-delay:-1.2s}' +
    '@keyframes jwbulb{0%,100%{opacity:.3}50%{opacity:1}}.jw-bulb{animation:jwbulb .9s ease-in-out infinite}.jw-b2{animation-delay:-.3s}.jw-b3{animation-delay:-.6s}' +
    '@keyframes jwhand{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.jw-hand{animation:jwhand .8s ease-in-out infinite}.jw-h2{animation-delay:-.4s}' +
    '@keyframes jwthump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.jw-thump{transform-box:fill-box;transform-origin:50% 50%;animation:jwthump .5s ease-in-out infinite}' +
    '@keyframes jwcar{0%{transform:translateX(-90px)}100%{transform:translateX(490px)}}.jw-car{animation:jwcar 3.2s linear infinite}.jw-car2{animation-delay:-1.6s}.jw-car3{animation-duration:4.4s;animation-delay:-.8s}' +
    '@keyframes jwnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.jw-note{animation:jwnote 3s ease-out infinite}.jw-n2{animation-delay:-1.5s}' +
    '@keyframes jwshine{0%,100%{opacity:.25}50%{opacity:.85}}.jw-shine{animation:jwshine 3s ease-in-out infinite}' +
    '@keyframes jwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jw-sp{animation:jwspray 1.4s ease-out infinite}.jw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10.5" fill="#fff">' + txt + '</text>';
  const YEL = "#f5d547", BLU = "#3fa7d6", RED = "#e4572e", MLBLUE = "#1f4e79", BRICK = "#9c4a32";
  const bricks = (x, y, w, h, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' + Array.from({ length: Math.floor(h / 8) }, (_, i) => '<path d="M' + x + ' ' + (y + 8 + i * 8) + 'h' + w + '" stroke="#000" stroke-opacity=".18" stroke-width="1"/>').join("");

  /* 0. MetroLink Shrewsbury–Lansdowne I-44 */
  function jwstop() {
    const train = '<g class="anim-train"><rect x="18" y="130" width="272" height="68" rx="10" fill="#eef0f2" stroke="#7a828a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (38 + i * 42) + '" y="140" width="32" height="26" rx="3" fill="#2a3440"/>').join("") +
      '<path d="M18 176h272" stroke="' + MLBLUE + '" stroke-width="7"/><path d="M18 186h272" stroke="#d9262e" stroke-width="3"/>' +
      '<circle cx="280" cy="190" r="3.5" fill="#fff6c2"/><path d="M150 130l-14 -22h28z" stroke="#333" stroke-width="2" fill="none"/><path d="M60 108h200" stroke="#444" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jw0)"/>' +
      '<path d="M0 106q50 -20 100 -6t100 -10t100 4t100 -8v30h-400z" fill="#5f8a4a"/>' +
      '<rect x="0" y="80" width="400" height="14" fill="#a9a395"/><rect x="0" y="94" width="400" height="6" fill="#857f72"/>' +
      '<g class="jw-car"><rect x="0" y="70" width="34" height="11" rx="4" fill="' + RED + '"/></g><g class="jw-car jw-car2"><rect x="0" y="70" width="30" height="11" rx="4" fill="#f4f4f4"/></g>' +
      '<rect x="300" y="104" width="94" height="10" fill="' + MLBLUE + '"/><rect x="308" y="114" width="4" height="84" fill="#555"/><rect x="384" y="114" width="4" height="84" fill="#555"/>' +
      '<rect x="0" y="198" width="400" height="62" fill="#8e8a82"/><rect x="0" y="198" width="400" height="6" fill="#e8d84a"/><path d="M0 222h400M0 240h400" stroke="#55514a" stroke-width="3"/>' +
      train +
      '<rect x="14" y="12" width="300" height="38" rx="3" fill="#111"/>' +
      '<rect x="22" y="19" width="40" height="24" rx="4" fill="' + MLBLUE + '"/><text x="42" y="35" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BLUE</text>' +
      '<text x="70" y="30" ' + font + ' font-size="12.5" fill="#fff">Shrewsbury–Lansdowne</text><text x="70" y="44" ' + font + ' font-size="10" fill="#ffd23f">I-44 · END OF LINE</text>' +
      '<text x="302" y="98" ' + font + ' font-size="8.5" fill="#222">I-44</text>',
      sky("jw0", "#7ab4e4", "#f0dcb8"));
  }

  /* 1. The Duck Room under Blueberry Hill */
  function jwduck() {
    const bulbs = Array.from({ length: 18 }, (_, i) => '<circle class="jw-bulb' + (i % 3 === 1 ? " jw-b2" : i % 3 === 2 ? " jw-b3" : "") + '" cx="' + (14 + i * 22) + '" cy="' + (30 + Math.sin(i * 0.9) * 6) + '" r="3" fill="#fff2b0"/>').join("");
    const hands = Array.from({ length: 12 }, (_, i) => '<g class="jw-hand' + (i % 2 ? " jw-h2" : "") + '"><rect x="' + (14 + i * 32) + '" y="204" width="7" height="26" rx="3" fill="#4a3a5e"/><circle cx="' + (17.5 + i * 32) + '" cy="202" r="5" fill="#4a3a5e"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1d1426"/>' + bricks(0, 0, 400, 150, "#3a2230") +
      '<path d="M0 30q100 14 200 0t200 0" stroke="#333" stroke-width="1.5" fill="none"/>' + bulbs +
      '<rect x="110" y="56" width="180" height="26" rx="13" fill="#141019" stroke="' + YEL + '" stroke-width="2"/><text class="jw-glow" x="200" y="74" text-anchor="middle" ' + font + ' font-size="13" fill="' + YEL + '">THE DUCK ROOM</text>' +
      '<path class="jw-glow jw-g2" d="M200 92l-90 110h180z" fill="#f6e6a8" opacity=".15"/>' +
      '<rect x="60" y="150" width="280" height="30" fill="#2a1a12"/><rect x="60" y="150" width="280" height="5" fill="#5a3a22"/>' +
      '<rect x="198" y="110" width="4" height="40" fill="#bbb"/><ellipse cx="200" cy="108" rx="4" ry="6" fill="#444"/><path d="M188 150l12 -8l12 8" stroke="#bbb" stroke-width="2" fill="none"/>' +
      '<rect x="80" y="122" width="26" height="28" rx="2" fill="#141414"/><circle class="jw-thump" cx="93" cy="136" r="8" fill="#333" stroke="#555"/>' +
      '<rect x="294" y="122" width="26" height="28" rx="2" fill="#141414"/><circle class="jw-thump" cx="307" cy="136" r="8" fill="#333" stroke="#555"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#140e1a"/>' + hands);
  }

  /* 2. FAMJAM4000: the family flat in south city */
  function jwfam() {
    const win = (x, y) => '<path d="M' + x + ' ' + (y + 40) + 'v-30a14 14 0 0 1 28 0v30z" fill="#2a2a38" stroke="#e8dcc4" stroke-width="3"/><path class="jw-glow" d="M' + (x + 3) + ' ' + (y + 37) + 'v-27a11 11 0 0 1 22 0v27z" fill="#f6d68a" opacity=".6"/>';
    const fam = (x, h, c, k) => '<g class="jw-hand ' + k + '"><circle cx="' + x + '" cy="' + (196 - h) + '" r="7" fill="' + c + '"/><rect x="' + (x - 6) + '" y="' + (203 - h) + '" width="12" height="' + h + '" rx="5" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jw2)"/>' +
      bricks(80, 30, 240, 170, BRICK) + '<rect x="74" y="24" width="252" height="12" fill="#5a2a1e"/><rect x="74" y="36" width="252" height="4" fill="#e8dcc4"/>' +
      win(104, 54) + win(152, 54) + win(220, 54) + win(268, 54) + win(104, 112) + win(268, 112) +
      '<rect x="168" y="112" width="64" height="88" fill="#3a2a22"/><rect x="176" y="120" width="22" height="80" fill="#6a3a22"/><rect x="202" y="120" width="22" height="80" fill="#6a3a22"/>' +
      '<rect x="160" y="104" width="80" height="8" fill="#e8dcc4"/><circle class="jw-glow" cx="200" cy="100" r="5" fill="#fff2b0"/>' +
      '<rect x="140" y="200" width="120" height="8" fill="#b8b0a0"/><rect x="132" y="208" width="136" height="8" fill="#a8a090"/><rect x="124" y="216" width="152" height="8" fill="#988f80"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#6a6a6a"/><rect x="0" y="200" width="80" height="24" fill="#7fae5a"/><rect x="320" y="200" width="80" height="24" fill="#7fae5a"/>' +
      fam(40, 30, "#2a1a14", "") + fam(60, 22, "#3a2418", "jw-h2") + fam(344, 34, "#2a1a14", "jw-h2") + fam(364, 18, "#3a2418", "") +
      '<rect x="292" y="176" width="22" height="26" rx="3" fill="#141414"/><circle class="jw-thump" cx="303" cy="189" r="7" fill="#333" stroke="' + YEL + '"/>' +
      '<g class="jw-note"><text x="300" y="168" ' + font + ' font-size="16" fill="' + YEL + '">♪</text></g><g class="jw-note jw-n2"><text x="316" y="160" ' + font + ' font-size="14" fill="' + BLU + '">♫</text></g>' +
      '<rect x="120" y="4" width="160" height="18" rx="3" fill="#141019"/><text x="200" y="17" text-anchor="middle" ' + font + ' font-size="11" fill="' + YEL + '">FAMJAM4000</text>',
      sky("jw2", "#f2a65a", "#f6d8a8"));
  }

  /* 3. BUSSDOWN: racing down the 64 */
  function jwhwy() {
    const car = (y, c, k) => '<g class="jw-car ' + k + '"><rect x="0" y="' + y + '" width="46" height="14" rx="5" fill="' + c + '"/><rect x="10" y="' + (y - 7) + '" width="24" height="9" rx="3" fill="' + c + '"/><circle cx="10" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="36" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="46" cy="' + (y + 6) + '" r="2.5" fill="#fff2b0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jw3)"/>' +
      '<circle cx="320" cy="104" r="22" fill="#ffcf70" opacity=".9"/>' +
      '<path d="M0 140h40v-30h20v30h30v-50h24v50h20v-24h30v24h400v20h-400z" fill="#2c2a40" opacity=".7"/>' +
      '<rect x="40" y="20" width="10" height="120" fill="#555"/><rect x="350" y="20" width="10" height="120" fill="#555"/><rect x="40" y="20" width="320" height="10" fill="#666"/>' +
      '<rect x="70" y="34" width="150" height="62" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="145" y="58" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">64 WEST</text><text x="145" y="80" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Clayton · Mall exits</text>' +
      '<rect x="230" y="34" width="110" height="62" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="285" y="58" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">Hampton Av</text><text x="285" y="80" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">EXIT ONLY</text>' +
      '<rect x="0" y="160" width="400" height="100" fill="#3e3e46"/><path d="M0 194h400M0 228h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/><rect x="0" y="160" width="400" height="4" fill="#f2d24a"/>' +
      car(178, RED, "") + car(212, BLU, "jw-car2") + car(240, YEL, "jw-car3"),
      sky("jw3", "#2c3a78", "#f29a5a"));
  }

  /* 4. Cherokee St and S Jefferson Ave, the Arch behind */
  function jwcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jw4)"/>' +
      '<path class="jw-shine" d="M120 140c10 -170 150 -170 160 0" stroke="#fff" stroke-width="3" fill="none"/>' +
      '<path d="M116 140c10 -176 158 -176 168 0h-10c-8 -158 -140 -158 -148 0z" fill="#c9ced6"/>' +
      '<path d="M0 140h30v-26h22v26h18v-40h26v40h210v-34h24v34h22v-20h24v20h24v10h-400z" fill="#2a2a44"/>' +
      bricks(0, 130, 300, 98, BRICK) +
      tag("JORDAN WARD", 14, 186, 31, YEL, -4) + tag("FAMJAM", 30, 216, 20, BLU, -3) + tag("FORWARD", 150, 216, 18, "#fff", -5) +
      '<g class="jw-sp"><circle cx="246" cy="174" r="3" fill="' + YEL + '" opacity=".7"/></g><g class="jw-sp jw-sp2"><circle cx="252" cy="168" r="2" fill="' + YEL + '" opacity=".6"/></g>' +
      '<rect x="300" y="196" width="100" height="32" fill="#b8b2a6"/>' +
      '<rect x="0" y="228" width="400" height="32" fill="#56544f"/><rect x="0" y="226" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="380" y="118" width="6" height="110" fill="#2f2f2f"/>' + sign(300, 122, 96, "Cherokee St") + sign(300, 148, 96, "S Jefferson Ave"),
      sky("jw4", "#1a2450", "#e48a5a"));
  }

  window.SCENES = { jwstop: jwstop, jwduck: jwduck, jwfam: jwfam, jwhwy: jwhwy, jwcorner: jwcorner };
})();
