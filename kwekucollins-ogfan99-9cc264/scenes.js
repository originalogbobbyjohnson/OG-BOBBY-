/* kwekucollins scenes (Regions tab: Chicago; Evanston, the North Shore). CSS classes and ids prefixed kc- (the page's own anim-train is kept).
   1 Davis on the CTA Purple Line: the embankment over Davis St in downtown Evanston, a silver Purple Line train sliding in.
   2 Grosse Point Lighthouse on the Evanston lakefront at sunset ("Can you see the sun set real good... stay gold"): buff brick tower, black lantern, beam turning.
   3 The listening kiosks: the bookstore on Maple Ave where his mom worked Saturdays and he lived at the music-sampling stations (headphones, records, no logos).
   4 The booth at SoundScape Studios, where he cut "Nat Love" and "Grey": mic, pop filter, the level meters bouncing, his dad's hand drums in the corner.
   5 Church St and Dodge Ave on Evanston's west side: green signs, KWEKU tagged, the Gothic tower of Evanston Township High School behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kcflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.kc-flk{animation:kcflick 2.2s infinite}.kc-flk2{animation-delay:.7s}' +
    '@keyframes kccar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.kc-car{animation:kccar 7s linear infinite}' +
    '@keyframes kccarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.kc-carL{animation:kccarL 8s linear infinite}' +
    '@keyframes kcwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.kc-wave{animation:kcwave 3.2s ease-in-out infinite}.kc-wave2{animation-delay:-1.6s}' +
    '@keyframes kcbeam{0%,100%{opacity:.15}50%{opacity:.75}}.kc-beam{animation:kcbeam 3s ease-in-out infinite}.kc-beam2{animation-delay:-1.5s}' +
    '@keyframes kcspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.kc-spin{transform-box:fill-box;transform-origin:50% 50%;animation:kcspin 3s linear infinite}' +
    '@keyframes kcbar{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.kc-bar{transform-box:fill-box;transform-origin:50% 100%;animation:kcbar .8s ease-in-out infinite}.kc-bar2{animation-delay:-.2s}.kc-bar3{animation-delay:-.4s}.kc-bar4{animation-delay:-.6s}' +
    '@keyframes kcnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-50px);opacity:0}}.kc-note{animation:kcnote 2.4s ease-out infinite}.kc-note2{animation-delay:-1.2s}' +
    '@keyframes kcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kc-sp{animation:kcspray 1.4s ease-out infinite}.kc-sp2{animation-delay:.45s}' +
    '@keyframes kcleaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-40px,90px) rotate(160deg);opacity:0}}.kc-leaf{animation:kcleaf 5s linear infinite}.kc-leaf2{animation-delay:-2.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const PURPLE = "#522398", GOLD = "#f2c94c", ROSE = "#e85a7a", LAV = "#b9a4e6";

  /* 1. Davis (Purple Line) on the embankment over Davis St */
  function kcstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (46 + i * 48) + '" y="78" width="32" height="22" rx="3" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="26" y="68" width="328" height="62" rx="7" fill="#d4d8dc" stroke="#7a828a" stroke-width="2"/>' + win +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (34 + i * 20) + ' 106v20" stroke="#b9bfc5" stroke-width="1.5"/>').join("") +
      '<rect x="26" y="102" width="328" height="4" fill="' + PURPLE + '"/>' +
      '<rect x="334" y="72" width="18" height="54" rx="4" fill="#b3b9bf"/><circle cx="344" cy="122" r="3.5" fill="#fff6c2"/>' +
      '<rect x="262" y="72" width="68" height="12" rx="2" fill="#111"/><text x="296" y="81" text-anchor="middle" ' + font + ' font-size="8" fill="' + LAV + '">LINDEN</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kcs1)"/>' +
      '<g fill="#3a3046"><rect x="0" y="16" width="44" height="52"/><rect x="50" y="6" width="34" height="62"/><rect x="300" y="22" width="44" height="46"/><rect x="350" y="10" width="50" height="58"/></g>' +
      '<g fill="#ffd98a" opacity=".7"><rect x="8" y="26" width="6" height="8"/><rect x="60" y="20" width="6" height="8"/><rect x="70" y="40" width="6" height="8"/><rect x="312" y="34" width="6" height="8"/><rect x="364" y="22" width="6" height="8"/></g>' +
      '<path d="M0 54h400" stroke="#5a5f66" stroke-width="3"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 2) + '" y="54" width="4" height="14" fill="#5a5f66"/>').join("") +
      '<g class="kc-flk"><rect x="96" y="58" width="36" height="4" fill="#fff3c4"/></g><g class="kc-flk kc-flk2"><rect x="268" y="58" width="36" height="4" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="132" width="400" height="6" fill="#f2c200"/><rect x="0" y="138" width="400" height="12" fill="#9a958c"/>' +
      '<rect x="0" y="150" width="400" height="80" fill="#a8946f"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (156 + i * 8) + 'h400" stroke="#957f5c" stroke-width="1"/>').join("") +
      '<path d="M150 230v-50q50 -26 100 0v50z" fill="#2a2a30"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#3a3a3f"/><path d="M0 245h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("kc-car", 0, 236, "#7a2f2f") +
      '<rect x="20" y="160" width="124" height="32" rx="3" fill="#111"/><text x="30" y="182" ' + font + ' font-size="17" fill="#fff">Davis</text>' + badge(84, 176, "PRP", PURPLE) +
      '<rect x="262" y="160" width="118" height="22" rx="3" fill="#111"/><text x="321" y="175" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">DAVIS ST</text>' +
      '<text x="200" y="12" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".85">PURPLE LINE · DOWNTOWN EVANSTON</text>',
      sky("kcs1", "#20183a", "#d48a7a"));
  }

  /* 2. Grosse Point Lighthouse at sunset */
  function kclight() {
    return svg(
      '<rect width="400" height="260" fill="url(#kcs2)"/>' +
      '<circle cx="90" cy="150" r="30" fill="#ffcf6b" opacity=".9"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#3a4e7a"/>' +
      '<g class="kc-wave">' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 52 - 10) + ' 166q13 -6 26 0t26 0" stroke="#f6c58a" stroke-width="2" fill="none"/>').join("") + '</g>' +
      '<g class="kc-wave kc-wave2">' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 52 + 14) + ' 184q13 -6 26 0t26 0" stroke="#f6c58a" stroke-width="2" fill="none" opacity=".6"/>').join("") + '</g>' +
      '<path d="M180 260v-60h220v60z" fill="#5d7a3e"/><path d="M180 200q40 -10 80 0t140 0v4h-220z" fill="#6f8f48"/>' +
      /* keeper's house */
      '<rect x="300" y="168" width="80" height="40" fill="#e9dcc0"/><path d="M294 170l46 -24l46 24z" fill="#8a3a2a"/><rect x="312" y="180" width="12" height="14" fill="#3a4a66"/><rect x="352" y="180" width="12" height="14" fill="#3a4a66"/>' +
      /* tower: buff brick taper, black gallery + lantern */
      '<path d="M236 206l8 -130h24l8 130z" fill="#e8d6a6" stroke="#c7b07a" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (240 + i * 0.4) + ' ' + (190 - i * 20) + 'h' + (32 - i * 2) + '" stroke="#d6c08a" stroke-width="1"/>').join("") +
      '<rect x="250" y="120" width="8" height="12" fill="#3a4a66"/><rect x="250" y="160" width="8" height="12" fill="#3a4a66"/>' +
      '<rect x="236" y="70" width="40" height="6" fill="#1b1d24"/><rect x="244" y="50" width="24" height="20" fill="#1b1d24"/><rect x="247" y="53" width="18" height="14" fill="#ffe9a8"/><path d="M242 50l14 -12l14 12z" fill="#1b1d24"/>' +
      '<path class="kc-beam" d="M256 60l-140 -30v40z" fill="#fff3c4"/><path class="kc-beam kc-beam2" d="M256 60l144 -26v36z" fill="#fff3c4"/>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="11" fill="#2a1a3a">GROSSE POINT LIGHTHOUSE · EVANSTON</text>',
      sky("kcs2", "#f0a3a0", "#ffd9a0"));
  }

  /* 3. The listening kiosks on Maple Ave */
  function kckiosk() {
    const shelf = (y) => '<rect x="0" y="' + y + '" width="400" height="6" fill="#6b4a2e"/>' + Array.from({ length: 26 }, (_, i) => '<rect x="' + (4 + i * 15.2) + '" y="' + (y - 30 + (i % 3) * 3) + '" width="12" height="' + (30 - (i % 3) * 3) + '" fill="' + ["#c0392b", "#2f78b5", "#f2c94c", "#3ddc84", "#b56cff", "#f4e3c1"][i % 6] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#2a2030"/>' + shelf(50) + shelf(96) +
      '<rect x="0" y="180" width="400" height="80" fill="#5a3f2a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52) + ' 180v80" stroke="#4a3322" stroke-width="2"/>').join("") +
      /* kiosk stand with screen and headphones */
      '<rect x="140" y="110" width="120" height="76" rx="6" fill="#1b1d24" stroke="#555" stroke-width="2"/><rect x="150" y="118" width="100" height="40" rx="3" fill="#0f2238"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect class="kc-bar kc-bar' + (i % 4 + 1) + '" x="' + (160 + i * 18) + '" y="128" width="10" height="26" fill="' + LAV + '"/>').join("") +
      '<rect x="190" y="186" width="20" height="40" fill="#333"/><rect x="170" y="224" width="60" height="6" rx="2" fill="#333"/>' +
      '<path d="M156 176q14 -22 28 0" stroke="' + GOLD + '" stroke-width="4" fill="none"/><rect x="150" y="172" width="10" height="14" rx="3" fill="' + GOLD + '"/><rect x="180" y="172" width="10" height="14" rx="3" fill="' + GOLD + '"/>' +
      '<g class="kc-note"><text x="270" y="120" font-size="22" fill="' + GOLD + '">&#9834;</text></g><g class="kc-note kc-note2"><text x="110" y="130" font-size="18" fill="' + ROSE + '">&#9835;</text></g>' +
      '<rect x="120" y="8" width="160" height="22" rx="3" fill="#111"/><text x="200" y="23" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">LISTENING STATION</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="11" fill="#f3e6d0">SATURDAYS ON MAPLE AVE</text>');
  }

  /* 4. The booth at SoundScape */
  function kcbooth() {
    return svg(
      '<rect width="400" height="260" fill="#1a1626"/>' +
      Array.from({ length: 8 }, (_, i) => Array.from({ length: 5 }, (_, j) => '<path d="M' + (i * 52 + (j % 2) * 26) + ' ' + (j * 30) + 'l13 15l13 -15" stroke="#2c2640" stroke-width="3" fill="none"/>').join("")).join("") +
      '<rect x="0" y="200" width="400" height="60" fill="#3a2a22"/>' +
      /* window to control room with meters */
      '<rect x="230" y="40" width="150" height="90" rx="4" fill="#0f2238" stroke="#555" stroke-width="3"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect class="kc-bar kc-bar' + (i % 4 + 1) + '" x="' + (246 + i * 20) + '" y="70" width="12" height="50" fill="' + (i > 3 ? ROSE : "#3ddc84") + '"/>').join("") +
      /* mic stand */
      '<path d="M120 230v-120" stroke="#888" stroke-width="4"/><path d="M90 232h60" stroke="#888" stroke-width="5"/>' +
      '<rect x="108" y="76" width="24" height="40" rx="12" fill="#c9cdd2" stroke="#555" stroke-width="2"/><path d="M112 88h16M112 96h16M112 104h16" stroke="#777" stroke-width="1.5"/>' +
      '<circle cx="160" cy="96" r="18" fill="none" stroke="#666" stroke-width="2"/><circle cx="160" cy="96" r="16" fill="#333" opacity=".5"/><path d="M142 96l-10 0" stroke="#666" stroke-width="2"/>' +
      /* hand drums */
      '<path d="M300 220l8 -50h30l8 50z" fill="#8a4a2a" stroke="#4a2a14" stroke-width="2"/><ellipse cx="323" cy="170" rx="15" ry="5" fill="#e8d6a6"/>' +
      '<path d="M346 222l6 -36h22l6 36z" fill="#a0582c" stroke="#4a2a14" stroke-width="2"/><ellipse cx="363" cy="186" rx="11" ry="4" fill="#e8d6a6"/>' +
      '<g class="kc-note"><text x="170" y="70" font-size="22" fill="' + GOLD + '">&#9834;</text></g>' +
      '<rect x="20" y="16" width="160" height="22" rx="3" fill="#111"/><text x="100" y="31" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">NAT LOVE · GREY</text>');
  }

  /* 5. Church St and Dodge Ave, ETHS tower behind */
  function kccorner() {
    const eths = '<g><rect x="96" y="80" width="208" height="60" fill="#9a4a32"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (106 + i * 25) + '" y="92" width="12" height="20" fill="#f0e6cc" opacity=".8"/>').join("") +
      '<rect x="176" y="22" width="48" height="60" fill="#9a4a32"/><rect x="172" y="18" width="56" height="8" fill="#d8c8a0"/>' + [176, 190, 204, 218].map(x => '<rect x="' + x + '" y="10" width="6" height="10" fill="#d8c8a0"/>').join("") +
      '<rect x="190" y="34" width="20" height="34" rx="10" fill="#3a4a66"/><rect x="96" y="76" width="208" height="6" fill="#d8c8a0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kcs5)"/>' +
      '<g fill="#3c6a3a"><ellipse cx="40" cy="120" rx="50" ry="32"/><ellipse cx="360" cy="116" rx="56" ry="36"/></g>' +
      eths +
      '<g class="kc-leaf"><path d="M330 90q6 -6 10 0q-6 6 -10 0z" fill="#e0a040"/></g><g class="kc-leaf kc-leaf2"><path d="M60 80q6 -6 10 0q-6 6 -10 0z" fill="#e0a040"/></g>' +
      '<rect x="0" y="134" width="400" height="90" fill="#7a3f2c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#653220" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (134 + i * 8) + 'v8" stroke="#653220" stroke-width="1"/>').join("")).join("") +
      tag("KWEKU", 22, 194, 58, GOLD, -6) + tag("STAY GOLD", 30, 216, 17, LAV, -4) + tag("NAT LOVE", 160, 214, 16, ROSE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="378" y="100" width="6" height="124" fill="#2f2f2f"/>' + sign(272, 150, 116, "Church St") + sign(270, 176, 122, "Dodge Ave") +
      car("kc-carL", 0, 240, "#2f6f9f") +
      '<g class="kc-sp"><circle cx="190" cy="160" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="kc-sp kc-sp2"><circle cx="196" cy="154" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("kcs5", "#3a2f66", "#f0b080"));
  }

  window.SCENES = { kcstation: kcstation, kclight: kclight, kckiosk: kckiosk, kcbooth: kcbooth, kccorner: kccorner };
})();
