/* miccapes scenes (Regions tab: The Northwest; St. Johns, North Portland, Oregon). CSS classes and ids prefixed mc- (the page's own anim-train is kept).
   1 N Lombard TC on the MAX Yellow Line: at-grade platform in the median of N Interstate Ave, a MAX train sliding in, the 4 Fessenden bus waiting.
   2 Cathedral Park under the St. Johns Bridge: the tall pointed concrete arches, the Willamette, a kite in the gray sky.
   3 Pier Park in St. Johns: the giant Douglas firs and the skate bowl, a skater carving.
   4 The barn stage at Pickathon (he played the Pumphouse Sessions and Lucky Barn there in 2017): wood barn, string lights, mic, crowd.
   5 N Fessenden St and N St Louis Ave in St. Johns: green signs, MIC CAPES tagged on the wall, the green St. Johns Bridge towers behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mcrain{0%{transform:translate(0,-40px)}100%{transform:translate(-14px,280px)}}.mc-rn{animation:mcrain 1.1s linear infinite}.mc-rn2{animation-delay:-.37s}.mc-rn3{animation-delay:-.74s}' +
    '@keyframes mcglow{0%,100%{opacity:.45}50%{opacity:1}}.mc-glow{animation:mcglow 2.2s ease-in-out infinite}.mc-g2{animation-delay:-1.1s}' +
    '@keyframes mckite{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(10px,-8px) rotate(6deg)}}.mc-kite{transform-box:fill-box;transform-origin:50% 100%;animation:mckite 3s ease-in-out infinite}' +
    '@keyframes mccloud{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.mc-cl{animation:mccloud 30s linear infinite}.mc-cl2{animation-delay:-15s}' +
    '@keyframes mcskate{0%{transform:translate(0,0) rotate(0)}25%{transform:translate(60px,26px) rotate(18deg)}50%{transform:translate(120px,0) rotate(0)}75%{transform:translate(60px,26px) rotate(-18deg)}100%{transform:translate(0,0) rotate(0)}}.mc-sk{transform-box:fill-box;transform-origin:50% 100%;animation:mcskate 3.4s ease-in-out infinite}' +
    '@keyframes mcbo{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.mc-bo{animation:mcbo .8s ease-in-out infinite}.mc-bo2{animation-delay:-.27s}.mc-bo3{animation-delay:-.54s}' +
    '@keyframes mcbulb{0%,100%{opacity:1}50%{opacity:.4}}.mc-bl{animation:mcbulb 1.6s ease-in-out infinite}.mc-bl2{animation-delay:-.8s}' +
    '@keyframes mcboat{from{transform:translateX(-90px)}to{transform:translateX(470px)}}.mc-boat{animation:mcboat 16s linear infinite}' +
    '@keyframes mccar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.mc-car{animation:mccar 7s linear infinite}' +
    '@keyframes mcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mc-sp{animation:mcspray 1.4s ease-out infinite}.mc-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const rain = (n, col) => { let s = ""; for (let i = 0; i < n; i++) s += '<path class="mc-rn' + ["", " mc-rn2", " mc-rn3"][i % 3] + '" d="M' + ((i * 37) % 420) + ' ' + ((i * 29) % 60) + 'l-3 12" stroke="' + (col || "#cfe3f2") + '" stroke-width="1.2" opacity=".5"/>'; return s; };
  const cloud = (cls, x, y, s, c) => '<g class="' + cls + '" opacity=".9"><ellipse cx="' + x + '" cy="' + y + '" rx="' + (30 * s) + '" ry="' + (9 * s) + '" fill="' + (c || "#fff") + '"/><ellipse cx="' + (x + 14 * s) + '" cy="' + (y - 7 * s) + '" rx="' + (16 * s) + '" ry="' + (9 * s) + '" fill="' + (c || "#fff") + '"/></g>';
  const fir = (x, base, h, c) => { const w = h * .32; let g = '<rect x="' + (x - 3) + '" y="' + (base - 14) + '" width="6" height="14" fill="#4a3324"/>'; for (let i = 0; i < 4; i++) { const t = base - 10 - i * h / 4.6; g += '<path d="M' + (x - w * (1 - i * .2)) + ' ' + t + 'L' + x + ' ' + (t - h / 2.6) + 'L' + (x + w * (1 - i * .2)) + ' ' + t + 'z" fill="' + (c || "#1f4a32") + '"/>'; } return g; };
  const MAXY = "#ffc52f", BRIDGE = "#3f8f7a", BRIDGE2 = "#2f6e5e", GOLD = "#f0c24b", CREAM = "#eeeae0", BLUE = "#1f5aa6";

  /* St. Johns Bridge tower: two legs, pointed Gothic top with a spire */
  const tower = (x, base, h, col, dark) => {
    const top = base - h;
    return '<rect x="' + (x - 14) + '" y="' + top + '" width="8" height="' + h + '" fill="' + col + '"/><rect x="' + (x + 6) + '" y="' + top + '" width="8" height="' + h + '" fill="' + col + '"/>' +
      '<path d="M' + (x - 6) + ' ' + (top + h * .55) + 'h12M' + (x - 6) + ' ' + (top + h * .3) + 'h12" stroke="' + dark + '" stroke-width="4"/>' +
      '<path d="M' + (x - 6) + ' ' + (top + h * .3) + 'q6 -10 12 0" stroke="' + col + '" stroke-width="3" fill="none"/>' +
      '<path d="M' + (x - 14) + ' ' + top + 'L' + (x - 10) + ' ' + (top - 16) + 'L' + (x - 6) + ' ' + top + 'z" fill="' + col + '"/><path d="M' + (x + 6) + ' ' + top + 'L' + (x + 10) + ' ' + (top - 16) + 'L' + (x + 14) + ' ' + top + 'z" fill="' + col + '"/>' +
      '<rect x="' + (x - 2) + '" y="' + (top - 6) + '" width="4" height="10" fill="' + col + '"/><path d="M' + (x - 2) + ' ' + (top - 6) + 'L' + x + ' ' + (top - 14) + 'L' + (x + 2) + ' ' + (top - 6) + 'z" fill="' + col + '"/>';
  };

  /* 1. N Lombard TC: median platform on N Interstate Ave, a MAX train sliding in */
  function mcstation() {
    let wins = "";
    for (let x = 40; x < 300; x += 34) wins += '<rect x="' + x + '" y="124" width="24" height="24" rx="3" fill="#cfe1ee" opacity=".95"/>';
    let wire = '<path d="M0 72H400" stroke="#333" stroke-width="1.5"/><path d="M0 78H400" stroke="#333" stroke-width="1"/>';
    for (let x = 30; x < 400; x += 120) wire += '<rect x="' + x + '" y="60" width="5" height="128" fill="#4d5258"/><path d="M' + x + ' 66h26" stroke="#4d5258" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mc-s1)"/>' + cloud("mc-cl", 80, 30, 1.2, "#aeb8c1") + cloud("mc-cl mc-cl2", 280, 22, 1, "#9ea9b3") +
      fir(350, 112, 70) + fir(380, 112, 56) + fir(14, 112, 60) +
      '<rect x="0" y="100" width="400" height="14" fill="#6c7a72"/>' + wire +
      /* station sign */
      '<rect x="196" y="40" width="4" height="22" fill="#4d5258"/><rect x="96" y="14" width="208" height="30" rx="3" fill="#161a1f" stroke="#4d5258"/>' +
      '<circle cx="118" cy="29" r="11" fill="' + MAXY + '" stroke="#fff" stroke-width="1.2"/><text x="118" y="32.5" text-anchor="middle" ' + font + ' font-size="8" fill="#111">MAX</text>' +
      '<text x="214" y="35" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">N Lombard TC</text>' +
      /* train */
      '<g class="anim-train">' +
        '<rect x="14" y="112" width="300" height="70" rx="12" fill="' + CREAM + '" stroke="#8a95a3" stroke-width="2"/>' +
        '<rect x="14" y="156" width="300" height="9" fill="' + BLUE + '"/><rect x="14" y="165" width="300" height="4" fill="' + MAXY + '"/>' + wins +
        '<rect x="290" y="122" width="18" height="30" rx="5" fill="#9fc0dc"/><circle cx="304" cy="172" r="4" fill="#fff6c2"/>' +
        '<rect x="148" y="122" width="28" height="50" rx="2" fill="' + MAXY + '" opacity=".9" stroke="#8a95a3"/><path d="M162 122v50" stroke="#8a6d10"/>' +
        '<rect x="150" y="104" width="30" height="8" fill="#4d5258"/><path d="M155 104l10 -26 10 26" stroke="#4d5258" stroke-width="2" fill="none"/>' +
      '</g>' +
      /* platform + shelter + the 4 bus waiting beyond */
      '<rect x="0" y="182" width="400" height="78" fill="#7b7f84"/><rect x="0" y="182" width="400" height="7" fill="' + MAXY + '"/>' +
      '<rect x="318" y="196" width="70" height="4" fill="#3a3f45"/><rect x="322" y="200" width="3" height="40" fill="#3a3f45"/><rect x="381" y="200" width="3" height="40" fill="#3a3f45"/><rect x="326" y="202" width="54" height="26" fill="#bcd3e0" opacity=".45"/>' +
      '<text x="200" y="228" text-anchor="middle" ' + font + ' font-size="10" fill="#eeeae0" letter-spacing="2">BUS 4 FESSENDEN TO ST. JOHNS</text>' +
      rain(34),
      sky("mc-s1", "#6f7d88", "#bcc5cc"));
  }

  /* 2. Cathedral Park: the pointed concrete arches under the St. Johns Bridge, the Willamette */
  function mccathedral() {
    const arch = (x, w, top) => '<path d="M' + (x - w / 2) + ' 200V' + (top + w * 1.1) + 'Q' + (x - w / 2) + ' ' + (top + w * .35) + ' ' + x + ' ' + top + 'Q' + (x + w / 2) + ' ' + (top + w * .35) + ' ' + (x + w / 2) + ' ' + (top + w * 1.1) + 'V200z" fill="url(#mc-s2)"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mc-s2)"/>' + cloud("mc-cl", 60, 28, 1.1, "#c7cfd6") +
      /* bridge deck in green high above */
      '<rect x="0" y="16" width="400" height="14" fill="' + BRIDGE + '"/><rect x="0" y="30" width="400" height="4" fill="' + BRIDGE2 + '"/>' +
      /* pier wall with tall pointed arches */
      '<rect x="20" y="34" width="360" height="166" fill="#b9b7ad"/>' +
      arch(80, 48, 50) + arch(200, 56, 42) + arch(320, 48, 50) +
      '<path d="M20 34v166M380 34v166" stroke="#8f8d84" stroke-width="6"/>' +
      '<path d="M140 34v166M260 34v166" stroke="#a5a399" stroke-width="10"/>' +
      /* river through the arches, a tug boat */
      '<rect x="0" y="150" width="400" height="22" fill="#5d7d8e" opacity=".9"/>' +
      '<g class="mc-boat"><rect x="0" y="152" width="34" height="9" rx="3" fill="#a8362b"/><rect x="8" y="144" width="14" height="9" fill="#eeeae0"/></g>' +
      /* the lawn */
      '<path d="M0 260V196q100 -18 200 -4q100 14 200 -2V260z" fill="#4f8a43"/><path d="M0 222q140 -20 260 0q80 12 140 0V260H0z" fill="#3f7637"/>' +
      /* kite */
      '<g class="mc-kite"><path d="M330 92l13 15 -13 15 -13 -15z" fill="' + GOLD + '"/><path d="M330 92v30M317 107h26" stroke="#7a5d10" stroke-width="1"/><path d="M330 122q-6 10 2 18q-8 8 0 16" stroke="#fff" stroke-width="1.5" fill="none"/></g>' +
      '<path d="M330 122Q326 180 312 214" stroke="#ddd" stroke-width=".8" fill="none"/>' +
      '<circle cx="312" cy="208" r="5" fill="#2a1c14"/><rect x="307" y="213" width="10" height="16" rx="3" fill="' + BRIDGE + '"/>' +
      rain(30),
      sky("mc-s2", "#8592a0", "#cfd6dc"));
  }

  /* 3. Pier Park: giant Douglas firs and the skate bowl */
  function mcpier() {
    let firs = "";
    [[20, 176, 150], [70, 176, 178], [130, 176, 140], [270, 176, 170], [330, 176, 190], [385, 176, 150]].forEach(f => firs += fir(f[0], f[1], f[2], "#1d4630"));
    return svg(
      '<rect width="400" height="260" fill="url(#mc-s3)"/>' + cloud("mc-cl", 200, 26, 1.1, "#b9c4ca") +
      '<path d="M0 180q200 -24 400 0v80H0z" fill="#2e5e36"/>' + firs +
      /* skate bowl */
      '<path d="M80 186h240v8q-20 0 -30 30q-10 22 -40 22h-100q-30 0 -40 -22q-10 -30 -30 -30z" fill="#b3b2ab"/>' +
      '<path d="M80 186h240" stroke="#e9e7df" stroke-width="4"/><path d="M110 196q10 30 40 40h100q30 -10 40 -40" stroke="#94938c" stroke-width="2" fill="none"/>' +
      /* skater */
      '<g transform="translate(118 170)"><g class="mc-sk"><circle cx="10" cy="4" r="5" fill="#2a1c14"/><rect x="5" y="9" width="10" height="13" rx="3" fill="' + GOLD + '"/><path d="M7 22l-4 9M13 22l4 9" stroke="#1d2a44" stroke-width="3"/><rect x="-2" y="31" width="24" height="3" rx="1.5" fill="#a8362b"/><circle cx="2" cy="36" r="2" fill="#111"/><circle cx="18" cy="36" r="2" fill="#111"/></g></g>' +
      '<rect x="0" y="246" width="400" height="14" fill="#264d2d"/>' +
      rain(22),
      sky("mc-s3", "#7d8a93", "#c8d0d4"));
  }

  /* 4. The barn stage at Pickathon: wood barn, string lights, mic, crowd */
  function mcbarn() {
    let boards = "";
    for (let x = 60; x < 340; x += 14) boards += '<path d="M' + x + ' 92V200" stroke="#5a3a22" stroke-width="2"/>';
    let bulbs = "";
    for (let i = 0; i < 13; i++) { const x = 20 + i * 30, y = 40 + Math.sin(i * .9) * 6 + (i % 2 ? 6 : 0); bulbs += '<circle class="mc-bl' + (i % 2 ? " mc-bl2" : "") + '" cx="' + x + '" cy="' + y + '" r="3.5" fill="#ffe7a0"/>'; }
    let crowd = "";
    for (let i = 0; i < 12; i++) { const x = 18 + i * 33; crowd += '<g class="mc-bo' + ["", " mc-bo2", " mc-bo3"][i % 3] + '"><circle cx="' + x + '" cy="214" r="10" fill="#15181d"/><rect x="' + (x - 13) + '" y="222" width="26" height="40" rx="8" fill="#15181d"/></g>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#mc-s4)"/>' +
      /* barn */
      '<path d="M40 100L200 30L360 100V200H40z" fill="#8a5a34"/>' + boards +
      '<path d="M40 100L200 30L360 100" stroke="#3e2716" stroke-width="6" fill="none"/>' +
      '<path d="M120 200V120h160v80z" fill="#2a1a10"/><path d="M120 120l160 80M280 120l-160 80" stroke="#4a2e1a" stroke-width="3" opacity=".7"/>' +
      '<path d="M0 44Q100 60 200 40T400 46" stroke="#333" stroke-width="1" fill="none"/>' + bulbs +
      /* stage + mic stand */
      '<rect x="100" y="190" width="200" height="12" fill="#3e2716"/>' +
      '<path d="M200 190V150" stroke="#cfcfcf" stroke-width="3"/><rect x="196" y="140" width="8" height="12" rx="4" fill="#222" stroke="#cfcfcf"/>' +
      '<path d="M160 190l-8 -26h-10l8 26z" fill="#1d1d1d"/><path d="M240 190l8 -26h10l-8 26z" fill="#1d1d1d"/>' +
      crowd,
      sky("mc-s4", "#1d2a3a", "#4d5d6e"));
  }

  /* 5. N Fessenden St and N St Louis Ave: green signs, MIC CAPES tagged, the bridge towers behind */
  function mccorner() {
    let brick = "";
    for (let y = 124; y < 214; y += 10) for (let x = (y / 10) % 2 ? 0 : 14; x < 400; x += 28) brick += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#4a2c22" opacity=".45"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#mc-s5)"/>' + cloud("mc-cl", 300, 26, 1.1, "#7c8a97") +
      /* St. Johns Bridge: towers, main cables, deck */
      '<path d="M-10 108Q40 40 82 26M82 26Q150 92 228 26M228 26Q300 70 410 104" stroke="' + BRIDGE2 + '" stroke-width="2.5" fill="none"/>' +
      (() => { let h = ""; for (let x = 96; x < 222; x += 10) { const t = 26 + (Math.pow((x - 155) / 73, 2) * -1 + 1) * 40; h += '<path d="M' + x + ' ' + t.toFixed(1) + 'V96" stroke="' + BRIDGE2 + '" stroke-width=".8"/>'; } return h; })() +
      tower(82, 120, 92, BRIDGE, BRIDGE2) + tower(228, 120, 92, BRIDGE, BRIDGE2) +
      '<rect x="0" y="94" width="400" height="6" fill="' + BRIDGE + '"/>' +
      /* wall */
      '<rect x="0" y="118" width="400" height="98" fill="#6b3a2c"/>' + brick + '<rect x="0" y="118" width="400" height="6" fill="#3e1f16"/>' +
      tag("MIC CAPES", 30, 186, 44, GOLD, -5) +
      '<path class="mc-sp" d="M352 150q6 -8 12 0" stroke="' + BRIDGE + '" stroke-width="3" fill="none"/><path class="mc-sp mc-sp2" d="M358 140q6 -8 12 0" stroke="' + BRIDGE + '" stroke-width="3" fill="none"/>' +
      '<rect x="344" y="152" width="14" height="30" rx="3" fill="' + BRIDGE + '" stroke="#111" stroke-width="2"/><rect x="346" y="146" width="10" height="7" fill="#111"/>' +
      '<rect x="0" y="214" width="400" height="10" fill="#9a9a94"/><rect x="0" y="224" width="400" height="36" fill="#2e3138"/>' +
      '<g class="mc-car"><rect x="0" y="236" width="56" height="14" rx="5" fill="' + GOLD + '"/><rect x="12" y="228" width="30" height="10" rx="3" fill="#a0802a"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="44" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="318" y="44" width="5" height="172" fill="#5c5f66"/>' +
      sign(258, 40, 124, "N Fessenden St") + sign(262, 64, 116, "N St Louis Ave") + rain(26),
      sky("mc-s5", "#3a4658", "#8b97a6"));
  }

  window.SCENES = { mcstation, mccathedral, mcpier, mcbarn, mccorner };
})();
