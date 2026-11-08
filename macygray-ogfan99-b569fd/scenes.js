/* macygray scenes (Regions tab: St. Louis + Ohio; Canton, Ohio - Natalie McIntyre, born 1967, Canton South High School senior in 1985).
   CSS classes prefixed mg- (the page's own anim-train is kept).
   1 A SARTA bus pulling into the Cornerstone Transit Center under its canopy in downtown Canton.
   2 Canton South High School: red brick, the Wildcats' sign, a CLASS OF '85 banner flapping.
   3 The Canton Palace Theatre on Market Ave N: the tall blade sign and the marquee with chasing bulbs.
   4 The McKinley National Memorial: the pink-granite domed rotunda up the long staircase on the hill, flags snapping, birds drifting.
   5 Market Ave N and Tuscarawas St at the square: green signs, MACY GRAY tagged on the wall, the Stark County Courthouse clock tower with its four gold trumpeting angels behind.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mgchase{0%,100%{opacity:1}50%{opacity:.25}}.mg-bulb{animation:mgchase .8s steps(1) infinite}.mg-b2{animation-delay:-.4s}' +
    '@keyframes mgglow{0%,100%{opacity:.6}50%{opacity:1}}.mg-glow{animation:mgglow 2.4s ease-in-out infinite}' +
    '@keyframes mgflap{0%,100%{transform:skewY(0)}50%{transform:skewY(3deg)}}.mg-flap{transform-box:fill-box;transform-origin:0 50%;animation:mgflap 1.6s ease-in-out infinite}' +
    '@keyframes mgbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.mg-bird{animation:mgbird 9s linear infinite}.mg-bd2{animation-delay:-4.5s}' +
    '@keyframes mgcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.mg-car{animation:mgcar 7s linear infinite}' +
    '@keyframes mgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mg-sp{animation:mgspray 1.4s ease-out infinite}.mg-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const LAV = "#d9a8ff", PINK = "#ff5fa2", GOLD = "#ffd23f", SIGN = "#0f6b3a", BRICK = "#9a3f2c", SARTA = "#0072bc";
  const bird = (x, y) => '<path d="M' + x + ' ' + y + 'q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="1.6" fill="none"/>';

  /* 1. SARTA bus into the Cornerstone Transit Center */
  function mgstation() {
    return svg(
      '<rect width="400" height="260" fill="url(#mgs1)"/>' +
      /* downtown behind */
      '<rect x="20" y="40" width="60" height="100" fill="#4a5568"/><rect x="90" y="60" width="50" height="80" fill="#5a6578"/><rect x="290" y="30" width="70" height="110" fill="#4a5568"/>' +
      [30, 50, 300, 320, 340].map(x => '<rect x="' + x + '" y="60" width="8" height="10" fill="#ffd27a" class="mg-glow"/>').join("") +
      /* canopy */
      '<path d="M0 74h400l-20 -14h-360z" fill="#c9ccd1"/><rect x="0" y="74" width="400" height="8" fill="#8c9096"/>' +
      [30, 130, 270, 370].map(x => '<rect x="' + (x - 3) + '" y="82" width="6" height="110" fill="#8c9096"/>').join("") +
      /* bus */
      '<g class="anim-train"><rect x="60" y="112" width="250" height="76" rx="10" fill="#f4f6f8" stroke="#6b7480" stroke-width="2"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (86 + i * 40) + '" y="122" width="32" height="26" rx="3" fill="#1d2733"/>').join("") +
      '<rect x="282" y="122" width="24" height="44" rx="3" fill="#1d2733"/><rect x="60" y="154" width="250" height="10" fill="' + SARTA + '"/><rect x="60" y="164" width="250" height="5" fill="#7cc242"/>' +
      '<rect x="268" y="114" width="40" height="8" fill="#111"/><text x="288" y="121" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb000">DOWNTOWN</text>' +
      '<circle cx="104" cy="190" r="11" fill="#222"/><circle cx="270" cy="190" r="11" fill="#222"/></g>' +
      /* curb + sign */
      '<rect x="0" y="198" width="400" height="10" fill="#bcb6aa"/><rect x="0" y="206" width="400" height="54" fill="#3a3a3e"/>' +
      '<rect x="64" y="214" width="272" height="36" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="78" y="230" ' + font + ' font-size="11" fill="#fff" letter-spacing="1">CORNERSTONE</text><text x="78" y="244" ' + font + ' font-size="11" fill="#fff" letter-spacing="1">TRANSIT CENTER</text>' +
      '<rect x="262" y="219" width="62" height="26" rx="13" fill="' + SARTA + '"/><text x="293" y="236" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">SARTA</text>',
      sky("mgs1", "#7fb2d9", "#e9d6b8"));
  }

  /* 2. Canton South High School */
  function mgschool() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="26" height="22" fill="#cfe3f2" stroke="#f3efe4" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mgs2)"/>' +
      '<rect x="30" y="70" width="340" height="130" fill="' + BRICK + '" stroke="#5a2216" stroke-width="2"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M30 ' + (80 + i * 10) + 'h340" stroke="#7a3020" stroke-width="1" opacity=".5"/>').join("") +
      '<rect x="24" y="62" width="352" height="10" fill="#e8e2d4"/>' +
      [50, 90, 130, 244, 284, 324].map(x => win(x, 86) + win(x, 140)).join("") +
      /* entrance */
      '<rect x="170" y="120" width="60" height="80" fill="#e8e2d4"/><rect x="180" y="136" width="40" height="64" fill="#3a2a1a"/><path d="M200 136v64" stroke="#e8e2d4" stroke-width="2"/>' +
      '<rect x="150" y="82" width="100" height="30" fill="#e8e2d4"/><text x="200" y="95" text-anchor="middle" ' + font + ' font-size="9" fill="#5a2216">CANTON SOUTH</text><text x="200" y="107" text-anchor="middle" ' + font + ' font-size="9" fill="#5a2216">HIGH SCHOOL</text>' +
      /* banner */
      '<g class="mg-flap"><rect x="250" y="50" width="96" height="22" fill="' + LAV + '" stroke="#5a2a7a" stroke-width="1.5"/><text x="298" y="65" text-anchor="middle" ' + font + ' font-size="10" fill="#2a103a">CLASS OF \'85</text></g>' +
      '<path d="M250 50v60" stroke="#555" stroke-width="2"/>' +
      /* lawn + sign */
      '<rect x="0" y="200" width="400" height="60" fill="#5d8a3a"/><rect x="186" y="200" width="28" height="60" fill="#bcb6aa"/>' +
      '<rect x="40" y="214" width="110" height="30" rx="3" fill="#e8e2d4" stroke="#555" stroke-width="1.5"/><text x="95" y="234" text-anchor="middle" ' + font + ' font-size="11" fill="#5a2216">GO WILDCATS</text>',
      sky("mgs2", "#8ec3e8", "#dfeaf2"));
  }

  /* 3. Canton Palace Theatre */
  function mgpalace() {
    const bulbs = (y, x0, x1) => Array.from({ length: Math.floor((x1 - x0) / 10) }, (_, i) => '<circle class="mg-bulb' + (i % 2 ? " mg-b2" : "") + '" cx="' + (x0 + 5 + i * 10) + '" cy="' + y + '" r="2.4" fill="#ffe27a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mgs3)"/>' +
      /* facade, Spanish style */
      '<rect x="60" y="40" width="280" height="160" fill="#d9c3a0" stroke="#8a6a4a" stroke-width="2"/>' +
      '<path d="M60 40l20 -16h240l20 16z" fill="#b5523a"/>' +
      [90, 150, 250, 310].map(x => '<path d="M' + (x - 12) + ' 110v-30q12 -14 24 0v30z" fill="#3a2a3a" stroke="#8a6a4a" stroke-width="2"/>').join("") +
      /* blade sign */
      '<rect x="184" y="8" width="32" height="118" rx="3" fill="#b3122e" stroke="#ffe27a" stroke-width="2"/>' +
      ["P", "A", "L", "A", "C", "E"].map((c, i) => '<text class="mg-glow" x="200" y="' + (30 + i * 18) + '" text-anchor="middle" ' + font + ' font-size="16" fill="#ffe27a">' + c + '</text>').join("") +
      /* marquee */
      '<path d="M90 126h220l-10 30h-200z" fill="#2a1a3a" stroke="#ffe27a" stroke-width="2"/>' + bulbs(130, 96, 304) + bulbs(152, 106, 294) +
      '<rect x="116" y="134" width="168" height="14" fill="#f7f3ea"/><text x="200" y="145" text-anchor="middle" ' + font + ' font-size="10" fill="#2a1a3a">CANTON PALACE · TONIGHT</text>' +
      /* doors */
      [140, 180, 220].map(x => '<rect x="' + x + '" y="166" width="34" height="34" fill="#5a3a2a" stroke="#ffe27a" stroke-width="1"/>').join("") +
      '<rect x="0" y="200" width="400" height="16" fill="#9a958c"/><rect x="0" y="216" width="400" height="44" fill="#2b2b2e"/><path d="M0 238h400" stroke="#e8c15a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="mg-car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + PINK + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#c7407a"/><circle cx="14" cy="244" r="6" fill="#111"/><circle cx="56" cy="244" r="6" fill="#111"/></g>' +
      '<text x="372" y="250" text-anchor="end" ' + font + ' font-size="9" fill="#fff">MARKET AVE N</text>',
      sky("mgs3", "#120a24", "#4a2a5a"));
  }

  /* 4. McKinley National Memorial on the hill */
  function mgmckinley() {
    return svg(
      '<rect width="400" height="260" fill="url(#mgs4)"/>' +
      '<g class="mg-bird">' + bird(40, 40) + bird(70, 54) + '</g><g class="mg-bird mg-bd2">' + bird(20, 30) + '</g>' +
      /* trees */
      [20, 60, 340, 380].map(x => '<circle cx="' + x + '" cy="120" r="30" fill="#3c6b3a"/>').join("") +
      /* rotunda + dome */
      '<rect x="140" y="84" width="120" height="50" fill="#c99a8a" stroke="#7a5446" stroke-width="2"/>' +
      '<path d="M146 84q54 -70 108 0z" fill="#d7aa98" stroke="#7a5446" stroke-width="2"/>' +
      '<path d="M170 84q30 -46 60 0" fill="none" stroke="#b5867a" stroke-width="1.5"/><rect x="194" y="30" width="12" height="8" fill="#b5867a"/>' +
      '<rect x="176" y="100" width="48" height="34" fill="#5a3a32"/><path d="M176 100h48" stroke="#e8d0c4" stroke-width="2"/>' +
      [150, 162, 238, 250].map(x => '<rect x="' + x + '" y="92" width="6" height="42" fill="#e8d0c4"/>').join("") +
      /* steps fanning down the hill */
      '<path d="M0 260v-60q100 -40 140 -66h120q40 26 140 66v60z" fill="#5d8a3a"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (170 - i * 4) + '" y="' + (134 + i * 10) + '" width="' + (60 + i * 8) + '" height="7" fill="#e3d2c6" stroke="#b8a296" stroke-width="1"/>').join("") +
      /* flags */
      '<path d="M120 140v-60M280 140v-60" stroke="#666" stroke-width="2"/>' +
      '<g class="mg-flap"><rect x="120" y="80" width="26" height="16" fill="#b22234"/><rect x="120" y="80" width="11" height="8" fill="#3c3b6e"/><path d="M131 85h15M120 91h26" stroke="#fff" stroke-width="2"/></g>' +
      '<g class="mg-flap"><rect x="280" y="80" width="26" height="16" fill="#b22234"/><rect x="280" y="80" width="11" height="8" fill="#3c3b6e"/><path d="M291 85h15M280 91h26" stroke="#fff" stroke-width="2"/></g>',
      sky("mgs4", "#6fa8dc", "#f2e3c8"));
  }

  /* 5. Market Ave N and Tuscarawas St, the courthouse angels behind */
  function mgcorner() {
    const angel = (x, y, flip) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (flip ? -1 : 1) + ' 1)"><path d="M0 0v-12l4 -4l4 4v12z" fill="' + GOLD + '"/><path d="M4 -10l12 -6v4z" fill="' + GOLD + '"/><path d="M0 -8l-6 -8l2 10z" fill="#f7e08a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mgs5)"/>' +
      /* courthouse */
      '<rect x="230" y="100" width="170" height="80" fill="#cfc6b4" stroke="#7a705e" stroke-width="2"/>' +
      [244, 274, 334, 364].map(x => '<rect x="' + x + '" y="114" width="16" height="26" fill="#3a3a4a"/>').join("") +
      '<rect x="292" y="40" width="46" height="62" fill="#d9d0be" stroke="#7a705e" stroke-width="2"/>' +
      '<path d="M288 40l27 -26l27 26z" fill="#5a6a72"/><circle cx="315" cy="66" r="13" fill="#f7f3ea" stroke="#333" stroke-width="2"/>' +
      '<path d="M315 66v-9M315 66l6 3" stroke="#222" stroke-width="2" stroke-linecap="round"/>' +
      angel(288, 40, false) + angel(342, 40, true) +
      '<g class="mg-glow">' + angel(300, 24, false) + angel(330, 24, true) + '</g>' +
      /* wall with the tag */
      '<rect x="0" y="104" width="214" height="116" fill="#4a3a5a"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (114 + i * 10) + 'h214" stroke="#3a2c48" stroke-width="1"/>').join("") +
      tag("MACY GRAY", 10, 170, 34, LAV, -6) + tag("I TRY", 40, 204, 20, PINK, -3) +
      '<g class="mg-sp"><circle cx="196" cy="140" r="3" fill="' + LAV + '"/></g><g class="mg-sp mg-sp2"><circle cx="190" cy="150" r="2.5" fill="' + LAV + '"/></g>' +
      /* street signs */
      '<rect x="252" y="150" width="5" height="70" fill="#555"/>' +
      '<rect x="206" y="146" width="98" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="255" y="158" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MARKET AVE N</text>' +
      '<rect x="210" y="164" width="90" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="255" y="176" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">TUSCARAWAS ST</text>' +
      '<rect x="0" y="220" width="400" height="12" fill="#9a958c"/><rect x="0" y="232" width="400" height="28" fill="#2b2b2e"/>' +
      '<g class="mg-car"><rect x="0" y="236" width="64" height="16" rx="5" fill="' + SARTA + '"/><circle cx="14" cy="254" r="5" fill="#111"/><circle cx="50" cy="254" r="5" fill="#111"/></g>',
      sky("mgs5", "#3a2a6a", "#e88aa8"));
  }

  window.SCENES = { mgstation: mgstation, mgschool: mgschool, mgpalace: mgpalace, mgmckinley: mgmckinley, mgcorner: mgcorner };
})();
