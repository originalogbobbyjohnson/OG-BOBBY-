/* jonathanmcreynolds scenes (Regions: Chicago; raised on the South Side, came up at New Original Church of God in Christ on E 78th St, sang in the Whitney Young Concert Choir). CSS classes prefixed jmr- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jmrnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.jmr-note{animation:jmrnote 3.2s ease-out infinite}.jmr-n2{animation-delay:-1.1s}.jmr-n3{animation-delay:-2.2s}' +
    '@keyframes jmrsway{0%,100%{transform:rotate(-2.5deg)}50%{transform:rotate(2.5deg)}}.jmr-sway{transform-box:fill-box;transform-origin:50% 100%;animation:jmrsway 2.4s ease-in-out infinite}.jmr-s2{animation-delay:-1.2s}' +
    '@keyframes jmrrip{0%{transform:translateX(0)}100%{transform:translateX(-32px)}}.jmr-rip{animation:jmrrip 3s linear infinite}' +
    '@keyframes jmrgull{0%{transform:translate(-60px,10px)}100%{transform:translate(460px,-20px)}}.jmr-gull{animation:jmrgull 12s linear infinite}' +
    '@keyframes jmrflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.5)}}.jmr-flap{transform-box:fill-box;transform-origin:50% 100%;animation:jmrflap .6s ease-in-out infinite}' +
    '@keyframes jmrblink{0%,100%{opacity:.35}50%{opacity:1}}.jmr-blink{animation:jmrblink 1.4s ease-in-out infinite}.jmr-b2{animation-delay:-.5s}.jmr-b3{animation-delay:-1s}' +
    '@keyframes jmrcar{0%{transform:translateX(-80px)}100%{transform:translateX(470px)}}.jmr-car{animation:jmrcar 7s linear infinite}' +
    '@keyframes jmrsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jmr-sp{animation:jmrsp 1.4s ease-out infinite}.jmr-sp2{animation-delay:.45s}' +
    '@keyframes jmrbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.jmr-beam{transform-box:fill-box;transform-origin:50% 0%;animation:jmrbeam 4s ease-in-out infinite}.jmr-bm2{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const METRA = '#e2701c';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const gull = (x, y) => '<g class="jmr-gull"><g transform="translate(' + x + ' ' + y + ')"><path class="jmr-flap" d="M0 0q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g></g>';
  const note = (x, y, cls, c) => '<g class="jmr-note ' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><ellipse cx="0" cy="10" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 0 10)"/><rect x="3.6" y="-8" width="1.8" height="18" fill="' + c + '"/><path d="M5.4 -8q7 3 6 10" stroke="' + c + '" stroke-width="2" fill="none"/></g></g>';
  /* acoustic guitar (body center x,y) */
  const guitar = (x, y, s, rot) => '<g transform="translate(' + x + ' ' + y + ') rotate(' + (rot || 0) + ') scale(' + s + ')">' +
    '<rect x="-3" y="-70" width="6" height="46" fill="#5a3a1e"/><rect x="-5" y="-82" width="10" height="14" rx="2" fill="#3b2412"/>' +
    '<path d="M0 -26c-14 0 -18 8 -14 16c3 6 -8 8 -8 20c0 14 10 20 22 20s22 -6 22 -20c0 -12 -11 -14 -8 -20c4 -8 0 -16 -14 -16z" fill="#d79a4e" stroke="#7a4a1e" stroke-width="1.5"/>' +
    '<circle cx="0" cy="-6" r="6" fill="#2a1a0c"/><rect x="-7" y="14" width="14" height="3" fill="#3b2412"/>' +
    '<path d="M-1.5 -80v94M1.5 -80v94" stroke="#f3e6c8" stroke-width=".5"/></g>';

  /* 1. Metra Electric pulling into Stony Island, the street-level platform in the middle of 71st St */
  function jmrstop() {
    const car = (x) => '<rect x="' + x + '" y="128" width="150" height="62" rx="6" fill="#c9cfd5"/><rect x="' + x + '" y="134" width="150" height="4" fill="#9aa3ab"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (x + 10 + i * 27) + '" y="144" width="20" height="16" rx="2" fill="#26313c"/>').join('') +
      '<rect x="' + (x + 8) + '" y="166" width="134" height="3" fill="' + METRA + '"/><rect x="' + x + '" y="186" width="150" height="6" fill="#4a5058"/>' +
      '<path d="M' + (x + 20) + ' 128l10 -14M' + (x + 40) + ' 128l-10 -14" stroke="#333" stroke-width="2"/>';
    return svg('<rect width="400" height="260" fill="url(#jmrs1)"/>' +
      '<path d="M0 104h400" stroke="#2c2c2c" stroke-width="1.5"/><path d="M0 110h400" stroke="#2c2c2c" stroke-width="1"/>' +
      /* South Shore bungalows and trees behind */
      [[10, 60], [80, 70], [300, 64], [360, 58]].map(([x, h]) => '<rect x="' + x + '" y="' + (190 - h) + '" width="56" height="' + h + '" fill="#8a4f3a"/><path d="M' + (x - 4) + ' ' + (190 - h) + 'l32 -18l32 18z" fill="#3e2b24"/>' +
        '<rect x="' + (x + 10) + '" y="' + (200 - h) + '" width="12" height="14" fill="#ffd98a" opacity=".8"/><rect x="' + (x + 34) + '" y="' + (200 - h) + '" width="12" height="14" fill="#ffd98a" opacity=".8"/>').join('') +
      '<circle cx="160" cy="96" r="26" fill="#2f5a2c"/><circle cx="250" cy="100" r="22" fill="#2f5a2c"/>' +
      '<g class="anim-train">' + car(-20) + car(132) + '<circle cx="280" cy="176" r="3" fill="#fff3b0"/></g>' +
      '<rect x="0" y="192" width="400" height="10" fill="#6b6f74"/><rect x="0" y="202" width="400" height="58" fill="#3c3f44"/><rect x="0" y="232" width="400" height="3" fill="#f2d16b" opacity=".8"/>' +
      '<rect x="0" y="194" width="400" height="4" fill="#f2d16b" opacity=".9"/>' +
      /* black station sign */
      '<rect x="296" y="200" width="5" height="40" fill="#555"/><rect x="226" y="20" width="164" height="44" rx="3" fill="#111"/>' +
      '<rect x="234" y="28" width="28" height="28" rx="4" fill="' + METRA + '"/><text x="248" y="47" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">ME</text>' +
      '<text x="326" y="42" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">STONY ISLAND</text><text x="326" y="56" text-anchor="middle" ' + font + ' font-size="8" fill="#f2c27a">71ST ST · SOUTH SHORE</text>',
      sky('jmrs1', '#f6b26b', '#fde3b5'));
  }

  /* 2. New Original Church of God in Christ on E 78th St, Sunday morning, music coming out the doors */
  function jmrchurch() {
    return svg('<rect width="400" height="260" fill="url(#jmrs2)"/>' +
      '<rect x="90" y="70" width="220" height="150" fill="#9b4a34"/>' +
      Array.from({ length: 14 }, (_, r) => '<path d="M90 ' + (78 + r * 10) + 'h220" stroke="#83402c" stroke-width="1"/>').join('') +
      '<path d="M80 72l120 -44l120 44z" fill="#4a2c22"/><rect x="194" y="6" width="12" height="30" fill="#f4efe6"/><rect x="186" y="14" width="28" height="8" fill="#f4efe6"/>' +
      '<rect x="110" y="92" width="180" height="22" fill="#f4efe6"/><text x="200" y="107" text-anchor="middle" ' + font + ' font-size="10" fill="#4a2c22">NEW ORIGINAL C.O.G.I.C.</text>' +
      [120, 250].map(x => '<path d="M' + x + ' 170v-36a15 15 0 0 1 30 0v36z" fill="#2a3f6b" stroke="#f4efe6" stroke-width="2"/><path d="M' + (x + 15) + ' 120v50M' + x + ' 150h30" stroke="#f2c94c" stroke-width="1.5" opacity=".8"/>').join('') +
      '<path d="M176 220v-56a24 24 0 0 1 48 0v56z" fill="#ffe7a8"/><path d="M200 140v80" stroke="#c98a3a" stroke-width="2"/>' +
      '<rect x="160" y="220" width="80" height="8" fill="#cfc6b6"/><rect x="150" y="228" width="100" height="8" fill="#bfb6a6"/>' +
      note(186, 170, '', '#ffd56b') + note(212, 160, 'jmr-n2', '#fff') + note(200, 176, 'jmr-n3', '#ffd56b') +
      '<rect x="0" y="236" width="400" height="24" fill="#4a4d52"/><path d="M0 248h400" stroke="#f2d16b" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<rect x="20" y="150" width="5" height="86" fill="#4a5a4a"/>' + sign(4, 154, 92, 'E 78TH ST') +
      '<circle cx="345" cy="150" r="30" fill="#3b6b34"/><rect x="342" y="170" width="6" height="66" fill="#4a3424"/>',
      sky('jmrs2', '#7fb8e6', '#d9ecf7'));
  }

  /* 3. Whitney Young Concert Choir on the risers, stage lights swinging */
  function jmrchoir() {
    const singer = (x, y, cls) => '<g class="jmr-sway ' + cls + '"><circle cx="' + x + '" cy="' + (y - 18) + '" r="8" fill="#2a1c14"/><path d="M' + (x - 12) + ' ' + (y + 22) + 'q0 -36 12 -36q12 0 12 36z" fill="#2c4a8c"/><path d="M' + (x - 5) + ' ' + (y - 9) + 'l5 10l5 -10" fill="#f2c94c"/></g>';
    return svg('<rect width="400" height="260" fill="#120f1c"/>' +
      '<rect class="jmr-beam" x="70" y="0" width="16" height="170" fill="#ffd56b" opacity=".18"/><rect class="jmr-beam jmr-bm2" x="196" y="0" width="16" height="170" fill="#9fd3f0" opacity=".18"/><rect class="jmr-beam" x="316" y="0" width="16" height="170" fill="#ffd56b" opacity=".18"/>' +
      '<rect x="0" y="0" width="400" height="16" fill="#3a0f14"/>' + [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<circle class="jmr-blink ' + (i % 3 ? 'jmr-b' + (i % 3 + 1) : '') + '" cx="' + (40 + i * 46) + '" cy="10" r="3.5" fill="#fff6c8"/>').join('') +
      '<rect x="60" y="26" width="280" height="30" rx="3" fill="#1f2a4a"/><text x="200" y="46" text-anchor="middle" ' + font + ' font-size="13" fill="#ffd56b" letter-spacing="1.5">WHITNEY YOUNG CONCERT CHOIR</text>' +
      '<rect x="40" y="176" width="320" height="14" fill="#3a3f52"/><rect x="60" y="146" width="280" height="14" fill="#444a60"/><rect x="80" y="116" width="240" height="14" fill="#4e5570"/>' +
      [0, 1, 2, 3, 4, 5, 6].map(i => singer(104 + i * 32, 100, i % 2 ? 'jmr-s2' : '')).join('') +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => singer(80 + i * 34, 130, i % 2 ? '' : 'jmr-s2')).join('') +
      [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => singer(64 + i * 34, 160, i % 2 ? 'jmr-s2' : '')).join('') +
      '<rect x="0" y="190" width="400" height="70" fill="#1b1622"/>' +
      '<rect x="20" y="204" width="80" height="12" fill="#111"/><rect x="24" y="216" width="4" height="24" fill="#333"/><rect x="92" y="216" width="4" height="24" fill="#333"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (22 + i * 7.6) + '" y="205" width="6" height="7" fill="#f4f4f4"/>').join('') +
      note(60, 196, '', '#ffd56b') + note(340, 200, 'jmr-n2', '#9fd3f0') + note(200, 210, 'jmr-n3', '#fff'));
  }

  /* 4. South Shore Cultural Center: white clubhouse, red tile roofs, Lake Michigan rolling in */
  function jmrlake() {
    return svg('<rect width="400" height="260" fill="url(#jmrs4)"/>' + gull(60, 40) + gull(20, 60) +
      '<rect x="0" y="150" width="400" height="44" fill="#3f7fa8"/>' +
      '<g class="jmr-rip">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 32) + ' ' + (158 + (i % 3) * 10) + 'q8 -3 16 0" stroke="#d6eef8" stroke-width="1.6" fill="none" opacity=".7"/>').join('') + '</g>' +
      /* clubhouse */
      '<rect x="60" y="92" width="280" height="76" fill="#f4efe4"/><rect x="170" y="70" width="60" height="98" fill="#f7f2e8"/>' +
      '<path d="M52 94l148 -22l148 22z" fill="#c4553a"/><path d="M164 72l36 -18l36 18z" fill="#b34a32"/>' +
      [0, 1, 2, 3, 4].map(i => '<path d="M' + (74 + i * 18) + ' 150v-26a6 6 0 0 1 12 0v26z" fill="#6aa0c4"/><path d="M' + (252 + i * 18) + ' 150v-26a6 6 0 0 1 12 0v26z" fill="#6aa0c4"/>').join('') +
      '<path d="M186 168v-40a14 14 0 0 1 28 0v40z" fill="#5a3c2a"/><rect x="186" y="84" width="28" height="12" fill="#6aa0c4"/>' +
      '<rect x="0" y="168" width="400" height="26" fill="#5c8f3e"/><circle cx="30" cy="150" r="22" fill="#3c6e2e"/><circle cx="372" cy="146" r="24" fill="#3c6e2e"/>' +
      '<rect x="0" y="194" width="400" height="66" fill="#e9d9ae"/><path d="M0 200q100 -10 200 0t200 0" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/>' +
      '<text x="200" y="236" text-anchor="middle" ' + font + ' font-size="10" fill="#7a5a3a" letter-spacing="2">SOUTH SHORE · LAKE MICHIGAN</text>',
      sky('jmrs4', '#8ec9ef', '#f4e2bf'));
  }

  /* 5. The corner: E 78th St and S Stony Island Av, his name tagged, the Museum of Science and Industry dome far up Stony Island */
  function jmrcorner() {
    const col = (x) => '<rect x="' + x + '" y="80" width="6" height="44" fill="#f2efe6"/>';
    return svg('<rect width="400" height="260" fill="url(#jmrs5)"/>' +
      '<rect x="60" y="76" width="200" height="50" fill="#e9e4d6" opacity=".85"/><path d="M50 78l110 -20l110 20z" fill="#e2dccc" opacity=".85"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => col(72 + i * 22)).join('') +
      '<rect x="130" y="40" width="60" height="22" fill="#e9e4d6" opacity=".9"/><path d="M128 42a32 26 0 0 1 64 0z" fill="#6aa58a"/><rect x="157" y="6" width="6" height="12" fill="#6aa58a"/>' +
      '<rect x="0" y="126" width="400" height="94" fill="#8f4c38"/>' +
      [0, 1, 2, 3, 4, 5].map(r => '<path d="M0 ' + (136 + r * 14) + 'h400" stroke="#7a3f2e" stroke-width="1"/>').join('') +
      tag('JONATHAN', 18, 172, 32, '#ffcf5c', -4) + tag('McREYNOLDS', 40, 208, 30, '#e8743b', -4) + tag('NO GRAY', 210, 150, 18, '#f4f4f4', 6) +
      guitar(312, 204, .55, -10) +
      '<g class="jmr-sp"><circle cx="292" cy="190" r="3" fill="#ffcf5c" opacity=".7"/></g><g class="jmr-sp jmr-sp2"><circle cx="298" cy="196" r="2.4" fill="#e8743b" opacity=".7"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#45484d"/><path d="M0 240h400" stroke="#f2d16b" stroke-width="2" stroke-dasharray="14 10"/>' +
      '<g class="jmr-car"><rect x="0" y="226" width="34" height="12" rx="3" fill="#2a6fd6"/><circle cx="8" cy="240" r="3" fill="#111"/><circle cx="26" cy="240" r="3" fill="#111"/></g>' +
      '<rect x="360" y="40" width="5" height="180" fill="#4a5a4a"/>' + sign(270, 44, 126, 'E 78TH ST') + sign(270, 70, 126, 'S STONY ISLAND AV'),
      sky('jmrs5', '#5fa8e0', '#ffd9a8'));
  }

  window.SCENES = { jmrstop: jmrstop, jmrchurch: jmrchurch, jmrchoir: jmrchoir, jmrlake: jmrlake, jmrcorner: jmrcorner };
})();
