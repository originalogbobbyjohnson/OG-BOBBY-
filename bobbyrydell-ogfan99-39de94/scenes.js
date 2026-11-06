/* bobbyrydell scenes (Regions tab: Philadelphia; South Philly / Lower Moyamensing, S 11th St & Ritner St). CSS classes prefixed br- (the page's own anim-train is kept).
   1 11th St & Ritner St on SEPTA's Route 45 bus, at the corner of his block (the 2400 block of S 11th, now Bobby Rydell Blvd): two-story South Philly rowhouses with awnings and stoops, the stop flag, a white SEPTA bus sliding in.
   2 Cameo Records at 1405 Locust St, Center City, the label that signed him at 16 and cut Wild One and Volare: a studio room with his drum kit (he started as a drummer), the mic, reel-to-reel tape turning, the red RECORDING light.
   3 The Copacabana in New York, 1961, where at 19 he was the youngest star ever to headline: the striped awning on East 60th, palm fronds, a marquee with his name, spotlights sweeping.
   4 Bishop Neumann High School at 2600 Moore St, the school that gave him his 1960 diploma and class ring for singing at a fundraiser: brick school front, the flag on the pole, mortarboards flying.
   5 S 11th St and Ritner St, with the brown Bobby Rydell Blvd sign over the green signs: rowhouse brick, BOBBY RYDELL tagged on the wall, the stadium light towers of the South Philly sports complex glowing down Broad behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes brglow{0%,100%{opacity:.45}50%{opacity:1}}.br-glow{animation:brglow 2.6s ease-in-out infinite}.br-glow2{animation-delay:-1.3s}' +
    '@keyframes brreel{from{transform:rotate(0)}to{transform:rotate(360deg)}}.br-reel{transform-box:fill-box;transform-origin:50% 50%;animation:brreel 3s linear infinite}' +
    '@keyframes brrec{0%,100%{opacity:1}50%{opacity:.25}}.br-rec{animation:brrec 1.2s steps(1) infinite}' +
    '@keyframes brnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-46px);opacity:0}}.br-note{animation:brnote 3s ease-out infinite}.br-n2{animation-delay:-1s}.br-n3{animation-delay:-2s}' +
    '@keyframes brbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.br-beam{transform-box:fill-box;transform-origin:50% 100%;animation:brbeam 4s ease-in-out infinite}.br-beam2{animation-delay:-2s}' +
    '@keyframes brcap{0%{transform:translateY(0) rotate(0)}50%{transform:translateY(-44px) rotate(160deg)}100%{transform:translateY(0) rotate(360deg)}}.br-cap{transform-box:fill-box;transform-origin:50% 50%;animation:brcap 2.6s ease-in-out infinite}.br-cap2{animation-delay:-.9s}.br-cap3{animation-delay:-1.7s}' +
    '@keyframes brflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.br-flag{transform-box:fill-box;transform-origin:0 50%;animation:brflag 1.8s ease-in-out infinite}' +
    '@keyframes brspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.br-sp{animation:brspray 1.4s ease-out infinite}.br-sp2{animation-delay:.45s}' +
    '@keyframes brcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.br-car{animation:brcar 9s linear infinite}' +
    '@keyframes brcab{from{transform:translateX(480px)}to{transform:translateX(-160px)}}.br-cab{animation:brcab 10s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, col) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="' + (col || "#0f6b3a") + '" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  /* a 9 with a straight stem */
  const nine = (x, y, h, col) => '<circle cx="' + (x + h * 0.27) + '" cy="' + (y - h * 0.7) + '" r="' + (h * 0.22) + '" fill="none" stroke="' + col + '" stroke-width="' + (h * 0.17) + '"/><rect x="' + (x + h * 0.40) + '" y="' + (y - h * 0.72) + '" width="' + (h * 0.17) + '" height="' + (h * 0.72) + '" fill="' + col + '"/>';
  const mono = (str, x, y, h, col) => { let o = "", cw = h * 0.62; for (let i = 0; i < str.length; i++) { const ch = str[i], cx = x + i * cw; if (ch === "9") o += nine(cx + h * 0.08, y, h * 0.7, col); else if (ch !== " ") o += '<text x="' + cx + '" y="' + y + '" font-family="Courier New, monospace" font-weight="700" font-size="' + h + '" fill="' + col + '">' + ch + '</text>'; } return o; };
  const monoW = (str, h) => str.length * h * 0.62;
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "br-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const note = (x, y, cls, col) => '<g class="br-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + col + '"/><rect x="' + (x + 3) + '" y="' + (y - 14) + '" width="2" height="14" fill="' + col + '"/><path d="M' + (x + 5) + ' ' + (y - 14) + 'q6 3 4 9" stroke="' + col + '" stroke-width="2" fill="none"/></g>';
  const RED = "#ff5a3d", SKY = "#7fd0ff", GOLD = "#ffd34e", CREAM = "#f2e6c8", BUS = "#1f4e79";

  /* South Philly rowhouse strip: brick, cornice, metal awning, stoop */
  const rows = (y, h, cols) => cols.map((col, i) => {
    const x = i * 58;
    return '<rect x="' + x + '" y="' + y + '" width="58" height="' + h + '" fill="' + col + '"/><rect x="' + x + '" y="' + (y - 5) + '" width="58" height="6" fill="#d8d0c0"/>' +
      '<rect class="' + (i % 2 ? "br-glow" : "") + '" x="' + (x + 8) + '" y="' + (y + 10) + '" width="16" height="20" fill="#ffd98a" opacity=".85"/><rect x="' + (x + 34) + '" y="' + (y + 10) + '" width="16" height="20" fill="#3a3040"/>' +
      '<path d="M' + (x + 4) + ' ' + (y + 46) + 'h50l-6 -8h-38z" fill="' + [SKY, RED, GOLD, "#8fd08a"][i % 4] + '" opacity=".85"/>' +
      '<rect x="' + (x + 8) + '" y="' + (y + 48) + '" width="16" height="' + (h - 48) + '" fill="#4a3428"/><rect x="' + (x + 30) + '" y="' + (y + 52) + '" width="20" height="18" fill="#3a3040"/>';
  }).join("");

  /* 1. 11th St & Ritner St, Route 45 bus */
  function brstation() {
    const bus = '<g class="anim-train"><rect x="20" y="132" width="300" height="70" rx="8" fill="#f2f2f0" stroke="#7b828a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (34 + i * 40) + '" y="142" width="30" height="24" rx="2" fill="#1d2731"/>').join("") +
      '<rect x="20" y="172" width="300" height="5" fill="#c8102e"/><rect x="20" y="178" width="300" height="5" fill="' + BUS + '"/>' +
      '<rect x="282" y="140" width="36" height="34" rx="3" fill="#1d2731"/><rect x="246" y="140" width="28" height="46" fill="#aab1b9" stroke="#7b828a"/>' +
      '<rect x="270" y="134" width="46" height="8" fill="#111"/><text x="293" y="141" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">45 12TH-VINE</text>' +
      '<circle cx="70" cy="202" r="12" fill="#222"/><circle cx="70" cy="202" r="5" fill="#888"/><circle cx="270" cy="202" r="12" fill="#222"/><circle cx="270" cy="202" r="5" fill="#888"/><circle cx="314" cy="186" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#br-s1)"/>' +
      rows(76, 104, ["#9a4a3a", "#8a5a46", "#a65a40", "#7e4636", "#9a4a3a", "#8a5a46", "#a65a40"]) +
      '<rect x="0" y="180" width="400" height="22" fill="#b8b2a6"/>' +
      bus +
      '<rect x="0" y="210" width="400" height="50" fill="#4e4c48"/><path d="M0 236h400" stroke="#e8e2a0" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* stop pole + flag */
      '<rect x="352" y="96" width="5" height="114" fill="#555"/><g class="br-flag"><rect x="357" y="98" width="30" height="40" fill="#fff" stroke="#333"/><rect x="361" y="104" width="22" height="14" rx="3" fill="' + BUS + '"/><text x="372" y="115" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">45</text><rect x="361" y="122" width="22" height="3" fill="#c8102e"/></g>' +
      /* black stop sign */
      '<rect x="96" y="14" width="208" height="32" rx="3" fill="#111"/><text x="108" y="35" ' + font + ' font-size="14" fill="#fff">11th St &amp; Ritner St</text>' +
      '<rect x="268" y="20" width="28" height="20" rx="4" fill="' + BUS + '"/><text x="282" y="34" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">45</text>',
      sky("br-s1", "#6ab0e0", "#f2d8a8"));
  }

  /* 2. Cameo Records, 1405 Locust St */
  function brcameo() {
    let panels = "";
    for (let r = 0; r < 6; r++) for (let c = 0; c < 10; c++) panels += '<rect x="' + (c * 40 + 2) + '" y="' + (r * 24 + 2) + '" width="36" height="20" rx="2" fill="' + ((r + c) % 2 ? "#3a2c3a" : "#33263a") + '"/>';
    const drum = (cx, cy, rx, ry, col) => '<ellipse cx="' + cx + '" cy="' + (cy + 14) + '" rx="' + rx + '" ry="' + ry + '" fill="' + col + '" stroke="#000" stroke-width="2"/><rect x="' + (cx - rx) + '" y="' + cy + '" width="' + (2 * rx) + '" height="14" fill="' + col + '" stroke="#000" stroke-width="2"/><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="#f4efe2" stroke="#000" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2030"/>' + panels +
      /* door glass with the address */
      '<rect x="14" y="40" width="70" height="120" fill="#5a4030" stroke="#000" stroke-width="2"/><rect x="22" y="50" width="54" height="50" fill="#9ac8d8" opacity=".55"/>' +
      '<text x="49" y="72" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">1405</text><text x="49" y="88" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">LOCUST</text><circle cx="74" cy="112" r="3" fill="' + GOLD + '"/>' +
      /* RECORDING light */
      '<rect x="150" y="12" width="100" height="24" rx="4" fill="#111" stroke="#555"/><text class="br-rec" x="200" y="29" text-anchor="middle" ' + font + ' font-size="12" fill="#ff3a2a" letter-spacing="2">RECORDING</text>' +
      /* reel-to-reel deck */
      '<rect x="292" y="40" width="96" height="112" rx="4" fill="#9aa2aa" stroke="#000" stroke-width="2"/>' +
      [[318, 70], [362, 70]].map(p => '<g class="br-reel"><circle cx="' + p[0] + '" cy="' + p[1] + '" r="18" fill="#3a3a40" stroke="#000" stroke-width="1.5"/><circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#ccc"/>' +
        [0, 120, 240].map(a => '<circle cx="' + (p[0] + 10 * Math.cos(a * Math.PI / 180)).toFixed(1) + '" cy="' + (p[1] + 10 * Math.sin(a * Math.PI / 180)).toFixed(1) + '" r="4" fill="#9aa2aa"/>').join("") + '</g>').join("") +
      '<path d="M318 88l22 22l22 -22" stroke="#4a2a1a" stroke-width="2" fill="none"/><rect x="304" y="118" width="72" height="22" fill="#2a2a30"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (310 + i * 16) + '" y="124" width="10" height="10" rx="2" fill="' + (i === 3 ? "#ff3a2a" : "#ddd") + '"/>').join("") +
      /* the mic */
      '<rect x="146" y="74" width="4" height="120" fill="#888"/><rect x="134" y="54" width="28" height="34" rx="12" fill="#bfc6cc" stroke="#000" stroke-width="2"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M138 ' + (62 + i * 6) + 'h20" stroke="#6a7278" stroke-width="1.5"/>').join("") +
      '<path d="M128 198l20 -6l20 6" stroke="#888" stroke-width="4" fill="none"/>' +
      note(170, 70, "", GOLD) + note(176, 88, "br-n2", SKY) + note(166, 60, "br-n3", RED) +
      /* floor */
      '<rect x="0" y="196" width="400" height="64" fill="#5a3a2a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 196l-12 64" stroke="#4a2e20" stroke-width="2"/>').join("") +
      /* drum kit: bass drum, toms, snare, cymbals */
      '<g transform="translate(0 6)">' +
      '<circle cx="232" cy="176" r="30" fill="' + RED + '" stroke="#000" stroke-width="2"/><circle cx="232" cy="176" r="22" fill="#f4efe2" stroke="#000" stroke-width="1.5"/><circle cx="232" cy="176" r="8" fill="' + RED + '"/>' +
      drum(206, 130, 13, 5, RED) + drum(258, 130, 13, 5, RED) + drum(186, 160, 15, 5, RED) +
      '<rect x="185" y="174" width="3" height="24" fill="#888"/>' +
      '<rect x="279" y="104" width="3" height="94" fill="#888"/><ellipse cx="281" cy="104" rx="20" ry="4" fill="' + GOLD + '" stroke="#8a6a10"/>' +
      '<rect x="170" y="112" width="3" height="60" fill="#888"/><ellipse cx="171" cy="112" rx="16" ry="3.5" fill="' + GOLD + '" stroke="#8a6a10"/>' +
      '<path d="M196 118l18 -8M222 122l-6 -14" stroke="#e8d8b0" stroke-width="3" stroke-linecap="round"/></g>');
  }

  /* 3. The Copacabana, New York, 1961 */
  function brcopa() {
    const palm = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0q-4 -40 4 -80" stroke="#6a4a2a" stroke-width="6" fill="none"/>' +
      [[-40, -70], [-30, -96], [10, -104], [44, -86], [40, -60]].map(p => '<path d="M4 -80q' + (p[0] / 2) + ' ' + ((p[1] + 80) / 2 - 14) + ' ' + p[0] + ' ' + (p[1] + 80) + '" stroke="#2f8a4a" stroke-width="7" fill="none" stroke-linecap="round"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#br-s3)"/>' + stars(18) +
      /* spotlight beams from the street */
      '<g class="br-beam" opacity=".22"><path d="M90 250l-40 -250h40z" fill="#fff6c8"/></g><g class="br-beam br-beam2" opacity=".22"><path d="M320 250l20 -250h40z" fill="#fff6c8"/></g>' +
      /* brownstone front */
      '<rect x="40" y="40" width="320" height="170" fill="#6a4a3c"/>' + Array.from({ length: 3 }, (_, r) => Array.from({ length: 6 }, (_, c) => '<rect class="' + ((r + c) % 3 ? "" : "br-glow") + '" x="' + (56 + c * 50) + '" y="' + (50 + r * 26) + '" width="26" height="18" fill="' + ((r + c) % 2 ? "#ffd98a" : "#3a2a30") + '"/>').join("")).join("") +
      /* marquee */
      '<rect x="90" y="126" width="220" height="30" fill="#111" stroke="' + GOLD + '" stroke-width="2"/>' +
      Array.from({ length: 22 }, (_, i) => '<circle class="br-glow' + (i % 2 ? " br-glow2" : "") + '" cx="' + (96 + i * 10) + '" cy="129" r="2" fill="#fff2a8"/>').join("") +
      '<text x="200" y="149" text-anchor="middle" ' + font + ' font-size="13" fill="' + CREAM + '" letter-spacing="1.5">TONIGHT · BOBBY RYDELL</text>' +
      /* striped awning */
      '<path d="M120 156h160l12 26h-184z" fill="' + CREAM + '"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (120 + i * 20) + ' 156h10l' + (2 + i * 0.4) + ' 26h-11z" fill="#2f8a4a"/>').join("") +
      '<rect x="168" y="182" width="64" height="30" fill="#2a1a1a"/><rect x="196" y="182" width="2" height="30" fill="' + GOLD + '"/>' +
      '<text x="200" y="118" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '" letter-spacing="3">EAST 60th STREET</text>' +
      mono("1961", 330 - monoW("1961", 12) / 2, 30, 12, GOLD) +
      palm(26, 214, 0.62) + palm(374, 214, 0.62) +
      /* sidewalk + street + cab */
      '<rect x="0" y="210" width="400" height="16" fill="#9a968e"/><rect x="0" y="226" width="400" height="34" fill="#3e3c3a"/>' +
      '<g class="br-cab"><rect x="0" y="232" width="70" height="16" rx="6" fill="#f2c81a"/><rect x="16" y="223" width="36" height="11" rx="4" fill="#f2c81a"/><rect x="20" y="226" width="12" height="7" fill="#24303a"/><rect x="36" y="226" width="12" height="7" fill="#24303a"/><circle cx="14" cy="249" r="5" fill="#111"/><circle cx="56" cy="249" r="5" fill="#111"/><rect x="0" y="238" width="4" height="3" fill="#fff6c2"/></g>',
      sky("br-s3", "#0c0a24", "#3a2050"));
  }

  /* 4. Bishop Neumann High School, 2600 Moore St */
  function brneumann() {
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="22" height="30" fill="#cfe2ea" stroke="#e8e2d6" stroke-width="2"/><path d="M' + (x + 11) + ' ' + y + 'v30M' + x + ' ' + (y + 15) + 'h22" stroke="#e8e2d6" stroke-width="1.5"/>';
    const cap = (x, y, cls) => '<g class="br-cap ' + cls + '"><path d="M' + (x - 14) + ' ' + y + 'l14 -6l14 6l-14 6z" fill="#1a1a2a" stroke="#000"/><rect x="' + (x - 7) + '" y="' + (y + 2) + '" width="14" height="6" fill="#1a1a2a"/><path d="M' + x + ' ' + y + 'l10 4v8" stroke="' + GOLD + '" stroke-width="1.5" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#br-s4)"/>' +
      /* brick school front with limestone trim */
      '<rect x="40" y="60" width="320" height="150" fill="#9a4a36"/>' + Array.from({ length: 18 }, (_, i) => '<path d="M40 ' + (66 + i * 8) + 'h320" stroke="#86402e" stroke-width="1"/>').join("") +
      '<rect x="40" y="54" width="320" height="8" fill="#e2d8c2"/><rect x="40" y="118" width="320" height="5" fill="#e2d8c2"/>' +
      /* center bay */
      '<rect x="160" y="34" width="80" height="176" fill="#a6523c"/><rect x="156" y="30" width="88" height="8" fill="#e2d8c2"/><path d="M160 34l40 -20l40 20z" fill="#e2d8c2"/>' +
      '<rect x="168" y="44" width="64" height="14" fill="#e2d8c2"/><text x="200" y="55" text-anchor="middle" ' + font + ' font-size="6.5" fill="#5a3a2a" letter-spacing=".5">BISHOP NEUMANN</text>' +
      '<path d="M176 210v-46a24 24 0 0 1 48 0v46z" fill="#3a2a22" stroke="#e2d8c2" stroke-width="4"/><rect x="198" y="164" width="4" height="46" fill="#e2d8c2"/>' +
      [52, 86, 120, 256, 290, 324].map(x => win(x, 76) + win(x, 136)).join("") + win(178, 72) + win(200, 72) +
      /* steps */
      '<rect x="150" y="210" width="100" height="6" fill="#d8d0c0"/><rect x="140" y="216" width="120" height="6" fill="#c8c0b0"/>' +
      /* flagpole */
      '<rect x="370" y="20" width="4" height="200" fill="#ccc"/><g class="br-flag"><rect x="374" y="22" width="24" height="16" fill="#fff"/>' + [0, 1, 2, 3].map(i => '<rect x="374" y="' + (22 + i * 4) + '" width="24" height="2" fill="#c8102e"/>').join("") + '<rect x="374" y="22" width="10" height="8" fill="#1f3a7a"/></g>' +
      /* the diploma + ring year */
      '<rect x="10" y="194" width="54" height="20" rx="10" fill="' + CREAM + '" stroke="#8a6a3a" stroke-width="2"/><rect x="32" y="194" width="6" height="20" fill="' + RED + '"/>' +
      cap(110, 40, "") + cap(290, 34, "br-cap2") + cap(330, 70, "br-cap3") +
      '<rect x="0" y="222" width="400" height="38" fill="#7a766e"/><rect x="0" y="220" width="400" height="3" fill="#e8ecf2"/>' + mono("1960", 22, 246, 14, GOLD),
      sky("br-s4", "#7ec0ea", "#e8f2f8"));
  }

  /* 5. S 11th St and Ritner St, Bobby Rydell Blvd */
  function brcorner() {
    const tower = (x, h) => '<rect x="' + x + '" y="' + (150 - h) + '" width="5" height="' + h + '" fill="#3a3a4a"/><rect x="' + (x - 13) + '" y="' + (144 - h) + '" width="31" height="16" fill="#2a2a3a"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect class="br-glow' + (i % 2 ? " br-glow2" : "") + '" x="' + (x - 11 + (i % 4) * 7.5) + '" y="' + (146 - h + Math.floor(i / 4) * 6) + '" width="5" height="4" fill="#fffbe0"/>').join("") +
      '<path d="M' + (x - 13) + ' ' + (160 - h) + 'l-18 ' + (h - 10) + 'h80l-18 -' + (h - 10) + 'z" fill="#fff8d0" opacity=".08"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#br-s5)"/>' + stars(16) +
      /* the stadium light towers down Broad, glowing over the rooftops */
      '<ellipse cx="200" cy="150" rx="190" ry="34" fill="#fff4c0" opacity=".12"/>' +
      tower(120, 96) + tower(170, 110) + tower(232, 104) + tower(284, 92) +
      '<path d="M100 150q100 -30 210 0z" fill="#3a3448"/>' +
      /* rowhouse brick wall */
      '<rect x="0" y="140" width="400" height="86" fill="#8a4436"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (148 + i * 8) + 'h400" stroke="#76382c" stroke-width="1"/>').join("") +
      '<rect x="0" y="134" width="400" height="7" fill="#d8d0c0"/>' +
      '<rect class="br-glow" x="18" y="150" width="22" height="28" fill="#ffd98a" opacity=".8"/><path d="M12 186h40l-6 -8h-28z" fill="' + SKY + '"/>' +
      tag("BOBBY RYDELL", 62, 196, 34, RED, -5) + tag("WILD ONE", 92, 222, 16, SKY, -3) + tag("11TH ST", 230, 222, 14, GOLD, -4) +
      /* street */
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="br-car"><rect x="0" y="238" width="62" height="14" rx="6" fill="' + SKY + '"/><rect x="14" y="229" width="32" height="11" rx="4" fill="' + SKY + '"/><circle cx="14" cy="252" r="4" fill="#111"/><circle cx="48" cy="252" r="4" fill="#111"/><rect x="58" y="242" width="5" height="3" fill="#fff6c2"/></g>' +
      /* pole + green signs + brown honorary sign */
      '<rect x="384" y="50" width="6" height="176" fill="#2f2f2f"/>' +
      sign(276, 52, 118, "Bobby Rydell Blvd", "#6b3f22") + sign(290, 80, 104, "S 11th St") + sign(290, 106, 104, "Ritner St") +
      '<g class="br-sp"><circle cx="196" cy="166" r="3" fill="' + RED + '" opacity=".7"/></g><g class="br-sp br-sp2"><circle cx="202" cy="160" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("br-s5", "#0e0c2a", "#4a2a50"));
  }

  window.SCENES = { brstation: brstation, brcameo: brcameo, brcopa: brcopa, brneumann: brneumann, brcorner: brcorner };
})();
