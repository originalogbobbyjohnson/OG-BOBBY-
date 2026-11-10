/* korynhawthorne scenes (Regions: New Orleans / Louisiana; born and raised in Abbeville, Vermilion Parish, runner-up on season 8 of a TV singing show in 2015). CSS classes prefixed kh- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes khflick{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}.kh-flick{transform-box:fill-box;transform-origin:50% 100%;animation:khflick .5s ease-in-out infinite}.kh-f2{animation-delay:-.25s}' +
    '@keyframes khstir{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.kh-stir{transform-box:fill-box;transform-origin:50% 0%;animation:khstir 1.6s ease-in-out infinite}' +
    '@keyframes khsteam{0%{transform:translateY(0);opacity:.7}100%{transform:translateY(-40px);opacity:0}}.kh-steam{animation:khsteam 2.4s ease-out infinite}.kh-st2{animation-delay:-.8s}.kh-st3{animation-delay:-1.6s}' +
    '@keyframes khbell{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.kh-bell{transform-box:fill-box;transform-origin:50% 0%;animation:khbell 1.8s ease-in-out infinite}' +
    '@keyframes khbeam{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.kh-beam{transform-box:fill-box;transform-origin:50% 0%;animation:khbeam 3.6s ease-in-out infinite}.kh-bm2{animation-delay:-1.8s}' +
    '@keyframes khblink{0%,100%{opacity:.3}50%{opacity:1}}.kh-blink{animation:khblink 1.3s ease-in-out infinite}.kh-b2{animation-delay:-.45s}.kh-b3{animation-delay:-.9s}' +
    '@keyframes khhand{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.kh-hand{animation:khhand 1.1s ease-in-out infinite}.kh-h2{animation-delay:-.55s}' +
    '@keyframes khmoss{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.kh-moss{transform-box:fill-box;transform-origin:50% 0%;animation:khmoss 3s ease-in-out infinite}' +
    '@keyframes khsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kh-sp{animation:khsp 1.4s ease-out infinite}.kh-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  /* live oak with Spanish moss */
  const oak = (x, base, r) => '<rect x="' + (x - 5) + '" y="' + (base - r) + '" width="10" height="' + r + '" fill="#4a3424"/><ellipse cx="' + x + '" cy="' + (base - r) + '" rx="' + (r * 1.3) + '" ry="' + (r * .6) + '" fill="#2f5a2c"/>' +
    [-.8, -.3, .2, .7].map(d => '<path class="kh-moss" d="M' + (x + d * r) + ' ' + (base - r + 6) + 'q-3 10 0 18q3 6 0 12" stroke="#9fae8c" stroke-width="3" fill="none" opacity=".85"/>').join('');
  /* St. Mary Magdalen: red brick, buff brick trim, tall spire with a cross */
  const church = (x, base, s) => '<g transform="translate(' + x + ' ' + base + ') scale(' + s + ')">' +
    '<rect x="-60" y="-110" width="120" height="110" fill="#a8472f"/>' + Array.from({ length: 10 }, (_, r) => '<path d="M-60 ' + (-102 + r * 10) + 'h120" stroke="#8f3a26" stroke-width="1"/>').join('') +
    '<path d="M-66 -108l66 -34l66 34z" fill="#7a3322"/><path d="M-60 -108h120" stroke="#e8d3a6" stroke-width="4"/>' +
    '<rect x="-16" y="-200" width="32" height="92" fill="#a8472f"/><path d="M-16 -150h32M-16 -176h32" stroke="#e8d3a6" stroke-width="3"/><path d="M-18 -200l18 -56l18 56z" fill="#6e2e1f"/>' +
    '<rect x="-1.5" y="-276" width="3" height="22" fill="#f4efe6"/><rect x="-7" y="-268" width="14" height="3" fill="#f4efe6"/>' +
    '<path d="M-8 -160v-14a8 8 0 0 1 16 0v14z" fill="#2a3f6b"/>' +
    '<path d="M-14 0v-40a14 14 0 0 1 28 0v40z" fill="#5a2c1c" stroke="#e8d3a6" stroke-width="3"/><circle cx="0" cy="-72" r="13" fill="#3a5a8a" stroke="#e8d3a6" stroke-width="3"/>' +
    [-44, 30].map(dx => '<path d="M' + dx + ' -30v-34a7 7 0 0 1 14 0v34z" fill="#2a3f6b" stroke="#e8d3a6" stroke-width="2"/>').join('') +
    [-62, 56].map(dx => '<rect x="' + dx + '" y="-110" width="6" height="110" fill="#e8d3a6"/>').join('') + '</g>';

  /* 1. Rolling down US 167 into Abbeville, the green guide sign overhead, cane fields on both sides */
  function khstop() {
    return svg('<rect width="400" height="260" fill="url(#khs1)"/>' +
      '<circle cx="70" cy="70" r="26" fill="#ffd27a" opacity=".9"/>' +
      '<rect x="0" y="150" width="400" height="40" fill="#6f9a3c"/>' + Array.from({ length: 40 }, (_, i) => '<path d="M' + (i * 10 + 4) + ' 168l-3 -22M' + (i * 10 + 6) + ' 168l3 -20" stroke="#8fbf4a" stroke-width="2"/>').join('') +
      '<rect x="0" y="190" width="400" height="70" fill="#4a4d52"/><path d="M0 224h400" stroke="#f2d16b" stroke-width="3" stroke-dasharray="20 14"/><rect x="0" y="190" width="400" height="3" fill="#fff" opacity=".8"/>' +
      /* overhead guide sign */
      '<rect x="60" y="36" width="5" height="154" fill="#9aa4ad"/><rect x="336" y="36" width="5" height="154" fill="#9aa4ad"/><rect x="60" y="40" width="281" height="5" fill="#9aa4ad"/>' +
      '<rect x="110" y="48" width="190" height="78" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M126 58h28v16q0 10 -14 14q-14 -4 -14 -14z" fill="#fff" stroke="#111" stroke-width="1.5"/><text x="140" y="76" text-anchor="middle" ' + font + ' font-size="9" fill="#111">167</text><text x="140" y="56" text-anchor="middle" ' + font + ' font-size="5" fill="#fff">US</text>' +
      '<rect x="162" y="58" width="30" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="1.5"/><text x="177" y="75" text-anchor="middle" ' + font + ' font-size="10" fill="#111">14</text>' +
      '<text x="250" y="76" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SOUTH</text>' +
      '<text x="205" y="110" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">Abbeville</text>' +
      /* the car rolling in */
      '<g class="anim-train"><rect x="40" y="186" width="120" height="30" rx="8" fill="#ef476f"/><path d="M62 186l14 -18h50l18 18z" fill="#d23c62"/><path d="M80 184l8 -12h18v12zM112 184v-12h12l12 12z" fill="#26313c"/>' +
      '<circle cx="70" cy="218" r="10" fill="#1a1a1a"/><circle cx="70" cy="218" r="4" fill="#888"/><circle cx="134" cy="218" r="10" fill="#1a1a1a"/><circle cx="134" cy="218" r="4" fill="#888"/><circle cx="158" cy="200" r="3" fill="#fff3b0"/></g>',
      sky('khs1', '#f7a36b', '#ffe1b0'));
  }

  /* 2. Giant omelette in Magdalen Square: the huge skillet over the fire, the white gazebo and live oaks behind */
  function khomelette() {
    return svg('<rect width="400" height="260" fill="url(#khs2)"/>' + oak(50, 150, 40) + oak(350, 150, 44) +
      /* gazebo */
      '<rect x="170" y="98" width="60" height="50" fill="none" stroke="#f4efe6" stroke-width="3"/><path d="M162 100l38 -26l38 26z" fill="#f4efe6"/><path d="M170 130h60" stroke="#f4efe6" stroke-width="2"/>' +
      [180, 200, 220].map(x => '<rect x="' + (x - 1.5) + '" y="100" width="3" height="48" fill="#f4efe6"/>').join('') +
      '<rect x="0" y="148" width="400" height="112" fill="#7aa84a"/><rect x="0" y="210" width="400" height="50" fill="#c9b99a"/>' +
      /* fire */
      [0, 1, 2, 3, 4, 5, 6].map(i => '<path class="kh-flick ' + (i % 2 ? 'kh-f2' : '') + '" d="M' + (112 + i * 26) + ' 214q-10 -14 0 -30q10 16 0 30z" fill="' + (i % 2 ? '#ffb02e' : '#ff6b2e') + '"/>').join('') +
      '<rect x="96" y="210" width="208" height="10" fill="#4a4a4a"/>' +
      /* the giant skillet */
      '<ellipse cx="200" cy="186" rx="120" ry="20" fill="#2a2a2a"/><ellipse cx="200" cy="182" rx="112" ry="15" fill="#f4d35e"/><ellipse cx="170" cy="180" rx="24" ry="5" fill="#ffe89a"/><circle cx="236" cy="183" r="4" fill="#7bd389"/><circle cx="150" cy="185" r="3" fill="#ef476f"/>' +
      '<rect x="312" y="180" width="80" height="8" rx="3" fill="#2a2a2a"/>' +
      '<g class="kh-steam"><path d="M160 166q6 -10 0 -20" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/></g><g class="kh-steam kh-st2"><path d="M200 164q6 -10 0 -20" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/></g><g class="kh-steam kh-st3"><path d="M240 166q6 -10 0 -20" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/></g>' +
      /* long-handled paddle stirring */
      '<g class="kh-stir"><rect x="208" y="96" width="5" height="84" fill="#8a5a2e"/><rect x="200" y="172" width="20" height="10" rx="2" fill="#b07a40"/></g>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#5a4a2e" letter-spacing="1.5">MAGDALEN SQUARE · GIANT OMELETTE</text>',
      sky('khs2', '#78bde8', '#e8f4fa'));
  }

  /* 3. St. Mary Magdalen Church on Pere Megret St, the bell swinging */
  function khchurch() {
    return svg('<rect width="400" height="260" fill="url(#khs3)"/>' + oak(60, 220, 46) + oak(345, 220, 42) +
      church(200, 222, .8) +
      '<g class="kh-bell"><path d="M194 92q6 -14 12 0v6h-12z" fill="#e7c35a"/><circle cx="200" cy="100" r="2" fill="#a07a2a"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#4a4d52"/><rect x="0" y="222" width="400" height="5" fill="#c9c1b0"/>',
      sky('khs3', '#6fb2e6', '#fbe3c0'));
  }

  /* 4. The big TV singing-show stage: spotlights, one mic, the crowd's hands up */
  function khstage() {
    return svg('<rect width="400" height="260" fill="#0e0b18"/>' +
      '<rect class="kh-beam" x="70" y="0" width="18" height="190" fill="#ef476f" opacity=".22"/><rect class="kh-beam kh-bm2" x="192" y="0" width="18" height="190" fill="#ffd166" opacity=".22"/><rect class="kh-beam" x="312" y="0" width="18" height="190" fill="#7bd389" opacity=".2"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => '<circle class="kh-blink ' + (i % 3 ? 'kh-b' + (i % 3 + 1) : '') + '" cx="' + (40 + i * 40) + '" cy="16" r="4" fill="#fff6c8"/>').join('') +
      '<path d="M40 150h320l30 30h-380z" fill="#2a2440"/><ellipse cx="200" cy="160" rx="70" ry="10" fill="#ffd166" opacity=".25"/>' +
      '<rect x="198" y="96" width="4" height="62" fill="#aaa"/><ellipse cx="200" cy="94" rx="5" ry="7" fill="#333"/><path d="M186 158h28" stroke="#888" stroke-width="3"/>' +
      '<text x="200" y="70" text-anchor="middle" ' + font + ' font-size="15" fill="#ffd166" letter-spacing="2">SEASON 8 · RUNNER-UP</text>' +
      '<rect x="0" y="180" width="400" height="80" fill="#15112a"/>' +
      Array.from({ length: 13 }, (_, i) => '<g class="kh-hand ' + (i % 2 ? 'kh-h2' : '') + '"><circle cx="' + (16 + i * 31) + '" cy="214" r="10" fill="#07060e"/><rect x="' + (6 + i * 31) + '" y="222" width="20" height="40" rx="6" fill="#07060e"/><path d="M' + (8 + i * 31) + ' 216l-6 -26M' + (24 + i * 31) + ' 216l6 -26" stroke="#07060e" stroke-width="5" stroke-linecap="round"/></g>').join(''));
  }

  /* 5. The corner: S Washington St and Pere Megret St on Magdalen Square, her name tagged, St. Mary Magdalen's spire behind */
  function khcorner() {
    return svg('<rect width="400" height="260" fill="url(#khs5)"/>' + church(130, 136, .45) + oak(330, 140, 36) +
      '<rect x="0" y="130" width="400" height="90" fill="#e9dcc4"/>' +
      [0, 1, 2, 3, 4, 5].map(r => '<path d="M0 ' + (140 + r * 14) + 'h400" stroke="#d6c7a8" stroke-width="1"/>').join('') +
      tag('KORYN', 22, 182, 40, '#ffd166', -5) + tag('HAWTHORNE', 40, 214, 30, '#ef476f', -4) + tag("WON'T HE DO IT", 196, 160, 15, '#7bd389', 5) +
      '<g class="kh-sp"><circle cx="258" cy="188" r="3" fill="#ef476f" opacity=".7"/></g><g class="kh-sp kh-sp2"><circle cx="264" cy="194" r="2.4" fill="#ffd166" opacity=".7"/></g>' +
      '<rect x="244" y="192" width="16" height="28" rx="3" fill="#ef476f"/><rect x="247" y="184" width="10" height="8" fill="#ddd"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#45484d"/>' +
      '<rect x="360" y="40" width="5" height="180" fill="#4a5a4a"/>' + sign(270, 44, 126, 'S WASHINGTON ST') + sign(270, 70, 126, 'PERE MEGRET ST'),
      sky('khs5', '#5fb4e0', '#ffd9a8'));
  }

  window.SCENES = { khstop: khstop, khomelette: khomelette, khchurch: khchurch, khstage: khstage, khcorner: khcorner };
})();
