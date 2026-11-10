/* tybrasel scenes (Regions tab: Memphis + Tennessee; born in Memphis, grew up where East Memphis meets Olive Branch, Mississippi, "Memphissippi"; went to Ole Miss before he dropped out to rap). CSS classes and ids prefixed tb- (the page's own anim-train is kept).
   1 MATA Route 50 Poplar: the bus pulling up at Poplar Ave and Mendenhall Rd in East Memphis.
   2 Clark Tower at night, East Memphis's tallest building on Poplar Ave, headlights streaking below.
   3 The Lyceum at Ole Miss in Oxford: red brick, white columns and pediment, leaves falling in the Grove.
   4 The state line south of East Memphis: "Welcome to Mississippi" and the green Olive Branch sign, a little spaceship crossing the moon ("Headed to the moon", "I brought the spaceship").
   5 Poplar Ave and Perkins Rd Ext: green signs, TY and YOUNG T tagged on the wall, Clark Tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tbflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.tb-flk{animation:tbflick 2.4s infinite}.tb-flk2{animation-delay:.8s}' +
    '@keyframes tbstreak{from{transform:translateX(-160px)}to{transform:translateX(520px)}}.tb-st{animation:tbstreak 2.6s linear infinite}.tb-st2{animation-delay:-1.3s}' +
    '@keyframes tbstreakL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.tb-stL{animation:tbstreakL 3.1s linear infinite}' +
    '@keyframes tbleaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(40px,240px) rotate(260deg);opacity:.8}}.tb-leaf{animation:tbleaf 6s linear infinite}.tb-leaf2{animation-delay:-2s}.tb-leaf3{animation-delay:-4s}' +
    '@keyframes tbship{0%{transform:translate(-60px,40px)}100%{transform:translate(460px,-30px)}}.tb-ship{animation:tbship 9s linear infinite}' +
    '@keyframes tbtw{0%,100%{opacity:.25}50%{opacity:1}}.tb-tw{animation:tbtw 1.8s ease-in-out infinite}.tb-tw2{animation-delay:-.9s}' +
    '@keyframes tbcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.tb-car{animation:tbcar 6s linear infinite}.tb-car2{animation-delay:-3s}' +
    '@keyframes tbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tb-sp{animation:tbspray 1.4s ease-out infinite}.tb-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const BLUE = "#1d4f91", GOLD = "#f2c14e", VIOLET = "#8f6bff";
  const stars = (n, h) => Array.from({ length: n }, (_, i) => '<circle class="tb-tw' + (i % 2 ? ' tb-tw2' : '') + '" cx="' + ((i * 53) % 400) + '" cy="' + ((i * 31) % h) + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff"/>').join("");
  /* Clark Tower: tall pale tower, dark vertical window bands, lit crown */
  const tower = (x, base, w, h) => '<g><rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="#d9d2c3"/>' +
    Array.from({ length: Math.floor(w / 8) }, (_, i) => '<rect x="' + (x + 3 + i * 8) + '" y="' + (base - h + 10) + '" width="3" height="' + (h - 14) + '" fill="#4a5a6e"/>').join("") +
    '<rect x="' + (x - 2) + '" y="' + (base - h - 6) + '" width="' + (w + 4) + '" height="8" fill="#c7bfae"/><rect class="tb-flk" x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="4" fill="#fff3b0" opacity=".8"/></g>';

  /* 1. Route 50 Poplar */
  function tbbus() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (64 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="50" y="116" width="270" height="70" rx="10" fill="#f4f6f8" stroke="#7d8790" stroke-width="2"/>' + win +
      '<rect x="50" y="158" width="270" height="9" fill="' + BLUE + '"/><rect x="50" y="167" width="270" height="4" fill="#7cc242"/>' +
      '<rect x="292" y="124" width="26" height="40" rx="3" fill="#2a3b4c"/><rect x="290" y="120" width="30" height="10" rx="2" fill="#111"/><text x="305" y="128" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">50</text>' +
      '<rect x="60" y="120" width="96" height="6" rx="2" fill="#111"/><text x="108" y="125.5" text-anchor="middle" ' + font + ' font-size="5.5" fill="#ffb347">50 POPLAR</text>' +
      '<circle cx="96" cy="188" r="11" fill="#1a1a1a"/><circle cx="96" cy="188" r="4" fill="#888"/><circle cx="270" cy="188" r="11" fill="#1a1a1a"/><circle cx="270" cy="188" r="4" fill="#888"/>' +
      '<circle cx="316" cy="176" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tbs1)"/>' +
      '<g fill="#3a4766"><rect x="0" y="70" width="70" height="60"/><rect x="80" y="84" width="54" height="46"/><rect x="250" y="76" width="60" height="54"/></g>' + tower(330, 130, 38, 110) +
      Array.from({ length: 7 }, (_, i) => '<g><rect x="' + (i * 60 + 10) + '" y="100" width="4" height="30" fill="#4b3a2a"/><circle cx="' + (i * 60 + 12) + '" cy="96" r="14" fill="#2f5a3a"/></g>').join("") +
      '<rect x="0" y="196" width="400" height="64" fill="#3f4147"/><path d="M0 228h400" stroke="#e8d36a" stroke-width="2" stroke-dasharray="16 12"/>' + bus +
      '<rect x="0" y="192" width="400" height="6" fill="#a8a296"/>' +
      '<rect x="346" y="140" width="5" height="56" fill="#333"/><rect x="330" y="122" width="38" height="24" rx="3" fill="' + BLUE + '" stroke="#fff" stroke-width="1.5"/><text x="349" y="138" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">50</text>' +
      '<rect x="56" y="210" width="250" height="34" rx="3" fill="#111"/><text x="68" y="233" ' + font + ' font-size="15" fill="#fff">Poplar &amp; Mendenhall</text>' + badge(250, 227, "50", BLUE),
      sky("tbs1", "#f29b5c", "#ffd9a0"));
  }

  /* 2. Clark Tower at night */
  function tbclark() {
    return svg(
      '<rect width="400" height="260" fill="url(#tbs2)"/>' + stars(30, 90) +
      '<circle cx="64" cy="48" r="16" fill="#f3efe0"/>' +
      '<g fill="#1f2640"><rect x="0" y="140" width="60" height="60"/><rect x="66" y="120" width="50" height="80"/><rect x="250" y="130" width="56" height="70"/><rect x="312" y="150" width="88" height="50"/></g>' +
      Array.from({ length: 10 }, (_, i) => '<rect class="tb-flk' + (i % 2 ? ' tb-flk2' : '') + '" x="' + [10, 30, 76, 96, 260, 284, 324, 352, 76, 260][i] + '" y="' + [150, 170, 130, 160, 140, 170, 160, 176, 182, 186][i] + '" width="8" height="8" fill="#f6d77a" opacity=".8"/>').join("") +
      tower(150, 200, 64, 176) +
      '<rect x="0" y="200" width="400" height="60" fill="#2b2d34"/><path d="M0 230h400" stroke="#c9c9c9" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="tb-st"><path d="M0 214h120" stroke="#ff4d4d" stroke-width="3" stroke-linecap="round" opacity=".8"/></g><g class="tb-st tb-st2"><path d="M0 220h90" stroke="#ff4d4d" stroke-width="2" stroke-linecap="round" opacity=".6"/></g>' +
      '<g class="tb-stL"><path d="M0 242h130" stroke="#fff3b0" stroke-width="3" stroke-linecap="round" opacity=".85"/></g>' +
      '<text x="200" y="256" text-anchor="middle" ' + font + ' font-size="10" fill="#e8ecf5">POPLAR AVE · EAST MEMPHIS</text>',
      sky("tbs2", "#0b1030", "#3b2f6b"));
  }

  /* 3. The Lyceum, Ole Miss */
  function tblyceum() {
    const cols = Array.from({ length: 6 }, (_, i) => '<rect x="' + (136 + i * 26) + '" y="104" width="10" height="84" fill="#fbfaf5"/><rect x="' + (133 + i * 26) + '" y="100" width="16" height="5" fill="#eeeae0"/><rect x="' + (133 + i * 26) + '" y="186" width="16" height="4" fill="#eeeae0"/>').join("");
    const leaf = (x, cls, c) => '<g class="tb-leaf ' + cls + '"><path d="M' + x + ' 0q6 -6 12 0q-6 6 -12 0z" fill="' + c + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tbs3)"/>' +
      '<rect x="70" y="80" width="260" height="114" fill="#a4473a"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M70 ' + (86 + i * 8) + 'h260" stroke="#8f3b30" stroke-width="1"/>').join("") +
      [84, 104, 296, 316].map(x => '<rect x="' + x + '" y="100" width="12" height="22" fill="#2a3540" stroke="#fff" stroke-width="2"/><rect x="' + x + '" y="140" width="12" height="22" fill="#2a3540" stroke="#fff" stroke-width="2"/>').join("") +
      '<path d="M122 100L200 62L278 100z" fill="#fbfaf5" stroke="#d8d3c4" stroke-width="2"/><path d="M140 96L200 70L260 96z" fill="#efe9da"/><rect x="122" y="96" width="156" height="8" fill="#f4f1e8"/>' +
      cols + '<rect x="180" y="150" width="40" height="40" fill="#5a3a2a"/><path d="M116 190h168v8H116z" fill="#d8d3c4"/>' +
      '<rect x="0" y="198" width="400" height="62" fill="#4f7d3a"/><path d="M150 260l26 -62h48l26 62z" fill="#d8cdb6"/>' +
      '<g><rect x="16" y="120" width="10" height="90" fill="#5a4030"/><circle cx="22" cy="104" r="40" fill="#2f6a35"/><rect x="368" y="120" width="10" height="90" fill="#5a4030"/><circle cx="374" cy="104" r="40" fill="#2f6a35"/></g>' +
      leaf(40, "", "#e0a03a") + leaf(330, "tb-leaf2", "#c8552e") + leaf(110, "tb-leaf3", "#e8c24a") + leaf(260, "", "#c8552e") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#1d2a1a">THE LYCEUM · OXFORD, MISS.</text>',
      sky("tbs3", "#7fb4e0", "#eaf4fb"));
  }

  /* 4. The state line, Memphissippi */
  function tbline() {
    const ship = '<g class="tb-ship"><g transform="translate(0 70) rotate(-8)"><path d="M0 10q18 -16 40 0z" fill="#cfd8e3"/><ellipse cx="20" cy="10" rx="26" ry="6" fill="' + VIOLET + '"/><circle cx="8" cy="10" r="2" fill="' + GOLD + '"/><circle cx="20" cy="11" r="2" fill="' + GOLD + '"/><circle cx="32" cy="10" r="2" fill="' + GOLD + '"/><path d="M-6 12h-18" stroke="' + GOLD + '" stroke-width="2" opacity=".7"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tbs4)"/>' + stars(40, 120) +
      '<circle cx="300" cy="62" r="34" fill="#f3efe0"/><circle cx="288" cy="54" r="6" fill="#ddd6c2"/><circle cx="312" cy="72" r="4" fill="#ddd6c2"/>' + ship +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 36) + ' 168l14 -40l14 40z" fill="#1d3326"/>').join("") +
      '<rect x="0" y="166" width="400" height="94" fill="#2b2d34"/><path d="M0 214h400" stroke="#e8d36a" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="tb-car"><rect x="0" y="222" width="58" height="14" rx="5" fill="#e8e8e8"/><rect x="12" y="214" width="32" height="10" rx="3" fill="#e8e8e8"/><circle cx="13" cy="236" r="5" fill="#111"/><circle cx="45" cy="236" r="5" fill="#111"/><circle cx="58" cy="228" r="3" fill="#fff6c2"/></g>' +
      '<rect x="66" y="110" width="5" height="60" fill="#666"/><rect x="129" y="110" width="5" height="60" fill="#666"/>' +
      '<rect x="46" y="84" width="108" height="44" rx="4" fill="#1d4f91" stroke="#fff" stroke-width="2"/><text x="100" y="101" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">WELCOME TO</text><text x="100" y="119" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">MISSISSIPPI</text>' +
      '<rect x="246" y="132" width="5" height="38" fill="#666"/><rect x="331" y="132" width="5" height="38" fill="#666"/>' +
      '<rect x="230" y="106" width="122" height="32" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="291" y="127" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">Olive Branch</text>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="10" fill="#e8ecf5">MEMPHIS · OLIVE BRANCH STATE LINE</text>',
      sky("tbs4", "#0a0d2a", "#3a2a66"));
  }

  /* 5. Poplar Ave and Perkins Rd Ext */
  function tbcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tbs5)"/>' + stars(18, 60) + tower(150, 134, 60, 120) +
      '<g fill="#2a2f4a"><rect x="0" y="96" width="70" height="40"/><rect x="260" y="90" width="60" height="46"/><rect x="320" y="104" width="80" height="32"/></g>' +
      '<rect x="0" y="126" width="400" height="98" fill="#6e4636"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#5b3a2c" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#5b3a2c" stroke-width="1"/>').join("")).join("") +
      tag("TY", 30, 196, 64, GOLD, -6) + tag("YOUNG T", 116, 190, 30, VIOLET, -5) + tag("MEMPHISSIPPI", 26, 216, 18, "#7fd1ff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(270, 98, 120, "Poplar Ave") + sign(250, 124, 140, "Perkins Rd Ext") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="tb-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="tb-sp"><circle cx="230" cy="172" r="3" fill="' + VIOLET + '" opacity=".7"/></g><g class="tb-sp tb-sp2"><circle cx="236" cy="166" r="2" fill="' + VIOLET + '" opacity=".6"/></g>',
      sky("tbs5", "#1d2250", "#e88a5a"));
  }

  window.SCENES = { tbbus: tbbus, tbclark: tbclark, tblyceum: tblyceum, tbline: tbline, tbcorner: tbcorner };
})();
