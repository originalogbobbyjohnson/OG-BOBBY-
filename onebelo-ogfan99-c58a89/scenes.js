/* One Be Lo game (Regions tab, Detroit: Pontiac). I-75 into Pontiac, the Silverdome, the Phoenix Center stage, the Woodward Dream Cruise,
   and the Saginaw St corner downtown. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.3s}.car3{animation-delay:-4.6s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 6s linear infinite}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}.bl4{animation-delay:1.2s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes orbit{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.orb{transform-box:view-box;transform-origin:200px 70px;animation:orbit 6s linear infinite}' +
    '@keyframes rise{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.ri{animation:rise 2.2s ease-in-out infinite}' +
    '@keyframes beam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.bm{transform-box:fill-box;transform-origin:50% 100%;animation:beam 3s ease-in-out infinite}.bm2{animation-delay:1.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f5c542", ORANGE = "#ff7a1a", TEAL = "#2bb3a3", CREAM = "#f4f1e8", RED = "#d64545", BLUE = "#3a6fd8";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const car = (y, col, cls) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="54" height="14" rx="4" fill="' + col + '"/><path d="M10 ' + y + 'l8 -8h18l8 8z" fill="' + col + '"/><rect x="20" y="' + (y - 6) + '" width="14" height="5" fill="#cfe6ff"/><circle cx="12" cy="' + (y + 14) + '" r="4.5" fill="#111"/><circle cx="42" cy="' + (y + 14) + '" r="4.5" fill="#111"/></g>';
  /* the Silverdome: low white fabric roof on a concrete bowl */
  const dome = (x, base, s, col, roof) => '<path d="M' + (x - 120 * s) + ' ' + base + 'v' + (-26 * s) + 'h' + (240 * s) + 'v' + (26 * s) + 'z" fill="' + col + '"/>' +
    '<path d="M' + (x - 116 * s) + ' ' + (base - 26 * s) + 'Q' + x + ' ' + (base - 70 * s) + ' ' + (x + 116 * s) + ' ' + (base - 26 * s) + 'z" fill="' + roof + '"/>';

  /* 1. I-75 into Pontiac: big green exit sign over the freeway, cars rolling */
  function highway() {
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' +
      '<path d="M0 190L400 150V260H0z" fill="#3d6b3a"/>' +
      dome(310, 170, 0.55, "#b9b4a8", "#f4f1e8") +
      '<rect x="60" y="30" width="8" height="140" fill="#8a8f96"/><rect x="332" y="30" width="8" height="140" fill="#8a8f96"/><rect x="60" y="30" width="280" height="8" fill="#8a8f96"/>' +
      '<rect x="88" y="42" width="224" height="96" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="3"/>' +
      /* I-75 shield */
      '<path d="M112 58h36v6q0 26 -18 34q-18 -8 -18 -34z" fill="#1f4fa8" stroke="#fff" stroke-width="2"/><path d="M112 58h36v8h-36z" fill="' + RED + '"/>' +
      '<text x="130" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">75</text>' +
      '<text x="234" y="72" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">M-59 West</text>' +
      '<text x="234" y="100" text-anchor="middle" ' + font + ' font-size="24" fill="#fff">Pontiac</text>' +
      '<rect x="252" y="112" width="58" height="20" rx="3" fill="#ffd400"/><text x="281" y="127" text-anchor="middle" ' + font + ' font-size="11" fill="#111">EXIT 77B</text>' +
      '<rect x="0" y="196" width="400" height="64" fill="#45484f"/><path d="M0 228h400" stroke="#f5f5f5" stroke-width="3" stroke-dasharray="22 18"/>' +
      '<g class="anim-train">' + car(206, ORANGE, "") + '</g>' +
      car(238, BLUE, "car") + car(238, CREAM, "car car2"),
      sky("s1", "#4a78c2", "#f2c48d"));
  }

  /* 2. The Pontiac Silverdome at night: the white roof, light beams, crowd lights */
  function silverdome() {
    let crowd = "";
    for (let i = 0; i < 26; i++) crowd += '<circle class="bl bl' + (i % 4 + 1) + '" cx="' + (64 + i * 11) + '" cy="' + (184 + (i % 3) * 4) + '" r="1.8" fill="#fff6c2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' + stars(20) +
      '<g class="bm"><path d="M90 170L60 20h20z" fill="#fff6c2" opacity=".12"/></g><g class="bm bm2"><path d="M310 170L320 20h20z" fill="#fff6c2" opacity=".12"/></g>' +
      dome(200, 196, 1.3, "#8f8a80", "#eeece6") +
      (() => { let p = ""; for (let i = -4; i <= 4; i++) p += '<path d="M' + (200 + i * 34) + ' ' + (196 - 34 - (16 - Math.abs(i) * 3.2)) + 'v' + (2) + '" stroke="#c9c5bb" stroke-width="1.5"/>'; return p; })() +
      '<path d="M50 162Q200 106 350 162" fill="none" stroke="#d6d2c8" stroke-width="2"/><path d="M60 158Q200 112 340 158" fill="none" stroke="#d6d2c8" stroke-width="1.5"/>' +
      crowd +
      '<rect x="0" y="196" width="400" height="64" fill="#2f3238"/><path d="M0 214h400M0 232h400" stroke="#ffd400" stroke-width="1.5" stroke-dasharray="6 10"/>' +
      '<g class="car">' + '<rect x="0" y="240" width="40" height="12" rx="3" fill="' + TEAL + '"/>' + '</g>' +
      '<text x="200" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="' + CREAM + '" letter-spacing="4">SILVERDOME</text>',
      sky("s2", "#070b1c", "#2b3560"));
  }

  /* 3. The Phoenix Center downtown: concrete shell over the stage, the sun rising behind like a phoenix */
  function phoenix() {
    return svg(
      '<rect width="400" height="260" fill="url(#s3)"/>' +
      '<g class="ri"><circle cx="200" cy="96" r="40" fill="' + ORANGE + '"/><circle cx="200" cy="96" r="28" fill="' + GOLD + '"/>' +
      '<path d="M200 70l-46 -26 30 30 -40 -6 40 18M200 70l46 -26 -30 30 40 -6 -40 18" fill="' + ORANGE + '" opacity=".85"/></g>' +
      '<rect x="0" y="120" width="70" height="80" fill="#6b5a4a"/><rect x="330" y="110" width="70" height="90" fill="#6b5a4a"/>' +
      '<path d="M40 150Q200 92 360 150v14H40z" fill="#c9c3b6" stroke="#8f8a80" stroke-width="2"/>' +
      '<rect x="60" y="164" width="280" height="10" fill="#a9a396"/>' +
      '<rect x="90" y="174" width="220" height="30" fill="#7a7468"/><rect x="90" y="174" width="220" height="4" fill="#5a5448"/>' +
      '<rect x="196" y="140" width="3" height="34" fill="#bbb"/><rect x="192" y="132" width="11" height="12" rx="5" fill="#333"/>' +
      (() => { let s = ""; for (let i = 0; i < 7; i++) s += '<rect x="' + (40 + i * 50) + '" y="204" width="34" height="6" fill="#9e988b"/>'; return s; })() +
      '<rect x="0" y="210" width="400" height="50" fill="#8c8678"/>' +
      (() => { let p = ""; for (let i = 0; i < 9; i++) p += '<circle cx="' + (30 + i * 44) + '" cy="' + (226 + (i % 2) * 6) + '" r="8" fill="#2a2420"/><rect x="' + (22 + i * 44) + '" y="' + (232 + (i % 2) * 6) + '" width="16" height="22" rx="5" fill="#2a2420"/>'; return p; })() +
      '<text x="200" y="196" text-anchor="middle" ' + font + ' font-size="11" fill="' + CREAM + '" letter-spacing="4">PHOENIX CENTER</text>',
      sky("s3", "#2a1f4a", "#ff9a52"));
  }

  /* 4. The Woodward Dream Cruise: classic cars rolling both ways up Woodward */
  function cruise() {
    let trees = "";
    for (let i = 0; i < 8; i++) trees += '<circle cx="' + (20 + i * 52) + '" cy="124" r="20" fill="#3f7d3a"/><rect x="' + (17 + i * 52) + '" y="138" width="6" height="22" fill="#5a3d24"/>';
    const fin = (y, col, cls) => '<g class="' + cls + '"><rect x="0" y="' + y + '" width="80" height="16" rx="5" fill="' + col + '"/><path d="M16 ' + y + 'l10 -10h26l12 10z" fill="' + col + '"/><rect x="28" y="' + (y - 8) + '" width="20" height="7" fill="#cfe6ff"/>' +
      '<path d="M78 ' + (y + 2) + 'l6 -6v8z" fill="' + col + '"/><rect x="0" y="' + (y + 6) + '" width="80" height="2" fill="#e8e8e8"/><circle cx="18" cy="' + (y + 16) + '" r="5" fill="#111"/><circle cx="62" cy="' + (y + 16) + '" r="5" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + trees +
      '<rect x="0" y="160" width="400" height="100" fill="#4a4d54"/><rect x="0" y="206" width="400" height="6" fill="#d9d5c6"/>' +
      '<path d="M0 186h400M0 236h400" stroke="#f5f5f5" stroke-width="2" stroke-dasharray="20 16"/>' +
      fin(170, RED, "carL") + fin(170, TEAL, "carL car2") +
      fin(222, GOLD, "car") + fin(222, "#7a4fd0", "car car3") +
      '<rect x="150" y="40" width="100" height="26" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="200" y="58" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Woodward Ave</text>' +
      '<rect x="198" y="66" width="4" height="58" fill="#777"/>',
      sky("s4", "#7fc0f0", "#f3ead2"));
  }

  /* 5. The corner: Saginaw St and Huron St downtown Pontiac, ONE BE LO tagged, the Silverdome glowing behind */
  function corner() {
    const BRICK = "#6b3b2a", BRICK2 = "#57301f";
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(18) +
      '<g class="orb"><circle cx="200" cy="40" r="4" fill="#fff6c2"/><circle cx="200" cy="100" r="3" fill="#9cc4ff"/></g>' +
      dome(150, 132, 0.8, "#3a4058", "#59607a") +
      '<rect x="270" y="92" width="34" height="40" fill="#232c44"/><rect x="20" y="96" width="30" height="36" fill="#232c44"/>' +
      '<rect x="0" y="128" width="400" height="96" fill="' + BRICK + '"/>' +
      (() => { let b = ""; for (let y = 134; y < 224; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="' + BRICK2 + '" stroke-width="1"/>'; return b; })() +
      tag("ONE BE LO", 14, 196, 40, CREAM, -5) + tag("BINARY STAR", 150, 218, 18, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="236" width="40" height="14" rx="4" fill="' + ORANGE + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="30" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="330" y="40" width="5" height="186" fill="#3d4b3f"/>' +
      '<rect x="284" y="44" width="98" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Saginaw St</text>' +
      '<rect x="290" y="70" width="86" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Huron St</text>' +
      '<circle class="flk" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#070a16", "#2c3554"));
  }

  window.SCENES = { highway: highway, silverdome: silverdome, phoenix: phoenix, cruise: cruise, corner: corner };
})();
