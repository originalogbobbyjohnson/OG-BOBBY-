/* kennychesney scenes (Regions tab: Memphis + Tennessee; Luttrell, Union County, northeast of Knoxville). CSS classes prefixed kc- (the page's own anim-train is kept).
   1 TN 61 into Luttrell: a pickup rolling past the green town sign and the state route marker, Copper Ridge behind in the morning haze.
   2 Norris Lake off Big Ridge State Park in Union County: green-blue water, wooded ridges, a pontoon boat bobbing, sun sparkles on the water.
   3 Friday night at Gibbs High, his old school: the lights buzzing over the field, the goalposts, a football spiraling through the air.
   4 The beach on St. John: turquoise water, a palm swaying, the black No Shoes Nation pirate flag waving, a stool and guitar in the sand at sunset.
   5 TN 61 and TN 131 in Luttrell: green signs, KENNY tagged on the block wall, Copper Ridge and the town water tank behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kcmist{0%{transform:translateX(-40px)}100%{transform:translateX(60px)}}.kc-mist{animation:kcmist 11s ease-in-out infinite alternate}' +
    '@keyframes kcbob{0%,100%{transform:translateY(0) rotate(-1deg)}50%{transform:translateY(3px) rotate(1deg)}}.kc-bob{transform-box:fill-box;transform-origin:50% 100%;animation:kcbob 2.6s ease-in-out infinite}' +
    '@keyframes kcglint{0%,100%{opacity:.1}50%{opacity:1}}.kc-gl{animation:kcglint 1.8s ease-in-out infinite}.kc-gl2{animation-delay:-.6s}.kc-gl3{animation-delay:-1.2s}' +
    '@keyframes kcwave{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(6deg) scaleX(.94)}}.kc-wave{transform-box:fill-box;transform-origin:0 50%;animation:kcwave 1.5s ease-in-out infinite}' +
    '@keyframes kcsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.kc-sway{transform-box:fill-box;transform-origin:50% 100%;animation:kcsway 3.4s ease-in-out infinite}' +
    '@keyframes kcball{0%{transform:translate(0,0) rotate(0)}50%{transform:translate(150px,-70px) rotate(180deg)}100%{transform:translate(300px,0) rotate(360deg)}}.kc-ball{animation:kcball 3.6s linear infinite}' +
    '@keyframes kcbuzz{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.4}55%{opacity:.9}}.kc-buzz{animation:kcbuzz 2.2s linear infinite}.kc-buzz2{animation-delay:-1s}' +
    '@keyframes kcfly{0%{transform:translate(0,0)}100%{transform:translate(440px,-20px)}}.kc-fly{animation:kcfly 14s linear infinite}' +
    '@keyframes kcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kc-sp{animation:kcspray 1.4s ease-out infinite}.kc-sp2{animation-delay:.45s}' +
    '@keyframes kcsurf{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.kc-surf{animation:kcsurf 3s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const TEAL = "#1fb5ad", SUN = "#f6c445", RED = "#e2573b", SAND = "#ecd9a8";
  /* Copper Ridge: one long even wooded ridge, the Ridge-and-Valley look */
  const ridge = (y, fill, amp) => '<path d="M0 ' + y + 'C60 ' + (y - amp) + ' 120 ' + (y - amp - 4) + ' 200 ' + (y - amp - 2) + 'S340 ' + (y - amp + 2) + ' 400 ' + (y - 4) + 'V260H0z" fill="' + fill + '"/>';
  const tree = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-3" y="-4" width="6" height="14" fill="#4e3d2c"/><circle cx="0" cy="-16" r="15" fill="' + (c || "#2f5e34") + '"/><circle cx="-10" cy="-8" r="10" fill="' + (c || "#2f5e34") + '"/><circle cx="10" cy="-8" r="10" fill="' + (c || "#2f5e34") + '"/></g>';
  const truck = '<g><path d="M0 26v-12q0 -4 4 -4h40l6 -14h34q4 0 6 4l8 14h8q4 0 4 4v8z" fill="' + RED + '" stroke="#222" stroke-width="1.5"/><path d="M54 10l5 -11h22l6 11z" fill="#bfe3f2"/>' +
    '<rect x="4" y="12" width="40" height="3" fill="#a83a26"/><circle cx="22" cy="28" r="8" fill="#222"/><circle cx="22" cy="28" r="3.5" fill="#ccc"/><circle cx="88" cy="28" r="8" fill="#222"/><circle cx="88" cy="28" r="3.5" fill="#ccc"/></g>';

  /* 1. TN 61 into Luttrell */
  function kcsign() {
    const marker = '<g transform="translate(58 54)"><rect x="0" y="0" width="44" height="44" rx="3" fill="#fff" stroke="#111" stroke-width="2.5"/><path d="M5 6h34l-17 31z" fill="none" stroke="#111" stroke-width="2"/><text x="22" y="25" text-anchor="middle" ' + font + ' font-size="15" fill="#111">61</text></g>';
    const big = '<rect x="122" y="36" width="210" height="80" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/><text x="227" y="68" text-anchor="middle" ' + font + ' font-size="26" fill="#fff">LUTTRELL</text>' +
      '<text x="227" y="88" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">UNION COUNTY</text><text x="227" y="106" text-anchor="middle" ' + font + ' font-size="10" fill="' + SUN + '">CITY LIMIT</text>' +
      '<rect x="176" y="116" width="6" height="44" fill="#8a9098"/><rect x="272" y="116" width="6" height="44" fill="#8a9098"/>';
    return svg('<rect width="400" height="260" fill="url(#kcs1)"/><circle cx="60" cy="40" r="18" fill="#fff1c0" opacity=".9"/>' +
      ridge(118, "#8da7a0", 26) + ridge(134, "#5f8a6a", 18) + '<g class="kc-mist" opacity=".5"><ellipse cx="100" cy="126" rx="110" ry="7" fill="#f4f1e8"/><ellipse cx="300" cy="138" rx="100" ry="7" fill="#f4f1e8"/></g>' +
      tree(26, 162, 1, "#3d6b3a") + tree(366, 160, 1.1) + tree(338, 164, .8, "#4a7a3e") +
      '<rect x="78" y="96" width="4" height="66" fill="#8a9098"/>' + marker + big +
      '<rect x="0" y="162" width="400" height="98" fill="#55565c"/><path d="M0 164h400M0 252h400" stroke="#f2f2f2" stroke-width="3"/><path d="M0 208h400" stroke="' + SUN + '" stroke-width="3" stroke-dasharray="26 18"/>' +
      '<g class="anim-train"><g transform="translate(140 184) scale(1.4)">' + truck + '</g></g>', sky("kcs1", "#9cc7e6", "#f6e3c8"));
  }

  /* 2. Norris Lake off Big Ridge State Park */
  function kclake() {
    const glints = [[60, 180], [140, 206], [250, 190], [330, 214], [100, 230], [300, 240], [200, 222]].map((p, i) => '<path class="kc-gl ' + (i % 3 === 1 ? "kc-gl2" : i % 3 === 2 ? "kc-gl3" : "") + '" d="M' + (p[0] - 8) + ' ' + p[1] + 'h16" stroke="#fff" stroke-width="2" stroke-linecap="round"/>').join("");
    const boat = '<g class="kc-bob"><g transform="translate(190 160)">' +
      '<rect x="0" y="22" width="130" height="10" rx="5" fill="#c9cdd2" stroke="#555" stroke-width="1.5"/><rect x="0" y="34" width="130" height="8" rx="4" fill="#9aa0a8"/>' +
      '<rect x="8" y="6" width="112" height="16" fill="none" stroke="#e8e8ea" stroke-width="2"/><path d="M8 14h112" stroke="#e8e8ea" stroke-width="1.5"/>' +
      '<rect x="14" y="-12" width="96" height="6" fill="' + TEAL + '"/><path d="M18 -6v12M106 -6v12" stroke="#e8e8ea" stroke-width="2"/>' +
      '<rect x="40" y="8" width="22" height="14" rx="3" fill="' + RED + '"/><rect x="74" y="8" width="22" height="14" rx="3" fill="' + RED + '"/></g></g>';
    return svg('<rect width="400" height="260" fill="url(#kcs2)"/><circle cx="330" cy="46" r="20" fill="#fff6d0"/>' +
      ridge(110, "#6f8f8a", 24) + ridge(128, "#3f6b48", 20) +
      tree(20, 150, .9, "#2f5e34") + tree(56, 152, .7, "#3d6b3a") + tree(380, 150, 1, "#2f5e34") +
      '<rect x="0" y="150" width="400" height="110" fill="url(#kcw2)"/>' + glints +
      '<path d="M0 150q40 -6 80 0" stroke="#d8c8a0" stroke-width="5" fill="none"/>' + boat +
      '<path class="kc-fly" d="M-30 70l6 -4l6 4l6 -4l6 4" stroke="#333" stroke-width="2" fill="none"/>',
      sky("kcs2", "#7cc0e8", "#e8f4f6") + '<linearGradient id="kcw2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f8a86"/><stop offset="1" stop-color="#1c5a66"/></linearGradient>');
  }

  /* 3. Friday night at Gibbs High */
  function kcfield() {
    const light = (x) => '<rect x="' + (x - 2) + '" y="34" width="4" height="120" fill="#8a9098"/><rect x="' + (x - 22) + '" y="22" width="44" height="18" rx="2" fill="#3a3a40"/>' +
      [0, 1, 2, 3].map(i => '<circle class="kc-buzz ' + (i % 2 ? "kc-buzz2" : "") + '" cx="' + (x - 15 + i * 10) + '" cy="31" r="4" fill="#fffbe0"/>').join("") +
      '<path d="M' + (x - 22) + ' 40l-50 120h144l-50 -120z" fill="#fffbe0" opacity=".07"/>';
    const stripes = Array.from({ length: 8 }, (_, i) => '<rect x="0" y="' + (160 + i * 13) + '" width="400" height="13" fill="' + (i % 2 ? "#3f8a3e" : "#469644") + '"/>').join("");
    const yard = Array.from({ length: 9 }, (_, i) => '<path d="M' + (30 + i * 42) + ' 160l' + ((i - 4) * 10) + ' 100" stroke="#fff" stroke-width="2" opacity=".75"/>').join("");
    const goal = '<g stroke="' + SUN + '" stroke-width="4" fill="none" stroke-linecap="round"><path d="M340 170v-26M322 144h36M322 144v-44M358 144v-44"/></g>';
    const board = '<rect x="140" y="40" width="120" height="58" rx="4" fill="#1b1b20" stroke="#555" stroke-width="2"/><text x="170" y="56" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">HOME</text><text x="230" y="56" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">GUEST</text>' +
      '<text x="170" y="84" text-anchor="middle" ' + font + ' font-size="22" fill="' + RED + '">21</text><text x="230" y="84" text-anchor="middle" ' + font + ' font-size="22" fill="' + RED + '">14</text><rect x="196" y="98" width="8" height="56" fill="#55565c"/>';
    return svg('<rect width="400" height="260" fill="url(#kcs3)"/>' + Array.from({ length: 14 }, (_, i) => '<circle cx="' + (14 + i * 29) + '" cy="' + (12 + (i * 37) % 26) + '" r="1.2" fill="#fff" opacity=".7"/>').join("") +
      '<path d="M0 150q200 -14 400 0v10h-400z" fill="#1d2a24"/>' + Array.from({ length: 40 }, (_, i) => '<circle cx="' + (5 + i * 10) + '" cy="' + (150 - (i % 3) * 2) + '" r="3.2" fill="' + ["#2a3a4a", "#3a2a2a", "#2a3a2a"][i % 3] + '"/>').join("") +
      light(50) + light(350) + board + stripes + yard + goal +
      '<g class="kc-ball"><g transform="translate(40 200)"><ellipse cx="0" cy="0" rx="11" ry="7" fill="#8a4a24" stroke="#4a2410" stroke-width="1.5"/><path d="M-5 0h10M-3 -2v4M0 -2v4M3 -2v4" stroke="#fff" stroke-width="1.2"/></g></g>' +
      tag("BOYS OF FALL", 92, 132, 22, SUN, -3), sky("kcs3", "#0e1a33", "#2a3f5e"));
  }

  /* 4. The beach on St. John, the pirate flag flying */
  function kcbeach() {
    const palm = '<g class="kc-sway"><path d="M300 222q6 -70 34 -120" stroke="#7a5a3a" stroke-width="9" fill="none" stroke-linecap="round"/>' +
      ['M334 102q-40 -10 -62 14', 'M334 102q-20 -30 -56 -26', 'M334 102q20 -32 54 -22', 'M334 102q40 -4 56 24', 'M334 102q6 -36 -6 -50'].map(d => '<path d="' + d + '" stroke="#2f8a3a" stroke-width="8" fill="none" stroke-linecap="round"/>').join("") +
      '<circle cx="330" cy="108" r="5" fill="#6a4a24"/><circle cx="339" cy="107" r="5" fill="#6a4a24"/></g>';
    const flag = '<rect x="88" y="62" width="4" height="150" fill="#d8d0c0"/><g class="kc-wave"><rect x="92" y="64" width="70" height="44" fill="#111"/>' +
      '<circle cx="127" cy="80" r="9" fill="#f4f1e8"/><rect x="121" y="86" width="12" height="6" rx="2" fill="#f4f1e8"/><circle cx="123.5" cy="79" r="2.4" fill="#111"/><circle cx="130.5" cy="79" r="2.4" fill="#111"/>' +
      '<path d="M108 92l38 12M146 92l-38 12" stroke="#f4f1e8" stroke-width="4" stroke-linecap="round"/></g>';
    const stool = '<g transform="translate(196 176)"><path d="M0 0h30M4 0l-4 40M26 0l4 40M2 22h26" stroke="#7a5232" stroke-width="3" fill="none"/>' +
      '<g transform="rotate(-24 40 10)"><ellipse cx="44" cy="22" rx="13" ry="11" fill="#c4823a" stroke="#5a3a1a" stroke-width="1.5"/><ellipse cx="44" cy="10" rx="10" ry="8" fill="#c4823a" stroke="#5a3a1a" stroke-width="1.5"/><circle cx="44" cy="16" r="3.5" fill="#3a2410"/><rect x="42" y="-30" width="4" height="40" fill="#5a3a1a"/></g></g>';
    return svg('<rect width="400" height="260" fill="url(#kcs4)"/><circle cx="210" cy="132" r="30" fill="' + SUN + '" opacity=".95"/>' +
      '<path d="M260 128q30 -26 60 -10t80 -4v20h-140z" fill="#3a5a4a" opacity=".8"/>' +
      '<rect x="0" y="130" width="400" height="60" fill="url(#kcw4)"/><path d="M180 140h60M190 150h40M196 160h28" stroke="' + SUN + '" stroke-width="2" opacity=".7"/>' +
      '<g class="kc-surf"><path d="M-20 186q30 -8 60 0t60 0t60 0t60 0t60 0t60 0t60 0v8h-420z" fill="#e8f6f4" opacity=".85"/></g>' +
      '<path d="M0 190q200 -10 400 0v70h-400z" fill="' + SAND + '"/>' + flag + palm + stool +
      '<g fill="#7a5a3a"><path d="M40 236q8 -6 16 0q-8 4 -16 0z"/><path d="M60 242q8 -6 16 0q-8 4 -16 0z"/></g>' +
      tag("NO SHOES NATION", 150, 240, 18, TEAL, -3), sky("kcs4", "#f08a5a", "#fbd38a") +
      '<linearGradient id="kcw4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f9fb0"/><stop offset="1" stop-color="' + TEAL + '"/></linearGradient>');
  }

  /* 5. TN 61 and TN 131 in Luttrell */
  function kccorner() {
    const blocks = Array.from({ length: 6 }, (_, r) => Array.from({ length: 11 }, (_, c) => '<rect x="' + (c * 40 - (r % 2) * 20) + '" y="' + (122 + r * 15) + '" width="39" height="14" fill="' + ((r + c) % 3 ? "#c8c2b4" : "#bdb6a6") + '"/>').join("")).join("");
    const tank = '<g transform="translate(300 34)"><ellipse cx="30" cy="22" rx="30" ry="18" fill="#c9d2da" stroke="#7a8590" stroke-width="2"/><path d="M8 34l-6 56M52 34l6 56M18 38l-2 52M42 38l2 52M4 62h52" stroke="#7a8590" stroke-width="2.5"/>' +
      '<text x="30" y="27" text-anchor="middle" ' + font + ' font-size="9" fill="#2f4a5a">LUTTRELL</text></g>';
    return svg('<rect width="400" height="260" fill="url(#kcs5)"/>' + ridge(108, "#6f8a7a", 22) + ridge(120, "#4a6e4c", 14) + tank +
      tree(240, 122, .9, "#2f5e34") + tree(276, 124, .7, "#3d6b3a") +
      blocks + '<path d="M0 122h400" stroke="#8a8476" stroke-width="3"/>' +
      tag("KENNY", 108, 182, 52, TEAL, -6) + tag("NO SHOES", 120, 206, 18, SUN, -4) + tag("KC", 330, 196, 26, RED, -8) +
      '<g fill="' + TEAL + '"><circle class="kc-sp" cx="28" cy="142" r="2.5"/><circle class="kc-sp kc-sp2" cx="46" cy="138" r="2"/></g>' +
      '<rect x="0" y="212" width="400" height="48" fill="#5a5b60"/><path d="M40 228l14 8M200 242l18 -6M300 224l-10 10" stroke="#2f3034" stroke-width="2"/>' +
      '<rect x="56" y="38" width="5" height="176" fill="#6b7178"/>' + sign(4, 42, 120, "HWY 61") + sign(14, 68, 100, "HWY 131"),
      sky("kcs5", "#ff9a5a", "#ffe0a8"));
  }

  window.SCENES = { kcsign: kcsign, kclake: kclake, kcfield: kcfield, kcbeach: kcbeach, kccorner: kccorner };
})();
