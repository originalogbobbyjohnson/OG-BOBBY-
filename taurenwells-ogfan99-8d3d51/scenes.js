/* taurenwells scenes (Regions: Houston + Texas; came up in Houston, served at Royalwood Church on Uvalde Rd, North Channel). CSS classes prefixed tw- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes twcar{0%{transform:translateX(-90px)}100%{transform:translateX(480px)}}.tw-car{animation:twcar 7s linear infinite}.tw-car2{animation-duration:9s;animation-delay:-4s}' +
    '@keyframes twblink{0%,100%{opacity:.25}50%{opacity:1}}.tw-blink{animation:twblink 1.6s ease-in-out infinite}.tw-b2{animation-delay:-.55s}.tw-b3{animation-delay:-1.1s}' +
    '@keyframes twbird{0%{transform:translate(-40px,20px)}100%{transform:translate(460px,-30px)}}.tw-bird{animation:twbird 12s linear infinite}.tw-bird2{animation-delay:-6s}' +
    '@keyframes twflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.5)}}.tw-flap{transform-box:fill-box;transform-origin:50% 100%;animation:twflap .55s ease-in-out infinite}' +
    '@keyframes twrise{0%{transform:translateY(14px)}100%{transform:translateY(-6px)}}.tw-rise{animation:twrise 6s ease-in-out infinite alternate}' +
    '@keyframes twsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.tw-sway{transform-box:fill-box;transform-origin:50% 100%;animation:twsway 2.4s ease-in-out infinite}.tw-s2{animation-delay:-1.2s}' +
    '@keyframes twsp{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tw-sp{animation:twsp 1.4s ease-out infinite}.tw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const bird = (x, y, cls) => '<g class="tw-bird ' + (cls || '') + '"><g transform="translate(' + x + ' ' + y + ')"><path class="tw-flap" d="M0 0q5 -5 10 0q5 -5 10 0" stroke="#3a3a3a" stroke-width="1.8" fill="none"/></g></g>';
  /* downtown Houston skyline silhouette (generic towers, stepped and gabled tops) */
  const skyline = (y, fill, op) => '<g fill="' + fill + '" opacity="' + (op || 1) + '">' +
    '<rect x="120" y="' + (y - 60) + '" width="22" height="60"/><rect x="146" y="' + (y - 92) + '" width="20" height="92"/><path d="M170 ' + y + 'v-104l12 -14l12 14v104z"/>' +
    '<rect x="198" y="' + (y - 78) + '" width="24" height="78"/><path d="M226 ' + y + 'v-118h18v118z"/><path d="M248 ' + y + 'v-86l10 -10l10 10v86z"/><rect x="272" y="' + (y - 54) + '" width="20" height="54"/>' +
    '<rect x="96" y="' + (y - 38) + '" width="20" height="38"/><rect x="296" y="' + (y - 34) + '" width="26" height="34"/></g>';

  /* 1. I-10 East: green freeway sign for the Uvalde Rd exit, cars rolling under it, sun going down over Houston */
  function twstop() {
    return svg('<rect width="400" height="260" fill="url(#tws1)"/>' + skyline(170, '#5a4a66', .55) +
      '<rect x="0" y="170" width="400" height="90" fill="#4a4d52"/><path d="M0 214h400" stroke="#f2d16b" stroke-width="3" stroke-dasharray="22 16"/><path d="M0 176h400M0 254h400" stroke="#ddd" stroke-width="2"/>' +
      '<rect x="40" y="36" width="6" height="140" fill="#8a949c"/><rect x="354" y="36" width="6" height="140" fill="#8a949c"/><rect x="40" y="36" width="320" height="6" fill="#8a949c"/>' +
      '<rect x="70" y="46" width="160" height="70" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<path d="M80 55h38l7 8l-7 8h-38z" fill="#fff"/><text x="100" y="66" text-anchor="middle" ' + font + ' font-size="8" fill="#0f6b3a">EAST</text>' +
      '<g transform="translate(140 52)"><path d="M0 2h28v14q0 10 -14 14q-14 -4 -14 -14z" fill="#1d4ea0" stroke="#fff" stroke-width="1.5"/><path d="M0 2h28v6h-28z" fill="#c8102e"/><text x="14" y="23" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">10</text></g>' +
      '<text x="150" y="100" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Uvalde Rd</text><text x="150" y="112" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">North Channel</text>' +
      '<rect x="246" y="46" width="94" height="40" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="293" y="59" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">EXIT ONLY</text><path d="M284 74h14v5l8 -8l-8 -8v5h-14z" fill="#fff" transform="rotate(30 293 72)"/>' +
      '<rect x="246" y="86" width="40" height="14" fill="#f2c14e"/><text x="266" y="97" text-anchor="middle" ' + font + ' font-size="9" fill="#111">EXIT</text>' +
      '<g class="anim-train"><rect x="40" y="186" width="96" height="22" rx="6" fill="#e86a4a"/><path d="M58 186l10 -14h40l12 14z" fill="#e86a4a"/><path d="M64 184l7 -10h14v10zM90 184v-10h16l9 10z" fill="#2b3a48"/><circle cx="62" cy="210" r="8" fill="#1a1a1a"/><circle cx="116" cy="210" r="8" fill="#1a1a1a"/><circle cx="134" cy="194" r="3" fill="#fff3b0"/></g>' +
      '<g class="tw-car tw-car2"><rect x="0" y="226" width="70" height="18" rx="5" fill="#3fb6a8"/><path d="M12 226l8 -10h28l10 10z" fill="#3fb6a8"/><circle cx="14" cy="246" r="6" fill="#1a1a1a"/><circle cx="56" cy="246" r="6" fill="#1a1a1a"/></g>',
      sky('tws1', '#f08a5d', '#ffd59e'));
  }

  /* 2. Royalwood Church on Uvalde Rd: low brick church, white steeple, marquee sign out front, oaks */
  function twchurch() {
    const oak = (x, s) => '<g class="tw-sway ' + (s || '') + '"><rect x="' + (x - 3) + '" y="150" width="6" height="40" fill="#5b4430"/><circle cx="' + x + '" cy="140" r="22" fill="#3e7a3a"/><circle cx="' + (x - 14) + '" cy="150" r="14" fill="#356b32"/><circle cx="' + (x + 14) + '" cy="150" r="14" fill="#356b32"/></g>';
    return svg('<rect width="400" height="260" fill="url(#tws2)"/>' + bird(20, 50) + bird(0, 70, 'tw-bird2') +
      '<rect x="0" y="190" width="400" height="70" fill="#7fae5a"/><rect x="0" y="222" width="400" height="38" fill="#4a4d52"/><path d="M0 240h400" stroke="#f2d16b" stroke-width="2" stroke-dasharray="18 14"/>' +
      oak(40) + oak(372, 'tw-s2') +
      '<rect x="110" y="120" width="190" height="70" fill="#a65a3f"/><path d="M100 122l105 -34l105 34z" fill="#5b3a2c"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (124 + i * 36) + '" y="136" width="16" height="30" rx="8" fill="#f2e2a8"/>').join('') +
      '<rect x="190" y="150" width="30" height="40" fill="#5b3a2c"/><rect x="204" y="150" width="2" height="40" fill="#3a241b"/>' +
      '<rect x="194" y="40" width="22" height="56" fill="#f4f1ea"/><path d="M190 42l15 -26l15 26z" fill="#f4f1ea"/><rect x="204" y="0" width="3" height="20" fill="#f2c14e"/><rect x="199" y="6" width="13" height="3" fill="#f2c14e"/>' +
      '<rect x="200" y="56" width="10" height="16" rx="5" fill="#3a241b"/>' +
      '<rect x="318" y="150" width="70" height="40" rx="3" fill="#f4f1ea" stroke="#5b3a2c" stroke-width="2"/><text x="353" y="164" text-anchor="middle" ' + font + ' font-size="7.5" fill="#5b3a2c">ROYALWOOD</text><text x="353" y="174" text-anchor="middle" ' + font + ' font-size="7.5" fill="#5b3a2c">CHURCH</text>' +
      '<text x="353" y="185" text-anchor="middle" ' + font + ' font-size="6" fill="#c8102e" class="tw-blink">WHEN WE PRAY</text><rect x="334" y="190" width="4" height="10" fill="#5b3a2c"/><rect x="368" y="190" width="4" height="10" fill="#5b3a2c"/>',
      sky('tws2', '#7cc3e8', '#e8f4fb'));
  }

  /* 3. Miller Outdoor Theatre in Hermann Park: the white canopy roof over the stage, the grass hill full of people */
  function twhill() {
    const fan = (x, y, c, cls) => '<g class="tw-sway ' + (cls || '') + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + c + '"/><rect x="' + (x - 3) + '" y="' + (y + 4) + '" width="6" height="9" rx="2" fill="' + c + '"/><path d="M' + (x - 3) + ' ' + (y + 5) + 'l-4 -8M' + (x + 3) + ' ' + (y + 5) + 'l4 -8" stroke="' + c + '" stroke-width="2"/></g>';
    return svg('<rect width="400" height="260" fill="url(#tws3)"/>' +
      '<path d="M0 120q100 -16 200 -6t200 0v20h-400z" fill="#3c6e3a"/>' +
      '<rect x="120" y="66" width="160" height="62" fill="#2a2f38"/><path d="M96 70q104 -46 208 0l-10 8q-94 -36 -188 0z" fill="#f2f4f6"/><rect x="104" y="72" width="6" height="58" fill="#d8dde2"/><rect x="290" y="72" width="6" height="58" fill="#d8dde2"/>' +
      '<rect x="140" y="104" width="120" height="24" fill="#6b4f2e"/><g class="tw-blink"><circle cx="160" cy="84" r="4" fill="#f2c14e"/></g><g class="tw-blink tw-b2"><circle cx="200" cy="80" r="4" fill="#f2c14e"/></g><g class="tw-blink tw-b3"><circle cx="240" cy="84" r="4" fill="#f2c14e"/></g>' +
      '<rect x="190" y="110" width="4" height="18" fill="#ccc"/><circle cx="192" cy="108" r="3" fill="#ccc"/>' +
      '<path d="M0 150q200 -40 400 0v110h-400z" fill="#6aa84f"/><path d="M0 190q200 -50 400 0v70h-400z" fill="#5c9a44"/>' +
      fan(60, 168, '#e86a4a') + fan(90, 160, '#3fb6a8', 'tw-s2') + fan(130, 156, '#f2c14e') + fan(270, 156, '#f4f1ea', 'tw-s2') + fan(310, 160, '#e86a4a') + fan(340, 168, '#3fb6a8', 'tw-s2') +
      fan(110, 196, '#f4f1ea') + fan(170, 186, '#e86a4a', 'tw-s2') + fan(230, 186, '#3fb6a8') + fan(290, 196, '#f2c14e', 'tw-s2') +
      '<rect x="160" y="222" width="80" height="20" rx="3" fill="#1f3a2b" stroke="#f2c14e" stroke-width="1.5"/><text x="200" y="236" text-anchor="middle" ' + font + ' font-size="8" fill="#f2c14e">THE HILL</text>',
      sky('tws3', '#2c3e70', '#f29b6b'));
  }

  /* 4. Discovery Green at sunrise: the downtown towers lighting up gold, the lake, joggers — joy in the morning */
  function twgreen() {
    return svg('<rect width="400" height="260" fill="url(#tws4)"/>' +
      '<g class="tw-rise"><circle cx="300" cy="120" r="30" fill="#ffd36b"/></g>' + skyline(150, '#3b3550', .9) +
      '<g fill="#ffd36b" opacity=".85">' + [[150, 70], [150, 90], [176, 60], [176, 84], [230, 50], [230, 74], [230, 98], [254, 80], [204, 92]].map(([x, y]) => '<rect x="' + x + '" y="' + y + '" width="8" height="4"/>').join('') + '</g>' +
      '<rect x="0" y="150" width="400" height="110" fill="#6aa84f"/><ellipse cx="120" cy="198" rx="90" ry="20" fill="#5aa7c9"/><path d="M60 196h40M120 204h50" stroke="#d6eef8" stroke-width="2" opacity=".8"/>' +
      '<path d="M220 260q30 -60 180 -70v70z" fill="#c9b48a"/>' +
      bird(30, 40) + bird(0, 60, 'tw-bird2') +
      '<g class="tw-car"><g transform="translate(0 0)"><circle cx="10" cy="214" r="4" fill="#2b2b2b"/><rect x="7" y="218" width="6" height="12" rx="2" fill="#e86a4a"/><path d="M8 230l-3 8M12 230l3 8" stroke="#2b2b2b" stroke-width="2"/></g></g>' +
      '<rect x="300" y="200" width="70" height="24" rx="3" fill="#1f3a2b" stroke="#f2c14e" stroke-width="1.5"/><text x="335" y="216" text-anchor="middle" ' + font + ' font-size="8" fill="#f2c14e">JOY · 6 AM</text>',
      sky('tws4', '#e98b7a', '#ffe1a8'));
  }

  /* 5. The corner: green street signs at Uvalde Rd and Royalwood Dr, the name tagged on a wall, the Houston skyline behind */
  function twcorner() {
    return svg('<rect width="400" height="260" fill="url(#tws5)"/>' + skyline(140, '#2a2f45', .8) +
      '<rect x="0" y="140" width="400" height="80" fill="#c8b9a0"/>' +
      [0, 1, 2, 3, 4].map(r => '<path d="M0 ' + (150 + r * 14) + 'h400" stroke="#b3a487" stroke-width="1"/>').join('') +
      tag('TAUREN', 24, 186, 34, '#f2c14e', -4) + tag('WELLS', 130, 212, 36, '#3fb6a8', -4) +
      '<g class="tw-sp"><circle cx="298" cy="186" r="3" fill="#f2c14e" opacity=".7"/></g><g class="tw-sp tw-sp2"><circle cx="304" cy="192" r="2.4" fill="#3fb6a8" opacity=".7"/></g>' +
      '<rect x="284" y="190" width="16" height="28" rx="3" fill="#e86a4a"/><rect x="287" y="182" width="10" height="8" fill="#ddd"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4a4d52"/>' +
      '<rect x="346" y="40" width="5" height="180" fill="#4a5a4a"/>' + sign(290, 44, 108, 'Uvalde Rd') + sign(290, 70, 108, 'Royalwood Dr'),
      sky('tws5', '#3a5f8f', '#f6b980'));
  }

  window.SCENES = { twstop: twstop, twchurch: twchurch, twhill: twhill, twgreen: twgreen, twcorner: twcorner };
})();
