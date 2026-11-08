/* latrelljames scenes (Regions tab: Boston + New England; Dorchester, grew up on Dakota St off Geneva Ave). CSS classes and ids prefixed lj- (the page's own anim-train is kept).
   1 Four Corners/Geneva on the Fairmount Line: the high-level platform on the embankment under the Washington St bridge, a silver commuter rail train with its purple band sliding in.
   2 The music room at Charlestown High School, where he taught music: keyboard, drum pads and a mixer, notes floating up, the green Tobin Bridge through the window.
   3 The Boston Calling main stage at the Harvard Athletic Complex in Allston (he played it in 2025): truss stage, sweeping lights, hands up in the crowd.
   4 Brockton City Hall, the city he moved to at 18: red-brick Romanesque front, three round arches, the tall clock tower with its steep roof, the clock hand turning.
   5 Dakota St and Geneva Ave: green signs, the yellow triple-decker his family lived in, LATRELL tagged on the wall, the Back Bay towers far off behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ljflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lj-flk{animation:ljflick 2.2s infinite}.lj-flk2{animation-delay:.7s}' +
    '@keyframes ljcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.lj-car{animation:ljcar 7s linear infinite}.lj-car2{animation-delay:-3.5s}' +
    '@keyframes ljnote{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.lj-note{animation:ljnote 3s ease-out infinite}.lj-note2{animation-delay:-1s}.lj-note3{animation-delay:-2s}' +
    '@keyframes ljvu{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.lj-vu{transform-box:fill-box;transform-origin:50% 100%;animation:ljvu .9s ease-in-out infinite}.lj-vu2{animation-delay:-.3s}.lj-vu3{animation-delay:-.6s}' +
    '@keyframes ljbeam{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.lj-beam{transform-box:fill-box;transform-origin:50% 0%;animation:ljbeam 3s ease-in-out infinite}.lj-beam2{animation-delay:-1.5s}' +
    '@keyframes ljhand{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.lj-hand{animation:ljhand .8s ease-in-out infinite}.lj-hand2{animation-delay:-.4s}' +
    '@keyframes ljclock{from{transform:rotate(0)}to{transform:rotate(360deg)}}.lj-clk{transform-box:view-box;animation:ljclock 6s linear infinite}' +
    '@keyframes ljbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-24px)}}.lj-bird{animation:ljbird 12s linear infinite}.lj-bird2{animation-delay:-6s}' +
    '@keyframes ljspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lj-sp{animation:ljspray 1.4s ease-out infinite}.lj-sp2{animation-delay:.45s}' +
    '@keyframes ljblink{0%,100%{opacity:.25}50%{opacity:1}}.lj-bl{animation:ljblink 1.6s ease-in-out infinite}.lj-bl2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const PURP = "#80276c", YEL = "#f4c430", ROSE = "#e9a6a0", BRICK = "#9c3b2a";

  /* 1. Four Corners/Geneva, Fairmount Line */
  function ljstation() {
    const coach = x => '<rect x="' + x + '" y="112" width="150" height="74" rx="8" fill="#c9ced4" stroke="#6e747b" stroke-width="2"/>' +
      '<rect x="' + x + '" y="160" width="150" height="7" fill="' + PURP + '"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 10 + i * 28) + '" y="124" width="20" height="24" rx="3" fill="#2a3440"/>').join("") +
      '<rect x="' + (x + 64) + '" y="122" width="22" height="58" rx="2" fill="#a9afb6" stroke="#6e747b" stroke-width="1.5"/>';
    const tr = '<g class="anim-train">' + coach(20) + coach(176) +
      '<path d="M326 112h40q16 0 20 14v60h-60z" fill="#c9ced4" stroke="#6e747b" stroke-width="2"/><rect x="326" y="160" width="60" height="7" fill="' + PURP + '"/>' +
      '<rect x="340" y="122" width="34" height="22" rx="3" fill="#2a3440"/><circle class="lj-flk" cx="378" cy="172" r="4" fill="#fff6c2"/>' +
      [50, 140, 206, 296, 340].map(x => '<rect x="' + x + '" y="184" width="26" height="8" rx="3" fill="#333"/>').join("") + '</g>';
    /* triple-deckers up on the hill behind the embankment */
    const td = (x, c) => '<rect x="' + x + '" y="30" width="44" height="60" fill="' + c + '"/><path d="M' + (x - 3) + ' 30l25 -14 25 14z" fill="#4a3f3a"/>' +
      [0, 1, 2].map(r => '<rect x="' + (x + 6) + '" y="' + (36 + r * 18) + '" width="9" height="11" fill="#fff4c9"/><rect x="' + (x + 28) + '" y="' + (36 + r * 18) + '" width="9" height="11" fill="#fff4c9"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lj1)"/>' +
      td(14, "#6f8fa8") + td(70, YEL) + td(286, "#b8b0a2") + td(342, "#8a6e9c") +
      /* Washington St bridge over the tracks */
      '<svg x="120" y="0" width="160" height="60" overflow="hidden"><g class="lj-car"><rect x="0" y="32" width="40" height="12" rx="4" fill="#c8312b"/><circle cx="9" cy="45" r="3" fill="#222"/><circle cx="31" cy="45" r="3" fill="#222"/></g></svg><rect x="120" y="48" width="160" height="18" fill="#8d8a84"/><rect x="120" y="44" width="160" height="5" fill="#6b6862"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (122 + i * 19) + '" y="36" width="3" height="10" fill="#4e4c48"/>').join("") + '<rect x="120" y="36" width="160" height="2" fill="#4e4c48"/>' +
      '<rect x="128" y="66" width="10" height="40" fill="#77736c"/><rect x="262" y="66" width="10" height="40" fill="#77736c"/>' +
      
      '<rect x="0" y="90" width="400" height="22" fill="#6b7a5e"/>' + tr +
      '<rect x="0" y="192" width="400" height="8" fill="#5a4a3a"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="198" width="8" height="4" fill="#3e3228"/>').join("") +
      '<rect x="0" y="202" width="400" height="58" fill="#b1aca2"/><rect x="0" y="202" width="400" height="5" fill="#f2c200"/>' +
      '<rect x="74" y="214" width="252" height="34" rx="3" fill="#111"/><text x="86" y="237" ' + font + ' font-size="15" fill="#fff">Four Corners/Geneva</text>' + badge(272, 231, "CR", PURP),
      sky("lj1", "#f2a65e", "#a8cbe6"));
  }

  /* 2. Charlestown High School music room */
  function ljschool() {
    const keys = Array.from({ length: 22 }, (_, i) => '<rect x="' + (110 + i * 8) + '" y="176" width="8" height="26" fill="#f6f4ee" stroke="#555" stroke-width=".8"/>').join("") +
      [0, 1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 17, 18, 19].map(i => '<rect x="' + (115 + i * 8) + '" y="176" width="5" height="15" fill="#111"/>').join("");
    const pads = Array.from({ length: 16 }, (_, i) => '<rect x="' + (294 + (i % 4) * 16) + '" y="' + (150 + Math.floor(i / 4) * 12) + '" width="13" height="9" rx="2" fill="' + ["#e9a6a0", "#f4c430", "#8fd3ff", "#b48be0"][i % 4] + '"/>').join("");
    const vu = [0, 1, 2, 3, 4].map(i => '<rect class="lj-vu' + (i % 3 ? " lj-vu" + (i % 3 + 1) : "") + '" x="' + (30 + i * 10) + '" y="150" width="7" height="34" fill="' + (i > 3 ? "#e8505b" : "#5fd38a") + '"/>').join("");
    const note = (cls, x, y, c) => '<g class="lj-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="6" ry="4.5" fill="' + c + '"/><rect x="' + (x + 4.5) + '" y="' + (y - 20) + '" width="2" height="20" fill="' + c + '"/><path d="M' + (x + 6.5) + ' ' + (y - 20) + 'q8 4 6 12" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#e6dccb"/>' +
      /* window with the Tobin Bridge */
      '<rect x="230" y="22" width="150" height="96" fill="url(#lj2)" stroke="#6b5a48" stroke-width="5"/>' +
      '<path d="M230 96q38 -40 75 0q37 -40 75 0" stroke="#2e7d4f" stroke-width="5" fill="none"/><path d="M230 96h150" stroke="#2e7d4f" stroke-width="4"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (238 + i * 15) + ' 96v-' + (10 + (i % 5) * 4) + '" stroke="#2e7d4f" stroke-width="1.6"/>').join("") +
      '<rect x="230" y="98" width="150" height="20" fill="#5b88a8"/><path d="M305 22v96M230 70h150" stroke="#6b5a48" stroke-width="3"/>' +
      /* whiteboard */
      '<rect x="20" y="24" width="190" height="96" rx="3" fill="#fbfbf8" stroke="#9aa3ab" stroke-width="4"/>' +
      [46, 58, 70, 82, 94].map(y => '<path d="M34 ' + y + 'h160" stroke="#9fb3c8" stroke-width="1.2"/>').join("") +
      '<text x="114" y="40" text-anchor="middle" ' + font + ' font-size="11" fill="#2a5d9f">MUSIC ROOM</text>' +
      '<ellipse cx="60" cy="76" rx="5" ry="3.6" fill="#222"/><rect x="64" y="58" width="1.6" height="18" fill="#222"/><ellipse cx="98" cy="64" rx="5" ry="3.6" fill="#222"/><rect x="102" y="46" width="1.6" height="18" fill="#222"/><ellipse cx="136" cy="88" rx="5" ry="3.6" fill="#222"/><rect x="140" y="70" width="1.6" height="18" fill="#222"/>' +
      '<text x="114" y="112" text-anchor="middle" font-family="Permanent Marker, cursive" font-size="10" fill="#c0392b">GOOD GOES ROUND</text>' +
      /* desk */
      '<rect x="0" y="202" width="400" height="58" fill="#8a5a36"/><rect x="0" y="196" width="400" height="8" fill="#a36d43"/>' +
      '<rect x="100" y="168" width="196" height="38" rx="4" fill="#26282c"/>' + keys +
      '<rect x="286" y="142" width="80" height="58" rx="5" fill="#1d1f23"/>' + pads +
      '<rect x="20" y="140" width="66" height="58" rx="5" fill="#1d1f23"/>' + vu +
      note("", 140, 150, PURP) + note("lj-note2", 200, 140, "#2a5d9f") + note("lj-note3", 250, 154, "#c0392b") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CHARLESTOWN HIGH · MUSIC ROOM</text>',
      sky("lj2", "#9fd0f2", "#e8f3fb"));
  }

  /* 3. Boston Calling main stage, Harvard Athletic Complex, Allston */
  function ljstage() {
    const beams = [70, 150, 250, 330].map((x, i) => '<path class="lj-beam' + (i % 2 ? " lj-beam2" : "") + '" d="M' + x + ' 44l-26 150h52z" fill="' + ["#f4c430", "#e9a6a0", "#8fd3ff", "#b48be0"][i] + '" opacity=".28"/>').join("");
    const crowd = Array.from({ length: 26 }, (_, i) => {
      const x = 6 + i * 15.5, y = 214 + (i % 3) * 6;
      return '<circle cx="' + x + '" cy="' + y + '" r="7" fill="#1b1424"/><rect x="' + (x - 8) + '" y="' + (y + 5) + '" width="16" height="40" rx="6" fill="#1b1424"/>' +
        (i % 3 === 0 ? '<g class="lj-hand' + (i % 2 ? " lj-hand2" : "") + '"><rect x="' + (x + 4) + '" y="' + (y - 24) + '" width="4" height="20" rx="2" fill="#1b1424"/></g>' : "");
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lj3)"/>' +
      '<g fill="#1a1530"><rect x="0" y="150" width="400" height="40"/><circle cx="20" cy="150" r="26"/><circle cx="380" cy="148" r="28"/></g>' +
      /* truss + roof */
      '<rect x="40" y="40" width="320" height="10" fill="#9aa0a8"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M' + (40 + i * 20) + ' 40l10 10l10 -10" stroke="#5e636a" stroke-width="1.5" fill="none"/>').join("") +
      '<rect x="40" y="40" width="10" height="150" fill="#9aa0a8"/><rect x="350" y="40" width="10" height="150" fill="#9aa0a8"/>' +
      '<path d="M30 40l170 -24l170 24z" fill="#2c2c34"/>' +
      '<rect x="50" y="50" width="300" height="120" fill="#120d1c"/>' + beams +
      /* screens either side */
      '<rect x="4" y="62" width="32" height="54" fill="#2b2240" stroke="#9aa0a8" stroke-width="2"/><rect x="364" y="62" width="32" height="54" fill="#2b2240" stroke="#9aa0a8" stroke-width="2"/>' +
      '<rect class="lj-bl" x="8" y="66" width="24" height="46" fill="' + PURP + '" opacity=".7"/><rect class="lj-bl lj-bl2" x="368" y="66" width="24" height="46" fill="' + PURP + '" opacity=".7"/>' +
      /* stage deck, mic stand, DJ table */
      '<rect x="44" y="168" width="312" height="22" fill="#3a3340"/><rect x="44" y="166" width="312" height="4" fill="#f4c430"/>' +
      '<rect x="198" y="120" width="3" height="46" fill="#ccc"/><circle cx="199.5" cy="118" r="4" fill="#888"/>' +
      '<rect x="250" y="146" width="70" height="20" fill="#26222e"/><circle class="lj-bl" cx="268" cy="152" r="5" fill="#8fd3ff"/><circle class="lj-bl lj-bl2" cx="302" cy="152" r="5" fill="#8fd3ff"/>' +
      [80, 120, 280, 320].map(x => '<rect x="' + (x - 10) + '" y="150" width="20" height="16" fill="#111"/><circle cx="' + x + '" cy="158" r="5" fill="#333"/>').join("") +
      crowd +
      '<text x="200" y="34" text-anchor="middle" ' + font + ' font-size="10" fill="#f4e9ff">ALLSTON · HARVARD ATHLETIC COMPLEX · 2025</text>',
      sky("lj3", "#1b1036", "#6a3f78"));
  }

  /* 4. Brockton City Hall */
  function ljcityhall() {
    const arch = x => '<path d="M' + x + ' 206v-30a18 18 0 0 1 36 0v30z" fill="#3a2a22"/><path d="M' + (x - 4) + ' 176a22 22 0 0 1 44 0" stroke="#d8c6a2" stroke-width="5" fill="none"/>';
    const wins = (x0, n, y) => Array.from({ length: n }, (_, i) => '<rect x="' + (x0 + i * 22) + '" y="' + y + '" width="11" height="20" rx="5" fill="#f7e3a8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lj4)"/>' +
      '<g class="lj-bird"><path d="M10 60q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="lj-bird lj-bird2"><path d="M10 80q4 -4 8 0q4 -4 8 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* main block */
      '<rect x="40" y="120" width="320" height="90" fill="' + BRICK + '"/>' +
      '<path d="M34 120l30 -26h272l30 26z" fill="#4b3a3a"/>' +
      '<rect x="40" y="148" width="320" height="4" fill="#d8c6a2"/>' + wins(56, 4, 126) + wins(256, 4, 126) +
      arch(92) + arch(182) + arch(272) +
      /* round side tower with battlement */
      '<rect x="326" y="96" width="34" height="114" fill="#8f3526"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (326 + i * 7) + '" y="88" width="5" height="9" fill="#8f3526"/>').join("") +
      '<rect x="337" y="112" width="11" height="18" rx="5" fill="#f7e3a8"/>' +
      /* clock tower */
      '<rect x="176" y="40" width="48" height="84" fill="' + BRICK + '"/><rect x="176" y="62" width="48" height="5" fill="#d8b98a"/><rect x="176" y="100" width="48" height="5" fill="#d8b98a"/>' +
      '<rect x="186" y="72" width="28" height="24" fill="#c98f5a"/>' +
      '<path d="M170 40l30 -36l30 36z" fill="#3b4048"/>' +
      '<circle cx="200" cy="52" r="10" fill="#f3ead2" stroke="#3b2a22" stroke-width="2"/>' +
      '<g class="lj-clk" style="transform-origin:200px 52px"><path d="M200 52v-8" stroke="#222" stroke-width="2"/></g><path d="M200 52h5" stroke="#222" stroke-width="2"/>' +
      /* plaza */
      '<rect x="0" y="206" width="400" height="54" fill="#bdb6aa"/><path d="M0 222h400" stroke="#a9a296" stroke-width="2"/>' +
      '<rect x="20" y="150" width="4" height="60" fill="#222"/><circle class="lj-flk" cx="22" cy="148" r="6" fill="#ffe9a8"/><rect x="376" y="150" width="4" height="60" fill="#222"/><circle class="lj-flk lj-flk2" cx="378" cy="148" r="6" fill="#ffe9a8"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#2b2b2b">BROCKTON · CITY OF CHAMPIONS</text>',
      sky("lj4", "#a9d3f2", "#f6e2c8"));
  }

  /* 5. Dakota St and Geneva Ave */
  function ljcorner() {
    const towers = '<g fill="#3a3f63"><rect x="40" y="58" width="22" height="70"/><rect x="66" y="40" width="16" height="88"/><path d="M66 40l8 -10l8 10z"/><rect x="90" y="70" width="26" height="58"/>' +
      '<path d="M326 128V44l10 -6v90z"/><rect x="336" y="38" width="14" height="90"/><rect x="292" y="66" width="28" height="62"/><rect x="356" y="76" width="22" height="52"/></g>' +
      [70, 76].map(x => '<rect class="lj-bl" x="' + x + '" y="34" width="2" height="4" fill="#ff4d4d"/>').join("");
    const tdWins = [0, 1, 2].map(r => '<rect x="186" y="' + (80 + r * 40) + '" width="16" height="22" fill="#fff1bf" stroke="#fff" stroke-width="2"/><rect x="212" y="' + (80 + r * 40) + '" width="16" height="22" fill="#fff1bf" stroke="#fff" stroke-width="2"/><rect x="246" y="' + (80 + r * 40) + '" width="16" height="22" fill="#fff1bf" stroke="#fff" stroke-width="2"/>').join("") +
      [0, 1, 2].map(r => '<rect x="176" y="' + (104 + r * 40) + '" width="96" height="4" fill="#fff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lj5)"/>' + towers +
      /* the yellow triple-decker */
      '<rect x="172" y="70" width="104" height="156" fill="' + YEL + '"/>' + Array.from({ length: 19 }, (_, i) => '<path d="M172 ' + (74 + i * 8) + 'h104" stroke="#dcab1e" stroke-width="1"/>').join("") +
      '<path d="M166 70l58 -26l58 26z" fill="#5b4b44"/>' + tdWins +
      /* brick wall in front with the tag */
      '<rect x="0" y="150" width="170" height="76" fill="#7a3f2c"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (158 + i * 8) + 'h170" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 9 }, (_, i) => Array.from({ length: 4 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (150 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("LATRELL", 10, 196, 34, YEL, -6) + tag("THE DOT", 20, 220, 15, ROSE, -3) + tag("GOOD GOES ROUND", 94, 221, 10, "#b48be0", -4) +
      '<rect x="0" y="226" width="400" height="34" fill="#5d5a55"/><rect x="0" y="224" width="400" height="4" fill="#e8ecf2"/>' +
      car("lj-car", 0, 236, "#2f6db5") +
      '<rect x="334" y="104" width="6" height="122" fill="#2f2f2f"/>' + sign(282, 106, 110, "Dakota St") + sign(280, 132, 114, "Geneva Av") +
      '<g class="lj-sp"><circle cx="130" cy="178" r="3" fill="' + YEL + '" opacity=".7"/></g><g class="lj-sp lj-sp2"><circle cx="136" cy="172" r="2" fill="' + YEL + '" opacity=".6"/></g>',
      sky("lj5", "#2e3566", "#f0a070"));
  }

  window.SCENES = { ljstation: ljstation, ljschool: ljschool, ljstage: ljstage, ljcityhall: ljcityhall, ljcorner: ljcorner };
})();
