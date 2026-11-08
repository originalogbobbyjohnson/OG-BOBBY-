/* blacyoungsta scenes (Regions tab: Memphis + Tennessee; McMillan St, South Memphis). CSS classes prefixed bly- (the page's own anim-train is kept).
   1 MATA Route 4 Walker bus pulling up on S Lauderdale St at McMillan St.
   2 McMillan St: shotgun houses and the corner grocery (his granddad got him his first job at a grocery, paid in food).
   3 Lincoln Park, the park by his block: a pickup game on the court.
   4 Mason Temple (Church of God in Christ, Mason St): "Church on Sunday", the Sunday crowd heading in.
   5 McMillan St and S Lauderdale St: green signs, BLAC YOUNGSTA tagged, the Hernando de Soto "M" bridge lit up behind.
   400 x 260 SVGs. No logos, no faces. No 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes blyglow{0%,100%{opacity:.35}50%{opacity:1}}.bly-gl{animation:blyglow 2.4s ease-in-out infinite}.bly-gl2{animation-delay:-1.2s}' +
    '@keyframes blycar{from{transform:translateX(-200px)}to{transform:translateX(440px)}}.bly-car{animation:blycar 7s linear infinite;animation-delay:-3s}' +
    '@keyframes blybird{0%{transform:translate(0,0)}100%{transform:translate(-460px,-24px)}}.bly-bird{animation:blybird 10s linear infinite}.bly-bird2{animation-delay:-5s}' +
    '@keyframes blyball{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}.bly-ball{animation:blyball 1.1s ease-in-out infinite}' +
    '@keyframes blysway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.bly-net{transform-box:fill-box;transform-origin:50% 0;animation:blysway 1.1s ease-in-out infinite}' +
    '@keyframes blywalk{from{transform:translateX(0)}to{transform:translateX(-60px)}}.bly-walk{animation:blywalk 5s linear infinite alternate}.bly-walk2{animation-delay:-2.5s}' +
    '@keyframes blyspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bly-sp{animation:blyspray 1.4s ease-out infinite}.bly-sp2{animation-delay:.45s}' +
    '@keyframes blytw{0%,100%{opacity:.3}50%{opacity:1}}.bly-tw{animation:blytw 1.8s ease-in-out infinite}.bly-tw2{animation-delay:-.9s}' +
    '@keyframes blybulb{0%,100%{fill:#ffd36a}33%{fill:#ff6a3d}66%{fill:#8fd3ff}}.bly-bulb{animation:blybulb 3s linear infinite}.bly-bulb2{animation-delay:-1s}.bly-bulb3{animation-delay:-2s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="bly-tw' + (i % 2 ? ' bly-tw2' : '') + '" cx="' + ((i * 73) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.4) + '" fill="#fff"/>').join("");
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const bird = (x, y, cls) => '<path class="' + cls + '" d="M' + x + ' ' + y + 'q5 -5 10 0q5 -5 10 0" stroke="#1d1d22" stroke-width="1.6" fill="none"/>';
  const GOLD = "#f2c14e", CREAM = "#efe6cf", EMBER = "#d9572b", MATA = "#0a4f9e", LIME = "#7cc242";

  /* 1. MATA Route 4 Walker bus on S Lauderdale St at McMillan St */
  function blystop() {
    const bus = '<g class="anim-train"><rect x="30" y="112" width="300" height="82" rx="10" fill="#f4f4f2" stroke="#b9bcc2" stroke-width="2"/>' +
      '<rect x="30" y="170" width="300" height="10" fill="' + MATA + '"/><path d="M30 180h300v6H30z" fill="' + LIME + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (46 + i * 40) + '" y="124" width="32" height="34" rx="3" fill="#1c2a3a"/>').join("") +
      '<rect x="292" y="124" width="30" height="58" rx="3" fill="#24384f"/><path d="M307 124v58" stroke="#b9bcc2" stroke-width="1.5"/>' +
      '<rect x="44" y="114" width="100" height="9" rx="2" fill="#111"/><text x="94" y="121.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">4 WALKER</text>' +
      '<circle cx="80" cy="196" r="12" fill="#1a1a1a"/><circle cx="80" cy="196" r="5" fill="#8a8a8a"/><circle cx="272" cy="196" r="12" fill="#1a1a1a"/><circle cx="272" cy="196" r="5" fill="#8a8a8a"/>' +
      '<circle cx="326" cy="182" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#blys1)"/>' + stars(14) +
      '<rect x="0" y="66" width="70" height="60" fill="#3a2f2a"/><rect x="74" y="78" width="90" height="48" fill="#4a3a30"/><rect x="168" y="70" width="60" height="56" fill="#33302e"/><rect x="232" y="84" width="96" height="42" fill="#47392f"/><rect x="332" y="74" width="68" height="52" fill="#3a2f2a"/>' +
      [[12, 80], [40, 96], [96, 92], [130, 104], [186, 84], [252, 98], [292, 98], [350, 88], [374, 104]].map((p, i) => '<rect x="' + p[0] + '" y="' + p[1] + '" width="12" height="10" fill="#ffd98a" class="' + (i % 2 ? 'bly-gl' : 'bly-gl bly-gl2') + '"/>').join("") +
      '<rect x="0" y="126" width="400" height="74" fill="#2f3034"/><path d="M0 162h400" stroke="#d8c25a" stroke-width="2" stroke-dasharray="18 14"/>' + bus +
      '<rect x="0" y="200" width="400" height="60" fill="#8a8781"/><rect x="0" y="200" width="400" height="5" fill="#bdb8ae"/>' +
      '<rect x="356" y="132" width="5" height="96" fill="#5a5d63"/><rect x="340" y="132" width="38" height="44" rx="3" fill="' + MATA + '" stroke="#fff" stroke-width="1.5"/><text x="359" y="146" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">MATA</text><text x="359" y="156" text-anchor="middle" ' + font + ' font-size="6" fill="#fff">BUS STOP</text>' + badge(348, 167, "4", LIME) +
      '<rect x="44" y="6" width="312" height="24" rx="3" fill="#111"/><text x="58" y="23" ' + font + ' font-size="12.5" fill="#fff">S Lauderdale St &amp; McMillan St</text>' + badge(302, 18, "4", MATA) +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2724">ROUTE 4 WALKER  ·  SOUTH MEMPHIS</text>',
      sky("blys1", "#0b1626", "#4a4e66"));
  }

  /* 2. McMillan St: shotgun houses and the corner grocery */
  function blymcmillan() {
    const house = (x, c, lit) => '<path d="M' + x + ' 160v-56l32 -24l32 24v56z" fill="' + c + '"/><path d="M' + (x - 4) + ' 106l36 -28l36 28" stroke="#3a2a22" stroke-width="5" fill="none"/>' +
      '<rect x="' + (x + 8) + '" y="114" width="18" height="22" fill="' + (lit ? '#ffd98a' : '#26323e') + '" class="' + (lit ? 'bly-gl' : '') + '"/><rect x="' + (x + 38) + '" y="114" width="16" height="46" fill="#4a3324"/>' +
      '<rect x="' + (x - 6) + '" y="150" width="76" height="5" fill="#d8d2c4"/><path d="M' + (x - 2) + ' 155v8M' + (x + 62) + ' 155v8" stroke="#d8d2c4" stroke-width="3"/>';
    const store = '<rect x="236" y="84" width="150" height="82" fill="#b5523a"/><rect x="236" y="78" width="150" height="10" fill="#8a3a28"/>' +
      '<rect x="244" y="92" width="134" height="20" fill="' + CREAM + '"/><text x="311" y="107" text-anchor="middle" ' + font + ' font-size="11" fill="#7a2a1a">CORNER GROCERY</text>' +
      '<rect x="248" y="118" width="54" height="40" fill="#ffd98a" class="bly-gl"/><rect x="318" y="118" width="26" height="48" fill="#3a2418"/><rect x="352" y="118" width="28" height="40" fill="#ffd98a" class="bly-gl bly-gl2"/>' +
      '<path d="M252 130h46M252 142h46" stroke="#b0703a" stroke-width="2"/><rect x="256" y="122" width="8" height="8" fill="#e2554a"/><rect x="268" y="122" width="8" height="8" fill="#5aa84a"/><rect x="280" y="122" width="8" height="8" fill="#f2c14e"/><rect x="258" y="134" width="10" height="8" fill="#e8e2d0"/><rect x="274" y="134" width="10" height="8" fill="#c96a3a"/>' +
      '<text x="364" y="152" text-anchor="middle" ' + font + ' font-size="6" fill="#7a2a1a">OPEN</text><path d="M236 166h150" stroke="#5a2a1a" stroke-width="3"/>';
    const car = '<g class="bly-car"><path d="M10 214l14 -18h64l22 18h36v18H6v-18z" fill="#6a1f1f"/><path d="M30 198h26v14H22zM60 198h26l14 14H60z" fill="#3a4a5c"/>' +
      '<circle cx="38" cy="234" r="10" fill="#111"/><circle cx="38" cy="234" r="4" fill="#888"/><circle cx="118" cy="234" r="10" fill="#111"/><circle cx="118" cy="234" r="4" fill="#888"/><circle cx="144" cy="218" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#blys2)"/><circle cx="80" cy="40" r="18" fill="#ffd28a" opacity=".9"/>' + bird(170, 40, 'bly-bird') + bird(240, 28, 'bly-bird bly-bird2') +
      '<path d="M0 34q120 12 240 4t160 8" stroke="#333" stroke-width="1.2" fill="none"/>' +
      house(10, "#c3cbd2", false) + house(86, "#d9c9a8", true) + house(162, "#a8b89a", false) + store +
      '<rect x="0" y="166" width="400" height="22" fill="#bdb8ae"/><rect x="0" y="188" width="400" height="72" fill="#3e3f45"/><path d="M0 250h400" stroke="#d8c25a" stroke-width="2" stroke-dasharray="18 14"/>' + car +
      '<rect x="214" y="116" width="4" height="70" fill="#555"/>' + sign(170, 104, 92, "McMillan St"),
      sky("blys2", "#f2a65a", "#ffe2b0"));
  }

  /* 3. Lincoln Park courts: a pickup game */
  function blypark() {
    const tree = (x, s) => '<rect x="' + (x - 3) + '" y="' + (120 - 30 * s) + '" width="6" height="' + (40 * s) + '" fill="#5a3a24"/><circle cx="' + x + '" cy="' + (110 - 40 * s) + '" r="' + (26 * s) + '" fill="#2f6b3a"/><circle cx="' + (x - 14 * s) + '" cy="' + (118 - 34 * s) + '" r="' + (18 * s) + '" fill="#3c8048"/>';
    const player = (x, c, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="150" r="7" fill="#5a3a28"/><rect x="' + (x - 7) + '" y="158" width="14" height="22" rx="3" fill="' + c + '"/><path d="M' + (x - 5) + ' 180l-4 22M' + (x + 5) + ' 180l4 22" stroke="#5a3a28" stroke-width="5" stroke-linecap="round"/><path d="M' + (x - 7) + ' 162l-10 -10M' + (x + 7) + ' 162l10 -10" stroke="#5a3a28" stroke-width="4" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#blys3)"/>' + bird(300, 30, 'bly-bird') +
      tree(30, 1.2) + tree(110, .9) + tree(320, 1.1) + tree(380, .8) +
      '<rect x="0" y="128" width="400" height="132" fill="#3d7a4a"/><rect x="40" y="134" width="320" height="110" fill="#4f6f8f"/><rect x="40" y="134" width="320" height="110" fill="none" stroke="#f4f1e8" stroke-width="2.5"/>' +
      '<path d="M200 134v110" stroke="#f4f1e8" stroke-width="2"/><circle cx="200" cy="189" r="18" fill="none" stroke="#f4f1e8" stroke-width="2"/><path d="M360 160h-50v58h50" fill="none" stroke="#f4f1e8" stroke-width="2"/><path d="M310 168a22 22 0 0 0 0 42" fill="none" stroke="#f4f1e8" stroke-width="2"/>' +
      '<rect x="366" y="96" width="6" height="110" fill="#888"/><rect x="340" y="96" width="32" height="24" fill="#f4f1e8" stroke="#555" stroke-width="1.5"/><rect x="350" y="104" width="12" height="9" fill="none" stroke="#d9572b" stroke-width="1.5"/>' +
      '<ellipse cx="346" cy="122" rx="9" ry="2.5" fill="none" stroke="#d9572b" stroke-width="2"/><path class="bly-net" d="M338 122l3 12h10l3 -12M342 122l2 12M350 122l-2 12" stroke="#f4f1e8" stroke-width="1" fill="none"/>' +
      player(262, GOLD, 'bly-walk') + player(220, "#1c1c22", 'bly-walk bly-walk2') + player(150, EMBER, '') +
      '<circle class="bly-ball" cx="274" cy="140" r="6" fill="#e07a2a" stroke="#6a2a0a" stroke-width="1"/>' +
      '<rect x="120" y="14" width="160" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="30" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">LINCOLN PARK</text>',
      sky("blys3", "#6fb0e0", "#cfe8f6"));
  }

  /* 4. Mason Temple on Mason St: Sunday morning */
  function blymason() {
    const win = (x, y, w, h) => '<path d="M' + x + ' ' + (y + h) + 'v-' + (h - w / 2) + 'a' + (w / 2) + ' ' + (w / 2) + ' 0 0 1 ' + w + ' 0v' + (h - w / 2) + 'z" fill="#2b3550" stroke="' + CREAM + '" stroke-width="2"/><path d="M' + (x + w / 2) + ' ' + (y + 4) + 'v' + (h - 4) + 'M' + x + ' ' + (y + h * .6) + 'h' + w + '" stroke="' + CREAM + '" stroke-width="1"/>';
    const people = Array.from({ length: 7 }, (_, i) => { const x = 60 + i * 44, c = ["#1c1c22", "#5b2a86", "#f4f1e8", "#7a1f2a", "#1f3a6a", "#e2c25a", "#2a5a3a"][i]; return '<g class="bly-walk' + (i % 2 ? ' bly-walk2' : '') + '"><circle cx="' + x + '" cy="206" r="5" fill="#5a3a28"/><path d="M' + (x - 7) + ' 236l3 -26h8l3 26z" fill="' + c + '"/>' + (i % 3 === 0 ? '<path d="M' + (x - 8) + ' 202h16l-3 -5h-10z" fill="' + c + '"/>' : '') + '</g>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#blys4)"/><circle cx="340" cy="40" r="22" fill="#fff3c4" opacity=".9"/>' + bird(80, 30, 'bly-bird') +
      '<rect x="30" y="74" width="340" height="122" fill="#9a4b34"/><rect x="30" y="74" width="340" height="8" fill="' + CREAM + '"/>' +
      '<path d="M120 74v-26h160v26z" fill="#9a4b34"/><path d="M116 50h168" stroke="' + CREAM + '" stroke-width="6"/><rect x="192" y="18" width="16" height="32" fill="' + CREAM + '"/><rect x="186" y="26" width="28" height="8" fill="' + CREAM + '"/>' +
      '<text x="200" y="68" text-anchor="middle" ' + font + ' font-size="13" fill="' + CREAM + '" letter-spacing="2">MASON TEMPLE</text>' +
      win(54, 96, 26, 54) + win(92, 96, 26, 54) + win(282, 96, 26, 54) + win(320, 96, 26, 54) +
      '<rect x="140" y="90" width="120" height="106" fill="#c9b48e"/>' + win(152, 100, 28, 58) + win(186, 100, 28, 58) + win(220, 100, 28, 58) +
      '<rect x="156" y="166" width="22" height="30" fill="#4a2a1a"/><rect x="189" y="166" width="22" height="30" fill="#4a2a1a"/><rect x="222" y="166" width="22" height="30" fill="#4a2a1a"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#cfc8b8"/><path d="M130 196h140l10 12H120z" fill="#bdb6a6"/>' + people +
      '<rect x="296" y="210" width="80" height="34" rx="3" fill="#1f2f4a" stroke="' + GOLD + '" stroke-width="1.5"/><text x="336" y="224" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">CHURCH ON</text><text x="336" y="236" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">SUNDAY</text>',
      sky("blys4", "#8cc4ec", "#f6ead0"));
  }

  /* 5. McMillan St and S Lauderdale St: the corner, the M bridge lit behind */
  function blycorner() {
    const bulbs = Array.from({ length: 14 }, (_, i) => { const t = i / 13, x = 40 + t * 320, y = 74 - Math.sin(t * Math.PI) * 0 - (i % 2 ? 0 : 0); return '<circle class="bly-bulb' + (i % 3 === 1 ? ' bly-bulb2' : i % 3 === 2 ? ' bly-bulb3' : '') + '" cx="' + x + '" cy="' + (i % 2 ? 46 : 70) + '" r="2.6"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#blys5)"/>' + stars(18) +
      '<path d="M40 74q40 -48 80 0q40 -48 80 0q40 -48 80 0q40 -48 80 0" stroke="#7a8aa0" stroke-width="3" fill="none"/><path d="M30 76h340" stroke="#7a8aa0" stroke-width="4"/>' + bulbs +
      '<path d="M0 84h400v8H0z" fill="#25303f"/><rect x="0" y="92" width="400" height="10" fill="#1a2534"/>' +
      '<rect x="0" y="102" width="400" height="104" fill="#5c4a3e"/>' +
      Array.from({ length: 9 }, (_, r) => Array.from({ length: 16 }, (_, c) => '<rect x="' + (c * 26 + (r % 2 ? 13 : 0) - 6) + '" y="' + (104 + r * 11) + '" width="24" height="9" fill="#6a5446"/>').join("")).join("") +
      tag("BLAC YOUNGSTA", 140, 166, 26, GOLD, -5) + tag("HEAVY CAMP", 170, 196, 17, CREAM, 3) + tag("223", 330, 130, 20, EMBER, -8) +
      '<circle class="bly-sp" cx="352" cy="178" r="3" fill="' + GOLD + '"/><circle class="bly-sp bly-sp2" cx="360" cy="172" r="2.2" fill="' + GOLD + '"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#6f6c66"/><rect x="0" y="206" width="400" height="5" fill="#9c988f"/>' +
      '<rect x="64" y="122" width="5" height="120" fill="#4a4d52"/>' + sign(20, 112, 94, "McMillan St") + sign(30, 136, 104, "S Lauderdale St"),
      sky("blys5", "#081020", "#2a3550"));
  }

  window.SCENES = { blystop, blymcmillan, blypark, blymason, blycorner };
})();
