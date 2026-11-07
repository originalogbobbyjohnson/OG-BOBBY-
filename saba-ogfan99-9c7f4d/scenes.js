/* saba scenes (Regions tab: Chicago; Austin, West Side). CSS classes and ids prefixed sb- (the page's own anim-train is kept).
   1 Central on the CTA Green Line: the steel L structure over Lake St in Austin, a silver Green Line train sliding in.
   2 Columbus Park, Austin: Jens Jensen's prairie lagoon and the cream stucco refectory with its red tile roof, ducks gliding.
   3 Grandmama's basement ("I just made a way for myself from out west and my grandmama basement"): the home studio, mic, monitors shaking.
   4 Lake Shore Drive at night ("Lake Shore Drive, headed to paradise"): the lake, the curve of headlights, the black Hancock tower.
   5 W Madison St and N Pine Ave in Austin ("Madhouse on Madison", "I caught the bus off of Pine"): green signs, SABA tagged,
     Austin Town Hall's white clock tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sbflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sb-flk{animation:sbflick 2.2s infinite}.sb-flk2{animation-delay:.7s}' +
    '@keyframes sbcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.sb-car{animation:sbcar 7s linear infinite}.sb-car2{animation-delay:-3.5s}' +
    '@keyframes sbcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.sb-carL{animation:sbcarL 8s linear infinite}.sb-carL2{animation-delay:-4s}' +
    '@keyframes sbhead{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.sb-hl{animation:sbhead 5s linear infinite}.sb-hl2{animation-delay:-1.7s}.sb-hl3{animation-delay:-3.4s}' +
    '@keyframes sbtail{from{transform:translateX(460px)}to{transform:translateX(-60px)}}.sb-tl{animation:sbtail 6s linear infinite}.sb-tl2{animation-delay:-2s}.sb-tl3{animation-delay:-4s}' +
    '@keyframes sbduck{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}.sb-duck{animation:sbduck 9s ease-in-out infinite}.sb-duck2{animation-delay:-4.5s}' +
    '@keyframes sbrip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.sb-rip{animation:sbrip 3s ease-in-out infinite}.sb-rip2{animation-delay:-1.5s}' +
    '@keyframes sbshake{0%,100%{transform:translate(0,0)}25%{transform:translate(1px,-1px)}75%{transform:translate(-1px,1px)}}.sb-shk{animation:sbshake .25s linear infinite}' +
    '@keyframes sbcone{0%,100%{transform:scale(1)}50%{transform:scale(.82)}}.sb-cone{transform-box:fill-box;transform-origin:50% 50%;animation:sbcone .5s ease-in-out infinite}' +
    '@keyframes sbnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-50px);opacity:0}}.sb-note{animation:sbnote 2.4s ease-out infinite}.sb-note2{animation-delay:-1.2s}' +
    '@keyframes sbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sb-sp{animation:sbspray 1.4s ease-out infinite}.sb-sp2{animation-delay:.45s}' +
    '@keyframes sbblink{0%,100%{opacity:.25}50%{opacity:1}}.sb-bl{animation:sbblink 1.6s ease-in-out infinite}.sb-bl2{animation-delay:-.8s}' +
    '@keyframes sbleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-40px,90px) rotate(160deg);opacity:0}}.sb-leaf{animation:sbleaf 5s linear infinite}.sb-leaf2{animation-delay:-2.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const CTAG = "#009b3a", GOLD = "#f2c94c", BLUE = "#5fb3ff";

  /* 1. Central (Green Line), elevated over Lake St */
  function sbstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (46 + i * 48) + '" y="104" width="32" height="22" rx="3" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="26" y="94" width="328" height="64" rx="7" fill="#d4d8dc" stroke="#7a828a" stroke-width="2"/>' + win +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (34 + i * 20) + ' 132v22" stroke="#b9bfc5" stroke-width="1.5"/>').join("") +
      '<rect x="26" y="128" width="328" height="3" fill="#c60c30"/><rect x="26" y="131" width="328" height="3" fill="#fff"/><rect x="26" y="134" width="328" height="3" fill="#00a1de"/>' +
      '<rect x="334" y="98" width="18" height="56" rx="4" fill="#b3b9bf"/><circle cx="344" cy="150" r="3.5" fill="#fff6c2"/>' +
      '<rect x="270" y="98" width="60" height="12" rx="2" fill="#111"/><text x="300" y="107" text-anchor="middle" ' + font + ' font-size="8" fill="' + CTAG + '">HARLEM/LAKE</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sbs1)"/>' +
      '<g fill="#3b3346"><rect x="0" y="30" width="54" height="60"/><rect x="60" y="44" width="40" height="46"/><rect x="300" y="38" width="46" height="52"/><rect x="350" y="26" width="50" height="64"/></g>' +
      '<g fill="#ffd98a" opacity=".7"><rect x="10" y="40" width="6" height="8"/><rect x="28" y="56" width="6" height="8"/><rect x="312" y="48" width="6" height="8"/><rect x="364" y="40" width="6" height="8"/></g>' +
      '<path d="M0 70h400" stroke="#4d5560" stroke-width="5"/>' + [40, 150, 250, 360].map(x => '<rect x="' + (x - 3) + '" y="70" width="6" height="26" fill="#4d5560"/><path d="M' + (x - 20) + ' 70l20 -14l20 14" stroke="#4d5560" stroke-width="3" fill="none"/>').join("") +
      '<g class="sb-flk"><rect x="90" y="74" width="36" height="4" fill="#fff3c4"/></g><g class="sb-flk sb-flk2"><rect x="270" y="74" width="36" height="4" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="160" width="400" height="7" fill="#f2c200"/><rect x="0" y="167" width="400" height="20" fill="#8e8a82"/>' +
      '<rect x="0" y="187" width="400" height="14" fill="#5a4636"/>' + Array.from({ length: 21 }, (_, i) => '<path d="M' + (i * 20) + ' 187l10 14l10 -14" stroke="#3e3026" stroke-width="2" fill="none"/>').join("") +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="201" width="12" height="59" fill="#4a3a2e"/><rect x="' + (x - 4) + '" y="201" width="20" height="5" fill="#3a2d23"/>').join("") +
      '<rect x="0" y="236" width="400" height="24" fill="#3a3a3f"/><path d="M0 248h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("sb-car", 0, 240, "#c0392b") +
      '<rect x="104" y="172" width="196" height="32" rx="3" fill="#111"/><text x="120" y="194" ' + font + ' font-size="17" fill="#fff">Central</text>' + badge(234, 188, "GRN", CTAG) +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".85">LAKE ST · AUSTIN · WEST SIDE</text>',
      sky("sbs1", "#232847", "#e08a5c"));
  }

  /* 2. Columbus Park refectory + lagoon */
  function sbcolumbus() {
    const arches = Array.from({ length: 5 }, (_, i) => '<path d="M' + (138 + i * 26) + ' 150v-22q10 -14 20 0v22z" fill="#5a4636"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sbs2)"/>' +
      '<g fill="#3f7a3a"><ellipse cx="40" cy="120" rx="60" ry="36"/><ellipse cx="350" cy="116" rx="70" ry="40"/><ellipse cx="110" cy="128" rx="40" ry="24"/></g>' +
      '<g fill="#2f5e2c"><ellipse cx="300" cy="128" rx="40" ry="22"/><ellipse cx="20" cy="134" rx="30" ry="18"/></g>' +
      '<rect x="120" y="112" width="160" height="42" fill="#efe2c4"/><path d="M112 114l88 -26l88 26z" fill="#b5532f"/><path d="M112 114h176" stroke="#8a3a20" stroke-width="3"/>' +
      '<rect x="176" y="80" width="48" height="34" fill="#efe2c4"/><path d="M170 82l30 -14l30 14z" fill="#b5532f"/>' + arches +
      '<rect x="0" y="150" width="400" height="12" fill="#6e9c4a"/>' +
      '<rect x="0" y="160" width="400" height="100" fill="#3f6f86"/>' +
      '<g opacity=".22"><rect x="120" y="162" width="160" height="30" fill="#efe2c4"/><rect x="176" y="192" width="48" height="16" fill="#efe2c4"/></g>' +
      '<g class="sb-rip"><path d="M10 200h60M140 214h80M280 204h70M40 238h90M240 246h110" stroke="#a8d4e6" stroke-width="2" stroke-linecap="round" opacity=".7"/></g>' +
      '<g class="sb-rip sb-rip2"><path d="M90 224h50M300 226h60M170 252h70" stroke="#d2ecf5" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<g fill="#d9c27a"><path d="M0 160q20 -14 30 0zM370 160q14 -18 30 0z"/></g><g stroke="#7e8f3a" stroke-width="2"><path d="M8 160v-20M16 160v-26M24 160v-18M380 160v-22M390 160v-28"/></g>' +
      '<g class="sb-duck"><ellipse cx="80" cy="222" rx="12" ry="6" fill="#6b4a2a"/><circle cx="90" cy="214" r="5" fill="#1f6b3a"/><path d="M95 214l6 1l-6 2z" fill="' + GOLD + '"/></g>' +
      '<g class="sb-duck sb-duck2"><ellipse cx="210" cy="236" rx="10" ry="5" fill="#8a6a44"/><circle cx="218" cy="229" r="4" fill="#8a6a44"/><path d="M222 229l5 1l-5 2z" fill="' + GOLD + '"/></g>' +
      '<g class="sb-leaf"><path d="M330 40q6 -6 10 0q-6 6 -10 0z" fill="#e0a43a"/></g><g class="sb-leaf sb-leaf2"><path d="M260 30q6 -6 10 0q-6 6 -10 0z" fill="#c9652b"/></g>' +
      '<text x="200" y="24" text-anchor="middle" ' + font + ' font-size="10" fill="#22313a">COLUMBUS PARK · AUSTIN</text>',
      sky("sbs2", "#9fcbe8", "#f3ecd8"));
  }

  /* 3. Grandmama's basement studio */
  function sbbasement() {
    const panels = Array.from({ length: 8 }, (_, i) => Array.from({ length: 3 }, (_, j) => '<rect x="' + (8 + i * 48) + '" y="' + (16 + j * 34) + '" width="44" height="30" fill="' + ((i + j) % 2 ? "#2b2f3a" : "#323745") + '"/>' +
      '<path d="M' + (12 + i * 48) + ' ' + (22 + j * 34) + 'h36M' + (12 + i * 48) + ' ' + (30 + j * 34) + 'h36M' + (12 + i * 48) + ' ' + (38 + j * 34) + 'h36" stroke="#262a33" stroke-width="2"/>').join("")).join("");
    const monitor = (x) => '<g class="sb-shk"><rect x="' + x + '" y="128" width="40" height="56" rx="4" fill="#1a1a1e" stroke="#444" stroke-width="2"/><circle cx="' + (x + 20) + '" cy="140" r="6" fill="#333"/>' +
      '<g class="sb-cone"><circle cx="' + (x + 20) + '" cy="166" r="13" fill="#2a2a2e" stroke="' + GOLD + '" stroke-width="2"/><circle cx="' + (x + 20) + '" cy="166" r="5" fill="#555"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="#1b1d24"/>' + panels +
      '<rect x="296" y="20" width="70" height="26" fill="#3a6a8a"/><rect x="296" y="20" width="70" height="26" fill="none" stroke="#8a7a5a" stroke-width="3"/><path d="M296 46h70" stroke="#555" stroke-width="2"/>' +
      '<rect x="0" y="120" width="400" height="6" fill="#4a3a2e"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#6b4a3a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (200 + i * 8) + 'h400" stroke="#5a3c2e" stroke-width="1.5"/>').join("") +
      '<ellipse cx="200" cy="232" rx="150" ry="20" fill="#8a3a2a" opacity=".8"/><ellipse cx="200" cy="232" rx="130" ry="14" fill="none" stroke="' + GOLD + '" stroke-width="2" opacity=".6"/>' +
      '<rect x="110" y="168" width="180" height="30" rx="3" fill="#2a2a30"/><rect x="118" y="162" width="164" height="12" rx="2" fill="#3a3a44"/>' +
      Array.from({ length: 14 }, (_, i) => '<rect x="' + (124 + i * 11) + '" y="' + (164 + (i % 3) * 2) + '" width="5" height="5" fill="' + ["#5fb3ff", "#f2c94c", "#3ddc84"][i % 3] + '" class="' + (i % 2 ? "sb-bl" : "sb-bl sb-bl2") + '"/>').join("") +
      monitor(60) + monitor(300) +
      '<rect x="186" y="128" width="28" height="18" rx="2" fill="#0d0d10" stroke="#5fb3ff" stroke-width="1.5"/><path d="M190 140l5 -6l5 4l5 -8l5 6" stroke="#3ddc84" stroke-width="1.5" fill="none"/>' +
      '<path d="M340 196V84" stroke="#888" stroke-width="3"/><path d="M340 96l-30 18" stroke="#888" stroke-width="3"/><rect x="298" y="104" width="16" height="26" rx="8" fill="#c9cdd2" stroke="#666" stroke-width="2" transform="rotate(-30 306 117)"/>' +
      '<circle cx="292" cy="120" r="16" fill="none" stroke="#444" stroke-width="2"/><path d="M330 196l10 -10l10 10" stroke="#888" stroke-width="3" fill="none"/>' +
      '<g class="sb-note"><text x="230" y="120" ' + font + ' font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="sb-note sb-note2"><text x="150" y="118" ' + font + ' font-size="16" fill="' + BLUE + '">&#9835;</text></g>' +
      '<rect x="24" y="60" width="44" height="54" fill="#efe2c4" stroke="#8a6a3a" stroke-width="3"/><circle cx="46" cy="84" r="14" fill="#1a1a1a"/><circle cx="46" cy="84" r="4" fill="' + GOLD + '"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0">GRANDMAMA&#8217;S BASEMENT · OUT WEST</text>');
  }

  /* 4. Lake Shore Drive at night */
  function sblakeshore() {
    const hancock = '<path d="M262 150V40h34v110z" fill="#15161a"/><path d="M266 44l26 18M292 44l-26 18M266 62l26 18M292 62l-26 18M266 80l26 18M292 80l-26 18M266 98l26 18M292 98l-26 18M266 116l26 18M292 116l-26 18" stroke="#3a3d46" stroke-width="1.5"/>' +
      '<rect x="268" y="10" width="3" height="30" fill="#15161a"/><rect x="287" y="10" width="3" height="30" fill="#15161a"/><circle class="sb-bl" cx="269.5" cy="10" r="2" fill="#ff4040"/><circle class="sb-bl sb-bl2" cx="288.5" cy="10" r="2" fill="#ff4040"/>';
    const towers = '<g fill="#1f2230"><rect x="60" y="92" width="26" height="58"/><rect x="90" y="76" width="22" height="74"/><rect x="116" y="100" width="30" height="50"/><rect x="150" y="70" width="18" height="80"/><rect x="172" y="88" width="28" height="62"/><rect x="204" y="96" width="24" height="54"/><rect x="232" y="80" width="26" height="70"/><rect x="300" y="90" width="30" height="60"/><rect x="334" y="104" width="24" height="46"/><rect x="362" y="96" width="38" height="54"/></g>' +
      Array.from({ length: 70 }, (_, i) => '<rect x="' + (62 + (i * 41) % 336) + '" y="' + (80 + (i * 17) % 64) + '" width="3" height="3" fill="#ffd98a" opacity="' + (0.4 + (i % 3) * 0.2) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sbs4)"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + ((i * 29) % 60 + 4) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      '<circle cx="60" cy="36" r="14" fill="#f4ecd0"/><circle cx="66" cy="32" r="12" fill="#151a33"/>' +
      towers + hancock +
      '<rect x="0" y="150" width="400" height="8" fill="#2a2e3a"/>' +
      '<path d="M0 170q200 -16 400 0v26q-200 -16 -400 0z" fill="#3a3c44"/><path d="M0 182q200 -16 400 0" stroke="#d8c060" stroke-width="1.5" stroke-dasharray="10 8" fill="none"/>' +
      '<g class="sb-hl"><circle cx="0" cy="176" r="3" fill="#fffbe0"/><circle cx="8" cy="176" r="3" fill="#fffbe0"/></g><g class="sb-hl sb-hl2"><circle cx="0" cy="174" r="3" fill="#fffbe0"/><circle cx="8" cy="174" r="3" fill="#fffbe0"/></g><g class="sb-hl sb-hl3"><circle cx="0" cy="177" r="3" fill="#fffbe0"/><circle cx="8" cy="177" r="3" fill="#fffbe0"/></g>' +
      '<g class="sb-tl"><circle cx="0" cy="186" r="2.6" fill="#ff3b30"/><circle cx="8" cy="186" r="2.6" fill="#ff3b30"/></g><g class="sb-tl sb-tl2"><circle cx="0" cy="188" r="2.6" fill="#ff3b30"/><circle cx="8" cy="188" r="2.6" fill="#ff3b30"/></g><g class="sb-tl sb-tl3"><circle cx="0" cy="185" r="2.6" fill="#ff3b30"/><circle cx="8" cy="185" r="2.6" fill="#ff3b30"/></g>' +
      '<rect x="0" y="196" width="400" height="8" fill="#c9b98a"/>' +
      '<rect x="0" y="204" width="400" height="56" fill="#16304a"/>' +
      '<g class="sb-rip"><path d="M20 218h60M150 230h80M290 220h70M60 248h90M250 252h100" stroke="#5fb3ff" stroke-width="2" stroke-linecap="round" opacity=".5"/></g>' +
      '<g class="sb-rip sb-rip2"><path d="M100 240h40M330 238h50M200 214h40" stroke="#ffd98a" stroke-width="2" stroke-linecap="round" opacity=".45"/></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#cfe6ff">LAKE SHORE DRIVE · HEADED TO PARADISE</text>',
      sky("sbs4", "#0b0f24", "#2a3460"));
  }

  /* 5. Madison St and Pine Ave, Austin Town Hall behind */
  function sbcorner() {
    const townhall = '<g><rect x="132" y="86" width="140" height="54" fill="#8a3a2a"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (142 + i * 22) + '" y="98" width="10" height="18" fill="#f0e6cc"/>').join("") +
      '<path d="M126 88l76 -18l76 18z" fill="#f4f1e8"/><rect x="184" y="44" width="36" height="28" fill="#f4f1e8"/><circle cx="202" cy="58" r="8" fill="#1d2a3a" stroke="#c9a24a" stroke-width="2"/><path d="M202 58v-5M202 58h4" stroke="#fff" stroke-width="1.5"/>' +
      '<rect x="190" y="30" width="24" height="14" fill="#f4f1e8"/><path d="M190 30l12 -10l12 10z" fill="#f4f1e8"/><path d="M202 20v-10" stroke="#c9a24a" stroke-width="2"/>' +
      '<g fill="#f4f1e8">' + [148, 168, 236, 256].map(x => '<rect x="' + x + '" y="120" width="6" height="20"/>').join("") + '</g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sbs5)"/>' +
      '<g fill="#2b2f45"><rect x="0" y="100" width="70" height="40"/><rect x="290" y="96" width="50" height="44"/><rect x="340" y="106" width="60" height="34"/></g>' +
      townhall +
      '<rect x="0" y="130" width="400" height="94" fill="#8a4a32"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#6f3826" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#6f3826" stroke-width="1"/>').join("")).join("") +
      tag("SABA", 26, 196, 60, BLUE, -6) + tag("PIVOT GANG", 118, 218, 18, GOLD, -4) + tag("WESTSIDE", 24, 216, 15, "#7fe0a0", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(246, 98, 144, "W Madison St") + sign(262, 124, 112, "N Pine Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="sb-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      car("sb-carL", 0, 240, "#5fb3ff") +
      '<g class="sb-sp"><circle cx="190" cy="168" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="sb-sp sb-sp2"><circle cx="196" cy="162" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("sbs5", "#2a3366", "#f0a070"));
  }

  window.SCENES = { sbstation: sbstation, sbcolumbus: sbcolumbus, sbbasement: sbbasement, sblakeshore: sblakeshore, sbcorner: sbcorner };
})();
