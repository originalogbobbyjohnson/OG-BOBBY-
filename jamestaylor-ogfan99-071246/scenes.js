/* jamestaylor scenes (Regions tab: Boston + New England; Martha's Vineyard / Boston / the Berkshires). CSS classes prefixed jt- (the page's own anim-train is kept on the ferry).
   1 Vineyard Haven ferry terminal, Martha's Vineyard: the island ferry from Woods Hole sliding up to the gray-shingled terminal, black sign with the FERRY badge, gulls.
   2 Mass General Hospital, Boston, where he was born: the pale granite Bulfinch Building, Ionic portico, the Ether Dome on top, a stork crossing the dusk sky.
   3 The Mass Pike in the Berkshires on the first of December ("the turnpike from Stockbridge to Boston"): snowy hills, pines, green guide sign, snow falling, a car's headlights.
   4 Tanglewood, Lenox: the open-sided Koussevitzky Music Shed glowing at night, the lawn with blankets and lanterns, notes drifting up, fireflies.
   5 Main St and Union St, Vineyard Haven: green signs, JT tagged on the shingled wall, West Chop Light sweeping its beam over the harbor behind. */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes jtflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.jt-flk{animation:jtflick 2.2s infinite}.jt-flk2{animation-delay:.7s}' +
    '@keyframes jtrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.jt-rip{animation:jtrip 3s ease-in-out infinite}.jt-rip2{animation-delay:-1.5s}' +
    '@keyframes jtgull{from{transform:translate(-50px,0)}to{transform:translate(450px,-24px)}}.jt-gull{animation:jtgull 12s linear infinite}.jt-gull2{animation-delay:-6s}' +
    '@keyframes jtstork{from{transform:translate(-80px,10px)}to{transform:translate(480px,-14px)}}.jt-stork{animation:jtstork 14s linear infinite}' +
    '@keyframes jtsnow{from{transform:translateY(-30px)}to{transform:translateY(270px)}}.jt-snow{animation:jtsnow 6s linear infinite}.jt-snow2{animation-delay:-2s;animation-duration:7s}.jt-snow3{animation-delay:-4s;animation-duration:8s}' +
    '@keyframes jtcar{from{transform:translateX(420px)}to{transform:translateX(-160px)}}.jt-car{animation:jtcar 7s linear infinite}' +
    '@keyframes jtnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(26px,-40px);opacity:0}}.jt-note{animation:jtnote 3.2s ease-out infinite}.jt-note2{animation-delay:-1.1s}.jt-note3{animation-delay:-2.2s}' +
    '@keyframes jtfly{0%,100%{opacity:0}50%{opacity:1}}.jt-fly{animation:jtfly 2.4s ease-in-out infinite}.jt-fly2{animation-delay:-.8s}.jt-fly3{animation-delay:-1.6s}' +
    '@keyframes jtbeam{0%,100%{transform:rotate(-38deg)}50%{transform:rotate(38deg)}}.jt-beam{transform-box:view-box;transform-origin:198px 92px;animation:jtbeam 5s ease-in-out infinite}' +
    '@keyframes jtsail{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.jt-sail{animation:jtsail 18s linear infinite}' +
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
  const shingles = (x, y, w, h, c) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let r = y + 7; r < y + h; r += 7) { s += '<path d="M' + x + ' ' + r + 'h' + w + '" stroke="#5f5b55" stroke-width=".7" opacity=".55"/>'; for (let q = x + ((r / 7) % 2 ? 5 : 0); q < x + w; q += 10) s += '<path d="M' + q + ' ' + (r - 7) + 'v7" stroke="#5f5b55" stroke-width=".5" opacity=".4"/>'; } return s; };
  const pill = (x, y, color, label) => '<rect x="' + x + '" y="' + y + '" width="' + (label.length * 7 + 14) + '" height="17" rx="8.5" fill="' + color + '"/><text x="' + (x + (label.length * 7 + 14) / 2) + '" y="' + (y + 12.5) + '" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff">' + label + '</text>';
  const gull = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q6-6 12 0q6-6 12 0" fill="none" stroke="#f4f1e8" stroke-width="2"/></g>';
  const sailboat = (cls, x, y, c) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'h34l-6 8h-22z" fill="#f4f1e8"/><path d="M' + (x + 16) + ' ' + y + 'v-34l16 30z" fill="' + c + '"/><path d="M' + (x + 14) + ' ' + y + 'v-28l-12 26z" fill="#fff"/></g>';
  const pine = (x, y, s, c) => '<path d="M' + x + ' ' + (y - 40 * s) + 'l' + (14 * s) + ' ' + (22 * s) + 'h' + (-6 * s) + 'l' + (10 * s) + ' ' + (16 * s) + 'h' + (-36 * s) + 'l' + (10 * s) + ' ' + (-16 * s) + 'h' + (-6 * s) + 'z" fill="' + c + '"/><rect x="' + (x - 2 * s) + '" y="' + (y - 2 * s) + '" width="' + (4 * s) + '" height="' + (6 * s) + '" fill="#3b2a1e"/>';
  const GOLD = "#f2c879", CBLUE = "#6aa9d8", RUST = "#d9603b", FERRY = "#1f4e79", GRANITE = "#cfcabd";

  /* 1. Vineyard Haven ferry terminal */
  function jtferry() {
    let piles = "";
    for (let x = 6; x < 400; x += 26) piles += '<rect x="' + x + '" y="190" width="8" height="28" fill="#4b3d30"/>';
    const boat = '<g class="anim-train">' +
      '<path d="M20 150h330l-18 44H40z" fill="#16181b"/>' +
      '<rect x="40" y="118" width="280" height="34" fill="#f4f3ef" stroke="#9aa0a6" stroke-width="1.5"/>' +
      Array.from({ length: 11 }, (_, i) => '<rect x="' + (50 + i * 24) + '" y="126" width="16" height="12" rx="2" fill="#1d2b3a"/>').join("") +
      '<rect x="90" y="94" width="170" height="26" fill="#f4f3ef" stroke="#9aa0a6" stroke-width="1.5"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (100 + i * 22) + '" y="100" width="14" height="10" rx="2" fill="#1d2b3a"/>').join("") +
      '<rect x="140" y="78" width="60" height="18" fill="#f4f3ef" stroke="#9aa0a6" stroke-width="1.5"/><rect x="146" y="82" width="48" height="8" fill="#1d2b3a"/>' +
      '<rect x="210" y="68" width="16" height="28" fill="#16181b"/><rect x="210" y="68" width="16" height="6" fill="' + FERRY + '"/>' +
      '<rect x="20" y="150" width="330" height="5" fill="' + FERRY + '"/>' +
      '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jts1)"/>' +
      '<path d="M0 132q60-14 120-6t140-4t140 6v20H0z" fill="#41604a"/>' +
      '<rect x="0" y="150" width="400" height="70" fill="#1f4a63"/>' +
      '<g class="jt-rip"><path d="M10 170h40M90 182h50M190 168h44M300 186h56" stroke="#7fb3cf" stroke-width="2" opacity=".6"/></g>' +
      '<g class="jt-rip jt-rip2"><path d="M40 200h40M150 204h40M250 198h50M350 206h40" stroke="#7fb3cf" stroke-width="2" opacity=".5"/></g>' +
      boat +
      '<rect x="0" y="214" width="400" height="46" fill="#7a6a58"/>' + piles +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 214v46" stroke="#5c4f41" stroke-width="1"/>').join("") +
      shingles(300, 150, 100, 64, "#a39d93") + '<path d="M292 150l58-26 58 26z" fill="#4f4a45"/>' +
      '<rect x="318" y="172" width="16" height="22" fill="#f4f1e8"/><rect x="346" y="172" width="16" height="22" fill="#f4f1e8"/><rect x="374" y="172" width="16" height="22" fill="#f4f1e8"/>' +
      '<rect x="321" y="175" width="10" height="16" fill="#ffd98a" class="jt-flk"/><rect x="349" y="175" width="10" height="16" fill="#ffd98a" class="jt-flk jt-flk2"/>' +
      '<rect x="18" y="20" width="196" height="50" rx="3" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<text x="30" y="44" ' + F + ' font-weight="700" font-size="17" fill="#fff">Vineyard Haven</text>' +
      pill(30, 49, FERRY, "FERRY") + '<text x="88" y="61" ' + F + ' font-size="10" fill="#cfd3d8">to Woods Hole</text>' +
      gull("jt-gull", 0, 40) + gull("jt-gull jt-gull2", 0, 70),
      sky("jts1", "#f6c98a", "#9fc6dd"));
  }

  /* 2. Mass General, Bulfinch Building + Ether Dome */
  function jtmgh() {
    let cols = "";
    for (let i = 0; i < 8; i++) { const x = 138 + i * 18; cols += '<rect x="' + x + '" y="124" width="9" height="68" fill="#eeeae0"/><rect x="' + (x - 3) + '" y="120" width="15" height="5" fill="#e0dbcf"/><rect x="' + (x - 2) + '" y="190" width="13" height="4" fill="#e0dbcf"/>'; }
    let wins = "";
    [[40, 130], [70, 130], [100, 130], [290, 130], [320, 130], [350, 130], [40, 166], [70, 166], [100, 166], [290, 166], [320, 166], [350, 166]].forEach(p => wins += '<rect x="' + p[0] + '" y="' + p[1] + '" width="14" height="22" fill="#ffd98a" class="' + (p[0] % 60 ? "jt-flk" : "") + '"/><rect x="' + (p[0] - 2) + '" y="' + (p[1] + 22) + '" width="18" height="3" fill="#b9b3a5"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#jts2)"/>' + stars(10) +
      '<rect x="0" y="150" width="30" height="60" fill="#2a3042"/><rect x="370" y="140" width="30" height="70" fill="#2a3042"/>' +
      '<rect x="30" y="112" width="340" height="96" fill="' + GRANITE + '"/>' +
      '<rect x="30" y="108" width="340" height="6" fill="#b9b3a5"/>' + wins +
      '<path d="M128 120l72-30 72 30z" fill="#e4dfd3" stroke="#b9b3a5" stroke-width="2"/>' +
      '<rect x="128" y="116" width="144" height="6" fill="#d6d1c4"/>' + cols +
      '<rect x="176" y="150" width="48" height="44" fill="#3a2f26"/><path d="M176 150q24-14 48 0z" fill="#3a2f26"/>' +
      '<rect x="160" y="66" width="80" height="26" fill="#d6d1c4"/>' +
      '<path d="M164 66q36-42 72 0z" fill="#9aa3a8" stroke="#6d757a" stroke-width="2"/>' +
      '<rect x="190" y="30" width="20" height="10" fill="#c9eef5" opacity=".85" class="jt-flk"/><path d="M188 30h24l-12-8z" fill="#6d757a"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#5e5a54"/><rect x="110" y="194" width="180" height="14" fill="#cfc9bb"/><rect x="100" y="204" width="200" height="6" fill="#bdb6a6"/>' +
      '<path d="M0 232h400" stroke="#d9d5cb" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="jt-stork"><path d="M30 46q12-12 26-4l10-2-8 6q-10 10-26 2z" fill="#f4f1e8"/><path d="M66 40l12-2" stroke="' + RUST + '" stroke-width="2"/><path d="M34 44q-8-10-14-4" stroke="#222" stroke-width="2" fill="none"/>' +
      '<path d="M46 50v10" stroke="#888" stroke-width="1.4"/><path d="M38 60h16l-3 10h-10z" fill="' + CBLUE + '"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + A + ' font-size="14" fill="' + GOLD + '" letter-spacing="1">BORN IN BOSTON</text>',
      sky("jts2", "#1d2340", "#c27a5b"));
  }

  /* 3. The Mass Pike in the Berkshires, first of December */
  function jtpike() {
    let snow = "";
    for (let k = 0; k < 3; k++) { let g = '<g class="jt-snow' + (k ? " jt-snow" + (k + 1) : "") + '">'; for (let i = 0; i < 22; i++) g += '<circle cx="' + ((i * 37 + k * 13) % 400) + '" cy="' + ((i * 53 + k * 29) % 250) + '" r="' + (1.2 + (i % 3) * .5) + '" fill="#fff" opacity=".85"/>'; snow += g + '</g>'; }
    let trees = "";
    for (let i = 0; i < 12; i++) trees += pine(10 + i * 36, 150 + (i % 3) * 4, .8 + (i % 2) * .2, i % 2 ? "#1f3d2e" : "#2a4a38");
    return svg(
      '<rect width="400" height="260" fill="url(#jts3)"/>' +
      '<path d="M0 120q60-50 130-26t120-30t150 34v60H0z" fill="#8e9cb0"/>' +
      '<path d="M0 132q80-34 160-14t130-16t110 20v40H0z" fill="#e8edf3"/>' +
      trees +
      '<path d="M0 160h400v100H0z" fill="#eef2f6"/>' +
      '<path d="M0 176L400 168V236L0 252z" fill="#4a4f57"/>' +
      '<path d="M0 214L400 202" stroke="#e7d36a" stroke-width="2.5" stroke-dasharray="18 14"/>' +
      '<g class="jt-car"><rect x="0" y="198" width="56" height="16" rx="5" fill="' + RUST + '"/><path d="M10 198l8-10h22l8 10z" fill="#a8442a"/><rect x="20" y="190" width="9" height="7" fill="#c9e3f2"/><rect x="31" y="190" width="9" height="7" fill="#c9e3f2"/>' +
      '<circle cx="12" cy="214" r="5" fill="#111"/><circle cx="44" cy="214" r="5" fill="#111"/><circle cx="2" cy="205" r="3" fill="#fff3b0"/><path d="M0 203l-40-6v16z" fill="#fff3b0" opacity=".35"/></g>' +
      '<rect x="234" y="56" width="5" height="120" fill="#7b828a"/><rect x="346" y="56" width="5" height="120" fill="#7b828a"/>' +
      '<rect x="216" y="30" width="154" height="62" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="293" y="52" text-anchor="middle" ' + F + ' font-weight="700" font-size="15" fill="#fff">Stockbridge</text>' +
      '<text x="293" y="72" text-anchor="middle" ' + F + ' font-weight="700" font-size="15" fill="#fff">Boston  &#8594;</text>' +
      '<text x="293" y="86" text-anchor="middle" ' + F + ' font-size="9" fill="#d7f0df">MASS PIKE EAST</text>' +
      '<path d="M216 30h154" stroke="#fff" stroke-width="5" opacity=".75"/>' +
      snow,
      sky("jts3", "#7f8ea6", "#d5dde8"));
  }

  /* 4. Tanglewood, the Koussevitzky Music Shed */
  function jttangle() {
    let ribs = "";
    for (let i = 0; i < 9; i++) ribs += '<path d="M' + (90 + i * 27.5) + ' 94v66" stroke="#3a2c20" stroke-width="3"/>';
    let blankets = "";
    [[20, 214, RUST], [96, 226, CBLUE], [176, 216, GOLD], [256, 230, "#7fae6a"], [330, 214, "#c6586f"]].forEach(b => blankets += '<path d="M' + b[0] + ' ' + b[1] + 'l52-4 6 14-54 4z" fill="' + b[2] + '"/><circle class="jt-flk" cx="' + (b[0] + 40) + '" cy="' + (b[1] - 2) + '" r="3" fill="#ffe7a8"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#jts4)"/>' + stars(16) +
      '<path d="M0 150q40-30 80-10q30-30 70-4h100q40-30 80 0q40-18 70 6v40H0z" fill="#16261c"/>' +
      '<path d="M70 98L200 70l130 28v10H70z" fill="#5d5a52" stroke="#3a3833" stroke-width="2"/>' +
      '<path d="M78 108h244l8 52H70z" fill="#ffcf7a" opacity=".85"/>' +
      '<path d="M120 118h160l10 42H110z" fill="#ffe6b0"/>' + ribs +
      '<rect x="150" y="136" width="100" height="24" fill="#8a5a33"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (158 + i * 15) + '" y="128" width="4" height="10" fill="#3a2c20"/>').join("") +
      '<path d="M70 160h260" stroke="#3a2c20" stroke-width="4"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#2f5a2b"/>' +
      '<path d="M0 160q200 20 400 0v12q-200 22-400 0z" fill="#3b6b34"/>' + blankets +
      '<g class="jt-note"><text x="170" y="134" ' + F + ' font-size="20" fill="' + GOLD + '">&#9834;</text></g>' +
      '<g class="jt-note jt-note2"><text x="214" y="130" ' + F + ' font-size="18" fill="' + CBLUE + '">&#9835;</text></g>' +
      '<g class="jt-note jt-note3"><text x="250" y="136" ' + F + ' font-size="20" fill="#fff">&#9834;</text></g>' +
      '<circle class="jt-fly" cx="40" cy="190" r="2" fill="#f6f39a"/><circle class="jt-fly jt-fly2" cx="130" cy="200" r="2" fill="#f6f39a"/><circle class="jt-fly jt-fly3" cx="300" cy="196" r="2" fill="#f6f39a"/><circle class="jt-fly jt-fly2" cx="372" cy="186" r="2" fill="#f6f39a"/>' +
      '<text x="200" y="40" text-anchor="middle" ' + A + ' font-size="20" fill="' + GOLD + '" letter-spacing="2">TANGLEWOOD</text>' +
      '<text x="200" y="56" text-anchor="middle" ' + F + ' font-size="10" fill="#e8e2d0">LENOX, IN THE BERKSHIRES</text>',
      sky("jts4", "#0b1530", "#2d3b63"));
  }

  /* 5. Main St and Union St, Vineyard Haven */
  function jtcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jts5)"/>' + stars(12) +
      '<g class="jt-beam"><path d="M198 92L350 70V114z" fill="#fff6c8" opacity=".25"/><path d="M198 92L46 70V114z" fill="#fff6c8" opacity=".18"/></g>' +
      '<rect x="0" y="118" width="400" height="20" fill="#20405a"/>' +
      '<path d="M150 124q30-14 90-8t40 4v8H150z" fill="#2c3b2c"/>' +
      '<path d="M190 124l3-38h10l3 38z" fill="#f4f1e8"/><rect x="189" y="78" width="18" height="10" fill="#1b1b1b"/><rect x="192" y="80" width="12" height="7" fill="#fff3b0" class="jt-flk"/><path d="M188 78l10-8 10 8z" fill="#1b1b1b"/>' +
      '<rect x="212" y="112" width="18" height="12" fill="#f4f1e8"/><path d="M210 112l11-7 11 7z" fill="#8b2b25"/>' +
      sailboat("jt-sail", 0, 130, RUST) +
      shingles(0, 138, 400, 78, "#a39d93") +
      '<rect x="0" y="136" width="400" height="5" fill="#f4f1e8"/>' +
      '<rect x="220" y="160" width="26" height="40" fill="#f4f1e8"/><rect x="223" y="163" width="20" height="34" fill="#ffd98a" class="jt-flk jt-flk2"/>' +
      tag("JT", 36, 200, 66, GOLD, -6) + tag("SWEET BABY JAMES", 112, 170, 18, CBLUE, -4) + tag("SHOWER THE PEOPLE", 104, 202, 15, RUST, -3) +
      '<rect x="0" y="214" width="400" height="46" fill="#4a4741"/><rect x="0" y="214" width="400" height="5" fill="#9a958c"/>' +
      '<path d="M0 240h400" stroke="#d9d5cb" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="332" y="66" width="5" height="150" fill="#4a5058"/>' +
      '<rect x="282" y="58" width="106" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="335" y="73" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Main St</text>' +
      '<rect x="282" y="82" width="106" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="335" y="97" text-anchor="middle" ' + F + ' font-weight="700" font-size="12" fill="#fff">Union St</text>' +
      '<circle class="jt-flk" cx="20" cy="26" r="4" fill="#ffe7a8"/>',
      sky("jts5", "#0b1622", "#33466a"));
  }

  window.SCENES = { jtferry, jtmgh, jtpike, jttangle, jtcorner };
})();
