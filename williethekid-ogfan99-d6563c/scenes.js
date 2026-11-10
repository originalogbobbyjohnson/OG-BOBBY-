/* williethekid scenes (Regions tab: DETROIT region / Michigan; Grand Rapids, southeast side - born in Grand Rapids 1985, grew up on the southeast side, Ottawa Hills High; "TCP" The Crown Prince, "The Fly"; his Motu Viget Spirits is named for the city motto). CSS classes and ids prefixed wk- (the page's own anim-train is kept).
   1 The Rapid's Route 4 Eastern bus pulling up at Eastern Ave SE & Franklin St SE on the southeast side, light snow falling.
   2 Ottawa Hills High School (2055 Rosewood Ave SE), his school: long low brick building, orange-and-black Bengals banners, the field lights on.
   3 The Fish Ladder on the Grand River (Joseph Kinnebrew's stepped concrete sculpture): water rushing down the steps, a salmon jumping, a MOTU VIGET banner (the city motto his spirits company is named for), the downtown towers behind.
   4 Atlanta at dusk, the Aphilliates / Gangsta Grillz years with DJ Drama: the skyline with the gold-lattice pyramid top of Bank of America Plaza, a mixtape CD spinning.
   5 Franklin St SE and Eastern Ave SE: green signs, WILLIE THE KID tagged with TCP / THE FLY / MOTU, a fly buzzing, the downtown Grand Rapids towers behind.
   No logos, no faces, no digit 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes wksnow{0%{transform:translateY(-12px)}100%{transform:translateY(272px)}}.wk-snow{animation:wksnow 7s linear infinite}.wk-sn2{animation-delay:-2.3s}.wk-sn3{animation-delay:-4.6s}' +
    '@keyframes wkblink{0%,100%{opacity:.35}50%{opacity:1}}.wk-bl{animation:wkblink 1.6s ease-in-out infinite}.wk-bl2{animation-delay:-.8s}' +
    '@keyframes wkflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.wk-flag{transform-box:fill-box;transform-origin:0 50%;animation:wkflag 1.6s ease-in-out infinite}' +
    '@keyframes wkflow{from{stroke-dashoffset:0}to{stroke-dashoffset:-24}}.wk-flow{stroke-dasharray:8 4;animation:wkflow .8s linear infinite}' +
    '@keyframes wkjump{0%,55%,100%{transform:translate(0,0) rotate(0)}70%{transform:translate(18px,-34px) rotate(-25deg)}85%{transform:translate(36px,-6px) rotate(20deg)}}.wk-fish{transform-box:fill-box;animation:wkjump 3.2s ease-in-out infinite}' +
    '@keyframes wkspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.wk-cd{transform-box:fill-box;transform-origin:50% 50%;animation:wkspin 3s linear infinite}' +
    '@keyframes wkfly{0%{transform:translate(0,0)}25%{transform:translate(30px,-14px)}50%{transform:translate(60px,4px)}75%{transform:translate(28px,16px)}100%{transform:translate(0,0)}}.wk-fly{animation:wkfly 4s ease-in-out infinite}' +
    '@keyframes wkwing{0%,100%{opacity:1}50%{opacity:.2}}.wk-wing{animation:wkwing .12s linear infinite}' +
    '@keyframes wkcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.wk-car{animation:wkcar 8s linear infinite}' +
    '@keyframes wksp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wk-sp{animation:wksp 1.4s ease-out infinite}.wk-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const AQUA = "#3fd0c9", GOLD = "#e8b84a", ORANGE = "#e86a2a", BLUE = "#0067b1";
  const snow = () => [[30, 0, ""], [90, 40, "wk-sn2"], [150, 10, "wk-sn3"], [210, 60, ""], [270, 20, "wk-sn2"], [330, 50, "wk-sn3"], [380, 5, ""], [60, 90, "wk-sn3"], [240, 100, "wk-sn2"]]
    .map(p => '<g class="wk-snow ' + p[2] + '"><circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.8" fill="#fff" opacity=".85"/></g>').join("");
  /* downtown Grand Rapids towers (generic glass towers, no logos) */
  const towers = (fill, lit) => '<g fill="' + fill + '">' +
    '<rect x="120" y="54" width="34" height="90"/><rect x="128" y="44" width="18" height="10"/>' +
    '<rect x="160" y="70" width="26" height="74"/><rect x="192" y="40" width="40" height="104"/><path d="M192 40l20-12 20 12z"/>' +
    '<rect x="238" y="62" width="30" height="82"/><rect x="274" y="80" width="24" height="64"/><rect x="90" y="84" width="26" height="60"/></g>' +
    (lit ? '<g fill="' + lit + '" opacity=".75">' + [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (198 + (i % 3) * 11) + '" y="' + (52 + Math.floor(i / 3) * 16) + '" width="6" height="6"/>').join("") +
      [0, 1, 2, 3].map(i => '<rect x="' + (126 + (i % 2) * 12) + '" y="' + (64 + Math.floor(i / 2) * 16) + '" width="6" height="6"/>').join("") + '</g>' : '');

  /* 1. The Rapid Route 4 Eastern at Eastern & Franklin SE */
  function wkstop() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="128" width="32" height="22" rx="3" fill="#cfe8ff" opacity=".9"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="114" width="250" height="68" rx="9" fill="#f4f6f8" stroke="#7a8592" stroke-width="2"/>' + win +
      '<rect x="40" y="156" width="250" height="7" fill="' + BLUE + '"/><rect x="40" y="163" width="250" height="4" fill="#7cc242"/>' +
      '<rect x="262" y="120" width="24" height="30" rx="3" fill="#cfe8ff"/><rect x="236" y="118" width="22" height="46" rx="2" fill="#dfe3e8" stroke="#7a8592"/>' +
      '<rect x="60" y="116" width="70" height="10" rx="2" fill="#111"/><text x="95" y="124" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb347">4 EASTERN</text>' +
      '<circle cx="88" cy="184" r="11" fill="#222"/><circle cx="88" cy="184" r="4" fill="#888"/><circle cx="246" cy="184" r="11" fill="#222"/><circle cx="246" cy="184" r="4" fill="#888"/>' +
      '<circle cx="286" cy="172" r="4" fill="#fff6c2"/></g>';
    const houses = '<g fill="#2a2f4a"><rect x="0" y="84" width="46" height="40"/><path d="M0 84l23-18 23 18z"/><rect x="300" y="80" width="50" height="44"/><path d="M300 80l25-18 25 18z"/><rect x="352" y="88" width="48" height="36"/><path d="M352 88l24-16 24 16z"/></g>' +
      '<g fill="#ffe7a3" opacity=".8"><rect x="14" y="96" width="8" height="8"/><rect x="316" y="92" width="8" height="8"/><rect x="366" y="98" width="8" height="8"/></g>';
    const shelter = '<rect x="318" y="120" width="70" height="4" fill="#5a6470"/><rect x="320" y="124" width="3" height="66" fill="#5a6470"/><rect x="384" y="124" width="3" height="66" fill="#5a6470"/>' +
      '<rect x="324" y="128" width="58" height="54" fill="#bcd8ee" opacity=".3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#wks1)"/>' + houses + shelter + bus +
      '<rect x="0" y="194" width="400" height="66" fill="#5b5f66"/><rect x="0" y="194" width="400" height="5" fill="#eef2f6"/>' +
      '<path d="M0 226h400" stroke="#d9dde2" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="300" y="96" width="4" height="98" fill="#444"/><rect x="292" y="80" width="26" height="22" rx="3" fill="' + BLUE + '"/><text x="305" y="96" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">4</text>' +
      '<rect x="20" y="210" width="250" height="36" rx="3" fill="#111"/><text x="34" y="234" ' + font + ' font-size="16" fill="#fff">Eastern &amp; Franklin SE</text>' +
      '<rect x="226" y="219" width="34" height="18" rx="9" fill="' + BLUE + '"/><text x="243" y="232" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">4</text>' +
      snow(),
      sky("wks1", "#0f1630", "#3a4470"));
  }

  /* 2. Ottawa Hills High School */
  function wkschool() {
    let bricks = "";
    for (let i = 0; i < 6; i++) bricks += '<path d="M40 ' + (118 + i * 10) + 'h320" stroke="#7a3a26" stroke-width="1"/>';
    const wins = Array.from({ length: 9 }, (_, i) => '<rect x="' + (56 + i * 34) + '" y="124" width="22" height="28" fill="#a9d4f2" stroke="#e9e3d6" stroke-width="2"/>').join("");
    const banner = (x, cls) => '<g class="wk-flag ' + (cls || "") + '"><rect x="' + x + '" y="62" width="30" height="44" fill="' + ORANGE + '"/>' +
      '<path d="M' + x + ' 72h30M' + x + ' 84h30M' + x + ' 96h30" stroke="#111" stroke-width="5"/></g>';
    const light = (x) => '<rect x="' + x + '" y="40" width="4" height="70" fill="#555"/><rect x="' + (x - 12) + '" y="32" width="28" height="12" rx="2" fill="#333"/>' +
      '<g class="wk-bl"><rect x="' + (x - 10) + '" y="34" width="24" height="8" fill="#fff8d0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wks2)"/>' +
      '<g fill="#2f5b3a"><circle cx="20" cy="110" r="26"/><circle cx="380" cy="108" r="28"/><circle cx="350" cy="116" r="20"/></g>' +
      light(24) + light(372) +
      '<rect x="40" y="108" width="320" height="62" fill="#9c4a30"/>' + bricks + wins + '<rect x="40" y="104" width="320" height="5" fill="#e9e3d6"/>' +
      '<rect x="160" y="88" width="80" height="82" fill="#a85536"/><rect x="160" y="84" width="80" height="6" fill="#e9e3d6"/>' +
      '<rect x="178" y="134" width="44" height="36" fill="#3a2a22"/><path d="M200 134v36" stroke="#e9e3d6" stroke-width="2"/>' +
      '<rect x="166" y="96" width="68" height="16" fill="#111"/><text x="200" y="108" text-anchor="middle" ' + font + ' font-size="9" fill="' + ORANGE + '">OTTAWA HILLS</text>' +
      '<rect x="96" y="40" width="3" height="68" fill="#ccc"/>' + banner(99) + '<rect x="300" y="40" width="3" height="68" fill="#ccc"/>' + banner(303, "wk-bl2") +
      '<rect x="0" y="170" width="400" height="90" fill="#3f7a3a"/><path d="M0 200h400M0 230h400" stroke="#eaf2e6" stroke-width="2"/><path d="M200 170v90" stroke="#eaf2e6" stroke-width="2"/>' +
      '<rect x="120" y="236" width="160" height="18" rx="2" fill="#111" opacity=".75"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="' + ORANGE + '">BENGALS · ORANGE &amp; BLACK</text>',
      sky("wks2", "#1c2a52", "#e9926a"));
  }

  /* 3. Fish Ladder, Grand River */
  function wkfish() {
    let steps = "";
    for (let i = 0; i < 6; i++) steps += '<rect x="' + (110 + i * 30) + '" y="' + (120 + i * 14) + '" width="' + (180 - i * 30 + 30) + '" height="14" fill="' + (i % 2 ? '#b9b3a8' : '#cbc5ba') + '"/>';
    const flows = Array.from({ length: 6 }, (_, i) => '<path class="wk-flow" d="M' + (116 + i * 30) + ' ' + (126 + i * 14) + 'h26" stroke="#bfe7ff" stroke-width="3"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#wks3)"/>' + towers("#56607a", "#fff1b8") +
      '<rect x="0" y="140" width="400" height="10" fill="#4b6b45"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#2f6377"/>' + steps + flows +
      '<g class="wk-flow"><path d="M0 200h110M0 220h400M0 240h400" stroke="#6fb0c6" stroke-width="2"/></g>' +
      '<g class="wk-fish"><path d="M80 212q14-10 30 0q-16 10-30 0z" fill="#c9794f"/><path d="M80 212l-10-7v14z" fill="#c9794f"/><circle cx="104" cy="210" r="1.6" fill="#111"/></g>' +
      '<rect x="40" y="60" width="4" height="90" fill="#888"/><g class="wk-flag"><rect x="44" y="62" width="64" height="26" fill="' + BLUE + '"/><text x="76" y="79" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MOTU VIGET</text></g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#e8f4f8">FISH LADDER · GRAND RIVER</text>',
      sky("wks3", "#f2a65e", "#ffe2b0"));
  }

  /* 4. Atlanta, the Aphilliates years */
  function wkatl() {
    let lattice = "";
    for (let i = 0; i < 5; i++) lattice += '<path d="M' + (186 + i * 7) + ' ' + (60 - i * 6) + 'h' + (28 - i * 14 > 0 ? 28 - i * 14 : 2) + '" stroke="' + GOLD + '" stroke-width="2"/>';
    const sky4 = '<g fill="#2b2547">' +
      '<rect x="20" y="110" width="34" height="80"/><rect x="60" y="90" width="28" height="100"/><rect x="94" y="120" width="40" height="70"/>' +
      '<rect x="140" y="70" width="30" height="120"/><path d="M140 70l15-14 15 14z"/>' +
      '<rect x="180" y="62" width="40" height="128"/><rect x="226" y="96" width="34" height="94"/><rect x="266" y="80" width="26" height="110"/><path d="M266 80q13-20 26 0z"/>' +
      '<rect x="298" y="112" width="40" height="78"/><rect x="344" y="100" width="36" height="90"/></g>';
    const top = '<path d="M180 62L200 26L220 62z" fill="none" stroke="' + GOLD + '" stroke-width="2.5"/><path d="M186 52h28M192 42h16" stroke="' + GOLD + '" stroke-width="2"/><path d="M200 26v-14" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<g class="wk-bl"><circle cx="200" cy="12" r="2.5" fill="#ff5a4a"/></g>';
    const winds = '<g fill="#ffd98a" opacity=".7">' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (186 + (i % 3) * 11) + '" y="' + (72 + Math.floor(i / 3) * 18) + '" width="5" height="8"/>').join("") + '</g>';
    const cd = '<g class="wk-cd"><circle cx="330" cy="210" r="34" fill="#d8dde6" stroke="#8a93a3" stroke-width="2"/><circle cx="330" cy="210" r="26" fill="none" stroke="#b6e3ff" stroke-width="5" opacity=".7"/>' +
      '<path d="M330 176a34 34 0 0 1 30 18" stroke="#ff9ad5" stroke-width="5" fill="none" opacity=".6"/><circle cx="330" cy="210" r="8" fill="#111"/><circle cx="330" cy="210" r="3" fill="#eee"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wks4)"/>' + sky4 + top + winds +
      '<rect x="0" y="190" width="400" height="70" fill="#1b1730"/><path d="M0 204h400" stroke="#4a4270" stroke-width="2"/>' +
      '<g class="wk-car"><rect x="0" y="226" width="70" height="14" rx="5" fill="' + AQUA + '"/><rect x="14" y="218" width="38" height="10" rx="3" fill="' + AQUA + '"/><circle cx="16" cy="240" r="5" fill="#111"/><circle cx="54" cy="240" r="5" fill="#111"/></g>' +
      cd +
      '<text x="140" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#f3e6c8">ATLANTA · THE APHILLIATES YEARS</text>',
      sky("wks4", "#2a1f4e", "#f08a5d"));
  }

  /* 5. Franklin St SE and Eastern Ave SE */
  function wkcorner() {
    const fly = '<g class="wk-fly"><ellipse cx="300" cy="150" rx="5" ry="3.5" fill="#1a1a1a"/><g class="wk-wing"><ellipse cx="297" cy="145" rx="4" ry="2.5" fill="#cfe8ff" opacity=".8"/><ellipse cx="303" cy="145" rx="4" ry="2.5" fill="#cfe8ff" opacity=".8"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#wks5)"/>' + towers("#3b4166", "#ffe7a3") +
      '<rect x="0" y="120" width="400" height="104" fill="#5c4a6e"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (128 + i * 8) + 'h400" stroke="#4c3c5e" stroke-width="1"/>').join("") +
      Array.from({ length: 13 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (120 + i * 8) + 'v8" stroke="#4c3c5e" stroke-width="1"/>').join("")).join("") +
      tag("WILLIE", 14, 180, 50, AQUA, -6) + tag("THE KID", 40, 212, 26, GOLD, -4) + tag("TCP", 196, 206, 24, "#ff8a5c", -3) + tag("THE FLY", 196, 160, 18, "#fff3a0", -5) + tag("MOTU", 290, 204, 18, "#bfe3ff", -4) +
      fly +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<g class="wk-car"><rect x="0" y="238" width="62" height="14" rx="5" fill="#1f2a44"/><rect x="12" y="230" width="34" height="10" rx="3" fill="#1f2a44"/><rect x="16" y="232" width="12" height="6" fill="#bfe3ff"/><rect x="31" y="232" width="12" height="6" fill="#bfe3ff"/><circle cx="14" cy="252" r="5" fill="#111"/><circle cx="48" cy="252" r="5" fill="#111"/></g>' +
      '<rect x="346" y="90" width="6" height="134" fill="#2f2f2f"/>' + sign(270, 92, 128, "Franklin St SE") + sign(270, 118, 128, "Eastern Av SE") +
      '<g class="wk-sp"><circle cx="186" cy="166" r="3" fill="' + AQUA + '" opacity=".7"/></g><g class="wk-sp wk-sp2"><circle cx="192" cy="160" r="2" fill="' + AQUA + '" opacity=".6"/></g>' +
      snow(),
      sky("wks5", "#141a3a", "#8a5a8a"));
  }

  window.SCENES = { wkstop: wkstop, wkschool: wkschool, wkfish: wkfish, wkatl: wkatl, wkcorner: wkcorner };
})();
