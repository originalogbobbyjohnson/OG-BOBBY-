/* Pumpkinhead game (NYC map, Brooklyn: Park Slope, where Robert "P.H." Diaz came up and where Degraw St between 4th and 5th Avs now carries his name).
   The R down at Union St on 4th Av, an orange moon over the Park Slope brownstones (Orange Moon Over Brooklyn), P.S. 282 on 6th Av
   (where he and Talib Kweli were in 4th grade together), the second-floor record shop on Sixth Av in the Village where the underground
   bought its 12-inches and he freestyled, and Degraw St & 4th Av with the old Public Bath No. 7 down the avenue. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes phcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ph-car{animation:phcar 7s linear infinite}.ph-car2{animation-delay:-3.5s}' +
    '@keyframes phblink{0%,100%{opacity:.25}50%{opacity:1}}.ph-bl{animation:phblink 1.8s ease-in-out infinite}.ph-bl2{animation-delay:.6s}.ph-bl3{animation-delay:1.2s}' +
    '@keyframes phflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.25}55%{opacity:.9}}.ph-flk{animation:phflick 2.6s infinite}' +
    '@keyframes phglow{0%,100%{opacity:.35}50%{opacity:.7}}.ph-glow{animation:phglow 4s ease-in-out infinite}' +
    '@keyframes phcloud{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.ph-cloud{animation:phcloud 22s linear infinite}.ph-cloud2{animation-delay:-11s}' +
    '@keyframes phspin{to{transform:rotate(360deg)}}.ph-spin{transform-box:fill-box;transform-origin:50% 50%;animation:phspin 1.6s linear infinite}' +
    '@keyframes phbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.ph-bob{animation:phbob .55s ease-in-out infinite}.ph-bob2{animation-delay:.27s}' +
    '@keyframes phball{0%,100%{transform:translateY(0)}50%{transform:translateY(-34px)}}.ph-ball{animation:phball .9s ease-in-out infinite}' +
    '@keyframes phnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.ph-note{animation:phnote 2.4s linear infinite}.ph-note2{animation-delay:-.8s}.ph-note3{animation-delay:-1.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (6 + (i * 53) % 56) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#f28c28", GOLD = "#ffd166", CREAM = "#f4ead8", YEL = "#fccc0a";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';

  /* 1. Union St on the 4th Av line, underground: white tile, the maroon-and-tan mosaic band, the black sign with the yellow R, an R train sliding in */
  function unionst() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#f1ede4"/>';
    let band = "";
    for (let x = 0; x < 400; x += 14) band += '<rect x="' + x + '" y="37" width="7" height="7" fill="' + (x % 28 ? "#c8a46a" : "#7a2e2a") + '"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#ddd6c6"/>' + tiles +
      '<rect x="0" y="33" width="400" height="15" fill="#5b2320"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#29292c"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="ph-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      '<rect x="60" y="58" width="280" height="32" rx="3" fill="#111"/><rect x="60" y="58" width="280" height="3" fill="#fff"/>' +
      '<text x="76" y="80" ' + font + ' font-size="15" fill="#fff">Union St</text>' + bullet(318, 74, "R", YEL, true) +
      [20, 380].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#2f3d2f"/>').join("") +
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#cfe2f5"/>' + bullet(298, 148, "R", YEL, true) +
        '<rect x="10" y="140" width="276" height="4" fill="' + YEL + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5d5a55"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3b3935"/>' +
      person(334, 196, "#1b1b1b") + person(356, 200, "#3a2a1a") +
      txt("4 AV · PARK SLOPE", 150, 236, 11, "#f1ead8", 'letter-spacing="3"'));
  }

  /* 2. Orange moon over Park Slope: a row of brownstones with stoops and cornices on the hill, a huge orange moon, clouds drifting, windows flicking on */
  function moon() {
    const house = (x, w, h, col) => {
      let g = '<rect x="' + x + '" y="' + (200 - h) + '" width="' + w + '" height="' + h + '" fill="' + col + '"/>' +
        '<rect x="' + (x - 2) + '" y="' + (200 - h - 6) + '" width="' + (w + 4) + '" height="7" fill="#2a1a12"/>';
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
        const wx = x + 7 + c * ((w - 14) / 3), wy = 200 - h + 10 + r * 28;
        if (wy < 172) g += '<rect class="ph-bl ph-bl' + ((r + c + x) % 3 + 1) + '" x="' + wx + '" y="' + wy + '" width="' + ((w - 14) / 3 - 5) + '" height="16" fill="#ffcf7a" opacity=".8"/>';
      }
      g += '<path d="M' + (x + w - 26) + ' 214 l14 -14 h10 v14z" fill="#3b2318"/><rect x="' + (x + w - 16) + '" y="176" width="10" height="24" fill="#1a0f0a"/>';
      return g;
    };
    return svg(
      '<rect width="400" height="260" fill="url(#pm)"/>' + stars(22) +
      '<circle class="ph-glow" cx="292" cy="74" r="70" fill="' + ORANGE + '" opacity=".4"/>' +
      '<circle cx="292" cy="74" r="44" fill="#f7a23c"/><circle cx="278" cy="62" r="7" fill="#e08a24" opacity=".7"/><circle cx="304" cy="88" r="9" fill="#e08a24" opacity=".6"/><circle cx="306" cy="58" r="4" fill="#e08a24" opacity=".7"/>' +
      '<g class="ph-cloud"><ellipse cx="40" cy="60" rx="46" ry="9" fill="#3a2a40" opacity=".8"/></g>' +
      '<g class="ph-cloud ph-cloud2"><ellipse cx="40" cy="92" rx="34" ry="7" fill="#3a2a40" opacity=".7"/></g>' +
      house(0, 64, 112, "#6b3b26") + house(66, 60, 118, "#7a4630") + house(128, 64, 108, "#5e3322") + house(194, 62, 116, "#744129") + house(258, 66, 110, "#673a25") + house(326, 74, 120, "#7b4a32") +
      '<rect x="0" y="214" width="400" height="46" fill="#4d4a47"/><rect x="0" y="200" width="400" height="14" fill="#7a7672"/>' +
      [30, 140, 250, 360].map(x => '<rect x="' + x + '" y="150" width="4" height="52" fill="#222"/><circle class="ph-flk" cx="' + (x + 2) + '" cy="148" r="5" fill="#fff1c2"/>').join("") +
      txt("ORANGE MOON OVER BROOKLYN", 132, 30, 12, GOLD, 'letter-spacing="2"'),
      sky("pm", "#120a22", "#4a2a3a"));
  }

  /* 3. P.S. 282 on 6th Av at Berkeley Pl: the brick school, the blue entrance, the schoolyard fence, a kid bouncing a ball, a chalk cypher */
  function ps282() {
    let win = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 8; c++) win += '<rect x="' + (52 + c * 38) + '" y="' + (52 + r * 34) + '" width="24" height="22" fill="#bcd7ea" stroke="#efe6d4" stroke-width="2"/>';
    let fence = "";
    for (let x = 0; x <= 400; x += 10) fence += '<path d="M' + x + ' 186 l10 -20 M' + x + ' 166 l10 20" stroke="#8f979e" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ps)"/>' +
      '<rect x="40" y="36" width="320" height="130" fill="#9a4b34"/>' +
      (() => { let b = ""; for (let y = 42; y < 166; y += 7) b += '<path d="M40 ' + y + 'h320" stroke="#87412d" stroke-width="1"/>'; return b; })() +
      '<rect x="36" y="30" width="328" height="8" fill="#d8cdb4"/>' + win +
      '<rect x="176" y="130" width="48" height="36" fill="#1f4e8a"/><rect x="198" y="130" width="3" height="36" fill="#0f2c52"/>' +
      '<rect x="150" y="116" width="100" height="12" fill="#efe6d4"/>' + txt("P.S. 282", 200, 126, 10, "#3a2418") +
      '<rect x="0" y="166" width="400" height="94" fill="#6e6a64"/>' +
      '<rect x="0" y="164" width="400" height="2" fill="#8f979e"/>' + fence + '<rect x="0" y="186" width="400" height="2" fill="#8f979e"/>' +
      '<circle cx="290" cy="220" r="22" fill="none" stroke="#f4ead8" stroke-width="2" stroke-dasharray="5 4" opacity=".7"/>' +
      person(280, 196, "#f28c28", "ph-bob") + person(304, 198, "#2d6a9f", "ph-bob ph-bob2") + person(318, 214, "#3b3b3b", "ph-bob") +
      person(96, 200, "#1b1b1b") + '<circle class="ph-ball" cx="114" cy="226" r="4.5" fill="#e86a1c" stroke="#7a2e10" stroke-width="1"/>' +
      txt("6 AV · BERKELEY PL", 200, 250, 10, CREAM, 'letter-spacing="3"'),
      sky("ps", "#7fb3d9", "#d9ecf6"));
  }

  /* 4. The second-floor record shop on Sixth Av in the Village: the walk-up door, records in the window, a turntable spinning, the line on the sidewalk */
  function fatbeats() {
    let rec = "";
    for (let i = 0; i < 5; i++) rec += '<rect x="' + (64 + i * 30) + '" y="62" width="26" height="26" fill="' + ["#f28c28", "#1d3557", "#e63946", "#2a9d8f", "#ffd166"][i] + '"/><circle cx="' + (77 + i * 30) + '" cy="75" r="7" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fb)"/>' +
      '<rect x="30" y="18" width="340" height="190" fill="#5c3a2e"/>' +
      (() => { let b = ""; for (let y = 24; y < 208; y += 8) b += '<path d="M30 ' + y + 'h340" stroke="#4e3127" stroke-width="1"/>'; return b; })() +
      '<rect x="50" y="40" width="200" height="66" fill="#e9b25a" opacity=".9"/>' + rec +
      '<rect x="50" y="40" width="200" height="66" fill="none" stroke="#111" stroke-width="4"/>' +
      '<rect x="270" y="40" width="80" height="66" fill="#e9b25a" opacity=".9"/><rect x="270" y="40" width="80" height="66" fill="none" stroke="#111" stroke-width="4"/>' +
      '<g class="ph-spin"><circle cx="310" cy="73" r="22" fill="#111"/><circle cx="310" cy="73" r="15" fill="none" stroke="#333" stroke-width="1"/><circle cx="310" cy="73" r="7" fill="' + ORANGE + '"/><rect x="309" y="51" width="2" height="9" fill="#555"/></g>' +
      '<rect x="50" y="114" width="300" height="20" fill="#111"/>' + txt("RECORDS · 2ND FLOOR · 12 INCH SINGLES", 200, 128, 10, GOLD, 'letter-spacing="2"') +
      '<rect x="56" y="140" width="50" height="68" fill="#1b1b1b"/><rect x="62" y="146" width="38" height="62" fill="#2a2a2a"/>' +
      '<rect x="130" y="144" width="210" height="50" fill="#3a2a22"/><rect x="134" y="148" width="202" height="42" fill="#8fb8c9" opacity=".5"/>' +
      '<g class="ph-note"><text x="120" y="150" font-size="16" fill="' + GOLD + '">&#9834;</text></g><g class="ph-note ph-note2"><text x="200" y="140" font-size="14" fill="' + GOLD + '">&#9835;</text></g><g class="ph-note ph-note3"><text x="300" y="146" font-size="16" fill="' + GOLD + '">&#9834;</text></g>' +
      '<rect x="0" y="208" width="400" height="52" fill="#5d5a55"/><rect x="0" y="208" width="400" height="4" fill="#8a8c90"/>' +
      person(124, 206, "#2d2d2d", "ph-bob") + person(150, 208, "#7a3b1c", "ph-bob ph-bob2") + person(176, 206, "#1d3557", "ph-bob") + person(202, 208, "#3b3b3b", "ph-bob ph-bob2") +
      '<g class="ph-car"><rect x="0" y="238" width="46" height="13" rx="4" fill="' + YEL + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="36" cy="251" r="4" fill="#111"/></g>' +
      txt("SIXTH AV · GREENWICH VILLAGE", 200, 12, 9, CREAM, 'letter-spacing="3"'),
      sky("fb", "#1a1426", "#3a2a3a"));
  }

  /* 5. Degraw St & 4th Av: green street signs plus the co-named sign, the wall tagged PUMPKINHEAD, and down the avenue the old Public Bath No. 7 (cream terracotta, big arched windows) */
  function corner() {
    let arches = "";
    for (let i = 0; i < 4; i++) arches += '<path d="M' + (62 + i * 42) + ' 112 v-30 a14 14 0 0 1 28 0 v30z" fill="#ffcf7a" class="ph-bl ph-bl' + (i % 3 + 1) + '" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pc)"/>' + stars(16) +
      '<rect x="44" y="50" width="196" height="84" fill="#e8dcc0"/>' +
      '<rect x="40" y="44" width="204" height="10" fill="#d6c7a4"/><path d="M110 44 l32 -18 l32 18z" fill="#d6c7a4"/>' +
      '<rect x="44" y="60" width="196" height="4" fill="#c4b28a"/>' + arches +
      '<rect x="44" y="114" width="196" height="20" fill="#cdbd98"/>' + txt("PUBLIC BATH", 142, 128, 10, "#5b4a32", 'letter-spacing="3"') +
      '<rect x="250" y="70" width="60" height="64" fill="#6b3b26"/><rect x="0" y="80" width="40" height="54" fill="#5e3322"/>' +
      '<rect x="0" y="130" width="400" height="96" fill="#3d3f46"/>' +
      (() => { let b = ""; for (let y = 140; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353b" stroke-width="1"/>'; return b; })() +
      tag("PUMPKINHEAD", 14, 194, 40, ORANGE, -5) + tag("ROCK ROCK ON", 196, 218, 18, GOLD, -4) + tag("BK ACADEMY", 22, 222, 14, CREAM, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ph-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="#2a9d8f"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      '<rect x="356" y="46" width="5" height="182" fill="#3d4b3f"/>' +
      '<rect x="290" y="50" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Degraw St", 343, 66, 12, "#fff") +
      '<rect x="290" y="76" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("4 Av", 343, 92, 12, "#fff") +
      '<rect x="282" y="104" width="114" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Robert PH Diaz Way", 339, 118, 9.5, "#fff") +
      '<circle class="ph-flk" cx="358" cy="44" r="4" fill="#fff6c2"/>',
      sky("pc", "#0e0a1a", "#3a2236"));
  }

  window.SCENES = { unionst: unionst, moon: moon, ps282: ps282, fatbeats: fatbeats, corner: corner };
})();
