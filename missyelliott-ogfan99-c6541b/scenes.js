/* missyelliott scenes (Regions tab: Virginia; Portsmouth). Elizabeth River Ferry at High Street Landing (HRT), the Lightship Portsmouth at London Slip,
   Manor High School (her school, Woodrow Wilson High back then), Naval Medical Center Portsmouth's Building One (where she was born) in the rain,
   Missy Elliott Blvd & Portsmouth Blvd with the shipyard cranes behind. CSS classes prefixed me-. 400 x 260 each. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes meflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.me-flk{animation:meflick 2.4s infinite}.me-flk2{animation-delay:.8s}' +
    '@keyframes medrift{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.me-cld{animation:medrift 34s linear infinite}.me-cld2{animation-delay:-17s}' +
    '@keyframes meglow{0%,100%{opacity:.45}50%{opacity:1}}.me-glow{animation:meglow 1.6s ease-in-out infinite}.me-g2{animation-delay:-.8s}' +
    '@keyframes mespin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.me-wheel{transform-box:fill-box;transform-origin:50% 50%;animation:mespin 3s linear infinite}' +
    '@keyframes mebob{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.me-bob{animation:mebob 2.6s ease-in-out infinite}' +
    '@keyframes mewave{0%,100%{transform:translateX(0)}50%{transform:translateX(-10px)}}.me-wave{animation:mewave 3s ease-in-out infinite}.me-wave2{animation-delay:-1.5s}' +
    '@keyframes megull{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}.me-gull{animation:megull 14s linear infinite}' +
    '@keyframes meflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-8deg)}}.me-flag{transform-box:fill-box;transform-origin:0 50%;animation:meflag 1.4s ease-in-out infinite}' +
    '@keyframes mebus{from{transform:translateX(-130px)}to{transform:translateX(520px)}}.me-bus{animation:mebus 10s linear infinite}' +
    '@keyframes merain{from{transform:translateY(-40px)}to{transform:translateY(40px)}}.me-rain{animation:merain .6s linear infinite}.me-rain2{animation-delay:-.3s}' +
    '@keyframes merip{0%{transform:scale(.3);opacity:.9}100%{transform:scale(1.6);opacity:0}}.me-rip{transform-box:fill-box;transform-origin:50% 50%;animation:merip 1.2s ease-out infinite}.me-rip2{animation-delay:-.6s}' +
    '@keyframes mesp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.me-sp{animation:mesp 1.4s ease-out infinite}.me-sp2{animation-delay:.45s}' +
    '@keyframes mecar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.me-car{animation:mecar 6s linear infinite}.me-car2{animation-delay:-3s}' +
    '@keyframes mehook{0%,100%{transform:translateY(0)}50%{transform:translateY(14px)}}.me-hook{animation:mehook 4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const T = (x, y, s, fill, txt, extra) => '<text x="' + x + '" y="' + y + '" ' + font + ' font-size="' + s + '" fill="' + fill + '"' + (extra || "") + '>' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="20" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 14.5) + '" text-anchor="middle" ' + font + ' font-size="11.5" fill="#fff">' + txt + '</text>';
  const cloud = (x, y, s, cls, c) => '<g class="me-cld ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="' + (c || "#fff") + '" opacity=".85"><ellipse cx="0" cy="0" rx="22" ry="9"/><ellipse cx="14" cy="-6" rx="14" ry="9"/><ellipse cx="-12" cy="-4" rx="12" ry="7"/></g></g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "me-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const gull = '<g class="me-gull"><path d="M0 40q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></g>';
  const PINK = "#ff3fa4", GOLD = "#ffd23f", CYAN = "#39e0ff", HRT = "#1f4e79", CREAM = "#f4efe2", BRICK = "#9a4a34";

  /* 1. High Street Landing, Portsmouth: the Elizabeth River Ferry (white paddlewheel-style boat, red stern wheel) pulling in to the floating dock, Norfolk's towers across the river */
  function mestation() {
    const boat = '<g class="anim-train"><g class="me-bob">' +
      '<path d="M40 176h250l-14 26H58z" fill="#f4f6f8" stroke="#5d6670" stroke-width="2"/><rect x="58" y="190" width="224" height="5" fill="' + HRT + '"/>' +
      '<rect x="70" y="146" width="196" height="30" fill="#f4f6f8" stroke="#5d6670" stroke-width="2"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (78 + i * 23) + '" y="153" width="17" height="15" rx="2" fill="#1d3448"/>').join("") +
      '<rect x="92" y="128" width="150" height="18" fill="#f4f6f8" stroke="#5d6670" stroke-width="2"/><rect x="86" y="124" width="162" height="5" fill="' + HRT + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (100 + i * 23) + '" y="131" width="15" height="11" rx="2" fill="#1d3448"/>').join("") +
      '<rect x="200" y="106" width="34" height="18" fill="#f4f6f8" stroke="#5d6670" stroke-width="2"/><rect x="204" y="110" width="26" height="8" fill="#1d3448"/>' +
      '<rect x="120" y="96" width="7" height="28" fill="#222"/><rect x="134" y="96" width="7" height="28" fill="#222"/><rect x="118" y="94" width="11" height="4" fill="#c8202a"/><rect x="132" y="94" width="11" height="4" fill="#c8202a"/>' +
      /* red stern paddle wheel */
      '<rect x="12" y="150" width="34" height="44" fill="#7a1418"/><g class="me-wheel"><circle cx="29" cy="172" r="19" fill="none" stroke="#c8202a" stroke-width="4"/>' +
      Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return '<path d="M29 172L' + (29 + 19 * Math.cos(a)).toFixed(1) + ' ' + (172 + 19 * Math.sin(a)).toFixed(1) + '" stroke="#c8202a" stroke-width="3"/>'; }).join("") + '</g>' +
      '<circle class="me-glow" cx="286" cy="182" r="3" fill="#fff6c2"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#me1)"/>' + cloud(70, 30, 1) + cloud(280, 22, .8, "me-cld2") +
      /* Norfolk skyline across the river */
      '<g fill="#8fa3b6"><rect x="150" y="74" width="20" height="64"/><rect x="174" y="56" width="22" height="82"/><rect x="178" y="48" width="14" height="8"/><rect x="200" y="84" width="26" height="54"/><rect x="232" y="66" width="18" height="72"/><rect x="254" y="92" width="40" height="46"/><rect x="300" y="80" width="18" height="58"/><rect x="322" y="100" width="60" height="38"/><rect x="40" y="104" width="60" height="34"/><rect x="104" y="92" width="30" height="46"/></g>' +
      '<rect x="0" y="136" width="400" height="124" fill="#3a6f8f"/>' +
      '<g class="me-wave"><path d="M0 148q20-4 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#9fd0ea" stroke-width="1.5" fill="none" opacity=".6"/></g>' +
      '<g class="me-wave me-wave2"><path d="M0 214q20-4 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#9fd0ea" stroke-width="1.5" fill="none" opacity=".5"/></g>' +
      gull + boat +
      /* floating dock + canopy on the Portsmouth side */
      '<rect x="296" y="196" width="104" height="12" fill="#7a6a58"/><rect x="296" y="206" width="104" height="5" fill="#4d4236"/>' +
      '<path d="M300 150h100v8H300z" fill="' + HRT + '"/><rect x="306" y="158" width="4" height="38" fill="#5d6670"/><rect x="390" y="158" width="4" height="38" fill="#5d6670"/>' +
      '<rect x="330" y="172" width="30" height="5" rx="2" fill="#6b4a2a"/><rect x="333" y="177" width="3" height="19" fill="#555"/><rect x="354" y="177" width="3" height="19" fill="#555"/>' +
      /* stop sign */
      '<rect x="374" y="100" width="5" height="96" fill="#2a2a2a"/><rect x="296" y="84" width="102" height="44" rx="3" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<rect x="302" y="90" width="30" height="13" rx="6.5" fill="' + HRT + '"/>' + T(317, 100, 9.5, "#fff", "HRT", ' text-anchor="middle"') + T(338, 100, 7, "#cfd6de", "FERRY") +
      T(302, 120, 10.5, "#fff", "HIGH ST LANDING"),
      sky("me1", "#79bfe8", "#d9eefa"));
  }

  /* 2. The Lightship Portsmouth in its berth at London Slip, Olde Towne: red hull, white PORTSMOUTH letters, two masts with lantern galleries */
  function melightship() {
    return svg(
      '<rect width="400" height="260" fill="url(#me2)"/>' + cloud(90, 34, 1.1) + cloud(300, 24, .8, "me-cld2") +
      '<rect x="0" y="150" width="400" height="30" fill="#3a6f8f"/><g class="me-wave"><path d="M0 160q20-4 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" stroke="#9fd0ea" stroke-width="1.5" fill="none" opacity=".6"/></g>' +
      gull +
      /* concrete berth / brick walk */
      '<rect x="0" y="180" width="400" height="80" fill="#b8a48a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (190 + i * 9) + 'h400" stroke="#a08c72" stroke-width="1"/>').join("") +
      '<rect x="40" y="174" width="320" height="12" fill="#8c8c88"/>' +
      /* masts + lanterns */
      '<rect x="128" y="44" width="6" height="90" fill="#e8e4dc"/><rect x="262" y="58" width="6" height="76" fill="#e8e4dc"/>' +
      '<rect x="118" y="58" width="26" height="22" fill="#1d1d1d"/><rect class="me-glow" x="122" y="62" width="18" height="14" fill="#fff2a8"/><path d="M116 58h30l-15-10z" fill="#1d1d1d"/>' +
      '<rect x="252" y="72" width="26" height="22" fill="#1d1d1d"/><rect class="me-glow me-g2" x="256" y="76" width="18" height="14" fill="#fff2a8"/><path d="M250 72h30l-15-10z" fill="#1d1d1d"/>' +
      '<path d="M131 44L60 130M131 44L200 130M265 58L330 130" stroke="#555" stroke-width="1"/>' +
      /* superstructure */
      '<rect x="150" y="112" width="96" height="26" fill="#f4f4f0" stroke="#8a8a84" stroke-width="1.5"/>' + [160, 180, 200, 220].map(x => '<circle cx="' + (x + 4) + '" cy="125" r="4" fill="#2a3a4a"/>').join("") +
      '<rect x="190" y="96" width="14" height="18" fill="#c8202a"/><rect x="190" y="96" width="14" height="4" fill="#1d1d1d"/>' +
      /* red hull with white letters */
      '<path d="M44 136h316l-20 40H70z" fill="#c8202a" stroke="#7a1418" stroke-width="2"/><rect x="44" y="134" width="316" height="5" fill="#f4f4f0"/>' +
      T(200, 164, 20, "#fff", "PORTSMOUTH", ' text-anchor="middle" letter-spacing="3"') +
      '<path d="M60 176h284" stroke="#3a1a10" stroke-width="3"/>' +
      /* bollards + chain */
      [30, 370].map(x => '<rect x="' + (x - 5) + '" y="196" width="10" height="16" rx="3" fill="#2a2a2a"/>').join("") +
      '<rect x="150" y="214" width="100" height="18" rx="2" fill="#2d4a3a"/>' + T(200, 227, 9, CREAM, "LONDON SLIP", ' text-anchor="middle"'),
      sky("me2", "#6fb6e6", "#cfe9f7"));
  }

  /* 3. Manor High School (Woodrow Wilson High when she was there): long red-brick front, glass entry, the flag out front, a school bus rolling by */
  function memanor() {
    const bus = '<g class="me-bus"><rect x="0" y="196" width="110" height="34" rx="5" fill="#f2b600"/><rect x="96" y="202" width="14" height="14" rx="2" fill="#1d262e"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (8 + i * 17) + '" y="202" width="12" height="10" rx="1" fill="#1d262e"/>').join("") +
      '<rect x="0" y="218" width="110" height="3" fill="#1a1a1a"/><circle cx="22" cy="232" r="7" fill="#1b1b1b"/><circle cx="88" cy="232" r="7" fill="#1b1b1b"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#me3)"/>' + cloud(60, 30, 1) + cloud(300, 20, .7, "me-cld2") +
      '<g fill="#3f6f4a"><ellipse cx="20" cy="112" rx="34" ry="22"/><ellipse cx="386" cy="110" rx="30" ry="22"/></g>' +
      /* building */
      '<rect x="30" y="74" width="340" height="104" fill="' + BRICK + '"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M30 ' + (80 + i * 8) + 'h340" stroke="#87402c" stroke-width="1"/>').join("") +
      '<rect x="26" y="70" width="348" height="8" fill="#d8d0bc"/>' +
      [44, 84, 124, 244, 284, 324].map(x => '<rect x="' + x + '" y="90" width="30" height="22" fill="#2a3a4a" stroke="#d8d0bc" stroke-width="2"/><rect x="' + x + '" y="126" width="30" height="22" fill="#2a3a4a" stroke="#d8d0bc" stroke-width="2"/>').join("") +
      /* glass entry tower */
      '<rect x="166" y="56" width="68" height="122" fill="#9fc6dc" stroke="#d8d0bc" stroke-width="3"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M166 ' + (76 + i * 20) + 'h68" stroke="#d8d0bc" stroke-width="2"/>').join("") + '<path d="M200 56v122" stroke="#d8d0bc" stroke-width="2"/>' +
      '<rect class="me-glow" x="170" y="80" width="26" height="14" fill="#fff" opacity=".35"/>' +
      '<rect x="132" y="38" width="136" height="20" fill="#1d2a3a"/>' + T(200, 53, 10, "#fff", "MANOR HIGH SCHOOL", ' text-anchor="middle"') +
      /* flag */
      '<rect x="338" y="40" width="3" height="146" fill="#ccc"/><g class="me-flag"><rect x="341" y="42" width="34" height="20" fill="#fff"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="341" y="' + (42 + i * 5) + '" width="34" height="2.5" fill="#c8202a"/>').join("") + '<rect x="341" y="42" width="14" height="10" fill="#1f3a6b"/></g>' +
      /* lawn, sign, road */
      '<rect x="0" y="178" width="400" height="16" fill="#5c9a3e"/><rect x="40" y="160" width="100" height="22" rx="3" fill="#1d2a3a" stroke="' + GOLD + '" stroke-width="2"/>' + T(90, 175, 9, GOLD, "HOME OF MISS E", ' text-anchor="middle"') +
      '<rect x="0" y="194" width="400" height="66" fill="#4a4d52"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 56) + '" y="244" width="30" height="4" fill="#f2c200"/>').join("") + bus,
      sky("me3", "#7cc2ec", "#d9eefa"));
  }

  /* 4. Naval Medical Center Portsmouth, Building One (where she was born): pale columned front and domed cupola on the river, in the rain */
  function menaval() {
    const drops = (cls) => '<g class="me-rain ' + cls + '">' + Array.from({ length: 40 }, (_, i) => '<path d="M' + ((i * 37 + (cls ? 18 : 0)) % 400) + ' ' + ((i * 61) % 230 - 20) + 'l-4 12" stroke="#cfe3f2" stroke-width="1.3" opacity=".7"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#me4)"/>' + cloud(70, 24, 1.3, "", "#7d8794") + cloud(260, 18, 1.1, "me-cld2", "#6f7986") + cloud(160, 34, .9, "", "#87919d") +
      /* wings */
      '<rect x="40" y="96" width="320" height="94" fill="#e6e1d4"/>' + Array.from({ length: 3 }, (_, r) => [56, 86, 116, 260, 290, 320].map(x => '<rect x="' + x + '" y="' + (106 + r * 26) + '" width="16" height="18" fill="#4a5866"/>').join("")).join("") +
      '<rect x="36" y="90" width="328" height="8" fill="#cfc8b8"/>' +
      /* portico */
      '<path d="M140 92L200 64L260 92z" fill="#efeadf" stroke="#bdb5a3" stroke-width="2"/><rect x="140" y="92" width="120" height="8" fill="#d6cfbf"/>' +
      '<rect x="144" y="100" width="112" height="86" fill="#cfc8b8"/>' + [154, 170].map((y, i) => '<rect class="me-glow' + (i ? " me-g2" : "") + '" x="150" y="' + y + '" width="100" height="6" fill="#ffe9a8" opacity=".5"/>').join("") +
      [148, 168, 188, 206, 226, 246].map(x => '<rect x="' + x + '" y="100" width="7" height="86" fill="#f6f2e8" stroke="#c9c1ae" stroke-width="1"/>').join("") +
      '<rect x="190" y="150" width="20" height="36" fill="#3a2a1c"/>' +
      /* cupola */
      '<rect x="186" y="42" width="28" height="22" fill="#efeadf" stroke="#bdb5a3" stroke-width="1.5"/>' + [190, 199, 208].map(x => '<rect x="' + x + '" y="46" width="4" height="14" fill="#4a5866"/>').join("") +
      '<path d="M182 42q18-26 36 0z" fill="#9aa6a0" stroke="#6f7a74" stroke-width="1.5"/><rect x="198" y="8" width="4" height="10" fill="#6f7a74"/>' +
      '<rect x="20" y="186" width="360" height="8" fill="#b8b2a4"/>' +
      /* river with ripples */
      '<rect x="0" y="194" width="400" height="66" fill="#33586f"/>' +
      [60, 150, 240, 330, 110, 290].map((x, i) => '<ellipse class="me-rip' + (i % 2 ? " me-rip2" : "") + '" cx="' + x + '" cy="' + (214 + (i % 3) * 14) + '" rx="10" ry="3" fill="none" stroke="#9fc6dc" stroke-width="1"/>').join("") +
      /* one umbrella on the walk */
      '<g class="me-bob"><path d="M330 172q16-18 32 0z" fill="' + PINK + '"/><rect x="345" y="172" width="2" height="16" fill="#222"/></g>' +
      drops("") + drops("me-rain2"),
      sky("me4", "#5f6b78", "#a9b3bd"));
  }

  /* 5. Missy Elliott Blvd & Portsmouth Blvd: green signs, MISSY tagged on the wall, the shipyard's big cranes on the skyline behind */
  function mecorner() {
    const crane = (x, h) => '<g fill="#2a3346"><rect x="' + x + '" y="' + (150 - h) + '" width="10" height="' + h + '"/><rect x="' + (x - 34) + '" y="' + (146 - h) + '" width="86" height="8"/><rect x="' + (x - 2) + '" y="' + (138 - h) + '" width="14" height="10"/></g>' +
      '<g class="me-hook"><path d="M' + (x + 44) + ' ' + (154 - h) + 'v24" stroke="#2a3346" stroke-width="1.5"/><rect x="' + (x + 40) + '" y="' + (178 - h) + '" width="8" height="5" fill="#2a3346"/></g>' +
      '<circle class="me-glow" cx="' + (x + 5) + '" cy="' + (134 - h) + '" r="2.4" fill="#ff4a4a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#me5)"/>' + stars(16) +
      crane(70, 96) + crane(200, 110) + crane(300, 84) +
      '<g fill="#2a3346"><rect x="0" y="112" width="60" height="40"/><rect x="120" y="104" width="50" height="48"/><rect x="236" y="116" width="48" height="36"/><rect x="340" y="108" width="60" height="44"/></g>' +
      Array.from({ length: 8 }, (_, i) => '<rect class="me-glow' + (i % 2 ? " me-g2" : "") + '" x="' + [10, 34, 128, 150, 246, 266, 352, 378][i] + '" y="' + [122, 132, 114, 130, 126, 136, 118, 132][i] + '" width="6" height="7" fill="#ffd98a"/>').join("") +
      /* wall */
      '<rect x="0" y="150" width="400" height="76" fill="#2e2a3a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (158 + i * 8) + 'h400" stroke="#272333" stroke-width="1"/>').join("") +
      tag("MISSY", 14, 204, 50, PINK, -6) + tag("MISS E", 178, 176, 22, GOLD, -4) + tag("SUPA FLY", 30, 222, 16, CYAN, -3) + tag("GOLDMIND", 178, 214, 20, "#fff", -3) +
      '<g class="me-sp"><circle cx="166" cy="168" r="3" fill="' + PINK + '" opacity=".7"/></g><g class="me-sp me-sp2"><circle cx="172" cy="162" r="2" fill="' + PINK + '" opacity=".6"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<g class="me-car"><rect x="0" y="236" width="50" height="14" rx="5" fill="#d8dde3"/><rect x="10" y="229" width="28" height="9" rx="4" fill="#d8dde3"/><circle cx="12" cy="250" r="4" fill="#111"/><circle cx="38" cy="250" r="4" fill="#111"/></g>' +
      '<g class="me-car me-car2"><rect x="0" y="238" width="44" height="12" rx="5" fill="' + PINK + '"/><rect x="8" y="232" width="24" height="8" rx="4" fill="' + PINK + '"/><circle cx="10" cy="250" r="4" fill="#111"/><circle cx="34" cy="250" r="4" fill="#111"/></g>' +
      '<rect x="356" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(264, 96, 134, "Missy Elliott Blvd") + sign(272, 120, 126, "Portsmouth Blvd"),
      sky("me5", "#120c26", "#4a3a7a"));
  }

  window.SCENES = { mestation: mestation, melightship: melightship, memanor: memanor, menaval: menaval, mecorner: mecorner };
})();
