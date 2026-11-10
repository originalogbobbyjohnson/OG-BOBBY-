/* philwickham scenes (Regions: Los Angeles + SoCal; San Diego North County, home church in Encinitas). CSS classes prefixed pw- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pwrip{0%{transform:translateX(0)}100%{transform:translateX(-32px)}}.pw-rip{animation:pwrip 3s linear infinite}' +
    '@keyframes pwgull{0%{transform:translate(-60px,10px)}100%{transform:translate(460px,-20px)}}.pw-gull{animation:pwgull 11s linear infinite}.pw-g2{animation-delay:-5s}' +
    '@keyframes pwflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.5)}}.pw-flap{transform-box:fill-box;transform-origin:50% 100%;animation:pwflap .6s ease-in-out infinite}' +
    '@keyframes pwsurf{0%,100%{transform:translate(0,0) rotate(-3deg)}50%{transform:translate(26px,-4px) rotate(3deg)}}.pw-surf{transform-box:fill-box;transform-origin:50% 100%;animation:pwsurf 3.2s ease-in-out infinite}' +
    '@keyframes pwblink{0%,100%{opacity:.35}50%{opacity:1}}.pw-blink{animation:pwblink 1.4s ease-in-out infinite}.pw-b2{animation-delay:-.7s}' +
    '@keyframes pwsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.pw-sway{transform-box:fill-box;transform-origin:50% 100%;animation:pwsway 3s ease-in-out infinite}' +
    '@keyframes pwsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.pw-sp{animation:pwsp 1.4s ease-out infinite}.pw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const gull = (x, y, c) => '<g class="pw-gull ' + (c || '') + '"><g transform="translate(' + x + ' ' + y + ')"><path class="pw-flap" d="M0 0q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g></g>';
  const palm = (x, base, h) => '<g class="pw-sway"><path d="M' + x + ' ' + base + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#6b4f2e" stroke-width="5" fill="none"/>' +
    [[-26, 8], [-18, -6], [0, -12], [18, -6], [26, 8]].map(([dx, dy]) => '<path d="M' + x + ' ' + (base - h) + 'q' + (dx / 2) + ' ' + (dy - 10) + ' ' + dx + ' ' + (dy + 4) + '" stroke="#2f7a3e" stroke-width="5" fill="none" stroke-linecap="round"/>').join('') + '</g>';
  const waves = (y) => '<g class="pw-rip">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 32) + ' ' + (y + (i % 3) * 10) + 'q8 -4 16 0" stroke="#e3f4fb" stroke-width="2" fill="none" opacity=".75"/>').join('') + '</g>';
  /* the ENCINITAS sign: old neon letters on a steel truss over Coast Hwy 101 */
  const ensign = (x, y, w) => '<rect x="' + x + '" y="' + y + '" width="6" height="' + (220 - y) + '" fill="#5d6b74"/><rect x="' + (x + w - 6) + '" y="' + y + '" width="6" height="' + (220 - y) + '" fill="#5d6b74"/>' +
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="34" fill="#22313a" stroke="#5d6b74" stroke-width="3"/><path d="M' + x + ' ' + (y + 34) + 'l' + (w / 8) + ' -34' + Array.from({ length: 7 }, (_, i) => 'l' + (w / 8) + ' ' + (i % 2 ? -34 : 34)).join('') + '" stroke="#3e4c55" stroke-width="1.5" fill="none"/>' +
    '<text class="pw-blink" x="' + (x + w / 2) + '" y="' + (y + 25) + '" text-anchor="middle" ' + font + ' font-size="20" fill="#ff7a6b" stroke="#ffd0c8" stroke-width=".6" letter-spacing="2">ENCINITAS</text>';

  /* 1. The COASTER pulling into Encinitas station: the platform by Coast Hwy 101, the ocean glow behind */
  function pwstop() {
    return svg('<rect width="400" height="260" fill="url(#pws1)"/>' + gull(30, 50) + gull(0, 70, 'pw-g2') +
      '<rect x="0" y="120" width="400" height="20" fill="#5aa7c9"/>' + palm(30, 160, 80) + palm(190, 160, 70) +
      '<rect x="0" y="160" width="400" height="20" fill="#cfc6b4"/><rect x="0" y="178" width="400" height="4" fill="#f2c14e"/>' +
      '<rect x="0" y="182" width="400" height="78" fill="#4a4d52"/><path d="M0 236h400M0 248h400" stroke="#8a8f94" stroke-width="3"/>' +
      '<rect x="270" y="70" width="5" height="92" fill="#3a3f44"/><rect x="230" y="64" width="150" height="38" rx="3" fill="#111"/><text x="305" y="84" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">ENCINITAS</text>' +
      '<rect x="244" y="89" width="64" height="9" rx="2" fill="#1a5aa6"/><text x="276" y="96" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">COASTER</text><text x="346" y="96" text-anchor="middle" ' + font + ' font-size="7" fill="#ccc">PLATFORM</text>' +
      '<g class="anim-train"><rect x="20" y="186" width="230" height="50" rx="6" fill="#f2f4f6"/><rect x="20" y="214" width="230" height="8" fill="#1a5aa6"/><rect x="20" y="198" width="230" height="4" fill="#5aa7c9"/>' +
      [0, 1, 2, 3, 4, 5, 6].map(i => '<rect x="' + (30 + i * 30) + '" y="190" width="22" height="18" rx="2" fill="#2b3a48"/>').join('') +
      '<rect x="20" y="186" width="230" height="4" fill="#1a5aa6"/><circle cx="246" cy="228" r="3" fill="#fff3b0"/></g>',
      sky('pws1', '#ff9f5a', '#ffe1a8'));
  }

  /* 2. Moonlight Beach: the lifeguard tower, the surf rolling in, the bluff and palms */
  function pwmoon() {
    return svg('<rect width="400" height="260" fill="url(#pws2)"/>' + gull(60, 40) + gull(20, 60, 'pw-g2') +
      '<circle cx="310" cy="90" r="22" fill="#fff3c4"/>' +
      '<rect x="0" y="110" width="400" height="80" fill="#3d8fbf"/>' + waves(130) +
      '<path d="M0 110q30 -40 70 -50l20 50z" fill="#c9a97a"/>' + palm(40, 70, 40) +
      '<g class="pw-surf"><path d="M210 158l40 -4l-4 6z" fill="#ffe08a"/><rect x="226" y="136" width="5" height="18" rx="2" fill="#1d2b36"/><circle cx="228" cy="132" r="4" fill="#1d2b36"/></g>' +
      '<path d="M0 190q100 -16 200 0t200 0v70h-400z" fill="#ecd8a8"/><path d="M0 196q100 -16 200 0t200 0" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/>' +
      '<rect x="270" y="200" width="4" height="40" fill="#e2e6ea"/><rect x="316" y="200" width="4" height="40" fill="#e2e6ea"/><rect x="262" y="164" width="66" height="40" fill="#f4f1ea" stroke="#4fb3d9" stroke-width="3"/><path d="M256 166l39 -16l39 16z" fill="#4fb3d9"/>' +
      '<rect x="272" y="174" width="46" height="16" fill="#9fd8f0"/><path d="M262 214h66" stroke="#e2e6ea" stroke-width="3"/><path d="M276 214l-10 26M314 214l10 26" stroke="#e2e6ea" stroke-width="3"/>' +
      '<rect x="60" y="216" width="3" height="28" fill="#555"/><path d="M40 218q22 -20 44 0z" fill="#ff9f5a"/><path d="M52 218q10 -18 22 0" fill="#fff" opacity=".8"/>',
      sky('pws2', '#7cc8ee', '#e8f6fb'));
  }

  /* 3. The little chapel where he worships: white wood chapel with a cross, string lights, a guitar case by the door */
  function pwchapel() {
    return svg('<rect width="400" height="260" fill="url(#pws3)"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#7fae5a"/><path d="M180 260l14 -70h12l14 70z" fill="#d9c9a8"/>' + palm(60, 190, 90) + palm(350, 190, 80) +
      '<rect x="130" y="110" width="140" height="80" fill="#f4f1ea"/>' + [0, 1, 2, 3, 4, 5, 6].map(i => '<path d="M130 ' + (118 + i * 11) + 'h140" stroke="#ded8cc" stroke-width="1"/>').join('') +
      '<path d="M120 112l80 -46l80 46z" fill="#5d6b74"/><rect x="196" y="20" width="8" height="40" fill="#ffe08a"/><rect x="186" y="30" width="28" height="8" fill="#ffe08a"/>' +
      '<rect x="184" y="146" width="32" height="44" rx="16" fill="#8a5a3a"/><rect x="199" y="148" width="2" height="42" fill="#5b3a2a"/>' +
      '<rect x="146" y="128" width="20" height="30" rx="10" fill="#ffd27a"/><rect x="234" y="128" width="20" height="30" rx="10" fill="#ffd27a"/>' +
      '<path d="M120 112q40 20 80 0t80 0" stroke="#333" stroke-width="1" fill="none"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7].map(i => '<circle class="pw-blink' + (i % 2 ? ' pw-b2' : '') + '" cx="' + (128 + i * 20) + '" cy="' + (116 + Math.round(8 * Math.sin(i * Math.PI / 4 + 0.6))) + '" r="3" fill="#ffe08a"/>').join('') +
      '<g transform="rotate(12 250 190)"><path d="M244 192q0 -50 8 -66q8 16 8 66q-8 6 -16 0z" fill="#4fb3d9" stroke="#fff" stroke-width="1.5"/><path d="M252 130v58" stroke="#fff" stroke-width="1.5"/></g>',
      sky('pws3', '#f29b6b', '#ffd9a8'));
  }

  /* 4. Swami's at sunset: the long wooden staircase down the bluff, surfers waiting on a set */
  function pwswami() {
    return svg('<rect width="400" height="260" fill="url(#pws4)"/>' + gull(80, 50) +
      '<circle cx="290" cy="128" r="30" fill="#ffcf6a"/><rect x="0" y="128" width="400" height="132" fill="#2f7fae"/>' +
      '<path d="M250 134h80M262 144h56" stroke="#ffe4a0" stroke-width="3" opacity=".7"/>' + waves(160) + waves(196) +
      '<path d="M0 70q60 -10 120 10l40 180h-160z" fill="#b08a5a"/><path d="M0 70q60 -10 120 10" stroke="#5e8a3a" stroke-width="8" fill="none"/>' +
      '<path d="M40 80l30 40h-14l26 40h-14l28 46h-14l22 54" stroke="#6b4f2e" stroke-width="6" fill="none"/>' +
      '<path d="M40 80l30 40h-14l26 40h-14l28 46h-14l22 54" stroke="#d9b98a" stroke-width="2" fill="none" stroke-dasharray="3 3"/>' +
      '<g class="pw-surf"><path d="M220 182l36 -2l-4 5z" fill="#ff9f5a"/><rect x="232" y="166" width="5" height="14" rx="2" fill="#1d2b36"/><circle cx="234" cy="162" r="4" fill="#1d2b36"/></g>' +
      '<path d="M300 210l34 -2l-4 5z" fill="#ffe08a"/><rect x="312" y="196" width="5" height="12" rx="2" fill="#1d2b36"/><circle cx="314" cy="192" r="4" fill="#1d2b36"/>',
      sky('pws4', '#f7a37a', '#ffe0b0'));
  }

  /* 5. The corner: green street signs at Coast Hwy 101 and Encinitas Blvd, the name tagged on a surf-shop wall, the ENCINITAS sign behind */
  function pwcorner() {
    return svg('<rect width="400" height="260" fill="url(#pws5)"/>' + ensign(60, 40, 220) + palm(340, 140, 60) +
      '<rect x="0" y="140" width="400" height="80" fill="#e9e1cf"/>' +
      [0, 1, 2, 3, 4].map(r => '<path d="M0 ' + (150 + r * 14) + 'h400" stroke="#d6cbb2" stroke-width="1"/>').join('') +
      tag('PHIL', 24, 186, 36, '#ff9f5a', -4) + tag('WICKHAM', 110, 212, 34, '#4fb3d9', -4) +
      '<g class="pw-sp"><circle cx="304" cy="186" r="3" fill="#ff9f5a" opacity=".7"/></g><g class="pw-sp pw-sp2"><circle cx="310" cy="192" r="2.4" fill="#4fb3d9" opacity=".7"/></g>' +
      '<rect x="290" y="190" width="16" height="28" rx="3" fill="#4fb3d9"/><rect x="293" y="182" width="10" height="8" fill="#ddd"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#45484d"/>' +
      '<rect x="356" y="96" width="5" height="124" fill="#4a5a4a"/>' + sign(290, 100, 108, 'Coast Hwy 101') + sign(290, 126, 108, 'Encinitas Blvd'),
      sky('pws5', '#2c3e70', '#ff9f6b'));
  }

  window.SCENES = { pwstop: pwstop, pwmoon: pwmoon, pwchapel: pwchapel, pwswami: pwswami, pwcorner: pwcorner };
})();
