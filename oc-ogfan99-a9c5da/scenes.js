/* O.C. game (NYC map, Brooklyn: Bushwick, where Omar Credle came up off Evergreen Av and Harman St).
   1. Central Av on the Myrtle Av el (M), 2. Irving Square Park (block football, the Bushwick childhood in his lyrics),
   3. Brewers' Row: the Victorian brewer mansions on Bushwick Av, 4. the old Forrest St brewery with its tall stack (still pumping in the '70s when he was a kid),
   5. Evergreen Av and Harman St, his name on the wall, the brewery stack behind. 400 x 260 SVGs, no logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes occar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.oc-car{animation:occar 7s linear infinite}.oc-car2{animation-delay:-3.5s}' +
    '@keyframes ocblink{0%,100%{opacity:.25}50%{opacity:1}}.oc-bl{animation:ocblink 1.8s ease-in-out infinite}.oc-bl2{animation-delay:.6s}.oc-bl3{animation-delay:1.2s}' +
    '@keyframes ocball{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(110px,-60px) rotate(180deg)}100%{transform:translate(220px,0) rotate(360deg)}}.oc-ball{transform-box:fill-box;transform-origin:50% 50%;animation:ocball 2.6s ease-in-out infinite alternate}' +
    '@keyframes ocrun{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.oc-run{animation:ocrun 2.6s ease-in-out infinite}.oc-run2{animation-direction:reverse}' +
    '@keyframes ocsmoke{0%{transform:translate(0,0) scale(.6);opacity:.7}100%{transform:translate(40px,-70px) scale(1.6);opacity:0}}.oc-smk{transform-box:fill-box;transform-origin:50% 50%;animation:ocsmoke 4s linear infinite}.oc-smk2{animation-delay:-1.3s}.oc-smk3{animation-delay:-2.6s}' +
    '@keyframes ocleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-30px,170px) rotate(320deg)}}.oc-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:ocleaf 6s linear infinite}.oc-leaf2{animation-delay:-2s}.oc-leaf3{animation-delay:-4s}' +
    '@keyframes ocroll{from{transform:translateX(-60px)}to{transform:translateX(200px)}}.oc-roll{animation:ocroll 5s linear infinite}' +
    '@keyframes ocspin{to{transform:rotate(360deg)}}.oc-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ocspin 1.2s linear infinite}' +
    '@keyframes ocflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.oc-flk{animation:ocflick 2.6s infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#e8b04a", RED = "#d2452f", CREAM = "#f4ead8", ORANGE = "#ff6319", BRICK = "#8a3b2a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  /* a Bushwick row house: brick or siding front, cornice, windows, stoop */
  const rowhouse = (x, w, top, col, lit) => {
    let g = '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + (200 - top) + '" fill="' + col + '"/>' +
      '<rect x="' + (x - 2) + '" y="' + (top - 6) + '" width="' + (w + 4) + '" height="8" fill="#3a2a22"/>';
    for (let yy = top + 12; yy < 170; yy += 26) for (let xx = x + 8; xx < x + w - 12; xx += 18)
      g += '<rect class="' + (lit && (xx + yy) % 3 === 0 ? "oc-bl oc-bl" + ((xx + yy) % 3 + 1) : "") + '" x="' + xx + '" y="' + yy + '" width="10" height="15" fill="' + (lit ? "#ffd98a" : "#cfe2f5") + '" opacity="' + (lit ? ".8" : ".85") + '"/>';
    g += '<rect x="' + (x + w / 2 - 7) + '" y="178" width="14" height="22" fill="#2a1a12"/>' +
      '<path d="M' + (x + w / 2 - 12) + ' 200h24l-4 -6h-16z" fill="#6b6259"/>';
    return g;
  };

  /* 1. Central Av, up on the Myrtle Av el: the canopy, the black sign with the orange M, the M train sliding in, Bushwick rooftops below */
  function centralav() {
    let roofs = "";
    for (let x = 0; x < 400; x += 40) roofs += '<rect x="' + x + '" y="' + (150 + (x % 80 ? 8 : 0)) + '" width="38" height="110" fill="' + (x % 80 ? "#6d3a2c" : "#7c4a37") + '"/>' +
      '<rect class="oc-bl oc-bl' + (x % 3 + 1) + '" x="' + (x + 8) + '" y="' + (176 + (x % 80 ? 8 : 0)) + '" width="8" height="10" fill="#ffd98a" opacity=".8"/>' +
      '<rect x="' + (x + 22) + '" y="' + (176 + (x % 80 ? 8 : 0)) + '" width="8" height="10" fill="#ffd98a" opacity=".5"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="98" width="22" height="18" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#oa)"/>' + stars(8) + roofs +
      /* canopy roof on posts */
      '<path d="M0 34h400v10H0z" fill="#3b4a3f"/><path d="M0 44l20 8h360l20 -8z" fill="#2c382f"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 4) + '" y="52" width="8" height="96" fill="#3b4a3f"/>').join("") +
      [80, 180, 280].map((x, i) => '<rect class="oc-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 20) + '" y="54" width="40" height="5" rx="2" fill="#fff8d6"/>').join("") +
      /* station sign */
      '<rect x="60" y="62" width="280" height="28" rx="3" fill="#111"/><rect x="60" y="62" width="280" height="3" fill="#fff"/>' +
      '<text x="76" y="82" ' + font + ' font-size="15" fill="#fff">Central Av</text>' + bullet(318, 77, "M", ORANGE) +
      /* the M train */
      '<g class="anim-train">' +
        '<rect x="10" y="92" width="300" height="52" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="10" y="124" width="300" height="5" fill="' + ORANGE + '"/>' +
        '<rect x="290" y="98" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(298, 134, "M", ORANGE) +
        '<circle cx="20" cy="136" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform edge + railing */
      '<rect x="0" y="146" width="400" height="8" fill="#eab308"/><rect x="0" y="154" width="400" height="6" fill="#4b4b4b"/>' +
      '<path d="M0 160h400" stroke="#2c382f" stroke-width="3"/>' +
      txt("MYRTLE AV EL · BUSHWICK", 200, 246, 11, CREAM, 'letter-spacing="3"'),
      sky("oa", "#14122a", "#c0623a"));
  }

  /* 2. Irving Square Park: block football on the field, the ball spiraling across, the iron fence, row houses behind */
  function irvingsq() {
    let fence = "";
    for (let x = 4; x < 400; x += 10) fence += '<rect x="' + x + '" y="160" width="2" height="34" fill="#1b2a22"/><circle cx="' + (x + 1) + '" cy="159" r="2" fill="#1b2a22"/>';
    let trees = "";
    [30, 120, 290, 370].forEach((x, i) => { trees += '<rect x="' + (x - 3) + '" y="110" width="6" height="56" fill="#4a3426"/><circle cx="' + x + '" cy="104" r="' + (22 + (i % 2) * 6) + '" fill="' + (i % 2 ? "#3f7d3a" : "#4f8f45") + '"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#ob)"/>' +
      rowhouse(0, 70, 70, "#9b5a43") + rowhouse(70, 64, 80, "#c7b79a") + rowhouse(134, 70, 66, "#7d4a3a") + rowhouse(204, 66, 78, "#b98b6e") + rowhouse(270, 70, 70, "#8f6450") + rowhouse(340, 60, 84, "#c9c2b0") +
      trees +
      /* the field */
      '<rect x="0" y="166" width="400" height="94" fill="#5f9a46"/>' +
      [40, 100, 160, 220, 280, 340].map(x => '<path d="M' + x + ' 196v64" stroke="#fff" stroke-width="2" opacity=".7"/>').join("") +
      fence + '<rect x="0" y="192" width="400" height="4" fill="#1b2a22"/>' +
      /* park sign (plain green, white letters) */
      '<rect x="136" y="172" width="128" height="18" rx="2" fill="#0f5a32" stroke="#fff" stroke-width="1"/>' + txt("IRVING SQUARE PARK", 200, 185, 9, "#fff", 'letter-spacing="1"') +
      /* the kids playing, the ball flying */
      '<g class="oc-run">' + person(70, 208, "#1f2a44") + person(98, 214, "#7a1d14") + '</g>' +
      '<g class="oc-run oc-run2">' + person(300, 208, "#1f2a44") + person(326, 214, "#7a1d14") + '</g>' +
      '<g class="oc-ball"><ellipse cx="88" cy="196" rx="8" ry="5" fill="#7a3e1a" stroke="#3a1a08"/><path d="M84 196h8" stroke="#fff" stroke-width="1.2"/></g>' +
      tag("FOOTBALL SPELLED RELIEF", 70, 44, 22, GOLD, -3),
      sky("ob", "#7fb6e0", "#e8d9b6"));
  }

  /* 3. Brewers' Row on Bushwick Av: the turreted red-brick brewer mansion, the pale stone one next to it, gas-style lamps, autumn leaves drifting */
  function brewers() {
    const leaves = [[60, 20, "#d98a2b"], [180, 0, "#b5452a"], [300, 30, "#e8b04a"], [360, 10, "#c46a2a"], [120, 40, "#e0a040"]].map((l, i) =>
      '<path class="oc-leaf oc-leaf' + (i % 3 + 1) + '" d="M' + l[0] + ' ' + l[1] + 'q6-6 12 0q-6 8-12 0z" fill="' + l[2] + '"/>').join("");
    let bricks = "";
    for (let y = 70; y < 200; y += 8) bricks += '<path d="M40 ' + y + 'h150" stroke="#6e2e20" stroke-width="1" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#oc)"/>' +
      /* red-brick mansion with the corner turret */
      '<rect x="40" y="70" width="150" height="130" fill="' + BRICK + '"/>' + bricks +
      '<rect x="150" y="50" width="56" height="150" fill="#7a3324"/><path d="M146 50l32 -40l32 40z" fill="#3c3a40"/><path d="M178 10v-8" stroke="#3c3a40" stroke-width="3"/>' +
      '<path d="M36 70l77 -34l77 34z" fill="#4a3a36"/>' +
      [56, 92, 128].map(x => '<rect x="' + x + '" y="86" width="20" height="30" rx="10" fill="#f6d488" opacity=".85"/><rect x="' + x + '" y="134" width="20" height="30" fill="#f6d488" opacity=".7"/>').join("") +
      '<rect x="164" y="70" width="28" height="34" rx="14" fill="#f6d488" opacity=".85"/><rect x="164" y="122" width="28" height="34" rx="2" fill="#f6d488" opacity=".7"/>' +
      '<rect x="84" y="172" width="30" height="28" fill="#2a160e"/><path d="M76 200h46v-6h-46z" fill="#b8ab98"/>' +
      /* pale stone mansion with porch columns */
      '<rect x="226" y="84" width="150" height="116" fill="#d8ccb2"/><path d="M220 84l81 -34l81 34z" fill="#6a5a4a"/>' +
      [242, 280, 318, 350].map(x => '<rect x="' + x + '" y="98" width="16" height="26" fill="#3a4a5a"/><rect x="' + x + '" y="98" width="16" height="4" fill="#b0a288"/>').join("") +
      '<rect x="230" y="140" width="142" height="8" fill="#b0a288"/>' + [236, 268, 300, 332, 362].map(x => '<rect x="' + x + '" y="148" width="6" height="52" fill="#efe6d2"/>').join("") +
      '<rect x="290" y="160" width="22" height="40" fill="#3a2a1a"/>' +
      /* sidewalk, lamps, trees */
      '<rect x="0" y="200" width="400" height="22" fill="#9a958c"/><rect x="0" y="222" width="400" height="38" fill="#4b4d52"/>' +
      [16, 212, 392].map(x => '<rect x="' + (x - 2) + '" y="150" width="4" height="52" fill="#1d1d1d"/><circle class="oc-flk" cx="' + x + '" cy="148" r="6" fill="#ffe7a0"/>').join("") +
      '<g class="oc-car oc-car2"><rect x="0" y="232" width="46" height="14" rx="4" fill="#2d4a7a"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="36" cy="246" r="4" fill="#111"/></g>' +
      leaves + txt("BUSHWICK AV · BREWERS' ROW", 200, 216, 10, "#2a2620", 'letter-spacing="2"'),
      sky("oc", "#e7a75a", "#f4dcb0"));
  }

  /* 4. The old Forrest St brewery, '76: red-brick brewhouse, the tall stack puffing, barrels rolling out the dock */
  function brewery() {
    let bricks = "";
    for (let y = 84; y < 206; y += 8) bricks += '<path d="M60 ' + y + 'h290" stroke="#5e2418" stroke-width="1" opacity=".55"/>';
    let wins = "";
    for (let y = 96; y < 170; y += 30) for (let x = 76; x < 340; x += 30) wins += '<rect class="' + ((x + y) % 4 === 0 ? "oc-bl oc-bl" + (x % 3 + 1) : "") + '" x="' + x + '" y="' + y + '" width="16" height="20" rx="8" fill="#f2c46a" opacity=".85"/>';
    const barrel = x => '<g><rect x="' + x + '" y="212" width="22" height="26" rx="5" fill="#8a5a2a"/><path d="M' + x + ' 218h22M' + x + ' 232h22" stroke="#3a2a1a" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#od)"/>' +
      /* smoke */
      '<g><circle class="oc-smk" cx="40" cy="20" r="12" fill="#d8d4cc"/><circle class="oc-smk oc-smk2" cx="40" cy="20" r="12" fill="#cfcac0"/><circle class="oc-smk oc-smk3" cx="40" cy="20" r="12" fill="#e2ded6"/></g>' +
      /* the stack */
      '<path d="M28 206l6 -180h14l6 180z" fill="#7a2f20"/>' + [50, 90, 130, 170].map(y => '<rect x="' + (31 + y / 60) + '" y="' + y + '" width="' + (20 - y / 30) + '" height="4" fill="#4a1a10"/>').join("") +
      /* brewhouse */
      '<rect x="60" y="78" width="290" height="128" fill="' + BRICK + '"/>' + bricks + wins +
      '<path d="M56 78h298v-10H56z" fill="#4a1a10"/><rect x="170" y="40" width="70" height="40" fill="#7a3324"/><path d="M166 40l39 -22l39 22z" fill="#3c3a40"/>' +
      '<rect x="180" y="52" width="50" height="16" fill="#1a1210"/>' + txt("BREWERY", 205, 64, 9, GOLD, 'letter-spacing="2"') +
      /* loading dock */
      '<rect x="0" y="206" width="400" height="54" fill="#55524c"/><rect x="0" y="206" width="400" height="5" fill="#8a8680"/>' +
      '<rect x="250" y="160" width="60" height="46" fill="#2a1a12"/><path d="M250 166h60M250 178h60M250 190h60" stroke="#4a3a2a" stroke-width="2"/>' +
      '<g class="oc-roll">' + barrel(120) + barrel(150) + '</g>' +
      /* delivery truck, plain */
      '<g class="oc-car"><rect x="0" y="222" width="70" height="26" rx="3" fill="#e9e1cf"/><rect x="70" y="230" width="24" height="18" rx="3" fill="#c8102e"/><rect x="76" y="233" width="12" height="8" fill="#cfe2f5"/><circle cx="16" cy="250" r="5" fill="#111"/><circle cx="80" cy="250" r="5" fill="#111"/></g>' +
      txt("FORREST ST · BUSHWICK · '76", 290, 26, 10, CREAM, 'letter-spacing="2"'),
      sky("od", "#5b7fa6", "#f0c890"));
  }

  /* 5. Evergreen Av and Harman St: green signs, his name on the wall, row houses, the brewery stack behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#oe)"/>' + stars(14) +
      /* stack behind */
      '<path d="M228 132l5 -110h11l5 110z" fill="#3a1a14"/><circle class="oc-smk" cx="238" cy="20" r="10" fill="#6a6470"/><circle class="oc-smk oc-smk2" cx="238" cy="20" r="10" fill="#5a5460"/>' +
      txt("THE OLD BREWERY STACK", 238, 14, 8, CREAM, 'letter-spacing="2" opacity=".75"') +
      /* row houses */
      '<g opacity=".9">' + rowhouse(0, 64, 60, "#5a2e24", true) + rowhouse(64, 60, 72, "#6e5a4a", true) + rowhouse(124, 70, 64, "#4e2a22", true) + '</g>' +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("O.C.", 30, 200, 58, GOLD, -5) + tag("WORD LIFE", 150, 196, 24, RED, -4) + tag("O-ZONE", 160, 222, 18, CREAM, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="oc-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + RED + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="292" y="66" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Evergreen Av", 344, 82, 12, "#fff") +
      '<rect x="292" y="92" width="104" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Harman St", 344, 108, 12, "#fff") +
      '<circle class="oc-flk" cx="358" cy="60" r="4" fill="#fff6c2"/>',
      sky("oe", "#0b0a1a", "#3a2a40"));
  }

  window.SCENES = { centralav: centralav, irvingsq: irvingsq, brewers: brewers, brewery: brewery, corner: corner };
})();
