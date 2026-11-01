/* Harlem / uptown opening scenes for the Melii game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:.15}}' +
    '.blink{animation:blink 2s steps(1) infinite}' +
    '@keyframes drive{from{transform:translateX(-120px)}to{transform:translateX(460px)}}' +
    '.car{animation:drive 5s linear infinite}.car2{animation-delay:-2.4s}' +
    '@keyframes back{from{transform:translateX(460px)}to{transform:translateX(-120px)}}' +
    '.carb{animation:back 6s linear infinite}.carb2{animation-delay:-3.1s}' +
    '@keyframes fall{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(30px,150px) rotate(300deg)}}' +
    '.leaf{transform-box:fill-box;transform-origin:50% 50%;animation:fall 6s linear infinite}.lf2{animation-delay:-2s}.lf3{animation-delay:-4s}.lf4{animation-delay:-1s}' +
    '@keyframes wave{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(4deg) scaleX(.94)}}' +
    '.wave{transform-box:fill-box;transform-origin:0 0;animation:wave 1.6s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(24px,-70px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.n2{animation-delay:-1s}.n3{animation-delay:-2s}' +
    '@keyframes shake{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}' +
    '.shake{transform-box:fill-box;transform-origin:50% 100%;animation:shake .35s ease-in-out infinite}' +
    '@keyframes shim{0%,100%{transform:translateX(0);opacity:.5}50%{transform:translateX(8px);opacity:.9}}' +
    '.shim{animation:shim 3s ease-in-out infinite}.shim2{animation-delay:1.2s}' +
    '@keyframes beam{0%,100%{opacity:0}40%,60%{opacity:.35}}' +
    '.beam{animation:beam 3s ease-in-out infinite}' +
    '@keyframes hop{0%,70%,100%{transform:translateY(0)}80%{transform:translateY(-6px)}}' +
    '.hop{animation:hop 2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const bullet = (x, y, l, c, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + c + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="14" fill="' + (dark ? "#000" : "#fff") + '">' + l + '</text>';
  /* Dominican flag: blue and red quarters split by a white cross, small emblem at the center */
  const flag = (x, y, w, cls) => { const h = w * 0.66, c = w * 0.12;
    return '<g class="' + (cls || "") + '"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#fff"/>' +
      '<rect x="' + x + '" y="' + y + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="#002d62"/>' +
      '<rect x="' + (x + (w + c) / 2) + '" y="' + y + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="#ce1126"/>' +
      '<rect x="' + x + '" y="' + (y + (h + c) / 2) + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="#ce1126"/>' +
      '<rect x="' + (x + (w + c) / 2) + '" y="' + (y + (h + c) / 2) + '" width="' + (w - c) / 2 + '" height="' + (h - c) / 2 + '" fill="#002d62"/>' +
      '<circle cx="' + (x + w / 2) + '" cy="' + (y + h / 2) + '" r="' + c * 0.45 + '" fill="#2e7d32" opacity=".8"/></g>'; };
  const CYAN = "#38e8ff", RED = "#ff3b4e", WHITE = "#ffffff", BLUE = "#002d62";

  /* 1. 145 St on St. Nicholas Av: underground, the A, B, C and D */
  function train() {
    let tiles = "";
    for (let y = 0; y < 128; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9d4c4" stroke-width="1"/>';
    for (let x = 0; x < 400; x += 14) tiles += '<path d="M' + x + ' 0v40M' + x + ' 64v64" stroke="#d9d4c4" stroke-width="1"/>';
    let windows = "";
    for (let x = 22; x < 300; x += 44) windows += '<rect x="' + x + '" y="148" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
    let beams = "";
    [20, 76, 312, 368].forEach(x => beams += '<rect x="' + x + '" y="0" width="10" height="200" fill="#2b3a4a"/><rect x="' + (x - 3) + '" y="0" width="16" height="4" fill="#3c4d5f"/>');
    return svg(
      '<rect width="400" height="260" fill="#efeadb"/>' + tiles +
      /* mosaic band */
      '<rect x="0" y="40" width="400" height="24" fill="#7a2e2e"/><path d="M0 46h400M0 58h400" stroke="#d9a441" stroke-width="2"/>' +
      '<rect x="0" y="128" width="400" height="10" fill="#7a2e2e"/>' +
      /* station sign */
      '<rect x="110" y="72" width="180" height="46" rx="3" fill="#111"/><path d="M110 76h180" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="122" y="104" ' + F + ' font-weight="700" font-size="22" fill="#fff">145 St</text>' +
      bullet(208, 98, "A", "#0039a6") + bullet(230, 98, "B", "#ff6319") + bullet(252, 98, "C", "#0039a6") + bullet(274, 98, "D", "#ff6319") +
      '<circle class="flk" cx="60" cy="20" r="4" fill="#fff6c2"/><circle class="flk flk2" cx="340" cy="20" r="4" fill="#fff6c2"/>' +
      /* the A train slides in */
      '<g class="anim-train">' +
        '<rect x="8" y="140" width="304" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + windows +
        '<path d="M300 144h8q4 0 4 6v22h-12z" fill="#cfe6ff" opacity=".85"/>' +
        bullet(286, 186, "A", "#0039a6") +
        '<circle cx="305" cy="190" r="3.5" fill="#fff6c2"/><rect x="40" y="180" width="200" height="4" fill="#9aa2ac"/>' +
      '</g>' + beams +
      '<rect x="0" y="198" width="400" height="6" fill="#e8c547"/><rect x="0" y="204" width="400" height="56" fill="#55534d"/>' +
      '<path d="M0 230h400" stroke="#6a675f" stroke-width="2"/>',
      "");
  }

  /* 2. Hamilton Grange in St. Nicholas Park: the butter-yellow Federal house with white porches */
  function grange() {
    let rail = x => { let r = ""; for (let i = 0; i < 6; i++) r += '<rect x="' + (x + 3 + i * 7) + '" y="168" width="2" height="12" fill="#fff"/>'; return r; };
    const tree = (x, y, r, c) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="44" fill="#4a3322"/><circle cx="' + x + '" cy="' + (y - 6) + '" r="' + r + '" fill="' + c + '"/><circle cx="' + (x + r / 2) + '" cy="' + (y + 4) + '" r="' + r * .7 + '" fill="' + c + '" opacity=".9"/>';
    const leaf = (x, y, c, cls) => '<path class="leaf ' + cls + '" d="M' + x + ' ' + y + 'q4-5 8 0q-4 5-8 0z" fill="' + c + '"/>';
    let wins = "";
    [130, 160, 230, 260].forEach(x => { wins += '<rect x="' + x + '" y="104" width="14" height="22" fill="#2f3a3a" stroke="#fff" stroke-width="2"/><rect x="' + x + '" y="140" width="14" height="24" fill="#2f3a3a" stroke="#fff" stroke-width="2"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      /* schist outcrop of the park */
      '<path d="M0 196q40-30 90-20t80 10l-170 30z" fill="#6b6a66"/>' +
      tree(40, 150, 28, "#d9822b") + tree(360, 156, 26, "#c4502a") +
      /* roof with chimneys and balustrade */
      '<path d="M112 92l14-12h148l14 12z" fill="#5a4a3a"/><rect x="140" y="66" width="10" height="16" fill="#8a4a3a"/><rect x="250" y="66" width="10" height="16" fill="#8a4a3a"/>' +
      '<rect x="160" y="74" width="80" height="6" fill="#fff"/>' +
      /* yellow clapboard body */
      '<rect x="118" y="92" width="164" height="92" fill="#f2d675"/>' +
      (function () { let c = ""; for (let y = 96; y < 184; y += 6) c += '<path d="M118 ' + y + 'h164" stroke="#d9bd5e" stroke-width="1"/>'; return c; })() +
      '<path d="M118 92h164" stroke="#fff" stroke-width="3"/><path d="M118 92v92M282 92v92" stroke="#fff" stroke-width="3"/>' + wins +
      /* front door with fanlight */
      '<path d="M190 184v-30a10 10 0 0 1 20 0v30z" fill="#2e4a3a" stroke="#fff" stroke-width="2"/><path d="M190 154a10 10 0 0 1 20 0" fill="#ffe7a8" opacity=".7"/>' +
      /* side porches (piazzas) */
      '<rect x="74" y="140" width="44" height="6" fill="#fff"/><rect x="78" y="146" width="4" height="38" fill="#fff"/><rect x="110" y="146" width="4" height="38" fill="#fff"/>' + rail(76) +
      '<rect x="282" y="140" width="44" height="6" fill="#fff"/><rect x="286" y="146" width="4" height="38" fill="#fff"/><rect x="318" y="146" width="4" height="38" fill="#fff"/>' + rail(284) +
      '<rect x="70" y="180" width="260" height="6" fill="#d9d4c4"/>' +
      /* lawn and path */
      '<rect x="0" y="186" width="400" height="74" fill="#4f8a3e"/><path d="M190 186h20l30 74h-80z" fill="#c9bfa6"/>' +
      /* a squirrel hopping on the lawn */
      '<g class="hop"><ellipse cx="300" cy="226" rx="8" ry="5" fill="#7a6a5a"/><circle cx="307" cy="221" r="3.5" fill="#7a6a5a"/><path d="M292 226q-8-4-4-14" stroke="#7a6a5a" stroke-width="5" fill="none" stroke-linecap="round"/></g>' +
      leaf(46, 130, "#e8942c", "") + leaf(70, 140, "#c4502a", "lf2") + leaf(350, 140, "#e0a73a", "lf3") + leaf(372, 150, "#d97a2b", "lf4"),
      sky("g2", "#7fb3e0", "#e3f1fa"));
  }

  /* 3. The colmado on Broadway uptown: Dominican flag, plantains, dominoes on the sidewalk, merengue on the speaker */
  function colmado() {
    let awn = "";
    for (let x = 40; x < 360; x += 20) awn += '<path d="M' + x + ' 70h20l-2 22h-16z" fill="' + ((x / 20) % 2 ? "#ce1126" : "#002d62") + '"/>';
    let fruit = "";
    for (let i = 0; i < 6; i++) fruit += '<path d="M' + (66 + i * 8) + ' 150q4 18 14 22" stroke="#7fae3a" stroke-width="5" fill="none" stroke-linecap="round"/>';
    for (let i = 0; i < 5; i++) fruit += '<path d="M' + (124 + i * 8) + ' 152q4 16 14 20" stroke="#e7c24a" stroke-width="5" fill="none" stroke-linecap="round"/>';
    const n = (x, y, cls) => '<g class="note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + CYAN + '"/><path d="M' + (x + 4) + ' ' + y + 'v-14h6" stroke="' + CYAN + '" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' +
      /* tenement above the store */
      '<rect x="20" y="0" width="360" height="70" fill="#7a4a3a"/>' +
      (function () { let w = ""; for (let x = 44; x < 360; x += 54) w += '<rect x="' + x + '" y="12" width="20" height="30" fill="#ffd98a" opacity=".7"/><path d="M' + (x - 2) + ' 44h24" stroke="#ddd" stroke-width="2"/>'; return w; })() +
      /* sign and awning */
      '<rect x="40" y="48" width="320" height="22" fill="#fff8e6"/><text x="200" y="65" text-anchor="middle" ' + F + ' font-weight="700" font-size="16" fill="#ce1126">COLMADO · GROCERY</text>' + awn +
      /* storefront */
      '<rect x="40" y="92" width="320" height="104" fill="#2a2a30"/><rect x="56" y="100" width="130" height="80" fill="#ffe7a8" opacity=".25"/>' +
      '<rect x="200" y="100" width="44" height="96" fill="#1a1a1f" stroke="#666"/><rect x="258" y="100" width="90" height="80" fill="#ffe7a8" opacity=".25"/>' +
      /* plantain bins */
      '<rect x="58" y="168" width="112" height="28" fill="#8a6a3a"/>' + fruit +
      /* the flag hanging from the awning */
      '<rect x="256" y="88" width="2" height="16" fill="#999"/>' + flag(258, 96, 48, "wave") +
      /* speaker with notes */
      '<rect x="320" y="150" width="30" height="46" rx="3" fill="#111" stroke="#555"/><circle cx="335" cy="164" r="7" fill="#333" stroke="#888"/><circle cx="335" cy="184" r="9" fill="#333" stroke="#888"/>' +
      n(336, 140, "") + n(350, 150, "n2") + n(322, 146, "n3") +
      /* sidewalk, dominoes table, güira and tambora */
      '<rect x="0" y="196" width="400" height="64" fill="#8a8a86"/><path d="M0 222h400" stroke="#777" stroke-width="1"/>' +
      '<rect x="110" y="208" width="90" height="6" fill="#e9e1cf"/><rect x="118" y="214" width="4" height="30" fill="#555"/><rect x="188" y="214" width="4" height="30" fill="#555"/>' +
      '<rect x="128" y="203" width="10" height="5" fill="#fff" stroke="#222" stroke-width=".6"/><rect x="142" y="203" width="10" height="5" fill="#fff" stroke="#222" stroke-width=".6"/><rect x="156" y="203" width="10" height="5" fill="#fff" stroke="#222" stroke-width=".6"/>' +
      '<circle cx="133" cy="205.5" r=".9" fill="#222"/><circle cx="147" cy="205.5" r=".9" fill="#222"/><circle cx="161" cy="205.5" r=".9" fill="#222"/>' +
      '<g class="shake"><rect x="40" y="210" width="12" height="34" rx="6" fill="#c9ced6" stroke="#6b7280"/><path d="M42 216h8M42 222h8M42 228h8M42 234h8" stroke="#6b7280"/></g>' +
      '<g transform="translate(240 214)"><rect x="0" y="0" width="40" height="26" rx="4" fill="#a0612f" stroke="#5a3418" stroke-width="1.5"/><ellipse cx="0" cy="13" rx="4" ry="13" fill="#e9dcc0" stroke="#5a3418"/><ellipse cx="40" cy="13" rx="4" ry="13" fill="#e9dcc0" stroke="#5a3418"/><path d="M4 2l32 22M4 24l32-22" stroke="#5a3418" stroke-width="1"/></g>',
      sky("g3", "#1b1f3a", "#3a2a4a"));
  }

  /* 4. The Little Red Lighthouse under the George Washington Bridge, on the Hudson at Fort Washington Park */
  function lighthouse() {
    let cables = "";
    for (let i = 0; i < 14; i++) { const x = 160 + i * 18; cables += '<path d="M' + x + ' ' + (40 + Math.pow((x - 290) / 26, 2) * 1.2) + 'V120" stroke="#9aa4ad" stroke-width="1"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' +
      /* Palisades across the river */
      '<path d="M0 150l40-14h120l40 10h200v20H0z" fill="#3e4a3a"/>' +
      /* bridge tower (latticed steel, grey) and main cable */
      '<rect x="270" y="20" width="12" height="140" fill="#8a949e"/><rect x="304" y="20" width="12" height="140" fill="#8a949e"/>' +
      '<path d="M270 40h46M270 70h46M270 100h46" stroke="#8a949e" stroke-width="5"/><path d="M276 40l34 30M310 40l-34 30M276 70l34 30M310 70l-34 30" stroke="#727c86" stroke-width="2"/>' +
      '<path d="M0 104Q150 150 293 22Q350 70 400 92" stroke="#9aa4ad" stroke-width="3" fill="none"/>' + cables +
      /* roadway deck with traffic */
      '<rect x="0" y="118" width="400" height="10" fill="#6f7880"/><rect x="0" y="128" width="400" height="4" fill="#4a535b"/>' +
      '<g class="car"><rect x="0" y="113" width="18" height="6" rx="2" fill="#ffd98a"/></g><g class="carb carb2"><rect x="0" y="113" width="18" height="6" rx="2" fill="#ff6b6b"/></g>' +
      /* river */
      '<rect x="0" y="166" width="400" height="94" fill="#2a4a63"/>' +
      '<path class="shim" d="M20 200h50M200 214h60M300 236h60" stroke="#9fd0ea" stroke-width="2" opacity=".6"/><path class="shim shim2" d="M90 240h60M260 196h40" stroke="#9fd0ea" stroke-width="2" opacity=".6"/>' +
      /* the rocks and the red lighthouse */
      '<path d="M40 210q20-22 70-20t70 20z" fill="#5a5650"/>' +
      '<path d="M98 196l6-96h22l6 96z" fill="#c8102e"/>' +
      '<rect x="96" y="94" width="38" height="5" fill="#fff"/><path d="M96 94h38" stroke="#333"/><rect x="104" y="80" width="22" height="14" fill="#1f1f1f"/><rect x="107" y="83" width="16" height="9" fill="#ffe7a8"/>' +
      '<path d="M102 80l13-10 13 10z" fill="#1f1f1f"/><rect x="112" y="128" width="6" height="10" fill="#fff" opacity=".85"/><rect x="110" y="166" width="10" height="20" fill="#5a1010"/>' +
      '<path class="beam" d="M126 87l100-26v40z" fill="#ffe7a8"/><path class="beam" d="M104 87l-100-26v40z" fill="#ffe7a8"/>',
      sky("g4", "#3a4a86", "#f29a6a"));
  }

  /* 5. Adam Clayton Powell Jr Blvd and W 135 St, by Thurgood Marshall Academy where she started rapping in sixth grade */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<circle cx="364" cy="32" r="13" fill="#fff1d6"/>' +
      (function () { let b = '<rect x="16" y="56" width="240" height="164" fill="#3a2a24"/>'; for (let y = 58; y < 220; y += 12) for (let x = (y / 12) % 2 ? 8 : 18; x < 250; x += 30) b += '<rect x="' + x + '" y="' + y + '" width="28" height="10" fill="#4a352c"/>'; return b; })() +
      /* painted flag stripe behind the tags */
      '<rect x="16" y="150" width="240" height="8" fill="#002d62" opacity=".9"/><rect x="16" y="158" width="240" height="4" fill="#fff" opacity=".9"/><rect x="16" y="162" width="240" height="8" fill="#ce1126" opacity=".9"/>' +
      tag("MELII", 34, 130, 54, CYAN, -7) + tag("CHUCHI", 30, 198, 26, WHITE, -4) + tag("NO HARD FEELINGS", 104, 214, 15, RED, -2) +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      /* street signs */
      '<rect x="244" y="84" width="118" height="20" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="98" text-anchor="middle" ' + F + ' font-weight="700" font-size="9.5" fill="#fff">Adam C Powell Jr Blvd</text>' +
      '<rect x="262" y="108" width="82" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="121" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">W 135 St</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="226" width="48" height="13" rx="4" fill="#f2c14e"/><circle cx="42" cy="232" r="2" fill="#fff6c2"/></g>' +
      '<g class="carb"><rect x="0" y="246" width="48" height="11" rx="4" fill="#c9ced6"/></g>',
      sky("g5", "#0d1022", "#2a1e3a"));
  }

  window.SCENES = { train, grange, colmado, lighthouse, corner };
})();
