/* michaelchristmas scenes (Regions tab: Boston + New England; Roxbury, Warren Street). CSS classes and ids prefixed mx- (the page's own anim-train is kept).
   1 The 28 bus on Warren St at Ml King Blvd in Roxbury: the bus with its yellow band pulling up to the stop, the stop sign with the yellow 28.
   2 Simco's on the Bridge, Blue Hill Ave in Mattapan (his pick: "everything at Simco's is good"): the little red-and-white hot dog stand, steam rising, cars passing.
   3 Charlestown, where he went to high school: the granite Bunker Hill Monument over the brick rowhouses, a flag waving, a school bus rolling past.
   4 Museum of Fine Arts on Huntington Ave ("Is This Art?"): gray granite columns, banners waving, the bronze rider out front, pigeons.
   5 Warren St and Moreland St in Roxbury: green signs, CHRISTMAS tagged on the wall, the white steeple of First Church in Roxbury up the hill behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mxflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mx-flk{animation:mxflick 2.2s infinite}.mx-flk2{animation-delay:.7s}' +
    '@keyframes mxcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.mx-car{animation:mxcar 7s linear infinite}.mx-car2{animation-delay:-3.5s}' +
    '@keyframes mxcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.mx-carL{animation:mxcarL 8s linear infinite}' +
    '@keyframes mxsteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-34px);opacity:0}}.mx-st{animation:mxsteam 2.4s ease-out infinite}.mx-st2{animation-delay:-.8s}.mx-st3{animation-delay:-1.6s}' +
    '@keyframes mxbell{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.mx-bell{transform-box:fill-box;transform-origin:50% 0%;animation:mxbell 1.6s ease-in-out infinite}' +
    '@keyframes mxleaf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(30px,150px) rotate(260deg);opacity:0}}.mx-leaf{transform-box:fill-box;transform-origin:50% 50%;animation:mxleaf 4.4s linear infinite}.mx-l2{animation-delay:-1.5s}.mx-l3{animation-delay:-3s}' +
    '@keyframes mxban{0%,100%{transform:skewY(0)}50%{transform:skewY(5deg)}}.mx-ban{transform-box:fill-box;transform-origin:50% 0%;animation:mxban 2.4s ease-in-out infinite}.mx-ban2{animation-delay:-1.2s}' +
    '@keyframes mxbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.mx-bird{animation:mxbird 12s linear infinite}.mx-bird2{animation-delay:-6s}' +
    '@keyframes mxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mx-sp{animation:mxspray 1.4s ease-out infinite}.mx-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const YEL = "#ffc72c", GOLD = "#ffb23f", SKY = "#7ad3ff", PINK = "#ff6b8a";
  const triple = (x, base, c) => '<g><rect x="' + x + '" y="' + (base - 84) + '" width="46" height="84" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (base - 84) + 'h52v-6h-52z" fill="#3b3b3b"/>' +
    [0, 1, 2].map(r => '<rect x="' + (x + 6) + '" y="' + (base - 76 + r * 26) + '" width="12" height="16" fill="#f7e2a6"/><rect x="' + (x + 28) + '" y="' + (base - 76 + r * 26) + '" width="12" height="16" fill="#f7e2a6"/>').join("") + '</g>';

  /* 1. The 28 bus on Warren St */
  function mxstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (58 + i * 42) + '" y="128" width="32" height="26" rx="2" fill="#24313c"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="116" width="310" height="76" rx="10" fill="#e9ecef" stroke="#7a8188" stroke-width="2"/>' + win +
      '<rect x="40" y="160" width="310" height="10" fill="' + YEL + '"/><rect x="316" y="124" width="30" height="40" rx="4" fill="#24313c"/>' +
      '<rect x="300" y="118" width="46" height="9" rx="2" fill="#111"/><text x="323" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">28 RUGGLES</text>' +
      '<circle cx="96" cy="194" r="13" fill="#1b1b1b"/><circle cx="96" cy="194" r="5" fill="#777"/><circle cx="296" cy="194" r="13" fill="#1b1b1b"/><circle cx="296" cy="194" r="5" fill="#777"/><circle cx="346" cy="178" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mxs1)"/>' +
      triple(6, 150, "#b7c4cf") + triple(56, 150, "#d9b38c") + triple(250, 150, "#9fb8a0") + triple(300, 150, "#c99a9a") + triple(350, 150, "#c7c0a8") +
      '<rect x="0" y="150" width="400" height="56" fill="#56585d"/><path d="M0 178h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' + bus +
      '<rect x="0" y="206" width="400" height="54" fill="#a8a296"/><rect x="0" y="204" width="400" height="4" fill="#d6d2c8"/>' +
      
      '<rect x="18" y="140" width="5" height="72" fill="#3a3a3a"/><rect x="2" y="118" width="38" height="24" rx="3" fill="#fff" stroke="#333" stroke-width="1.5"/><text x="21" y="128" text-anchor="middle" ' + font + ' font-size="7" fill="#111">BUS</text><text x="21" y="138" text-anchor="middle" ' + font + ' font-size="7" fill="#111">STOP</text>' +
      '<rect x="92" y="214" width="236" height="34" rx="3" fill="#111"/><text x="104" y="236" ' + font + ' font-size="13" fill="#fff">Warren St @ Ml King Blvd</text>' + badge(282, 231, "28", YEL, true),
      sky("mxs1", "#5b86b8", "#f2c79a"));
  }

  /* 2. Simco's on the Bridge */
  function mxsimco() {
    return svg(
      '<rect width="400" height="260" fill="url(#mxs2)"/>' +
      '<g fill="#6f8f6a" opacity=".7"><circle cx="40" cy="120" r="34"/><circle cx="90" cy="110" r="30"/><circle cx="330" cy="116" r="36"/><circle cx="380" cy="124" r="26"/></g>' +
      '<rect x="0" y="140" width="400" height="12" fill="#8c8c86"/><path d="M0 140h400" stroke="#bdbdb6" stroke-width="3"/>' + Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="130" width="3" height="12" fill="#bdbdb6"/>').join("") +
      '<rect x="120" y="92" width="160" height="70" fill="#f6f2ea" stroke="#9c2b23" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (114 + i * 22) + ' 92h22l-4 -16h-22z" fill="' + (i % 2 ? "#fff" : "#c8322a") + '"/>').join("") +
      '<rect x="134" y="104" width="132" height="34" fill="#2b3640"/><rect x="138" y="108" width="124" height="26" fill="#ffe8a8" opacity=".55"/>' +
      '<rect x="136" y="36" width="128" height="30" rx="4" fill="#c8322a" stroke="#fff" stroke-width="2"/><text x="200" y="57" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">HOT DOGS</text>' +
      '<rect x="196" y="66" width="8" height="12" fill="#555"/>' +
      '<g class="mx-st"><circle cx="160" cy="98" r="5" fill="#fff" opacity=".6"/></g><g class="mx-st mx-st2"><circle cx="200" cy="96" r="6" fill="#fff" opacity=".6"/></g><g class="mx-st mx-st3"><circle cx="240" cy="98" r="5" fill="#fff" opacity=".6"/></g>' +
      '<text x="200" y="154" text-anchor="middle" ' + font + ' font-size="9" fill="#9c2b23">ON THE BRIDGE</text>' +
      '<rect x="0" y="162" width="400" height="98" fill="#4b4b50"/><path d="M0 214h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      car("mx-car", 0, 190, "#3a6ea5") + car("mx-carL", 0, 232, "#e0b04a") +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="9" fill="#e8e8e8">BLUE HILL AVE · MATTAPAN</text>',
      sky("mxs2", "#8fc3ea", "#fde9c8"));
  }

  /* 3. Bunker Hill Monument, Charlestown */
  function mxbunker() {
    const rows = [0, 1, 2, 3, 4, 5, 6, 7].map(i => { const x = i * 52 - 6, h = 60 + (i % 3) * 10; return '<rect x="' + x + '" y="' + (196 - h) + '" width="50" height="' + h + '" fill="' + (i % 2 ? "#9b4a36" : "#8a3f2e") + '" stroke="#5e2a1e" stroke-width="1.5"/>' +
      [0, 1].map(r => '<rect x="' + (x + 8) + '" y="' + (204 - h + r * 24) + '" width="10" height="14" fill="#f6dfa3"/><rect x="' + (x + 30) + '" y="' + (204 - h + r * 24) + '" width="10" height="14" fill="#f6dfa3"/>').join(""); }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mxs3)"/>' +
      '<path d="M188 150L194 34h12l6 116z" fill="#c9c6bd"/><path d="M188 150L194 34h6v116z" fill="#b3b0a7"/><path d="M194 34l6 -12 6 12z" fill="#bdbab1"/>' +
      '<rect x="198" y="40" width="4" height="8" fill="#5a5a5a"/>' +
      '<rect x="218" y="40" width="2" height="34" fill="#444"/><g class="mx-ban"><rect x="220" y="40" width="22" height="14" fill="#c8322a"/><rect x="220" y="40" width="10" height="7" fill="#1f3a6e"/><path d="M230 44h12M220 50h22" stroke="#fff" stroke-width="1.5"/></g>' +
      rows +
      '<rect x="0" y="196" width="400" height="64" fill="#55565b"/><rect x="0" y="194" width="400" height="4" fill="#cfcac0"/><path d="M0 230h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="mx-car"><rect x="0" y="206" width="96" height="30" rx="5" fill="#f2b705"/><rect x="8" y="212" width="66" height="10" fill="#2b3640"/><rect x="0" y="226" width="96" height="3" fill="#111"/><circle cx="20" cy="238" r="6" fill="#111"/><circle cx="76" cy="238" r="6" fill="#111"/></g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUNKER HILL · CHARLESTOWN</text>',
      sky("mxs3", "#86b6e2", "#f3e6cf"));
  }

  /* First Church in Roxbury steeple (used behind the corner) */
  function mxchurch() {
    const leaf = (x, y, c, cls) => '<path class="mx-leaf ' + cls + '" d="M' + x + ' ' + y + 'q6 -6 12 0q-6 6 -12 0z" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mxs3)"/>' +
      '<g fill="#c46a2a"><circle cx="50" cy="140" r="40"/><circle cx="90" cy="160" r="30"/></g><g fill="#d9952f"><circle cx="350" cy="140" r="42"/><circle cx="310" cy="164" r="28"/></g>' +
      '<rect x="40" y="170" width="6" height="40" fill="#5a3b26"/><rect x="348" y="170" width="6" height="40" fill="#5a3b26"/>' +
      '<rect x="130" y="120" width="140" height="92" fill="#f7f5ef" stroke="#c9c5b9" stroke-width="2"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M130 ' + (128 + i * 9) + 'h140" stroke="#e1ddd2" stroke-width="1"/>').join("") +
      '<path d="M124 120l76 -30 76 30z" fill="#f2efe7" stroke="#c9c5b9" stroke-width="2"/>' +
      [146, 176, 222, 252].map(x => '<rect x="' + x + '" y="136" width="14" height="26" rx="7" fill="#3c4a56"/>').join("") + '<rect x="186" y="170" width="28" height="42" rx="3" fill="#3a2a1f"/>' +
      '<rect x="182" y="40" width="36" height="56" fill="#f7f5ef" stroke="#c9c5b9" stroke-width="2"/><circle cx="200" cy="60" r="10" fill="#fff" stroke="#333" stroke-width="2"/><path d="M200 60v-7M200 60l5 3" stroke="#333" stroke-width="1.6"/>' +
      '<rect x="188" y="14" width="24" height="28" fill="#f7f5ef" stroke="#c9c5b9" stroke-width="2"/><path d="M186 14l14 -12 14 12z" fill="#e8e4da" stroke="#c9c5b9" stroke-width="1.5"/>' +
      '<rect x="192" y="20" width="16" height="16" fill="#2e3740"/><g class="mx-bell"><path d="M195 22h10l2 10h-14z" fill="#c9a24a"/></g>' +
      '<rect x="0" y="210" width="400" height="50" fill="#5f8a4b"/><path d="M150 260l30 -48h40l30 48z" fill="#c9c1ad"/>' +
      leaf(70, 110, "#e07a2a", "") + leaf(300, 104, "#e6a33a", "mx-l2") + leaf(340, 96, "#c9472a", "mx-l3") + leaf(110, 96, "#e6a33a", "mx-l2") +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">JOHN ELIOT SQUARE · ROXBURY</text>',
      sky("mxs3", "#86b6e2", "#f3e6cf"));
  }

  /* 4. Museum of Fine Arts */
  function mxmfa() {
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (128 + i * 28) + '" y="94" width="12" height="82" fill="#d6d3cc"/><rect x="' + (125 + i * 28) + '" y="90" width="18" height="6" fill="#c4c0b8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mxs4)"/>' +
      '<g class="mx-bird"><path d="M10 40q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="mx-bird mx-bird2"><path d="M60 60q4 -4 8 0q4 -4 8 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="20" y="90" width="360" height="96" fill="#bdb9b1"/><rect x="20" y="70" width="360" height="22" fill="#cfcbc3"/><path d="M110 70l90 -26 90 26z" fill="#d6d3cc"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (34 + i * 20) + '" y="104" width="12" height="40" fill="#8f8b84"/><rect x="' + (300 + i * 20) + '" y="104" width="12" height="40" fill="#8f8b84"/>').join("") +
      '<rect x="120" y="92" width="160" height="94" fill="#a9a59d"/>' + cols +
      '<g class="mx-ban"><rect x="44" y="150" width="20" height="32" fill="' + PINK + '"/></g><g class="mx-ban mx-ban2"><rect x="336" y="150" width="20" height="32" fill="' + SKY + '"/></g>' +
      '<rect x="0" y="186" width="400" height="14" fill="#a7a197"/><rect x="0" y="200" width="400" height="60" fill="#6c8d58"/>' +
      '<rect x="176" y="200" width="48" height="16" fill="#8d8a84"/>' +
      '<g fill="#3c4a3e"><ellipse cx="200" cy="184" rx="20" ry="8"/><path d="M184 186l-4 14h4l4 -12zM190 188l0 12h4l0 -12zM208 188l0 12h4l0 -12zM214 186l6 14h4l-6 -14z"/>' +
      '<path d="M216 182q8 -10 10 -20l6 2q0 10 -8 20z"/><path d="M226 160l10 4 -2 5 -10 -3z"/><path d="M184 182q-8 4 -10 14" stroke="#3c4a3e" stroke-width="3" fill="none"/>' +
      '<path d="M196 178l2 -18h6l2 18z"/><circle cx="201" cy="156" r="4"/><path d="M198 164l-12 -14M204 164l12 -14" stroke="#3c4a3e" stroke-width="3"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">HUNTINGTON AVE · IS THIS ART?</text>',
      sky("mxs4", "#9fcbee", "#f7efe2"));
  }

  /* 5. Warren St and Dudley St, Nubian Square */
  function mxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#mxs5)"/>' +
      '<path d="M0 136q120 -40 260 -10t140 10v0z" fill="#3d4a3a"/>' +
      '<rect x="150" y="92" width="70" height="40" fill="#f7f5ef"/><path d="M146 92l39 -16 39 16z" fill="#ece8de"/>' +
      '<rect x="175" y="40" width="20" height="40" fill="#f7f5ef"/><rect x="178" y="22" width="14" height="18" fill="#f7f5ef"/><path d="M176 22l9 -14 9 14z" fill="#e8e4da"/>' +
      '<circle cx="185" cy="54" r="6" fill="#fff" stroke="#333" stroke-width="1.5"/><rect x="181" y="26" width="8" height="10" fill="#2e3740"/>' +
      '<rect x="0" y="126" width="400" height="98" fill="#6e5a7a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#5e4c69" stroke-width="1"/>').join("") +
      tag("CHRISTMAS", 18, 188, 44, GOLD, -6) + tag("WARREN ST", 30, 216, 18, SKY, -3) + tag("BOB HANUKKAH", 150, 214, 17, PINK, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(262, 98, 124, "Warren St") + sign(266, 124, 124, "Moreland St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="mx-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="mx-sp"><circle cx="252" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="mx-sp mx-sp2"><circle cx="258" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("mxs5", "#3a3a6a", "#f2a37a"));
  }

  window.SCENES = { mxstop: mxstop, mxsimco: mxsimco, mxbunker: mxbunker, mxchurch: mxchurch, mxmfa: mxmfa, mxcorner: mxcorner };
})();
