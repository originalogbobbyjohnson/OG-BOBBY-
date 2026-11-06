/* Grand Daddy I.U. game (NYC map, Long Island: Hempstead, where Ayub Bey came up after Queens; RIP 1968-2022).
   The LIRR Hempstead Branch pulling into Country Life Press (the stop right at the Hempstead line), Hempstead High School (where he formed
   the Everlasting Four), Kennedy Memorial Park's pond in the village, the tailor's window (the Smooth Assassin's suit and tie),
   and Front St & Clinton St with the white 1822 church steeple behind. 400 x 260 SVGs. All classes prefixed gd-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes gdcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.gd-car{animation:gdcar 7s linear infinite}.gd-car2{animation-delay:-3.5s}' +
    '@keyframes gdblink{0%,100%{opacity:.25}50%{opacity:1}}.gd-bl{animation:gdblink 1.8s ease-in-out infinite}.gd-bl2{animation-delay:.6s}.gd-bl3{animation-delay:1.2s}' +
    '@keyframes gdflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.gd-flk{animation:gdflick 2.6s infinite}' +
    '@keyframes gdwave{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.gd-flag{transform-box:fill-box;transform-origin:0% 50%;animation:gdwave 1.4s ease-in-out infinite}' +
    '@keyframes gdbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.gd-bob{animation:gdbob .6s ease-in-out infinite}.gd-bob2{animation-delay:.3s}' +
    '@keyframes gdfount{0%,100%{transform:scaleY(.6)}50%{transform:scaleY(1)}}.gd-ft{transform-box:fill-box;transform-origin:50% 100%;animation:gdfount 1.2s ease-in-out infinite}' +
    '@keyframes gdswim{0%,100%{transform:translateX(0)}50%{transform:translateX(26px)}}.gd-swim{animation:gdswim 6s ease-in-out infinite}.gd-swim2{animation-delay:-3s}' +
    '@keyframes gdripple{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.6);opacity:0}}.gd-rip{transform-box:fill-box;transform-origin:50% 50%;animation:gdripple 2.4s linear infinite}.gd-rip2{animation-delay:-1.2s}' +
    '@keyframes gdneedle{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}.gd-ndl{animation:gdneedle .25s linear infinite}' +
    '@keyframes gdsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.gd-sway{transform-box:fill-box;transform-origin:50% 0%;animation:gdsway 2.4s ease-in-out infinite}' +
    '@keyframes gdspot{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.gd-spot{transform-box:fill-box;transform-origin:50% 0%;animation:gdspot 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 53) % 34) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#e8c07a", PURP = "#7b5cff", TEAL = "#4fd1c5", CREAM = "#f4ead8", LIRR = "#0039a6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';

  /* 1. Country Life Press on the LIRR Hempstead Branch: at-grade platform, the little station house, the silver train with the blue stripe sliding in */
  function clp() {
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="112" width="22" height="18" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' +
      '<circle cx="66" cy="44" r="20" fill="#ffe7a8" opacity=".9"/>' +
      /* trees behind (Garden City side) */
      [20, 70, 130, 330, 380].map((x, i) => '<circle cx="' + x + '" cy="' + (96 - (i % 2) * 8) + '" r="' + (22 + (i % 2) * 6) + '" fill="#2f5d3a"/>').join("") +
      /* station house */
      '<rect x="300" y="72" width="96" height="62" fill="#a4553a"/><path d="M292 74l56 -26l56 26z" fill="#3b2f2a"/>' +
      '<rect x="316" y="96" width="18" height="24" fill="#2a1d16"/><rect class="gd-bl" x="346" y="92" width="34" height="18" fill="#ffd98a" opacity=".6"/>' +
      /* platform sign */
      '<rect x="40" y="56" width="236" height="30" rx="3" fill="#111"/><rect x="40" y="56" width="236" height="3" fill="#fff"/>' +
      '<text x="54" y="77" ' + font + ' font-size="14" fill="#fff">Country Life Press</text>' +
      '<rect x="222" y="63" width="44" height="17" rx="3" fill="' + LIRR + '"/>' + txt("LIRR", 244, 76, 11, "#fff") +
      [60, 260].map(x => '<rect x="' + (x - 3) + '" y="86" width="6" height="16" fill="#333"/>').join("") +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="50" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="108" width="16" height="22" rx="2" fill="#cfe2f5"/>' +
        '<rect x="10" y="136" width="300" height="5" fill="' + LIRR + '"/><rect x="10" y="141" width="300" height="2" fill="#5b2a86"/>' +
        '<circle cx="300" cy="146" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="152" width="400" height="8" fill="#eab308"/><rect x="0" y="160" width="400" height="44" fill="#77736b"/>' +
      person(330, 150, "#1b1b1b", "gd-bob") + person(354, 152, "#2a2530", "gd-bob gd-bob2") +
      /* rails */
      '<rect x="0" y="204" width="400" height="56" fill="#3b3833"/><path d="M0 220h400M0 240h400" stroke="#9aa0a6" stroke-width="3"/>' +
      (() => { let s = ""; for (let x = 0; x < 400; x += 18) s += '<rect x="' + x + '" y="214" width="8" height="32" fill="#4e463c"/>'; return s; })() +
      txt("HEMPSTEAD BRANCH", 200, 196, 11, CREAM, 'letter-spacing="3"'),
      sky("gc", "#f3a86b", "#5a3a6a"));
  }

  /* 2. Hempstead High School: long brick front, the name over the doors, flag waving, kids out front, a talent-show spotlight sweeping */
  function hhs() {
    let wins = "";
    for (let x = 34; x < 360; x += 34) for (const y of [96, 130]) wins += '<rect class="gd-bl gd-bl' + ((x / 34 | 0) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="22" height="22" fill="#ffd98a" opacity=".5"/>';
    let brick = "";
    for (let y = 84; y < 200; y += 8) for (let x = (y / 8) % 2 ? 18 : 10; x < 374; x += 16) brick += '<rect x="' + x + '" y="' + y + '" width="14" height="6" fill="#8d3f2c"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gh)"/>' + stars(10) +
      '<path class="gd-spot" d="M200 0l-40 120h80z" fill="#fff6c2" opacity=".14"/>' +
      '<rect x="10" y="80" width="380" height="120" fill="#9a4a32"/>' + brick +
      '<rect x="6" y="74" width="388" height="8" fill="#e8dcc4"/>' + wins +
      /* entrance */
      '<rect x="150" y="150" width="100" height="50" fill="#e8dcc4"/><rect x="162" y="158" width="34" height="42" fill="#1e2c40"/><rect x="204" y="158" width="34" height="42" fill="#1e2c40"/>' +
      '<rect x="110" y="56" width="180" height="20" fill="#e8dcc4"/>' + txt("HEMPSTEAD HIGH SCHOOL", 200, 71, 11, "#3a2a20", 'letter-spacing="1"') +
      /* flag */
      '<rect x="356" y="18" width="3" height="62" fill="#ccc"/><g class="gd-flag"><rect x="359" y="20" width="30" height="18" fill="#b22234"/><rect x="359" y="24" width="30" height="3" fill="#fff"/><rect x="359" y="31" width="30" height="3" fill="#fff"/><rect x="359" y="20" width="12" height="9" fill="#3c3b6e"/></g>' +
      /* lawn + path */
      '<rect x="0" y="200" width="400" height="60" fill="#3f7a3a"/><path d="M176 200l-20 60h88l-20 -60z" fill="#b9b3a6"/>' +
      person(70, 212, "#1b1b22", "gd-bob") + person(92, 214, "#2a2530", "gd-bob gd-bob2") + person(114, 212, "#211c1c", "gd-bob") + person(136, 214, "#2b2b33", "gd-bob gd-bob2") +
      tag("EVERLASTING 4", 262, 240, 18, GOLD, -4),
      sky("gh", "#14122a", "#3d2b52"));
  }

  /* 3. Kennedy Memorial Park in the village: the pond, the fountain going, ducks drifting, the gazebo, lamps on */
  function kennedy() {
    return svg(
      '<rect width="400" height="260" fill="url(#gk)"/>' +
      [30, 90, 160, 300, 370].map((x, i) => '<circle cx="' + x + '" cy="' + (104 - (i % 2) * 10) + '" r="' + (30 + (i % 3) * 6) + '" fill="' + (i % 2 ? "#2e6a37" : "#3a7d40") + '"/>').join("") +
      '<rect x="0" y="110" width="400" height="150" fill="#4b8a44"/>' +
      /* gazebo */
      '<rect x="296" y="96" width="70" height="6" fill="#f2efe6"/><path d="M290 98l41 -26l41 26z" fill="#2f4a3a"/>' +
      [300, 318, 336, 354].map(x => '<rect x="' + x + '" y="102" width="5" height="34" fill="#f2efe6"/>').join("") + '<rect x="292" y="134" width="78" height="6" fill="#f2efe6"/>' +
      /* pond */
      '<ellipse cx="170" cy="190" rx="160" ry="46" fill="#3a7fa8"/><ellipse cx="170" cy="186" rx="140" ry="36" fill="#4c95bd"/>' +
      '<ellipse class="gd-rip" cx="170" cy="190" rx="20" ry="6" fill="none" stroke="#e6f4ff" stroke-width="1.5"/><ellipse class="gd-rip gd-rip2" cx="170" cy="190" rx="20" ry="6" fill="none" stroke="#e6f4ff" stroke-width="1.5"/>' +
      '<rect class="gd-ft" x="166" y="150" width="8" height="38" rx="4" fill="#e6f4ff" opacity=".85"/><circle cx="160" cy="156" r="3" fill="#e6f4ff"/><circle cx="180" cy="158" r="3" fill="#e6f4ff"/>' +
      /* ducks */
      ['gd-swim', 'gd-swim gd-swim2'].map((c, i) => '<g class="' + c + '"><ellipse cx="' + (80 + i * 150) + '" cy="' + (196 + i * 8) + '" rx="9" ry="5" fill="#f5f0e1"/><circle cx="' + (88 + i * 150) + '" cy="' + (190 + i * 8) + '" r="4" fill="#2f6b3a"/><path d="M' + (91 + i * 150) + ' ' + (190 + i * 8) + 'l5 1l-5 1z" fill="#f2a33a"/></g>').join("") +
      /* lamps + bench */
      [40, 380].map(x => '<rect x="' + (x - 2) + '" y="120" width="4" height="60" fill="#222"/><circle class="gd-flk" cx="' + x + '" cy="118" r="5" fill="#fff4c8"/>').join("") +
      '<rect x="20" y="226" width="60" height="5" fill="#6b4a36"/><rect x="24" y="231" width="4" height="10" fill="#333"/><rect x="72" y="231" width="4" height="10" fill="#333"/>' +
      txt("KENNEDY MEMORIAL PARK", 200, 34, 12, CREAM, 'letter-spacing="3"'),
      sky("gk", "#8ec5ea", "#f6d9a8"));
  }

  /* 4. The tailor's window: the Smooth Assassin's look, a sharp double-breasted suit and tie on the form, a fedora, the sewing machine needle going */
  function suit() {
    const form = (x, col, tie) => '<g class="gd-sway"><rect x="' + (x - 2) + '" y="56" width="4" height="10" fill="#777"/>' +
      '<path d="M' + (x - 26) + ' 70q26 -10 52 0l6 86h-64z" fill="' + col + '"/>' +
      '<path d="M' + (x - 10) + ' 68l10 26l10 -26" fill="#f4ead8"/><path d="M' + (x - 3) + ' 74h6l-1 30l-2 4l-2 -4z" fill="' + tie + '"/>' +
      '<path d="M' + (x - 10) + ' 68l-6 30l16 -4M' + (x + 10) + ' 68l6 30l-16 -4" stroke="#00000055" stroke-width="2" fill="none"/>' +
      '<circle cx="' + (x - 6) + '" cy="124" r="2" fill="' + GOLD + '"/><circle cx="' + (x + 6) + '" cy="124" r="2" fill="' + GOLD + '"/><circle cx="' + (x - 6) + '" cy="136" r="2" fill="' + GOLD + '"/><circle cx="' + (x + 6) + '" cy="136" r="2" fill="' + GOLD + '"/>' +
      '<rect x="' + (x - 2) + '" y="156" width="4" height="22" fill="#777"/><rect x="' + (x - 14) + '" y="176" width="28" height="4" fill="#555"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' +
      /* store front */
      '<rect x="0" y="0" width="400" height="30" fill="#1b1622"/>' + txt("TAILORED · SUIT AND TIE", 200, 21, 13, GOLD, 'letter-spacing="3"') +
      '<rect x="14" y="36" width="372" height="160" fill="#2a2036" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<path d="M14 36h372v26H14z" fill="#3a2d4a"/>' +
      form(90, "#2b2b3a", "#b22234") + form(200, "#e8e0d0", PURP) + form(310, "#4a2f2a", TEAL) +
      /* fedoras on a shelf */
      '<rect x="130" y="48" width="140" height="4" fill="#5b4a3a"/>' +
      [150, 200, 250].map((x, i) => '<path d="M' + (x - 16) + ' 46q16 -4 32 0l-4 -4q0 -10 -12 -10q-12 0 -12 10z" fill="' + ["#111", "#7a5a3a", "#3b3b3b"][i] + '"/><rect x="' + (x - 12) + '" y="40" width="24" height="3" fill="' + GOLD + '"/>').join("") +
      /* sewing machine on the counter */
      '<rect x="0" y="196" width="400" height="64" fill="#3a2a22"/><rect x="0" y="196" width="400" height="5" fill="#5a4032"/>' +
      '<path d="M40 232h90v-24h-20v-10h-60v34z" fill="#1d1d22" stroke="' + GOLD + '" stroke-width="1.5"/><rect class="gd-ndl" x="58" y="226" width="2" height="10" fill="#ddd"/>' +
      '<path d="M140 238h80" stroke="' + PURP + '" stroke-width="3" stroke-dasharray="6 4"/>' +
      /* tape measure + gold chain */
      '<path d="M250 236q30 -14 60 0t60 0" stroke="#e8c07a" stroke-width="3" fill="none"/>' +
      txt("THE SMOOTH ASSASSIN", 300, 252, 10, CREAM, 'letter-spacing="2"'),
      sky("gs", "#120e18", "#2a1f33"));
  }

  /* 5. Front St & Clinton St in Hempstead: green signs, GRAND DADDY I.U. tagged on the wall, the white church steeple behind */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gx)"/>' + stars(18) +
      /* the old white church */
      '<rect x="120" y="96" width="120" height="50" fill="#f2efe6"/><path d="M112 98l68 -26l68 26z" fill="#d9d4c8"/>' +
      '<rect x="164" y="40" width="32" height="40" fill="#f2efe6"/><rect x="168" y="22" width="24" height="22" fill="#f2efe6"/><path d="M166 24l14 -22l14 22z" fill="#e8e3d8"/>' +
      '<circle cx="180" cy="56" r="6" fill="#3a3a44"/><path d="M180 52v4h3" stroke="#e8e3d8" stroke-width="1.2" fill="none"/>' +
      [136, 168, 208].map(x => '<rect class="gd-bl gd-bl' + (x % 3 + 1) + '" x="' + x + '" y="108" width="14" height="24" rx="7" fill="#ffd98a" opacity=".7"/>').join("") +
      '<rect x="0" y="118" width="110" height="28" fill="#2c2a38"/><rect x="250" y="110" width="150" height="36" fill="#2c2a38"/>' +
      /* the wall */
      '<rect x="0" y="134" width="400" height="92" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 144; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("GRAND DADDY I.U.", 12, 196, 36, GOLD, -5) + tag("SMOOTH ASSASSIN", 186, 222, 18, TEAL, -4) + tag("DADDY U", 24, 222, 16, CREAM, -3) +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="gd-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + PURP + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="62" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="296" y="66" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Front St", 346, 82, 12, "#fff") +
      '<rect x="296" y="92" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Clinton St", 346, 108, 12, "#fff") +
      '<circle class="gd-flk" cx="358" cy="58" r="4" fill="#fff6c2"/>',
      sky("gx", "#0a0c1a", "#2c2a44"));
  }

  window.SCENES = { clp: clp, hhs: hhs, kennedy: kennedy, suit: suit, corner: corner };
})();
