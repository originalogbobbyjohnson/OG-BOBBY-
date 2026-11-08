/* isleybrothers scenes (Regions tab: St. Louis + Ohio; Lincoln Heights, Ohio, just north of Cincinnati). CSS classes and ids prefixed is- (the page's own anim-train is kept on the bus).
   1 Cincinnati Metro route 78 (Lincoln Heights trips) pulling up at Chicago Ave and Mangham Dr in Lincoln Heights (OSM: 78 "Springdale - Vine / Lincoln Heights").
   2 Sunday morning in Lincoln Heights: a white clapboard church, the bell swinging, gospel notes floating out (the brothers started out singing gospel in church).
   3 The Isley Brothers mural on E 13th St in Pendleton, Cincinnati: flowing cursive lettering in a 60s pop-art frame of flowers (lettering only, no portraits).
   4 Cincinnati Music Hall in Over-the-Rhine: red brick Venetian Gothic, the big rose window, Washington Park's fountain jumping in front.
   5 Wayne Ave and Lindy Ave, Lincoln Heights: green signs, ISLEY tagged on the brick, a jet climbing over the Evendale engine plant behind (the plant that built the town).
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes isflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.is-flk{animation:isflick 2.2s infinite}.is-flk2{animation-delay:.8s}' +
    '@keyframes isbell{0%,100%{transform:rotate(-16deg)}50%{transform:rotate(16deg)}}.is-bell{transform-box:fill-box;transform-origin:50% 0;animation:isbell 1.6s ease-in-out infinite}' +
    '@keyframes isnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(40px,-90px);opacity:0}}.is-note{animation:isnote 4s linear infinite}.is-n2{animation-delay:-1.3s}.is-n3{animation-delay:-2.6s}' +
    '@keyframes issway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.is-sway{transform-box:fill-box;transform-origin:50% 100%;animation:issway 2.4s ease-in-out infinite}.is-sw2{animation-delay:-1.2s}' +
    '@keyframes isglow{0%,100%{opacity:.55}50%{opacity:1}}.is-glow{animation:isglow 2.6s ease-in-out infinite}' +
    '@keyframes isjet{0%{transform:scaleY(1)}50%{transform:scaleY(.72)}100%{transform:scaleY(1)}}.is-jet{transform-box:fill-box;transform-origin:50% 100%;animation:isjet 1.1s ease-in-out infinite}.is-j2{animation-delay:-.5s}' +
    '@keyframes isplane{0%{transform:translate(-80px,40px)}100%{transform:translate(480px,-70px)}}.is-plane{animation:isplane 9s linear infinite}' +
    '@keyframes isspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.is-sp{animation:isspray 1.4s ease-out infinite}.is-sp2{animation-delay:.45s}' +
    '@keyframes iscloud{0%,100%{transform:translateX(0)}50%{transform:translateX(16px)}}.is-cl{animation:iscloud 8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#f5b301", ORNG = "#ff7a1a", TEAL = "#2ec4b6", PURP = "#8e5cff", METRO = "#0b5cad", SIGN = "#0f6b3a";
  const note = (x, y, c, cls) => '<g class="is-note ' + cls + '"><text x="' + x + '" y="' + y + '" font-size="22" fill="' + c + '">&#9834;</text></g>';
  const house = (x, y, w, body, roof) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (w * 0.6) + '" fill="' + body + '"/><path d="M' + (x - 4) + ' ' + y + 'l' + (w / 2 + 4) + ' -' + (w * 0.38) + 'l' + (w / 2 + 4) + ' ' + (w * 0.38) + 'z" fill="' + roof + '"/>' +
    '<rect x="' + (x + w * 0.15) + '" y="' + (y + w * 0.16) + '" width="' + (w * 0.22) + '" height="' + (w * 0.2) + '" fill="#ffd98a" class="is-flk"/><rect x="' + (x + w * 0.6) + '" y="' + (y + w * 0.24) + '" width="' + (w * 0.2) + '" height="' + (w * 0.36) + '" fill="#3a2a22"/>';

  /* 1. Metro route 78 at Chicago Ave and Mangham Dr, Lincoln Heights */
  function isstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 44) + '" y="98" width="36" height="30" rx="3" fill="#1d2733"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="84" width="320" height="86" rx="10" fill="#f4f5f7" stroke="#9aa3ab" stroke-width="2"/>' + win +
      '<rect x="60" y="136" width="320" height="10" fill="' + METRO + '"/><rect x="60" y="148" width="320" height="3" fill="' + ORNG + '"/>' +
      '<rect x="64" y="96" width="10" height="56" rx="2" fill="#1d2733"/><rect x="66" y="87" width="96" height="10" rx="2" fill="#111"/><text x="114" y="95" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb347">78 LINCOLN HTS</text>' +
      '<circle class="is-flk" cx="66" cy="160" r="3.5" fill="#fff6c2"/><circle cx="120" cy="172" r="12" fill="#222"/><circle cx="120" cy="172" r="5" fill="#777"/><circle cx="320" cy="172" r="12" fill="#222"/><circle cx="320" cy="172" r="5" fill="#777"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#iss1)"/>' +
      '<g class="is-cl"><ellipse cx="80" cy="34" rx="34" ry="9" fill="#ffffff" opacity=".35"/><ellipse cx="300" cy="24" rx="40" ry="8" fill="#ffffff" opacity=".3"/></g>' +
      '<circle cx="34" cy="96" r="22" fill="#2f5a2a"/><circle cx="372" cy="92" r="26" fill="#2f5a2a"/><rect x="31" y="104" width="6" height="30" fill="#4a3424"/><rect x="369" y="104" width="6" height="30" fill="#4a3424"/>' +
      house(4, 104, 52, "#c9b79a", "#5a3a2a") + house(150, 98, 56, "#9fb2c4", "#3b3f52") + house(276, 102, 54, "#d8c6a6", "#6b3b2b") +
      '<rect x="0" y="176" width="400" height="84" fill="#3b3e44"/><path d="M0 218h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<rect x="0" y="172" width="400" height="8" fill="#a9a59c"/>' +
      bus +
      '<rect x="388" y="100" width="4" height="78" fill="#555"/><rect x="372" y="78" width="26" height="22" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/><text x="385" y="93" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">BUS</text>' +
      '<rect x="70" y="194" width="260" height="50" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="86" y="216" ' + font + ' font-size="15" fill="#fff" letter-spacing="1">CHICAGO AV &amp;</text>' +
      '<text x="86" y="236" ' + font + ' font-size="15" fill="#f3e3c3" letter-spacing="1">MANGHAM DR</text>' +
      '<circle cx="304" cy="219" r="16" fill="' + METRO + '"/><text x="304" y="225" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">78</text>',
      sky("iss1", "#f6b26b", "#7fb3d5"));
  }

  /* 2. Sunday in Lincoln Heights: white clapboard church, bell swinging, gospel notes */
  function ischurch() {
    const boards = Array.from({ length: 12 }, (_, i) => '<path d="M120 ' + (122 + i * 7) + 'h160" stroke="#d9d4c8" stroke-width="1"/>').join("");
    const glass = (x) => '<path d="M' + x + ' 170v-30q11 -14 22 0v30z" fill="url(#isg2)" class="is-glow" stroke="#6b5b3a" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#iss2)"/>' +
      '<circle cx="330" cy="54" r="22" fill="#ffe7a3" opacity=".9"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#5d8a3a"/><path d="M178 260l10 -60h24l10 60z" fill="#c8bfae"/>' +
      '<circle cx="60" cy="170" r="34" fill="#3f6b2a"/><rect x="56" y="180" width="8" height="24" fill="#4a3424"/><circle cx="350" cy="166" r="30" fill="#3f6b2a"/><rect x="346" y="176" width="8" height="28" fill="#4a3424"/>' +
      /* church body */
      '<rect x="120" y="118" width="160" height="84" fill="#f6f3ec" stroke="#bdb6a6" stroke-width="2"/>' + boards +
      '<path d="M112 120l88 -46l88 46z" fill="#7a2e2e" stroke="#4a1a1a" stroke-width="2"/>' +
      /* steeple */
      '<rect x="182" y="40" width="36" height="58" fill="#f6f3ec" stroke="#bdb6a6" stroke-width="2"/>' +
      '<rect x="190" y="50" width="20" height="24" fill="#2a2420"/>' +
      '<g class="is-bell"><path d="M194 54h12l2 14h-16z" fill="' + GOLD + '" stroke="#8a6410" stroke-width="1.2"/><circle cx="200" cy="70" r="2" fill="#8a6410"/></g>' +
      '<path d="M178 42l22 -36l22 36z" fill="#7a2e2e" stroke="#4a1a1a" stroke-width="2"/><path d="M200 6v-6M196 2h8" stroke="#f6f3ec" stroke-width="2"/>' +
      glass(134) + glass(248) +
      '<path d="M186 202v-40q14 -16 28 0v40z" fill="#5a3422" stroke="#3a2014" stroke-width="2"/><path d="M200 202v-46" stroke="#3a2014" stroke-width="1.5"/>' +
      '<rect x="182" y="198" width="36" height="6" fill="#bdb6a6"/>' +
      /* sign board */
      '<rect x="292" y="184" width="70" height="30" rx="2" fill="#1b1b1b" stroke="#bdb6a6" stroke-width="2"/><rect x="300" y="214" width="4" height="12" fill="#555"/><rect x="350" y="214" width="4" height="12" fill="#555"/>' +
      '<text x="327" y="196" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">SUNDAY</text><text x="327" y="207" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '">GOSPEL 11 AM</text>' +
      note(150, 112, GOLD, "") + note(240, 108, "#ffffff", "is-n2") + note(196, 100, ORNG, "is-n3"),
      sky("iss2", "#8ec5ff", "#ffe3b0") + '<linearGradient id="isg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + PURP + '"/><stop offset=".5" stop-color="' + GOLD + '"/><stop offset="1" stop-color="' + TEAL + '"/></linearGradient>');
  }

  /* 3. The Isley Brothers mural, E 13th St, Pendleton */
  function ismural() {
    const bricks = Array.from({ length: 22 }, (_, r) => '<path d="M0 ' + (r * 9) + 'h400" stroke="#6e3b2a" stroke-width="1" opacity=".5"/>').join("");
    const flower = (x, y, c, cls) => '<g class="is-sway ' + (cls || "") + '"><path d="M' + x + ' ' + (y + 20) + 'v-16" stroke="#3f8f3a" stroke-width="3"/>' +
      [0, 72, 144, 216, 288].map(a => '<ellipse cx="' + x + '" cy="' + (y - 6) + '" rx="5" ry="9" fill="' + c + '" transform="rotate(' + a + ' ' + x + ' ' + y + ')"/>').join("") +
      '<circle cx="' + x + '" cy="' + y + '" r="5" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#8a4a35"/>' + bricks +
      /* mural panel */
      '<rect x="22" y="20" width="356" height="166" rx="10" fill="url(#ism3)" stroke="#1a1030" stroke-width="3"/>' +
      '<g clip-path="url(#isclip3)"><path d="M22 60q60 -40 120 0t120 0t116 0" fill="none" stroke="' + TEAL + '" stroke-width="10" opacity=".6"/>' +
      '<path d="M22 150q60 30 120 0t120 0t116 0" fill="none" stroke="' + ORNG + '" stroke-width="10" opacity=".6"/></g>' +
      '<text x="200" y="98" text-anchor="middle" font-family="Brush Script MT, Segoe Script, cursive" font-style="italic" font-weight="700" font-size="52" fill="#fff6e0" stroke="#1a1030" stroke-width="3" paint-order="stroke">Isley</text>' +
      '<text x="200" y="144" text-anchor="middle" font-family="Brush Script MT, Segoe Script, cursive" font-style="italic" font-weight="700" font-size="40" fill="' + GOLD + '" stroke="#1a1030" stroke-width="3" paint-order="stroke">Brothers</text>' +
      flower(44, 44, "#ff5fa2") + flower(356, 44, "#ffd23f", "is-sw2") + flower(44, 160, "#ffd23f", "is-sw2") + flower(356, 160, "#ff5fa2") +
      flower(120, 170, TEAL) + flower(280, 170, PURP, "is-sw2") +
      /* sidewalk + street sign */
      '<rect x="0" y="200" width="400" height="60" fill="#9c978d"/><path d="M0 214h400" stroke="#7d786f" stroke-width="2"/>' +
      '<rect x="356" y="200" width="4" height="44" fill="#555"/><rect x="326" y="188" width="64" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="358" y="200" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">E 13 ST</text>' +
      '<g class="is-sp"><circle cx="180" cy="208" r="3" fill="' + PURP + '" opacity=".7"/></g><g class="is-sp is-sp2"><circle cx="190" cy="210" r="2.5" fill="' + TEAL + '" opacity=".7"/></g>' +
      '<rect x="168" y="216" width="10" height="20" rx="2" fill="#333"/><rect x="186" y="220" width="10" height="16" rx="2" fill="' + ORNG + '"/>',
      '<clipPath id="isclip3"><rect x="24" y="22" width="352" height="162" rx="9"/></clipPath><linearGradient id="ism3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5b2a86"/><stop offset=".5" stop-color="#c2185b"/><stop offset="1" stop-color="#ff8f00"/></linearGradient>');
  }

  /* 4. Cincinnati Music Hall, Washington Park fountain */
  function ismusichall() {
    const winRow = (y, xs) => xs.map(x => '<path d="M' + x + ' ' + (y + 22) + 'v-14q5 -8 10 0v14z" fill="#ffd98a" class="is-flk is-flk2"/>').join("");
    const jets = [150, 175, 200, 225, 250].map((x, i) => '<path class="is-jet' + (i % 2 ? " is-j2" : "") + '" d="M' + (x - 3) + ' 222q3 -' + (26 + (i % 3) * 8) + ' 6 0z" fill="#cfefff" opacity=".85"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#iss4)"/>' +
      /* side towers */
      '<rect x="40" y="70" width="60" height="120" fill="#b5523b" stroke="#6b2a1c" stroke-width="2"/><path d="M36 72l34 -40l34 40z" fill="#3c4a4a" stroke="#202a2a" stroke-width="2"/>' +
      '<rect x="300" y="70" width="60" height="120" fill="#b5523b" stroke="#6b2a1c" stroke-width="2"/><path d="M296 72l34 -40l34 40z" fill="#3c4a4a" stroke="#202a2a" stroke-width="2"/>' +
      /* center + wings */
      '<rect x="100" y="96" width="200" height="94" fill="#a8482f" stroke="#6b2a1c" stroke-width="2"/>' +
      '<path d="M130 100l70 -78l70 78z" fill="#b5523b" stroke="#6b2a1c" stroke-width="2"/>' +
      '<circle cx="200" cy="74" r="24" fill="#f3d9a4" stroke="#6b2a1c" stroke-width="3"/>' +
      [0, 30, 60, 90, 120, 150].map(a => '<path d="M200 74l' + (22 * Math.cos(a * Math.PI / 180)).toFixed(1) + ' ' + (22 * Math.sin(a * Math.PI / 180)).toFixed(1) + 'M200 74l' + (-22 * Math.cos(a * Math.PI / 180)).toFixed(1) + ' ' + (-22 * Math.sin(a * Math.PI / 180)).toFixed(1) + '" stroke="#6b2a1c" stroke-width="1.5"/>').join("") +
      '<circle cx="200" cy="74" r="6" fill="' + GOLD + '"/>' +
      '<path d="M100 120h200M40 110h60M300 110h60" stroke="#e8cfa0" stroke-width="3"/>' +
      winRow(124, [112, 132, 152, 238, 258, 278]) + winRow(124, [52, 76, 312, 336]) + winRow(156, [52, 76, 312, 336]) +
      '<path d="M170 190v-40q30 -30 60 0v40z" fill="#3a1e14" stroke="#e8cfa0" stroke-width="3"/><path d="M185 190v-34M200 190v-40M215 190v-34" stroke="#e8cfa0" stroke-width="1.5"/>' +
      /* park + fountain */
      '<rect x="0" y="190" width="400" height="70" fill="#4f7a3a"/><ellipse cx="200" cy="226" rx="90" ry="14" fill="#9ccbe0" stroke="#c9c2b2" stroke-width="4"/>' +
      jets +
      '<circle cx="30" cy="196" r="22" fill="#3f6b2a"/><circle cx="370" cy="196" r="22" fill="#3f6b2a"/>',
      sky("iss4", "#1c2a5a", "#e98e6a"));
  }

  /* 5. Wayne Ave and Lindy Ave, Lincoln Heights: signs, ISLEY tag, jet over the Evendale plant */
  function iscorner() {
    const bricks = Array.from({ length: 14 }, (_, r) => '<path d="M0 ' + (128 + r * 9) + 'h250" stroke="#5e2f22" stroke-width="1" opacity=".6"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#iss5)"/>' +
      /* engine plant behind: long sawtooth sheds + hangar */
      '<g transform="translate(0 -34)"><rect x="150" y="148" width="250" height="40" fill="#56607a"/>' +
      '<path d="M150 150v-30l20 -12v12l20 -12v12l20 -12v12l20 -12v12l20 -12v12l20 -12v12l20 -12v12l20 -12v12l20 -12v42z" fill="#56607a"/>' +
      '<path d="M250 150v-26q40 -30 80 0v26z" fill="#6a7590"/><rect x="262" y="132" width="56" height="18" fill="#434c62"/>' +
      '<rect x="356" y="96" width="8" height="54" fill="#6a7590"/><rect x="352" y="92" width="16" height="6" fill="#ff4a4a" class="is-flk"/></g>' +
      '<g class="is-plane"><path d="M60 80l46 -6l8 -6l-4 8l18 2l-18 2l-26 10l4 -8z" fill="#f2f2f2" stroke="#8a8f99" stroke-width="1"/><path d="M40 84h20" stroke="#fff" stroke-width="2" opacity=".5"/></g>' +
      /* brick wall + tag */
      '<rect x="0" y="122" width="250" height="138" fill="#8f3f2c"/>' + bricks +
      tag("ISLEY", 24, 196, 54, GOLD, -7) + tag("3+3", 160, 236, 26, TEAL, -4) +
      '<g class="is-sp"><circle cx="210" cy="190" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="is-sp is-sp2"><circle cx="218" cy="194" r="2.5" fill="' + GOLD + '" opacity=".6"/></g>' +
      /* sidewalk */
      '<rect x="0" y="236" width="400" height="24" fill="#9c978d"/><rect x="250" y="150" width="150" height="86" fill="#3b3e44"/><path d="M250 196h150" stroke="#f2c200" stroke-width="2" stroke-dasharray="14 10"/>' +
      /* sign pole + green signs */
      '<rect x="296" y="120" width="5" height="116" fill="#5a5a5a"/>' +
      '<rect x="252" y="112" width="96" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="300" y="125" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">WAYNE AV</text>' +
      '<rect x="262" y="134" width="76" height="18" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1.5"/><text x="300" y="147" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">LINDY AV</text>',
      sky("iss5", "#0f1a3a", "#d9825b"));
  }

  window.SCENES = { isstation: isstation, ischurch: ischurch, ismural: ismural, ismusichall: ismusichall, iscorner: iscorner };
})();
