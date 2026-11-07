/* blackmilk scenes (Regions tab: Detroit; west side). CSS classes and ids prefixed bm- (the page's own anim-train is kept).
   1 The QLine streetcar pulling into the Canfield stop on Woodward in Midtown (down the street from the Cass Corridor record press he recorded live at).
   2 A west side brick church on Sunday morning ("Sunday's Best"): bell swinging, stained glass glowing, church fans waving.
   3 Hart Plaza on the riverfront ("Tronic Summer"): the steel ring of the Dodge Fountain spraying, the Detroit River and a summer crowd.
   4 The Fox Theatre on Woodward: the tall blade sign, the gold facade, the marquee lights chasing for the band show.
   5 Schaefer Hwy and Puritan Ave on the west side ("Perfected on Puritan Avenue"): green signs, BLACK MILK tagged on the brick, the Guardian Building downtown. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.bm-flk{animation:bmflick 2.4s infinite}.bm-flk2{animation-delay:.8s}' +
    '@keyframes bmcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.bm-car{animation:bmcar 7s linear infinite}.bm-car2{animation-delay:-3.5s}' +
    '@keyframes bmswing{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.bm-bell{transform-box:fill-box;transform-origin:50% 0%;animation:bmswing 1.4s ease-in-out infinite}' +
    '@keyframes bmfan{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}.bm-fan{transform-box:fill-box;transform-origin:50% 100%;animation:bmfan .8s ease-in-out infinite}.bm-fan2{animation-delay:-.4s}.bm-fan3{animation-delay:-.2s}' +
    '@keyframes bmglow{0%,100%{opacity:.55}50%{opacity:1}}.bm-glow{animation:bmglow 2.4s ease-in-out infinite}.bm-g2{animation-delay:-1.2s}' +
    '@keyframes bmjet{0%{transform:translateY(0) scale(1);opacity:.95}100%{transform:translateY(-58px) scale(1.6);opacity:0}}.bm-jet{transform-box:fill-box;transform-origin:50% 100%;animation:bmjet 1.3s ease-out infinite}.bm-jet2{animation-delay:-.45s}.bm-jet3{animation-delay:-.9s}' +
    '@keyframes bmbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.bm-bo{animation:bmbounce .7s ease-in-out infinite}.bm-bo2{animation-delay:-.23s}.bm-bo3{animation-delay:-.46s}' +
    '@keyframes bmbulb{0%,100%{opacity:.25}50%{opacity:1}}.bm-bu{animation:bmbulb .9s steps(2) infinite}.bm-bu2{animation-delay:-.45s}' +
    '@keyframes bmboat{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.bm-boat{animation:bmboat 20s linear infinite}' +
    '@keyframes bmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bm-sp{animation:bmspray 1.4s ease-out infinite}.bm-sp2{animation-delay:.45s}' +
    '@keyframes bmcloud{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.bm-cl{animation:bmcloud 28s linear infinite}.bm-cl2{animation-delay:-14s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, txt, color) => '<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="' + color + '" stroke="#fff" stroke-width="1.2"/><text x="' + cx + '" y="' + (cy + 5) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const cloud = (cls, x, y, s) => '<g class="' + cls + '" opacity=".85"><ellipse cx="' + x + '" cy="' + y + '" rx="' + (24 * s) + '" ry="' + (8 * s) + '" fill="#fff"/><ellipse cx="' + (x + 12 * s) + '" cy="' + (y - 6 * s) + '" rx="' + (13 * s) + '" ry="' + (8 * s) + '" fill="#fff"/></g>';
  const CREAM = "#f4f1e8", RED = "#d8392b", TEAL = "#4fd1c5", GOLD = "#e7b94c", NAVY = "#1f4e79";

  /* Guardian Building: orange brick Art Deco tower, two crowned tops, tan base */
  const guardian = (x, base, s) => {
    let g = '<g>';
    g += '<rect x="' + (x - 30 * s) + '" y="' + (base - 70 * s) + '" width="' + (60 * s) + '" height="' + (70 * s) + '" fill="#c96a35"/>';
    g += '<rect x="' + (x - 18 * s) + '" y="' + (base - 120 * s) + '" width="' + (36 * s) + '" height="' + (50 * s) + '" fill="#d1743c"/>';
    g += '<rect x="' + (x - 12 * s) + '" y="' + (base - 150 * s) + '" width="' + (16 * s) + '" height="' + (30 * s) + '" fill="#d97f45"/>';
    g += '<path d="M' + (x - 12 * s) + ' ' + (base - 150 * s) + 'l' + (8 * s) + ' ' + (-12 * s) + 'l' + (8 * s) + ' ' + (12 * s) + 'z" fill="#e39a5e"/>';
    g += '<rect x="' + (x + 6 * s) + '" y="' + (base - 134 * s) + '" width="' + (10 * s) + '" height="' + (14 * s) + '" fill="#d97f45"/>';
    g += '<path d="M' + (x + 6 * s) + ' ' + (base - 134 * s) + 'l' + (5 * s) + ' ' + (-8 * s) + 'l' + (5 * s) + ' ' + (8 * s) + 'z" fill="#e39a5e"/>';
    for (let i = 0; i < 6; i++) g += '<rect x="' + (x - 14 * s + i * 5.6 * s) + '" y="' + (base - 116 * s) + '" width="' + (2 * s) + '" height="' + (44 * s) + '" fill="#8e4520" opacity=".6"/>';
    for (let i = 0; i < 9; i++) g += '<rect x="' + (x - 27 * s + i * 6.4 * s) + '" y="' + (base - 66 * s) + '" width="' + (2.4 * s) + '" height="' + (60 * s) + '" fill="#8e4520" opacity=".55"/>';
    g += '<rect x="' + (x - 30 * s) + '" y="' + (base - 14 * s) + '" width="' + (60 * s) + '" height="' + (14 * s) + '" fill="#d9c7a3"/>';
    return g + '</g>';
  };

  /* 1. QLine streetcar pulling into the Canfield stop on Woodward, Midtown brick behind */
  function bmqline() {
    let wins = "";
    for (let x = 34; x < 290; x += 34) wins += '<rect x="' + x + '" y="136" width="24" height="24" rx="3" fill="#cfe6f5" opacity=".92"/>';
    let bldg = "";
    [[0, 70, 60, "#7a3b2a"], [64, 92, 52, "#8b4a32"], [120, 60, 70, "#6b3427"], [196, 84, 58, "#93533a"], [258, 66, 64, "#74392b"], [326, 88, 74, "#864632"]].forEach(([x, y, w, c]) => {
      bldg += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (184 - y) + '" fill="' + c + '"/>';
      for (let yy = y + 10; yy < 120; yy += 16) for (let xx = x + 6; xx < x + w - 8; xx += 14) bldg += '<rect class="' + ((xx + yy) % 3 ? "" : "bm-glow") + '" x="' + xx + '" y="' + yy + '" width="7" height="9" fill="#f3d38a" opacity=".7"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#bm-s1)"/>' + cloud("bm-cl", 60, 26, 1) + cloud("bm-cl bm-cl2", 260, 18, .8) + bldg +
      /* stop canopy and sign */
      '<rect x="36" y="58" width="210" height="36" rx="3" fill="#111"/><rect x="36" y="58" width="210" height="4" fill="' + RED + '"/>' +
      bullet(60, 77, "Q", NAVY) +
      '<text x="160" y="84" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Canfield</text>' +
      '<rect x="56" y="94" width="5" height="34" fill="#666"/><rect x="221" y="94" width="5" height="34" fill="#666"/>' +
      /* streetcar */
      '<g class="anim-train">' +
        '<rect x="16" y="124" width="292" height="60" rx="16" fill="' + CREAM + '" stroke="#8a95a3" stroke-width="2"/>' +
        '<rect x="16" y="164" width="292" height="12" fill="#3a3f48"/><rect x="16" y="161" width="292" height="3" fill="' + RED + '"/>' + wins +
        '<rect x="286" y="136" width="16" height="26" rx="4" fill="#9fc6e8"/><circle cx="298" cy="174" r="4" fill="#fff6c2"/>' +
        '<path d="M150 124l-14 -18M150 124l14 -18" stroke="#555" stroke-width="2"/>' +
      '</g>' +
      '<path d="M0 104h400" stroke="#333" stroke-width="1.5"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#3a3f48"/><rect x="0" y="184" width="400" height="5" fill="#9aa0a8"/>' +
      '<path d="M0 196h400M0 204h400" stroke="#8a8d93" stroke-width="2"/>' +
      '<g class="bm-car"><rect x="0" y="226" width="48" height="14" rx="4" fill="' + TEAL + '"/><rect x="10" y="219" width="26" height="9" rx="3" fill="#2a8f86"/><circle cx="10" cy="240" r="4" fill="#111"/><circle cx="38" cy="240" r="4" fill="#111"/></g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="9" fill="#cfd3da" letter-spacing="3">WOODWARD AVE</text>',
      sky("bm-s1", "#3d6fa3", "#f0b77a"));
  }

  /* 2. A west side brick church on Sunday morning: bell swinging in the steeple, stained glass glowing, church fans waving */
  function bmchurch() {
    const fan = (x, y, cls, c) => '<g class="bm-fan ' + cls + '"><rect x="' + (x - 1) + '" y="' + y + '" width="2" height="12" fill="#8a6a3a"/><path d="M' + (x - 8) + ' ' + (y + 1) + 'q8 -16 16 0z" fill="' + c + '" stroke="#5a3a20" stroke-width="1"/></g>';
    const lady = (x, c, hat) => '<circle cx="' + x + '" cy="214" r="10" fill="#3a2418"/><path d="M' + (x - 13) + ' 210q13 -16 26 0z" fill="' + hat + '"/><rect x="' + (x - 14) + '" y="224" width="28" height="40" rx="8" fill="' + c + '"/>';
    let glass = "";
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; glass += '<path d="M200 96L' + (200 + 24 * Math.cos(a)).toFixed(1) + ' ' + (96 + 24 * Math.sin(a)).toFixed(1) + 'A24 24 0 0 1 ' + (200 + 24 * Math.cos(a + Math.PI / 4)).toFixed(1) + ' ' + (96 + 24 * Math.sin(a + Math.PI / 4)).toFixed(1) + 'z" fill="' + ["#d8392b", "#2f6fd1", "#e7b94c", "#3fa66b"][i % 4] + '"/>'; }
    const lancet = x => '<path d="M' + x + ' 196v-36q10 -18 20 0v36z" fill="#2f6fd1"/><path d="M' + x + ' 178h20M' + (x + 10) + ' 146v50" stroke="#1b1b22" stroke-width="2"/><path d="M' + x + ' 196v-36q10 -18 20 0v36z" fill="none" stroke="#e9dcc0" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bm-s2)"/><circle cx="340" cy="44" r="20" fill="#fff3c4"/>' + cloud("bm-cl", 80, 34, 1) +
      '<rect x="0" y="196" width="400" height="64" fill="#5d8c4a"/><rect x="0" y="196" width="400" height="4" fill="#4a7a3a"/>' +
      /* nave: red brick, gable roof */
      '<path d="M110 200V86L200 38L290 86V200z" fill="#9a3b2a"/><path d="M104 88L200 34L296 88" stroke="#5a2a20" stroke-width="8" fill="none"/>' +
      (() => { let b = ""; for (let y = 96; y < 200; y += 8) b += '<path d="M112 ' + y + 'h176" stroke="#7d2f22" stroke-width=".8" opacity=".6"/>'; return b; })() +
      /* rose window */
      '<circle cx="200" cy="96" r="28" fill="#e9dcc0"/><g class="bm-glow">' + glass + '</g><circle cx="200" cy="96" r="6" fill="#e7b94c"/><circle cx="200" cy="96" r="25" fill="none" stroke="#1b1b22" stroke-width="2"/>' +
      lancet(132) + lancet(248) +
      /* doors */
      '<path d="M178 200v-38q22 -26 44 0v38z" fill="#4a2a1a" stroke="#e9dcc0" stroke-width="3"/><path d="M200 140v60" stroke="#2a170f" stroke-width="2"/>' +
      '<rect x="168" y="196" width="64" height="6" fill="#bdb6a4"/>' +
      /* steeple with the bell */
      '<rect x="292" y="70" width="44" height="130" fill="#8e3626"/><rect x="292" y="70" width="44" height="6" fill="#e9dcc0"/>' +
      '<path d="M300 112v-20q14 -16 28 0v20z" fill="#1b1b22"/><g class="bm-bell"><path d="M314 92q-8 2 -9 16h18q-1 -14 -9 -16z" fill="' + GOLD + '"/><circle cx="314" cy="110" r="2.4" fill="#7a5512"/></g>' +
      '<path d="M288 72L314 10L340 72z" fill="#5a2a20"/><rect x="312" y="0" width="4" height="16" fill="' + GOLD + '"/><rect x="307" y="4" width="14" height="4" fill="' + GOLD + '"/>' +
      /* the congregation out front with fans */
      lady(70, "#7a3fa0", "#e7b94c") + fan(92, 222, "", "#fff") +
      lady(116, "#2f6fd1", "#d8392b") + fan(138, 222, "bm-fan2", "#f4f1e8") +
      lady(276, "#d8392b", "#1b1b22") + fan(298, 222, "bm-fan3", "#fff") +
      lady(340, "#3fa66b", "#f4f1e8") + fan(362, 222, "bm-fan2", "#e7b94c") +
      '<rect x="146" y="226" width="108" height="20" rx="3" fill="#111"/><text x="200" y="240" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '" letter-spacing="2">SUNDAY 11 AM</text>',
      sky("bm-s2", "#6fb0e8", "#f8e6b8"));
  }

  /* 3. Hart Plaza in the summer: the stainless ring of the Dodge Fountain spraying, the river, a crowd dancing */
  function bmfountain() {
    let crowd = "";
    for (let i = 0; i < 11; i++) {
      const x = 14 + i * 37, c = [TEAL, RED, GOLD, "#7a3fa0", CREAM][i % 5];
      crowd += '<g class="bm-bo bm-bo' + (i % 3 + 1) + '"><circle cx="' + x + '" cy="222" r="9" fill="#2a1c14"/><rect x="' + (x - 11) + '" y="230" width="22" height="34" rx="7" fill="' + c + '"/>' +
        (i % 2 ? '<path d="M' + (x + 9) + ' 234l10 -16" stroke="#2a1c14" stroke-width="4" stroke-linecap="round"/>' : '') + '</g>';
    }
    let jets = "";
    for (let i = 0; i < 9; i++) jets += '<ellipse class="bm-jet bm-jet' + (i % 3 + 1) + '" cx="' + (160 + i * 10) + '" cy="150" rx="4" ry="10" fill="#d8f1ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bm-s3)"/><circle cx="70" cy="42" r="18" fill="#fff3c4"/>' + cloud("bm-cl", 240, 30, 1) +
      /* Windsor shore across the river */
      '<path d="M0 112h400v16H0z" fill="#5b7b52"/><rect x="40" y="100" width="24" height="12" fill="#8a94a0"/><rect x="300" y="96" width="30" height="16" fill="#8a94a0"/><rect x="340" y="104" width="18" height="8" fill="#9aa3ad"/>' +
      /* Detroit River */
      '<rect x="0" y="128" width="400" height="34" fill="#2f6f9e"/><path d="M20 140h40M120 150h50M260 138h60M330 152h40" stroke="#9fd0ef" stroke-width="2" opacity=".7"/>' +
      '<g class="bm-boat"><path d="M0 138h56l-8 10H8z" fill="#f4f1e8"/><rect x="16" y="130" width="26" height="8" fill="#d8392b"/></g>' +
      '<rect x="0" y="160" width="400" height="6" fill="#bdb6a4"/>' +
      /* plaza */
      '<rect x="0" y="166" width="400" height="94" fill="#c9c2b2"/><path d="M0 200h400" stroke="#b3ab99" stroke-width="2"/>' +
      /* basin and the fountain ring on two angled legs */
      '<ellipse cx="200" cy="186" rx="96" ry="14" fill="#9aa7b2"/><ellipse cx="200" cy="184" rx="88" ry="10" fill="#6fb8e0"/>' +
      '<path d="M176 184L190 132M224 184L210 132" stroke="#c8d0d8" stroke-width="7" stroke-linecap="round"/>' +
      '<ellipse cx="200" cy="112" rx="54" ry="22" fill="none" stroke="#dfe6ec" stroke-width="12"/><ellipse cx="200" cy="112" rx="54" ry="22" fill="none" stroke="#8e9aa6" stroke-width="2"/>' +
      '<path d="M146 112a54 22 0 0 0 108 0" fill="none" stroke="#f5f8fb" stroke-width="3" opacity=".8"/>' + jets +
      '<ellipse class="bm-jet bm-jet2" cx="200" cy="96" rx="10" ry="16" fill="#e6f6ff" opacity=".8"/>' + crowd,
      sky("bm-s3", "#3f8fd6", "#bfe3ff"));
  }

  /* 4. The Fox Theatre on Woodward: blade sign, gold terracotta facade, chasing marquee lights */
  function bmfox() {
    let bulbs = "";
    for (let i = 0; i < 22; i++) bulbs += '<circle class="bm-bu' + (i % 2 ? " bm-bu2" : "") + '" cx="' + (92 + i * 10.4) + '" cy="150" r="2.4" fill="#fff3a8"/><circle class="bm-bu' + (i % 2 ? "" : " bm-bu2") + '" cx="' + (92 + i * 10.4) + '" cy="194" r="2.4" fill="#fff3a8"/>';
    let orn = "";
    for (let y = 40; y < 140; y += 18) for (let x = 110; x < 300; x += 26) orn += '<path d="M' + x + ' ' + (y + 10) + 'q6 -12 12 0q-6 6 -12 0z" fill="#b8862a" opacity=".55"/>';
    let letters = "";
    ["F", "O", "X"].forEach((l, i) => letters += '<text class="bm-flk' + (i === 1 ? " bm-flk2" : "") + '" x="200" y="' + (52 + i * 26) + '" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="#fff3a8">' + l + '</text>');
    return svg(
      '<rect width="400" height="260" fill="url(#bm-s4)"/>' +
      '<rect x="0" y="70" width="80" height="150" fill="#2b2530"/><rect x="320" y="60" width="80" height="160" fill="#2b2530"/>' +
      (() => { let w = ""; for (let y = 80; y < 210; y += 16) { w += '<rect x="12" y="' + y + '" width="10" height="8" fill="#f3d38a" opacity=".5"/><rect x="48" y="' + y + '" width="10" height="8" fill="#f3d38a" opacity=".35"/><rect x="336" y="' + y + '" width="10" height="8" fill="#f3d38a" opacity=".4"/><rect x="372" y="' + y + '" width="10" height="8" fill="#f3d38a" opacity=".55"/>'; } return w; })() +
      /* facade */
      '<rect x="84" y="24" width="232" height="196" fill="#d9b66a"/><rect x="84" y="24" width="232" height="8" fill="#f0d590"/>' + orn +
      '<path d="M150 140v-62q50 -40 100 0v62z" fill="#7a2a2a" opacity=".8"/>' +
      /* blade sign */
      '<rect x="184" y="10" width="32" height="96" rx="4" fill="#b2231c" stroke="' + GOLD + '" stroke-width="3"/>' + letters +
      /* marquee */
      '<rect x="84" y="144" width="232" height="56" fill="#1b1b22" stroke="' + GOLD + '" stroke-width="3"/>' + bulbs +
      '<rect x="100" y="158" width="200" height="30" fill="' + CREAM + '"/>' +
      '<text x="200" y="171" text-anchor="middle" ' + font + ' font-size="11" fill="#1b1b22" letter-spacing="1">BLACK MILK</text>' +
      '<text x="200" y="184" text-anchor="middle" ' + font + ' font-size="9" fill="#b2231c" letter-spacing="2">+ THE LIVE BAND</text>' +
      /* doors and street */
      '<rect x="110" y="200" width="180" height="20" fill="#3b2a1e"/>' + [124, 160, 196, 232, 268].map(x => '<rect x="' + x + '" y="202" width="22" height="18" fill="#f3d38a" opacity=".55"/>').join("") +
      '<rect x="0" y="220" width="400" height="40" fill="#2e3138"/><path d="M0 238h400" stroke="#e7b94c" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="bm-car bm-car2"><rect x="0" y="242" width="50" height="13" rx="4" fill="' + RED + '"/><rect x="10" y="235" width="28" height="9" rx="3" fill="#8f241a"/><circle cx="10" cy="255" r="4" fill="#111"/><circle cx="40" cy="255" r="4" fill="#111"/></g>',
      sky("bm-s4", "#0f1024", "#3b2a4e"));
  }

  /* 5. Schaefer Hwy and Puritan Ave: green signs, BLACK MILK on the brick, the Guardian Building downtown */
  function bmcorner() {
    let brick = "";
    for (let y = 120; y < 214; y += 10) for (let x = (y / 10) % 2 ? 0 : 14; x < 400; x += 28) brick += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#8b3d2a" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bm-s5)"/>' +
      /* downtown skyline far off, the Guardian Building in front of it */
      '<rect x="70" y="72" width="18" height="48" fill="#3a3550"/><rect x="96" y="58" width="14" height="62" fill="#3a3550"/><rect x="196" y="66" width="20" height="54" fill="#3a3550"/><rect x="222" y="82" width="26" height="38" fill="#3a3550"/>' +
      guardian(152, 120, .72) +
      '<rect x="0" y="112" width="400" height="104" fill="#a8482f"/>' + brick +
      '<rect x="0" y="112" width="400" height="6" fill="#6e2c1e"/>' +
      tag("BLACK MILK", 48, 182, 42, CREAM, -5) +
      '<path class="bm-sp" d="M352 150q6 -8 12 0" stroke="' + TEAL + '" stroke-width="3" fill="none"/><path class="bm-sp bm-sp2" d="M358 140q6 -8 12 0" stroke="' + TEAL + '" stroke-width="3" fill="none"/>' +
      '<rect x="344" y="152" width="14" height="30" rx="3" fill="' + TEAL + '" stroke="#111" stroke-width="2"/><rect x="346" y="146" width="10" height="7" fill="#111"/>' +
      /* sidewalk + street */
      '<rect x="0" y="214" width="400" height="10" fill="#9a9a94"/><rect x="0" y="224" width="400" height="36" fill="#2e3138"/>' +
      '<g class="bm-car"><rect x="0" y="236" width="56" height="14" rx="5" fill="' + GOLD + '"/><rect x="12" y="228" width="30" height="10" rx="3" fill="#a07c2c"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="44" cy="250" r="4" fill="#111"/></g>' +
      /* signpost */
      '<rect x="318" y="44" width="5" height="172" fill="#5c5f66"/>' +
      sign(238, 40, 120, "Schaefer Hwy") + sign(250, 64, 108, "Puritan Ave"),
      sky("bm-s5", "#1d2b4a", "#e98a4f"));
  }

  window.SCENES = { bmqline, bmchurch, bmfountain, bmfox, bmcorner };
})();
