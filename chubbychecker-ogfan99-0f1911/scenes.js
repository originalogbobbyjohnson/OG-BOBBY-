/* chubbychecker scenes (Regions tab: Philadelphia; South Philly). CSS classes prefixed cc- (the page's own anim-train is kept).
   1 Washington Av & 9th St on SEPTA's Route 64 bus, at the foot of 9th Street where he worked after school: two-story South Philly rowhouses, the stop flag, a white SEPTA bus with red and blue stripes sliding in.
   2 Fresh Farm Poultry on 9th Street, where owner Henry Colt put teenage Ernest Evans on the store loudspeaker to sing for the customers: white tile, the counter and scale, egg crates, the horn speaker on the wall with notes pouring out.
   3 The WFIL-TV studio at 46th & Market in West Philly, where he twisted on Dick Clark's dance show: bleachers, the record podium, a big studio camera with its red light, kids twisting on the floor (plain silhouettes).
   4 The Wildwood boardwalk, summer 1960, where he first did The Twist on stage at a club on the boards: a neon rainbow sign, the yellow tram car rolling along the boards, the Ferris wheel turning on the pier.
   5 S 4th St and Queen St in Queen Village (South Philly), by Settlement Music School where he learned piano: green signs, CHUBBY tagged on the brick, piano keys painted on the wall, the three Society Hill Towers glowing behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ccglow{0%,100%{opacity:.45}50%{opacity:1}}.cc-glow{animation:ccglow 2.6s ease-in-out infinite}.cc-glow2{animation-delay:-1.3s}' +
    '@keyframes ccnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(40px,-50px);opacity:0}}.cc-note{animation:ccnote 3s ease-out infinite}.cc-n2{animation-delay:-1s}.cc-n3{animation-delay:-2s}' +
    '@keyframes cctwist{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.cc-tw{transform-box:fill-box;transform-origin:50% 100%;animation:cctwist .6s ease-in-out infinite}.cc-tw2{animation-delay:-.3s}' +
    '@keyframes cctally{0%,100%{opacity:1}50%{opacity:.2}}.cc-tally{animation:cctally 1s steps(1) infinite}' +
    '@keyframes ccwheel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.cc-wheel{transform-box:fill-box;transform-origin:50% 50%;animation:ccwheel 14s linear infinite}' +
    '@keyframes cctram{from{transform:translateX(420px)}to{transform:translateX(-200px)}}.cc-tram{animation:cctram 12s linear infinite}' +
    '@keyframes ccneon{0%,100%{opacity:1}92%{opacity:1}94%{opacity:.3}96%{opacity:1}}.cc-neon{animation:ccneon 3.2s infinite}' +
    '@keyframes ccflag{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.cc-flag{transform-box:fill-box;transform-origin:0 50%;animation:ccflag 1.8s ease-in-out infinite}' +
    '@keyframes ccspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cc-sp{animation:ccspray 1.4s ease-out infinite}.cc-sp2{animation-delay:.45s}' +
    '@keyframes cccar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.cc-car{animation:cccar 9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  /* a 9 with a straight stem */
  const nine = (x, y, h, col) => '<circle cx="' + (x + h * 0.27) + '" cy="' + (y - h * 0.7) + '" r="' + (h * 0.22) + '" fill="none" stroke="' + col + '" stroke-width="' + (h * 0.17) + '"/><rect x="' + (x + h * 0.40) + '" y="' + (y - h * 0.72) + '" width="' + (h * 0.17) + '" height="' + (h * 0.72) + '" fill="' + col + '"/>';
  const mono = (str, x, y, h, col) => { let o = "", cw = h * 0.62; for (let i = 0; i < str.length; i++) { const ch = str[i], cx = x + i * cw; if (ch === "9") o += nine(cx + h * 0.08, y, h * 0.7, col); else if (ch !== " ") o += '<text x="' + cx + '" y="' + y + '" font-family="Courier New, monospace" font-weight="700" font-size="' + h + '" fill="' + col + '">' + ch + '</text>'; } return o; };
  const monoW = (str, h) => str.length * h * 0.62;
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "cc-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, cls, col) => '<g class="cc-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + col + '"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="2" height="14" fill="' + col + '"/><path d="M' + (x + 5) + ' ' + (y - 14) + 'q6 3 4 9" stroke="' + col + '" stroke-width="2" fill="none"/></g>';
  const dancer = (x, y, col, cls) => '<g class="cc-tw ' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 34) + '" r="6" fill="#1a1420"/><rect x="' + (x - 6) + '" y="' + (y - 28) + '" width="12" height="18" rx="4" fill="' + col + '"/><path d="M' + (x - 4) + ' ' + (y - 10) + 'l-4 10M' + (x + 4) + ' ' + (y - 10) + 'l4 10" stroke="#1a1420" stroke-width="4"/><path d="M' + (x - 6) + ' ' + (y - 24) + 'l-8 6M' + (x + 6) + ' ' + (y - 24) + 'l8 -6" stroke="#1a1420" stroke-width="3"/></g>';
  const PINK = "#ff6fa8", TEAL = "#5fd4e0", YEL = "#ffd34e", BUS = "#1f4e79";

  /* 1. Washington Av & 9th St, Route 64 bus */
  function ccstation() {
    const row = (x, w, col) => '<rect x="' + x + '" y="70" width="' + w + '" height="110" fill="' + col + '"/><rect x="' + x + '" y="66" width="' + w + '" height="6" fill="#d8d0c0"/>' +
      [0, 1].map(r => '<rect class="' + (r ? "" : "cc-glow") + '" x="' + (x + 8) + '" y="' + (80 + r * 40) + '" width="16" height="22" fill="#ffd98a" opacity=".85"/><rect x="' + (x + w - 24) + '" y="' + (80 + r * 40) + '" width="16" height="22" fill="#3a3040"/>').join("") +
      '<path d="M' + (x + 4) + ' 118h' + (w - 8) + 'l-6 -8h-' + (w - 20) + 'z" fill="' + (col === "#9a4a3a" ? TEAL : PINK) + '" opacity=".8"/>';
    const bus = '<g class="anim-train"><rect x="20" y="132" width="300" height="70" rx="8" fill="#f2f2f0" stroke="#7b828a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (34 + i * 40) + '" y="142" width="30" height="24" rx="2" fill="#1d2731"/>').join("") +
      '<rect x="20" y="172" width="300" height="5" fill="#c8102e"/><rect x="20" y="178" width="300" height="5" fill="' + BUS + '"/>' +
      '<rect x="282" y="140" width="36" height="34" rx="3" fill="#1d2731"/><rect x="246" y="140" width="28" height="46" fill="#aab1b9" stroke="#7b828a"/>' +
      '<rect x="270" y="134" width="46" height="8" fill="#111"/><text x="293" y="141" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">64</text>' +
      '<circle cx="70" cy="202" r="12" fill="#222"/><circle cx="70" cy="202" r="5" fill="#888"/><circle cx="270" cy="202" r="12" fill="#222"/><circle cx="270" cy="202" r="5" fill="#888"/><circle cx="314" cy="186" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cc-s1)"/>' +
      row(0, 70, "#9a4a3a") + row(70, 66, "#8a5a46") + row(136, 70, "#9a4a3a") + row(206, 66, "#8a5a46") + row(272, 70, "#9a4a3a") + row(342, 60, "#8a5a46") +
      '<rect x="0" y="180" width="400" height="22" fill="#b8b2a6"/>' +
      bus +
      '<rect x="0" y="210" width="400" height="50" fill="#4e4c48"/><path d="M0 236h400" stroke="#e8e2a0" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* stop pole + flag */
      '<rect x="352" y="96" width="5" height="114" fill="#555"/><g class="cc-flag"><rect x="357" y="98" width="30" height="40" fill="#fff" stroke="#333"/><rect x="361" y="104" width="22" height="14" rx="3" fill="' + BUS + '"/><text x="372" y="115" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">64</text><rect x="361" y="122" width="22" height="3" fill="#c8102e"/></g>' +
      /* black stop sign */
      '<rect x="86" y="14" width="228" height="32" rx="3" fill="#111"/><text x="98" y="35" ' + font + ' font-size="14" fill="#fff">Washington Av &amp; 9th St</text>' +
      '<rect x="278" y="20" width="28" height="20" rx="4" fill="' + BUS + '"/><text x="292" y="34" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">64</text>',
      sky("cc-s1", "#6ab0e0", "#f2d8a8"));
  }

  /* 2. Fresh Farm Poultry, 9th Street */
  function ccpoultry() {
    let tile = "";
    for (let r = 0; r < 12; r++) for (let c = 0; c < 26; c++) tile += '<rect x="' + (c * 16) + '" y="' + (r * 12) + '" width="15" height="11" fill="#f4f2ec" stroke="#dcd8ce" stroke-width=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="#e8e4da"/>' + tile +
      '<rect x="0" y="142" width="400" height="6" fill="' + TEAL + '"/>' +
      /* sign board */
      '<rect x="100" y="14" width="200" height="30" rx="3" fill="#c8402e" stroke="#000" stroke-width="2"/><text x="200" y="35" text-anchor="middle" ' + font + ' font-size="16" fill="#fff" letter-spacing="2">POULTRY · EGGS</text>' +
      /* loudspeaker horn on the wall */
      '<g transform="translate(0 20)"><rect x="40" y="60" width="10" height="24" fill="#555"/><path d="M50 64l40 -14v44l-40 -14z" fill="#9aa2aa" stroke="#333" stroke-width="2"/><ellipse cx="90" cy="72" rx="5" ry="22" fill="#6a7278" stroke="#333" stroke-width="2"/>' +
      note(104, 70, "", PINK) + note(110, 86, "cc-n2", "#2a6ad0") + note(100, 60, "cc-n3", "#e0a000") + '</g>' +
      /* chalk price board */
      '<rect x="268" y="56" width="104" height="70" rx="3" fill="#2a3a2e" stroke="#8a6a3a" stroke-width="4"/>' +
      '<text x="280" y="76" ' + font + ' font-size="10" fill="#f4f2ec">FRESH EGGS</text><text x="280" y="94" ' + font + ' font-size="10" fill="#f4f2ec">CHICKEN</text><text x="280" y="112" ' + font + ' font-size="10" fill="#f4f2ec">TURKEY</text>' +
      '<path d="M346 72h16M346 90h16M346 108h16" stroke="#f4f2ec" stroke-width="2" stroke-dasharray="3 2"/>' +
      /* scale */
      '<rect x="168" y="112" width="44" height="30" rx="4" fill="#d8dce0" stroke="#333" stroke-width="2"/><circle cx="190" cy="104" r="16" fill="#fff" stroke="#333" stroke-width="2"/><path d="M190 104l8 -8" stroke="#c8102e" stroke-width="2"/><rect x="160" y="140" width="60" height="4" fill="#888"/>' +
      /* counter */
      '<rect x="0" y="148" width="400" height="60" fill="#f2f0ea"/><rect x="0" y="148" width="400" height="8" fill="#b8b2a6"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (10 + i * 50) + '" y="164" width="40" height="34" fill="#e2ded4" stroke="#c8c2b6"/>').join("") +
      /* egg crates on the counter */
      [40, 250].map(x => '<rect x="' + x + '" y="122" width="70" height="22" fill="#c8a878" stroke="#8a6a3a"/>' + Array.from({ length: 10 }, (_, i) => '<ellipse cx="' + (x + 8 + (i % 5) * 13) + '" cy="' + (128 + Math.floor(i / 5) * 9) + '" rx="5" ry="4" fill="#fbf4e4" stroke="#c8b898" stroke-width=".8"/>').join("")).join("") +
      /* floor */
      '<rect x="0" y="208" width="400" height="52" fill="#a8a296"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 36) + '" y="' + (208 + (i % 2) * 26) + '" width="36" height="26" fill="#8a8478"/>').join(""));
  }

  /* 3. The WFIL-TV studio at 46th & Market */
  function ccbandstand() {
    return svg(
      '<rect width="400" height="260" fill="#1c1626"/>' +
      /* lighting grid */
      '<rect x="0" y="0" width="400" height="16" fill="#2a2234"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (20 + i * 50) + '" y="14" width="12" height="10" fill="#555"/><circle class="cc-glow' + (i % 2 ? " cc-glow2" : "") + '" cx="' + (26 + i * 50) + '" cy="26" r="4" fill="#fff6c8"/>').join("") +
      /* bleachers */
      Array.from({ length: 4 }, (_, i) => '<rect x="0" y="' + (60 + i * 18) + '" width="250" height="18" fill="' + (i % 2 ? "#6a4a3a" : "#7a5a44") + '"/>').join("") +
      Array.from({ length: 30 }, (_, i) => { const x = 10 + (i % 10) * 24, y = 72 + Math.floor(i / 10) * 18; return '<circle cx="' + x + '" cy="' + (y - 8) + '" r="4.5" fill="#1a1420"/><rect x="' + (x - 6) + '" y="' + (y - 4) + '" width="12" height="8" rx="3" fill="' + [PINK, TEAL, YEL, "#e8e2d6"][i % 4] + '"/>'; }).join("") +
      /* the record podium + chart board */
      '<rect x="270" y="56" width="110" height="64" fill="#3a2a4a" stroke="' + YEL + '" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="280" y="' + (64 + i * 11) + '" width="90" height="7" fill="' + (i ? "#5a4a6a" : YEL) + '"/>').join("") +
      '<rect x="290" y="128" width="72" height="44" fill="#8a6a4a" stroke="#000" stroke-width="2"/><rect x="284" y="122" width="84" height="8" fill="#6a4a2a"/><circle cx="326" cy="150" r="12" fill="#111"/><circle cx="326" cy="150" r="4" fill="' + PINK + '"/>' +
      /* address card */
      '<rect x="270" y="30" width="110" height="20" rx="2" fill="#111"/><text x="325" y="44" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">46th &amp; MARKET</text>' +
      /* studio camera */
      '<rect x="20" y="138" width="54" height="34" rx="3" fill="#3a3a40" stroke="#000" stroke-width="2"/><rect x="74" y="146" width="18" height="18" fill="#222"/><circle cx="96" cy="155" r="6" fill="#444" stroke="#000"/>' +
      '<rect class="cc-tally" x="24" y="132" width="10" height="6" fill="#ff2a2a"/><rect x="44" y="172" width="6" height="40" fill="#555"/><path d="M28 220l19 -8l19 8" stroke="#555" stroke-width="4" fill="none"/>' +
      /* dance floor */
      '<rect x="0" y="172" width="400" height="88" fill="#4a3a32"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 172l-14 88" stroke="#3a2c26" stroke-width="2"/>').join("") +
      [120, 160, 200, 240, 290, 340, 380].map((x, i) => dancer(x, 250 - (i % 2) * 8, [PINK, TEAL, YEL, "#e8e2d6", PINK, TEAL, YEL][i], i % 2 ? "cc-tw2" : "")).join(""));
  }

  /* 4. The Wildwood boardwalk, summer 1960 */
  function ccwildwood() {
    const arc = (r, col) => '<path d="M' + (200 - r) + ' 92a' + r + ' ' + r + ' 0 0 1 ' + (2 * r) + ' 0" stroke="' + col + '" stroke-width="4" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cc-s4)"/>' + stars(20) +
      /* Ferris wheel on the pier */
      '<g transform="translate(330 70)"><g class="cc-wheel"><circle cx="0" cy="0" r="46" fill="none" stroke="#e8e2d6" stroke-width="2"/>' +
      Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return '<path d="M0 0L' + (46 * Math.cos(a)).toFixed(1) + ' ' + (46 * Math.sin(a)).toFixed(1) + '" stroke="#e8e2d6" stroke-width="1"/><circle cx="' + (46 * Math.cos(a)).toFixed(1) + '" cy="' + (46 * Math.sin(a)).toFixed(1) + '" r="3.5" fill="' + [PINK, TEAL, YEL][i % 3] + '"/>'; }).join("") + '</g></g>' +
      '<path d="M330 70l-26 76M330 70l26 76" stroke="#ccc" stroke-width="3"/>' +
      /* club front with a neon rainbow */
      '<rect x="110" y="56" width="180" height="96" fill="#2a2234" stroke="#000" stroke-width="2"/>' +
      '<g class="cc-neon">' + arc(54, "#ff4a4a") + arc(46, "#ffa030") + arc(38, YEL) + arc(30, "#4ad06a") + arc(22, TEAL) + arc(14, "#8a6aff") + '</g>' +
      '<rect x="130" y="96" width="140" height="20" rx="3" fill="#111"/><text x="200" y="111" text-anchor="middle" ' + font + ' font-size="12" fill="' + PINK + '" letter-spacing="2">RAINBOW</text>' +
      '<text x="200" y="134" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">THE TWIST · SUMMER</text>' + mono("1960", 200 - monoW("1960", 11) / 2, 147, 11, YEL) +
      '<rect x="20" y="80" width="80" height="72" fill="#3a2a3a"/><rect x="28" y="88" width="64" height="16" fill="' + TEAL + '" opacity=".7"/><rect x="300" y="110" width="0" height="0"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle class="cc-glow' + (i % 2 ? " cc-glow2" : "") + '" cx="' + (30 + i * 12) + '" cy="116" r="2.5" fill="#fff2a8"/>').join("") +
      /* boardwalk */
      '<rect x="0" y="152" width="400" height="108" fill="#a07a50"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M0 ' + (158 + i * 8) + 'h400" stroke="#80603c" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="152" width="400" height="5" fill="#6a4a2a"/>' +
      /* tram car */
      '<g class="cc-tram"><rect x="0" y="176" width="70" height="34" rx="6" fill="' + YEL + '" stroke="#000" stroke-width="2"/><rect x="6" y="182" width="58" height="8" fill="#1a6ab0"/>' +
      '<rect x="74" y="182" width="56" height="28" rx="4" fill="#fff4c8" stroke="#000" stroke-width="2"/><rect x="134" y="182" width="56" height="28" rx="4" fill="#fff4c8" stroke="#000" stroke-width="2"/>' +
      [16, 54, 90, 116, 150, 176].map(x => '<circle cx="' + x + '" cy="212" r="6" fill="#222"/>').join("") + '<path d="M70 196h4M130 196h4" stroke="#000" stroke-width="2"/></g>' +
      /* railing + ocean glimpse */
      '<rect x="0" y="236" width="400" height="4" fill="#4a3220"/>' + Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="236" width="3" height="24" fill="#4a3220"/>').join(""),
      sky("cc-s4", "#0e0a2a", "#5a2a6a"));
  }

  /* 5. S 4th St and Queen St, Queen Village */
  function cccorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cc-s5)"/>' + stars(14) +
      /* the three Society Hill Towers: plain concrete slabs with a dark window grid */
      [[118, 20], [178, 34], [238, 26]].map(t => '<rect x="' + t[0] + '" y="' + t[1] + '" width="48" height="' + (150 - t[1]) + '" fill="#b8b4aa"/>' +
        Array.from({ length: Math.floor((150 - t[1]) / 9) }, (_, r) => Array.from({ length: 5 }, (_, c) => '<rect class="' + ((r + c) % 7 ? "" : "cc-glow") + '" x="' + (t[0] + 4 + c * 9) + '" y="' + (t[1] + 4 + r * 9) + '" width="6" height="5" fill="' + ((r * 5 + c) % 6 ? "#2a2a3a" : "#ffd98a") + '"/>').join("")).join("")).join("") +
      '<rect x="0" y="96" width="110" height="54" fill="#2a2440"/><rect x="296" y="88" width="104" height="62" fill="#2a2440"/>' +
      /* Settlement Music School: red brick, white trim, tall windows */
      '<rect x="0" y="118" width="122" height="108" fill="#8e3e2c"/><rect x="0" y="114" width="122" height="6" fill="#e8e2d6"/>' +
      [10, 48, 86].map(x => '<rect class="cc-glow" x="' + x + '" y="130" width="26" height="34" fill="#ffd98a" opacity=".85"/><rect x="' + (x - 2) + '" y="128" width="30" height="3" fill="#e8e2d6"/><path d="M' + (x + 13) + ' 130v34M' + x + ' 147h26" stroke="#8e3e2c" stroke-width="2"/>').join("") +
      '<rect x="44" y="178" width="34" height="48" fill="#3a2a22"/><rect x="40" y="174" width="42" height="5" fill="#e8e2d6"/>' +
      note(30, 120, "", YEL) + note(70, 112, "cc-n2", TEAL) + note(100, 122, "cc-n3", PINK) +
      /* brick wall with tags + piano keys */
      '<rect x="122" y="140" width="278" height="86" fill="#7a3e30"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M122 ' + (148 + i * 8) + 'h278" stroke="#6a3226" stroke-width="1"/>').join("") +
      '<rect x="134" y="198" width="140" height="22" fill="#f7f3ea" stroke="#000" stroke-width="1.5"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M' + (134 + i * 10.8) + ' 198v22" stroke="#000" stroke-width="1"/>').join("") +
      [1, 2, 4, 5, 6, 8, 9, 11, 12].map(i => '<rect x="' + (134 + i * 10.8 - 3) + '" y="198" width="6" height="13" fill="#111"/>').join("") +
      tag("CHUBBY", 132, 188, 38, PINK, -6) + tag("LET'S TWIST", 286, 178, 15, TEAL, -4) + tag("SOUTH PHILLY", 282, 204, 14, YEL, -3) +
      /* street */
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="cc-car"><rect x="0" y="238" width="62" height="14" rx="6" fill="' + TEAL + '"/><rect x="14" y="229" width="32" height="11" rx="4" fill="' + TEAL + '"/><circle cx="14" cy="252" r="4" fill="#111"/><circle cx="48" cy="252" r="4" fill="#111"/><rect x="58" y="242" width="5" height="3" fill="#fff6c2"/></g>' +
      '<rect x="384" y="74" width="6" height="152" fill="#2f2f2f"/>' + sign(300, 76, 94, "S 4th St") + sign(300, 102, 94, "Queen St") +
      '<g class="cc-sp"><circle cx="232" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="cc-sp cc-sp2"><circle cx="238" cy="162" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("cc-s5", "#120c2c", "#7a3a5a"));
  }

  window.SCENES = { ccstation: ccstation, ccpoultry: ccpoultry, ccbandstand: ccbandstand, ccwildwood: ccwildwood, cccorner: cccorner };
})();
