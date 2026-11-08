/* donnyhathaway scenes (Regions tab: St. Louis + Ohio; Carr Square, St. Louis — raised by his grandmother Martha Pitts in Carr Square Village).
   CSS classes and ids prefixed dh- (the page's own anim-train is kept on the bus).
   1 MetroBus 32 Dr ML King pulling up at Cass Ave & N 10th St (a listed stop on the route), the edge of Carr Square.
   2 Carr Square Village: the 1942 low-rise brick apartment courts (2-3 stories, flat roofs), a piano playing out of an open window.
   3 His grandmother's church: Sunday, the choir going, the board out front billing "Donny Pitts, the nation's youngest gospel singer" (his billing at age 3).
   4 Vashon High School (class of 1963): the old red-brick Collegiate Gothic building with its limestone tower, the flag going.
   5 Carr St & N 18th St: green signs, DONNY tagged on the brick, Christmas lights strung up and snow falling (This Christmas), the Gateway Arch downtown behind.
   400 x 260 SVGs. No logos, no faces, any 9 drawn with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dhflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.dh-flk{animation:dhflick 2.4s infinite}.dh-flk2{animation-delay:.9s}' +
    '@keyframes dhnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(46px,-86px);opacity:0}}.dh-note{animation:dhnote 4.2s linear infinite}.dh-n2{animation-delay:-1.4s}.dh-n3{animation-delay:-2.8s}' +
    '@keyframes dhsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.dh-sway{transform-box:fill-box;transform-origin:50% 100%;animation:dhsway 2.6s ease-in-out infinite}.dh-sw2{animation-delay:-1.3s}' +
    '@keyframes dhflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(-6deg) scaleX(.92)}}.dh-flag{transform-box:fill-box;transform-origin:0 50%;animation:dhflag 1.4s ease-in-out infinite}' +
    '@keyframes dhsnow{0%{transform:translateY(-20px)}100%{transform:translateY(280px)}}.dh-snow{animation:dhsnow 7s linear infinite}.dh-s2{animation-delay:-2.3s}.dh-s3{animation-delay:-4.6s}' +
    '@keyframes dhtwinkle{0%,100%{opacity:1}50%{opacity:.25}}.dh-tw{animation:dhtwinkle 1.2s infinite}.dh-tw2{animation-delay:.6s}' +
    '@keyframes dhrobe{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.dh-robe{animation:dhrobe 1s ease-in-out infinite}.dh-r2{animation-delay:-.5s}' +
    '@keyframes dhspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dh-sp{animation:dhspray 1.4s ease-out infinite}.dh-sp2{animation-delay:.45s}' +
    '@keyframes dhcloud{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.dh-cl{animation:dhcloud 9s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#f2b632", RED = "#c8102e", GREEN = "#2e8b57", CREAM = "#f7ecd2", METRO = "#1f4e79", SIGN = "#0f6b3a", BRICK = "#8e3b26";
  const note = (x, y, c, cls) => '<g class="dh-note ' + cls + '"><text x="' + x + '" y="' + y + '" font-size="22" fill="' + c + '">&#9834;</text></g>';
  const win = (x, y, w, h, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (lit ? "#ffd98a" : "#2a2a33") + '"' + (lit ? ' class="dh-flk"' : '') + '/><path d="M' + (x + w / 2) + ' ' + y + 'v' + h + '" stroke="#f1e6d0" stroke-width="1"/>';
  const tree = (x, y, s, cls) => '<g class="dh-sway ' + (cls || "") + '"><rect x="' + (x - 2) + '" y="' + (y - 4) + '" width="4" height="' + (22 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (14 * s) + '" fill="#2f6b34"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (10 * s) + '" fill="#3a7d3f"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (10 * s) + '" fill="#3a7d3f"/></g>';
  /* a low brick apartment block: flat roof, stone coping, rows of windows */
  const block = (x, y, w, h, c, litEvery) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + (x - 2) + '" y="' + (y - 4) + '" width="' + (w + 4) + '" height="5" fill="#d8cdb8"/>';
    const cols = Math.floor((w - 8) / 18), rows = Math.floor((h - 14) / 22);
    for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) s += win(x + 8 + k * 18, y + 8 + r * 22, 10, 13, (r * 3 + k) % litEvery === 0);
    return s;
  };

  /* 1. MetroBus 32 at Cass Ave & N 10th St */
  function dhstation() {
    const w = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 44) + '" y="98" width="36" height="30" rx="3" fill="#1d2733"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="84" width="320" height="86" rx="10" fill="#f4f5f7" stroke="#9aa3ab" stroke-width="2"/>' + w +
      '<rect x="60" y="136" width="320" height="10" fill="' + METRO + '"/><rect x="60" y="148" width="320" height="3" fill="' + RED + '"/>' +
      '<rect x="64" y="96" width="10" height="56" rx="2" fill="#1d2733"/><rect x="66" y="87" width="104" height="10" rx="2" fill="#111"/><text x="118" y="95" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">32 DR ML KING</text>' +
      '<circle class="dh-flk" cx="66" cy="160" r="3.5" fill="#fff6c2"/><circle cx="120" cy="172" r="12" fill="#222"/><circle cx="120" cy="172" r="5" fill="#777"/><circle cx="320" cy="172" r="12" fill="#222"/><circle cx="320" cy="172" r="5" fill="#777"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dhs1)"/>' +
      '<g class="dh-cl"><ellipse cx="90" cy="30" rx="36" ry="9" fill="#fff" opacity=".25"/><ellipse cx="310" cy="22" rx="42" ry="8" fill="#fff" opacity=".2"/></g>' +
      /* north-side brick storefronts and a church steeple */
      '<rect x="0" y="70" width="80" height="106" fill="#7a3324"/><rect x="80" y="88" width="70" height="88" fill="#9a4a30"/><rect x="236" y="80" width="74" height="96" fill="#6e3022"/><rect x="310" y="64" width="90" height="112" fill="#8a3e28"/>' +
      win(12, 82, 14, 18, true) + win(44, 82, 14, 18, false) + win(92, 100, 14, 18, false) + win(122, 100, 14, 18, true) + win(250, 92, 14, 18, true) + win(280, 92, 14, 18, false) + win(326, 78, 14, 18, false) + win(362, 78, 14, 18, true) +
      '<path d="M176 176v-70l14 -12l14 12v70z" fill="#b9a98c"/><path d="M182 94l8 -40l8 40z" fill="#b9a98c"/><path d="M190 46v10M186 50h8" stroke="#f3e3c3" stroke-width="2"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#3b3e44"/><path d="M0 218h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="0" y="172" width="400" height="8" fill="#a9a59c"/>' +
      bus +
      '<rect x="388" y="100" width="4" height="78" fill="#555"/><rect x="372" y="78" width="26" height="22" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/><text x="385" y="93" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BUS</text>' +
      '<rect x="70" y="194" width="260" height="50" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="86" y="216" ' + font + ' font-size="15" fill="#fff" letter-spacing="1">CASS AV &amp;</text>' +
      '<text x="86" y="236" ' + font + ' font-size="15" fill="#f3e3c3" letter-spacing="1">N 10TH ST</text>' +
      '<circle cx="304" cy="219" r="16" fill="' + METRO + '"/><text x="304" y="225" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">32</text>',
      sky("dhs1", "#1a2340", "#c9774e"));
  }

  /* 2. Carr Square Village courts */
  function dhcarrsq() {
    return svg(
      '<rect width="400" height="260" fill="url(#dhs2)"/>' +
      '<g class="dh-cl"><ellipse cx="70" cy="34" rx="34" ry="9" fill="#fff" opacity=".5"/><ellipse cx="290" cy="26" rx="40" ry="8" fill="#fff" opacity=".45"/></g>' +
      /* back row (3 stories) */
      block(10, 70, 150, 80, "#a24a30", 4) + block(240, 66, 150, 84, "#97442c", 5) +
      /* front row (2 stories) with doors */
      block(0, 118, 120, 66, BRICK, 3) + block(280, 114, 120, 70, "#9a4128", 4) +
      '<rect x="40" y="160" width="14" height="24" fill="#3a2a22"/><rect x="330" y="160" width="14" height="24" fill="#3a2a22"/>' +
      '<rect x="36" y="156" width="22" height="4" fill="#d8cdb8"/><rect x="326" y="156" width="22" height="4" fill="#d8cdb8"/>' +
      /* courtyard lawn + path + trees */
      '<rect x="0" y="184" width="400" height="76" fill="#5b8c3a"/><path d="M160 260l26 -76h28l26 76z" fill="#cfc6b3"/>' +
      tree(150, 186, 1.1, "") + tree(254, 186, 1.2, "dh-sw2") + tree(196, 150, .8, "dh-sw2") +
      /* open window with a piano inside, notes floating out */
      '<rect x="160" y="96" width="76" height="54" fill="#8e3b26"/><rect x="170" y="104" width="56" height="38" fill="#ffd98a"/>' +
      '<rect x="176" y="122" width="44" height="12" fill="#1b1b1b"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (177 + i * 5.4) + '" y="128" width="4.6" height="6" fill="#fff"/>').join("") +
      '<path d="M170 104h56" stroke="#f1e6d0" stroke-width="2"/><rect x="166" y="142" width="64" height="4" fill="#d8cdb8"/>' +
      note(214, 108, GOLD, "") + note(196, 104, CREAM, "dh-n2") + note(226, 112, "#ffffff", "dh-n3") +
      '<rect x="120" y="230" width="160" height="22" rx="3" fill="#111" opacity=".82"/><text x="200" y="245" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="2">CARR SQUARE VILLAGE</text>',
      sky("dhs2", "#6fb1e3", "#f3d9a4"));
  }

  /* 3. Grandmother's church, Sunday */
  function dhchurch() {
    const robes = [0, 1, 2, 3, 4].map(i => '<g class="dh-robe ' + (i % 2 ? "dh-r2" : "") + '"><path d="M' + (118 + i * 34) + ' 150q12 -22 24 0v34h-24z" fill="' + (i % 2 ? RED : "#7a1022") + '"/><path d="M' + (124 + i * 34) + ' 150h12" stroke="' + GOLD + '" stroke-width="3"/></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dhs3)"/>' +
      /* church front */
      '<rect x="90" y="60" width="220" height="140" fill="#b04a2e"/><path d="M80 62l120 -46l120 46z" fill="#5a2a1c"/>' +
      '<path d="M170 60v-38h60v38" fill="#b04a2e"/><path d="M200 10v18M192 16h16" stroke="' + CREAM + '" stroke-width="3"/>' +
      '<path d="M178 60q22 -30 44 0z" fill="#ffd98a" class="dh-flk"/>' +
      /* open doors, choir in front */
      '<rect x="170" y="140" width="60" height="60" fill="#3a1f16"/><path d="M200 140v60" stroke="#5a2a1c" stroke-width="2"/>' +
      '<path d="M104 90q16 -20 32 0v40h-32z" fill="#e6a84a" class="dh-flk dh-flk2"/><path d="M264 90q16 -20 32 0v40h-32z" fill="#e6a84a" class="dh-flk"/>' +
      robes +
      note(108, 118, GOLD, "") + note(250, 112, "#ffffff", "dh-n2") + note(300, 120, GOLD, "dh-n3") +
      '<rect x="0" y="200" width="400" height="60" fill="#8d877c"/><rect x="0" y="236" width="400" height="24" fill="#5b8c3a"/>' +
      /* the board out front */
      '<rect x="16" y="150" width="96" height="62" rx="3" fill="#f7f1e1" stroke="#3a2a22" stroke-width="3"/><rect x="58" y="212" width="6" height="24" fill="#3a2a22"/>' +
      '<text x="64" y="166" text-anchor="middle" ' + font + ' font-size="7" fill="#7a1022">TONIGHT</text>' +
      '<text x="64" y="180" text-anchor="middle" ' + font + ' font-size="9.5" fill="#1b1b1b">DONNY PITTS</text>' +
      '<text x="64" y="192" text-anchor="middle" ' + font + ' font-size="6" fill="#1b1b1b">THE NATION\'S YOUNGEST</text>' +
      '<text x="64" y="202" text-anchor="middle" ' + font + ' font-size="6" fill="#1b1b1b">GOSPEL SINGER</text>' +
      '',
      sky("dhs3", "#7fbbe6", "#fbe6b8"));
  }

  /* 4. Vashon High School, class of '63 */
  function dhvashon() {
    let wins = "";
    for (let r = 0; r < 3; r++) for (let k = 0; k < 5; k++) { wins += win(26 + k * 24, 104 + r * 28, 12, 18, (r + k) % 4 === 0); wins += win(258 + k * 24, 104 + r * 28, 12, 18, (r + k) % 3 === 0); }
    return svg(
      '<rect width="400" height="260" fill="url(#dhs4)"/>' +
      '<g class="dh-cl"><ellipse cx="60" cy="30" rx="34" ry="8" fill="#fff" opacity=".5"/><ellipse cx="340" cy="40" rx="30" ry="7" fill="#fff" opacity=".4"/></g>' +
      /* wings */
      '<rect x="14" y="94" width="138" height="104" fill="#9c3f26"/><rect x="248" y="94" width="138" height="104" fill="#9c3f26"/>' +
      '<rect x="10" y="88" width="146" height="8" fill="#e2d6bd"/><rect x="244" y="88" width="146" height="8" fill="#e2d6bd"/>' + wins +
      /* center tower, limestone trim */
      '<rect x="152" y="60" width="96" height="138" fill="#a8452a"/><rect x="152" y="60" width="96" height="10" fill="#e2d6bd"/>' +
      '<rect x="164" y="30" width="72" height="34" fill="#a8452a"/><path d="M160 30h80" stroke="#e2d6bd" stroke-width="6"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (166 + i * 14) + '" y="20" width="8" height="10" fill="#e2d6bd"/>').join("") +
      '<path d="M176 150v-40q24 -26 48 0v40z" fill="#e2d6bd"/><path d="M184 150v-36q16 -18 32 0v36z" fill="#2a2a33"/><rect x="186" y="150" width="28" height="48" fill="#3a2a22"/>' +
      '<rect x="160" y="80" width="80" height="14" fill="#e2d6bd"/><text x="200" y="91" text-anchor="middle" ' + font + ' font-size="8.5" fill="#5a2a1c" letter-spacing="1.5">VASHON HIGH</text>' +
      /* flagpole */
      '<rect x="199" y="0" width="2" height="22" fill="#ddd"/><g class="dh-flag"><rect x="201" y="2" width="22" height="12" fill="' + GOLD + '"/><rect x="201" y="6" width="22" height="4" fill="#5a2a1c"/></g>' +
      /* lawn, steps, class banner */
      '<rect x="0" y="198" width="400" height="62" fill="#5b8c3a"/><rect x="170" y="198" width="60" height="10" fill="#cfc6b3"/><rect x="160" y="208" width="80" height="52" fill="#d9d1bf"/>' +
      tree(40, 206, 1, "") + tree(360, 206, 1, "dh-sw2") +
      '<rect x="76" y="222" width="76" height="22" rx="3" fill="#5a2a1c"/><text x="114" y="238" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">CLASS \'63</text>' +
      '<rect x="248" y="222" width="76" height="22" rx="3" fill="#111" opacity=".85"/><text x="286" y="237" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">LACLEDE AVE</text>',
      sky("dhs4", "#78b6e4", "#f6e2b0"));
  }

  /* 5. Carr St & N 18th St, This Christmas, the Arch downtown */
  function dhcorner() {
    const bricks = Array.from({ length: 14 }, (_, r) => '<path d="M0 ' + (128 + r * 9) + 'h250" stroke="#5e2f22" stroke-width="1" opacity=".6"/>').join("");
    const bulbs = Array.from({ length: 12 }, (_, i) => { const x = 10 + i * 20, y = 124 + (i % 2) * 6; return '<circle class="dh-tw ' + (i % 2 ? "dh-tw2" : "") + '" cx="' + x + '" cy="' + y + '" r="3.2" fill="' + [RED, GOLD, GREEN, "#5aa9ff"][i % 4] + '"/>'; }).join("");
    const flakes = (cls, dx) => '<g class="dh-snow ' + cls + '">' + Array.from({ length: 14 }, (_, i) => '<circle cx="' + ((i * 53 + dx) % 400) + '" cy="' + ((i * 37) % 120) + '" r="' + (1.2 + (i % 3) * .6) + '" fill="#fff" opacity=".85"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dhs5)"/>' +
      /* the Arch, stainless steel, catching the city light */
      '<path d="M258 150q62 -230 124 0h-10q-52 -194 -104 0z" fill="url(#dharch)"/>' +
      '<rect x="244" y="138" width="156" height="12" fill="#2b3448"/><rect x="270" y="120" width="16" height="18" fill="#2b3448"/><rect x="340" y="112" width="20" height="26" fill="#2b3448"/>' +
      /* brick wall, string lights, tag */
      '<rect x="0" y="122" width="250" height="138" fill="#8f3f2c"/>' + bricks +
      '<path d="M0 122q20 8 40 0t40 0t40 0t40 0t40 0t40 0" fill="none" stroke="#222" stroke-width="1.2"/>' + bulbs +
      tag("DONNY", 22, 200, 52, GOLD, -7) + tag("CARR SQ", 132, 226, 22, "#ffffff", -4) +
      '<g class="dh-sp"><circle cx="208" cy="190" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="dh-sp dh-sp2"><circle cx="216" cy="194" r="2.5" fill="' + GOLD + '" opacity=".6"/></g>' +
      /* snowy sidewalk + street */
      '<rect x="0" y="236" width="400" height="24" fill="#e8edf2"/><rect x="250" y="150" width="150" height="86" fill="#3b3e44"/><path d="M250 196h150" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<rect x="250" y="150" width="150" height="5" fill="#e8edf2" opacity=".7"/>' +
      /* sign pole + green signs */
      '<rect x="296" y="120" width="5" height="116" fill="#5a5a5a"/>' +
      '<rect x="256" y="112" width="88" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="300" y="125" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">CARR ST</text>' +
      '<rect x="258" y="134" width="84" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="300" y="147" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">N 18TH ST</text>' +
      flakes("", 0) + flakes("dh-s2", 21) + flakes("dh-s3", 40),
      sky("dhs5", "#0b1430", "#3a3f6a") + '<linearGradient id="dharch" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8d97a6"/><stop offset=".5" stop-color="#eef2f6"/><stop offset="1" stop-color="#7a8494"/></linearGradient>');
  }

  window.SCENES = { dhstation: dhstation, dhcarrsq: dhcarrsq, dhchurch: dhchurch, dhvashon: dhvashon, dhcorner: dhcorner };
})();
