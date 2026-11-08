/* macmall scenes (Regions tab: The Bay Area; the Crestside, Vallejo). CSS classes prefixed mm- (the page's own anim-train is kept). No 9s drawn as text. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mm-flk{animation:mmflick 2.6s infinite}.mm-flk2{animation-delay:.9s}' +
    '@keyframes mmglow{0%,100%{opacity:.4}50%{opacity:1}}.mm-glow{animation:mmglow 2.2s ease-in-out infinite}.mm-g2{animation-delay:-1.1s}' +
    '@keyframes mmvu{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.mm-vu{transform-box:fill-box;transform-origin:50% 100%;animation:mmvu .9s ease-in-out infinite}' +
    '.mm-vu2{animation-delay:-.3s}.mm-vu3{animation-delay:-.6s}.mm-vu4{animation-delay:-.15s}' +
    '@keyframes mmspin{to{transform:rotate(360deg)}}.mm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mmspin 3s linear infinite}' +
    '@keyframes mmbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.mm-bn{animation:mmbounce .7s ease-in-out infinite}.mm-bn2{animation-delay:-.35s}' +
    '@keyframes mmsweep{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.mm-sw{transform-box:fill-box;transform-origin:50% 0%;animation:mmsweep 4s ease-in-out infinite}' +
    '@keyframes mmclap{0%,70%,100%{transform:rotate(0)}80%{transform:rotate(-24deg)}}.mm-clap{transform-box:fill-box;transform-origin:0% 100%;animation:mmclap 2.4s ease-in-out infinite}' +
    '@keyframes mmwave{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-30px);opacity:0}}.mm-nt{animation:mmwave 2s ease-out infinite}.mm-nt2{animation-delay:-.7s}.mm-nt3{animation-delay:-1.4s}' +
    '@keyframes mmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mm-sp{animation:mmspray 1.4s ease-out infinite}.mm-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, ink) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '" stroke="#fff" stroke-width="1.5"/><text x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="' + (txt.length > 1 ? 10 : 12) + '" fill="' + (ink || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "mm-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const palm = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q-4 -50 4 -96" stroke="#4a3a2c" stroke-width="5" fill="none"/><g transform="translate(4 -96)">' +
    [-70, -30, 10, 50, 90, 130, 170, 210].map(a => '<path d="M0 0q' + (Math.cos(a * Math.PI / 180) * 18).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 18 - 8).toFixed(1) + ' ' + (Math.cos(a * Math.PI / 180) * 34).toFixed(1) + ' ' + (Math.sin(a * Math.PI / 180) * 34 + 6).toFixed(1) + '" stroke="#2a4a30" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g></g>';
  const GOLD = "#f2c14e", BLUE = "#3fa7d6", ORNG = "#e4572e", REDL = "#d7262e", YEL = "#f5c400", ST = "#1f6fb5";

  /* 1. SolTrans Vallejo Transit Center, downtown between Santa Clara St and York St: the long bus-bay canopies, the parking garage behind, the black sign with route badges, a SolTrans bus pulling in */
  function mmstation() {
    const bus = '<g class="anim-train"><rect x="24" y="136" width="256" height="70" rx="9" fill="#f4f4f2" stroke="#8a9198" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (70 + i * 41) + '" y="148" width="35" height="27" rx="3" fill="#22303c"/>').join("") +
      '<rect x="30" y="148" width="30" height="52" rx="2" fill="#22303c"/><rect x="24" y="181" width="256" height="7" fill="' + ST + '"/><rect x="24" y="189" width="256" height="3" fill="#5ab04a"/>' +
      '<rect x="28" y="138" width="104" height="10" rx="2" fill="#111"/><text x="80" y="146" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">2  CREST · VALLEJO TC</text>' +
      '<circle cx="72" cy="206" r="12" fill="#222"/><circle cx="72" cy="206" r="5" fill="#9aa1a8"/><circle cx="236" cy="206" r="12" fill="#222"/><circle cx="236" cy="206" r="5" fill="#9aa1a8"/><circle cx="28" cy="196" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mm1)"/>' +
      /* hills across the strait */
      '<path d="M0 92q70 -34 150 -14q80 -26 150 -4q60 -16 100 2V120H0z" fill="#9aa27a"/>' +
      /* parking garage */
      '<rect x="150" y="56" width="200" height="66" fill="#d8d0c2"/>' + [72, 88, 104].map(y => '<rect x="150" y="' + y + '" width="200" height="4" fill="#b0a898"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (156 + i * 27) + '" y="58" width="4" height="64" fill="#c2baac"/>').join("") +
      '<rect x="318" y="44" width="32" height="78" fill="#c8bfae"/><rect x="324" y="52" width="20" height="8" fill="#8a5a3a"/>' +
      /* long canopy over the bays */
      '<path d="M0 110h400l-6 -10H6z" fill="#e8ecef"/><path d="M0 110h400v6H0z" fill="#7d8a96"/>' +
      [24, 120, 216, 312].map(x => '<rect x="' + (x - 3) + '" y="116" width="6" height="92" fill="#6a737c"/>').join("") +
      [56, 170, 286].map((x, i) => '<rect class="mm-flk' + (i === 1 ? " mm-flk2" : "") + '" x="' + x + '" y="118" width="48" height="3" rx="1.5" fill="#fff8dc"/>').join("") +
      '<rect x="0" y="206" width="400" height="8" fill="#d8d2c4"/><rect x="0" y="214" width="400" height="46" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="22 14"/>' +
      bus +
      /* station sign */
      '<rect x="300" y="128" width="5" height="82" fill="#2f2f2f"/><rect x="200" y="8" width="194" height="82" rx="3" fill="#111" stroke="#444" stroke-width="1"/>' +
      '<text x="210" y="28" ' + font + ' font-size="13" fill="#fff">Vallejo Transit Center</text><text x="210" y="42" font-family="Helvetica, Arial, sans-serif" font-size="9" fill="#c9ced6">Santa Clara St · York St · Downtown Vallejo</text>' +
      badge(220, 70, "R", REDL) + badge(246, 70, "Y", YEL, "#111") + badge(272, 70, "1", ST) + badge(298, 70, "2", ST) + badge(324, 70, "3", ST) + badge(350, 70, "5", ST) + badge(376, 70, "8", ST),
      sky("mm1", "#7fb6e8", "#f6dcb4"));
  }

  /* 2. Young Black Brotha Records, Vallejo: the studio where a 15-year-old Mac Mall cut his first record. Mixing desk with jumping meters, the vocal booth glass, a reel-to-reel spinning */
  function mmybb() {
    const meters = Array.from({ length: 12 }, (_, i) => '<rect class="mm-vu' + ["", " mm-vu2", " mm-vu3", " mm-vu4"][i % 4] + '" x="' + (70 + i * 22) + '" y="150" width="10" height="26" fill="' + (i % 3 === 2 ? ORNG : "#4fd36a") + '"/>').join("");
    const faders = Array.from({ length: 14 }, (_, i) => '<rect x="' + (56 + i * 21) + '" y="196" width="3" height="30" fill="#222"/><rect x="' + (51 + i * 21) + '" y="' + (200 + (i * 7) % 18) + '" width="13" height="7" rx="1" fill="#d9d9d9"/>').join("");
    const knobs = Array.from({ length: 28 }, (_, i) => '<circle cx="' + (58 + (i % 14) * 21) + '" cy="' + (184 + Math.floor(i / 14) * 8) + '" r="3" fill="' + (i % 5 ? "#9aa1a8" : GOLD) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1a1422"/>' +
      /* foam wall */
      Array.from({ length: 10 }, (_, c) => Array.from({ length: 4 }, (_, r) => '<rect x="' + (c * 40 + 2) + '" y="' + (r * 30 + 2) + '" width="36" height="26" rx="3" fill="' + ((c + r) % 2 ? "#2a2236" : "#30263e") + '"/>').join("")).join("") +
      /* booth window with the mic inside */
      '<rect x="120" y="18" width="160" height="96" rx="6" fill="#0c1a2a" stroke="#5a5a66" stroke-width="5"/><rect x="128" y="26" width="144" height="80" fill="#183a5a" opacity=".7"/>' +
      '<rect class="mm-glow" x="128" y="26" width="144" height="80" fill="' + BLUE + '" opacity=".15"/>' +
      '<path d="M200 106V64" stroke="#888" stroke-width="3"/><rect x="190" y="40" width="20" height="28" rx="10" fill="#c9ced6" stroke="#555" stroke-width="2"/><circle cx="200" cy="54" r="16" fill="none" stroke="#333" stroke-width="2" stroke-dasharray="3 2"/>' +
      '<rect x="296" y="30" width="78" height="20" rx="3" fill="#300"/><text class="mm-flk" x="335" y="45" text-anchor="middle" ' + font + ' font-size="12" fill="#ff3b3b">RECORDING</text>' +
      /* reel to reel */
      '<rect x="20" y="24" width="86" height="96" rx="4" fill="#3a3a42" stroke="#111" stroke-width="2"/>' +
      [[43, 52], [83, 52]].map(([x, y]) => '<g class="mm-spin"><circle cx="' + x + '" cy="' + y + '" r="16" fill="#8a8f98"/><circle cx="' + x + '" cy="' + y + '" r="4" fill="#222"/>' + [0, 120, 240].map(a => '<circle cx="' + (x + Math.cos(a * Math.PI / 180) * 9).toFixed(1) + '" cy="' + (y + Math.sin(a * Math.PI / 180) * 9).toFixed(1) + '" r="4" fill="#3a3a42"/>').join("") + '</g>').join("") +
      '<path d="M43 68L63 96L83 68" stroke="#5a3a1a" stroke-width="2" fill="none"/><rect x="34" y="100" width="58" height="10" rx="2" fill="#222"/>' +
      /* label on the wall */
      '<rect x="300" y="64" width="74" height="40" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="337" y="82" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">Y.B.B.</text><text x="337" y="96" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="7.5" fill="#ddd">VALLEJO, CA</text>' +
      /* desk */
      '<path d="M30 140h340l24 120H6z" fill="#2c2c34"/><rect x="50" y="144" width="300" height="36" rx="3" fill="#111"/>' + meters + knobs + faders +
      '<rect x="0" y="236" width="400" height="24" fill="#1a1a20"/>' +
      /* notes floating */
      ['mm-nt', 'mm-nt mm-nt2', 'mm-nt mm-nt3'].map((c, i) => '<g class="' + c + '"><text x="' + (150 + i * 46) + '" y="134" ' + font + ' font-size="16" fill="' + GOLD + '">&#9834;</text></g>').join(""));
  }

  /* 3. The "Ghetto Theme" video shoot on a Vallejo street, 1993, directed by 2Pac: a film camera on its tripod, the empty director's chair, a slate clapping, a candy-painted car under the lights */
  function mmvideo() {
    return svg(
      '<rect width="400" height="260" fill="url(#mm3)"/>' + stars(12) +
      /* houses */
      [[0, 96, "#c9a27a"], [92, 104, "#9fb3c8"], [196, 92, "#d8c49a"], [300, 100, "#b9a3c9"]].map(([x, y, c]) => '<path d="M' + x + ' ' + y + 'l50 -26l50 26v60H' + x + 'z" fill="' + c + '"/><rect x="' + (x + 18) + '" y="' + (y + 14) + '" width="20" height="16" fill="#ffe28a" class="mm-glow"/><rect x="' + (x + 60) + '" y="' + (y + 26) + '" width="16" height="34" fill="#4a3a2c"/>').join("") +
      palm(184, 158, .7) +
      /* light stands */
      [[30, 1], [370, -1]].map(([x, d]) => '<path d="M' + x + ' 210V96" stroke="#333" stroke-width="3"/><rect x="' + (x - 14) + '" y="84" width="28" height="18" rx="2" fill="#2a2a2a"/><path class="mm-glow" d="M' + (x + d * 10) + ' 98L' + (x + d * 150) + ' 210H' + (x + d * 60) + 'z" fill="#fff6c8" opacity=".18"/>').join("") +
      /* street */
      '<rect x="0" y="156" width="400" height="104" fill="#3a3a40"/><path d="M0 200h400" stroke="#d8c66a" stroke-width="2" stroke-dasharray="20 14"/>' +
      /* candy car */
      '<g class="mm-bn"><path d="M110 196q4 -22 30 -24l20 -14h70l22 14q30 2 34 24z" fill="#8a1f6a"/><path d="M164 162h28v12h-40zM198 162h28l14 12h-42z" fill="#2a3a4a"/><path d="M116 190h168" stroke="#f0c0e0" stroke-width="2" opacity=".6"/></g>' +
      '<g class="mm-spin"><circle cx="146" cy="200" r="13" fill="#111"/><circle cx="146" cy="200" r="7" fill="#d0d0d8"/><path d="M146 193v14M139 200h14" stroke="#777" stroke-width="2"/></g>' +
      '<g class="mm-spin"><circle cx="258" cy="200" r="13" fill="#111"/><circle cx="258" cy="200" r="7" fill="#d0d0d8"/><path d="M258 193v14M251 200h14" stroke="#777" stroke-width="2"/></g>' +
      /* camera on tripod */
      '<path d="M330 168l-18 72M330 168l18 72M330 168v72" stroke="#222" stroke-width="3"/><rect x="304" y="146" width="48" height="26" rx="3" fill="#1a1a1a"/><circle cx="314" cy="136" r="11" fill="#2a2a2a" stroke="#555" stroke-width="2"/><circle cx="338" cy="136" r="11" fill="#2a2a2a" stroke="#555" stroke-width="2"/><rect x="290" y="152" width="16" height="14" fill="#333"/><circle class="mm-flk" cx="346" cy="152" r="3" fill="#ff3b3b"/>' +
      /* director's chair */
      '<path d="M40 238l20 -36M76 238l-20 -36M40 202h36" stroke="#6a4a2a" stroke-width="4"/><rect x="38" y="176" width="40" height="18" fill="#1a1a1a"/><text x="58" y="189" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">DIRECTOR</text><rect x="38" y="200" width="40" height="5" fill="#1a1a1a"/>' +
      /* slate */
      '<g transform="translate(92 214)"><rect x="0" y="0" width="56" height="34" fill="#111" stroke="#eee" stroke-width="1.5"/><text x="28" y="14" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">GHETTO THEME</text><text x="28" y="27" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="7" fill="#ddd">TAKE 1 · VALLEJO</text>' +
      '<g class="mm-clap"><rect x="0" y="-8" width="56" height="8" fill="#eee"/>' + [0, 1, 2, 3].map(i => '<path d="M' + (4 + i * 14) + ' -8l8 8" stroke="#111" stroke-width="4"/>').join("") + '</g></g>',
      sky("mm3", "#140f2e", "#5a3a6a"));
  }

  /* 4. The radio: the night the Bay's big hip-hop station first played him. On-air booth in San Francisco, the dial on 106.1, turntables, the city lights through the glass */
  function mmradio() {
    return svg(
      '<rect width="400" height="260" fill="#14121c"/>' +
      /* window to the city */
      '<rect x="20" y="18" width="250" height="110" rx="4" fill="url(#mm4)" stroke="#444" stroke-width="5"/>' +
      [[30, 80, 26, 46], [60, 60, 20, 66], [84, 90, 30, 36], [118, 44, 22, 82], [124, 30, 10, 14], [144, 72, 26, 54], [174, 56, 18, 70], [196, 84, 30, 42], [230, 66, 30, 60]].map(([x, y, w, h]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#1e2438"/>').join("") +
      '<path d="M129 30l-5 -16l-5 16z" fill="#1e2438"/>' +
      Array.from({ length: 30 }, (_, i) => '<rect class="' + (i % 5 ? "" : "mm-glow") + '" x="' + (34 + (i * 37) % 220) + '" y="' + (70 + (i * 23) % 50) + '" width="3" height="3" fill="#ffd98a"/>').join("") +
      /* on air light */
      '<rect x="290" y="22" width="90" height="30" rx="4" fill="#300" stroke="#600" stroke-width="2"/><text class="mm-flk" x="335" y="43" text-anchor="middle" ' + font + ' font-size="16" fill="#ff3b3b">ON AIR</text>' +
      /* dial */
      '<rect x="290" y="64" width="90" height="56" rx="6" fill="#2a2630" stroke="' + GOLD + '" stroke-width="2"/><text x="335" y="98" text-anchor="middle" ' + font + ' font-size="24" fill="' + GOLD + '">106.1</text><text x="335" y="112" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#ccc">FM · THE BAY</text>' +
      /* desk + turntables */
      '<path d="M0 150h400v110H0z" fill="#2a2a32"/><rect x="0" y="146" width="400" height="8" fill="#3a3a44"/>' +
      [[80, 196], [220, 196]].map(([x, y]) => '<rect x="' + (x - 56) + '" y="' + (y - 36) + '" width="112" height="76" rx="4" fill="#1a1a1e"/><g class="mm-spin"><circle cx="' + x + '" cy="' + y + '" r="30" fill="#0a0a0a"/><circle cx="' + x + '" cy="' + y + '" r="20" fill="none" stroke="#222" stroke-width="1"/><circle cx="' + x + '" cy="' + y + '" r="9" fill="' + ORNG + '"/><rect x="' + (x - 1) + '" y="' + (y - 9) + '" width="2" height="6" fill="#fff"/></g><path d="M' + (x + 44) + ' ' + (y - 28) + 'l-12 40" stroke="#c9ced6" stroke-width="3"/>').join("") +
      /* mic arm */
      '<path d="M330 260V170l-34 -20" stroke="#555" stroke-width="5" fill="none"/><rect x="278" y="136" width="26" height="18" rx="8" fill="#888" transform="rotate(-30 291 145)"/>' +
      '<rect x="300" y="196" width="80" height="44" rx="3" fill="#111"/>' + Array.from({ length: 6 }, (_, i) => '<rect class="mm-vu' + ["", " mm-vu2", " mm-vu3"][i % 3] + '" x="' + (308 + i * 12) + '" y="206" width="7" height="26" fill="#4fd36a"/>').join(""),
      sky("mm4", "#0e1430", "#3a2a5a"));
  }

  /* 5. The corner: Mark Ave and Sawyer St on the Crestside, MAC MALL tagged on the wall, downtown Vallejo below with St. Vincent Ferrer's white spire lit up behind */
  function mmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mm5)"/>' + stars(10) +
      /* downtown below, the church spire */
      '<path d="M0 118q80 -14 160 -6q90 -12 240 4V140H0z" fill="#3a3550"/>' +
      Array.from({ length: 18 }, (_, i) => '<rect class="' + (i % 4 ? "" : "mm-glow") + '" x="' + (10 + i * 22) + '" y="' + (120 + (i * 7) % 12) + '" width="3" height="3" fill="#ffd98a"/>').join("") +
      '<g><rect x="196" y="74" width="22" height="50" fill="#ecebe4"/><path d="M196 74l11 -50l11 50z" fill="#f4f3ee"/><path d="M207 18v8M203 22h8" stroke="#f4f3ee" stroke-width="2"/><rect x="176" y="98" width="62" height="28" fill="#dcdad0"/><path d="M176 98l31 -16l31 16z" fill="#cfcdc2"/>' +
      '<rect x="203" y="84" width="8" height="12" rx="4" fill="#ffd98a" class="mm-glow"/><circle cx="207" cy="108" r="6" fill="#ffcf6a" class="mm-glow mm-g2"/></g>' +
      /* wall */
      '<rect x="0" y="136" width="400" height="90" fill="#b98a68"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 136v90" stroke="#a87a5a" stroke-width="2"/>').join("") +
      tag("MAC MALL", 14, 202, 44, GOLD, -6) + tag("CRESTSIDE", 22, 152, 18, BLUE, -4) + tag("YOUNG MACK", 196, 150, 15, ORNG, -4) + tag("SIC WIT TIS", 170, 219, 15, "#fff", -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="350" y="92" width="6" height="134" fill="#2f2f2f"/>' + sign(312, 94, 82, "Mark Ave") + sign(304, 120, 98, "Sawyer St") +
      '<g class="mm-sp"><circle cx="132" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="mm-sp mm-sp2"><circle cx="138" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("mm5", "#160f34", "#d9774f"));
  }

  window.SCENES = { mmstation: mmstation, mmybb: mmybb, mmvideo: mmvideo, mmradio: mmradio, mmcorner: mmcorner };
})();
