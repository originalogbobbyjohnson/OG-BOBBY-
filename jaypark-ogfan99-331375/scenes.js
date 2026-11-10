/* jaypark scenes (Regions tab: The Northwest; Edmonds, WA, just north of Seattle). CSS classes and ids prefixed jp- (the page's own anim-train is kept).
   1 Edmonds Station on Sound Transit's Sounder N Line: open-air platform on the waterfront, a double-deck commuter train sliding in, Puget Sound behind.
   2 The b-boy cypher: he started as a b-boy with Seattle's Art of Movement crew; a dancer spinning on his head on the cardboard, a boombox bumping.
   3 Seoul, the other half of "Seattle 2 Seoul": a karaoke alley at night ("karaoke from room to room", SOJU), neon signs blinking, green bottles on the table.
   4 The stage ("touring the world, a couple thousand in the crowd"): spotlights sweeping over a sea of hands.
   5 Main St and 5th Av S in downtown Edmonds: green signs, JAY PARK tagged on the brick, the green-and-white state ferry pulling out across the Sound behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jpferry{from{transform:translateX(0)}to{transform:translateX(-90px)}}.jp-ferry{animation:jpferry 16s ease-in-out infinite alternate}' +
    '@keyframes jpwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.jp-wave{animation:jpwave 3s ease-in-out infinite}.jp-wave2{animation-delay:-1.5s}' +
    '@keyframes jpspin{0%{transform:scaleX(1)}25%{transform:scaleX(.4)}50%{transform:scaleX(-1)}75%{transform:scaleX(.4)}100%{transform:scaleX(1)}}.jp-spin{transform-box:view-box;transform-origin:200px 160px;animation:jpspin 1s linear infinite}' +
    '@keyframes jpbump{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}.jp-bump{transform-box:fill-box;transform-origin:50% 50%;animation:jpbump .5s ease-in-out infinite}' +
    '@keyframes jpblink{0%,100%{opacity:.35}50%{opacity:1}}.jp-bl{animation:jpblink 1.2s ease-in-out infinite}.jp-bl2{animation-delay:-.6s}' +
    '@keyframes jpsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.jp-beam{transform-box:fill-box;transform-origin:50% 0%;animation:jpsweep 3s ease-in-out infinite}.jp-beam2{animation-delay:-1.5s}' +
    '@keyframes jphands{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.jp-hand{animation:jphands .8s ease-in-out infinite}.jp-hand2{animation-delay:-.4s}' +
    '@keyframes jpnote{0%{transform:translate(0,0);opacity:1}100%{transform:translate(14px,-40px);opacity:0}}.jp-note{animation:jpnote 1.8s ease-out infinite}.jp-note2{animation-delay:-.9s}' +
    '@keyframes jpspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jp-sp{animation:jpspray 1.4s ease-out infinite}.jp-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (cx, cy, r, txt, color) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + color + '"/><text x="' + cx + '" y="' + (cy + r * 0.42) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.25) + '" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GREEN = "#5fd38d", GOLD = "#f2c94c", PINK = "#ff4f6d", SOUNDER = "#0097a7";
  /* Washington State Ferries boat: white hull, green band, stacked white decks, one stack */
  const ferry = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 20h120l-8 12h-104z" fill="#f4f4f2"/><rect x="0" y="16" width="120" height="5" fill="#1f7a4a"/>' +
    '<rect x="14" y="6" width="92" height="10" fill="#f4f4f2"/><rect x="18" y="8" width="84" height="4" fill="#2b3a44"/><rect x="34" y="-2" width="52" height="8" fill="#f4f4f2"/><rect x="38" y="0" width="44" height="3" fill="#2b3a44"/>' +
    '<rect x="56" y="-12" width="8" height="10" fill="#1f7a4a"/><rect x="56" y="-14" width="8" height="3" fill="#222"/></g>';
  const water = (y) => '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="#4f7d93"/>' +
    Array.from({ length: 5 }, (_, i) => '<g class="jp-wave' + (i % 2 ? " jp-wave2" : "") + '"><path d="M' + (20 + i * 80) + ' ' + (y + 8 + (i % 2) * 10) + 'h34" stroke="#a8cbd8" stroke-width="2"/></g>').join("");
  const mountains = (y) => '<path d="M0 ' + y + 'l40 -26 30 14 40 -34 36 22 44 -30 40 26 34 -18 46 28 40 -22 50 30v' + 8 + 'H0z" fill="#8aa1b5"/><path d="M110 ' + (y - 46) + 'l12 10h-24zM230 ' + (y - 42) + 'l10 9h-20z" fill="#f4f6f8"/>';

  /* 1. Edmonds Station, Sounder N Line */
  function jpedmonds() {
    const win = (y) => Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 42) + '" y="' + y + '" width="30" height="12" rx="2" fill="#1d2a36"/>').join("");
    const train = '<g class="anim-train"><rect x="20" y="104" width="320" height="82" rx="6" fill="#eef1f3" stroke="#7d8790" stroke-width="2"/>' + win(116) + win(146) +
      '<rect x="20" y="166" width="320" height="8" fill="' + SOUNDER + '"/><rect x="20" y="136" width="320" height="3" fill="#b9c2c9"/>' +
      '<rect x="318" y="108" width="20" height="74" rx="4" fill="#d6dce1"/><rect x="322" y="114" width="12" height="20" rx="2" fill="#1d2a36"/><circle cx="328" cy="176" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jps1)"/>' + mountains(84) + water(84) +
      '<g class="jp-ferry">' + ferry(250, 70, 0.6) + '</g>' +
      '<rect x="0" y="96" width="400" height="10" fill="#6b5a4a"/>' +
      '<rect x="0" y="150" width="400" height="40" fill="#5b5e63"/>' + train +
      '<rect x="0" y="186" width="400" height="6" fill="#4b4b4f"/><path d="M0 189h400" stroke="#b8b8b8" stroke-width="2"/>' +
      '<rect x="0" y="192" width="400" height="10" fill="#f2c200"/><rect x="0" y="202" width="400" height="58" fill="#a9a59c"/>' +
      '<rect x="104" y="208" width="192" height="36" rx="3" fill="#111"/><text x="120" y="232" ' + font + ' font-size="18" fill="#fff">Edmonds</text>' + bullet(272, 226, 12, "N", SOUNDER),
      sky("jps1", "#7fa8c9", "#e9dccb"));
  }

  /* 2. The b-boy cypher */
  function jpbboy() {
    let bricks = "";
    for (let r = 0; r < 12; r++) for (let c = 0; c < 11; c++) bricks += '<rect x="' + (c * 40 - (r % 2) * 20) + '" y="' + (r * 14) + '" width="38" height="12" fill="' + ((r * 3 + c) % 4 ? "#6e3b2e" : "#7d4434") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#3a1f19"/>' + bricks +
      tag("AOM", 34, 70, 44, GREEN, -8) + tag("B-BOY", 270, 60, 30, GOLD, -5) +
      '<rect x="0" y="168" width="400" height="92" fill="#2a2a2e"/>' +
      '<path d="M90 238l30 -60h160l30 60z" fill="#c9a26b"/><path d="M120 178h160M108 202h184M98 222h204" stroke="#a8844f" stroke-width="2"/>' +
      '<g class="jp-spin"><g fill="#1b1b1f"><circle cx="200" cy="206" r="8"/><rect x="193" y="148" width="14" height="52" rx="6"/><path d="M196 152l-18 -30M204 152l18 -30" stroke="#1b1b1f" stroke-width="8" stroke-linecap="round"/>' +
      '<path d="M195 186l-22 10M205 186l22 10" stroke="#1b1b1f" stroke-width="7" stroke-linecap="round"/></g><path d="M172 116h12M216 116h12" stroke="' + PINK + '" stroke-width="6" stroke-linecap="round"/></g>' +
      '<rect x="320" y="196" width="66" height="36" rx="5" fill="#2f2f36" stroke="#9aa3ab" stroke-width="2"/><rect x="340" y="190" width="26" height="6" rx="2" fill="#9aa3ab"/>' +
      '<g class="jp-bump"><circle cx="337" cy="214" r="10" fill="#111" stroke="#9aa3ab" stroke-width="2"/></g><g class="jp-bump"><circle cx="369" cy="214" r="10" fill="#111" stroke="#9aa3ab" stroke-width="2"/></g>' +
      '<g class="jp-note"><text x="330" y="186" ' + font + ' font-size="16" fill="' + GOLD + '">&#9835;</text></g><g class="jp-note jp-note2"><text x="360" y="182" ' + font + ' font-size="14" fill="' + GREEN + '">&#9834;</text></g>' +
      '<g fill="#111" opacity=".85"><circle cx="30" cy="196" r="10"/><rect x="20" y="206" width="20" height="40" rx="8"/><circle cx="70" cy="200" r="9"/><rect x="61" y="209" width="18" height="38" rx="8"/></g>');
  }

  /* 3. Seoul karaoke alley at night */
  function jpnorae() {
    const neon = (x, y, w, txt, c, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="26" rx="4" fill="#120b1e" stroke="' + c + '" stroke-width="2.5"/><text x="' + (x + w / 2) + '" y="' + (y + 19) + '" text-anchor="middle" font-family="Noto Sans CJK KR, Helvetica, sans-serif" font-weight="700" font-size="15" fill="' + c + '">' + txt + '</text></g>';
    const bottle = (x) => '<g><rect x="' + x + '" y="186" width="10" height="24" rx="3" fill="#2fa65a" opacity=".9"/><rect x="' + (x + 3) + '" y="178" width="4" height="9" fill="#2fa65a"/><rect x="' + (x + 2) + '" y="176" width="6" height="3" fill="#1e6b3a"/><rect x="' + (x + 1) + '" y="194" width="8" height="7" fill="#e8f5ec"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jps3)"/>' +
      '<rect x="0" y="40" width="130" height="180" fill="#231a33"/><rect x="270" y="30" width="130" height="190" fill="#1f1830"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (14 + i * 28) + '" y="150" width="18" height="24" fill="#ffd27a" opacity=".55"/><rect x="' + (284 + i * 28) + '" y="150" width="18" height="24" fill="#ffd27a" opacity=".55"/>').join("") +
      neon(10, 54, 110, "노래방", PINK, "jp-bl") + neon(282, 46, 108, "KARAOKE", "#59d6ff", "jp-bl jp-bl2") + neon(10, 96, 110, "포차", GOLD, "jp-bl jp-bl2") + neon(282, 90, 108, "노래연습장", GREEN, "jp-bl") +
      '<path d="M130 40q70 40 140 0" stroke="#333" stroke-width="1.5" fill="none"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle class="jp-bl' + (i % 2 ? " jp-bl2" : "") + '" cx="' + (146 + i * 22) + '" cy="' + (52 + Math.sin(i / 5 * Math.PI) * 14) + '" r="4" fill="' + [PINK, GOLD, GREEN][i % 3] + '"/>').join("") +
      '<rect x="0" y="220" width="400" height="40" fill="#2a2633"/>' +
      '<rect x="150" y="210" width="110" height="8" rx="2" fill="#e65c4f"/><rect x="160" y="218" width="6" height="30" fill="#b94337"/><rect x="244" y="218" width="6" height="30" fill="#b94337"/>' +
      bottle(170) + bottle(188) + bottle(206) + '<rect x="226" y="198" width="12" height="12" rx="2" fill="#f4f4f4" opacity=".85"/>',
      sky("jps3", "#140d24", "#3b2350"));
  }

  /* 4. The stage */
  function jpstage() {
    const hands = Array.from({ length: 16 }, (_, i) => {
      const x = 12 + i * 25, y = 214 + (i % 3) * 6;
      return '<g class="jp-hand' + (i % 2 ? " jp-hand2" : "") + '"><path d="M' + x + ' ' + (y + 30) + 'l' + (i % 2 ? 4 : -4) + ' -34" stroke="#0b0b10" stroke-width="5" stroke-linecap="round"/><circle cx="' + (x + (i % 2 ? 4 : -4)) + '" cy="' + (y - 6) + '" r="4" fill="#0b0b10"/></g>';
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jps4)"/>' +
      '<rect x="0" y="0" width="400" height="22" fill="#1b1b22"/>' + [60, 140, 260, 340].map(x => '<rect x="' + (x - 8) + '" y="16" width="16" height="12" rx="2" fill="#3a3a44"/>').join("") +
      '<path class="jp-beam" d="M52 28h16l60 170h-136z" fill="' + GREEN + '" opacity=".22"/><path class="jp-beam jp-beam2" d="M132 28h16l60 170h-136z" fill="' + GOLD + '" opacity=".22"/>' +
      '<path class="jp-beam jp-beam2" d="M252 28h16l60 170h-136z" fill="' + PINK + '" opacity=".22"/><path class="jp-beam" d="M332 28h16l60 170h-136z" fill="#59d6ff" opacity=".22"/>' +
      '<rect x="0" y="150" width="400" height="20" fill="#2c2c36"/><rect x="0" y="146" width="400" height="5" fill="' + GREEN + '"/>' +
      '<rect x="196" y="98" width="4" height="50" fill="#888"/><circle cx="198" cy="96" r="5" fill="#333"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect class="jp-bl' + (i % 2 ? " jp-bl2" : "") + '" x="' + (20 + i * 44) + '" y="152" width="20" height="5" fill="' + [GREEN, GOLD, PINK][i % 3] + '"/>').join("") +
      '<rect x="0" y="170" width="400" height="90" fill="#15151c"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 41) % 400) + '" cy="' + (190 + (i * 17) % 50) + '" r="10" fill="#0b0b10"/>').join("") + hands,
      sky("jps4", "#0e0a1c", "#3a1e4f"));
  }

  /* 5. Main St and 5th Av S, Edmonds */
  function jpcorner() {
    let bricks = "";
    for (let r = 0; r < 8; r++) for (let c = 0; c < 11; c++) bricks += '<rect x="' + (c * 40 - (r % 2) * 20) + '" y="' + (120 + r * 13) + '" width="38" height="11" fill="' + ((r + c) % 3 ? "#8a4b36" : "#7a4130") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jps5)"/>' + mountains(92) + water(92) +
      '<g class="jp-ferry">' + ferry(180, 82, 0.75) + '</g>' +
      '<rect x="0" y="118" width="400" height="106" fill="#6a3a2a"/>' + bricks +
      tag("JAY PARK", 20, 186, 46, GREEN, -6) + tag("AOMG", 40, 214, 20, GOLD, -4) + tag("SEATTLE 2 SEOUL", 150, 214, 16, PINK, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="374" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 112, "Main St") + sign(276, 124, 98, "5th Av S") +
      '<g class="jp-sp"><circle cx="232" cy="164" r="3" fill="' + GREEN + '" opacity=".7"/></g><g class="jp-sp jp-sp2"><circle cx="238" cy="158" r="2" fill="' + GREEN + '" opacity=".6"/></g>',
      sky("jps5", "#86a9c6", "#f1d9b8"));
  }

  window.SCENES = { jpedmonds: jpedmonds, jpbboy: jpbboy, jpnorae: jpnorae, jpstage: jpstage, jpcorner: jpcorner };
})();
