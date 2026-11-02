/* Sugar Hill / 155th St (Harlem) opening scenes for the Vinny Chase game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes win{0%,100%{opacity:.15}50%{opacity:1}}' +
    '.win{animation:win 3.2s ease-in-out infinite}.w2{animation-delay:-1s}.w3{animation-delay:-2.1s}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(40px,-70px);opacity:0}}' +
    '.note{animation:note 4s ease-out infinite}.n2{animation-delay:1.3s}.n3{animation-delay:2.6s}' +
    '@keyframes leaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(-60px,240px) rotate(300deg)}}' +
    '.leaf{transform-box:fill-box;transform-origin:50% 50%;animation:leaf 7s linear infinite}.l2{animation-delay:-2.3s}.l3{animation-delay:-4.6s}.l4{animation-delay:-5.8s}' +
    '@keyframes wave{0%,100%{transform:skewX(0)}50%{transform:skewX(-10deg)}}' +
    '.flag{transform-box:fill-box;transform-origin:0 50%;animation:wave 1.6s ease-in-out infinite}' +
    '@keyframes arc{0%{transform:translate(0,0)}50%{transform:translate(150px,-120px)}100%{transform:translate(300px,0)}}' +
    '.ball{animation:arc 4s linear infinite}' +
    '@keyframes drip{0%{transform:scaleY(0)}60%,100%{transform:scaleY(1)}}' +
    '.drip{transform-box:fill-box;transform-origin:50% 0;animation:drip 3s ease-out infinite}' +
    '@keyframes spray{0%,100%{opacity:.1}50%{opacity:.9}}' +
    '.spr{animation:spray 1.2s ease-in-out infinite}' +
    '@keyframes twk{0%,100%{opacity:.2}50%{opacity:1}}' +
    '.twk{animation:twk 1.8s ease-in-out infinite}.t2{animation-delay:.6s}.t3{animation-delay:1.2s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="twk' + (i % 3 ? " t" + (i % 3 + 1) : "") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ORANGE = "#ff6319", CYAN = "#38e8ff", GOLD = "#f2c14e", ROSE = "#ff5c8a";

  /* 1. B and D pulling into 155 St on the Concourse line, underground at Eighth Av (Frederick Douglass Blvd): white tile, a violet tile band, steel columns */
  function train() {
    let tiles = "";
    for (let y = 30; y < 118; y += 8) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9d9d9" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 12) tiles += '<path d="M' + x + ' 30v88" stroke="#d9d9d9" stroke-width=".6"/>';
    let cols = "";
    [24, 200, 376].forEach(x => cols += '<rect x="' + (x - 5) + '" y="0" width="10" height="186" fill="#1f2328"/><rect x="' + (x - 7) + '" y="0" width="14" height="6" fill="#33393f"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#e9f6ff" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#121212"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#26282b"/>' +
      '<rect x="0" y="30" width="400" height="88" fill="#f2f2ee"/>' + tiles +
      '<rect x="0" y="30" width="400" height="9" fill="#6b4a8e"/><rect x="0" y="39" width="400" height="2" fill="#2e1f40"/>' +
      '<rect x="44" y="54" width="146" height="36" rx="4" fill="#111"/><rect x="44" y="54" width="146" height="4" fill="#fff"/>' +
      '<text x="56" y="80" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">155 St</text>' +
      bullet(144, 73, "B", ORANGE) + bullet(170, 73, "D", ORANGE) +
      '<rect x="214" y="54" width="146" height="36" rx="4" fill="#111"/><rect x="214" y="54" width="146" height="4" fill="#fff"/>' +
      '<text x="224" y="71" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="10" fill="#fff">8 Av</text>' +
      '<text x="224" y="84" font-family="Helvetica, Arial, sans-serif" font-size="8.5" fill="#ddd">Frederick Douglass Blvd</text>' +
      '<g class="flk"><rect x="80" y="10" width="90" height="5" rx="2" fill="#fff7d6"/></g><g class="flk flk2"><rect x="240" y="10" width="90" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="118" width="400" height="68" fill="#09090a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="4" fill="#8b9098"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#e9f6ff" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' + bullet(296, 142, "D", ORANGE) +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#26282b"/>' +
      tag("CHA$E", 24, 242, 34, CYAN, -5) + tag("CHEERS", 254, 240, 28, GOLD, -7));
  }

  /* 2. 409 Edgecombe Avenue on Sugar Hill: the thirteen-story buff-brick tower with its limestone base and cornice,
        up on the bluff over the Harlem River, windows lighting up, jazz notes drifting out (Ellington and friends lived here) */

  /* 3. The Morris-Jumel Mansion on Jumel Terrace: the white Georgian house with its tall two-story portico of four columns
        and the triangle pediment, black shutters, up on the hill in its garden, autumn leaves falling */
  function jumel() {
    let shut = "";
    [[108, 112], [270, 112], [108, 160], [270, 160]].forEach(([x, y]) => shut += '<rect x="' + (x - 6) + '" y="' + y + '" width="5" height="26" fill="#1c1c1c"/><rect x="' + x + '" y="' + y + '" width="22" height="26" fill="#2b3a4a"/><path d="M' + (x + 11) + ' ' + y + 'v26M' + x + ' ' + (y + 13) + 'h22" stroke="#e9e6dc" stroke-width="1.5"/><rect x="' + (x + 23) + '" y="' + y + '" width="5" height="26" fill="#1c1c1c"/>');
    let colm = "";
    [158, 184, 216, 242].forEach(x => colm += '<rect x="' + (x - 5) + '" y="98" width="10" height="96" fill="#fbfaf5"/><rect x="' + (x - 7) + '" y="96" width="14" height="4" fill="#e3e0d4"/><rect x="' + (x - 7) + '" y="192" width="14" height="4" fill="#e3e0d4"/>');
    const leaves = ['<path class="leaf" d="M60 0q6-6 12 0q-6 6-12 0z" fill="#d9822b"/>', '<path class="leaf l2" d="M180 0q6-6 12 0q-6 6-12 0z" fill="#c4452a"/>',
      '<path class="leaf l3" d="M320 0q6-6 12 0q-6 6-12 0z" fill="#e8b84a"/>', '<path class="leaf l4" d="M380 0q6-6 12 0q-6 6-12 0z" fill="#d9822b"/>'].join("");
    return svg(
      '<rect width="400" height="260" fill="url(#skyJ)"/>' +
      /* trees */
      '<circle cx="34" cy="120" r="44" fill="#a8521f"/><circle cx="66" cy="96" r="30" fill="#c96a26"/><rect x="40" y="140" width="8" height="64" fill="#3a2516"/>' +
      '<circle cx="368" cy="116" r="42" fill="#b8862a"/><circle cx="340" cy="92" r="26" fill="#d9a03a"/><rect x="360" y="140" width="8" height="64" fill="#3a2516"/>' +
      /* the house */
      '<rect x="90" y="92" width="220" height="108" fill="#f3f1ea"/>' +
      '<rect x="86" y="86" width="228" height="8" fill="#dcd8cc"/>' +
      '<path d="M142 98L200 56L258 98z" fill="#fbfaf5" stroke="#cfcabd" stroke-width="2"/>' +
      '<circle cx="200" cy="82" r="7" fill="none" stroke="#cfcabd" stroke-width="2"/>' +
      '<rect x="150" y="94" width="100" height="6" fill="#e3e0d4"/>' +
      shut + colm +
      '<rect x="188" y="156" width="24" height="38" fill="#3a2a1a"/><path d="M188 156q12-12 24 0" fill="#e9e6dc"/>' +
      '<rect x="80" y="200" width="240" height="6" fill="#cfcabd"/>' +
      /* lawn, path and fence */
      '<path d="M0 206h400v54H0z" fill="#3f5a2a"/><path d="M188 206h24l26 54h-76z" fill="#b8a98a"/>' +
      (function () { let f = ""; for (let x = 0; x < 400; x += 10) f += '<rect x="' + x + '" y="226" width="2" height="22" fill="#111"/>'; return f + '<rect x="0" y="230" width="400" height="2" fill="#111"/>'; })() +
      leaves,
      sky("skyJ", "#5d8fc4", "#f2d7a8"));
  }

  /* 4. The Polo Grounds Towers on 155th: four tall red-brown brick towers where the old ballpark stood under Coogan's Bluff,
        the John T. Brush Stairway coming down the bluff, a ball sailing over like the old days */
  function polo() {
    const tower = (x, h) => {
      let w = '<rect x="' + x + '" y="' + (210 - h) + '" width="54" height="' + h + '" fill="#8a4630"/><rect x="' + (x + 18) + '" y="' + (204 - h) + '" width="18" height="8" fill="#6e3524"/>';
      for (let y = 216 - h; y < 200; y += 10) for (let c = 0; c < 4; c++) w += '<rect x="' + (x + 6 + c * 12) + '" y="' + y + '" width="6" height="5" fill="' + ((y + c * 7) % 3 ? "#ffe0a0" : "#3a1c12") + '"/>';
      return w;
    };
    let stair = "";
    for (let i = 0; i < 10; i++) stair += '<rect x="' + (14 + i * 9) + '" y="' + (120 + i * 9) + '" width="10" height="3" fill="#2b2f33"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#skyP)"/>' + stars(14) +
      /* the bluff and the stair */
      '<path d="M0 110q60 6 110 100H0z" fill="#26331f"/>' + stair +
      '<path d="M14 118l92 92" stroke="#3d4448" stroke-width="2"/>' +
      tower(124, 170) + tower(190, 184) + tower(256, 176) + tower(322, 164) +
      /* the ball */
      '<g class="ball"><circle cx="60" cy="200" r="5" fill="#fff"/><path d="M57 197q3 3 0 6M63 197q-3 3 0 6" stroke="#d33" stroke-width="1" fill="none"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2f3a28"/><path d="M110 260l90-40 90 40z" fill="#9a6a42" opacity=".7"/>' +
      '<text x="200" y="252" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="3" fill="#f7f3ea">POLO GROUNDS</text>',
      sky("skyP", "#101a38", "#c96a4a"));
  }

  /* 5. The corner: W 155 St and Frederick Douglass Blvd, by the station — green street signs, a brick wall with his name sprayed on it, roses painted */
  function corner() {
    let brick = "";
    for (let y = 50; y < 200; y += 10) for (let x = (y / 10) % 2 ? 0 : 14; x < 400; x += 28) brick += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#8a3a28"/>';
    const rose = (x, y) => '<circle cx="' + x + '" cy="' + y + '" r="9" fill="' + ROSE + '" stroke="#000" stroke-width="2"/><path d="M' + (x - 4) + ' ' + y + 'q4-6 8 0q-4 4-8 0" fill="none" stroke="#7a1030" stroke-width="1.5"/><path d="M' + x + ' ' + (y + 9) + 'v18" stroke="#2f8a3a" stroke-width="3"/><path d="M' + x + ' ' + (y + 18) + 'q6-6 10-2" fill="#2f8a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="#1b0f0c"/>' +
      '<rect x="0" y="50" width="400" height="150" fill="#6a2a1c"/>' + brick +
      '<rect x="0" y="0" width="400" height="50" fill="url(#skyC)"/>' +
      "<g id=\"landmark-bd\"><style>@keyframes apvinn_ch{0%,49%{opacity:1}50%,100%{opacity:.2}}.apvinn_a{animation:apvinn_ch .8s steps(1) infinite}.apvinn_b{animation:apvinn_ch .8s steps(1) infinite;animation-delay:-.4s}@keyframes apvinn_gl{0%,100%{opacity:.35}50%{opacity:.75}}.apvinn_g{animation:apvinn_gl 2.6s ease-in-out infinite}@keyframes apvinn_sw{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}.apvinn_s{transform-box:fill-box;transform-origin:50% 100%;animation:apvinn_sw 6s ease-in-out infinite}.apvinn_s2{animation-delay:-3s}@keyframes apvinn_dr{from{transform:translateX(-120px)}to{transform:translateX(160px)}}.apvinn_d{animation:apvinn_dr 22s linear infinite}.apvinn_d2{animation-delay:-11s}@keyframes apvinn_rn{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.apvinn_r{animation:apvinn_rn .7s linear infinite}@keyframes apvinn_mv{from{transform:translateX(-80px)}to{transform:translateX(220px)}}.apvinn_m{animation:apvinn_mv 9s linear infinite}@keyframes apvinn_mvl{from{transform:translateX(220px)}to{transform:translateX(-80px)}}.apvinn_ml{animation:apvinn_mvl 7s linear infinite}@keyframes apvinn_fl{0%,100%{opacity:1}48%{opacity:1}50%{opacity:.4}52%{opacity:1}}.apvinn_f{animation:apvinn_fl 3.1s infinite}</style><linearGradient id=\"apvinn_dk\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#ff6a8a\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#ff6a8a\" stop-opacity=\"0.8\"/></linearGradient><rect x=\"0\" y=\"0\" width=\"400\" height=\"50\" fill=\"url(#apvinn_dk)\"/><rect x=\"100\" y=\"46.3\" width=\"25\" height=\"3.7\" fill=\"#2a1630\"/><rect x=\"107\" y=\"33.3\" width=\"10\" height=\"9.5\" fill=\"#2a1630\"/><path d=\"M106 33.3l6 -5l6 5z\" fill=\"#2a1630\"/><path d=\"M108 42.8v3.5M116 42.8v3.5\" stroke=\"#2a1630\" stroke-width=\"1.2\"/><rect x=\"124\" y=\"46.8\" width=\"20\" height=\"3.2\" fill=\"#2a1630\"/><rect x=\"143\" y=\"39.9\" width=\"31\" height=\"10.1\" fill=\"#2a1630\"/><rect x=\"166\" y=\"43.9\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"173\" y=\"44.8\" width=\"25\" height=\"5.2\" fill=\"#2a1630\"/><rect x=\"180\" y=\"31.8\" width=\"10\" height=\"9.5\" fill=\"#2a1630\"/><path d=\"M179 31.8l6 -5l6 5z\" fill=\"#2a1630\"/><path d=\"M181 41.3v3.5M189 41.3v3.5\" stroke=\"#2a1630\" stroke-width=\"1.2\"/><rect x=\"197\" y=\"41\" width=\"34\" height=\"9\" fill=\"#2a1630\"/><rect x=\"205\" y=\"45\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"230\" y=\"39.3\" width=\"31\" height=\"10.7\" fill=\"#2a1630\"/><rect x=\"243\" y=\"43.3\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"260\" y=\"39.2\" width=\"27\" height=\"10.8\" fill=\"#2a1630\"/><rect x=\"278\" y=\"43.2\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"286\" y=\"45.9\" width=\"20\" height=\"4.1\" fill=\"#2a1630\"/><rect x=\"305\" y=\"45\" width=\"29\" height=\"5\" fill=\"#2a1630\"/><rect x=\"314\" y=\"32\" width=\"10\" height=\"9.5\" fill=\"#2a1630\"/><path d=\"M313 32l6 -5l6 5z\" fill=\"#2a1630\"/><path d=\"M315 41.5v3.5M323 41.5v3.5\" stroke=\"#2a1630\" stroke-width=\"1.2\"/><rect x=\"333\" y=\"46.4\" width=\"22\" height=\"3.6\" fill=\"#2a1630\"/><rect x=\"354\" y=\"46.5\" width=\"21\" height=\"3.5\" fill=\"#2a1630\"/><rect x=\"374\" y=\"39.4\" width=\"22\" height=\"10.6\" fill=\"#2a1630\"/><rect x=\"395\" y=\"40.6\" width=\"32\" height=\"9.4\" fill=\"#2a1630\"/><rect x=\"418\" y=\"44.6\" width=\"2\" height=\"2.4\" fill=\"#ffd98a\" opacity=\".8\"/><rect x=\"405.5\" y=\"27.6\" width=\"10\" height=\"9.5\" fill=\"#2a1630\"/><path d=\"M404.5 27.6l6 -5l6 5z\" fill=\"#2a1630\"/><path d=\"M406.5 37.1v3.5M414.5 37.1v3.5\" stroke=\"#2a1630\" stroke-width=\"1.2\"/><g transform=\"translate(258 8)\"><rect class=\"apvinn_g\" x=\"-3.1\" y=\"-2.7\" width=\"15.3\" height=\"45.4\" rx=\"4.5\" fill=\"#ff3b3b\" opacity=\".4\"/><path d=\"M1.8 0l2.7 -4l2.7 4.1z\" fill=\"#8e1118\"/><rect x=\"0\" y=\"0\" width=\"9\" height=\"40\" fill=\"#d3202b\" stroke=\"#f6eedf\" stroke-width=\"0.6\"/><text x=\"4.5\" y=\"6.2\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"5.8\" fill=\"#fff\">A</text><text x=\"4.5\" y=\"12.6\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"5.8\" fill=\"#fff\">P</text><text x=\"4.5\" y=\"18.9\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"5.8\" fill=\"#fff\">O</text><text x=\"4.5\" y=\"25.3\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"5.8\" fill=\"#fff\">L</text><text x=\"4.5\" y=\"31.6\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"5.8\" fill=\"#fff\">L</text><text x=\"4.5\" y=\"38\" text-anchor=\"middle\" font-family=\"Helvetica, Arial, sans-serif\" font-weight=\"700\" font-size=\"5.8\" fill=\"#fff\">O</text><circle class=\"apvinn_b\" cx=\"0.9\" cy=\"1.4\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_b\" cx=\"8.1\" cy=\"1.4\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_a\" cx=\"0.9\" cy=\"4.3\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_a\" cx=\"8.1\" cy=\"4.3\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_b\" cx=\"0.9\" cy=\"7.2\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_b\" cx=\"8.1\" cy=\"7.2\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_a\" cx=\"0.9\" cy=\"10.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_a\" cx=\"8.1\" cy=\"10.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_b\" cx=\"0.9\" cy=\"13\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_b\" cx=\"8.1\" cy=\"13\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_a\" cx=\"0.9\" cy=\"15.8\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_a\" cx=\"8.1\" cy=\"15.8\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_b\" cx=\"0.9\" cy=\"18.7\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_b\" cx=\"8.1\" cy=\"18.7\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_a\" cx=\"0.9\" cy=\"21.6\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_a\" cx=\"8.1\" cy=\"21.6\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_b\" cx=\"0.9\" cy=\"24.5\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_b\" cx=\"8.1\" cy=\"24.5\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_a\" cx=\"0.9\" cy=\"27.4\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_a\" cx=\"8.1\" cy=\"27.4\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_b\" cx=\"0.9\" cy=\"30.2\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_b\" cx=\"8.1\" cy=\"30.2\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_a\" cx=\"0.9\" cy=\"33.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_a\" cx=\"8.1\" cy=\"33.1\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_b\" cx=\"0.9\" cy=\"36\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_b\" cx=\"8.1\" cy=\"36\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_a\" cx=\"0.9\" cy=\"38.9\" r=\"0.6\" fill=\"#ffe9a0\"/><circle class=\"apvinn_a\" cx=\"8.1\" cy=\"38.9\" r=\"0.6\" fill=\"#ffe9a0\"/></g><g class=\"apvinn_m\" style=\"animation-duration:14s\"><path d=\"M160 12q3-3 5 0q2-3 5 0\" stroke=\"#111\" stroke-width=\"1.2\" fill=\"none\"/><path d=\"M170 7q3-3 5 0q2-3 5 0\" stroke=\"#111\" stroke-width=\"1.2\" fill=\"none\"/><path d=\"M178 15q3-3 5 0q2-3 5 0\" stroke=\"#111\" stroke-width=\"1.2\" fill=\"none\"/><path d=\"M151 18q3-3 5 0q2-3 5 0\" stroke=\"#111\" stroke-width=\"1.2\" fill=\"none\"/><path d=\"M186 10q3-3 5 0q2-3 5 0\" stroke=\"#111\" stroke-width=\"1.2\" fill=\"none\"/></g></g>" +
      tag("VINNY CHA$E", 118, 124, 36, CYAN, -7) +
      '<g class="drip"><rect x="150" y="122" width="4" height="22" fill="' + CYAN + '"/><rect x="236" y="112" width="4" height="30" fill="' + CYAN + '"/></g>' +
      tag("CHEERS CLUB", 150, 170, 26, GOLD, -3) + tag("LUXURY", 130, 194, 20, ROSE, 4) +
      rose(330, 150) + rose(362, 140) +
      '<circle class="spr" cx="250" cy="186" r="12" fill="' + CYAN + '" opacity=".4"/>' +
      '<rect x="42" y="30" width="6" height="190" fill="#4a5a4a"/>' +
      '<rect x="-4" y="30" width="104" height="24" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="48" y="47" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="13" fill="#fff">W 155 St</text>' +
      '<rect x="-4" y="58" width="104" height="22" rx="3" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="48" y="68" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7.5" fill="#fff">Frederick Douglass</text>' +
      '<text x="48" y="77" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7.5" fill="#fff">Blvd</text>' +
      '<rect x="0" y="200" width="400" height="14" fill="#9a9a9a"/><rect x="0" y="214" width="400" height="46" fill="#2b2d31"/>',
      sky("skyC", "#0f1a33", "#3a2a5a"));
  }

  /* ---- redrawn landmark scenes (OG FAN 99 landmark pass): small shared helpers, prefixed L ---- */
  const Lcss = '<style>' +
    '@keyframes lmCar{from{transform:translateX(-170px)}to{transform:translateX(480px)}}.lm-car{animation:lmCar 8s linear infinite}' +
    '@keyframes lmCarB{from{transform:translateX(480px)}to{transform:translateX(-170px)}}.lm-carb{animation:lmCarB 10s linear infinite}' +
    '@keyframes lmBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.lm-bob{animation:lmBob 1.6s ease-in-out infinite}' +
    '@keyframes lmFlk{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.95}}.lm-flk{animation:lmFlk 2.3s infinite}' +
    '@keyframes lmSpin{to{transform:rotate(360deg)}}.lm-spin{animation:lmSpin 1.8s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes lmRise{0%{transform:translateY(0) scale(.8);opacity:0}20%{opacity:.85}100%{transform:translateY(-70px) scale(1.4);opacity:0}}.lm-rise{animation:lmRise 4s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes lmSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.lm-sway{animation:lmSway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}' +
    '@keyframes lmBlk{0%,49%{opacity:1}50%,100%{opacity:.25}}.lm-blk{animation:lmBlk 1s steps(1) infinite}' +
    '@keyframes lmFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.lm-flag{animation:lmFlag 1.4s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}' +
    '@keyframes lmFall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-30px,230px) rotate(280deg);opacity:0}}.lm-fall{animation:lmFall 6s linear infinite}' +
    '@keyframes lmCld{from{transform:translateX(-120px)}to{transform:translateX(470px)}}.lm-cld{animation:lmCld 30s linear infinite}' +
    '@keyframes lmPls{0%,100%{opacity:.35}50%{opacity:1}}.lm-pls{animation:lmPls 2.2s ease-in-out infinite}' +
    '@keyframes lmWav{0%,100%{transform:translateX(0)}50%{transform:translateX(-12px)}}.lm-wav{animation:lmWav 3s ease-in-out infinite}' +
    '@keyframes lmBeat{0%,100%{transform:scale(1)}50%{transform:scale(1.07)}}.lm-beat{animation:lmBeat .7s ease-in-out infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes lmNote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.lm-note{animation:lmNote 3s linear infinite}' +
    '.lmd1{animation-delay:-1s}.lmd2{animation-delay:-2s}.lmd3{animation-delay:-3s}.lmd4{animation-delay:-4.5s}.lmd5{animation-delay:-6s}' +
    '</style>';
  const LF = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const LT = (s, x, y, size, fill, anchor, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" ' + LF + ' font-size="' + size + '" fill="' + fill + '"' + (extra || "") + '>' + s + '</text>';
  const LA = (s, x, y, size, fill, anchor, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" font-family="Anton, Impact, sans-serif" font-size="' + size + '" fill="' + fill + '"' + (extra || "") + '>' + s + '</text>';
  const LR = (x, y, w, h, fill, extra) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + fill + '"' + (extra || "") + '/>';
  const Lbul = (x, y, l, col, r) => { r = r || 11; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/>' + LT(l, x, y + r * 0.42, r * 1.22, col === "#fccc0a" ? "#000" : "#fff"); };
  const Lpill = (x, y, l, col) => { const w = l.length * 8 + 14; return '<rect x="' + (x - w / 2) + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="10" fill="' + col + '"/>' + LT(l, x, y + 4.5, 11, "#fff"); };
  /* black MTA-style station sign: lines = [["B","#ff6319"],...]; a long name like "MN" draws a pill */
  const Lsign = (x, y, w, name, lines, size) => { let b = "", bx = x + w - 18; for (let i = lines.length - 1; i >= 0; i--) { const l = lines[i]; if (l[0].length > 1) { b += Lpill(bx - 10, y + 17, l[0], l[1]); bx -= l[0].length * 8 + 22; } else { b += Lbul(bx, y + 17, l[0], l[1], 10); bx -= 24; } }
    return LR(x, y, w, 32, "#111", ' rx="3"') + LR(x, y, w, 4, "#fff") + LT(name, x + 10, y + 23, size || 15, "#fff", "start") + b; };
  /* green NYC street sign blade */
  const Lblade = (x, y, t, w) => { w = w || t.length * 7.2 + 20; return LR(x, y, w, 19, "#0f6b3a", ' rx="2" stroke="#fff" stroke-width="1.5"') + LT(t, x + w / 2, y + 14, 12, "#fff"); };
  /* two green signs on a pole at x, crossing */
  const Lpole = (x, y, a, b) => { const wa = a.length * 7.2 + 20, wb = b.length * 7.2 + 20; return LR(x, y, 6, 236 - y, "#2a3138") + Lblade(x + 3 - wa / 2, y + 6, a) + Lblade(x + 3 - wb / 2, y + 30, b) + LR(x - 2, y - 4, 10, 6, "#2a3138"); };
  const Lbrick = (x, y, w, h, base, mortar) => { let s = LR(x, y, w, h, base); for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + mortar + '" stroke-width=".8"/>'; return s; };
  const Lwin = (x, y, cols, rows, dx, dy, w, h, lit, dark) => { let s = ""; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { const on = ((r * 7 + c * 3) % 5) < 2; s += '<rect x="' + (x + c * dx) + '" y="' + (y + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + (on ? lit : dark) + '"' + (on && (r + c) % 4 === 0 ? ' class="lm-flk"' : '') + '/>'; } return s; };
  const Lstars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const Lcloud = (x, y, s, cls) => '<g class="lm-cld ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="11" ry="7"/></g></g>';
  const Ltree = (x, y, r, col, cls) => '<g class="lm-sway ' + (cls || "") + '">' + LR(x - 3, y, 6, r * 1.3, "#5a3d24") + '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + col + '"/><circle cx="' + (x - r * .5) + '" cy="' + (y + r * .3) + '" r="' + r * .7 + '" fill="' + col + '" opacity=".85"/><circle cx="' + (x + r * .55) + '" cy="' + (y + r * .25) + '" r="' + r * .65 + '" fill="' + col + '" opacity=".9"/></g>';
  /* faceless figure: head + body, x = centre, y = feet */
  const Lman = (x, y, body, cls, cap) => '<g' + (cls ? ' class="' + cls + '"' : "") + '>' + '<rect x="' + (x - 7) + '" y="' + (y - 30) + '" width="14" height="22" rx="5" fill="' + body + '"/><rect x="' + (x - 6) + '" y="' + (y - 10) + '" width="5" height="10" fill="#1d1d24"/><rect x="' + (x + 1) + '" y="' + (y - 10) + '" width="5" height="10" fill="#1d1d24"/>' +
    '<circle cx="' + x + '" cy="' + (y - 37) + '" r="7" fill="#5a3a26"/>' + (cap ? '<path d="M' + (x - 8) + ' ' + (y - 39) + 'q8-10 16 0z" fill="' + cap + '"/><rect x="' + (x - 1) + '" y="' + (y - 41) + '" width="12" height="3" fill="' + cap + '"/>' : '') + '</g>';
  /* subway car (stainless) seen from the side, x,y top-left */
  const Lcar = (x, y, w, l, col, band) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="52" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>'; for (let i = x + 16; i < x + w - 60; i += 40) s += '<rect x="' + i + '" y="' + (y + 9) + '" width="26" height="18" rx="3" fill="#cfe6ff" opacity=".9"/>';
    return s + LR(x, y + 33, w, 5, band || col) + Lbul(x + w - 22, y + 18, l, col, 10) + '<circle cx="' + (x + w - 8) + '" cy="' + (y + 44) + '" r="3.5" fill="#fff6c2"/>'; };
  const Lcab = (x, y) => '<rect x="' + x + '" y="' + (y + 8) + '" width="70" height="20" rx="5" fill="#f7c600"/><path d="M' + (x + 12) + ' ' + (y + 8) + 'l8-10h28l10 10z" fill="#f7c600"/><path d="M' + (x + 22) + ' ' + y + 'h10v8h-14zM' + (x + 35) + ' ' + y + 'h10l7 8h-17z" fill="#bfe0ff"/>' +
    LR(x + 26, y - 6, 18, 6, "#fff", ' rx="1"') + LT("TAXI", x + 35, y - 1.5, 5, "#111") + '<path d="M' + x + ' ' + (y + 17) + 'h70" stroke="#111" stroke-width="1" stroke-dasharray="3 3"/><circle cx="' + (x + 15) + '" cy="' + (y + 28) + '" r="6" fill="#111"/><circle cx="' + (x + 55) + '" cy="' + (y + 28) + '" r="6" fill="#111"/>';
  const Lauto = (x, y, col) => '<rect x="' + x + '" y="' + (y + 6) + '" width="56" height="16" rx="5" fill="' + col + '"/><rect x="' + (x + 11) + '" y="' + (y - 2) + '" width="32" height="11" rx="3" fill="#cfe6ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 22) + '" r="5" fill="#111"/><circle cx="' + (x + 43) + '" cy="' + (y + 22) + '" r="5" fill="#111"/>';
  /* turntable from above at an angle */
  const Ldeck = (cx, cy, r, lab) => '<rect x="' + (cx - r - 12) + '" y="' + (cy - r * .45 - 10) + '" width="' + (r * 2 + 30) + '" height="' + (r * .9 + 20) + '" rx="4" fill="#2a2a30"/><g transform="translate(' + cx + ' ' + cy + ') scale(1 .42)"><g class="lm-spin"><circle r="' + r + '" fill="#0c0c0e"/><circle r="' + r * .72 + '" fill="none" stroke="#2c2c30" stroke-width="2"/><circle r="' + r * .5 + '" fill="none" stroke="#2c2c30" stroke-width="2"/><circle r="' + r * .3 + '" fill="' + lab + '"/><rect x="-2" y="' + (-r * .3) + '" width="4" height="' + r * .2 + '" fill="#fff"/></g></g><path d="M' + (cx + r + 6) + ' ' + (cy - r * .4) + 'l-8 ' + r * .5 + '" stroke="#c9ced6" stroke-width="3"/>';
  /* 1. Sugar Hill, W 155th & St. Nicholas Av (2014): the dark stepped Adjaye building with the children's museum at its base */
  function LM_edgecombe() {
    let rose = ""; for (let y = 50; y < 214; y += 7) for (let x = 120 + (y % 2) * 4; x < 300; x += 9) rose += '<circle cx="' + x + '" cy="' + y + '" r="1.2" fill="#4a4e54"/>';
    const band = (x, y, w, n) => { let s = ""; for (let i = 0; i < n; i++) s += '<path d="M' + (x + i * (w / n)) + ' ' + (y + 12) + 'l' + (w / n / 2) + '-12 ' + (w / n / 2) + ' 12z" fill="' + ((i * 3 + y) % 4 ? "#ffd77a" : "#1a1c20") + '"' + (i % 4 === 1 ? ' class="lm-flk"' : '') + '/>'; return s; };
    return svg(Lcss + '<rect width="400" height="260" fill="url(#sk)"/>' + Lstars(12) + '<circle cx="356" cy="34" r="12" fill="#fff1d6"/>' +
      /* neighbors: the old Sugar Hill row on the left */
      LR(0, 120, 100, 116, "#b8a888") + Lwin(10, 132, 4, 4, 22, 24, 12, 16, "#ffd77a", "#3a2a24") + LR(310, 140, 90, 96, "#8a5a44") + Lwin(318, 150, 4, 3, 20, 26, 12, 16, "#ffd77a", "#2a1a14") +
      /* the tower: dark precast, upper half stepping out */
      '<path d="M130 236V130h150v106z" fill="#2e3136"/><path d="M118 130V90h176v40z" fill="#33363b"/><path d="M110 90V40h196v50z" fill="#2a2d32"/>' + rose +
      band(132, 140, 146, 12) + band(132, 166, 146, 12) + band(132, 192, 146, 12) + band(122, 104, 168, 14) + band(114, 50, 188, 16) + band(114, 70, 188, 16) +
      '<path d="M118 130h176M110 90h196" stroke="#55595f" stroke-width="2"/>' +
      /* museum entrance + glow */
      LR(140, 214, 130, 22, "#f2c14e", ' opacity=".85"') + LT("CHILDREN'S MUSEUM", 205, 228, 8.5, "#1a1c20") +
      LR(0, 236, 400, 24, "#2a2a30") + '<path d="M0 248h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' + '<g class="lm-car">' + Lauto(0, 226, "#38e8ff") + '</g>' +
      Lman(300, 236, "#ff5c8a", "lm-bob", "#f2c14e") +
      LR(8, 8, 96, 46, "#111", ' rx="3"') + LT("SUGAR HILL", 56, 24, 11, "#38e8ff") + LT("W 155 ST &amp;", 56, 37, 8, "#fff") + LT("ST. NICHOLAS AV", 56, 48, 8, "#fff") +
      tag("VINNY CHASE", 4, 112, 18, "#f2c14e", -6) + tag("CHEERS CLUB", 310, 132, 13, "#ff5c8a", -4),
      sky("sk", "#141a3a", "#5a3a6a"));
  }

  window.SCENES = { train, edgecombe: LM_edgecombe, jumel, polo, corner };
})();
