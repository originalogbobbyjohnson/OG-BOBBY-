/* derekminor scenes (Regions tab: Memphis + Tennessee; Derek Minor, born Derek Johnson Jr. in Pontiac, Michigan, moved young with his mom to Middle Tennessee, came up in the Nashville scene, Reflection Music Group / Reach Records). CSS classes prefixed dm- (the page's own anim-train is kept).
   1 WeGo Central, downtown Nashville: the Route 84 Murfreesboro express pulling in under the white canopy.
   2 The Parthenon in Centennial Park: the full-size sand-colored temple, ducks crossing Lake Watauga.
   3 Music Row: the little studio houses, a session going, meters bouncing on the board ("put fire on wax").
   4 Bicentennial Capitol Mall: the carillon's bell columns, a bell ringing, the granite Tennessee map in the plaza.
   5 Demonbreun St and 16th Ave S at the Music Row roundabout: green signs, MINOR and RMG tagged, downtown skyline behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dmtw{0%,100%{opacity:.25}50%{opacity:1}}.dm-tw{animation:dmtw 1.8s ease-in-out infinite}.dm-tw2{animation-delay:-.9s}' +
    '@keyframes dmcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.dm-cl{animation:dmcloud 26s linear infinite}.dm-cl2{animation-delay:-13s}' +
    '@keyframes dmduck{0%{transform:translateX(0)}50%{transform:translateX(70px)}100%{transform:translateX(0)}}.dm-duck{animation:dmduck 10s ease-in-out infinite}.dm-duck2{animation-delay:-5s}' +
    '@keyframes dmrip{0%,100%{opacity:.2}50%{opacity:.7}}.dm-rip{animation:dmrip 2.2s ease-in-out infinite}.dm-rip2{animation-delay:-1.1s}' +
    '@keyframes dmvu{0%,100%{transform:scaleY(.3)}30%{transform:scaleY(1)}60%{transform:scaleY(.55)}80%{transform:scaleY(.85)}}.dm-vu{transform-box:fill-box;transform-origin:bottom;animation:dmvu .9s ease-in-out infinite}.dm-vu2{animation-delay:-.3s}.dm-vu3{animation-delay:-.6s}' +
    '@keyframes dmon{0%,100%{opacity:1}50%{opacity:.45}}.dm-on{animation:dmon 1.6s ease-in-out infinite}' +
    '@keyframes dmbell{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.dm-bell{transform-box:fill-box;transform-origin:top center;animation:dmbell 1.4s ease-in-out infinite}' +
    '@keyframes dmnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(30px,-60px);opacity:0}}.dm-note{animation:dmnote 2.8s linear infinite}.dm-note2{animation-delay:-1.4s}' +
    '@keyframes dmcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.dm-car{animation:dmcar 7s linear infinite}.dm-car2{animation-delay:-3.5s}' +
    '@keyframes dmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dm-sp{animation:dmspray 1.4s ease-out infinite}.dm-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#f2c14e", PURP = "#8a5cd6", RED = "#e94f37", WBLUE = "#1f5fae", WGREEN = "#5aa832";
  const stars = (n, h) => Array.from({ length: n }, (_, i) => '<circle class="dm-tw' + (i % 2 ? ' dm-tw2' : '') + '" cx="' + ((i * 53) % 400) + '" cy="' + ((i * 31) % h) + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff"/>').join("");
  const cloud = (x, y, s, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="12" ry="7"/></g></g>';
  /* generic downtown Nashville towers (no single famous tower) */
  const skyline = (base, fill, lit) => '<g fill="' + fill + '">' +
    '<rect x="10" y="' + (base - 56) + '" width="34" height="56"/><rect x="50" y="' + (base - 84) + '" width="28" height="84"/><rect x="84" y="' + (base - 40) + '" width="40" height="40"/>' +
    '<rect x="132" y="' + (base - 100) + '" width="30" height="100"/><path d="M132 ' + (base - 100) + 'l15 -12l15 12z"/><rect x="170" y="' + (base - 64) + '" width="36" height="64"/>' +
    '<rect x="214" y="' + (base - 92) + '" width="26" height="92"/><rect x="248" y="' + (base - 48) + '" width="44" height="48"/><rect x="300" y="' + (base - 76) + '" width="30" height="76"/><rect x="338" y="' + (base - 58) + '" width="50" height="58"/></g>' +
    (lit ? Array.from({ length: 26 }, (_, i) => '<rect class="dm-tw' + (i % 2 ? ' dm-tw2' : '') + '" x="' + ([18, 56, 64, 92, 108, 138, 148, 176, 190, 220, 228, 256, 272, 306, 316, 346, 366][i % 17]) + '" y="' + (base - 10 - (i * 13) % 50) + '" width="4" height="4" fill="#ffe7a0"/>').join("") : "");

  /* 1. WeGo Central */
  function dmstop() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (64 + i * 44) + '" y="132" width="34" height="22" rx="3" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="50" y="120" width="270" height="68" rx="10" fill="#f4f6f8" stroke="#7d8790" stroke-width="2"/>' + win +
      '<rect x="50" y="160" width="270" height="9" fill="' + WBLUE + '"/><rect x="50" y="169" width="270" height="4" fill="' + WGREEN + '"/>' +
      '<rect x="292" y="128" width="26" height="40" rx="3" fill="#2a3b4c"/><rect x="60" y="123" width="120" height="7" rx="2" fill="#111"/><text x="120" y="129" text-anchor="middle" ' + font + ' font-size="5.5" fill="#ffb347">84 MURFREESBORO</text>' +
      '<circle cx="96" cy="190" r="11" fill="#1a1a1a"/><circle cx="96" cy="190" r="4" fill="#888"/><circle cx="270" cy="190" r="11" fill="#1a1a1a"/><circle cx="270" cy="190" r="4" fill="#888"/>' +
      '<circle cx="316" cy="178" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dms1)"/>' + cloud(60, 30, 1, "dm-cl") + cloud(240, 46, .8, "dm-cl dm-cl2") + skyline(118, "#8a9bb4", false) +
      /* white canopy on slim posts */
      '<path d="M0 92 Q200 70 400 92 L400 102 Q200 82 0 102z" fill="#f2f4f6" stroke="#b9c1c9" stroke-width="1.5"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (20 + i * 72) + '" y="100" width="4" height="96" fill="#9aa4ad"/>').join("") +
      '<rect x="0" y="196" width="400" height="64" fill="#4a4c52"/><path d="M0 230h400" stroke="#e8d36a" stroke-width="2" stroke-dasharray="16 12"/>' + bus +
      '<rect x="0" y="194" width="400" height="5" fill="#b8b2a6"/>' +
      '<rect x="40" y="208" width="290" height="36" rx="3" fill="#111"/><text x="54" y="232" ' + font + ' font-size="16" fill="#fff">WeGo Central</text>' + badge(220, 226, "55", WBLUE) + badge(260, 226, "84", WGREEN),
      sky("dms1", "#6fb2e6", "#d7ecfa"));
  }

  /* 2. The Parthenon, Centennial Park */
  function dmparthenon() {
    const cols = Array.from({ length: 8 }, (_, i) => '<rect x="' + (112 + i * 23) + '" y="104" width="12" height="62" fill="#e6d3a8"/><rect x="' + (110 + i * 23) + '" y="100" width="16" height="5" fill="#d8c290"/><path d="M' + (115 + i * 23) + ' 106v58M' + (121 + i * 23) + ' 106v58" stroke="#cdb784" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dms2)"/>' + cloud(40, 40, 1.1, "dm-cl") + cloud(260, 26, .9, "dm-cl dm-cl2") +
      '<g fill="#4f7d3c"><ellipse cx="40" cy="160" rx="50" ry="34"/><ellipse cx="370" cy="156" rx="48" ry="36"/></g>' +
      '<rect x="0" y="160" width="400" height="40" fill="#76a84f"/>' +
      /* temple */
      '<rect x="100" y="166" width="200" height="8" fill="#d8c290"/><rect x="94" y="172" width="212" height="8" fill="#cbb47f"/>' + cols +
      '<rect x="104" y="90" width="192" height="12" fill="#e2cd9c"/><path d="M100 90 L200 58 L300 90z" fill="#ead9b0" stroke="#cbb47f" stroke-width="2"/>' +
      '<path d="M124 86 L200 64 L276 86z" fill="#dcc697"/>' +
      /* lake */
      '<rect x="0" y="198" width="400" height="62" fill="#4a86a8"/>' +
      '<path class="dm-rip" d="M30 214h50M150 228h70M280 216h60" stroke="#bfe0ef" stroke-width="2"/><path class="dm-rip dm-rip2" d="M90 240h60M230 246h50M330 236h40" stroke="#bfe0ef" stroke-width="2"/>' +
      '<g class="dm-duck"><path d="M70 222q10 -8 20 0z" fill="#6b4f2a"/><circle cx="90" cy="216" r="4" fill="#2f6b3a"/><path d="M93 216l5 1l-5 2z" fill="#f2a33a"/></g>' +
      '<g class="dm-duck dm-duck2"><path d="M250 236q10 -8 20 0z" fill="#8a6a3a"/><circle cx="270" cy="230" r="4" fill="#7a5a32"/><path d="M273 230l5 1l-5 2z" fill="#f2a33a"/></g>',
      sky("dms2", "#7cc0ec", "#f2e6c8"));
  }

  /* 3. Music Row studio */
  function dmrow() {
    const house = (x, col, roof) => '<g><rect x="' + x + '" y="120" width="90" height="80" fill="' + col + '"/><path d="M' + (x - 6) + ' 122 L' + (x + 45) + ' 88 L' + (x + 96) + ' 122z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 12) + '" y="136" width="22" height="24" fill="#2b3346"/><rect x="' + (x + 56) + '" y="136" width="22" height="24" fill="#2b3346"/><rect x="' + (x + 36) + '" y="170" width="18" height="30" fill="#3a2418"/></g>';
    const vu = Array.from({ length: 10 }, (_, i) => '<rect class="dm-vu' + (i % 3 === 1 ? ' dm-vu2' : i % 3 === 2 ? ' dm-vu3' : '') + '" x="' + (232 + i * 11) + '" y="180" width="7" height="30" fill="' + (i < 7 ? "#5ad16a" : i < 9 ? GOLD : RED) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dms3)"/>' + stars(12, 70) +
      house(10, "#b86a4a", "#4a2e2a") + house(116, "#d9d2c3", "#3a3a4a") +
      /* big studio window with the board */
      '<rect x="220" y="96" width="172" height="134" rx="4" fill="#232a3c" stroke="#8a7a5a" stroke-width="4"/>' +
      '<rect x="228" y="104" width="156" height="60" fill="#121828"/>' +
      '<g transform="translate(300 118)"><rect x="-4" y="0" width="8" height="22" rx="4" fill="#cfcfcf"/><rect x="-1.5" y="22" width="3" height="18" fill="#888"/><path d="M-10 40h20" stroke="#888" stroke-width="3"/></g>' +
      '<g class="dm-note"><text x="330" y="150" font-size="16" fill="' + GOLD + '">&#9834;</text></g><g class="dm-note dm-note2"><text x="250" y="156" font-size="14" fill="' + PURP + '">&#9835;</text></g>' +
      '<rect x="226" y="172" width="160" height="50" fill="#3b3f4a"/>' + vu +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (234 + i * 11) + '" cy="216" r="2.5" fill="#d8d8d8"/>').join("") +
      '<rect class="dm-on" x="258" y="82" width="70" height="16" rx="3" fill="' + RED + '"/><text x="293" y="94" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ON AIR</text>' +
      '<rect x="0" y="200" width="220" height="60" fill="#5b5b5f"/><rect x="0" y="230" width="400" height="30" fill="#45464b"/>' +
      sign(30, 206, 130, "Music Sq E"),
      sky("dms3", "#1c1f45", "#5a3a7a"));
  }

  /* 4. Bicentennial Capitol Mall carillon */
  function dmmall() {
    const colX = [24, 66, 108, 150, 192, 234, 276, 318, 360];
    const cols = colX.map((x, i) => '<g><rect x="' + (x - 7) + '" y="' + (70 + Math.abs(4 - i) * 6) + '" width="14" height="' + (110 - Math.abs(4 - i) * 6) + '" fill="#d7d2c8"/>' +
      '<rect x="' + (x - 10) + '" y="' + (64 + Math.abs(4 - i) * 6) + '" width="20" height="8" fill="#bdb6aa"/>' +
      [0, 1, 2].map(k => '<path d="M' + (x - 5) + ' ' + (88 + Math.abs(4 - i) * 6 + k * 26) + 'q5 -12 10 0z" fill="#b08a3a"/>').join("") + '</g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dms4)"/>' + cloud(80, 30, 1, "dm-cl") + cloud(300, 40, .8, "dm-cl dm-cl2") +
      '<rect x="0" y="170" width="400" height="20" fill="#6c9a48"/>' + cols +
      /* the swinging bell, big, center */
      '<g class="dm-bell"><rect x="196" y="116" width="8" height="8" fill="#6a5020"/><path d="M186 152 Q186 124 200 124 Q214 124 214 152 L218 158 H182z" fill="#c99a3a" stroke="#6a5020" stroke-width="2"/><circle cx="200" cy="160" r="3" fill="#6a5020"/></g>' +
      /* granite Tennessee map plaza */
      '<rect x="0" y="188" width="400" height="72" fill="#9a9490"/>' +
      '<path d="M60 206 L330 200 L342 214 L336 238 L52 244 L56 222z" fill="#6f6964" stroke="#4e4a46" stroke-width="2"/>' +
      '<path d="M140 204 L136 242 M250 202 L254 240" stroke="#c9c2b8" stroke-width="2" stroke-dasharray="4 3"/>' +
      '<circle cx="196" cy="220" r="4" fill="' + GOLD + '"/><circle class="dm-tw" cx="196" cy="220" r="8" fill="none" stroke="' + GOLD + '" stroke-width="1.5"/>',
      sky("dms4", "#8fc7ee", "#f4ead6"));
  }

  /* 5. Demonbreun St and 16th Ave S */
  function dmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dms5)"/>' + stars(16, 60) + skyline(130, "#2a2f55", true) +
      '<rect x="0" y="122" width="400" height="100" fill="#3e3550"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (130 + i * 8) + 'h400" stroke="#332c44" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (122 + i * 8) + 'v8" stroke="#332c44" stroke-width="1"/>').join("")).join("") +
      tag("MINOR", 20, 194, 52, GOLD, -6) + tag("RMG", 214, 168, 30, PURP, -4) + tag("MINORVILLE", 28, 214, 18, "#7fd1ff", -3) + tag("116", 222, 206, 20, RED, -3) +
      '<rect x="0" y="222" width="400" height="38" fill="#5d5a55"/><rect x="0" y="220" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="dm-car"><rect x="0" y="234" width="60" height="14" rx="5" fill="#c94a3a"/><circle cx="12" cy="249" r="4" fill="#111"/><circle cx="48" cy="249" r="4" fill="#111"/></g>' +
      '<rect x="336" y="94" width="6" height="128" fill="#2f2f2f"/>' + sign(270, 96, 130, "Demonbreun St") + sign(280, 122, 112, "16th Ave S") +
      '<rect x="8" y="108" width="4" height="114" fill="#222"/><circle class="dm-tw" cx="10" cy="106" r="7" fill="#ffe9a8"/>' +
      '<g class="dm-sp"><circle cx="262" cy="168" r="3" fill="' + PURP + '" opacity=".7"/></g><g class="dm-sp dm-sp2"><circle cx="268" cy="162" r="2" fill="' + PURP + '" opacity=".6"/></g>',
      sky("dms5", "#15183a", "#d0784a"));
  }

  window.SCENES = { dmstop: dmstop, dmparthenon: dmparthenon, dmrow: dmrow, dmmall: dmmall, dmcorner: dmcorner };
})();
