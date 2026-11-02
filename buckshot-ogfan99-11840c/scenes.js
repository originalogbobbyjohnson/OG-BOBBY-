/* Crown Heights opening scenes for the Buckshot game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}.flk3{animation-delay:1.4s}' +
    '@keyframes wave{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}' +
    '@keyframes drift{from{transform:translateX(-120px)}to{transform:translateX(440px)}}' +
    '.cloud{animation:drift 26s linear infinite}.cloud2{animation-duration:34s;animation-delay:-14s}' +
    '@keyframes rise{0%{transform:translateY(16px)}60%,100%{transform:translateY(0)}}' +
    '.rise{animation:rise 7s ease-out infinite alternate}' +
    '@keyframes glow{0%,100%{opacity:.35}50%{opacity:.8}}' +
    '.glow{animation:glow 3s ease-in-out infinite}' +
    '@keyframes tw{0%,100%{opacity:.2}50%{opacity:1}}' +
    '.tw{animation:tw 1.8s ease-in-out infinite}.tw2{animation-delay:-.6s}.tw3{animation-delay:-1.2s}' +
    '@keyframes sweepL{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(14deg)}}' +
    '@keyframes sweepR{0%,100%{transform:rotate(18deg)}50%{transform:rotate(-14deg)}}' +
    '.spotL{transform-box:view-box;transform-origin:60px 20px;animation:sweepL 4s ease-in-out infinite}' +
    '.spotR{transform-box:view-box;transform-origin:340px 20px;animation:sweepR 4s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}' +
    '.bob{animation:bob .7s ease-in-out infinite}.bob2{animation-delay:-.35s}' +
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
  const GOLD = "#f2c94c", MOON = "#8fb3ff", GRN = "#7cf29a";
  const RED3 = "#ee352e", GRN4 = "#00933c";
  const cloud = (x, y, s, cls) => '<g class="' + cls + '"><g opacity=".85" fill="#fff"><ellipse cx="' + x + '" cy="' + y + '" rx="' + 22 * s + '" ry="' + 8 * s + '"/><ellipse cx="' + (x + 12 * s) + '" cy="' + (y - 6 * s) + '" rx="' + 13 * s + '" ry="' + 9 * s + '"/></g></g>';

  /* 1. Crown Heights–Utica Av: underground under Eastern Parkway, the 3 pulling in on the local track */
  function train() {
    let tiles = "";
    for (let y = 18; y < 120; y += 8) for (let x = (y / 8) % 2 ? 0 : 6; x < 400; x += 12) tiles += '<rect x="' + x + '" y="' + y + '" width="11" height="7" fill="#efe9da"/>';
    let cols = "";
    for (let x = 30; x < 400; x += 85) cols += '<rect x="' + x + '" y="14" width="9" height="180" fill="#1f2b3a"/><rect x="' + (x - 2) + '" y="14" width="13" height="6" fill="#16202c"/>';
    let lamps = "";
    for (let x = 20; x < 400; x += 95) lamps += '<rect x="' + x + '" y="6" width="54" height="5" rx="2" fill="#fffbe6" class="flk' + (x % 190 ? " flk2" : "") + '"/>';
    let windows = "";
    for (let x = 22; x < 270; x += 50) windows += '<rect x="' + x + '" y="134" width="32" height="20" rx="3" fill="#fff4cc" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#171513"/>' +
      '<rect x="0" y="14" width="400" height="110" fill="#d3ccb8"/>' + tiles +
      '<rect x="0" y="96" width="400" height="10" fill="#2a4f7a"/><path d="M0 98h400M0 104h400" stroke="' + GOLD + '" stroke-width="1"/>' +
      '<rect x="0" y="0" width="400" height="14" fill="#100f0d"/>' + lamps + cols +
      '<rect x="44" y="40" width="312" height="32" rx="4" fill="#111"/>' +
      '<rect x="44" y="40" width="312" height="4" fill="#fff"/>' +
      '<text x="56" y="64" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">Crown Heights–Utica Av</text>' +
      bullet(306, 58, "3", RED3) + bullet(332, 58, "4", GRN4) +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="162" width="300" height="5" fill="' + RED3 + '"/>' + windows +
        '<rect x="285" y="134" width="16" height="20" rx="3" fill="#fff4cc" opacity=".9"/>' +
        '<circle cx="300" cy="174" r="4" fill="#fff6c2"/>' +
        bullet(296, 141, "3", RED3) +
      '</g>' +
      '<rect x="0" y="184" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#33302c"/>' +
      '<path d="M0 194h400" stroke="#9a9286" stroke-width="2"/>' +
      tag("BOOT CAMP", 22, 240, 30, GOLD, -5) + tag("BLACK MOON", 222, 242, 26, MOON, -7),
      "");
  }

  /* 2. The Bedford-Union Armory on Union St: red-brick castle front, crenellated towers, the big arch, the drill-shed roof, a flag up top */
  function armory() {
    let bricks = "";
    for (let y = 92; y < 206; y += 7) for (let x = (y / 7) % 2 ? 40 : 47; x < 360; x += 14) bricks += '<rect x="' + x + '" y="' + y + '" width="13" height="6" fill="#9c3f2c" opacity=".55"/>';
    const tower = (x) => {
      let c = '<rect x="' + x + '" y="62" width="58" height="144" fill="#a8462f"/>';
      for (let i = 0; i < 5; i++) c += '<rect x="' + (x - 2 + i * 13) + '" y="52" width="9" height="12" fill="#a8462f"/>';
      c += '<rect x="' + (x - 3) + '" y="62" width="64" height="5" fill="#d9c9a8"/>';
      for (const y of [82, 122]) c += '<rect x="' + (x + 22) + '" y="' + y + '" width="14" height="24" fill="#2a2f3a"/><path d="M' + (x + 22) + ' ' + y + 'q7-8 14 0" fill="#d9c9a8"/>';
      return c;
    };
    let merlons = "";
    for (let x = 98; x < 300; x += 16) merlons += '<rect x="' + x + '" y="84" width="10" height="10" fill="#a8462f"/>';
    let wins = "";
    for (const x of [112, 136, 248, 272]) wins += '<rect x="' + x + '" y="112" width="14" height="22" fill="#2a2f3a"/><rect x="' + x + '" y="150" width="14" height="22" fill="#2a2f3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#b2)"/>' +
      cloud(40, 34, 1, "cloud") + cloud(200, 22, .8, "cloud cloud2") +
      /* the arched drill-shed roof behind */
      '<path d="M70 94q130-58 260 0z" fill="#5b6470"/><path d="M90 94q110-44 220 0" fill="none" stroke="#7c8692" stroke-width="2"/>' +
      '<rect x="96" y="94" width="208" height="112" fill="#a8462f"/>' + merlons +
      tower(40) + tower(302) + '<g>' + bricks + '</g>' +
      '<rect x="96" y="94" width="208" height="4" fill="#d9c9a8"/>' + wins +
      /* the great arch */
      '<path d="M166 206v-56q34-40 68 0v56z" fill="#d9c9a8"/><path d="M174 206v-52q26-30 52 0v52z" fill="#3a2a22"/>' +
      '<path d="M200 128v78" stroke="#5a4636" stroke-width="2"/>' +
      '<rect x="160" y="100" width="80" height="14" fill="#d9c9a8"/>' +
      '<text x="200" y="111" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="2" fill="#6a3a2a">ARMORY</text>' +
      /* flag on the tower */
      '<rect x="68" y="18" width="2" height="36" fill="#333"/><g class="flag"><rect x="70" y="18" width="26" height="15" fill="#f4efe6"/><rect x="70" y="18" width="26" height="5" fill="#2a4f7a"/><rect x="70" y="28" width="26" height="5" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="206" width="400" height="54" fill="#9a9488"/><rect x="0" y="236" width="400" height="24" fill="#3a3a3e"/>' +
      '<path d="M0 248h400" stroke="#d8d4c8" stroke-width="2" stroke-dasharray="16 14"/>' +
      '<rect x="26" y="214" width="120" height="16" rx="2" fill="#5b3b1f"/><text x="86" y="226" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">UNION ST · CROWN HEIGHTS</text>',
      sky("b2", "#5aa6e8", "#d7ecfb"));
  }

  /* 3. The Brooklyn Children's Museum in Brower Park (St. Marks Av & Brooklyn Av): the low curvy building in yellow tile, the park trees, clouds going by */
  function moon() {
    let tile = "";
    for (let y = 120; y < 204; y += 8) for (let x = 40; x < 360; x += 8) if (((x * 3 + y) / 8) % 5 === 0) tile += '<rect x="' + x + '" y="' + y + '" width="7" height="7" fill="#f8d94a"/>';
    const tree = (x, y, r) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="' + (206 - y) + '" fill="#4a3220"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#3f7a3a"/><circle cx="' + (x + r * .4) + '" cy="' + (y - r * .3) + '" r="' + r * .6 + '" fill="#4f8f45"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#b3)"/>' + cloud(80, 34, 1, "cloud") + cloud(260, 24, .8, "cloud cloud2") +
      tree(20, 120, 28) + tree(380, 116, 30) +
      /* curving yellow-tile body */
      '<path d="M40 204V128Q40 104 70 104H250Q300 104 330 126Q360 150 360 180V204z" fill="#f2c230"/>' + '<g clip-path="url(#bcm)">' + tile + '</g>' +
      '<path d="M40 128Q40 104 70 104H250Q300 104 330 126Q360 150 360 180" fill="none" stroke="#c99a1a" stroke-width="4"/>' +
      /* glass band and entry */
      '<path d="M60 150H250Q290 150 316 166Q336 178 340 196H60z" fill="#2a4a6a" opacity=".85"/>' +
      [90, 130, 170, 210, 250, 290].map(x => '<path d="M' + x + ' 150V196" stroke="#f2c230" stroke-width="3"/>').join("") +
      '<rect x="150" y="160" width="40" height="44" fill="#cfe6ff" opacity=".7"/>' +
      '<rect x="60" y="112" width="202" height="22" rx="3" fill="#1a1a22"/>' +
      '<text x="161" y="128" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#f8d94a">BROOKLYN CHILDREN\'S MUSEUM</text>' +
      '<rect x="300" y="60" width="3" height="60" fill="#ddd"/><g class="flag"><rect x="303" y="62" width="26" height="16" fill="' + GRN + '"/></g>' +
      '<rect x="0" y="204" width="400" height="56" fill="#4f8a3a"/><rect x="0" y="226" width="400" height="34" fill="#8a8578"/>' +
      tag("BUCKSHOT", 16, 252, 20, GOLD, -3) +
      '<text x="200" y="56" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#1a1a22">BROWER PARK · ST. MARKS AV &amp; BROOKLYN AV</text>',
      sky("b3", "#8fc3ea", "#f6e7c6") + '<clipPath id="bcm"><path d="M40 204V128Q40 104 70 104H250Q300 104 330 126Q360 150 360 180V204z"/></clipPath>');
  }

  /* 4. St. John's Recreation Center (Prospect Pl & Schenectady Av, Crown Heights): the brick rec center, big arched windows on the pool, the flag moving */
  function stage() {
    let bricks = "";
    for (let y = 60; y < 206; y += 10) for (let x = (y / 10) % 2 ? 40 : 52; x + 22 <= 360; x += 24) bricks += '<rect x="' + x + '" y="' + y + '" width="22" height="8" fill="#9a4a34"/>';
    const arch = (x) => '<path d="M' + x + ' 186V120a26 26 0 0 1 52 0v66z" fill="#2a4a6a" stroke="#e8dcc0" stroke-width="4"/><path d="M' + (x + 26) + ' 94V186M' + x + ' 140h52" stroke="#e8dcc0" stroke-width="2"/>' +
      '<path class="tw tw' + (x % 3 + 1) + '" d="M' + (x + 6) + ' 172q10-4 20 0t20 0" stroke="#7fd0f0" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#b4)"/>' + cloud(300, 30, .9, "cloud") +
      '<rect x="40" y="56" width="320" height="150" fill="#b0583e"/>' + bricks +
      '<rect x="34" y="48" width="332" height="10" fill="#e8dcc0"/><rect x="34" y="200" width="332" height="6" fill="#e8dcc0"/>' +
      arch(56) + arch(122) + arch(226) + arch(292) +
      '<rect x="186" y="132" width="28" height="74" fill="#3a2a22"/><rect x="180" y="126" width="40" height="6" fill="#e8dcc0"/>' +
      '<rect x="96" y="64" width="208" height="22" rx="2" fill="#1f5a3a"/>' +
      '<text x="200" y="79" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="1" fill="#fff">ST. JOHN\'S RECREATION CENTER</text>' +
      '<rect x="356" y="10" width="3" height="46" fill="#ddd"/><g class="flag"><rect x="359" y="12" width="28" height="17" fill="#fff"/><rect x="359" y="12" width="12" height="9" fill="#3a4a8a"/>' + [0, 1, 2, 3].map(i => '<rect x="371" y="' + (12 + i * 4.3) + '" width="16" height="2.2" fill="#c8102e"/>').join("") + '</g>' +
      '<rect x="0" y="206" width="400" height="14" fill="#a8a296"/><rect x="0" y="220" width="400" height="40" fill="#2b2b33"/>' +
      tag("BOOT CAMP", 14, 250, 22, GRN, -4) + tag("BUCKSHOT", 290, 252, 20, GOLD, -3) +
      '<text x="200" y="30" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#1a1a22">PROSPECT PL &amp; SCHENECTADY AV</text>',
      sky("b4", "#8fc3ea", "#f6e7c6"));
  }
  /* 5. Utica Av and St Johns Pl, a block off the station: green street signs, a streetlight, the tag wall */
  function corner() {
    let bricks = "";
    for (let y = 72; y < 220; y += 12) for (let x = (y / 12) % 2 ? 22 : 36; x + 26 <= 250; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="10" fill="#4a2c2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#b5)"/>' +
      '<circle cx="370" cy="34" r="14" fill="#0a0c18" stroke="' + MOON + '" stroke-width="2" class="glow"/>' +
      '<rect x="20" y="70" width="230" height="150" fill="#38201e"/>' + bricks +
      tag("BUCKSHOT", 30, 132, 34, GOLD, -6) + tag("BOOT CAMP", 40, 178, 26, GRN, -4) + tag("DUCK DOWN", 112, 208, 20, MOON, -8) +
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      '<rect x="270" y="88" width="66" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="101" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Utica Av</text>' +
      '<rect x="262" y="110" width="82" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="303" y="123" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">St Johns Pl</text>' +
      '<rect x="0" y="220" width="400" height="40" fill="#7d7b75"/><path d="M0 222h400" stroke="#a5a39b" stroke-width="2"/>',
      sky("b5", "#070915", "#1c2440"));
  }

  window.SCENES = { train, armory, moon, stage, corner };
})();
