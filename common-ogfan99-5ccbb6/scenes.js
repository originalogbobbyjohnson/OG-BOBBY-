/* common scenes (Regions tab: Chicago; Avalon Park / Calumet Heights, South Side). CSS classes and ids prefixed cm- (the page's own anim-train is kept).
   1 87th on the CTA Red Line: the station in the middle of the Dan Ryan Expressway, traffic on both sides, a silver Red Line train sliding in.
   2 Luther High School South (87th St & Kedzie Ave), where he started rhyming in the trio C.D.R.: low brown-brick school, a cross on the tower, notebook pages blowing.
   3 The old Chicago Stadium on W Madison St, where his father got him a job with the Bulls as a teen: the brown-brick barn with its tall arched front, searchlights sweeping, a ball bouncing.
   4 The Museum of Science and Industry in Jackson Park, Hyde Park (he was born in Hyde Park): the pale columned hall with its green copper dome over the lagoon, ripples moving.
   5 E 89th St and S Bennett Ave in Avalon Park ("near 89th and Bennett"): green signs, COMMON tagged, the white Aon Center rising over the far skyline.
   No logos, no faces; no 9 is drawn as a numeral anywhere except as text in a sans font with a straight stem. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.cm-flk{animation:cmflick 2.2s infinite}.cm-flk2{animation-delay:.7s}' +
    '@keyframes cmcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.cm-car{animation:cmcar 6s linear infinite}.cm-car2{animation-delay:-3s}' +
    '@keyframes cmcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.cm-carL{animation:cmcarL 7s linear infinite}.cm-carL2{animation-delay:-3.5s}' +
    '@keyframes cmpage{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(160px,-90px) rotate(200deg);opacity:0}}.cm-pg{animation:cmpage 4s linear infinite}.cm-pg2{animation-delay:-1.3s}.cm-pg3{animation-delay:-2.6s}' +
    '@keyframes cmbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.cm-beam{transform-box:fill-box;transform-origin:50% 100%;animation:cmbeam 3.4s ease-in-out infinite}.cm-beam2{animation-delay:-1.7s}' +
    '@keyframes cmball{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.cm-ball{animation:cmball .9s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes cmrip{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.cm-rip{animation:cmrip 2.4s linear infinite}' +
    '@keyframes cmduck{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}.cm-duck{animation:cmduck 7s ease-in-out infinite}' +
    '@keyframes cmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cm-sp{animation:cmspray 1.4s ease-out infinite}.cm-sp2{animation-delay:.45s}' +
    '@keyframes cmblink{0%,100%{opacity:.25}50%{opacity:1}}.cm-bl{animation:cmblink 1.6s ease-in-out infinite}.cm-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  /* a 9 drawn by hand: round head + straight stem (never a hooked, G-looking 9). x = left edge, y = baseline, sz = cap height */
  const nine = (x, y, sz, c) => { const r = sz * 0.25, w = sz * 0.17; return '<circle cx="' + (x + r + w / 2) + '" cy="' + (y - sz * 0.72 + r) + '" r="' + r + '" fill="none" stroke="' + c + '" stroke-width="' + w + '"/><path d="M' + (x + 2 * r + w / 2) + ' ' + (y - sz * 0.72 + r) + 'V' + y + '" stroke="' + c + '" stroke-width="' + w + '"/>'; };
  const signRaw = (x, y, w, inner) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + inner;
  const RED = "#c60c30", GOLD = "#e8b84a", CREAM = "#f3e6c8", OLIVE = "#7d8a3c";

  /* 1. 87th on the Red Line, in the middle of the Dan Ryan */
  function cmstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (46 + i * 48) + '" y="112" width="32" height="20" rx="3" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="26" y="102" width="328" height="58" rx="7" fill="#d4d8dc" stroke="#7a828a" stroke-width="2"/>' + win +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (34 + i * 20) + ' 138v18" stroke="#b9bfc5" stroke-width="1.5"/>').join("") +
      '<rect x="26" y="134" width="328" height="4" fill="' + RED + '"/>' +
      '<rect x="334" y="106" width="18" height="50" rx="4" fill="#b3b9bf"/><circle cx="344" cy="152" r="3.5" fill="#fff6c2"/>' +
      '<rect x="270" y="105" width="60" height="5" rx="1" fill="#111"/><rect x="270" y="98" width="60" height="12" rx="2" fill="#111"/><text x="300" y="107" text-anchor="middle" ' + font + ' font-size="8" fill="#ff5a6e">HOWARD</text></g>';
    const canopy = '<rect x="60" y="78" width="280" height="8" fill="#5a6470"/>' + [80, 200, 320].map(x => '<rect x="' + (x - 2) + '" y="86" width="4" height="74" fill="#5a6470"/>').join("") +
      '<g class="cm-flk"><rect x="110" y="86" width="40" height="3" fill="#fff3c4"/></g><g class="cm-flk cm-flk2"><rect x="250" y="86" width="40" height="3" fill="#fff3c4"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cms1)"/>' +
      '<g fill="#2f2a44"><rect x="0" y="50" width="40" height="40"/><rect x="44" y="60" width="30" height="30"/><rect x="330" y="56" width="34" height="34"/><rect x="368" y="46" width="32" height="44"/></g>' +
      '<g fill="#ffd98a" opacity=".6"><rect x="10" y="60" width="5" height="7"/><rect x="54" y="68" width="5" height="7"/><rect x="342" y="64" width="5" height="7"/><rect x="380" y="56" width="5" height="7"/></g>' +
      /* expressway lanes both sides */
      '<rect x="0" y="62" width="400" height="14" fill="#4a4f58"/><rect x="0" y="76" width="400" height="3" fill="#c9c4b8"/>' + car("cm-carL", 0, 60, "#e8e2d0") + car("cm-carL cm-carL2", 0, 60, "#3b6fb5") +
      canopy + train +
      '<rect x="0" y="160" width="400" height="7" fill="#f2c200"/><rect x="0" y="167" width="400" height="26" fill="#8e8a82"/>' +
      '<rect x="0" y="193" width="400" height="6" fill="#c9c4b8"/><rect x="0" y="199" width="400" height="61" fill="#45484f"/>' +
      '<path d="M0 230h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 14"/>' +
      car("cm-car", 0, 212, "#c8a24a") + car("cm-car cm-car2", 0, 240, "#7a3d4a") +
      '<rect x="110" y="168" width="180" height="22" rx="3" fill="#111"/><text x="126" y="184" ' + font + ' font-size="15" fill="#fff">87th</text>' + badge(214, 179, "RED", RED) +
      '<text x="200" y="16" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".85">DAN RYAN · SOUTH SIDE · CHICAGO</text>',
      sky("cms1", "#1d1a3a", "#d9805a"));
  }

  /* 2. Luther High School South, 87th & Kedzie */
  function cmluther() {
    const winRow = (y) => Array.from({ length: 12 }, (_, i) => '<rect x="' + (34 + i * 28) + '" y="' + y + '" width="16" height="18" fill="#cfe2ee" stroke="#e8dcc0" stroke-width="2"/>').join("");
    const page = (cls, x, y) => '<g class="cm-pg ' + cls + '"><rect x="' + x + '" y="' + y + '" width="14" height="18" fill="#fbf7ea" stroke="#9ab" stroke-width=".6"/>' +
      [4, 8, 12].map(d => '<path d="M' + (x + 2) + ' ' + (y + d + 2) + 'h10" stroke="#7a9ab8" stroke-width=".7"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cms2)"/>' +
      '<g fill="#c9dcc0" opacity=".9"><ellipse cx="60" cy="140" rx="60" ry="22"/><ellipse cx="350" cy="140" rx="70" ry="24"/></g>' +
      '<rect x="20" y="96" width="360" height="96" fill="#8a4e34"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M20 ' + (102 + i * 8) + 'h360" stroke="#7a4229" stroke-width="1"/>').join("") +
      '<rect x="20" y="92" width="360" height="6" fill="#e8dcc0"/>' + winRow(108) + winRow(150) +
      '<rect x="168" y="44" width="64" height="148" fill="#93543a"/><rect x="164" y="40" width="72" height="6" fill="#e8dcc0"/>' +
      '<path d="M200 8v30M188 18h24" stroke="#e8dcc0" stroke-width="6" stroke-linecap="square"/>' +
      '<rect x="180" y="58" width="40" height="22" fill="#e8dcc0"/><text x="200" y="73" text-anchor="middle" ' + font + ' font-size="9" fill="#5a2e1c">LUTHER</text>' +
      '<rect x="180" y="150" width="40" height="42" fill="#3a2418"/><path d="M200 150v42" stroke="#c9a24a" stroke-width="1.5"/>' +
      '<rect x="0" y="192" width="400" height="20" fill="#cfc8b8"/><rect x="0" y="212" width="400" height="48" fill="#4e7a3a"/>' +
      '<rect x="40" y="200" width="120" height="30" rx="3" fill="#1d2a1a" stroke="' + GOLD + '" stroke-width="2"/><text x="100" y="214" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">LUTHER SOUTH</text><text x="100" y="225" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">87TH &amp; KEDZIE</text>' +
      page("", 230, 230) + page("cm-pg2", 260, 236) + page("cm-pg3", 210, 240) +
      '<g><rect x="300" y="214" width="56" height="40" rx="2" fill="#2b3a6a"/><rect x="304" y="218" width="48" height="32" fill="#fbf7ea"/>' +
      [0, 1, 2, 3].map(i => '<path d="M308 ' + (225 + i * 7) + 'h40" stroke="#7a9ab8" stroke-width=".8"/>').join("") +
      '<text x="328" y="232" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="9" fill="#c60c30">C.D.R.</text></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#f3e6d0">WHERE THE RHYMES STARTED</text>',
      sky("cms2", "#7fb6e0", "#f1e2c4"));
  }

  /* 3. The old Chicago Stadium on W Madison St */
  function cmstadium() {
    const arches = Array.from({ length: 5 }, (_, i) => '<path d="M' + (124 + i * 32) + ' 150v-40a12 12 0 0 1 24 0v40z" fill="#2a1a14" stroke="#e8d2a8" stroke-width="1.5"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cms3)"/>' +
      '<g class="cm-beam"><path d="M90 200L60 0h40z" fill="#fff6c2" opacity=".18"/></g><g class="cm-beam cm-beam2"><path d="M310 200L290 0h40z" fill="#fff6c2" opacity=".18"/></g>' +
      '<rect x="20" y="92" width="360" height="120" fill="#7a4a32"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M20 ' + (98 + i * 8) + 'h360" stroke="#6a3e2a" stroke-width="1"/>').join("") +
      '<path d="M20 92q180 -50 360 0" fill="#7a4a32"/><path d="M20 92q180 -50 360 0" fill="none" stroke="#5a3424" stroke-width="3"/>' +
      '<rect x="100" y="60" width="200" height="152" fill="#8a5638"/><rect x="96" y="56" width="208" height="8" fill="#e8d2a8"/>' +
      '<rect x="112" y="68" width="176" height="22" fill="#e8d2a8"/><text x="200" y="84" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" fill="#5a2e1c" letter-spacing="2">CHICAGO STADIUM</text>' +
      '<rect x="112" y="94" width="176" height="6" fill="#c9a77c"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (116 + i * 16) + '" y="94" width="8" height="6" fill="#a8845a"/>').join("") +
      arches +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (34 + (i % 3) * 20) + '" y="' + (110 + Math.floor(i / 3) * 34) + '" width="10" height="20" fill="#f2c27a" class="' + (i % 2 ? "cm-bl" : "cm-bl cm-bl2") + '"/>').join("") +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (322 + (i % 3) * 20) + '" y="' + (110 + Math.floor(i / 3) * 34) + '" width="10" height="20" fill="#f2c27a" class="' + (i % 2 ? "cm-bl cm-bl2" : "cm-bl") + '"/>').join("") +
      '<rect x="100" y="156" width="200" height="56" fill="#2a1a14"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (110 + i * 32) + '" y="162" width="20" height="50" fill="#5a3a2a" stroke="#e8d2a8" stroke-width="1"/>').join("") +
      '<rect x="0" y="212" width="400" height="48" fill="#3a3a3f"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<g class="cm-ball"><circle cx="200" cy="200" r="9" fill="#e07a2a" stroke="#5a2a0a" stroke-width="1.5"/><path d="M191 200h18M200 191v18" stroke="#5a2a0a" stroke-width="1.2"/></g>' +
      '<ellipse cx="200" cy="211" rx="9" ry="2" fill="#000" opacity=".4"/>' +
      car("cm-carL", 0, 240, "#c60c30") +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0">W MADISON ST · THE OLD STADIUM</text>',
      sky("cms3", "#0f1430", "#4a2a50"));
  }

  /* 4. Museum of Science and Industry over the Jackson Park lagoon */
  function cmmuseum() {
    const cols = (x0, n, y, h) => Array.from({ length: n }, (_, i) => '<rect x="' + (x0 + i * 14) + '" y="' + y + '" width="7" height="' + h + '" fill="#efe4c6"/>').join("");
    const hall = '<rect x="30" y="98" width="340" height="62" fill="#e2d3ae"/><rect x="26" y="92" width="348" height="8" fill="#f2e8cc"/>' +
      cols(40, 7, 102, 54) + cols(268, 7, 102, 54) +
      '<path d="M140 92l60 -26l60 26z" fill="#f2e8cc" stroke="#cbb88c" stroke-width="2"/>' +
      '<rect x="140" y="92" width="120" height="68" fill="#e8dab6"/>' + cols(146, 8, 98, 58) +
      '<rect x="168" y="40" width="64" height="28" fill="#e2d3ae"/>' + cols(172, 4, 44, 22) +
      '<path d="M164 42q36 -46 72 0z" fill="#6aa08a" stroke="#4a7a66" stroke-width="2"/><rect x="196" y="6" width="8" height="12" fill="#6aa08a"/>' +
      '<rect x="26" y="156" width="348" height="6" fill="#cbb88c"/>';
    const reflect = '<g opacity=".14" transform="translate(0 324) scale(1 -1)">' + '<rect x="30" y="98" width="340" height="62" fill="#e2d3ae"/><path d="M164 42q36 -46 72 0z" fill="#6aa08a"/><rect x="168" y="40" width="64" height="28" fill="#e2d3ae"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cms4)"/>' +
      '<g fill="#5a8a4a"><ellipse cx="10" cy="150" rx="40" ry="30"/><ellipse cx="392" cy="150" rx="40" ry="30"/></g>' +
      hall +
      '<rect x="0" y="162" width="400" height="98" fill="#3f7aa0"/>' + reflect +
      Array.from({ length: 6 }, (_, i) => '<g class="cm-rip"><path d="M' + (20 + i * 70) + ' ' + (190 + (i % 3) * 18) + 'h30" stroke="#cfe6f2" stroke-width="1.5" opacity=".6"/></g>').join("") +
      '<g class="cm-duck"><ellipse cx="90" cy="226" rx="10" ry="5" fill="#6a4a2a"/><circle cx="99" cy="220" r="4" fill="#2f6a3a"/><path d="M102 220l5 1l-5 1z" fill="#e8a83a"/></g>' +
      '<rect x="0" y="160" width="400" height="4" fill="#8aa66a"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f3f6fa">JACKSON PARK · HYDE PARK, WHERE HE WAS BORN</text>',
      sky("cms4", "#5aa8e6", "#d8ecf6"));
  }

  /* 5. E 89th St and S Bennett Ave, Avalon Park; the Aon Center far behind */
  function cmcorner() {
    const skyline = '<g fill="#7a86a8"><rect x="20" y="96" width="22" height="40"/><rect x="46" y="84" width="16" height="52"/><rect x="66" y="100" width="20" height="36"/>' +
      '<rect x="250" y="92" width="18" height="44"/><rect x="272" y="104" width="24" height="32"/><rect x="300" y="88" width="14" height="48"/></g>' +
      '<rect x="150" y="34" width="40" height="102" fill="#f4f4ee"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (152 + i * 4.2) + '" y="36" width="1.6" height="100" fill="#c8ccd6"/>').join("") +
      '<rect x="196" y="62" width="26" height="74" fill="#5a6488"/><rect x="226" y="76" width="18" height="60" fill="#6a7498"/>' +
      '<text x="170" y="30" text-anchor="middle" ' + font + ' font-size="7" fill="#fff" opacity=".8">AON CENTER</text>';
    const bungalow = (x, c) => '<g><rect x="' + x + '" y="112" width="70" height="46" fill="' + c + '"/><path d="M' + (x - 4) + ' 114l39 -22l39 22z" fill="#4a3a32"/>' +
      '<rect x="' + (x + 10) + '" y="124" width="16" height="14" fill="#f2d79a"/><rect x="' + (x + 44) + '" y="124" width="16" height="14" fill="#f2d79a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cms5)"/>' + skyline +
      '<rect x="0" y="136" width="400" height="24" fill="#4e7a3a"/>' + bungalow(4, "#9a5a3a") + bungalow(320, "#a8643f") +
      '<rect x="80" y="120" width="230" height="104" fill="#b8a27a"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M80 ' + (128 + i * 8) + 'h230" stroke="#a68f66" stroke-width="1"/>').join("") +
      Array.from({ length: 13 }, (_, i) => Array.from({ length: 6 }, (_, j) => '<path d="M' + (80 + j * 40 + (i % 2) * 20) + ' ' + (120 + i * 8) + 'v8" stroke="#a68f66" stroke-width="1"/>').join("")).join("") +
      tag("COMMON", 92, 180, 40, GOLD, -6) + tag("SOUTH SIDE", 110, 210, 17, "#7fc4ff", -3) + tag("COMMON SENSE", 200, 214, 14, "#ff8a6a", -4) +
      '<g class="cm-sp"><circle cx="284" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="cm-sp cm-sp2"><circle cx="290" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="98" width="6" height="126" fill="#2f2f2f"/>' + signRaw(286, 100, 110, '<text x="306" y="116" ' + font + ' font-size="13" fill="#fff">E 8</text>' + nine(326, 116, 13, "#fff") + '<text x="337" y="116" ' + font + ' font-size="13" fill="#fff">th St</text>') + sign(270, 126, 126, "S Bennett Ave") +
      '<rect x="20" y="160" width="4" height="64" fill="#222"/><circle class="cm-flk" cx="22" cy="158" r="7" fill="#ffe9a8"/>' +
      car("cm-car", 0, 240, "#3b6fb5"),
      sky("cms5", "#24305e", "#f0a070"));
  }

  window.SCENES = { cmstation: cmstation, cmluther: cmluther, cmstadium: cmstadium, cmmuseum: cmmuseum, cmcorner: cmcorner };
})();
