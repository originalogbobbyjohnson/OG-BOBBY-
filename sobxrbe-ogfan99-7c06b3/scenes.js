/* sobxrbe scenes (Regions tab: The Bay Area; North Vallejo / Country Club Crest). CSS classes prefixed sob- (the page's own anim-train is kept).
   1 Whitney Ave by the North Vallejo Community Center (Chabot Terrace): a SolTrans 1 bus pulling up, the North Vallejo hills behind.
   2 The Boys & Girls Club gym where Slimmy B and Lul G met hooping (FADER 2017): the court, a ball bouncing, the hoop.
   3 Kyhree's house, where they first recorded together: a bedroom studio, a mic, a console pad for the instrumentals, levels jumping.
   4 "Paramedic!" on the 2018 movie soundtrack: a theater marquee, chasing bulbs, ambulance lights sweeping the street.
   5 Rounds St and Gateway Dr in the Crest: green signs, SOB X RBE tagged on the wall, the Highway 37 bridge over the Napa River lit behind.
   No digit 9 is drawn anywhere. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes sobflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.95}}.sob-flk{animation:sobflick 2.4s infinite}.sob-flk2{animation-delay:.8s}' +
    '@keyframes sobball{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}.sob-ball{animation:sobball .9s ease-in infinite}' +
    '@keyframes sobnet{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.sob-net{transform-box:fill-box;transform-origin:50% 0;animation:sobnet 1.8s ease-in-out infinite}' +
    '@keyframes sobbar{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.sob-bar{transform-box:fill-box;transform-origin:50% 100%;animation:sobbar .7s ease-in-out infinite}' +
    '.sob-b2{animation-delay:-.2s}.sob-b3{animation-delay:-.4s}.sob-b4{animation-delay:-.55s}' +
    '@keyframes sobchase{0%,100%{opacity:.25}50%{opacity:1}}.sob-bulb{animation:sobchase 1s steps(1) infinite}.sob-bulb2{animation-delay:-.5s}' +
    '@keyframes sobsiren{0%,49%{opacity:1}50%,100%{opacity:.15}}.sob-red{animation:sobsiren .8s infinite}.sob-blue{animation:sobsiren .8s infinite;animation-delay:-.4s}' +
    '@keyframes sobsweep{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.sob-sweep{transform-box:view-box;transform-origin:200px 260px;animation:sobsweep 5s ease-in-out infinite}' +
    '@keyframes sobcar{from{transform:translateX(-120px)}to{transform:translateX(540px)}}.sob-car{animation:sobcar 7s linear infinite}.sob-car2{animation-delay:-3.5s}' +
    '@keyframes sobspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sob-sp{animation:sobspray 1.4s ease-out infinite}.sob-sp2{animation-delay:.5s}' +
    '@keyframes sobcloud{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.sob-cloud{animation:sobcloud 30s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="54" height="13" rx="5" fill="' + c + '"/><rect x="' + (x + 11) + '" y="' + (y - 8) + '" width="30" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 14) + '" y="' + (y - 6) + '" width="11" height="6" fill="#bfe3ff"/><rect x="' + (x + 28) + '" y="' + (y - 6) + '" width="11" height="6" fill="#bfe3ff"/><circle cx="' + (x + 12) + '" cy="' + (y + 13) + '" r="5" fill="#111"/><circle cx="' + (x + 42) + '" cy="' + (y + 13) + '" r="5" fill="#111"/></g>';
  const RED = "#e8322b", GOLD = "#f2c230", BLU = "#36b6ff", STB = "#0067b1", STG = "#7ac143";

  /* 1. SolTrans 1 at the North Vallejo Community Center, Whitney Ave */
  function sobstop() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (66 + i * 42) + '" y="112" width="32" height="24" rx="2" fill="#1d2a38"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="102" width="320" height="74" rx="10" fill="#f4f6f4" stroke="#7d868e" stroke-width="2"/>' + wins +
      '<path d="M40 150q120-14 320 4v10H40z" fill="' + STB + '"/><path d="M40 162q140-8 320 2v6H40z" fill="' + STG + '"/>' +
      '<rect x="328" y="112" width="30" height="44" rx="3" fill="#1d2a38"/><rect x="326" y="104" width="34" height="8" rx="2" fill="#111"/><text x="343" y="111" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">1</text>' +
      '<circle cx="356" cy="168" r="3.5" fill="#fff6c2"/><circle cx="92" cy="178" r="12" fill="#111"/><circle cx="92" cy="178" r="5" fill="#777"/><circle cx="300" cy="178" r="12" fill="#111"/><circle cx="300" cy="178" r="5" fill="#777"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sob1)"/>' +
      '<g class="sob-cloud"><ellipse cx="40" cy="34" rx="30" ry="8" fill="#f6d7c4" opacity=".6"/></g>' +
      '<path d="M0 88q50-36 110-22t110-20 180 18v40H0z" fill="#7d8a5a"/><path d="M0 96q70-20 150-8t140-10 110 6v20H0z" fill="#9aa66a"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50 + 6) + '" y="' + (84 + (i % 3) * 3) + '" width="22" height="14" fill="#e9dcc6"/><path d="M' + (i * 50 + 4) + ' ' + (84 + (i % 3) * 3) + 'l13-7 13 7z" fill="#7a4a36"/>').join("") +
      '<rect x="0" y="100" width="400" height="6" fill="#5c6b44"/>' +
      bus +
      '<rect x="0" y="190" width="400" height="70" fill="#3a3d42"/><rect x="0" y="190" width="400" height="5" fill="#c9c9c2"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 54 + 8) + '" y="226" width="30" height="4" fill="#e6d36a"/>').join("") +
      '<rect x="18" y="40" width="4" height="150" fill="#6b7177"/>' +
      '<rect x="6" y="40" width="176" height="40" rx="4" fill="#111" stroke="#cfd3d6" stroke-width="1.5"/>' +
      '<circle cx="24" cy="60" r="11" fill="' + STB + '"/><text x="24" y="65" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">1</text>' +
      '<text x="42" y="57" ' + font + ' font-size="10" fill="#fff">North Vallejo Comm. Ctr</text><text x="42" y="71" ' + font + ' font-size="8" fill="#c9d3da">SOLTRANS · WHITNEY AVE</text>',
      sky("sob1", "#f0a868", "#ffe1b8"));
  }

  /* 2. Boys & Girls Club gym, where Slimmy B and Lul G met hooping */
  function sobclub() {
    return svg(
      '<rect width="400" height="260" fill="#2a2f3a"/>' +
      '<rect x="0" y="0" width="400" height="120" fill="#3b4252"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (30 + i * 76) + '" y="6" width="50" height="8" rx="3" fill="#fff5d6" class="sob-flk' + (i % 2 ? " sob-flk2" : "") + '"/>').join("") +
      '<rect x="20" y="22" width="360" height="30" fill="#1f5fa8"/>' +
      '<text x="200" y="45" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#fff" letter-spacing="2">BOYS &amp; GIRLS CLUB</text>' +
      '<text x="60" y="76" text-anchor="middle" ' + font + ' font-size="9" fill="#cfd8e6">VALLEJO</text><text x="340" y="76" text-anchor="middle" ' + font + ' font-size="9" fill="#cfd8e6">HOOP DAYS</text>' +
      '<path d="M0 120h400v140H0z" fill="#c98a4a"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="120" width="2" height="140" fill="#b07338"/>').join("") +
      '<path d="M60 260q140-90 280 0" fill="none" stroke="#fff" stroke-width="3"/><rect x="150" y="190" width="100" height="70" fill="none" stroke="#fff" stroke-width="3"/>' +
      '<circle cx="200" cy="190" r="26" fill="none" stroke="#fff" stroke-width="3"/>' +
      '<rect x="196" y="104" width="8" height="30" fill="#6b7177"/>' +
      '<rect x="166" y="62" width="68" height="46" fill="#f4f6f8" stroke="#c22" stroke-width="3"/><rect x="186" y="80" width="28" height="20" fill="none" stroke="#c22" stroke-width="2.5"/>' +
      '<ellipse cx="200" cy="112" rx="18" ry="4" fill="none" stroke="#ff6a1a" stroke-width="3"/>' +
      '<g class="sob-net"><path d="M183 113l5 18h24l5-18M188 113l6 18M200 113v18M212 113l-6 18" fill="none" stroke="#fff" stroke-width="1.5"/></g>' +
      '<g class="sob-ball"><circle cx="270" cy="210" r="13" fill="#e8742a" stroke="#6b2e0d" stroke-width="2"/><path d="M257 210h26M270 197v26M260 201q10 9 0 18M280 201q-10 9 0 18" fill="none" stroke="#6b2e0d" stroke-width="1.5"/></g>' +
      '<ellipse cx="270" cy="226" rx="14" ry="3" fill="#000" opacity=".25"/>');
  }

  /* 3. Kyhree's house: bedroom studio, mic, console pad, levels */
  function sobstudio() {
    const bars = Array.from({ length: 12 }, (_, i) => '<rect x="' + (232 + i * 11) + '" y="96" width="7" height="40" fill="' + (i % 3 ? "#2ee86b" : GOLD) + '" class="sob-bar sob-b' + (1 + (i % 4)) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1a1622"/>' +
      '<rect x="0" y="0" width="400" height="180" fill="#2a2236"/>' +
      Array.from({ length: 8 }, (_, i) => Array.from({ length: 4 }, (_, k) => '<path d="M' + (20 + i * 22) + ' ' + (20 + k * 22) + 'l11 0 0 11-11 0z" fill="#3c3150"/>').join("")).join("") +
      '<rect x="220" y="30" width="150" height="120" rx="6" fill="#0e0c14" stroke="#555" stroke-width="2"/>' + bars +
      '<text x="295" y="58" text-anchor="middle" ' + font + ' font-size="10" fill="#c9c2da">KYHREE\'S HOUSE</text>' +
      '<text x="295" y="146" text-anchor="middle" ' + font + ' font-size="8" fill="#8f86a6">REC ● TAKE 1</text>' +
      '<rect x="0" y="180" width="400" height="80" fill="#3a2d22"/><rect x="40" y="170" width="320" height="12" fill="#5a4330"/>' +
      '<rect x="110" y="40" width="4" height="100" fill="#888"/><rect x="96" y="138" width="32" height="5" fill="#777"/>' +
      '<rect x="98" y="30" width="28" height="44" rx="14" fill="#c9ccd2" stroke="#666" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="102" y="' + (36 + i * 7) + '" width="20" height="2" fill="#777"/>').join("") +
      '<circle cx="112" cy="52" r="26" fill="none" stroke="#333" stroke-width="3" opacity=".7"/>' +
      '<g transform="translate(150 186)"><path d="M0 10q0-12 16-12h44q16 0 16 12l6 22q2 8-8 8-6 0-12-10H18q-6 10-12 10-10 0-8-8z" fill="#222" stroke="#555" stroke-width="2"/>' +
      '<circle cx="18" cy="12" r="5" fill="#444"/><circle cx="58" cy="8" r="3" fill="' + RED + '"/><circle cx="64" cy="14" r="3" fill="' + BLU + '"/><circle cx="52" cy="14" r="3" fill="' + GOLD + '"/><circle cx="58" cy="20" r="3" fill="#2ee86b"/></g>' +
      '<rect x="40" y="150" width="60" height="22" rx="3" fill="#222"/><circle cx="56" cy="161" r="6" fill="#444"/><circle cx="84" cy="161" r="6" fill="#444"/>');
  }

  /* 4. Paramedic! on the soundtrack: marquee + ambulance lights */
  function sobmarquee() {
    const bulbs = Array.from({ length: 22 }, (_, i) => '<circle cx="' + (64 + i * 13) + '" cy="40" r="3" fill="#ffe7a0" class="sob-bulb' + (i % 2 ? " sob-bulb2" : "") + '"/><circle cx="' + (64 + i * 13) + '" cy="112" r="3" fill="#ffe7a0" class="sob-bulb' + (i % 2 ? "" : " sob-bulb2") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sob4)"/>' +
      '<g class="sob-sweep" opacity=".25"><path d="M200 260L150 0h100z" fill="#fff"/></g>' +
      '<rect x="50" y="30" width="300" height="92" rx="4" fill="#1b1b22" stroke="' + GOLD + '" stroke-width="3"/>' + bulbs +
      '<text x="200" y="68" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="30" fill="' + RED + '" letter-spacing="2">PARAMEDIC!</text>' +
      '<text x="200" y="94" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">ON THE SOUNDTRACK · 2018</text>' +
      '<rect x="70" y="122" width="260" height="70" fill="#2a2420"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="' + (84 + i * 62) + '" y="134" width="46" height="58" fill="#4a3a2a" stroke="' + GOLD + '" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="192" width="400" height="68" fill="#2f3136"/><rect x="0" y="192" width="400" height="4" fill="#bdbdb4"/>' +
      '<g transform="translate(250 196)"><rect x="0" y="6" width="110" height="40" rx="5" fill="#f4f4f4" stroke="#999" stroke-width="1.5"/><rect x="72" y="14" width="34" height="18" rx="3" fill="#1d2a38"/>' +
      '<text x="36" y="27" text-anchor="middle" ' + font + ' font-size="9" fill="' + RED + '">AMBULANCE</text>' +
      '<rect x="0" y="34" width="110" height="4" fill="' + RED + '"/>' +
      '<rect x="30" y="0" width="16" height="7" rx="2" fill="#ff2a2a" class="sob-red"/><rect x="52" y="0" width="16" height="7" rx="2" fill="#2a7bff" class="sob-blue"/>' +
      '<circle cx="22" cy="48" r="9" fill="#111"/><circle cx="88" cy="48" r="9" fill="#111"/></g>' +
      '<circle cx="288" cy="190" r="60" fill="#ff2a2a" fill-opacity=".12" class="sob-red"/><circle cx="310" cy="190" r="60" fill="#2a7bff" fill-opacity=".12" class="sob-blue"/>',
      sky("sob4", "#0b0d1e", "#2b1a3a"));
  }

  /* 5. Rounds St & Gateway Dr in the Crest, the Hwy 37 Napa River bridge behind */
  function sobcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#sob5)"/>' +
      Array.from({ length: 14 }, (_, i) => '<circle cx="' + (12 + i * 29) + '" cy="' + (14 + (i * 7) % 30) + '" r="1" fill="#fff" class="sob-flk' + (i % 2 ? " sob-flk2" : "") + '"/>').join("") +
      '<path d="M0 92q80-20 160-6t240-10v24H0z" fill="#2a2f45"/>' +
      '<rect x="0" y="100" width="400" height="18" fill="#1f3550"/>' +
      '<path d="M30 92h340" stroke="#c9ccd2" stroke-width="4"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (48 + i * 44) + '" y="92" width="6" height="22" fill="#8c8f96"/>').join("") +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (34 + i * 21.5) + '" cy="89" r="1.8" fill="#ffd27a" class="sob-flk' + (i % 2 ? " sob-flk2" : "") + '"/>').join("") +
      '<text x="200" y="84" text-anchor="middle" ' + font + ' font-size="7" fill="#9fb0c8">HWY 37 · NAPA RIVER BRIDGE</text>' +
      '<rect x="0" y="118" width="400" height="80" fill="#6e5a4a"/>' +
      Array.from({ length: 6 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2 ? 15 : 0) - 10) + '" y="' + (120 + r * 13) + '" width="28" height="11" fill="#7d6655" stroke="#5a4838" stroke-width="1"/>').join("")).join("") +
      tag("SOB X RBE", 70, 172, 40, RED, -5) + tag("GANGIN", 250, 190, 22, GOLD, -3) +
      '<g class="sob-sp"><circle cx="330" cy="150" r="3" fill="' + BLU + '"/><circle cx="336" cy="146" r="2" fill="' + BLU + '"/></g><g class="sob-sp sob-sp2"><circle cx="340" cy="156" r="2.5" fill="' + RED + '"/></g>' +
      '<rect x="0" y="198" width="400" height="62" fill="#34363b"/><rect x="0" y="198" width="400" height="5" fill="#bdbdb4"/>' +
      car("sob-car", 0, 232, BLU) + car("sob-car sob-car2", 0, 232, GOLD) +
      '<rect x="362" y="70" width="5" height="128" fill="#6b7177"/>' + sign(296, 70, 100, "Rounds St") + sign(286, 96, 110, "Gateway Dr"),
      sky("sob5", "#090c1c", "#2c2a4a"));
  }

  window.SCENES = { sobstop, sobclub, sobstudio, sobmarquee, sobcorner };
})();
