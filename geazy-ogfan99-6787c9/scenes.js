/* G-Eazy (born in Oakland, raised in Berkeley — THE BAY AREA region) opening scenes. 400 x 260 animated SVGs. CSS classes prefixed ge- */
(function () {
  const W = 400, H = 260;
  const F = 'font-family="Helvetica, Arial, sans-serif"';
  const A = 'font-family="Anton, Impact, sans-serif"';
  const css = '<style>' +
    '@keyframes getw{0%,100%{opacity:1}50%{opacity:.25}}.ge-tw{animation:getw 1.8s ease-in-out infinite}.ge-tw2{animation-delay:.9s}' +
    '@keyframes geblink{0%,49%{opacity:1}50%,100%{opacity:.15}}.ge-blk{animation:geblink 1s steps(1) infinite}.ge-blk2{animation-delay:.5s}' +
    '@keyframes geflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.4}55%{opacity:.95}}.ge-flk{animation:geflick 2.4s infinite}.ge-flk2{animation-delay:1.1s}' +
    '@keyframes gebeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.ge-beam{transform-box:fill-box;transform-origin:50% 100%;animation:gebeam 4s ease-in-out infinite}.ge-beam2{animation-delay:-2s}' +
    '@keyframes gehands{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.ge-hand{animation:gehands .7s ease-in-out infinite}.ge-hand2{animation-delay:.23s}.ge-hand3{animation-delay:.46s}' +
    '@keyframes gebob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.ge-bob{animation:gebob 1.2s ease-in-out infinite}.ge-bob2{animation-delay:-.6s}' +
    '@keyframes geslide{from{transform:translateX(0)}to{transform:translateX(-96px)}}.ge-ride{animation:geslide 3s linear infinite}' +
    '@keyframes geflag{0%,100%{transform:skewY(0)}50%{transform:skewY(7deg)}}.ge-flag{transform-box:fill-box;transform-origin:0 50%;animation:geflag 1.6s ease-in-out infinite}' +
    '@keyframes gefog{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.ge-fog{animation:gefog 22s linear infinite}.ge-fog2{animation-delay:-11s}' +
    '@keyframes geroll{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.ge-car{animation:geroll 6s linear infinite}.ge-car2{animation-duration:8.5s;animation-delay:-4s}' +
    '@keyframes gebird{0%{transform:translate(0,0)}100%{transform:translate(440px,-30px)}}.ge-bird{animation:gebird 9s linear infinite}.ge-bird2{animation-delay:-4.5s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="ge-tw' + (i % 2 ? " ge-tw2" : "") + '" cx="' + ((i * 97 + 31) % 400) + '" cy="' + (6 + (i * 53) % 70) + '" r="' + (i % 4 ? 0.9 : 1.5) + '" fill="#fff" opacity=".8"/>'; return s; };
  const euc = (x, y, h, c) => '<path d="M' + x + ' ' + (y + h) + 'q-3 -' + (h * .6) + ' 2 -' + h + '" stroke="#b9ad98" stroke-width="5" fill="none"/>' +
    '<ellipse cx="' + (x + 2) + '" cy="' + y + '" rx="' + (h * .28) + '" ry="' + (h * .42) + '" fill="' + (c || "#4a6a52") + '"/><ellipse cx="' + (x - 8) + '" cy="' + (y + h * .2) + '" rx="' + (h * .2) + '" ry="' + (h * .3) + '" fill="' + (c || "#4a6a52") + '" opacity=".85"/>';
  const BART_RED = "#ed1c24", BART_ORANGE = "#faa61a", GOLD = "#d4af37", CREAM = "#efe8d8";

  /* 1. Ashby BART (South Berkeley, by the Oakland line): the station under Adeline St, white-and-blue BART train sliding in, Red + Orange line pills on the sign */
  function gestation() {
    const car = x => '<path d="M' + x + ' 128h160v64H' + x + 'z" fill="#eef1f4" stroke="#8a929a" stroke-width="1.5"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (x + 12 + i * 38) + '" y="140" width="28" height="22" rx="3" fill="#1d2630"/>').join("") +
      '<rect x="' + x + '" y="168" width="160" height="7" fill="#1f6fb2"/><rect x="' + (x + 70) + '" y="136" width="18" height="52" fill="#d4d9de" stroke="#8a929a"/>' +
      '<circle cx="' + (x + 26) + '" cy="194" r="5" fill="#222"/><circle cx="' + (x + 134) + '" cy="194" r="5" fill="#222"/>';
    const cab = '<path d="M332 192v-64h34q26 6 30 40v24z" fill="#eef1f4" stroke="#8a929a" stroke-width="1.5"/><path d="M362 132q22 6 28 30h-28z" fill="#1d3f5e"/>' +
      '<rect x="332" y="168" width="64" height="7" fill="#1f6fb2"/><circle cx="388" cy="182" r="3" fill="#fff6c2" class="ge-flk"/><circle cx="354" cy="194" r="5" fill="#222"/>';
    let lights = "", edge = "";
    for (let x = 20; x < 400; x += 60) lights += '<rect x="' + x + '" y="52" width="36" height="5" rx="2" fill="#fff3c4" class="ge-flk' + (x % 120 ? " ge-flk2" : "") + '"/>';
    for (let x = 8; x < 400; x += 26) edge += '<rect x="' + x + '" y="199" width="10" height="3" rx="1.5" fill="#f2f2f2" class="ge-blk' + (x % 52 ? " ge-blk2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a2d33"/>' +
      /* concrete box with the coffered ceiling of the underground station */
      '<rect x="0" y="0" width="400" height="58" fill="#4a4d54"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (4 + i * 40) + '" y="6" width="32" height="38" fill="#3a3d44"/>').join("") + lights +
      '<rect x="0" y="62" width="400" height="66" fill="#8a7d6a"/>' + Array.from({ length: 40 }, (_, i) => '<rect x="' + (i * 10) + '" y="62" width="9" height="66" fill="' + (i % 2 ? "#7d705e" : "#958874") + '"/>').join("") +
      '<rect x="0" y="122" width="400" height="6" fill="#33363c"/>' +
      '<g class="anim-train">' + car(4) + car(168) + cab + '</g>' +
      '<rect x="0" y="196" width="400" height="8" fill="#d8d2c4"/>' + edge +
      '<rect x="0" y="204" width="400" height="56" fill="#55585e"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 34) + '" y="204" width="32" height="56" fill="' + (i % 2 ? "#5d6066" : "#505359") + '"/>').join("") +
      /* station sign */
      '<rect x="80" y="212" width="240" height="38" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="148" y="237" text-anchor="middle" ' + F + ' font-weight="700" font-size="20" fill="#fff">Ashby</text>' +
      '<rect x="200" y="221" width="40" height="18" rx="9" fill="' + BART_RED + '"/><text x="220" y="234" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#fff">RED</text>' +
      '<rect x="246" y="221" width="64" height="18" rx="9" fill="' + BART_ORANGE + '"/><text x="278" y="234" text-anchor="middle" ' + F + ' font-weight="700" font-size="9" fill="#111">ORANGE</text>' +
      '<text x="200" y="76" text-anchor="middle" ' + F + ' font-weight="700" font-size="10" fill="#fff3e0" opacity=".9">BART · ADELINE ST · SOUTH BERKELEY</text>',
      "");
  }

  /* 2. Berkeley High School (class of '07): the cream art-deco facade on Allston Way with the relief panels, the flag snapping, gulls going over */
  function gehigh() {
    const fins = [92, 118, 144, 256, 282, 308].map(x => '<rect x="' + x + '" y="62" width="10" height="132" fill="#e2d9c4"/><rect x="' + (x + 2) + '" y="56" width="6" height="8" fill="#d4c9b0"/>').join("");
    const wins = [0, 1, 2].map(r => [40, 60, 330, 350].map(x => '<rect x="' + x + '" y="' + (86 + r * 34) + '" width="14" height="22" fill="#2b4a5a"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ges2)"/>' +
      '<g class="ge-bird"><path d="M-20 40q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="ge-bird ge-bird2"><path d="M-40 26q4 -4 8 0q4 -4 8 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      euc(18, 110, 70, "#5a7a5e") + euc(384, 104, 76, "#5a7a5e") +
      '<rect x="30" y="70" width="340" height="128" fill="' + CREAM + '"/><rect x="26" y="64" width="348" height="8" fill="#d4c9b0"/>' + wins + fins +
      /* central tower block with a relief panel of figures (abstract, no faces) */
      '<rect x="160" y="40" width="80" height="158" fill="#e9e1cc"/><rect x="156" y="34" width="88" height="8" fill="#d4c9b0"/>' +
      '<rect x="168" y="50" width="64" height="50" fill="#d9ccae"/>' +
      '<g fill="#c4b48e"><path d="M180 96v-30l6 -8l6 8v30z"/><path d="M198 96v-36l6 -8l6 8v36z"/><path d="M216 96v-30l6 -8l6 8v30z"/><path d="M172 62h56v4h-56z"/></g>' +
      '<text x="200" y="118" text-anchor="middle" ' + A + ' font-size="11" fill="#6a5a3a" letter-spacing="1">BERKELEY HIGH SCHOOL</text>' +
      '<rect x="178" y="130" width="44" height="68" fill="#2b3a44"/><path d="M200 130v68" stroke="#d4c9b0" stroke-width="2"/><rect x="178" y="130" width="44" height="68" fill="#ffd98a" opacity=".25" class="ge-flk"/>' +
      '<rect x="20" y="196" width="360" height="8" fill="#bdb6a6"/>' +
      /* flagpole */
      '<rect x="270" y="10" width="3" height="56" fill="#bbb"/><g class="ge-flag"><rect x="273" y="12" width="30" height="18" fill="#c8102e"/><rect x="273" y="12" width="13" height="10" fill="#1d3f8a"/>' +
      [15, 19, 23, 27].map(y => '<path d="M286 ' + y + 'h17" stroke="#fff" stroke-width="1.4"/>').join("") + '</g>' +
      '<rect x="0" y="204" width="400" height="56" fill="#8a8f96"/><path d="M0 230h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<rect x="120" y="234" width="160" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="249.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Allston Way</text>',
      sky("ges2", "#8fc3e8", "#f2e6cc"));
  }

  /* 3. The Greek Theatre up on the Berkeley hill: Doric columns, the stone bowl, eucalyptus all around, lights sweeping over a sold-out hometown crowd */
  function gegreek() {
    const cols = Array.from({ length: 8 }, (_, i) => '<rect x="' + (110 + i * 24) + '" y="70" width="10" height="64" fill="#e9e1cc"/><rect x="' + (107 + i * 24) + '" y="66" width="16" height="5" fill="#d4c9b0"/>').join("");
    const rows = [0, 1, 2, 3, 4].map(r => '<path d="M' + (20 - r * 4) + ' ' + (170 + r * 16) + 'q' + (180 + r * 4) + ' ' + (36 + r * 6) + ' ' + (360 + r * 8) + ' 0" stroke="#bdb39c" stroke-width="3" fill="none"/>').join("");
    const hands = Array.from({ length: 22 }, (_, i) => '<g class="ge-hand' + (i % 3 ? " ge-hand" + (i % 3 + 1) : "") + '"><circle cx="' + (18 + i * 17) + '" cy="' + (214 + (i % 2) * 6) + '" r="6" fill="#0d0f14"/>' +
      (i % 2 ? '<path d="M' + (18 + i * 17) + ' ' + (210 + (i % 2) * 6) + 'l4 -16" stroke="#0d0f14" stroke-width="4" stroke-linecap="round"/>' : "") + '</g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ges3)"/>' + stars(22) +
      euc(20, 60, 90, "#2f4a36") + euc(60, 74, 70, "#36543c") + euc(380, 56, 94, "#2f4a36") + euc(342, 72, 70, "#36543c") +
      /* stage building: columns + entablature */
      '<rect x="96" y="56" width="208" height="12" fill="#d4c9b0"/><rect x="92" y="50" width="216" height="8" fill="#e2d9c4"/>' + cols +
      '<rect x="90" y="134" width="220" height="20" fill="#cfc4aa"/><rect x="84" y="152" width="232" height="8" fill="#b9ad90"/>' +
      '<g class="ge-beam"><path d="M140 154l-40 -150h30z" fill="' + GOLD + '" opacity=".22"/></g><g class="ge-beam ge-beam2"><path d="M260 154l40 -150h-30z" fill="#fff" opacity=".18"/></g>' +
      /* the stone bowl */
      '<path d="M0 162q200 44 400 0v98H0z" fill="#9a907c"/>' + rows + hands +
      '<rect x="110" y="236" width="180" height="20" rx="3" fill="#111" opacity=".9"/><text x="200" y="250" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="' + GOLD + '">THE GREEK · BERKELEY</text>',
      sky("ges3", "#0b1430", "#3e3460"));
  }

  /* 4. Tilden Park Merry-Go-Round in the Berkeley hills: the old carousel under its pavilion, horses riding up and down */
  function getilden() {
    const horse = (x, c, cls) => '<g class="' + cls + '"><rect x="' + (x + 13) + '" y="96" width="2" height="70" fill="' + GOLD + '"/>' +
      '<path d="M' + x + ' 140q0 -10 14 -10h12q6 -10 10 -6l-2 8q4 4 0 8h-6q-2 10 -14 10h-8q-6 0 -6 -10z" fill="' + c + '" stroke="#5a4a3a" stroke-width="1"/>' +
      '<path d="M' + (x + 4) + ' 148l-4 12M' + (x + 22) + ' 148l4 12" stroke="' + c + '" stroke-width="3"/></g>';
    let bulbs = "";
    for (let i = 0; i < 18; i++) bulbs += '<circle cx="' + (64 + i * 16) + '" cy="88" r="2.4" fill="#ffe9a0" class="ge-blk' + (i % 2 ? " ge-blk2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ges4)"/>' +
      '<g class="ge-fog"><ellipse cx="0" cy="40" rx="70" ry="10" fill="#fff" opacity=".35"/></g><g class="ge-fog ge-fog2"><ellipse cx="0" cy="62" rx="90" ry="12" fill="#fff" opacity=".3"/></g>' +
      '<path d="M0 120q80 -40 160 -20t140 -30t100 10v60H0z" fill="#5f7a4e"/>' +
      euc(30, 100, 70, "#3f5a40") + euc(372, 96, 72, "#3f5a40") +
      /* pavilion: open sides, green roof, round carousel inside */
      '<path d="M44 84l156 -40l156 40z" fill="#2f5a3a"/><path d="M44 84l156 -40l156 40" fill="none" stroke="#e9e1cc" stroke-width="3"/>' +
      '<rect x="56" y="84" width="6" height="110" fill="#e9e1cc"/><rect x="338" y="84" width="6" height="110" fill="#e9e1cc"/>' +
      '<path d="M70 92q130 -26 260 0v8q-130 -24 -260 0z" fill="#c8102e"/><path d="M70 100h260v10H70z" fill="' + GOLD + '"/>' + bulbs +
      '<rect x="190" y="96" width="20" height="78" fill="#d9c79a"/><rect x="186" y="110" width="28" height="40" fill="#e8dcc0" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<g>' + horse(90, "#f2efe6", "ge-bob") + horse(140, "#e2b0a0", "ge-bob ge-bob2") + horse(232, "#c9d8e8", "ge-bob") + horse(282, "#f2efe6", "ge-bob ge-bob2") + '</g>' +
      '<ellipse cx="200" cy="178" rx="140" ry="12" fill="#8a3a2a"/><ellipse cx="200" cy="174" rx="140" ry="10" fill="#c8102e"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#6a8a56"/><path d="M0 206q200 14 400 0" stroke="#8aa070" stroke-width="3" fill="none"/>' +
      '<rect x="100" y="224" width="200" height="24" rx="3" fill="#111" opacity=".88"/><text x="200" y="240.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">TILDEN PARK MERRY-GO-ROUND</text>',
      sky("ges4", "#a8c8e0", "#e8dcc8"));
  }

  /* 5. The corner: Ashby Ave and Adeline St, G-EAZY tagged on the wall, the white Claremont Hotel glowing up in the Berkeley hills behind */
  function gecorner() {
    const car = (cls, y, c) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="50" height="14" rx="4" fill="' + c + '"/><rect x="10" y="' + (y - 9) + '" width="28" height="11" rx="3" fill="' + c + '"/><circle cx="11" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="39" cy="' + (y + 14) + '" r="4" fill="#111"/><circle cx="49" cy="' + (y + 6) + '" r="2" fill="#fff6c2"/></g>';
    const hotel = '<g transform="translate(36 0)">' +
      '<rect x="236" y="78" width="120" height="34" fill="#f4f1ea"/><rect x="276" y="56" width="40" height="56" fill="#f4f1ea"/><path d="M272 58l24 -18l24 18z" fill="#e6e1d6"/>' +
      '<rect x="292" y="30" width="8" height="12" fill="#f4f1ea"/>' +
      Array.from({ length: 5 }, (_, r) => Array.from({ length: 12 }, (_, k) => '<rect x="' + (240 + k * 10) + '" y="' + (82 + r * 6) + '" width="4" height="3" fill="#ffd98a" opacity="' + ((r + k) % 3 ? .35 : .9) + '"/>').join("")).join("") +
      '<rect x="284" y="62" width="6" height="4" fill="#ffd98a"/><rect x="302" y="62" width="6" height="4" fill="#ffd98a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ges5)"/>' + stars(12) +
      /* the hills with the hotel */
      '<path d="M150 120q60 -60 130 -70t120 40v30z" fill="#1f2a30"/>' + hotel +
      '<path d="M120 120q80 -16 140 -6t140 -4v30H120z" fill="#24323a"/>' +
      /* wall with the tag */
      '<rect x="0" y="96" width="170" height="114" fill="#3a3a3e"/><rect x="0" y="92" width="170" height="6" fill="#2a2a2e"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 22) + ' 98v112" stroke="#323236" stroke-width="2"/>').join("") +
      tag("G-EAZY", 10, 170, 36, CREAM, -7) + tag("THE BAY", 34, 198, 16, GOLD, -4) +
      '<rect x="170" y="150" width="230" height="60" fill="#2a3238"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (182 + i * 36) + '" y="160" width="22" height="16" fill="#ffd98a" opacity="' + (i % 2 ? .3 : .7) + '"/>').join("") +
      /* street */
      '<rect x="0" y="206" width="400" height="5" fill="#a8a294"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#2e2f33"/><path d="M0 234h400" stroke="#f2c94c" stroke-width="2" stroke-dasharray="18 12"/>' +
      car("ge-car", 214, "#111") + car("ge-car ge-car2", 214, "#c8102e") +
      /* green street signs */
      '<rect x="226" y="70" width="5" height="138" fill="#7a7f86"/>' +
      '<rect x="176" y="74" width="104" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="228" y="88.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Ashby Ave</text>' +
      '<rect x="182" y="98" width="92" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="228" y="112.5" text-anchor="middle" ' + F + ' font-weight="700" font-size="11" fill="#fff">Adeline St</text>' +
      '<circle cx="360" cy="186" r="4" fill="#fffbe0" class="ge-flk"/><rect x="358" y="188" width="4" height="20" fill="#7a7f86"/>',
      sky("ges5", "#0a0d1a", "#2e2a48"));
  }

  window.SCENES = { gestation, gehigh, gegreek, getilden, gecorner };
})();
