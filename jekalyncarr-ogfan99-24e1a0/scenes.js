/* jekalyncarr scenes (Regions: Memphis + Tennessee; born April 22, 1997, grew up in West Memphis, Arkansas, across the river from Memphis; sang in her neighborhood church choir from age 5, preaching by 13, "Greater Is Coming" on the gospel chart at 15, first Stellar Award at 16). CSS classes prefixed jk- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jknote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-64px);opacity:0}}.jk-note{animation:jknote 3s ease-out infinite}.jk-n2{animation-delay:-1s}.jk-n3{animation-delay:-2s}' +
    '@keyframes jksway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.jk-sway{transform-box:fill-box;transform-origin:50% 100%;animation:jksway 2s ease-in-out infinite}.jk-s2{animation-delay:-1s}' +
    '@keyframes jkglow{0%,100%{opacity:.45}50%{opacity:1}}.jk-glow{animation:jkglow 2s ease-in-out infinite}.jk-g2{animation-delay:-.7s}.jk-g3{animation-delay:-1.4s}' +
    '@keyframes jkhue{0%{fill:#c77dff}33%{fill:#4cc9f0}66%{fill:#f9c74f}100%{fill:#c77dff}}.jk-hue{animation:jkhue 6s linear infinite}' +
    '@keyframes jkwalk{0%{transform:translateX(0)}100%{transform:translateX(300px)}}.jk-walk{animation:jkwalk 14s linear infinite}' +
    '@keyframes jkbeam{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.jk-beam{transform-box:fill-box;transform-origin:50% 0%;animation:jkbeam 4s ease-in-out infinite}.jk-b2{animation-delay:-2s}' +
    '@keyframes jkflow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.jk-flow{animation:jkflow 4s linear infinite}' +
    '@keyframes jksp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jk-sp{animation:jksp 1.4s ease-out infinite}.jk-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const PURPLE = '#9b5de5', GOLD = '#f9c74f', ROSE = '#f15bb5', CREAM = '#fbf3e4', HWY = '#0f6b3a';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const note = (x, y, cls, c) => '<g class="jk-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="10" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 0 10)"/><rect x="3.6" y="-8" width="1.8" height="18" fill="' + c + '"/><path d="M5.4 -8q7 3 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  const pyramid = (x, y, s, c) => '<path d="M' + x + ' ' + y + 'l' + (s / 2) + ' ' + (-s * 0.62) + 'l' + (s / 2) + ' ' + (s * 0.62) + 'z" fill="' + c + '"/>';
  const shield = (x, y, n) => '<path d="M' + x + ' ' + y + 'h28v14q0 10 -14 16q-14 -6 -14 -16z" fill="#1f4fa8" stroke="#fff" stroke-width="1.5"/><rect x="' + x + '" y="' + y + '" width="28" height="7" fill="#c8202f"/>' +
    '<text x="' + (x + 14) + '" y="' + (y + 22) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + n + '</text>';

  /* 1. I-55 over the old Memphis-Arkansas Bridge into West Memphis: steel cantilever trusses, traffic rolling west, the green sign */
  function jksign() {
    const truss = (x, w, h) => '<path d="M' + x + ' 150q' + (w / 2) + ' ' + (-h * 2) + ' ' + w + ' 0" stroke="#7d8a96" stroke-width="5" fill="none"/>' +
      Array.from({ length: 9 }, (_, i) => { const t = (i + 0.5) / 9; const xx = x + w * t; const yy = 150 - h * 4 * t * (1 - t); return '<path d="M' + xx + ' 150L' + xx + ' ' + yy + '" stroke="#7d8a96" stroke-width="2"/>' + (i < 8 ? '<path d="M' + xx + ' ' + yy + 'L' + (x + w * (i + 1.5) / 9) + ' 150" stroke="#7d8a96" stroke-width="1.6"/>' : ''); }).join('');
    const car = (x, c) => '<rect x="' + x + '" y="158" width="34" height="13" rx="4" fill="' + c + '"/><rect x="' + (x + 6) + '" y="152" width="20" height="8" rx="2" fill="' + c + '"/><circle cx="' + (x + 8) + '" cy="172" r="3.6" fill="#111"/><circle cx="' + (x + 26) + '" cy="172" r="3.6" fill="#111"/>';
    return svg('<rect width="400" height="260" fill="url(#jks1)"/>' +
      '<circle cx="330" cy="58" r="20" fill="#ffd6a0" opacity=".9"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#5a6e78"/>' +
      '<g class="jk-flow"><path d="M0 196q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#9fb4bf" stroke-width="2" fill="none"/><path d="M10 226q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#8aa2ad" stroke-width="2" fill="none"/></g>' +
      truss(-20, 220, 30) + truss(200, 220, 30) +
      '<rect x="0" y="150" width="400" height="26" fill="#5c6670"/><rect x="0" y="174" width="400" height="5" fill="#3c444c"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="179" width="14" height="81" fill="#6a747c"/>').join('') +
      '<g class="anim-train">' + car(60, '#d0342c') + car(130, '#e8e8e8') + car(200, PURPLE) + car(280, '#3a5a8a') + '</g>' +
      /* overhead green guide sign */
      '<rect x="150" y="20" width="5" height="130" fill="#666"/><rect x="370" y="20" width="5" height="130" fill="#666"/><rect x="150" y="20" width="225" height="6" fill="#666"/>' +
      '<rect x="168" y="28" width="196" height="66" rx="4" fill="' + HWY + '" stroke="#fff" stroke-width="2"/>' + shield(178, 36, '55') +
      '<text x="290" y="50" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SOUTH</text>' +
      '<text x="282" y="68" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">West Memphis</text>' +
      '<text x="282" y="86" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">ARKANSAS · NEXT EXIT</text>',
      sky('jks1', '#ff9e6b', '#ffd9b0'));
  }

  /* 2. Praise in the Park, Atlanta's outdoor amphitheater where she filmed her live videos: arched stage roof, lights sweeping, the crowd's hands up */
  function jkpark() {
    return svg('<rect width="400" height="260" fill="url(#jks2)"/>' +
      [[20, 30], [80, 18], [330, 26], [380, 44], [300, 12]].map(([x, y]) => '<circle cx="' + x + '" cy="' + y + '" r="1.3" fill="#fff"/>').join('') +
      /* trees around the bowl */
      [10, 50, 350, 390].map(x => '<circle cx="' + x + '" cy="120" r="30" fill="#1a2a24"/>').join('') +
      /* the arched stage shell */
      '<path d="M70 150q130 -150 260 0z" fill="#2a2440"/><path d="M90 150q110 -120 220 0" stroke="#8a7ab8" stroke-width="3" fill="none"/><path d="M110 150q90 -92 180 0" stroke="#6a5a98" stroke-width="2" fill="none"/>' +
      '<rect x="110" y="132" width="180" height="18" fill="#1a1428"/>' +
      '<g class="jk-beam"><path d="M140 70l-40 130h60z" fill="' + GOLD + '" opacity=".18"/></g><g class="jk-beam jk-b2"><path d="M260 70l-20 130h60z" fill="' + ROSE + '" opacity=".18"/></g>' +
      [130, 170, 200, 230, 270].map((x, i) => '<circle cx="' + x + '" cy="74" r="3.2" class="jk-hue" fill="#c77dff"/>').join('') +
      /* singer and mic on the stage */
      '<path d="M192 132l3 -22q5 -4 10 0l3 22z" fill="' + GOLD + '"/><circle cx="200" cy="104" r="5" fill="#8a5a3a"/><rect x="209" y="104" width="2" height="28" fill="#888"/>' +
      '<rect x="60" y="150" width="280" height="8" fill="#3a3050"/>' +
      /* the crowd, hands up */
      '<rect x="0" y="158" width="400" height="102" fill="#141020"/>' +
      Array.from({ length: 16 }, (_, i) => { const x = 14 + i * 25; const y = 196 + (i % 3) * 8; return '<g class="jk-sway ' + (i % 2 ? 'jk-s2' : '') + '"><circle cx="' + x + '" cy="' + y + '" r="7" fill="#2a2238"/><path d="M' + (x - 5) + ' ' + (y - 2) + 'l-6 -20M' + (x + 5) + ' ' + (y - 2) + 'l6 -20" stroke="#2a2238" stroke-width="4" stroke-linecap="round"/><rect x="' + (x - 9) + '" y="' + (y + 6) + '" width="18" height="40" rx="6" fill="#2a2238"/></g>'; }).join('') +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#e0d4ff" letter-spacing="2">PRAISE IN THE PARK · ATLANTA</text>',
      sky('jks2', '#0a0f2a', '#4a2e62'));
  }

  /* 3. The neighborhood church choir loft: rows of purple robes, the littlest singer down front */
  function jkchoir() {
    const singer = (x, y, s, cls) => '<g class="jk-sway ' + (cls || '') + '"><path d="M' + (x - 11 * s) + ' ' + y + 'l' + (4 * s) + ' ' + (-30 * s) + 'q' + (7 * s) + ' ' + (-6 * s) + ' ' + (14 * s) + ' 0l' + (4 * s) + ' ' + (30 * s) + 'z" fill="' + PURPLE + '"/>' +
      '<path d="M' + (x - 5 * s) + ' ' + (y - 30 * s) + 'l' + (5 * s) + ' ' + (8 * s) + 'l' + (5 * s) + ' ' + (-8 * s) + '" fill="' + GOLD + '"/><circle cx="' + x + '" cy="' + (y - 37 * s) + '" r="' + (6.5 * s) + '" fill="#8a5a3a"/></g>';
    return svg('<rect width="400" height="260" fill="url(#jks3)"/>' +
      /* back wall, stained-glass window, cross */
      '<path d="M170 20h60v60q-30 20 -60 0z" fill="#3a2a5a"/>' +
      [[176, 26, ROSE], [204, 26, GOLD], [176, 50, '#4cc9f0'], [204, 50, PURPLE]].map(([x, y, c]) => '<rect x="' + x + '" y="' + y + '" width="20" height="20" fill="' + c + '" class="jk-glow"/>').join('') +
      '<rect x="198" y="24" width="4" height="56" fill="#2a1a3a"/><rect x="172" y="46" width="56" height="4" fill="#2a1a3a"/>' +
      /* choir risers */
      '<rect x="0" y="110" width="400" height="20" fill="#7a4a2a"/><rect x="0" y="150" width="400" height="20" fill="#8a5a36"/><rect x="0" y="190" width="400" height="70" fill="#9a6a42"/>' +
      [40, 90, 140, 260, 310, 360].map((x, i) => singer(x, 112, 1, i % 2 ? 'jk-s2' : '')).join('') +
      [20, 70, 120, 170, 230, 280, 330, 380].map((x, i) => singer(x, 152, 1, i % 2 ? '' : 'jk-s2')).join('') +
      /* little girl down front with the mic */
      singer(200, 220, 0.7, '') + '<rect x="214" y="178" width="3" height="40" fill="#555"/><circle cx="215.5" cy="176" r="4" fill="#333"/>' +
      note(150, 180, 'jk-n1', GOLD) + note(250, 170, 'jk-n2', ROSE) + note(300, 186, 'jk-n3', CREAM),
      sky('jks3', '#4a2e4e', '#d8b07a'));
  }

  /* 4. Preaching at 13: the pulpit under the spotlights, a gold star award on a stand */
  function jkpulpit() {
    return svg('<rect width="400" height="260" fill="url(#jks4)"/>' +
      '<g class="jk-beam"><path d="M90 0l-50 230h100z" fill="#fff6d0" opacity=".14"/></g><g class="jk-beam jk-b2"><path d="M310 0l-50 230h100z" fill="#e0c8ff" opacity=".14"/></g>' +
      /* curtains */
      '<path d="M0 0h70q-14 120 0 230h-70z" fill="#5a1e5e"/><path d="M400 0h-70q14 120 0 230h70z" fill="#5a1e5e"/>' +
      [16, 34, 52].map(x => '<path d="M' + x + ' 0q-6 115 0 230" stroke="#3e1242" stroke-width="3" fill="none"/>').join('') +
      [348, 366, 384].map(x => '<path d="M' + x + ' 0q6 115 0 230" stroke="#3e1242" stroke-width="3" fill="none"/>').join('') +
      /* stage */
      '<rect x="0" y="200" width="400" height="60" fill="#2a1a2e"/><rect x="0" y="196" width="400" height="6" fill="' + GOLD + '"/>' +
      /* pulpit with open book */
      '<path d="M166 196l8 -70h52l8 70z" fill="#7a4a2a"/><rect x="160" y="120" width="80" height="10" rx="2" fill="#8a5a36"/>' +
      '<path d="M176 120l24 -8l24 8z" fill="' + CREAM + '"/><path d="M200 112v8" stroke="#aaa" stroke-width="1"/>' +
      '<rect x="190" y="150" width="20" height="4" fill="' + GOLD + '"/><rect x="198" y="142" width="4" height="20" fill="' + GOLD + '"/>' +
      /* young preacher behind it */
      '<path d="M186 120l3 -22q11 -8 22 0l3 22z" fill="' + PURPLE + '"/><circle cx="200" cy="90" r="8" fill="#8a5a3a"/><path d="M191 88q9 -14 18 0" fill="#2a1a10"/>' +
      /* star award on a stand */
      '<rect x="296" y="160" width="28" height="36" fill="#3a2a40"/><rect x="306" y="140" width="8" height="20" fill="' + GOLD + '"/>' +
      '<path d="M310 106l6 13h14l-11 9l4 14l-13 -8l-13 8l4 -14l-11 -9h14z" fill="' + GOLD + '" class="jk-glow"/>' +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '" letter-spacing="3">YOU WILL WIN</text>',
      sky('jks4', '#120a1e', '#3a2350'));
  }

  /* 5. The corner: Ingram Blvd and MLK Jr Dr in West Memphis, tagged wall, the Memphis skyline lit across the river */
  function jkcorner() {
    return svg('<rect width="400" height="260" fill="url(#jks5)"/>' +
      '<rect x="150" y="40" width="30" height="100" fill="#30385a"/><path d="M150 40q15 -22 30 0z" fill="#30385a"/><rect x="186" y="64" width="24" height="76" fill="#2a3252"/><rect x="214" y="82" width="30" height="58" fill="#30385a"/><rect x="120" y="90" width="26" height="50" fill="#2a3252"/>' + [[156,60],[166,80],[192,90],[220,100],[126,104]].map(([x,y],i)=>'<rect x="'+x+'" y="'+y+'" width="3" height="3" fill="#ffe08a" class="jk-glow jk-g'+(i%3+1)+'"/>').join('') +
      [[40, 50], [62, 72], [86, 40], [256, 60], [280, 86], [306, 46], [330, 64]].map(([x, h]) => '<rect x="' + x + '" y="' + (140 - h) + '" width="18" height="' + h + '" fill="#262c48"/>').join('') +
      [[44, 100], [66, 80], [260, 90], [284, 66], [310, 104], [334, 86]].map(([x, y], i) => '<rect x="' + x + '" y="' + y + '" width="3" height="3" fill="#ffe08a" class="jk-glow jk-g' + (i % 3 + 1) + '"/>').join('') +
      '<rect x="0" y="140" width="400" height="80" fill="#5a3f6e"/>' +
      [0, 1, 2, 3, 4].map(r => '<path d="M0 ' + (150 + r * 14) + 'h400" stroke="#4e3560" stroke-width="1"/>').join('') +
      tag('JEKALYN CARR', 12, 186, 30, GOLD, -4) + tag('YOU WILL WIN', 140, 214, 20, ROSE, -3) + tag('GREATER', 290, 172, 18, CREAM, 5) +
      note(220, 150, 'jk-n1', ROSE) + note(352, 156, 'jk-n2', GOLD) +
      '<g class="jk-sp"><circle cx="232" cy="198" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="jk-sp jk-sp2"><circle cx="238" cy="204" r="2.4" fill="' + ROSE + '" opacity=".7"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#45484d"/><path d="M0 240h400" stroke="#f2d16b" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<rect x="372" y="36" width="5" height="184" fill="#4a5a4a"/>' + sign(272, 40, 124, 'INGRAM BLVD') + sign(272, 66, 124, 'MLK JR DR'),
      sky('jks5', '#1a1438', '#c46a8a'));
  }

  window.SCENES = { jksign: jksign, jkpark: jkpark, jkchoir: jkchoir, jkpulpit: jkpulpit, jkcorner: jkcorner };
})();
