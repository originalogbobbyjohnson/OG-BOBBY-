/* jibbs scenes (Regions tab: St. Louis + Ohio; Southside St. Louis). CSS classes and ids prefixed jb- (the page's own anim-train slides the bus in).
   1 MetroBus 10 Gravois-Lindell pulling up to the Gravois / Morganford stop in Bevo Mill: the bus, the stop sign, red-brick storefronts on Gravois.
   2 The frozen custard stand on Chippewa ("My money I spend on jewels, I call it my ice cream"): the white stand with its icicle trim, the summer-night line, a cone.
   3 The Bevo Mill windmill at Gravois and Morganford: stone-and-stucco Old World mill house, the shingled tower, the four sails turning.
   4 Soulard Market: the red-brick arcade with the white trim and the center pavilion, the Saturday crowd, flower buckets.
   5 Gravois Ave and Ohio Ave on the Southside: green signs, JIBBS tagged on the brick, St. Francis de Sales' red-brick Gothic spire behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jbglow{0%,100%{opacity:.35}50%{opacity:1}}.jb-glow{animation:jbglow 1.6s ease-in-out infinite}.jb-g2{animation-delay:-.8s}.jb-g3{animation-delay:-.4s}' +
    '@keyframes jbspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.jb-sails{transform-box:view-box;transform-origin:200px 92px;animation:jbspin 9s linear infinite}' +
    '@keyframes jbbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.jb-bob{animation:jbbob 1s ease-in-out infinite}.jb-b2{animation-delay:-.5s}.jb-b3{animation-delay:-.25s}' +
    '@keyframes jbdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(14px);opacity:0}}.jb-drip{animation:jbdrip 1.8s ease-in infinite}' +
    '@keyframes jbcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.jb-cloud{animation:jbcloud 30s linear infinite}.jb-c2{animation-duration:42s;animation-delay:-18s}' +
    '@keyframes jbsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jb-sp{animation:jbsp 1.4s ease-out infinite}.jb-sp2{animation-delay:.45s}' +
    '@keyframes jbbird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.jb-bird{animation:jbbird 12s linear infinite}' +
    '@keyframes jbtwinkle{0%,100%{opacity:.2}50%{opacity:1}}.jb-tw{animation:jbtwinkle 2.2s ease-in-out infinite}.jb-tw2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const ICE = "#7fe3ff", GOLD = "#ffc93c", RED = "#ff4d6d", BUS = "#00539f";
  const cloud = (x, y, cls) => '<g class="jb-cloud ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="16" cy="-6" rx="14" ry="9"/><ellipse cx="-14" cy="-3" rx="11" ry="7"/></g></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="jb-tw' + (i % 2 ? " jb-tw2" : "") + '" cx="' + ((i * 89 + 13) % 400) + '" cy="' + (8 + (i * 47) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };

  /* red-brick South City storefront with a flat parapet and stone trim */
  const store = (x, y, w, c, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (194 - y) + '" fill="' + c + '"/><rect x="' + (x - 2) + '" y="' + (y - 6) + '" width="' + (w + 4) + '" height="8" fill="#d9cdb8"/>' +
    Array.from({ length: Math.floor((w - 8) / 24) }, (_, k) => '<rect x="' + (x + 8 + k * 24) + '" y="' + (y + 12) + '" width="14" height="22" fill="' + (lit && k % 2 ? "#ffd98a" : "#2b2e3a") + '"/><rect x="' + (x + 6 + k * 24) + '" y="' + (y + 10) + '" width="18" height="3" fill="#d9cdb8"/>').join("") +
    '<rect x="' + (x + 4) + '" y="' + (y + 48) + '" width="' + (w - 8) + '" height="8" fill="#3a2a22"/><rect x="' + (x + 6) + '" y="' + (y + 58) + '" width="' + (w - 12) + '" height="' + (194 - y - 62) + '" fill="#2f3a44"/>';

  /* 1. MetroBus 10 Gravois-Lindell at the Gravois / Morganford stop, Bevo Mill */
  function jbstation() {
    const bus = '<g class="anim-train"><rect x="40" y="128" width="300" height="78" rx="10" fill="#f4f4f2" stroke="#8a8f96" stroke-width="2"/>' +
      '<rect x="40" y="186" width="300" height="10" fill="' + BUS + '"/><rect x="40" y="196" width="300" height="4" fill="#d6293a"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (56 + i * 38) + '" y="140" width="30" height="30" rx="3" fill="#1d262e"/>').join("") +
      '<rect x="300" y="138" width="36" height="46" rx="4" fill="#1d262e"/><rect x="292" y="129" width="46" height="8" rx="2" fill="#111"/>' +
      '<text x="315" y="135.5" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="5.4" fill="#ffb02e" class="jb-glow">10 GRAVOIS</text>' +
      '<rect x="250" y="140" width="40" height="56" rx="2" fill="#2b3640"/><path d="M270 140v56" stroke="#8a8f96" stroke-width="2"/>' +
      '<circle cx="90" cy="206" r="13" fill="#1a1a1a"/><circle cx="90" cy="206" r="5" fill="#888"/><circle cx="290" cy="206" r="13" fill="#1a1a1a"/><circle cx="290" cy="206" r="5" fill="#888"/>' +
      '<circle cx="334" cy="192" r="4" fill="#fff6c2"/><rect x="340" y="150" width="6" height="16" rx="2" fill="#333"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jb1)"/>' + cloud(60, 30) + cloud(250, 46, "jb-c2") +
      '<g class="jb-bird"><path d="M0 26q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      store(0, 70, 96, "#9a4632", true) + store(100, 82, 90, "#8a3e2c") + store(194, 66, 104, "#a54e36", true) + store(302, 78, 98, "#93432f") +
      '<rect x="0" y="190" width="400" height="18" fill="#bdb7ac"/><rect x="0" y="206" width="400" height="54" fill="#3a3a40"/>' +
      '<path d="M0 238h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 10"/>' +
      bus +
      '<rect x="370" y="104" width="4" height="96" fill="#555"/><rect x="352" y="86" width="40" height="36" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="372" y="100" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text><text x="372" y="116" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">10</text>' +
      '<rect x="4" y="214" width="180" height="38" rx="3" fill="#111"/><text x="14" y="230" ' + font + ' font-size="12" fill="#fff">Gravois / Morganford</text><text x="14" y="245" ' + font + ' font-size="9" fill="#c8c8c8">BEVO MILL · SOUTHSIDE ST. LOUIS</text>',
      sky("jb1", "#8fc7ee", "#f5ead6"));
  }

  /* 2. The frozen custard stand on Chippewa, a summer night */
  function jbcustard() {
    const icicles = Array.from({ length: 22 }, (_, i) => '<path d="M' + (92 + i * 10) + ' 98l5 ' + (10 + (i % 3) * 5) + 'l5 -' + (10 + (i % 3) * 5) + 'z" fill="#f4fbff" stroke="#b8d8e8" stroke-width=".8"/>').join("");
    const person = (x, c, cls) => '<g class="jb-bob ' + cls + '"><circle cx="' + x + '" cy="184" r="7" fill="#3a2a22"/><rect x="' + (x - 8) + '" y="192" width="16" height="26" rx="5" fill="' + c + '"/><rect x="' + (x - 7) + '" y="216" width="5" height="18" fill="#222"/><rect x="' + (x + 2) + '" y="216" width="5" height="18" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jb2)"/>' + stars(16) +
      '<rect x="0" y="196" width="400" height="64" fill="#55555c"/><rect x="0" y="192" width="400" height="6" fill="#c9c3b8"/>' +
      /* the stand: white clapboard, red-trimmed roof, icicle eaves */
      '<path d="M78 98l122 -44l122 44z" fill="#e8e4dc" stroke="#9a9488" stroke-width="2"/><path d="M78 98h244" stroke="' + RED + '" stroke-width="4"/>' +
      icicles +
      '<rect x="90" y="110" width="220" height="86" fill="#fbfaf6"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M90 ' + (116 + i * 8) + 'h220" stroke="#e2ded4" stroke-width="1"/>').join("") +
      [104, 168, 232].map((x, i) => '<rect x="' + x + '" y="124" width="56" height="44" fill="#ffe8a8" class="' + (i === 1 ? "jb-glow jb-g2" : "") + '"/><rect x="' + x + '" y="124" width="56" height="44" fill="none" stroke="#9a9488" stroke-width="2"/><rect x="' + (x - 2) + '" y="168" width="60" height="5" fill="#c9c3b8"/>').join("") +
      '<rect x="134" y="76" width="132" height="18" rx="3" fill="#fff" stroke="' + RED + '" stroke-width="2"/><text x="200" y="89" text-anchor="middle" ' + font + ' font-size="11" letter-spacing="1" fill="' + RED + '">FROZEN CUSTARD</text>' +
      /* the line */
      person(60, "#2e6fd1", "") + person(84, "#e0a32e", "jb-b2") + person(330, "#d1386b", "jb-b3") + person(356, "#3aa86b", "") +
      /* a giant cone in front */
      '<g transform="translate(200 186)"><path d="M-14 0l14 48l14 -48z" fill="#d9a35a" stroke="#8a5a20" stroke-width="2"/><path d="M-10 10l18 10M-8 22l14 8M-12 4l22 2" stroke="#8a5a20" stroke-width="1"/>' +
      '<ellipse cx="0" cy="-4" rx="18" ry="12" fill="#fff6dc" stroke="#d8c8a0" stroke-width="1.5"/><ellipse cx="2" cy="-14" rx="12" ry="9" fill="#fff6dc" stroke="#d8c8a0" stroke-width="1.5"/>' +
      '<circle class="jb-drip" cx="-12" cy="4" r="2.5" fill="#fff6dc"/>' +
      '<path d="M-20 -10q20 22 40 0" stroke="' + GOLD + '" stroke-width="2.5" fill="none" stroke-dasharray="3 2"/><circle cx="0" cy="2" r="4" fill="' + ICE + '" stroke="#fff" stroke-width="1"/></g>',
      sky("jb2", "#1a2450", "#e07a5a"));
  }

  /* 3. The Bevo Mill windmill at Gravois and Morganford */
  function jbbevo() {
    const sail = r => '<g transform="rotate(' + r + ' 200 92)"><rect x="197" y="-6" width="6" height="96" fill="#4a3426"/>' +
      '<rect x="203" y="-2" width="20" height="78" fill="none" stroke="#6a4a34" stroke-width="2"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M203 ' + (8 + i * 11) + 'h20" stroke="#6a4a34" stroke-width="1.5"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jb3)"/>' + cloud(40, 40) + cloud(300, 26, "jb-c2") +
      '<rect x="0" y="206" width="400" height="54" fill="#47474c"/><rect x="0" y="200" width="400" height="8" fill="#c9c3b8"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 10"/>' +
      /* the mill house: rough stone base, cream stucco with brown timbers, steep roof */
      '<rect x="110" y="150" width="200" height="52" fill="#9a8f7e"/>' + Array.from({ length: 16 }, (_, i) => '<rect x="' + (112 + (i % 8) * 25 + (i > 7 ? 12 : 0)) + '" y="' + (154 + (i > 7 ? 22 : 0)) + '" width="20" height="16" rx="3" fill="#8a7f6e" stroke="#6e6556" stroke-width="1"/>').join("") +
      '<rect x="120" y="116" width="180" height="36" fill="#efe6d2"/><path d="M120 116h180M120 134h180M150 116v36M180 116v36M240 116v36M270 116v36M150 116l30 36M270 116l-30 36" stroke="#5a3a26" stroke-width="3" fill="none"/>' +
      '<path d="M104 118l46 -32h120l46 32z" fill="#7a3a2a" stroke="#4a2018" stroke-width="2"/>' +
      [136, 254].map(x => '<rect x="' + x + '" y="160" width="26" height="30" rx="2" fill="#ffd98a" class="jb-glow jb-g3"/><path d="M' + (x + 13) + ' 160v30M' + x + ' 175h26" stroke="#5a3a26" stroke-width="2"/>').join("") +
      '<path d="M190 202v-30q10 -10 20 0v30z" fill="#4a2a1a"/>' +
      /* the tower: dark brown shingles, tapering, with a cap */
      '<path d="M174 92l6 -56h40l6 56z" fill="#5e4636" stroke="#3a2a20" stroke-width="2"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (175 + i * 0.6) + ' ' + (44 + i * 7) + 'h' + (50 - i * 1.2) + '" stroke="#4a3428" stroke-width="1.5"/>').join("") +
      '<path d="M172 40q28 -26 56 0z" fill="#4a3428" stroke="#2e2018" stroke-width="2"/><rect x="194" y="62" width="12" height="16" rx="6" fill="#ffd98a"/>' +
      '<g class="jb-sails">' + [0, 90, 180, 270].map(sail).join("") + '</g><circle cx="200" cy="92" r="7" fill="#2e2018" stroke="#6a4a34" stroke-width="2"/>' +
      '<rect x="320" y="150" width="4" height="52" fill="#555"/><rect x="298" y="132" width="50" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="323" y="146" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">GRAVOIS</text>',
      sky("jb3", "#6fb6ea", "#fbe3b8"));
  }

  /* 4. Soulard Market: the red-brick arcade, white trim, the center pavilion, Saturday crowd */
  function jbsoulard() {
    const arch = (x, w) => '<path d="M' + x + ' 196v-44q' + w / 2 + ' -' + (w * 0.7) + ' ' + w + ' 0v44z" fill="#2b2a30"/><path d="M' + x + ' 152q' + w / 2 + ' -' + (w * 0.7) + ' ' + w + ' 0" stroke="#f3ede0" stroke-width="3" fill="none"/>';
    const buckets = Array.from({ length: 6 }, (_, i) => '<rect x="' + (30 + i * 60) + '" y="206" width="22" height="16" rx="2" fill="#6b7178"/>' +
      [0, 1, 2].map(k => '<circle cx="' + (34 + i * 60 + k * 7) + '" cy="' + (202 - k % 2 * 4) + '" r="5" fill="' + [RED, GOLD, "#ff8fc7", "#b48cff"][(i + k) % 4] + '"/>').join("")).join("");
    const shopper = (x, c, cls) => '<g class="jb-bob ' + cls + '"><circle cx="' + x + '" cy="212" r="6" fill="#3a2a22"/><rect x="' + (x - 7) + '" y="219" width="14" height="22" rx="5" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jb4)"/>' + cloud(80, 30) +
      '<rect x="0" y="196" width="400" height="64" fill="#8a8478"/>' +
      /* wings */
      '<rect x="0" y="120" width="400" height="78" fill="#a8432f"/><rect x="0" y="114" width="400" height="8" fill="#f3ede0"/>' +
      [8, 48, 88, 272, 312, 352].map(x => arch(x, 32)).join("") +
      /* center pavilion with pediment */
      '<rect x="138" y="80" width="124" height="118" fill="#b24a34"/><path d="M130 82l70 -38l70 38z" fill="#f3ede0" stroke="#c9c0ae" stroke-width="2"/><path d="M146 78l54 -28l54 28z" fill="#b24a34"/>' +
      '<circle cx="200" cy="66" r="8" fill="#f3ede0"/><circle cx="200" cy="66" r="5" fill="#2b2a30"/>' +
      '<rect x="134" y="80" width="132" height="6" fill="#f3ede0"/>' + [144, 248].map(x => '<rect x="' + x + '" y="86" width="8" height="112" fill="#f3ede0"/>').join("") +
      arch(162, 76) +
      '<rect x="160" y="92" width="80" height="14" fill="#f3ede0"/><text x="200" y="103" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="10" letter-spacing="1.5" fill="#8a2e1e">SOULARD MARKET</text>' +
      buckets + shopper(120, "#2e6fd1", "") + shopper(186, "#e0a32e", "jb-b2") + shopper(240, "#3aa86b", "jb-b3") + shopper(300, "#d1386b", ""),
      sky("jb4", "#86c4ee", "#f6ecd6"));
  }

  /* 5. Gravois Ave and Ohio Ave: green signs, JIBBS tagged, St. Francis de Sales' Gothic spire behind */
  function jbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jb5)"/>' + stars(14) +
      /* St. Francis de Sales: red-brick Gothic nave and the one tall spire */
      '<rect x="110" y="96" width="150" height="50" fill="#8a3a2a"/><path d="M110 96l75 -22l75 22z" fill="#5e2a20"/>' +
      '<rect x="168" y="56" width="34" height="90" fill="#9a4432"/><path d="M166 58l19 -50l19 50z" fill="#6a3026" stroke="#c8b89a" stroke-width="1.2"/>' +
      '<rect x="183" y="2" width="4" height="8" fill="#c8b89a"/><path d="M180 6h10" stroke="#c8b89a" stroke-width="2"/>' +
      '<path d="M174 92v-16q11 -12 22 0v16z" fill="#2a3442"/><circle cx="185" cy="108" r="8" fill="#ffd98a" class="jb-glow"/>' +
      [124, 232].map(x => '<path d="M' + x + ' 140v-24q7 -10 14 0v24z" fill="#ffd98a" opacity=".8"/>').join("") +
      '<g fill="#22263a"><rect x="0" y="100" width="96" height="46"/><rect x="276" y="92" width="60" height="54"/><rect x="342" y="106" width="58" height="40"/></g>' +
      '<rect x="0" y="140" width="400" height="84" fill="#7a3a2a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (148 + i * 8) + 'h400" stroke="#6a3022" stroke-width="1"/>').join("") +
      tag("JIBBS", 22, 200, 60, ICE, -6) + tag("BIG BIG KID", 190, 180, 22, GOLD, -4) + tag("YEAH BOII", 200, 214, 20, RED, -3) + tag("314", 30, 218, 16, "#fff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="104" width="6" height="120" fill="#2f2f2f"/>' + sign(312, 104, 88, "Gravois Ave") + sign(318, 130, 76, "Ohio Ave") +
      '<g class="jb-sp"><circle cx="152" cy="170" r="3" fill="' + ICE + '" opacity=".7"/></g><g class="jb-sp jb-sp2"><circle cx="158" cy="164" r="2" fill="' + ICE + '" opacity=".6"/></g>',
      sky("jb5", "#141a3a", "#d0704e"));
  }

  window.SCENES = { jbstation: jbstation, jbcustard: jbcustard, jbbevo: jbbevo, jbsoulard: jbsoulard, jbcorner: jbcorner };
})();
