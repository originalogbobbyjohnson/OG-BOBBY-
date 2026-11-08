/* irmathomas scenes (Regions tab: New Orleans; Central City / Uptown - born in Ponchatoula in 1941, her family moved to Melpomene St in Uptown New Orleans when she was three). CSS classes and ids prefixed it- (the page's own anim-train is kept).
   1 St. Charles Av at Melpomene St on the St. Charles streetcar (line 12), on a rainy night ("It's Raining"): the olive-green car rolls in under the live oaks, rain falling.
   2 Ponchatoula, where she was born: strawberry fields in rows, a freight train passing on the old Illinois Central line, the BORN IN PONCHATOULA roadside sign.
   3 The Lion's Den, the club she and her husband Emile Jackson ran on Gravier St near Broad (closed after Katrina): brick front, neon LION'S DEN sign, a pot of red beans steaming (she cooked them for Jazz Fest crowds).
   4 Audubon Zoo, Uptown, where she has sung the Mother's Day concert for years: stage under the oaks, Mother's Day flowers, crowd swaying, a giraffe peeking over the fence, flamingos.
   5 St. Charles Av and Melpomene St: green signs, IRMA tagged on the brick, the gold dome of St. John the Baptist church (Dryades St / O.C. Haley Blvd) rising over Central City behind, rain clearing.
   No digit 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes itrain{from{transform:translate(0,-40px)}to{transform:translate(-12px,40px)}}.it-rain{animation:itrain .6s linear infinite}.it-rain2{animation-delay:-.3s}' +
    '@keyframes itflick{0%,100%{opacity:1}44%{opacity:.75}50%{opacity:.25}56%{opacity:.95}}.it-flk{animation:itflick 2.4s infinite}.it-flk2{animation-delay:.9s}' +
    '@keyframes itmoss{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.it-moss{transform-box:fill-box;transform-origin:50% 0%;animation:itmoss 3.4s ease-in-out infinite}.it-moss2{animation-delay:-1.7s}' +
    '@keyframes itsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.it-sway{transform-box:fill-box;transform-origin:50% 100%;animation:itsway 2s ease-in-out infinite}.it-sway2{animation-delay:-1s}' +
    '@keyframes itsteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-30px);opacity:0}}.it-steam{animation:itsteam 2.2s ease-out infinite}.it-steam2{animation-delay:-1.1s}' +
    '@keyframes itnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-66px);opacity:0}}.it-note{animation:itnote 3.2s ease-out infinite}.it-note2{animation-delay:-1.1s}.it-note3{animation-delay:-2.2s}' +
    '@keyframes itfreight{from{transform:translateX(-420px)}to{transform:translateX(420px)}}.it-freight{animation:itfreight 9s linear infinite;animation-delay:-4.6s}' +
    '@keyframes itbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.it-bob{animation:itbob 1.6s ease-in-out infinite}.it-bob2{animation-delay:-.8s}' +
    '@keyframes itneck{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(5deg)}}.it-neck{transform-box:fill-box;transform-origin:50% 100%;animation:itneck 3s ease-in-out infinite}' +
    '@keyframes itglow{0%,100%{opacity:.5}50%{opacity:1}}.it-glow{animation:itglow 3s ease-in-out infinite}.it-glow2{animation-delay:-1.5s}' +
    '@keyframes itcloud{from{transform:translateX(0)}to{transform:translateX(60px)}}.it-cl{animation:itcloud 12s ease-in-out infinite alternate}' +
    '@keyframes itspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.it-sp{animation:itspray 1.4s ease-out infinite}.it-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const ROSE = "#ff7aa8", GOLD = "#ffcf5c", RAIN = "#5cc8ff";
  const oak = (cx, cy, r, c) => '<g><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + r + '" ry="' + (r * 0.45) + '" fill="' + c + '"/><ellipse cx="' + (cx - r * 0.5) + '" cy="' + (cy + r * 0.1) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.32) + '" fill="' + c + '"/><ellipse cx="' + (cx + r * 0.5) + '" cy="' + (cy + r * 0.12) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.3) + '" fill="' + c + '"/>' +
    [-0.55, -0.15, 0.25, 0.65].map((k, i) => '<path class="it-moss' + (i % 2 ? " it-moss2" : "") + '" d="M' + (cx + k * r) + ' ' + (cy + r * 0.25) + 'q-3 12 1 22q-2 7 0 12" stroke="#8f9a84" stroke-width="3" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const rain = (n, x0, w, op) => '<g opacity="' + (op || 0.55) + '">' + Array.from({ length: n }, (_, i) => { const x = x0 + ((i * 37) % w), y = (i * 53) % 220; return '<path class="it-rain' + (i % 2 ? " it-rain2" : "") + '" d="M' + x + ' ' + y + 'l-4 14" stroke="' + RAIN + '" stroke-width="1.6" stroke-linecap="round"/>'; }).join("") + '</g>';
  const note = (x, y, c, cls) => '<g class="it-note ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><path d="M' + (x + 4.4) + ' ' + (y - 1) + 'v-18l9 4" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
  const person = (x, y, s, c, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + (y - 22 * s) + '" r="' + (6 * s) + '" fill="' + c + '"/><path d="M' + (x - 9 * s) + ' ' + y + 'q' + (9 * s) + ' ' + (-26 * s) + ' ' + (18 * s) + ' 0z" fill="' + c + '"/></g>';
  const straw = (x, y, cls) => '<g class="' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-6 -1 -6 -7q0 -5 6 -5q6 0 6 5q0 6 -6 7z" fill="#e8304a"/><path d="M' + (x - 4) + ' ' + (y - 12) + 'l4 2l4 -2l-1 3h-6z" fill="#3fa34d"/>' +
    '<circle cx="' + (x - 2) + '" cy="' + (y - 7) + '" r=".7" fill="#ffe08a"/><circle cx="' + (x + 2) + '" cy="' + (y - 5) + '" r=".7" fill="#ffe08a"/></g>';

  const lion = (cx, cy, cls) => { const mane = Array.from({ length: 14 }, (_, i) => { const a = i / 14 * Math.PI * 2, r1 = 14, r2 = 23; return 'M' + (cx + Math.cos(a) * r1).toFixed(1) + ' ' + (cy + Math.sin(a) * r1).toFixed(1) + 'L' + (cx + Math.cos(a + 0.22) * r2).toFixed(1) + ' ' + (cy + Math.sin(a + 0.22) * r2).toFixed(1); }).join(''); return '<g class="' + cls + '"><path d="' + mane + '" stroke="' + GOLD + '" stroke-width="3" stroke-linecap="round"/><circle cx="' + cx + '" cy="' + cy + '" r="13" fill="none" stroke="' + ROSE + '" stroke-width="2.5"/><circle cx="' + (cx - 10) + '" cy="' + (cy - 11) + '" r="3" fill="none" stroke="' + ROSE + '" stroke-width="2"/><circle cx="' + (cx + 10) + '" cy="' + (cy - 11) + '" r="3" fill="none" stroke="' + ROSE + '" stroke-width="2"/><circle cx="' + (cx - 5) + '" cy="' + (cy - 3) + '" r="1.8" fill="' + ROSE + '"/><circle cx="' + (cx + 5) + '" cy="' + (cy - 3) + '" r="1.8" fill="' + ROSE + '"/><path d="M' + (cx - 3) + ' ' + (cy + 2) + 'h6l-3 3z" fill="' + ROSE + '"/><path d="M' + (cx - 5) + ' ' + (cy + 7) + 'q5 3 10 0" stroke="' + ROSE + '" stroke-width="2" fill="none"/></g>'; };

  /* 1. St. Charles Av at Melpomene St, line 12, rainy night */
  function itstation() {
    const win = Array.from({ length: 8 }, (_, i) => '<rect x="' + (54 + i * 32) + '" y="126" width="24" height="22" rx="2" fill="#f6dc8e" stroke="#efe2b0" stroke-width="2.5" opacity=".9"/>').join("");
    const car = '<g class="anim-train"><rect x="40" y="108" width="292" height="12" rx="6" fill="#4d5249"/><rect x="40" y="118" width="292" height="70" rx="6" fill="#40633a" stroke="#1f3a1c" stroke-width="2"/>' + win +
      '<rect x="40" y="154" width="292" height="5" fill="#efe2b0"/><rect x="40" y="172" width="292" height="16" fill="#8a2a20"/>' +
      '<rect x="300" y="126" width="26" height="44" rx="2" fill="#efe2b0"/><rect x="304" y="130" width="18" height="36" fill="#26281f"/>' +
      '<rect x="226" y="110" width="88" height="10" rx="2" fill="#111"/><text x="270" y="118" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffd36a">12 ST. CHARLES</text>' +
      '<path d="M150 108l50 -50" stroke="#222" stroke-width="2.5"/><circle cx="200" cy="58" r="3" fill="#222"/>' +
      '<circle cx="90" cy="190" r="9" fill="#1c1c1c"/><circle cx="130" cy="190" r="9" fill="#1c1c1c"/><circle cx="250" cy="190" r="9" fill="#1c1c1c"/><circle cx="290" cy="190" r="9" fill="#1c1c1c"/>' +
      '<circle class="it-flk" cx="336" cy="142" r="4" fill="#fff4c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#its1)"/>' +
      '<path d="M0 58h400" stroke="#1a1a1a" stroke-width="1.5"/>' +
      oak(40, 46, 60, "#1f3324") + oak(210, 40, 70, "#22372a") + oak(370, 48, 60, "#1f3324") +
      '<rect x="0" y="186" width="400" height="12" fill="#3d5a35"/><path d="M0 194h400M0 199h400" stroke="#8b8f94" stroke-width="2.5"/>' +
      car +
      '<rect x="0" y="200" width="400" height="60" fill="#2b2f36"/><g opacity=".35">' + [30, 110, 190, 270, 350].map(x => '<ellipse cx="' + x + '" cy="214" rx="26" ry="3" fill="' + GOLD + '"/>').join("") + '</g>' +
      '<rect x="356" y="96" width="5" height="104" fill="#2a2a2a"/><circle class="it-glow" cx="358" cy="92" r="9" fill="#fff1b8" opacity=".8"/>' +
      rain(46, 0, 400, 0.6) +
      '<rect x="50" y="210" width="300" height="42" rx="3" fill="#111"/><text x="64" y="228" ' + font + ' font-size="15" fill="#fff">St. Charles Av /</text><text x="64" y="245" ' + font + ' font-size="15" fill="#fff">Melpomene St</text>' +
      '<rect x="244" y="218" width="82" height="20" rx="10" fill="#2e7d32"/><text x="285" y="232" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ST CHARLES</text>' +
      '<text x="285" y="247" text-anchor="middle" ' + font + ' font-size="7.5" fill="#cfd8e0">STREETCAR</text>',
      sky("its1", "#0d1424", "#2c3b57"));
  }

  /* 2. Ponchatoula strawberry fields, where she was born */
  function itponcha() {
    const rows = Array.from({ length: 6 }, (_, i) => { const y = 168 + i * 15; return '<path d="M0 ' + y + 'q200 -8 400 0" stroke="#2f6b33" stroke-width="7" fill="none"/>' + Array.from({ length: 9 }, (_, k) => straw(18 + k * 46 + (i % 2) * 20, y + 2, "it-bob" + (k % 2 ? " it-bob2" : ""))).join(""); }).join("");
    const train = '<g class="it-freight"><rect x="40" y="128" width="64" height="24" fill="#6b3a2a"/><rect x="108" y="128" width="64" height="24" fill="#3e5f7a"/><rect x="176" y="122" width="56" height="30" rx="3" fill="#2a2a2a"/><rect x="214" y="114" width="16" height="12" fill="#2a2a2a"/><rect x="196" y="128" width="14" height="10" fill="#ffd36a"/>' +
      [50, 92, 118, 160, 186, 222].map(x => '<circle cx="' + x + '" cy="154" r="5" fill="#111"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#its2)"/>' +
      '<circle cx="320" cy="56" r="26" fill="#ffe08a" opacity=".9"/>' +
      '<g class="it-cl"><ellipse cx="80" cy="44" rx="40" ry="11" fill="#fff" opacity=".8"/><ellipse cx="104" cy="38" rx="24" ry="10" fill="#fff" opacity=".8"/></g>' +
      '<path d="M0 132q60 -12 120 -4t140 -6t140 8v30H0z" fill="#3c6b3f"/>' +
      oak(30, 112, 34, "#2c5230") + oak(372, 110, 38, "#2c5230") +
      '<rect x="0" y="150" width="400" height="6" fill="#7a6a58"/><path d="M0 156h400" stroke="#55493c" stroke-width="2"/>' + train +
      '<rect x="0" y="158" width="400" height="102" fill="#5a3b28"/>' + rows +
      '<rect x="262" y="80" width="5" height="62" fill="#5b4632"/><rect x="330" y="80" width="5" height="62" fill="#5b4632"/>' +
      '<rect x="248" y="58" width="102" height="40" rx="4" fill="#fff6e8" stroke="#e8304a" stroke-width="3"/>' +
      '<text x="299" y="74" text-anchor="middle" ' + font + ' font-size="9" fill="#2f6b33">BORN IN</text><text x="299" y="90" text-anchor="middle" ' + font + ' font-size="11" fill="#e8304a">PONCHATOULA</text>' +
      straw(244, 64) + straw(354, 64),
      sky("its2", "#7fc3ec", "#f4e0b0"));
  }

  /* 3. The Lion's Den on Gravier St */
  function itden() {
    const bricks = Array.from({ length: 10 }, (_, r) => '<path d="M30 ' + (64 + r * 12) + 'h340" stroke="#5e2a1e" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#its3)"/>' +
      '<rect x="30" y="56" width="340" height="140" fill="#8a3b28"/>' + bricks +
      '<rect x="24" y="48" width="352" height="12" fill="#3a1d14"/>' +
      '<g class="it-flk"><rect x="110" y="66" width="180" height="34" rx="6" fill="none" stroke="' + GOLD + '" stroke-width="2.5"/><text x="200" y="91" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="24" fill="' + GOLD + '" stroke="#ff9a3c" stroke-width=".8">LION&#8217;S DEN</text></g>' +
      lion(78, 86, 'it-flk it-flk2') + lion(322, 86, 'it-flk') +
      '<rect x="168" y="112" width="64" height="84" fill="#2a120c" stroke="#3a1d14" stroke-width="4"/><rect x="176" y="120" width="48" height="40" fill="#ffcf7a" opacity=".85" class="it-glow"/>' +
      '<rect x="56" y="118" width="80" height="52" fill="#2a120c"/><rect x="62" y="124" width="68" height="40" fill="#ffb86a" opacity=".7" class="it-glow it-glow2"/>' +
      '<rect x="264" y="118" width="80" height="52" fill="#2a120c"/><rect x="270" y="124" width="68" height="40" fill="#ffb86a" opacity=".7" class="it-glow"/>' +
      note(196, 108, GOLD) + note(150, 118, ROSE, "it-note2") + note(240, 114, "#fff", "it-note3") +
      '<rect x="0" y="196" width="400" height="64" fill="#3d3f45"/><rect x="0" y="196" width="400" height="6" fill="#8e8f93"/>' +
      '<rect x="292" y="206" width="72" height="8" rx="2" fill="#6b4a2e"/><rect x="298" y="214" width="4" height="30" fill="#6b4a2e"/><rect x="354" y="214" width="4" height="30" fill="#6b4a2e"/>' +
      '<path d="M306 184h44l-3 22h-38z" fill="#3a3a3a"/><rect x="302" y="180" width="52" height="6" rx="2" fill="#6a6a6a"/><path d="M302 190h-6M354 190h6" stroke="#6a6a6a" stroke-width="3"/><ellipse cx="328" cy="181" rx="22" ry="3" fill="#8a3a22"/>' +
      '<path class="it-steam" d="M318 178q-5 -8 0 -16" stroke="#e8e8e8" stroke-width="3" fill="none" stroke-linecap="round"/><path class="it-steam it-steam2" d="M334 178q5 -8 0 -16" stroke="#e8e8e8" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<rect x="22" y="206" width="150" height="28" rx="3" fill="#111"/><text x="97" y="224" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">RED BEANS TONIGHT</text>',
      sky("its3", "#120c1e", "#3b2140"));
  }

  /* 4. Audubon Zoo Mother's Day concert */
  function itzoo() {
    const crowd = Array.from({ length: 13 }, (_, i) => person(16 + i * 31, 248, 1.1, i % 2 ? "#1b1b26" : "#262636", "it-sway" + (i % 2 ? " it-sway2" : ""))).join("");
    const flowers = Array.from({ length: 12 }, (_, i) => { const x = 96 + i * 18, c = [ROSE, GOLD, "#fff", "#c58cff"][i % 4]; return '<g class="it-bob' + (i % 2 ? " it-bob2" : "") + '"><circle cx="' + x + '" cy="168" r="5" fill="' + c + '"/><circle cx="' + x + '" cy="168" r="2" fill="#7a4a10"/></g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#its4)"/>' +
      oak(40, 60, 56, "#2d5a2e") + oak(360, 56, 58, "#2d5a2e") +
      '<g class="it-neck"><rect x="356" y="96" width="8" height="70" fill="#e8b04a"/><path d="M352 96q8 -14 22 -6l-2 8q-10 -2 -14 4z" fill="#e8b04a"/><circle cx="360" cy="110" r="3" fill="#a8641e"/><circle cx="361" cy="132" r="3" fill="#a8641e"/><circle cx="359" cy="150" r="3" fill="#a8641e"/><path d="M358 90l-2 -6M364 88l1 -6" stroke="#a8641e" stroke-width="2"/></g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#6b5236"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 21) + '" y="150" width="3" height="20" fill="#6b5236"/>').join("") +
      '<rect x="86" y="70" width="228" height="104" fill="#f3efe6"/><path d="M78 70l122 -34l122 34z" fill="#e7dfd0" stroke="#bfb39c" stroke-width="2"/>' +
      '<rect x="96" y="80" width="208" height="84" fill="#2a1f3a"/>' +
      '<path d="M96 80l60 84M304 80l-60 84" stroke="' + GOLD + '" stroke-width="2" opacity=".35" class="it-glow"/>' +
      '<g transform="translate(200 158)"><path d="M-12 0q12 -40 24 0z" fill="' + ROSE + '"/><circle cx="0" cy="-42" r="8" fill="#3a2a22"/><path d="M-9 -50l3 -7l6 5l6 -5l3 7z" fill="' + GOLD + '"/><rect x="14" y="-34" width="2" height="34" fill="#ccc"/><circle cx="15" cy="-36" r="3" fill="#888"/></g>' +
      flowers + note(150, 120, GOLD) + note(250, 112, ROSE, "it-note2") +
      '<rect x="150" y="44" width="100" height="18" rx="3" fill="' + ROSE + '"/><text x="200" y="57" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MOTHER&#8217;S DAY</text>' +
      '<g transform="translate(26 190)"><path d="M0 0q8 -10 6 -24q8 2 6 10q-2 6 -12 14z" fill="#ff8fa8"/><path d="M4 0v16M8 0v16" stroke="#ff8fa8" stroke-width="1.5"/></g>' +
      '<g transform="translate(48 196)"><path d="M0 0q8 -10 6 -24q8 2 6 10q-2 6 -12 14z" fill="#ff8fa8"/><path d="M4 0v14M8 0v14" stroke="#ff8fa8" stroke-width="1.5"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#355c33"/>' + crowd,
      sky("its4", "#8fd0f0", "#ffe6c8"));
  }

  /* 5. St. Charles Av and Melpomene St, St. John the Baptist's gold dome behind */
  function itcorner() {
    const bricks = Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (128 + r * 12) + 'h300" stroke="#6e2f22" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#its5)"/>' +
      '<g class="it-cl"><ellipse cx="70" cy="40" rx="50" ry="13" fill="#5d6a86" opacity=".7"/><ellipse cx="110" cy="32" rx="30" ry="11" fill="#5d6a86" opacity=".7"/></g>' +
      '<g><rect x="186" y="54" width="46" height="70" fill="#d9cdb6"/><rect x="178" y="118" width="62" height="10" fill="#cbbd9f"/>' +
      '<rect x="192" y="40" width="34" height="16" fill="#e0d5bf"/><path d="M190 42q19 -40 38 0z" fill="#e8b830" stroke="#b8861c" stroke-width="1.5"/>' +
      '<path d="M200 41q9 -30 18 0" stroke="#fff3b0" stroke-width="2" fill="none" class="it-glow"/><rect x="207" y="6" width="4" height="12" fill="#e8b830"/><rect x="204" y="9" width="10" height="3" fill="#e8b830"/>' +
      [196, 212].map(x => '<rect x="' + x + '" y="66" width="10" height="20" rx="5" fill="#6a5a44"/>').join("") + '</g>' +
      '<rect x="0" y="96" width="70" height="40" fill="#333a48"/><rect x="300" y="88" width="100" height="48" fill="#2e3442"/><rect x="330" y="70" width="30" height="66" fill="#3a4152"/>' +
      '<rect x="0" y="124" width="300" height="100" fill="#8a3b28"/>' + bricks +
      tag("IRMA", 30, 200, 52, ROSE, -7) + tag("SOUL QUEEN", 150, 210, 20, GOLD, -4) +
      '<g transform="translate(150 150)"><path d="M0 0l6 -14l8 10l8 -16l8 16l8 -10l6 14z" fill="' + GOLD + '" stroke="#000" stroke-width="1.5"/></g>' +
      '<g transform="translate(254 172)"><rect x="-3" y="0" width="6" height="16" fill="#555"/><circle class="it-sp" cx="0" cy="-4" r="4" fill="' + ROSE + '" opacity=".7"/><circle class="it-sp it-sp2" cx="5" cy="-6" r="3" fill="' + GOLD + '" opacity=".7"/></g>' +
      '<rect x="326" y="104" width="6" height="120" fill="#3c4a3c"/>' + sign(296, 108, 104, "Melpomene St") + sign(296, 132, 104, "St Charles Av") +
      '<rect x="0" y="224" width="400" height="36" fill="#3a3c42"/><rect x="0" y="224" width="400" height="4" fill="#9a9a9a"/>' +
      '<g opacity=".4"><ellipse cx="90" cy="244" rx="40" ry="4" fill="' + GOLD + '"/><ellipse cx="270" cy="246" rx="34" ry="3" fill="' + ROSE + '"/></g>' +
      rain(14, 300, 100, 0.35),
      sky("its5", "#1c2340", "#c8738a"));
  }

  window.SCENES = { itstation, itponcha, itden, itzoo, itcorner };
})();
