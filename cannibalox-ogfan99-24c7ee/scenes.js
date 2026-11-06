/* Cannibal Ox game (NYC map, Manhattan: Harlem - Vast Aire and Vordul Mega met as high school kids in Harlem; "I rest my head on 115").
   1. W 116 St & Malcolm X Blvd: the M102 pulling up at the bus stop (every subway stop around Harlem is already taken on the map).
   2. The Knitting Factory in Williamsburg: the Can Ox show, two mics up front, the DJ behind, lights sweeping.
   3. A W 115 St rooftop at night: water tanks, pigeons circling, the iron galaxy overhead (Pigeon / Iron Galaxy).
   4. Malcolm X Blvd in the summer: the open hydrant splashing passing cars ("shinin' summer-time hydrants, splash passing cars").
   5. W 115 St & Frederick Douglass Blvd: green signs, CANNIBAL OX on the wall, the Wadleigh school clock tower behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cxtwk{0%,100%{opacity:.25}50%{opacity:1}}.cx-tw{animation:cxtwk 1.8s ease-in-out infinite}.cx-tw2{animation-delay:.6s}.cx-tw3{animation-delay:1.2s}' +
    '@keyframes cxfly{0%{transform:translate(0,0)}25%{transform:translate(60px,-18px)}50%{transform:translate(120px,0)}75%{transform:translate(60px,14px)}100%{transform:translate(0,0)}}.cx-fly{animation:cxfly 5s ease-in-out infinite}.cx-fly2{animation-delay:-1.7s}.cx-fly3{animation-delay:-3.3s}' +
    '@keyframes cxflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.cx-wing{transform-box:fill-box;transform-origin:50% 100%;animation:cxflap .35s linear infinite}' +
    '@keyframes cxbeam{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.cx-beam{transform-box:fill-box;transform-origin:50% 0;animation:cxbeam 3s ease-in-out infinite}.cx-beam2{animation-delay:-1.5s}' +
    '@keyframes cxbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.cx-bob{animation:cxbob .55s ease-in-out infinite}.cx-bob2{animation-delay:.27s}' +
    '@keyframes cxdrop{0%{transform:translate(0,0);opacity:1}100%{transform:translate(70px,40px);opacity:0}}.cx-drop{animation:cxdrop .9s linear infinite}.cx-drop2{animation-delay:.3s}.cx-drop3{animation-delay:.6s}' +
    '@keyframes cxcar{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.cx-car{animation:cxcar 5.5s linear infinite}' +
    '@keyframes cxmt{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.cx-mt{transform-box:fill-box;transform-origin:50% 100%;animation:cxmt .6s ease-in-out infinite}.cx-mt2{animation-delay:.2s}.cx-mt3{animation-delay:.4s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "cx-tw cx-tw" + (1 + i % 3)) + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.5) + '" fill="#fff" opacity=".75"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const bird = (x, y, cls) => '<g class="cx-fly ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="0" rx="7" ry="3.5" fill="#8b93a4"/><circle cx="6" cy="-2" r="2.4" fill="#6e7688"/><path d="M8 -2 l3 1 l-3 1z" fill="#d9a23a"/>' +
    '<path class="cx-wing" d="M-3 -1 q4 -10 9 -2z" fill="#a7b0c2"/><path d="M-6 0 l-5 -2 l1 4z" fill="#6e7688"/></g></g>';
  const tank = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-14 0 l14 -12 l14 12z" fill="#3a2a22"/><rect x="-13" y="0" width="26" height="28" fill="#7a5a40"/><path d="M-13 8h26M-13 16h26M-13 24h26" stroke="#4a3626" stroke-width="1.5"/>' +
    '<path d="M-10 28 l-4 18 M10 28 l4 18 M-12 38 h24" stroke="#2a2a2a" stroke-width="2"/></g>';
  const ICE = "#bfe3ff", RED = "#ff6b4a", GOLD = "#d6b85a", CREAM = "#f4ead8", BUSBLUE = "#0039a6", SIGN = "#0b6b3a";

  /* 1. W 116 St & Malcolm X Blvd: brownstones, the blue-and-white M102 pulling in, the bus stop pole */
  function cxbus() {
    let fronts = "";
    const cols = ["#7a4a3a", "#8a5a42", "#6e4636", "#83553e", "#74483a"];
    for (let i = 0; i < 5; i++) {
      const x = i * 82;
      fronts += '<rect x="' + x + '" y="36" width="80" height="134" fill="' + cols[i] + '"/><rect x="' + x + '" y="32" width="80" height="6" fill="#4a2e24"/>';
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) fronts += '<rect class="' + ((r + c + i) % 3 ? "" : "cx-tw cx-tw" + (c + 1)) + '" x="' + (x + 10 + c * 23) + '" y="' + (48 + r * 26) + '" width="13" height="18" rx="1" fill="#ffd98a" opacity="' + ((r + c + i) % 3 ? ".3" : ".85") + '"/>';
      fronts += '<path d="M' + (x + 26) + ' 170 l6 -16 h16 l6 16z" fill="#5a3a2e"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#cxs1)"/>' + stars(10) + fronts +
      '<rect x="0" y="170" width="400" height="18" fill="#8d8f93"/><rect x="0" y="188" width="400" height="72" fill="#45474d"/>' +
      '<path d="M0 228 h400" stroke="#e8d27a" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="anim-train">' +
        '<rect x="20" y="148" width="252" height="64" rx="8" fill="#f2f4f6" stroke="#8a8f98" stroke-width="2"/>' +
        '<rect x="20" y="186" width="252" height="10" fill="' + BUSBLUE + '"/>' +
        [34, 76, 118, 160, 202].map(x => '<rect x="' + x + '" y="158" width="34" height="22" rx="2" fill="#26354d"/>').join("") +
        '<rect x="246" y="156" width="22" height="28" rx="3" fill="#26354d"/><rect x="238" y="150" width="30" height="8" rx="2" fill="#111"/><text x="253" y="157" text-anchor="middle" ' + font + ' font-size="6" fill="#ffb000">M102</text>' +
        '<circle cx="62" cy="214" r="10" fill="#111"/><circle cx="62" cy="214" r="4" fill="#777"/><circle cx="232" cy="214" r="10" fill="#111"/><circle cx="232" cy="214" r="4" fill="#777"/><circle cx="268" cy="202" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="330" y="72" width="4" height="116" fill="#9aa0a8"/>' +
      '<rect x="306" y="72" width="52" height="34" rx="2" fill="' + BUSBLUE + '"/><rect x="312" y="76" width="40" height="10" rx="1" fill="#fff"/>' + txt("BUS", 332, 84, 8, BUSBLUE) +
      '<rect x="311" y="90" width="20" height="12" fill="#fff"/><rect x="333" y="90" width="20" height="12" fill="#fff"/>' + txt("M102", 321, 99, 6.5, BUSBLUE) + txt("M116", 343, 99, 6.5, BUSBLUE) +
      person(356, 156, "#1b1b1b") + person(378, 160, "#2c2c2c", "cx-bob") +
      '<rect x="18" y="8" width="234" height="22" rx="3" fill="#111"/>' + txt("W 116 ST &amp; MALCOLM X BLVD", 135, 23.5, 10, CREAM, 'letter-spacing="1"'),
      sky("cxs1", "#0d1430", "#4a3a6a"));
  }

  /* 2. The Knitting Factory, Williamsburg: two mics up front, the DJ table, crowd hands up, lights sweeping */
  function cxknit() {
    let crowd = "";
    for (let i = 0; i < 11; i++) crowd += person(18 + i * 36, 214 + (i % 2) * 4, i % 2 ? "#151515" : "#202020", i % 3 ? "" : "cx-bob" + (i % 2 ? " cx-bob2" : ""));
    let hands = "";
    for (let i = 0; i < 6; i++) hands += '<path class="cx-bob' + (i % 2 ? " cx-bob2" : "") + '" d="M' + (30 + i * 64) + ' 214 l-6 -20" stroke="#202020" stroke-width="5" stroke-linecap="round"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cxs2)"/>' +
      '<rect x="0" y="0" width="400" height="22" fill="#0a0a0a"/>' + [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 6) + '" y="16" width="12" height="10" fill="#333"/>').join("") +
      '<g class="cx-beam"><path d="M120 24 L84 150 L156 150z" fill="' + ICE + '" opacity=".22"/></g><g class="cx-beam cx-beam2"><path d="M280 24 L244 150 L316 150z" fill="' + RED + '" opacity=".22"/></g>' +
      '<rect x="60" y="40" width="280" height="40" fill="#141418" stroke="' + GOLD + '" stroke-width="2"/>' + txt("KNITTING FACTORY", 200, 58, 13, GOLD, 'letter-spacing="3"') + txt("BROOKLYN", 200, 73, 8, CREAM, 'letter-spacing="4"') +
      '<rect x="0" y="150" width="400" height="16" fill="#3a2a22"/><rect x="0" y="146" width="400" height="5" fill="#5a4030"/>' +
      '<rect x="168" y="114" width="64" height="32" fill="#1c1c22" stroke="#555" stroke-width="1.5"/><circle cx="186" cy="124" r="7" fill="#111" stroke="#666"/><circle cx="214" cy="124" r="7" fill="#111" stroke="#666"/>' +
      '<rect class="cx-mt" x="180" y="134" width="4" height="8" fill="' + ICE + '"/><rect class="cx-mt cx-mt2" x="190" y="134" width="4" height="8" fill="' + GOLD + '"/><rect class="cx-mt cx-mt3" x="206" y="134" width="4" height="8" fill="' + RED + '"/><rect class="cx-mt cx-mt2" x="216" y="134" width="4" height="8" fill="' + ICE + '"/>' +
      [110, 290].map(x => '<rect x="' + (x - 1.5) + '" y="100" width="3" height="46" fill="#888"/><rect x="' + (x - 4) + '" y="92" width="8" height="12" rx="4" fill="#c9ced6"/>').join("") +
      '<rect x="20" y="96" width="40" height="50" fill="#1a1a1a" stroke="#333"/><circle cx="40" cy="112" r="9" fill="#2a2a2a"/><circle cx="40" cy="134" r="6" fill="#2a2a2a"/>' +
      '<rect x="340" y="96" width="40" height="50" fill="#1a1a1a" stroke="#333"/><circle cx="360" cy="112" r="9" fill="#2a2a2a"/><circle cx="360" cy="134" r="6" fill="#2a2a2a"/>' +
      '<rect x="0" y="166" width="400" height="94" fill="#0e0e12"/>' + hands + crowd,
      sky("cxs2", "#1a1030", "#2a1c3a"));
  }

  /* 3. A W 115 St rooftop at night: tar roof, water tanks, chimneys, pigeons circling under the iron galaxy */
  function cxroof() {
    let gal = "";
    for (let i = 0; i < 46; i++) { const a = i * 0.55, r = 6 + i * 2.2; gal += '<circle class="' + (i % 5 ? "" : "cx-tw cx-tw" + (1 + i % 3)) + '" cx="' + (250 + Math.cos(a) * r * 1.6).toFixed(1) + '" cy="' + (64 + Math.sin(a) * r * .55).toFixed(1) + '" r="' + (i % 4 ? 1 : 1.8) + '" fill="' + (i % 3 ? ICE : "#e8eef8") + '"/>'; }
    let skyline = "";
    for (let i = 0; i < 9; i++) skyline += '<rect x="' + (i * 46) + '" y="' + (120 + (i * 17) % 30) + '" width="42" height="60" fill="#151b2a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cxs3)"/>' + stars(24) +
      '<ellipse cx="250" cy="64" rx="120" ry="30" fill="#7a8cc8" opacity=".12"/>' + gal +
      skyline +
      tank(70, 98, 1.2) + tank(330, 112, .9) +
      '<rect x="0" y="176" width="400" height="84" fill="#2a2a30"/><rect x="0" y="170" width="400" height="8" fill="#4a3a34"/>' +
      '<rect x="150" y="146" width="22" height="30" fill="#6a3a2e"/><rect x="146" y="142" width="30" height="6" fill="#4a2a22"/>' +
      '<rect x="230" y="150" width="60" height="26" fill="#3a3a44"/><path d="M230 150 h60" stroke="#888" stroke-width="2"/>' +
      bird(60, 70) + bird(130, 92, "cx-fly2") + bird(300, 140, "cx-fly3") + bird(180, 60, "cx-fly2") +
      '<g transform="translate(250 190)"><ellipse cx="0" cy="0" rx="9" ry="5" fill="#8b93a4"/><circle cx="8" cy="-3" r="3.2" fill="#6e7688"/><path d="M11 -3 l4 1 l-4 1z" fill="#d9a23a"/><path d="M-2 5 v5 M2 5 v5" stroke="#d27a5a" stroke-width="1.5"/></g>' +
      '<path d="M220 200 q8 -4 16 0" stroke="#d9b06a" stroke-width="3" fill="none"/>' +
      '<rect x="12" y="222" width="150" height="24" rx="3" fill="#111"/>' + txt("W 115 ST ROOFTOP", 87, 238, 10, CREAM, 'letter-spacing="1"'),
      sky("cxs3", "#03040c", "#1a2140"));
  }

  /* 4. Malcolm X Blvd in July: the open hydrant spraying across the lane, a car rolling through it, kids by the curb */
  function cxhydrant() {
    let fronts = "";
    for (let i = 0; i < 5; i++) {
      const x = i * 82;
      fronts += '<rect x="' + x + '" y="30" width="80" height="140" fill="' + (i % 2 ? "#8a5a42" : "#7a4a3a") + '"/>';
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) fronts += '<rect x="' + (x + 10 + c * 23) + '" y="' + (42 + r * 26) + '" width="13" height="18" fill="#2a3a4a"/>';
      fronts += '<rect x="' + (x + 6) + '" y="122" width="68" height="10" fill="' + (i % 2 ? GOLD : RED) + '" opacity=".85"/>';
    }
    let spray = "";
    for (let i = 0; i < 9; i++) spray += '<circle class="cx-drop' + (i % 3 ? " cx-drop" + (1 + i % 3) : "") + '" cx="' + (152 + (i % 3) * 3) + '" cy="' + (184 - (i % 4) * 2) + '" r="' + (2 + i % 2) + '" fill="#bfe8ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cxs4)"/>' +
      '<circle cx="340" cy="20" r="26" fill="#fff3b0" opacity=".9"/>' + fronts +
      '<rect x="0" y="170" width="400" height="22" fill="#a8a8ac"/><rect x="0" y="192" width="400" height="68" fill="#4a4c52"/>' +
      '<path d="M156 186 q60 -20 130 30" stroke="#bfe8ff" stroke-width="7" fill="none" opacity=".8"/><path d="M156 186 q50 -10 110 34" stroke="#e8f8ff" stroke-width="3" fill="none" opacity=".9"/>' + spray +
      '<ellipse cx="250" cy="236" rx="80" ry="8" fill="#6a86a0" opacity=".5"/>' +
      '<rect x="140" y="176" width="14" height="18" rx="3" fill="#c0392b"/><rect x="136" y="172" width="22" height="6" rx="2" fill="#c0392b"/><rect x="152" y="182" width="6" height="5" fill="#a02a1e"/>' +
      '<g class="cx-car" style="animation-delay:-2.6s"><rect x="0" y="206" width="110" height="26" rx="8" fill="#3a6ad0"/><rect x="18" y="196" width="66" height="16" rx="5" fill="#3a6ad0"/><rect x="24" y="199" width="54" height="10" fill="#bfe3ff"/><circle cx="22" cy="234" r="8" fill="#111"/><circle cx="88" cy="234" r="8" fill="#111"/></g>' +
      person(70, 160, "#1b1b1b", "cx-bob") + person(100, 162, "#2a2a2a", "cx-bob cx-bob2") + person(380, 160, "#222") +
      '<rect x="12" y="6" width="190" height="22" rx="3" fill="#111"/>' + txt("MALCOLM X BLVD, JULY", 107, 21, 10, CREAM, 'letter-spacing="1"'),
      sky("cxs4", "#5aa8e8", "#bfe3ff"));
  }

  /* 5. W 115 St & Frederick Douglass Blvd: the green signs, CANNIBAL OX on the wall, Wadleigh's red-brick clock tower behind */
  function cxcorner() {
    let bands = "";
    for (let y = 90; y < 200; y += 18) bands += '<rect x="250" y="' + y + '" width="130" height="3" fill="#e8dcc0"/>';
    let wins = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) wins += '<rect x="' + (260 + c * 30) + '" y="' + (96 + r * 24) + '" width="14" height="14" fill="#2a3442"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cxs5)"/>' +
      /* Wadleigh: red brick with pale stone bands, the tall clock tower with its steep dark roof */
      '<rect x="250" y="86" width="130" height="120" fill="#a4483a"/>' + bands + wins +
      '<rect x="292" y="22" width="46" height="70" fill="#a4483a"/><rect x="292" y="40" width="46" height="3" fill="#e8dcc0"/><rect x="292" y="84" width="46" height="3" fill="#e8dcc0"/>' +
      '<path d="M286 22 l29 -20 l29 20z" fill="#3a4a4e"/><rect x="314" y="-6" width="2" height="10" fill="#3a4a4e"/>' +
      '<circle cx="315" cy="60" r="12" fill="#f2ead6" stroke="#5a3a2a" stroke-width="2"/><path d="M315 60 v-8 M315 60 l6 3" stroke="#222" stroke-width="1.8" stroke-linecap="round"/>' +
      /* the wall */
      '<rect x="0" y="100" width="240" height="96" fill="#4c4a52"/>' + (function () { let r = ""; for (let y = 108; y < 196; y += 8) r += '<path d="M0 ' + y + ' h240" stroke="#3c3a42" stroke-width="1"/>'; return r; })() +
      tag("CANNIBAL", 12, 146, 28, ICE, -6) + tag("OX", 70, 186, 40, RED, -4) +
      '<path d="M150 162 l20 -8 M156 176 l22 -2" stroke="' + GOLD + '" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="0" y="196" width="400" height="14" fill="#9a9a9e"/><rect x="0" y="210" width="400" height="50" fill="#46484e"/>' +
      bird(120, 60) + bird(200, 40, "cx-fly2") +
      /* green signs */
      '<rect x="226" y="40" width="4" height="156" fill="#7c8088"/>' +
      '<rect x="176" y="42" width="104" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("W 115 ST", 228, 56.5, 11, "#fff", 'letter-spacing="1"') +
      '<rect x="164" y="66" width="128" height="20" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/>' + txt("FREDERICK DOUGLASS", 228, 80, 9.5, "#fff", 'letter-spacing=".5"') +
      person(300, 194, "#1d1d1d", "cx-bob") + person(330, 196, "#2a2a2a", "cx-bob cx-bob2"),
      sky("cxs5", "#2e5c9a", "#a9cbe8"));
  }

  window.SCENES = { cxbus: cxbus, cxknit: cxknit, cxroof: cxroof, cxhydrant: cxhydrant, cxcorner: cxcorner };
})();
