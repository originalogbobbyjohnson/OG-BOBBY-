/* Black Milk producer game: Detroit, MI. The People Mover at Grand Circus Park, the little white Motown house, the TV dance show, the basement drum lab, the Grand Blvd corner with the RenCen. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cars{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.car{animation:cars 7s linear infinite}.car2{animation-delay:-3.5s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}.bl{animation:blink 1.6s ease-in-out infinite}.bl2{animation-delay:.4s}.bl3{animation-delay:.8s}.bl4{animation-delay:1.2s}' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.flk{animation:flick 2.4s infinite}' +
    '@keyframes floor{0%,100%{opacity:.35}50%{opacity:1}}.fl{animation:floor 1.2s steps(1) infinite}.f2{animation-delay:.3s}.f3{animation-delay:.6s}.f4{animation-delay:.9s}' +
    '@keyframes thump{0%,100%{transform:scale(1)}15%{transform:scale(1.1)}}.th{transform-box:fill-box;transform-origin:50% 50%;animation:thump .8s ease-out infinite}' +
    '@keyframes hit{0%,100%{transform:rotate(0)}20%{transform:rotate(-24deg)}}.st{transform-box:fill-box;transform-origin:100% 100%;animation:hit .8s ease-in-out infinite}.st2{animation-delay:.4s}' +
    '@keyframes sway{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.sw{transform-box:fill-box;transform-origin:50% 0%;animation:sway 1s ease-in-out infinite}.sw2{animation-delay:.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const MILK = "#f4f1e8", GOLD = "#e0a030", BLUE = "#3a7bd5", RED = "#d64545", GLASS = "#5b7fa6";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  /* Renaissance Center: tall middle glass cylinder ringed by four shorter ones */
  const rencen = (x, base, s, col, lit) => {
    let g = '<g fill="' + col + '">';
    [[-46, 90], [-26, 104], [26, 104], [46, 90]].forEach(([dx, h]) => g += '<rect x="' + (x + dx * s - 10 * s) + '" y="' + (base - h * s) + '" width="' + (20 * s) + '" height="' + (h * s) + '" rx="' + (6 * s) + '"/>');
    g += '<rect x="' + (x - 15 * s) + '" y="' + (base - 150 * s) + '" width="' + (30 * s) + '" height="' + (150 * s) + '" rx="' + (8 * s) + '"/></g>';
    if (lit) for (let i = 0; i < 8; i++) g += '<rect class="bl bl' + (i % 4 + 1) + '" x="' + (x - 10 * s) + '" y="' + (base - 140 * s + i * 16 * s) + '" width="' + (20 * s) + '" height="' + (2 * s) + '" fill="#9cc4ff" opacity=".7"/>';
    return g;
  };

  /* 1. The People Mover rolling into Grand Circus Park, elevated over downtown */
  function station() {
    let windows = "";
    for (let x = 24; x < 250; x += 36) windows += '<rect x="' + x + '" y="112" width="24" height="20" rx="3" fill="#dff1ff" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s1)"/>' + stars(14) +
      '<g opacity=".95">' + rencen(330, 170, 0.8, "#24314a", true) + '</g>' +
      '<rect x="30" y="80" width="40" height="110" fill="#1f2638"/><rect x="80" y="60" width="30" height="130" fill="#283048"/><rect x="230" y="70" width="34" height="120" fill="#1f2638"/>' +
      '<rect x="64" y="22" width="272" height="40" rx="4" fill="#111"/><rect x="64" y="22" width="272" height="4" fill="' + GOLD + '"/>' +
      '<text x="200" y="48" text-anchor="middle" ' + font + ' font-size="17" fill="#fff">Grand Circus Park</text>' +
      '<text x="200" y="58" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '" letter-spacing="2">PEOPLE MOVER</text>' +
      '<g class="anim-train">' +
        '<rect x="8" y="100" width="270" height="50" rx="14" fill="' + MILK + '" stroke="#8a95a3" stroke-width="2"/>' +
        '<rect x="8" y="136" width="270" height="6" fill="' + BLUE + '"/>' + windows +
        '<circle cx="266" cy="144" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="152" width="400" height="12" fill="#9aa0a8"/><rect x="0" y="164" width="400" height="4" fill="#6b7280"/>' +
      '<rect x="60" y="168" width="14" height="52" fill="#9aa0a8"/><rect x="300" y="168" width="14" height="52" fill="#9aa0a8"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3f48"/><rect x="0" y="220" width="400" height="4" fill="#59606b"/>' +
      '<g class="car"><rect x="0" y="232" width="44" height="14" rx="4" fill="' + RED + '"/><circle cx="10" cy="246" r="4" fill="#111"/><circle cx="34" cy="246" r="4" fill="#111"/></g>' +
      tag("THE D", 120, 214, 26, GOLD, -5),
      sky("s1", "#0b1226", "#3a4a72"));
  }

  /* 2. The little white Motown house on W Grand Blvd: white siding, blue trim, the studio light on */
  function hitsville() {
    let siding = "";
    for (let y = 96; y < 200; y += 6) siding += '<path d="M90 ' + y + 'h220" stroke="#d9d6cc" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#s2)"/>' +
      '<rect x="10" y="110" width="70" height="96" fill="#8a8c90"/><rect x="320" y="104" width="76" height="102" fill="#8a8c90"/>' +
      '<path d="M84 96L200 50L316 96z" fill="#3c4048"/>' +
      '<rect x="90" y="96" width="220" height="110" fill="' + MILK + '"/>' + siding +
      '<rect x="100" y="104" width="34" height="34" fill="#1d3a66" stroke="#fff" stroke-width="3"/><rect x="266" y="104" width="34" height="34" fill="#1d3a66" stroke="#fff" stroke-width="3"/>' +
      '<rect class="bl" x="102" y="106" width="30" height="30" fill="#ffd98a" opacity=".6"/>' +
      '<rect x="120" y="140" width="160" height="22" fill="' + BLUE + '" stroke="#163a72" stroke-width="2"/>' +
      '<text x="200" y="156" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="3">STUDIO A</text>' +
      '<rect x="182" y="166" width="36" height="40" fill="#1d3a66"/><circle cx="210" cy="188" r="2" fill="' + GOLD + '"/>' +
      '<rect x="110" y="170" width="28" height="26" fill="#1d3a66" stroke="#fff" stroke-width="3"/><rect x="262" y="170" width="28" height="26" fill="#1d3a66" stroke="#fff" stroke-width="3"/>' +
      '<rect x="170" y="206" width="60" height="8" fill="#b8b4a8"/>' +
      '<rect x="0" y="206" width="400" height="12" fill="#5d9b4f"/><rect x="0" y="218" width="400" height="42" fill="#3a3f48"/>' +
      '<g class="car"><rect x="0" y="230" width="46" height="14" rx="5" fill="' + GOLD + '"/><rect x="10" y="224" width="24" height="8" rx="3" fill="#2a2a32"/><circle cx="10" cy="244" r="4" fill="#111"/><circle cx="36" cy="244" r="4" fill="#111"/></g>' +
      '<g class="car car2"><rect x="0" y="236" width="46" height="14" rx="5" fill="' + BLUE + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="36" cy="250" r="4" fill="#111"/></g>',
      sky("s2", "#6aa8de", "#e8e2cf"));
  }

  /* 3. The TV dance show: light-up dance floor, studio lights swinging, the ON AIR sign */
  function danceshow() {
    let floor = "";
    const cols = [RED, GOLD, BLUE, "#8e44ad", "#2ecc71"];
    for (let r = 0; r < 4; r++) for (let c = 0; c < 10; c++) {
      const x0 = 40 + c * 32 - r * 10, x1 = x0 + 32, w = 32 + r * 2;
      floor += '<rect class="fl f' + ((r + c) % 4 + 1) + '" x="' + (c * 40 + (r % 2 ? 0 : 0)) + '" y="' + (180 + r * 20) + '" width="38" height="18" fill="' + cols[(r * 3 + c) % 5] + '"/>';
    }
    const light = (x, cls) => '<g class="sw ' + cls + '"><rect x="' + (x - 2) + '" y="22" width="4" height="20" fill="#555"/><path d="M' + (x - 12) + ' 42h24l-6 14h-12z" fill="#333"/><path d="M' + (x - 6) + ' 56L' + (x - 40) + ' 176h80L' + (x + 6) + ' 56z" fill="#fff6c2" opacity=".14"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#160f22"/>' +
      '<rect x="0" y="20" width="400" height="6" fill="#333"/>' +
      light(80, "") + light(200, "sw2") + light(320, "") +
      '<rect x="150" y="70" width="100" height="40" rx="6" fill="#2a0e10" stroke="' + RED + '" stroke-width="3"/>' +
      '<text class="flk" x="200" y="97" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="' + RED + '" letter-spacing="3">ON AIR</text>' +
      '<text x="200" y="140" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + GOLD + '" letter-spacing="2">NEW DANCE SHOW</text>' +
      '<rect x="0" y="176" width="400" height="84" fill="#111"/>' + floor +
      '<g><rect x="20" y="120" width="40" height="26" rx="3" fill="#2c2c30"/><rect x="58" y="126" width="12" height="14" fill="#2c2c30"/><circle cx="68" cy="133" r="5" fill="' + GLASS + '"/><path d="M36 146l-8 34M44 146l8 34" stroke="#555" stroke-width="3"/></g>');
  }

  /* 4. The basement drum lab: live kit thumping, sticks hitting, sampler and the tape deck */
  function lab() {
    let pads = "";
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) pads += '<rect class="' + ((r * 4 + c) % 5 === 3 ? "bl bl" + (c + 1) : "") + '" x="' + (282 + c * 20) + '" y="' + (176 + r * 14) + '" width="16" height="10" rx="2" fill="' + ((r * 4 + c) % 5 === 3 ? GOLD : "#5b5f68") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#17151a"/>' +
      (() => { let b = ""; for (let y = 10; y < 150; y += 14) for (let x = (y / 14) % 2 ? 0 : 20; x < 400; x += 40) b += '<rect x="' + x + '" y="' + y + '" width="38" height="12" fill="#2a2630"/>'; return b; })() +
      '<rect x="0" y="150" width="400" height="110" fill="#3a2f28"/>' +
      '<rect x="150" y="30" width="100" height="24" rx="4" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="47" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '" letter-spacing="3">TRONIC</text>' +
      '<circle class="th" cx="150" cy="190" r="40" fill="' + MILK + '" stroke="#222" stroke-width="4"/><circle cx="150" cy="190" r="28" fill="none" stroke="' + RED + '" stroke-width="3"/>' +
      '<ellipse cx="80" cy="150" rx="28" ry="8" fill="#d9d6cc" stroke="#222" stroke-width="2"/><rect x="54" y="150" width="52" height="30" fill="' + RED + '"/><ellipse cx="80" cy="180" rx="26" ry="7" fill="#7a2020"/>' +
      '<ellipse cx="226" cy="140" rx="24" ry="7" fill="#d9d6cc" stroke="#222" stroke-width="2"/><rect x="202" y="140" width="48" height="22" fill="' + RED + '"/>' +
      '<path d="M40 100h60" stroke="' + GOLD + '" stroke-width="4"/><path d="M70 100v50" stroke="#888" stroke-width="2"/>' +
      '<path d="M200 96h56" stroke="' + GOLD + '" stroke-width="4"/><path d="M228 96v40" stroke="#888" stroke-width="2"/>' +
      '<path class="st" d="M100 120l-26 22" stroke="#e8d9b0" stroke-width="4" stroke-linecap="round"/><path class="st st2" d="M246 112l-22 22" stroke="#e8d9b0" stroke-width="4" stroke-linecap="round"/>' +
      '<rect x="272" y="168" width="100" height="70" rx="4" fill="#3a3d44" stroke="#22252b" stroke-width="2"/>' + pads +
      '<rect x="296" y="120" width="70" height="36" rx="3" fill="#2c2c30" stroke="#111" stroke-width="2"/><circle class="th" cx="316" cy="138" r="9" fill="#111" stroke="#555"/><circle class="th" cx="346" cy="138" r="9" fill="#111" stroke="#555"/>');
  }

  /* 5. The corner: W Grand Blvd and Woodward Ave, BLACK MILK tagged, the RenCen glowing downtown */
  function corner() {
    const BRICK = "#6e3424", BRICK2 = "#55281c";
    return svg(
      '<rect width="400" height="260" fill="url(#s5)"/>' + stars(16) +
      rencen(150, 132, 0.75, "#2a3654", true) +
      '<rect x="20" y="90" width="34" height="42" fill="#232c44"/><rect x="230" y="84" width="30" height="48" fill="#232c44"/><rect x="266" y="100" width="40" height="32" fill="#232c44"/>' +
      '<rect x="0" y="128" width="400" height="96" fill="' + BRICK + '"/>' +
      (() => { let b = ""; for (let y = 134; y < 224; y += 8) b += '<path d="M0 ' + y + 'h400" stroke="' + BRICK2 + '" stroke-width="1"/>'; return b; })() +
      tag("BLACK MILK", 16, 196, 40, MILK, -5) + tag("THE D", 170, 218, 20, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="car"><rect x="0" y="236" width="40" height="14" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="30" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="330" y="40" width="5" height="186" fill="#3d4b3f"/>' +
      '<rect x="280" y="44" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">W Grand Blvd</text>' +
      '<rect x="284" y="70" width="98" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="333" y="86" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Woodward Ave</text>' +
      '<circle class="flk" cx="333" cy="36" r="5" fill="#fff6c2"/>',
      sky("s5", "#070a16", "#2c3554"));
  }

  window.SCENES = { station: station, hitsville: hitsville, danceshow: danceshow, lab: lab, corner: corner };
})();
