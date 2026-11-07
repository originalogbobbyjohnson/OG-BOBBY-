/* miax scenes (Regions tab: New Orleans; the 7th Ward, where Mia X (Mia Young) was born and came up). CSS classes and ids prefixed mx- (the page's own anim-train is kept).
   1 Esplanade Av / N Claiborne Av on RTA bus route 91 (Jackson - Esplanade): the bus pulls in under the I-10 Claiborne overpass, its columns painted with murals; traffic rolls overhead.
   2 "Whip Dem Pots": Mama Mia's kitchen (her #teamwhipdempots cooking series, cookbook and Mama Mia's Foods) - a gumbo pot steaming on the stove, the spoon stirring, rice and seasoning on the counter.
   3 The school dance where she started rapping at 14 as "Polo B" with New York Incorporated (Mannie Fresh, DJ Wop): a gym with two turntables spinning, speakers bumping, a mirror ball, silhouettes dancing.
   4 A French Quarter jazz hall on St. Peter St (she played a midnight show at Preservation Hall in 2016): weathered stucco, the old wooden carriage gate, a gas lamp flickering, notes drifting out.
   5 Bayou Rd and N Broad St in the 7th Ward: green signs, MIA X tagged on the brick, the white Fair Grounds grandstand (Jazz Fest) behind with its flags waving.
   Every 9 is drawn with a straight stem (nine()). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mxflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.mx-flk{animation:mxflick 2.2s infinite}.mx-flk2{animation-delay:.8s}' +
    '@keyframes mxcar{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.mx-car{animation:mxcar 6s linear infinite}.mx-car2{animation-delay:-2s}.mx-car3{animation-delay:-4s}' +
    '@keyframes mxcarL{from{transform:translateX(480px)}to{transform:translateX(-80px)}}.mx-carL{animation:mxcarL 7s linear infinite}.mx-carL2{animation-delay:-3.5s}' +
    '@keyframes mxsteam{0%{transform:translateY(0) scale(1);opacity:.7}100%{transform:translateY(-40px) scale(1.6);opacity:0}}.mx-steam{transform-box:fill-box;transform-origin:50% 100%;animation:mxsteam 2.6s ease-out infinite}.mx-steam2{animation-delay:-.9s}.mx-steam3{animation-delay:-1.7s}' +
    '@keyframes mxstir{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.mx-stir{transform-box:fill-box;transform-origin:50% 100%;animation:mxstir 1.6s ease-in-out infinite}' +
    '@keyframes mxspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.mx-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mxspin 1.8s linear infinite}' +
    '@keyframes mxbnc{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.mx-bnc{animation:mxbnc .7s ease-in-out infinite}.mx-bnc2{animation-delay:-.35s}' +
    '@keyframes mxthump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.mx-thump{transform-box:fill-box;transform-origin:50% 50%;animation:mxthump .7s ease-in-out infinite}' +
    '@keyframes mxsparkle{0%,100%{opacity:.15}50%{opacity:1}}.mx-sp{animation:mxsparkle 1.2s ease-in-out infinite}.mx-sp2{animation-delay:-.4s}.mx-sp3{animation-delay:-.8s}' +
    '@keyframes mxnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.mx-note{animation:mxnote 3.2s ease-out infinite}.mx-note2{animation-delay:-1.1s}.mx-note3{animation-delay:-2.2s}' +
    '@keyframes mxflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-10deg)}}.mx-flag{transform-box:fill-box;transform-origin:0% 50%;animation:mxflag 1.2s ease-in-out infinite}.mx-flag2{animation-delay:-.6s}' +
    '@keyframes mxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mx-spr{animation:mxspray 1.4s ease-out infinite}.mx-spr2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  /* a "9" drawn with a straight stem: bowl + vertical line (x,y = top-left, h = height) */
  const nine = (x, y, h, c) => { const r = h * 0.24, w = h * 0.08; return '<g fill="none" stroke="' + c + '" stroke-width="' + w + '" stroke-linecap="round"><circle cx="' + (x + r + w / 2) + '" cy="' + (y + r + w / 2) + '" r="' + r + '"/><path d="M' + (x + 2 * r + w / 2) + ' ' + (y + r + w / 2) + 'V' + (y + h - w / 2) + '"/></g>'; };
  /* "91" bullet */
  const b91 = (cx, cy, r) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#0b6fb8"/>' + nine(cx - r * 0.62, cy - r * 0.5, r, "#fff") + '<path d="M' + (cx + r * 0.32) + ' ' + (cy - r * 0.42) + 'l' + (r * 0.14) + ' ' + (-r * 0.08) + 'V' + (cy + r * 0.5) + '" stroke="#fff" stroke-width="' + (r * 0.17) + '" fill="none" stroke-linecap="round"/>';
  const PINK = "#ff4fa3", GOLD = "#ffc23a", SKY = "#7fd4ff";

  /* 1. Esplanade Av / N Claiborne Av, RTA 91 under the I-10 overpass */
  function mxstation() {
    const murals = ["#ff4fa3", "#ffc23a", "#7fd4ff", "#7ad36a", "#ff8a3d", "#b07aff"];
    const cols = [30, 110, 190, 270, 350].map((x, i) => '<rect x="' + (x - 9) + '" y="64" width="18" height="128" fill="#a9a59c"/>' +
      '<rect x="' + (x - 9) + '" y="104" width="18" height="70" fill="' + murals[i] + '" opacity=".85"/><path d="M' + (x - 9) + ' ' + (140 - i * 3) + 'q9 -14 18 0" stroke="' + murals[(i + 2) % 6] + '" stroke-width="5" fill="none"/>' +
      '<circle cx="' + x + '" cy="120" r="4" fill="' + murals[(i + 3) % 6] + '"/>').join("");
    const deck = '<rect x="0" y="40" width="400" height="26" fill="#bcb7ac"/><rect x="0" y="62" width="400" height="5" fill="#8d887e"/><rect x="0" y="36" width="400" height="5" fill="#d7d2c6"/>' +
      '<g class="mx-car"><rect x="0" y="26" width="34" height="11" rx="3" fill="#d84a3a"/><circle cx="8" cy="37" r="3" fill="#222"/><circle cx="26" cy="37" r="3" fill="#222"/></g>' +
      '<g class="mx-car mx-car2"><rect x="0" y="24" width="46" height="13" rx="2" fill="#f2f2f2"/><circle cx="10" cy="37" r="3" fill="#222"/><circle cx="36" cy="37" r="3" fill="#222"/></g>' +
      '<g class="mx-carL"><rect x="0" y="27" width="32" height="10" rx="3" fill="#3a6fd8"/><circle cx="7" cy="37" r="3" fill="#222"/><circle cx="25" cy="37" r="3" fill="#222"/></g>';
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 36) + '" y="136" width="28" height="22" rx="2" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="126" width="268" height="70" rx="10" fill="#f2f4f6" stroke="#2a3440" stroke-width="2"/>' + win +
      '<rect x="296" y="132" width="30" height="40" rx="4" fill="#1d2a36"/><rect x="60" y="164" width="268" height="7" fill="#0b6fb8"/><rect x="60" y="171" width="268" height="4" fill="' + GOLD + '"/>' +
      '<rect x="270" y="116" width="56" height="12" rx="2" fill="#111"/>' + nine(275, 118, 8, "#ffd36a") + '<text x="280.5" y="126" ' + font + ' font-size="8" fill="#ffd36a">1 ESPLANADE</text>' +
      '<circle cx="104" cy="198" r="11" fill="#1c1c1c"/><circle cx="104" cy="198" r="4" fill="#888"/><circle cx="280" cy="198" r="11" fill="#1c1c1c"/><circle cx="280" cy="198" r="4" fill="#888"/>' +
      '<rect x="322" y="176" width="6" height="8" rx="1" fill="#ffe08a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mxs1)"/>' +
      '<g fill="#3b2f3a" opacity=".9"><rect x="0" y="92" width="60" height="100"/><path d="M0 92l30 -16l30 16z"/><rect x="330" y="96" width="70" height="96"/><path d="M330 96l35 -18l35 18z"/></g>' +
      '<g class="mx-flk"><rect x="14" y="110" width="12" height="16" fill="#ffd98a"/><rect x="350" y="114" width="12" height="16" fill="#ffd98a"/></g>' +
      cols + deck +
      '<rect x="0" y="196" width="400" height="10" fill="#bdb6aa"/><rect x="0" y="206" width="400" height="54" fill="#3a3a3e"/><path d="M0 236h400" stroke="#d9c45a" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="366" y="112" width="5" height="88" fill="#2f2f2f"/><rect x="346" y="114" width="44" height="40" rx="3" fill="#111" stroke="#fff" stroke-width="1"/>' + b91(368, 128, 10) +
      '<text x="368" y="150" text-anchor="middle" ' + font + ' font-size="6.5" fill="#fff">RTA BUS</text>' +
      '<rect x="8" y="196" width="0" height="0"/>' +
      '<rect x="8" y="76" width="234" height="40" rx="3" fill="#111" stroke="#e8e8e8" stroke-width="1.5"/>' +
      '<text x="20" y="94" ' + font + ' font-size="14" fill="#fff">ESPLANADE AV</text><text x="20" y="110" ' + font + ' font-size="10.5" fill="#cfd8dc">at N Claiborne Av  •  7th Ward</text>' + b91(220, 96, 12),
      sky("mxs1", "#1c1530", "#d9785a"));
  }

  /* 2. Mama Mia's kitchen: Whip Dem Pots */
  function mxpots() {
    const tiles = Array.from({ length: 10 }, (_, i) => Array.from({ length: 5 }, (_, j) => '<rect x="' + (i * 40 + (j % 2) * 20) + '" y="' + (40 + j * 20) + '" width="38" height="18" fill="' + ((i + j) % 2 ? "#f3e6cf" : "#ece0c6") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="#e9dcc2"/>' + tiles +
      '<rect x="0" y="0" width="400" height="40" fill="#7a4a2e"/>' +
      '<rect x="270" y="50" width="100" height="70" rx="3" fill="#f6efe2" stroke="#7a4a2e" stroke-width="5"/><rect x="274" y="54" width="92" height="62" fill="url(#mxs2)"/><path d="M320 54v62M274 85h92" stroke="#7a4a2e" stroke-width="3"/>' +
      '<rect x="24" y="50" width="150" height="54" rx="3" fill="#2b2b2b" stroke="#8a5a36" stroke-width="5"/>' +
      '<text x="99" y="74" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="17" fill="#fff">WHIP DEM</text><text x="99" y="96" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="19" fill="' + PINK + '">POTS</text>' +
      '<rect x="0" y="150" width="400" height="12" fill="#6b4a32"/><rect x="0" y="162" width="400" height="98" fill="#8a6a4e"/>' +
      '<rect x="110" y="140" width="190" height="120" fill="#e8e8e8" stroke="#555" stroke-width="2"/><rect x="110" y="140" width="190" height="14" fill="#cfcfcf"/>' +
      '<rect x="128" y="176" width="154" height="64" rx="4" fill="#3a3a3a"/><rect x="138" y="186" width="134" height="40" fill="#1e1e1e"/>' +
      [140, 170, 240, 270].map(x => '<circle cx="' + x + '" cy="147" r="4" fill="#333"/>').join("") +
      '<g><path d="M150 140q-6 -2 -6 -10h122q0 8 -6 10z" fill="#2a2a2a"/><rect x="150" y="84" width="110" height="50" rx="6" fill="#4a4a4a"/><rect x="150" y="84" width="110" height="8" fill="#5c5c5c"/>' +
      '<rect x="138" y="96" width="14" height="6" rx="3" fill="#333"/><rect x="258" y="96" width="14" height="6" rx="3" fill="#333"/>' +
      '<ellipse cx="205" cy="86" rx="52" ry="7" fill="#7a3f12"/><ellipse cx="205" cy="86" rx="44" ry="5" fill="#9a5418"/>' +
      '<circle cx="190" cy="85" r="3" fill="#e9a07a"/><circle cx="214" cy="87" r="3" fill="#e9a07a"/><circle cx="226" cy="84" r="2" fill="#5a8a3a"/><circle cx="180" cy="87" r="2" fill="#5a8a3a"/></g>' +
      '<g class="mx-stir"><rect x="218" y="40" width="6" height="50" rx="3" fill="#c79a5e"/><ellipse cx="221" cy="88" rx="7" ry="4" fill="#c79a5e"/></g>' +
      '<g fill="#ffffff"><ellipse class="mx-steam" cx="180" cy="70" rx="10" ry="8" opacity=".6"/><ellipse class="mx-steam mx-steam2" cx="205" cy="66" rx="12" ry="9" opacity=".6"/><ellipse class="mx-steam mx-steam3" cx="232" cy="70" rx="9" ry="7" opacity=".6"/></g>' +
      '<g class="mx-flk"><path d="M160 140q8 -10 16 0q-8 -4 -16 0zM196 140q8 -12 18 0q-9 -5 -18 0zM234 140q8 -10 16 0q-8 -4 -16 0z" fill="#3fa9ff"/></g>' +
      '<g><rect x="22" y="112" width="40" height="40" rx="4" fill="#f4f1ea" stroke="#999"/><rect x="22" y="112" width="40" height="8" fill="' + PINK + '"/><text x="42" y="140" text-anchor="middle" ' + font + ' font-size="9" fill="#333">RICE</text></g>' +
      '<g><rect x="70" y="118" width="22" height="34" rx="3" fill="#c0392b"/><rect x="72" y="112" width="18" height="8" fill="#eee"/></g>' +
      '<g><rect x="322" y="120" width="56" height="30" rx="4" fill="#2a2a2a"/><circle cx="350" cy="135" r="18" fill="#1b1b1b" stroke="#2a2a2a" stroke-width="4"/><rect x="366" y="132" width="30" height="6" rx="3" fill="#2a2a2a"/><circle cx="345" cy="132" r="5" fill="#e8c06a"/><circle cx="356" cy="138" r="4" fill="#e8c06a"/></g>',
      sky("mxs2", "#7fc4ff", "#ffe2a8"));
  }

  /* 3. The school dance: New York Incorporated, "Polo B" at 14 */
  function mxdance() {
    const floor = Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 190l' + ((i - 10) * 8) + ' 70" stroke="#a5743c" stroke-width="1"/>').join("");
    const crowd = Array.from({ length: 11 }, (_, i) => { const x = 20 + i * 36, h = 40 + (i % 3) * 6; return '<g class="mx-bnc' + (i % 2 ? " mx-bnc2" : "") + '" fill="#1a1020"><circle cx="' + x + '" cy="' + (232 - h) + '" r="8"/><rect x="' + (x - 9) + '" y="' + (240 - h) + '" width="18" height="' + (h + 10) + '" rx="6"/>' +
      (i % 3 === 0 ? '<path d="M' + (x - 8) + ' ' + (244 - h) + 'l-10 -22" stroke="#1a1020" stroke-width="6" stroke-linecap="round"/>' : '') + '</g>'; }).join("");
    const deck = (cx) => '<rect x="' + (cx - 34) + '" y="126" width="68" height="16" rx="2" fill="#2a2a2a"/><g class="mx-spin"><circle cx="' + cx + '" cy="122" r="22" fill="#111"/><circle cx="' + cx + '" cy="122" r="16" fill="none" stroke="#333"/><circle cx="' + cx + '" cy="122" r="7" fill="' + (cx < 200 ? PINK : GOLD) + '"/><rect x="' + (cx - 1) + '" y="102" width="2" height="8" fill="#fff" opacity=".6"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#1b1430"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="0" y="' + (60 + i * 16) + '" width="400" height="10" fill="#4a3a2a" opacity=".55"/>').join("") +
      '<rect x="40" y="18" width="320" height="26" rx="3" fill="#2c6e3a"/><text x="200" y="37" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">SCHOOL DANCE TONIGHT</text>' +
      '<path d="M200 0v52" stroke="#888" stroke-width="1.5"/><circle cx="200" cy="64" r="13" fill="#c9d3dd"/>' + Array.from({ length: 12 }, (_, i) => '<rect class="mx-sp' + (i % 3 === 1 ? " mx-sp2" : i % 3 === 2 ? " mx-sp3" : "") + '" x="' + (190 + (i % 4) * 6) + '" y="' + (55 + Math.floor(i / 4) * 6) + '" width="4" height="4" fill="#fff"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<circle class="mx-sp' + (i % 2 ? " mx-sp2" : "") + '" cx="' + (30 + i * 48) + '" cy="' + (90 + (i % 3) * 14) + '" r="2.5" fill="' + [PINK, GOLD, SKY][i % 3] + '"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#c58a4a"/>' + floor +
      '<rect x="110" y="140" width="180" height="50" fill="#3a2a3a" stroke="#111" stroke-width="2"/>' + deck(160) + deck(240) +
      '<rect x="196" y="128" width="8" height="12" fill="#555"/>' +
      '<g class="mx-thump"><rect x="40" y="110" width="50" height="80" rx="3" fill="#222"/><circle cx="65" cy="134" r="12" fill="#444"/><circle cx="65" cy="168" r="16" fill="#444"/><circle cx="65" cy="168" r="6" fill="#111"/></g>' +
      '<g class="mx-thump"><rect x="310" y="110" width="50" height="80" rx="3" fill="#222"/><circle cx="335" cy="134" r="12" fill="#444"/><circle cx="335" cy="168" r="16" fill="#444"/><circle cx="335" cy="168" r="6" fill="#111"/></g>' +
      crowd);
  }

  /* 4. French Quarter jazz hall, St. Peter St */
  function mxhall() {
    return svg(
      '<rect width="400" height="260" fill="url(#mxs4)"/>' +
      '<rect x="20" y="40" width="360" height="190" fill="#b98c6a"/>' +
      '<g fill="#a3785a" opacity=".8"><path d="M40 60q30 -6 50 8q-10 14 -40 10z"/><path d="M300 90q30 4 50 -6v30q-30 6 -50 -4z"/><path d="M60 170q20 -10 50 4v24q-30 4 -50 -6z"/><path d="M250 190q30 -6 60 4v20q-34 6 -60 -4z"/></g>' +
      '<g fill="#cfa585" opacity=".6"><path d="M150 60h40v18h-40z"/><path d="M320 160q20 -4 40 6v14q-22 4 -40 -6z"/></g>' +
      '<rect x="20" y="96" width="360" height="6" fill="#3a2a22"/>' + Array.from({ length: 30 }, (_, i) => '<rect x="' + (24 + i * 12) + '" y="70" width="2" height="26" fill="#2a2420"/>').join("") + '<rect x="20" y="68" width="360" height="4" fill="#2a2420"/>' +
      '<rect x="40" y="16" width="70" height="50" fill="#5a3a2a"/><rect x="290" y="16" width="70" height="50" fill="#5a3a2a"/><rect x="46" y="22" width="26" height="40" fill="#3d5a3a"/><rect x="78" y="22" width="26" height="40" fill="#3d5a3a"/><rect x="296" y="22" width="26" height="40" fill="#3d5a3a"/><rect x="328" y="22" width="26" height="40" fill="#3d5a3a"/>' +
      '<rect x="140" y="116" width="120" height="114" fill="#5a3e2a" stroke="#3a2618" stroke-width="4"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (146 + i * 13) + '" y="122" width="9" height="104" fill="#6c4a32"/>').join("") +
      '<path d="M140 116q60 -40 120 0" fill="#3a2618"/><rect x="198" y="120" width="4" height="110" fill="#2a1a10"/>' +
      '<rect x="40" y="120" width="70" height="110" fill="#2f4a3a"/><rect x="290" y="120" width="70" height="110" fill="#2f4a3a"/><rect x="48" y="128" width="54" height="50" fill="#e9b85a" opacity=".55" class="mx-flk"/><rect x="298" y="128" width="54" height="50" fill="#e9b85a" opacity=".55" class="mx-flk mx-flk2"/>' +
      '<rect x="120" y="120" width="8" height="4" fill="#222"/><rect x="122" y="124" width="4" height="30" fill="#222"/><g class="mx-flk"><rect x="114" y="100" width="20" height="22" rx="3" fill="#ffd36a" opacity=".9"/></g><path d="M112 100h24l-4 -6h-16z" fill="#222"/>' +
      '<rect x="146" y="40" width="108" height="20" rx="2" fill="#2a2420"/><text x="200" y="55" text-anchor="middle" ' + font + ' font-size="12" fill="#e8d7b0">ST. PETER ST</text>' +
      ['&#9834;', '&#9835;', '&#9834;'].map((n, i) => '<text class="mx-note' + (i ? " mx-note" + (i + 1) : "") + '" x="' + (176 + i * 22) + '" y="200" font-size="22" fill="' + [GOLD, PINK, "#fff"][i] + '">' + n + '</text>').join("") +
      '<rect x="0" y="230" width="400" height="30" fill="#5d5a55"/><rect x="0" y="228" width="400" height="4" fill="#9a958c"/>',
      sky("mxs4", "#0e1a33", "#3a2c4a"));
  }

  /* 5. Bayou Rd and N Broad St, the Fair Grounds grandstand behind */
  function mxcorner() {
    const stand = '<g><rect x="96" y="70" width="236" height="44" fill="#eef0ea"/><path d="M90 70l14 -16h220l14 16z" fill="#3f7a52"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect class="mx-flk' + (i % 3 ? "" : " mx-flk2") + '" x="' + (104 + i * 16) + '" y="80" width="10" height="10" fill="#ffe9a8" opacity=".8"/>').join("") +
      '<rect x="96" y="98" width="236" height="4" fill="#3f7a52"/>' +
      [130, 214, 298].map((x, i) => '<rect x="' + x + '" y="30" width="2" height="26" fill="#ddd"/><rect class="mx-flag' + (i % 2 ? " mx-flag2" : "") + '" x="' + (x + 2) + '" y="30" width="16" height="10" fill="' + [PINK, GOLD, SKY][i] + '"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mxs5)"/>' + stand +
      '<g fill="#2f3a2e"><ellipse cx="40" cy="104" rx="52" ry="24"/><ellipse cx="370" cy="108" rx="44" ry="22"/></g>' +
      '<rect x="0" y="122" width="400" height="102" fill="#8a4a36"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (130 + i * 8) + 'h400" stroke="#73392a" stroke-width="1"/>').join("") +
      Array.from({ length: 13 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (122 + i * 8) + 'v8" stroke="#73392a" stroke-width="1"/>').join("")).join("") +
      tag("MIA X", 22, 192, 58, PINK, -6) + tag("MAMA MIA", 36, 218, 22, GOLD, -4) + tag("7TH WARD", 186, 178, 18, SKY, -8) + tag("WHIP DEM POTS", 160, 214, 16, "#7ad36a", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="372" y="94" width="6" height="130" fill="#2f2f2f"/>' + sign(282, 96, 112, "Bayou Rd") + sign(282, 122, 112, "N Broad St") +
      '<rect x="8" y="112" width="4" height="112" fill="#222"/><circle class="mx-flk" cx="10" cy="110" r="7" fill="#ffe9a8"/>' +
      '<g class="mx-spr"><circle cx="190" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="mx-spr mx-spr2"><circle cx="196" cy="162" r="2" fill="' + PINK + '" opacity=".6"/></g>',
      sky("mxs5", "#1d1838", "#e28a6a"));
  }

  window.SCENES = { mxstation: mxstation, mxpots: mxpots, mxdance: mxdance, mxhall: mxhall, mxcorner: mxcorner };
})();
