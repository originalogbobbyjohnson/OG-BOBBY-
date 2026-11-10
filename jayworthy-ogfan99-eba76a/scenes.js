/* jayworthy scenes (Regions tab: Los Angeles + SoCal; Westside Compton, "Westside off Rosecrans"; raised in Vancouver). CSS classes prefixed jw- (the page's own anim-train is kept).
   1 Metro Local 125 stop on W Rosecrans Ave at N Wilmington Ave, Westside Compton: the orange-red 125 pulling in at the shelter, palms, golden hour.
   2 The Gastown Steam Clock, Water St, Vancouver (the city he grew up in; "Tdot, Vancouver, NY, MIA", Aktive): the copper-and-glass clock tower puffing steam on the cobblestones.
   3 Pacific Coast Highway at sunset (his Harry Fraud record "Pacific Coast Highway"; "PCH to the hood"): a candy ragtop cruising past palms, the surf rolling in.
   4 Hotel Bel-Air on Stone Canyon Rd (his and Larry June's "Hotel Bel-Air"): the pink stucco mission walls, the little bridge, the swans gliding on Swan Lake.
   5 W 142nd St and S Wilmington Ave ("142nd Street on the border", Untouchable): green signs, JAY WORTHY tagged, the 105/110 stack interchange behind with a 105 WEST sign ("105 West").
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jwflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.jw-flk{animation:jwflick 2.6s infinite}' +
    '@keyframes jwglow{0%,100%{opacity:.45}50%{opacity:1}}.jw-glow{animation:jwglow 2.2s ease-in-out infinite}.jw-g2{animation-delay:-1.1s}' +
    '@keyframes jwcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.jw-car{animation:jwcar 7s linear infinite}.jw-car2{animation-delay:-3.5s}' +
    '@keyframes jwcarL{from{transform:translateX(520px)}to{transform:translateX(-120px)}}.jw-carL{animation:jwcarL 8s linear infinite}.jw-carL2{animation-delay:-4s}' +
    '@keyframes jwsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.jw-sway{transform-box:fill-box;transform-origin:50% 100%;animation:jwsway 3.4s ease-in-out infinite}' +
    '@keyframes jwsteam{0%{transform:translate(0,0) scale(.6);opacity:.9}100%{transform:translate(10px,-60px) scale(1.6);opacity:0}}.jw-st{transform-box:fill-box;transform-origin:50% 50%;animation:jwsteam 2.6s ease-out infinite}.jw-st2{animation-delay:-.9s}.jw-st3{animation-delay:-1.7s}' +
    '@keyframes jwhand{from{transform:rotate(0)}to{transform:rotate(360deg)}}.jw-min{transform-box:view-box;transform-origin:200px 98px;animation:jwhand 8s linear infinite}' +
    '@keyframes jwwave{from{transform:translateX(0)}to{transform:translateX(-60px)}}.jw-wave{animation:jwwave 3s linear infinite}' +
    '@keyframes jwswan{0%,100%{transform:translateX(0)}50%{transform:translateX(40px)}}.jw-swan{animation:jwswan 9s ease-in-out infinite}.jw-swan2{animation-delay:-4.5s}' +
    '@keyframes jwbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.jw-bob{animation:jwbob 1.6s ease-in-out infinite}' +
    '@keyframes jwhop{0%,55%,100%{transform:rotate(0)}65%{transform:rotate(-6deg)}75%{transform:rotate(0)}85%{transform:rotate(-3deg)}}.jw-hop{transform-box:fill-box;transform-origin:85% 100%;animation:jwhop 2.6s ease-in-out infinite}' +
    '@keyframes jwspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(-14px,-22px);opacity:0}}.jw-sp{animation:jwspray 1.4s ease-out infinite}.jw-sp2{animation-delay:-.5s}.jw-sp3{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g class="jw-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3a2c20" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  /* wire wheel (gold Daytons) */
  const wire = (cx, cy, r) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#111"/><circle cx="' + cx + '" cy="' + cy + '" r="' + (r - 2.5) + '" fill="#d9b24a"/>' +
    [0, 30, 60, 90, 120, 150].map(a => '<path d="M' + (cx - (r - 3) * Math.cos(a * Math.PI / 180)).toFixed(1) + ' ' + (cy - (r - 3) * Math.sin(a * Math.PI / 180)).toFixed(1) + 'L' + (cx + (r - 3) * Math.cos(a * Math.PI / 180)).toFixed(1) + ' ' + (cy + (r - 3) * Math.sin(a * Math.PI / 180)).toFixed(1) + '" stroke="#8a6a1a" stroke-width="1"/>').join("") +
    '<circle cx="' + cx + '" cy="' + cy + '" r="2" fill="#fff6c2"/>';
  /* long low '64-style ragtop on wire wheels */
  const lowrider = (x, y, body, top) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M0 18q2 -8 14 -9l18 -2l10 -9h34l12 9l22 2q10 1 10 9v6h-120z" fill="' + body + '"/>' +
    (top ? '<path d="M44 7l8 -8h30l8 8z" fill="' + top + '"/>' : '<path d="M46 7l6 -6M82 1l8 6" stroke="#ddd" stroke-width="2"/>') +
    '<path d="M2 17h116" stroke="#fff" stroke-width="1" opacity=".6"/><rect x="114" y="14" width="6" height="4" fill="#ffe07a"/><rect x="0" y="14" width="4" height="4" fill="#e63b2e"/>' +
    wire(24, 26, 8) + wire(98, 26, 8) + '</g>';
  const BUS = "#e8572a", GOLD = "#f2b43c", TEAL = "#5fc4c9", INK = "#0e0b14";

  /* 1. Metro Local 125 stop, W Rosecrans Ave at N Wilmington Ave */
  function jwstop() {
    let win = ""; for (let x = 70; x < 330; x += 34) win += '<rect x="' + x + '" y="126" width="26" height="22" rx="2" fill="#20303c"/>';
    const bus = '<g class="anim-train"><rect x="40" y="114" width="320" height="66" rx="8" fill="' + BUS + '" stroke="#7a2a10" stroke-width="2"/>' +
      '<rect x="40" y="114" width="320" height="8" rx="4" fill="#f2f2f2"/>' + win +
      '<rect x="44" y="126" width="22" height="38" rx="2" fill="#20303c"/><rect x="336" y="124" width="22" height="30" rx="3" fill="#20303c"/>' +
      '<rect x="300" y="116" width="56" height="9" rx="2" fill="#111"/><text x="328" y="123.5" text-anchor="middle" ' + font + ' font-size="5.6" fill="#ffb23a" class="jw-flk">125 ROSECRANS</text>' +
      '<rect x="40" y="160" width="320" height="4" fill="#fff" opacity=".7"/><circle cx="354" cy="170" r="4" fill="#fff6c2"/>' +
      '<circle cx="96" cy="182" r="12" fill="#111"/><circle cx="96" cy="182" r="5" fill="#bbb"/><circle cx="306" cy="182" r="12" fill="#111"/><circle cx="306" cy="182" r="5" fill="#bbb"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jws1)"/>' +
      '<circle cx="74" cy="54" r="24" fill="#ffd27a" opacity=".9"/>' +
      /* low stucco storefronts + palms behind */
      '<rect x="0" y="86" width="140" height="44" fill="#d8b58e"/><rect x="150" y="96" width="110" height="34" fill="#c9a07a"/><rect x="270" y="90" width="130" height="40" fill="#e1c6a2"/>' +
      '<rect x="12" y="98" width="40" height="18" fill="#6a5040"/><rect x="290" y="102" width="50" height="16" fill="#6a5040"/>' +
      palm(120, 100, 70) + palm(250, 100, 82, "#3d6b40") + palm(380, 100, 64) +
      /* wires */
      '<path d="M0 40q200 22 400 0" stroke="#2a2a2a" stroke-width="1" fill="none"/>' +
      /* street */
      '<rect x="0" y="130" width="400" height="66" fill="#5a5c62"/>' + bus +
      '<rect x="0" y="194" width="400" height="10" fill="#cfc8ba"/><rect x="0" y="204" width="400" height="56" fill="#b9b2a4"/>' +
      /* shelter + stop sign */
      '<rect x="18" y="150" width="4" height="56" fill="#444"/><rect x="18" y="150" width="70" height="5" fill="#444"/><rect x="84" y="150" width="4" height="56" fill="#444"/><rect x="22" y="156" width="62" height="38" fill="#cfe6f2" opacity=".35"/>' +
      '<rect x="360" y="196" width="4" height="60" fill="#6b6f76"/><rect x="332" y="200" width="60" height="30" rx="3" fill="#111"/>' +
      '<rect x="336" y="204" width="22" height="14" rx="2" fill="' + BUS + '"/><text x="347" y="214.5" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">125</text>' +
      '<text x="374" y="215" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">Metro</text><text x="362" y="226" text-anchor="middle" ' + font + ' font-size="5.5" fill="#fff">LOCAL</text>' +
      /* black station-style name sign */
      '<rect x="96" y="212" width="208" height="34" rx="3" fill="#111"/><text x="200" y="230" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">Rosecrans / Wilmington</text>' +
      '<rect x="160" y="236" width="26" height="10" rx="2" fill="' + BUS + '"/><text x="173" y="244" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">125</text>' +
      '<text x="216" y="244" text-anchor="middle" ' + font + ' font-size="7" fill="#ccc">COMPTON</text>',
      sky("jws1", "#f39a5a", "#fbe3b6"));
  }

  /* 2. Gastown Steam Clock, Vancouver */
  function jwclock() {
    const bricks = Array.from({ length: 8 }, (_, r) => Array.from({ length: 6 }, (_, c) => '<rect x="' + (c * 70 - (r % 2) * 35) + '" y="' + (40 + r * 18) + '" width="66" height="15" fill="#8a4a32" opacity=".55"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jws2)"/>' +
      /* North Shore mountains */
      '<path d="M0 70l50 -34l40 20l50 -40l60 34l50 -24l60 30l40 -16l50 22v20h-400z" fill="#6f8aa6"/><path d="M140 16l14 10l-10 -2zM248 28l12 8l-8 -1z" fill="#f4f7fa"/>' +
      /* brick warehouses of Gastown */
      '<rect x="0" y="40" width="130" height="160" fill="#a3573a"/><rect x="270" y="50" width="130" height="150" fill="#9a4f36"/>' + bricks +
      [10, 50, 90, 286, 326, 366].map(x => '<rect x="' + x + '" y="62" width="22" height="30" fill="#2b3340"/><rect x="' + x + '" y="112" width="22" height="30" fill="#ffd98a" class="jw-glow"/>').join("") +
      /* cobblestones */
      '<rect x="0" y="200" width="400" height="60" fill="#6c625a"/>' +
      Array.from({ length: 40 }, (_, i) => '<ellipse cx="' + ((i % 10) * 42 + (Math.floor(i / 10) % 2) * 20) + '" cy="' + (210 + Math.floor(i / 10) * 13) + '" rx="17" ry="5" fill="#80766c"/>').join("") +
      /* lamp posts */
      [110, 290].map(x => '<rect x="' + x + '" y="120" width="4" height="82" fill="#1f2a22"/><circle cx="' + (x + 2) + '" cy="116" r="7" fill="#ffe7a0" class="jw-glow jw-g2"/>').join("") +
      /* the steam clock: plinth, glass works, clock faces, roof, whistles */
      '<rect x="168" y="186" width="64" height="16" fill="#3a2a1e"/><rect x="174" y="132" width="52" height="56" fill="#5a3a20" stroke="#c9873a" stroke-width="2"/>' +
      '<rect x="182" y="140" width="36" height="40" fill="#cfe6f2" opacity=".45"/><path d="M188 146h24M188 158h24M188 170h24" stroke="#c9873a" stroke-width="2"/>' +
      '<rect x="172" y="76" width="56" height="58" fill="#6b4422" stroke="#c9873a" stroke-width="2"/>' +
      '<circle cx="200" cy="98" r="19" fill="#f6efd8" stroke="#c9873a" stroke-width="3"/>' +
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => { const a = i * Math.PI / 6; return '<rect x="' + (199 + 15 * Math.sin(a)).toFixed(1) + '" y="' + (97 - 15 * Math.cos(a)).toFixed(1) + '" width="2" height="2" fill="#3a2a1e"/>'; }).join("") +
      '<path d="M200 98l-6 -8" stroke="#3a2a1e" stroke-width="2.5" stroke-linecap="round"/><g class="jw-min"><path d="M200 98v-14" stroke="#3a2a1e" stroke-width="1.8" stroke-linecap="round"/></g>' +
      '<path d="M166 76l34 -22l34 22z" fill="#3f6b4a" stroke="#c9873a" stroke-width="2"/>' +
      [184, 200, 216].map(x => '<rect x="' + (x - 3) + '" y="40" width="6" height="18" fill="#c9873a"/>').join("") +
      ['jw-st', 'jw-st jw-st2', 'jw-st jw-st3'].map((c, i) => '<circle class="' + c + '" cx="' + (184 + i * 16) + '" cy="34" r="8" fill="#ffffff" opacity=".85"/>').join("") +
      /* little sign */
      '<rect x="138" y="232" width="124" height="20" rx="2" fill="#111"/><text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">GASTOWN · VANCOUVER</text>',
      sky("jws2", "#8fb0cc", "#dfe8ef"));
  }

  /* 3. Pacific Coast Highway at sunset */
  function jwpch() {
    const surf = Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 60) + ' 150q15 -8 30 0t30 0" stroke="#e8f6f8" stroke-width="2" fill="none"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jws3)"/>' +
      '<circle cx="290" cy="128" r="34" fill="#ffcf5a"/><rect x="0" y="130" width="400" height="54" fill="#2f7c96"/>' +
      '<path d="M220 132h140M240 140h100M256 148h70" stroke="#ffd98a" stroke-width="3" opacity=".7"/>' +
      '<g class="jw-wave">' + surf + '</g>' +
      /* cliffs and palms */
      '<path d="M0 118l40 -20l40 10l30 20v12h-110z" fill="#8a6a4a"/>' + palm(50, 132, 72) + palm(380, 176, 96, "#3d6b40") + palm(340, 176, 70) +
      /* sand + road */
      '<rect x="0" y="176" width="400" height="12" fill="#e9cf9c"/><rect x="0" y="188" width="400" height="52" fill="#46484e"/>' +
      '<path d="M0 214h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="20 12"/><rect x="0" y="240" width="400" height="20" fill="#d9c9a4"/>' +
      /* candy ragtop cruising with the top down */
      '<g class="jw-car"><g class="jw-bob">' + lowrider(0, 186, "#b3245a") + '</g></g>' +
      '<g class="jw-carL jw-carL2">' + lowrider(0, 160, "#2f8ac4", "#f3efe6") + '</g>' +
      /* PCH route sign: California state route shield style (green spade) */
      '<rect x="22" y="196" width="4" height="44" fill="#6b6f76"/><path d="M6 160h36v14q0 14 -18 22q-18 -8 -18 -22z" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="24" y="182" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">1</text><rect x="2" y="146" width="44" height="12" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1"/><text x="24" y="155" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">PCH</text>',
      sky("jws3", "#e1576e", "#fbb46a"));
  }

  /* 4. Hotel Bel-Air, Swan Lake */
  function jwbelair() {
    return svg(
      '<rect width="400" height="260" fill="url(#jws4)"/>' +
      /* canyon greenery */
      '<path d="M0 110q60 -50 120 -20t140 -30t140 20v60h-400z" fill="#3f6e44"/>' +
      [30, 90, 330, 370].map((x, i) => '<path d="M' + x + ' 130l-10 -60l10 -6l10 6z" fill="#2c5233" class="jw-sway" style="animation-delay:-' + i * 0.7 + 's"/>').join("") +
      /* pink mission-style hotel */
      '<rect x="110" y="70" width="180" height="70" fill="#f2b8b8" stroke="#c98a8a" stroke-width="2"/><path d="M104 72h192l-14 -12h-164z" fill="#b5523a"/>' +
      '<rect x="186" y="44" width="28" height="30" fill="#f2b8b8" stroke="#c98a8a" stroke-width="2"/><path d="M182 46l18 -14l18 14z" fill="#b5523a"/><circle cx="200" cy="58" r="5" fill="#2f4a3a"/>' +
      [124, 156, 228, 260].map(x => '<path d="M' + x + ' 128v-24q8 -12 16 0v24z" fill="#2f4a3a"/>').join("") +
      '<path d="M182 140v-30q18 -20 36 0v30z" fill="#ffe0a0" class="jw-glow"/>' +
      /* bougainvillea */
      [118, 150, 248, 280].map(x => '<circle cx="' + x + '" cy="96" r="7" fill="#d2367a"/><circle cx="' + (x + 6) + '" cy="90" r="5" fill="#e65a96"/>').join("") +
      /* lake */
      '<rect x="0" y="150" width="400" height="110" fill="#3f7a8a"/><path d="M0 150h400" stroke="#cfe6e8" stroke-width="2"/>' +
      '<path d="M40 180h60M150 200h80M260 176h90M300 220h70M60 230h90" stroke="#cfe6e8" stroke-width="1.5" opacity=".6"/>' +
      /* little arched bridge */
      '<path d="M60 152q60 -40 120 0" stroke="#f2e6d4" stroke-width="8" fill="none"/><path d="M60 150q60 -40 120 0" stroke="#c9b89c" stroke-width="2" fill="none"/>' +
      [76, 96, 120, 144, 164].map(x => '<rect x="' + x + '" y="' + (x < 120 ? 136 - (x - 60) * 0.5 : 136 - (180 - x) * 0.5) + '" width="2" height="12" fill="#c9b89c"/>').join("") +
      /* swans */
      ['jw-swan', 'jw-swan jw-swan2'].map((c, i) => '<g class="' + c + '"><g transform="translate(' + (230 + i * -120) + ' ' + (196 + i * 18) + ')"><ellipse cx="0" cy="0" rx="18" ry="8" fill="#fff"/><path d="M12 -2q8 -4 6 -18q-1 -6 4 -6" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M22 -26l6 2l-6 2z" fill="#f08a24"/><path d="M-18 0l-6 -6v8z" fill="#fff"/></g></g>').join(""),
      sky("jws4", "#a8d4ee", "#eef6f2"));
  }

  /* 5. W 142nd St and S Wilmington Ave */
  function jwcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jws5)"/>' +
      /* the 105/110 stack behind */
      '<path d="M0 96q120 -40 240 -20t160 -10" stroke="#b9b3a8" stroke-width="10" fill="none"/><path d="M0 70q160 40 400 0" stroke="#a59f94" stroke-width="9" fill="none"/>' +
      '<path d="M60 40q120 60 300 30" stroke="#c8c2b6" stroke-width="8" fill="none"/>' +
      [80, 160, 240, 320].map(x => '<rect x="' + x + '" y="72" width="8" height="58" fill="#9a948a"/>').join("") +
      '<g class="jw-car"><rect x="0" y="62" width="22" height="8" rx="3" fill="#e63b2e"/></g><g class="jw-carL"><rect x="0" y="86" width="22" height="8" rx="3" fill="#f3efe6"/></g>' +
      /* 105 WEST overhead sign */
      '<rect x="270" y="20" width="96" height="36" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><path d="M280 26h22v8q0 10 -11 14q-11 -4 -11 -14z" fill="#1f4fa3" stroke="#fff" stroke-width="1.5"/><rect x="280" y="26" width="22" height="5" fill="#c8102e"/>' +
      '<text x="291" y="43" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">105</text><text x="336" y="42" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">WEST</text>' +
      '<rect x="296" y="56" width="4" height="74" fill="#6b6f76"/><rect x="340" y="56" width="4" height="74" fill="#6b6f76"/>' +
      palm(20, 130, 80) + palm(386, 130, 70, "#3d6b40") +
      /* the wall */
      '<rect x="0" y="126" width="400" height="88" fill="#d9c6a8"/>' +
      Array.from({ length: 4 }, (_, r) => '<path d="M0 ' + (148 + r * 20) + 'h400" stroke="#c4b090" stroke-width="1"/>').join("") +
      tag("JAY WORTHY", 40, 182, 40, GOLD, -5) + tag("P WORTHY", 230, 204, 22, TEAL, -4) + tag("LNDN DRGS", 40, 206, 16, "#e0603a", -3) +
      ['jw-sp', 'jw-sp jw-sp2', 'jw-sp jw-sp3'].map(c => '<circle class="' + c + '" cx="226" cy="186" r="3" fill="' + TEAL + '"/>').join("") +
      '<rect x="226" y="184" width="8" height="18" rx="2" fill="#333" transform="rotate(30 230 193)"/>' +
      /* sidewalk + street */
      '<rect x="0" y="214" width="400" height="10" fill="#cfc8ba"/><rect x="0" y="224" width="400" height="36" fill="#55575d"/>' +
      '<g class="jw-car"><g class="jw-hop">' + lowrider(0, 222, "#5a2a8a") + '</g></g>' +
      /* sign post with green signs */
      '<rect x="340" y="110" width="5" height="114" fill="#6b6f76"/>' + sign(290, 96, 104, "W 142nd St", 12) + sign(284, 120, 112, "S Wilmington Av", 11),
      sky("jws5", "#f6a65a", "#fde3b8"));
  }

  window.SCENES = { jwstop, jwclock, jwpch, jwbelair, jwcorner };
})();
