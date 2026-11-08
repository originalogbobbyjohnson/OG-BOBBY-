/* boaz scenes (Regions tab: Pittsburgh; Larimer, East End). CSS classes and ids prefixed bz- (the page's own anim-train is kept).
   1 East Liberty station on the Martin Luther King Jr. East Busway: the open-air busway in its cut beside the rail line, a white PRT P1 bus sliding in under the platform canopy.
   2 Westinghouse High in Homewood (he played clarinet and alto sax in the all-city band there): buff Classical Revival front, blue-and-gold Bulldogs banners, music notes floating up.
   3 Highland Park, next door to Larimer: the reservoir with its fountain, the stone entrance pillars on Highland Ave, a jogger on the walk.
   4 Steel City: a blast furnace on the river, molten steel pouring from the ladle, sparks flying ("Steel City", his Pittsburgh anthem).
   5 Larimer Ave and Meadow St in Larimer: green signs, BOAZ tagged on the brick, East Liberty Presbyterian's tall stone tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bzflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.bz-flk{animation:bzflick 2.2s infinite}.bz-flk2{animation-delay:.7s}' +
    '@keyframes bzcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.bz-car{animation:bzcar 7s linear infinite}.bz-car2{animation-delay:-3.5s}' +
    '@keyframes bznote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.bz-note{animation:bznote 3s ease-out infinite}.bz-n2{animation-delay:-1s}.bz-n3{animation-delay:-2s}' +
    '@keyframes bzwave{0%,100%{transform:skewX(0)}50%{transform:skewX(5deg)}}.bz-ban{transform-box:fill-box;transform-origin:50% 0%;animation:bzwave 3s ease-in-out infinite}.bz-ban2{animation-delay:-1.5s}' +
    '@keyframes bzjet{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.18)}}.bz-jet{transform-box:fill-box;transform-origin:50% 100%;animation:bzjet 1.2s ease-in-out infinite}' +
    '@keyframes bzdrop{0%{transform:translate(0,0);opacity:1}100%{transform:translate(var(--dx),40px);opacity:0}}.bz-drop{animation:bzdrop 1.2s ease-in infinite}' +
    '@keyframes bzrip{0%,100%{transform:translateX(0)}50%{transform:translateX(8px)}}.bz-rip{animation:bzrip 3s ease-in-out infinite}.bz-rip2{animation-delay:-1.5s}' +
    '@keyframes bzjog{from{transform:translateX(-30px)}to{transform:translateX(430px)}}.bz-jog{animation:bzjog 12s linear infinite}' +
    '@keyframes bzbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.bz-bob{animation:bzbob .4s ease-in-out infinite}' +
    '@keyframes bzspark{0%{transform:translate(0,0);opacity:1}100%{transform:translate(var(--dx),var(--dy));opacity:0}}.bz-spk{animation:bzspark 1s ease-out infinite}' +
    '@keyframes bzpour{0%,100%{opacity:1}50%{opacity:.75}}.bz-pour{animation:bzpour .5s ease-in-out infinite}' +
    '@keyframes bzsmoke{0%{transform:translate(0,0) scale(.6);opacity:.7}100%{transform:translate(40px,-50px) scale(1.6);opacity:0}}.bz-smk{transform-box:fill-box;transform-origin:50% 50%;animation:bzsmoke 4s ease-out infinite}.bz-smk2{animation-delay:-2s}' +
    '@keyframes bzbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-24px)}}.bz-bird{animation:bzbird 12s linear infinite}.bz-bird2{animation-delay:-6s}' +
    '@keyframes bzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bz-sp{animation:bzspray 1.4s ease-out infinite}.bz-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const GOLD = "#f4b223", BLUE = "#1f4e9c", PRT = "#0053a0";

  /* East Liberty Presbyterian: the big Gothic stone tower with pinnacles and a short spire */
  const elpc = (cx, base, s, stone, shade) => {
    const w = 40 * s, h = 96 * s, x = cx - w / 2, top = base - h;
    let g = '<g>';
    g += '<rect x="' + (cx - 70 * s) + '" y="' + (base - 46 * s) + '" width="' + (140 * s) + '" height="' + (46 * s) + '" fill="' + stone + '"/>' +
      '<path d="M' + (cx - 74 * s) + ' ' + (base - 46 * s) + 'l' + (74 * s) + ' ' + (-26 * s) + 'l' + (74 * s) + ' ' + (26 * s) + 'z" fill="' + shade + '"/>';
    g += '<rect x="' + x + '" y="' + top + '" width="' + w + '" height="' + h + '" fill="' + stone + '"/>' +
      '<rect x="' + (x + w * 0.78) + '" y="' + top + '" width="' + (w * 0.22) + '" height="' + h + '" fill="' + shade + '"/>';
    [0.18, 0.5].forEach(f => { const wy = top + h * f; g += '<path d="M' + (cx - 8 * s) + ' ' + (wy + 26 * s) + 'v' + (-18 * s) + 'q' + (8 * s) + ' ' + (-14 * s) + ' ' + (16 * s) + ' 0v' + (18 * s) + 'z" fill="#3a3a44"/>'; });
    [-1, 1].forEach(d => { const px = cx + d * (w / 2 - 3 * s); g += '<path d="M' + (px - 4 * s) + ' ' + top + 'h' + (8 * s) + 'l' + (-4 * s) + ' ' + (-16 * s) + 'z" fill="' + shade + '"/>'; });
    g += '<path d="M' + (cx - 12 * s) + ' ' + top + 'h' + (24 * s) + 'l' + (-12 * s) + ' ' + (-34 * s) + 'z" fill="' + shade + '"/>';
    g += '<circle cx="' + cx + '" cy="' + (base - 30 * s) + '" r="' + (9 * s) + '" fill="#4a3f5a" stroke="' + shade + '" stroke-width="' + (2 * s) + '"/>';
    return g + '</g>';
  };

  /* 1. East Liberty station, MLK Jr. East Busway */
  function bzstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 40) + '" y="130" width="30" height="24" rx="3" fill="#1e2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="120" width="300" height="70" rx="10" fill="#f4f4f2" stroke="#7a8088" stroke-width="2"/>' + win +
      '<rect x="40" y="160" width="300" height="8" fill="' + PRT + '"/><rect x="40" y="170" width="300" height="4" fill="' + GOLD + '"/>' +
      '<rect x="312" y="126" width="24" height="40" rx="3" fill="#1e2a33"/><rect x="44" y="126" width="16" height="34" rx="3" fill="#2a3640"/>' +
      '<rect x="236" y="124" width="72" height="12" rx="2" fill="#111"/><text x="272" y="133" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">P1 DOWNTOWN</text>' +
      '<circle cx="90" cy="190" r="12" fill="#1a1a1a"/><circle cx="90" cy="190" r="5" fill="#888"/><circle cx="290" cy="190" r="12" fill="#1a1a1a"/><circle cx="290" cy="190" r="5" fill="#888"/>' +
      '<circle cx="336" cy="178" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bzs1)"/>' +
      '<g fill="#3b3a4a"><rect x="0" y="50" width="56" height="50"/><rect x="62" y="64" width="40" height="36"/><rect x="290" y="44" width="46" height="56"/><rect x="340" y="60" width="60" height="40"/></g>' +
      '<g fill="#4d4a5c"><rect x="0" y="94" width="400" height="10"/></g>' +
      '<rect x="0" y="100" width="400" height="10" fill="#6b6f78"/><path d="M0 104h400" stroke="#3a3d44" stroke-width="2"/>' +
      '<path d="M0 60h400" stroke="#8d939e" stroke-width="6"/><path d="M0 64h400" stroke="#5a606b" stroke-width="3"/>' +
      [40, 160, 280, 380].map(x => '<rect x="' + (x - 3) + '" y="64" width="6" height="40" fill="#5a606b"/>').join("") +
      '<g class="bz-flk"><rect x="90" y="66" width="40" height="4" fill="#fff3c4"/></g><g class="bz-flk bz-flk2"><rect x="250" y="66" width="40" height="4" fill="#fff3c4"/></g>' +
      '<rect x="0" y="110" width="400" height="96" fill="#55575c"/><path d="M0 196h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 14"/>' +
      bus +
      '<rect x="0" y="204" width="400" height="6" fill="#f2c200"/><rect x="0" y="210" width="400" height="50" fill="#9a958c"/><path d="M0 232h400" stroke="#8a857c" stroke-width="2"/>' +
      '<rect x="98" y="216" width="204" height="32" rx="3" fill="#111"/><text x="112" y="238" ' + font + ' font-size="16" fill="#fff">East Liberty</text>' + badge(242, 232, "P1", PRT),
      sky("bzs1", "#1f2a4a", "#d88a5a"));
  }

  /* 2. Westinghouse High, Homewood */
  function bzschool() {
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (128 + i * 30) + '" y="96" width="12" height="84" fill="#efe4c8"/><rect x="' + (125 + i * 30) + '" y="92" width="18" height="6" fill="#d9caa4"/>').join("");
    const wins = (x0) => Array.from({ length: 3 }, (_, r) => Array.from({ length: 3 }, (_, c) => '<rect x="' + (x0 + c * 22) + '" y="' + (82 + r * 34) + '" width="14" height="22" fill="#2f3a52" stroke="#efe4c8" stroke-width="2"/>').join("")).join("");
    const note = (cls, x, y, c) => '<g class="bz-note ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><path d="M' + (x + 4.5) + ' ' + y + 'v-18l8 4" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#bzs2)"/>' +
      '<rect x="20" y="66" width="360" height="130" fill="#c9a877"/>' + Array.from({ length: 16 }, (_, i) => '<path d="M20 ' + (72 + i * 8) + 'h360" stroke="#b8956a" stroke-width="1"/>').join("") +
      wins(34) + wins(300) +
      '<rect x="112" y="60" width="176" height="136" fill="#dcc9a0"/>' +
      '<path d="M104 62l96 -30l96 30z" fill="#e8dcbc" stroke="#bfa97c" stroke-width="2"/>' +
      '<rect x="116" y="64" width="168" height="22" fill="#e8dcbc"/><text x="200" y="80" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="13" fill="#6b5a3a" letter-spacing="2">WESTINGHOUSE</text>' +
      cols + '<rect x="178" y="140" width="44" height="40" fill="#3a2f28"/><path d="M178 140q22 -18 44 0z" fill="#3a2f28"/>' +
      '<g class="bz-ban"><rect x="92" y="96" width="20" height="54" fill="' + BLUE + '"/><path d="M92 150l10 10l10 -10z" fill="' + BLUE + '"/><rect x="92" y="110" width="20" height="5" fill="' + GOLD + '"/></g>' +
      '<g class="bz-ban bz-ban2"><rect x="288" y="96" width="20" height="54" fill="' + GOLD + '"/><path d="M288 150l10 10l10 -10z" fill="' + GOLD + '"/><rect x="288" y="110" width="20" height="5" fill="' + BLUE + '"/></g>' +
      '<rect x="0" y="196" width="400" height="8" fill="#b9b2a6"/><rect x="150" y="180" width="100" height="16" fill="#cfc8bb"/><rect x="140" y="188" width="120" height="8" fill="#d8d2c6"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#5b8a4a"/>' +
      '<g transform="translate(330 206)"><path d="M-22 -6l14 8" stroke="#2a2a2a" stroke-width="3" stroke-linecap="round"/><path d="M-8 2q4 2 4 8v22q0 12 12 12q12 0 12 -12v-6" stroke="' + GOLD + '" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M14 24l12 -10" stroke="' + GOLD + '" stroke-width="10" stroke-linecap="round"/>' +
      [8, 16, 24].map(y => '<circle cx="-4" cy="' + y + '" r="2" fill="#8a5a1a"/>').join("") + '</g>' +
      note("", 352, 198, "#fff") + note("bz-n2", 344, 192, GOLD) + note("bz-n3", 358, 188, "#1f4e9c") +
      car("bz-car", 0, 234, "#c43d3d"),
      sky("bzs2", "#7fb3e6", "#e8f1fb"));
  }

  /* 3. Highland Park reservoir and fountain */
  function bzpark() {
    const trees = [[20, 120], [60, 112], [330, 116], [372, 122], [110, 126], [290, 128]].map(t => '<rect x="' + (t[0] - 3) + '" y="' + t[1] + '" width="6" height="22" fill="#5a3f2a"/><circle cx="' + t[0] + '" cy="' + (t[1] - 6) + '" r="18" fill="#3f7a3a"/><circle cx="' + (t[0] + 10) + '" cy="' + (t[1] - 2) + '" r="12" fill="#4f8f45"/>').join("");
    const pillar = (x) => '<rect x="' + x + '" y="150" width="26" height="70" fill="#b8b2a4"/><rect x="' + (x - 4) + '" y="146" width="34" height="8" fill="#a39d8f"/><rect x="' + (x - 2) + '" y="214" width="30" height="8" fill="#a39d8f"/>' +
      '<path d="M' + (x + 8) + ' 146v-14q5 -8 10 0v14z" fill="#3f6a5e"/><circle cx="' + (x + 13) + '" cy="128" r="5" fill="#3f6a5e"/>';
    const drops = [-30, -16, 0, 16, 30].map((d, i) => '<circle class="bz-drop" style="--dx:' + d + 'px;animation-delay:' + (-i * 0.24) + 's" cx="200" cy="112" r="2.2" fill="#e8f6ff"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bzs3)"/>' +
      '<path d="M0 120q100 -30 200 -10t200 0v30H0z" fill="#6f9a5c"/>' + trees +
      '<ellipse cx="200" cy="168" rx="190" ry="34" fill="#3d7fae"/><ellipse cx="200" cy="168" rx="190" ry="34" fill="none" stroke="#c9c2b2" stroke-width="5"/>' +
      '<path class="bz-rip" d="M70 166q20 -4 40 0t40 0" stroke="#9cc8e8" stroke-width="2" fill="none"/><path class="bz-rip bz-rip2" d="M250 174q20 -4 40 0t40 0" stroke="#9cc8e8" stroke-width="2" fill="none"/>' +
      '<g class="bz-jet"><path d="M194 168q6 -60 12 0z" fill="#dff1ff" opacity=".9"/><path d="M184 168q16 -36 32 0z" fill="#c2e3fb" opacity=".8"/></g>' + drops +
      '<rect x="0" y="200" width="400" height="60" fill="#5d8e4a"/><path d="M0 222q200 -12 400 0v14H0z" fill="#d6cfc0"/>' +
      pillar(40) + pillar(334) +
      '<g class="bz-jog"><g class="bz-bob"><circle cx="0" cy="206" r="4" fill="#2a2a2a"/><rect x="-3" y="210" width="6" height="12" rx="2" fill="' + GOLD + '"/><path d="M-2 222l-4 8M2 222l4 8" stroke="#2a2a2a" stroke-width="2.5"/></g></g>',
      sky("bzs3", "#8cc4ef", "#f2f7e8"));
  }

  /* 4. Steel City: blast furnace by the river */
  function bzsteel() {
    const sparks = [[-30, -40], [-12, -52], [8, -46], [26, -38], [-40, -16], [36, -20], [0, -60]].map((d, i) => '<circle class="bz-spk" style="--dx:' + d[0] + 'px;--dy:' + d[1] + 'px;animation-delay:' + (-i * 0.14) + 's" cx="214" cy="176" r="2" fill="#ffd25a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#bzs4)"/>' +
      '<g class="bz-smk"><circle cx="96" cy="40" r="16" fill="#8a7f7a"/></g><g class="bz-smk bz-smk2"><circle cx="300" cy="34" r="14" fill="#7a706c"/></g>' +
      '<rect x="88" y="44" width="16" height="96" fill="#3a3436"/><rect x="292" y="40" width="14" height="100" fill="#3a3436"/>' +
      '<path d="M130 150v-70q20 -16 40 0v70z" fill="#4a4245"/><rect x="128" y="70" width="44" height="8" fill="#5a5255"/><path d="M150 62v-24" stroke="#4a4245" stroke-width="10"/>' +
      '<path d="M172 96h70v12h-70z" fill="#5a5255"/><path d="M236 108v42" stroke="#5a5255" stroke-width="8"/>' +
      '<rect x="30" y="110" width="80" height="40" fill="#3f393c"/><rect x="250" y="100" width="120" height="50" fill="#453e41"/>' +
      '<path d="M250 100l20 -14h80l20 14z" fill="#3a3436"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (262 + i * 22) + '" y="112" width="12" height="18" fill="#ffb347" class="bz-flk' + (i % 2 ? ' bz-flk2' : '') + '"/>').join("") +
      '<rect x="0" y="150" width="400" height="60" fill="#2d2729"/>' +
      '<g transform="rotate(-28 186 150)"><path d="M168 132h40l-6 34h-28z" fill="#5e5558" stroke="#2a2426" stroke-width="2"/><ellipse cx="188" cy="132" rx="20" ry="5" fill="#ff8a1e"/></g>' +
      '<path class="bz-pour" d="M204 138q10 10 10 38" stroke="#ffb02e" stroke-width="7" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="214" cy="182" rx="34" ry="8" fill="#ff7a1a"/><ellipse cx="214" cy="180" rx="22" ry="4" fill="#ffd25a"/>' + sparks +
      '<rect x="0" y="206" width="400" height="54" fill="#2b4a63"/>' +
      '<path class="bz-rip" d="M20 222q30 -5 60 0t60 0" stroke="#5f8fb0" stroke-width="2" fill="none"/><path class="bz-rip bz-rip2" d="M220 236q30 -5 60 0t60 0" stroke="#5f8fb0" stroke-width="2" fill="none"/>' ,
      sky("bzs4", "#2a1e2a", "#c4553a"));
  }

  /* 5. Larimer Ave and Meadow St */
  function bzcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bzs5)"/>' +
      '<g class="bz-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#2a2a3a" stroke-width="2" fill="none"/></g><g class="bz-bird bz-bird2"><path d="M0 56q4 -4 8 0q4 -4 8 0" stroke="#2a2a3a" stroke-width="2" fill="none"/></g>' +
      '<g fill="#2e3048"><rect x="0" y="100" width="60" height="36"/><rect x="250" y="96" width="50" height="40"/><rect x="306" y="106" width="94" height="30"/></g>' +
      elpc(160, 136, 1.0, "#c9b48c", "#a8936c") +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("BOAZ", 24, 192, 60, GOLD, -6) + tag("POINT BLANK", 120, 216, 18, "#7fb8ff", -4) + tag("LARIMER", 28, 214, 16, "#ff8a6b", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(240, 98, 150, "Larimer Av") + sign(262, 124, 110, "Meadow St") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="bz-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="bz-sp"><circle cx="196" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="bz-sp bz-sp2"><circle cx="202" cy="162" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("bzs5", "#2a3360", "#f0a46a"));
  }

  window.SCENES = { bzstation: bzstation, bzschool: bzschool, bzpark: bzpark, bzsteel: bzsteel, bzcorner: bzcorner };
})();
