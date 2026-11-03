/* Showbiz producer scenes */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes cars{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-2.4s}.car3{animation-delay:-4.8s}' +
    '@keyframes carsL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.carL{animation:carsL 8s linear infinite}.carL2{animation-delay:-4s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.4s ease-in-out infinite}.bl2{animation-delay:.35s}.bl3{animation-delay:.7s}.bl4{animation-delay:1.05s}' +
    '@keyframes pad{0%,70%,100%{opacity:.25}8%,30%{opacity:1}}.pd{animation:pad 1.6s steps(1) infinite}' +
    '.p1{animation-delay:0s}.p2{animation-delay:.2s}.p3{animation-delay:.4s}.p4{animation-delay:.6s}.p5{animation-delay:.8s}.p6{animation-delay:1s}.p7{animation-delay:1.2s}.p8{animation-delay:1.4s}' +
    '@keyframes vinyl{from{transform:rotate(0)}to{transform:rotate(360deg)}}.vn{transform-box:fill-box;transform-origin:50% 50%;animation:vinyl 1.8s linear infinite}' +
    '@keyframes meter{0%,100%{transform:scaleY(.3)}25%{transform:scaleY(1)}50%{transform:scaleY(.55)}75%{transform:scaleY(.85)}}.mt{transform-box:fill-box;transform-origin:50% 100%;animation:meter .9s ease-in-out infinite}.mt2{animation-delay:.2s}.mt3{animation-delay:.45s}.mt4{animation-delay:.1s}.mt5{animation-delay:.3s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.bob{animation:bob 1.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pads = (x, y, c1, c2) => { let s = ""; for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) s += '<rect class="pd p' + (r * 4 + c + 1) + '" x="' + (x + c * 22) + '" y="' + (y + r * 18) + '" width="17" height="13" rx="2" fill="' + (r ? c2 : c1) + '"/>'; return s; };
  const turntable = (x, y, label) => '<rect x="' + x + '" y="' + y + '" width="110" height="70" rx="4" fill="#2c2c30" stroke="#55565c" stroke-width="2"/>' +
    '<g class="vn"><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="28" fill="#0b0b0b"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="20" fill="none" stroke="#2a2a2a"/><circle cx="' + (x + 48) + '" cy="' + (y + 35) + '" r="9" fill="' + label + '"/><rect x="' + (x + 46) + '" y="' + (y + 27) + '" width="4" height="5" fill="#fff"/></g>' +
    '<path d="M' + (x + 96) + ' ' + (y + 10) + 'l-14 30" stroke="#c8c8c8" stroke-width="3" stroke-linecap="round"/>';
  const brick = (x, y, w, h, c, line) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let yy = y + 8; yy < y + h; yy += 8) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + line + '" stroke-width="1"/>'; return s; };
  const GOLD = "#f0c040", PURPLE = "#8a5cc8", RED = "#d9452b", GREEN = "#00933c", ORANGE = "#ff6319";

  /* 1. The 4 train on the el over Jerome Av, pulling into Fordham Rd */
  function station() {
    let windows = ""; for (let x = 22; x < 260; x += 46) windows += '<rect x="' + x + '" y="94" width="30" height="22" rx="3" fill="#dff1ff" opacity=".9"/>';
    let rail = ""; for (let x = 0; x < 400; x += 20) rail += '<rect x="' + x + '" y="150" width="3" height="40" fill="#5a4a3a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(12) +
      '<rect x="0" y="8" width="400" height="10" fill="#5a4a3a"/><rect x="0" y="18" width="400" height="4" fill="#3d3228"/>' +
      '<rect x="20" y="30" width="360" height="40" rx="4" fill="#111"/><rect x="20" y="30" width="360" height="4" fill="#fff"/>' +
      '<text x="32" y="57" ' + font + ' font-size="16" fill="#fff">Fordham Rd</text>' + bullet(350, 52, "4", GREEN) +
      '<g class="anim-train">' +
        '<rect x="8" y="82" width="304" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="124" width="304" height="5" fill="' + GREEN + '"/>' + windows +
        '<circle cx="304" cy="136" r="4" fill="#fff6c2"/>' + bullet(292, 102, "4", GREEN) +
      '</g>' +
      '<rect x="0" y="144" width="400" height="8" fill="#eab308"/>' + rail + '<rect x="0" y="186" width="400" height="8" fill="#5a4a3a"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#1a1c22"/>' +
      tag("SHOWBIZ", 40, 240, 34, GOLD, -5) + tag("D.I.T.C.", 250, 240, 30, PURPLE, -7),
      sky("s1", "#101634", "#5a3a6a"));
  }

  /* 2. Down in the subway arcade at 42 St: white tile walls, a record shop window full of breaks, a train rumbling past */
  function arcade() {
    let tiles = ""; for (let y = 0; y < 230; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#d6d3c8" stroke-width="1"/>';
    for (let y = 0; y < 230; y += 10) for (let x = (y / 10 % 2) * 10; x < 400; x += 20) tiles += '<path d="M' + x + ' ' + y + 'v10" stroke="#d6d3c8" stroke-width="1"/>';
    let sleeves = ""; ["#d9452b", "#f0c040", "#3a8fd6", "#8a5cc8", "#f2efe6", "#2f9e5a"].forEach((c, i) => sleeves += '<rect x="' + (78 + i * 42) + '" y="' + (98 + (i % 2) * 6) + '" width="34" height="34" fill="' + c + '"/><circle cx="' + (95 + i * 42) + '" cy="' + (115 + (i % 2) * 6) + '" r="9" fill="#111"/>');
    let crates = ""; [[60, 186], [150, 186], [240, 186]].forEach(([x, y], k) => { crates += '<rect x="' + x + '" y="' + y + '" width="80" height="36" fill="#a0703f" stroke="#5e3d1d" stroke-width="2"/>'; for (let i = 0; i < 8; i++) crates += '<rect x="' + (x + 4 + i * 9) + '" y="' + (y - 14 + ((i + k) % 2) * 4) + '" width="7" height="28" fill="' + ["#d9452b", "#f0c040", "#3a8fd6", "#f2efe6"][i % 4] + '"/>'; });
    return svg(
      '<rect width="400" height="260" fill="#efece2"/>' + tiles +
      '<rect x="0" y="0" width="400" height="16" fill="#7a5a2a"/><rect x="0" y="16" width="400" height="4" fill="' + ORANGE + '"/>' +
      '<rect x="60" y="30" width="280" height="40" rx="4" fill="#111"/>' +
      '<text class="flk" x="200" y="59" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" letter-spacing="2" fill="' + GOLD + '">DOWNSTAIRS RECORDS</text>' +
      '<rect x="60" y="84" width="280" height="62" fill="#f6dfa6"/>' + sleeves + '<rect x="60" y="84" width="280" height="62" fill="none" stroke="#333" stroke-width="5"/>' +
      '<rect x="0" y="222" width="400" height="38" fill="#7d7a72"/>' + crates +
      '<g class="car"><rect x="0" y="232" width="70" height="20" rx="4" fill="#b8bdc4"/><rect x="6" y="236" width="14" height="8" fill="#dff1ff"/><rect x="26" y="236" width="14" height="8" fill="#dff1ff"/><rect x="46" y="236" width="14" height="8" fill="#dff1ff"/></g>' +
      '<text x="200" y="162" text-anchor="middle" ' + font + ' font-size="10" fill="#333" letter-spacing="2">42 ST ARCADE  BREAKS 1 DOLLAR</text>');
  }

  /* 3. Show's beat lab: SP-1200 style sampler, two turntables, the reel spinning and meters bouncing */
  function lab() {
    let eq = ""; for (let i = 0; i < 5; i++) eq += '<rect class="mt mt' + (i + 1) + '" x="' + (176 + i * 9) + '" y="64" width="6" height="40" fill="' + (i > 2 ? RED : "#5ee06a") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#1d1a20"/><rect x="0" y="0" width="400" height="150" fill="#30283a"/>' +
      '<rect x="20" y="20" width="120" height="110" fill="#1a1622" stroke="#555" stroke-width="2"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (28 + (i % 2) * 56) + '" y="' + (28 + Math.floor(i / 2) * 50) + '" width="48" height="44" fill="' + [RED, GOLD, PURPLE, "#3a8fd6"][i] + '"/><circle cx="' + (52 + (i % 2) * 56) + '" cy="' + (50 + Math.floor(i / 2) * 50) + '" r="12" fill="#111"/>').join("") +
      '<rect x="166" y="54" width="62" height="56" rx="4" fill="#111" stroke="#444" stroke-width="2"/>' + eq +
      '<g class="vn"><circle cx="314" cy="74" r="40" fill="#0b0b0b"/><circle cx="314" cy="74" r="28" fill="none" stroke="#2a2a2a"/><circle cx="314" cy="74" r="13" fill="' + GOLD + '"/><rect x="312" y="64" width="4" height="6" fill="#fff"/></g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#5a3e2b"/><rect x="0" y="150" width="400" height="6" fill="#6e4c34"/>' +
      '<rect x="14" y="164" width="150" height="80" rx="4" fill="#9a9ea4" stroke="#4a4d52" stroke-width="2"/><rect x="22" y="170" width="66" height="14" fill="#1f3a26"/>' +
      '<text x="26" y="181" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#7cf08a">SOUL CLAP 01</text>' + pads(22, 196, GOLD, RED) +
      turntable(172, 170, RED) + turntable(286, 170, PURPLE));
  }

  /* 4. The Paradise Theater marquee on the Grand Concourse, bulbs chasing */
  function paradise() {
    let bulbs = ""; for (let x = 66; x <= 334; x += 12) bulbs += '<circle class="bl bl' + ((x / 12) % 4 + 1) + '" cx="' + x + '" cy="128" r="3" fill="#fff6c2"/><circle class="bl bl' + (((x / 12) + 2) % 4 + 1) + '" cx="' + x + '" cy="168" r="3" fill="#fff6c2"/>';
    let orn = ""; for (let x = 80; x < 330; x += 34) orn += '<path d="M' + x + ' 96q12 -16 24 0" stroke="#e8c58a" stroke-width="3" fill="none"/><circle cx="' + (x + 12) + '" cy="84" r="4" fill="#e8c58a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s4)"/>' + stars(14) +
      '<rect x="40" y="40" width="320" height="180" fill="#c9a77a"/><rect x="40" y="40" width="320" height="14" fill="#a8845a"/>' + orn +
      '<path d="M150 40q50 -30 100 0z" fill="#c9a77a" stroke="#a8845a" stroke-width="3"/>' +
      '<rect x="60" y="120" width="280" height="54" fill="#5a1f2a" stroke="#e8c58a" stroke-width="3"/>' + bulbs +
      '<text x="200" y="155" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" letter-spacing="6" fill="' + GOLD + '">PARADISE</text>' +
      '<rect x="80" y="182" width="50" height="38" fill="#2a1a1a"/><rect x="175" y="182" width="50" height="38" fill="#2a1a1a"/><rect x="270" y="182" width="50" height="38" fill="#2a1a1a"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#55575c"/><rect x="0" y="220" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="232" width="40" height="14" rx="4" fill="#f0c040"/><circle cx="8" cy="246" r="4" fill="#111"/><circle cx="32" cy="246" r="4" fill="#111"/></g>' +
      '<text x="200" y="256" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".85" letter-spacing="3">GRAND CONCOURSE, THE BRONX</text>',
      sky("s4", "#0c1030", "#3a2a5a"));
  }

  /* 5. The corner: W Kingsbridge Rd and Jerome Av, SHOWBIZ tag, the Kingsbridge Armory towers behind */
  function corner() {
    let crenel = ""; for (let x = 40; x < 360; x += 16) crenel += '<rect x="' + x + '" y="62" width="9" height="8" fill="#9a4a32"/>';
    let wins = ""; for (let x = 70; x < 340; x += 30) wins += '<path d="M' + x + ' 120v-24a8 8 0 0 1 16 0v24z" fill="#3a2420"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(10) +
      '<rect x="40" y="70" width="320" height="76" fill="#a5543a"/>' + crenel + wins +
      '<rect x="20" y="40" width="36" height="106" fill="#9a4a32"/><rect x="344" y="40" width="36" height="106" fill="#9a4a32"/>' +
      '<rect x="20" y="34" width="8" height="8" fill="#9a4a32"/><rect x="34" y="34" width="8" height="8" fill="#9a4a32"/><rect x="48" y="34" width="8" height="8" fill="#9a4a32"/>' +
      '<rect x="344" y="34" width="8" height="8" fill="#9a4a32"/><rect x="358" y="34" width="8" height="8" fill="#9a4a32"/><rect x="372" y="34" width="8" height="8" fill="#9a4a32"/>' +
      '<path d="M60 70q140 -40 280 0" fill="#7a8a8a" stroke="#5a6a6a" stroke-width="2"/>' +
      brick(0, 140, 400, 84, "#8e4a33", "#6f3826") +
      tag("SHOWBIZ", 22, 202, 42, GOLD, -5) + tag("SOUL CLAP", 200, 220, 22, PURPLE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="carL"><rect x="0" y="236" width="34" height="12" rx="3" fill="' + RED + '"/></g>' +
      '<rect x="330" y="40" width="5" height="190" fill="#3d4b3f"/>' + sign(250, 44, 146, "W Kingsbridge Rd") + sign(282, 70, 100, "Jerome Av") +
      '<circle class="bl" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#0d1030", "#3a3a6a"));
  }

  window.SCENES = { station: station, arcade: arcade, lab: lab, paradise: paradise, corner: corner };
})();
