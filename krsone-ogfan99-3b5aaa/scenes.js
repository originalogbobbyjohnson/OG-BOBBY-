/* South Bronx opening scenes for the KRS-One game: the Teacha, Boogie Down Productions, Edutainment, Stop the Violence.
   149 St-Grand Concourse under the Concourse, the Bronx General Post Office, the Hostos skybridge over the Concourse,
   a peace jam in Franz Sigel Park, and the corner of E 149 St and the Grand Concourse. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes car{from{transform:translateX(-120px)}to{transform:translateX(520px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes carL{from{transform:translateX(520px)}to{transform:translateX(-140px)}}' +
    '.carL{animation:carL 8s linear infinite}' +
    '@keyframes wave{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(5deg) scaleX(.94)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}' +
    '@keyframes fly{0%{transform:translate(-40px,30px)}100%{transform:translate(460px,-40px)}}' +
    '.dove{animation:fly 9s linear infinite}.dove2{animation-delay:-3s}.dove3{animation-delay:-6s}' +
    '@keyframes flap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}' +
    '.wing{transform-box:fill-box;transform-origin:50% 100%;animation:flap .5s ease-in-out infinite}' +
    '@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(.86)}}' +
    '.woof{transform-box:fill-box;transform-origin:center;animation:pulse .46s ease-in-out infinite}' +
    '@keyframes marq{from{transform:translateX(0)}to{transform:translateX(-300px)}}' +
    '.marq{animation:marq 7s linear infinite}' +
    '@keyframes note{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
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
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const CYAN = "#38e8ff", GOLD = "#ffd23f", RED = "#ff4f5e", RED2 = "#ee352e", GREEN = "#00933c";

  /* 1. The 4 pulling into 149 St-Grand Concourse, underground beneath the Concourse: white tile, mosaic band, I-beam columns */
  function train() {
    let tile = "";
    for (let y = 0; y < 116; y += 8) tile += '<path d="M0 ' + y + 'h400" stroke="#cfd3d6" stroke-width=".6"/>';
    for (let x = 0; x < 400; x += 14) tile += '<path d="M' + x + ' 0v116" stroke="#cfd3d6" stroke-width=".6"/>';
    let cols = "";
    let colsTop = "";
    for (let x = 30; x < 400; x += 85) { colsTop += '<rect x="' + (x - 5) + '" y="0" width="10" height="120" fill="#1e5a3a"/><rect x="' + (x - 8) + '" y="0" width="16" height="6" fill="#174a2f"/>';
      cols += '<rect x="' + (x - 5) + '" y="116" width="10" height="84" fill="#1e5a3a"/><rect x="' + (x - 8) + '" y="194" width="16" height="6" fill="#174a2f"/>'; }
    let windows = "";
    for (let x = 18; x < 260; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#ffe9b0" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#eceae2"/>' + tile +
      /* mosaic band: green and buff, like the old IRT bands */
      '<rect x="0" y="104" width="400" height="12" fill="#2f6b4a"/><path d="M0 110h400" stroke="#d9b56a" stroke-width="3" stroke-dasharray="10 6"/>' +
      '<rect x="0" y="116" width="400" height="84" fill="#141414"/>' + colsTop +
      /* black station sign */
      '<rect x="40" y="26" width="320" height="58" rx="4" fill="#111"/><rect x="40" y="26" width="320" height="4" fill="#fff"/>' +
      '<text x="54" y="52" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">149 St-Grand Concourse</text>' +
      bullet(66, 69, "2", RED2) + bullet(92, 69, "4", GREEN) + bullet(118, 69, "5", GREEN) +
      '<text x="346" y="73" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#bbb">Uptown &amp; The Bronx</text>' +
      /* the 4 slides in */
      '<g class="anim-train">' +
        '<rect x="8" y="124" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="5" fill="' + GREEN + '"/>' + windows +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' + bullet(294, 145, "4", GREEN) +
      '</g>' + cols +
      /* platform edge */
      '<rect x="0" y="200" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5a5d61"/>' +
      '<path d="M0 230h400" stroke="#4a4d51" stroke-width="2"/>' +
      tag("BDP", 26, 248, 28, CYAN, -5) + tag("BOOGIE DOWN", 220, 250, 22, GOLD, -4));
  }

  /* 2. The Bronx General Post Office, Grand Concourse at 149th (1937): buff brick, tall arched windows, granite base, the flag flying */
  function postoffice() {
    let arches = "";
    for (let i = 0; i < 9; i++) {
      const x = 52 + i * 34;
      arches += '<path d="M' + x + ' 196v-62a12 12 0 0 1 24 0v62z" fill="#2c3e52" stroke="#e9dcc0" stroke-width="2"/>' +
        '<path d="M' + (x + 12) + ' 124v72M' + x + ' 160h24" stroke="#e9dcc0" stroke-width="1.2"/>' +
        '<path class="flk' + (i % 2 ? " flk2" : "") + '" d="M' + (x + 2) + ' 196v-30h20v30z" fill="#ffd98a" opacity=".35"/>';
    }
    let brick = "";
    for (let y = 104; y < 200; y += 6) brick += '<path d="M40 ' + y + 'h320" stroke="#b9925f" stroke-width=".6" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g2)"/>' +
      '<circle cx="64" cy="44" r="18" fill="#fff2c4" opacity=".9"/>' +
      /* flagpole + waving flag (moving) */
      '<rect x="198" y="28" width="3" height="70" fill="#d9d9d9"/><circle cx="199.5" cy="27" r="3" fill="#e8c35a"/>' +
      '<g class="flag"><rect x="201" y="32" width="40" height="24" fill="#b22234"/>' +
        '<path d="M201 35.7h40M201 43.1h40M201 50.5h40" stroke="#fff" stroke-width="3.7"/><rect x="201" y="32" width="17" height="13" fill="#3c3b6e"/></g>' +
      /* building: buff brick body, granite base, cornice */
      '<rect x="40" y="100" width="320" height="100" fill="#d4b083"/>' + brick +
      '<rect x="34" y="94" width="332" height="8" fill="#e9dcc0"/>' +
      '<rect x="40" y="198" width="320" height="14" fill="#a9a59c"/>' +
      arches +
      '<rect x="120" y="108" width="160" height="12" fill="#e9dcc0"/>' +
      '<text x="200" y="117.5" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="8.5" letter-spacing="2" fill="#5b4a33">BRONX GENERAL POST OFFICE</text>' +
      /* steps + the Concourse */
      '<rect x="150" y="212" width="100" height="5" fill="#bdb8ad"/><rect x="140" y="217" width="120" height="5" fill="#c9c4b9"/>' +
      '<rect x="0" y="222" width="400" height="38" fill="#2a2d33"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      /* a mail truck rolling by (plain, no logo) */
      '<g class="car"><rect x="0" y="222" width="54" height="26" rx="3" fill="#f2f2f2"/><rect x="0" y="236" width="54" height="3" fill="#2b5fae"/><rect x="0" y="236" width="54" height="1.5" fill="#d12f2f"/>' +
        '<rect x="40" y="226" width="12" height="9" fill="#9fc6e8"/><circle cx="12" cy="250" r="5" fill="#111"/><circle cx="44" cy="250" r="5" fill="#111"/></g>' +
      tag("EDUTAINMENT", 230, 82, 18, CYAN, -5),
      sky("g2", "#8fc4ea", "#f3d9a8"));
  }

  /* 3. The Teacha: Hostos Community College's glass skybridge over the Grand Concourse, a lesson scrolling inside, traffic below */
  function hostos() {
    let winL = "", winR = "";
    for (let y = 40; y < 196; y += 18) for (let x = 12; x < 92; x += 20) winL += '<rect x="' + x + '" y="' + y + '" width="14" height="11" fill="' + ((x + y) % 3 ? "#9ad7f0" : "#ffe9a6") + '" opacity=".8"/>';
    for (let y = 52; y < 196; y += 18) for (let x = 312; x < 392; x += 20) winR += '<rect x="' + x + '" y="' + y + '" width="14" height="11" fill="' + ((x + y) % 4 ? "#9ad7f0" : "#ffe9a6") + '" opacity=".8"/>';
    let mull = "";
    for (let x = 108; x < 300; x += 16) mull += '<path d="M' + x + ' 90v44" stroke="#4d5a66" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g3)"/>' + stars(12) +
      /* the two buildings */
      '<rect x="0" y="30" width="100" height="180" fill="#b7b2a6"/><rect x="0" y="30" width="100" height="6" fill="#8d887c"/>' + winL +
      '<rect x="300" y="42" width="100" height="168" fill="#c3a97f"/><rect x="300" y="42" width="100" height="6" fill="#9c845e"/>' + winR +
      /* glass bridge */
      '<rect x="100" y="86" width="200" height="52" fill="#1b3446"/>' +
      '<rect x="100" y="90" width="200" height="44" fill="#4aa3c9" opacity=".55"/>' +
      '<clipPath id="bc"><rect x="102" y="96" width="196" height="30"/></clipPath>' +
      '<g clip-path="url(#bc)"><g class="marq"><text x="104" y="117" font-family="Anton, Impact, sans-serif" font-size="16" letter-spacing="2" fill="#fffbe6">KNOWLEDGE REIGNS SUPREME · EDUTAINMENT · KNOWLEDGE REIGNS SUPREME · EDUTAINMENT ·</text></g></g>' +
      mull + '<rect x="100" y="84" width="200" height="5" fill="#d0d6dc"/><rect x="100" y="135" width="200" height="5" fill="#d0d6dc"/>' +
      '<rect x="150" y="62" width="100" height="18" rx="2" fill="#0d2233" stroke="' + CYAN + '" stroke-width="1.5"/>' +
      '<text x="200" y="75" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" letter-spacing="3" fill="' + CYAN + '">HOSTOS</text>' +
      /* the Concourse under the bridge */
      '<rect x="0" y="210" width="400" height="50" fill="#22252b"/><path d="M0 234h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="214" width="46" height="16" rx="4" fill="' + RED + '"/><rect x="8" y="208" width="26" height="9" rx="3" fill="' + RED + '"/><circle cx="10" cy="231" r="4.5" fill="#111"/><circle cx="36" cy="231" r="4.5" fill="#111"/></g>' +
      '<g class="carL"><rect x="0" y="238" width="50" height="16" rx="4" fill="#f4c430"/><rect x="10" y="232" width="28" height="9" rx="3" fill="#f4c430"/><circle cx="12" cy="255" r="4.5" fill="#111"/><circle cx="40" cy="255" r="4.5" fill="#111"/></g>' +
      tag("THE TEACHA", 128, 186, 24, GOLD, -5),
      sky("g3", "#0c1630", "#3b5a86"));
  }

  /* 4. Stop the Violence: a peace jam in Franz Sigel Park, the mural wall, the speakers pumping, doves flying over */
  function peace() {
    const dove = (cls, y) => '<g class="dove ' + cls + '"><g transform="translate(0 ' + y + ')"><path d="M0 8q10-6 22 0q-6 6-16 4z" fill="#fff"/><path class="wing" d="M6 6q6-12 14-10q-4 6-8 10z" fill="#f2f2f2"/><path d="M22 8l5-2-4 4z" fill="#f4b23e"/></g></g>';
    const spk = (x) => '<rect x="' + x + '" y="150" width="46" height="70" rx="3" fill="#18181b" stroke="#333" stroke-width="2"/>' +
      '<circle class="woof" cx="' + (x + 23) + '" cy="196" r="15" fill="#2c2c30" stroke="#555" stroke-width="2"/><circle cx="' + (x + 23) + '" cy="196" r="5" fill="#555"/>' +
      '<circle cx="' + (x + 23) + '" cy="164" r="7" fill="#2c2c30" stroke="#555" stroke-width="1.5"/>';
    let trees = "";
    [[20, 120], [370, 112]].forEach(([x, y]) => trees += '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="90" fill="#3b2a1e"/><circle cx="' + x + '" cy="' + (y - 4) + '" r="26" fill="#2f7d45"/><circle cx="' + (x + 14) + '" cy="' + (y + 10) + '" r="18" fill="#3c9455"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#g4)"/>' + trees +
      /* the mural wall */
      '<rect x="72" y="56" width="256" height="150" fill="#f3efe4"/>' +
      '<rect x="72" y="56" width="256" height="150" fill="none" stroke="#c9c2b2" stroke-width="3"/>' +
      '<path d="M72 150q64-30 128 0t128 0v56h-256z" fill="' + CYAN + '" opacity=".35"/>' +
      '<circle cx="200" cy="108" r="34" fill="none" stroke="' + RED + '" stroke-width="7"/><path d="M200 74v68M200 108l-24 24M200 108l24 24" stroke="' + RED + '" stroke-width="7" stroke-linecap="round"/>' +
      '<text x="200" y="176" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="19" letter-spacing="1" fill="#111">STOP THE VIOLENCE</text>' +
      '<text x="200" y="194" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" letter-spacing="1.5" fill="#444">MOVEMENT · PEACE · LOVE · UNITY</text>' +
      /* the sound system */
      spk(16) + spk(338) +
      '<g fill="' + GOLD + '"><text class="note" x="118" y="150" font-size="18">♪</text><text class="note note2" x="268" y="148" font-size="16">♫</text><text class="note note3" x="200" y="60" font-size="14">♪</text></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#5f8a4a"/><rect x="0" y="220" width="400" height="5" fill="#4a7339"/>' +
      dove("", 40) + dove("dove2", 20) + dove("dove3", 54),
      sky("g4", "#78b7e6", "#d7ecf7"));
  }

  /* 5. E 149 St and the Grand Concourse: street signs, streetlight, the tag wall */
  function corner() {
    let brick = "";
    for (let y = 60; y < 220; y += 12) for (let x = (y / 12) % 2 ? 4 : 20; x < 250; x += 32) brick += '<rect x="' + x + '" y="' + y + '" width="30" height="10" fill="#6b3b2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(16) +
      '<rect x="4" y="60" width="250" height="160" fill="#55301f"/>' + brick +
      tag("KRS-ONE", 22, 134, 40, CYAN, -7) + tag("BDP", 40, 184, 30, GOLD, -4) + tag("PEACE", 150, 196, 24, RED, -6) +
      /* streetlight */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      sign(270, 88, 66, "E 149 St") + sign(258, 110, 104, "Grand Concourse") +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0b1020", "#26365a"));
  }

  window.SCENES = { train, postoffice, hostos, peace, corner };
})();
