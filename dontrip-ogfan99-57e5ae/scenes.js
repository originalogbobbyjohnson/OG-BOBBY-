/* dontrip scenes (Regions tab: Memphis + Tennessee; Parkway Village, Southeast Memphis). CSS classes and ids prefixed dt- (the page's own anim-train is kept).
   1 MATA Route 36 bus pulling into the American Way Transit Center (3921 American Way, Parkway Village).
   2 The Hernando de Soto Bridge: the big double "M" arches over the Mississippi at night, the Mighty Lights running across them.
   3 Beale Street at night: the neon, the brick fronts, music notes drifting out the doors.
   4 Soulsville U.S.A. (McLemore Ave, South Memphis): the tan building and the white marquee with the red band and running bulbs.
   5 Knight Arnold Rd and Sheffield Av in Parkway Village (by Sheffield High): green signs, DON TRIP tagged on the wall, the Pyramid behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dtflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.dt-flk{animation:dtflick 2.2s infinite}.dt-flk2{animation-delay:.7s}.dt-flk3{animation-delay:1.3s}' +
    '@keyframes dtrun{0%{stroke-dashoffset:0}100%{stroke-dashoffset:-60}}.dt-run{animation:dtrun 2.4s linear infinite}' +
    '@keyframes dthue{0%,100%{stroke:#ff5a7a}25%{stroke:#ffd34d}50%{stroke:#5ad1ff}75%{stroke:#9b7bff}}.dt-hue{animation:dthue 6s linear infinite}' +
    '@keyframes dtrip{0%,100%{transform:translateX(0)}50%{transform:translateX(12px)}}.dt-rip{animation:dtrip 3.2s ease-in-out infinite}.dt-rip2{animation-delay:-1.6s}' +
    '@keyframes dtbarge{from{transform:translateX(-200px)}to{transform:translateX(440px)}}.dt-barge{animation:dtbarge 26s linear infinite}' +
    '@keyframes dtnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(26px,-70px);opacity:0}}.dt-note{animation:dtnote 3s ease-out infinite}.dt-note2{animation-delay:-1s}.dt-note3{animation-delay:-2s}' +
    '@keyframes dtbulb{0%,100%{opacity:.3}50%{opacity:1}}.dt-bulb{animation:dtbulb 1s steps(1) infinite}.dt-bulb2{animation-delay:-.5s}' +
    '@keyframes dtspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dt-sp{animation:dtspray 1.4s ease-out infinite}.dt-sp2{animation-delay:.45s}' +
    '@keyframes dtcar{from{transform:translateX(440px)}to{transform:translateX(-120px)}}.dt-car{animation:dtcar 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const MATA = "#1f4e79", RED = "#c8102e", GOLD = "#f2c14e", BLUE = "#4fb3e8";

  /* 1. MATA 36 at the American Way Transit Center */
  function dtstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 160h316v10H36z" fill="' + MATA + '"/><path d="M36 170h316v4H36z" fill="' + RED + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="300" y="118" width="52" height="9" rx="2" fill="#111"/><text x="326" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">36 LAMAR</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dts1)"/>' +
      /* the transit center canopy */
      '<rect x="20" y="50" width="360" height="12" rx="2" fill="#d8dde3"/><path d="M20 62h360" stroke="#9aa3ad" stroke-width="2"/>' +
      [40, 140, 260, 360].map(x => '<rect x="' + (x - 3) + '" y="62" width="6" height="56" fill="#9aa3ad"/>').join("") +
      '<rect x="120" y="70" width="160" height="40" fill="#c9b79a"/><rect x="130" y="78" width="140" height="26" fill="#2b3a4a"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (136 + i * 34) + '" y="82" width="26" height="18" fill="#ffe7a8" opacity=".55"/>').join("") +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="374" y="150" width="5" height="70" fill="#4a4f55"/><rect x="361" y="134" width="32" height="20" rx="2" fill="' + MATA + '"/><text x="377" y="148" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">BUS</text>' +
      '<rect x="40" y="204" width="300" height="44" rx="3" fill="#111"/><text x="52" y="222" ' + font + ' font-size="13" fill="#fff">American Way Transit Center</text><text x="52" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">Parkway Village · Memphis</text>' +
      badge(246, 234, "36", MATA) + badge(278, 234, "37", RED),
      sky("dts1", "#2c3e6b", "#f1b07a"));
  }

  /* 2. Hernando de Soto Bridge, Mighty Lights */
  function dtbridge() {
    const arch = (x0, x1) => 'M' + x0 + ' 150Q' + ((x0 + x1) / 2) + ' 30 ' + x1 + ' 150';
    let hang = "";
    [[40, 200], [200, 360]].forEach(a => { for (let i = 1; i < 10; i++) { const t = i / 10, x = a[0] + (a[1] - a[0]) * t, y = 150 - 240 * t * (1 - t); hang += '<path d="M' + x + ' ' + y + 'V150" stroke="#9fb4c8" stroke-width="1.2" opacity=".8"/>'; } });
    return svg(
      '<rect width="400" height="260" fill="url(#dts2)"/>' + stars(40) +
      '<g fill="#1c2340"><rect x="0" y="120" width="30" height="40"/><rect x="360" y="126" width="40" height="34"/><rect x="372" y="104" width="14" height="22"/></g>' +
      '<rect x="0" y="160" width="400" height="100" fill="#14243e"/>' +
      '<g class="dt-rip"><path d="M20 182h70M150 196h90M290 178h80M60 226h100M240 238h110" stroke="#ffcf66" stroke-width="2" stroke-linecap="round" opacity=".35"/></g>' +
      '<g class="dt-rip dt-rip2"><path d="M100 210h50M310 208h60M170 250h60" stroke="#8fd3ff" stroke-width="2" stroke-linecap="round" opacity=".35"/></g>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 7) + '" y="150" width="14" height="30" fill="#4a5568"/>').join("") +
      '<rect x="0" y="146" width="400" height="7" fill="#5c6b80"/>' + hang +
      '<path d="' + arch(40, 200) + '" stroke="#7f93ab" stroke-width="7" fill="none"/><path d="' + arch(200, 360) + '" stroke="#7f93ab" stroke-width="7" fill="none"/>' +
      '<path class="dt-run dt-hue" d="' + arch(40, 200) + '" stroke-width="3" fill="none" stroke-dasharray="4 6"/><path class="dt-run dt-hue" d="' + arch(200, 360) + '" stroke-width="3" fill="none" stroke-dasharray="4 6"/>' +
      '<path class="dt-run" d="M0 146h400" stroke="#ffe08a" stroke-width="1.5" stroke-dasharray="2 8"/>' +
      '<g class="dt-barge"><rect x="0" y="196" width="120" height="12" fill="#5b3a26"/><rect x="4" y="190" width="34" height="8" fill="#6d4630"/><rect x="44" y="190" width="34" height="8" fill="#6d4630"/><rect x="84" y="190" width="30" height="8" fill="#6d4630"/><rect x="122" y="186" width="26" height="22" fill="#e8e2d0"/><rect x="128" y="178" width="14" height="9" fill="#c8102e"/><rect x="126" y="192" width="18" height="5" fill="#ffd98a"/></g>' +
      '<rect x="92" y="236" width="216" height="18" rx="3" fill="#000" opacity=".55"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">HERNANDO DE SOTO BRIDGE · MISSISSIPPI RIVER</text>',
      sky("dts2", "#0a0f26", "#2e2a5a"));
  }

  /* 3. Beale Street at night */
  function dtbeale() {
    const front = (x, w, c, h) => '<rect x="' + x + '" y="' + (190 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      Array.from({ length: Math.floor(h / 10) }, (_, i) => '<path d="M' + x + ' ' + (190 - h + 6 + i * 10) + 'h' + w + '" stroke="#000" stroke-width=".6" opacity=".25"/>').join("") +
      [0, 1].map(i => '<rect x="' + (x + 8 + i * (w / 2)) + '" y="' + (190 - h + 12) + '" width="' + (w / 2 - 16) + '" height="20" fill="#ffd98a" opacity=".5"/>').join("");
    const neon = (x, y, txt, c, cls, size) => '<text class="dt-flk ' + (cls || "") + '" x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + (size || 13) + '" fill="none" stroke="' + c + '" stroke-width="1.6" style="filter:drop-shadow(0 0 4px ' + c + ')">' + txt + '</text>';
    const note = (x, y, cls, c) => '<g class="dt-note ' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + c + '"/><path d="M' + (x + 3.5) + ' ' + y + 'v-16l8 4" stroke="' + c + '" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dts3)"/>' + stars(24) +
      front(0, 90, "#7a3b2a", 110) + front(90, 80, "#5a4a7a", 90) + front(170, 90, "#8a5a2a", 120) + front(260, 70, "#3f5a6a", 96) + front(330, 70, "#7a2a3a", 112) +
      '<rect x="20" y="96" width="50" height="22" rx="3" fill="#120c18"/>' + neon(45, 112, "BLUES", "#5ad1ff") +
      '<rect x="182" y="78" width="66" height="22" rx="3" fill="#120c18"/>' + neon(215, 94, "LIVE MUSIC", "#ff5a7a", "dt-flk2", 11) +
      '<rect x="270" y="102" width="50" height="22" rx="3" fill="#120c18"/>' + neon(295, 118, "BBQ", "#ffd34d", "dt-flk3") +
      '<rect x="98" y="112" width="64" height="20" rx="3" fill="#120c18"/>' + neon(130, 127, "JUKE", "#9bff7a", "dt-flk2") +
      [30, 120, 210, 300, 370].map(x => '<rect x="' + x + '" y="160" width="20" height="30" fill="#1b1410"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#3d3a40"/><path d="M0 190h400" stroke="#8a8590" stroke-width="3"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 36) + '" y="214" width="20" height="4" fill="#ffd34d" opacity=".25"/>').join("") +
      note(140, 170, "", GOLD) + note(220, 166, "dt-note2", "#ff8fb1") + note(320, 172, "dt-note3", "#8fd3ff") +
      '<rect x="362" y="120" width="5" height="100" fill="#2f2f2f"/>' + sign(300, 120, 96, "Beale St") +
      '<rect x="8" y="232" width="150" height="18" rx="3" fill="#000" opacity=".55"/><text x="83" y="245" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BEALE STREET · MEMPHIS</text>',
      sky("dts3", "#0d0a1e", "#3a1f3e"));
  }

  /* 4. Soulsville U.S.A. marquee on McLemore */
  function dtstax() {
    const bulbs = (x0, x1, y, cls) => Array.from({ length: Math.floor((x1 - x0) / 10) + 1 }, (_, i) => '<circle class="dt-bulb' + (i % 2 ? " dt-bulb2" : "") + '" cx="' + (x0 + i * 10) + '" cy="' + y + '" r="2.2" fill="#fff3b0"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dts4)"/>' +
      '<rect x="40" y="80" width="320" height="120" fill="#d8c29a"/><rect x="40" y="80" width="320" height="8" fill="#b9a27a"/>' +
      [70, 150, 250, 330].map(x => '<rect x="' + (x - 14) + '" y="150" width="28" height="50" fill="#5a3f2a"/>').join("") +
      '<rect x="176" y="150" width="48" height="50" fill="#2a2a2e"/><path d="M200 150v50" stroke="#777" stroke-width="2"/>' +
      /* marquee */
      '<path d="M90 112h220l-14 32H104z" fill="#f4f1ea" stroke="#999" stroke-width="1.5"/><rect x="90" y="46" width="220" height="66" rx="3" fill="#f4f1ea" stroke="#999" stroke-width="1.5"/>' +
      '<rect x="90" y="46" width="220" height="12" fill="' + RED + '"/><rect x="90" y="100" width="220" height="12" fill="' + RED + '"/>' +
      bulbs(96, 304, 52) + bulbs(96, 304, 106) +
      '<text x="200" y="80" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#1a1a1a" letter-spacing="1">SOULSVILLE</text>' +
      '<text x="200" y="96" text-anchor="middle" ' + font + ' font-size="12" fill="' + RED + '" letter-spacing="3">U.S.A.</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#6e6a64"/><path d="M0 200h400" stroke="#aaa59c" stroke-width="3"/>' +
      '<g class="dt-car"><rect x="0" y="216" width="70" height="20" rx="6" fill="#4fb3e8"/><rect x="12" y="206" width="40" height="14" rx="4" fill="#2a6f99"/><circle cx="16" cy="238" r="6" fill="#111"/><circle cx="54" cy="238" r="6" fill="#111"/></g>' +
      '<rect x="8" y="232" width="190" height="18" rx="3" fill="#000" opacity=".55"/><text x="103" y="245" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MCLEMORE AVE · SOUTH MEMPHIS</text>',
      sky("dts4", "#6aa8d8", "#f4dcb0"));
  }

  /* 5. Knight Arnold Rd and Sheffield Av, the Pyramid behind */
  function dtcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dts5)"/>' +
      '<path d="M120 128L200 38L280 128z" fill="#b8c4cf" stroke="#e8eef4" stroke-width="1.5"/><path d="M200 38L230 128H280z" fill="#8e9cab"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (200 - (i + 1) * 13) + ' ' + (38 + (i + 1) * 15) + 'H' + (200 + (i + 1) * 13) + '" stroke="#e8eef4" stroke-width=".8" opacity=".7"/>').join("") +
      '<g fill="#3a3550"><rect x="0" y="100" width="70" height="30"/><rect x="300" y="96" width="44" height="34"/><rect x="344" y="106" width="56" height="24"/></g>' +
      '<rect x="0" y="126" width="400" height="98" fill="#8a4a34"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#703a28" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#703a28" stroke-width="1"/>').join("")).join("") +
      tag("DON TRIP", 18, 200, 44, BLUE, -6) + tag("GODSPEED", 214, 218, 20, GOLD, -3) + tag("DTdaKidd", 36, 148, 18, "#ff8fb1", -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="dt-car"><rect x="0" y="234" width="64" height="16" rx="5" fill="#c8102e"/><rect x="12" y="226" width="34" height="11" rx="4" fill="#8a0c20"/><circle cx="14" cy="251" r="5" fill="#111"/><circle cx="50" cy="251" r="5" fill="#111"/></g>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(258, 98, 138, "Knight Arnold Rd") + sign(270, 124, 114, "Sheffield Av") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="dt-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="dt-sp"><circle cx="236" cy="170" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="dt-sp dt-sp2"><circle cx="242" cy="164" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("dts5", "#2a3466", "#f09a6a"));
  }

  window.SCENES = { dtstop: dtstop, dtbridge: dtbridge, dtbeale: dtbeale, dtstax: dtstax, dtcorner: dtcorner };
})();
