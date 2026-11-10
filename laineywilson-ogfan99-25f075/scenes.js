/* laineywilson scenes (Regions tab: New Orleans / Louisiana, Baskin / Franklin Parish LA). CSS classes prefixed lw- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lwglow{0%,100%{opacity:.45}50%{opacity:1}}.lw-glow{animation:lwglow 2.4s ease-in-out infinite}.lw-g2{animation-delay:-1.2s}' +
    '@keyframes lwcloud{0%{transform:translateX(0)}100%{transform:translateX(60px)}}.lw-cl{animation:lwcloud 14s ease-in-out infinite alternate}' +
    '@keyframes lwsway{0%,100%{transform:skewX(-4deg)}50%{transform:skewX(4deg)}}.lw-sw{transform-box:fill-box;transform-origin:50% 100%;animation:lwsway 2.8s ease-in-out infinite}.lw-sw2{animation-delay:-1.4s}' +
    '@keyframes lwdust{0%{opacity:0;transform:translate(0,0)}30%{opacity:.6}100%{opacity:0;transform:translate(40px,-14px)}}.lw-dust{animation:lwdust 2.4s linear infinite}.lw-d2{animation-delay:-1.2s}' +
    '@keyframes lwgraze{0%,100%{transform:rotate(0)}50%{transform:rotate(14deg)}}.lw-head{transform-box:fill-box;transform-origin:0 0;animation:lwgraze 3.6s ease-in-out infinite}' +
    '@keyframes lwspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.lw-wheel{transform-origin:300px 96px;animation:lwspin 16s linear infinite}' +
    '@keyframes lwcar{0%{transform:rotate(0)}100%{transform:rotate(-360deg)}}' +
    '@keyframes lwblink{0%,49%{opacity:1}50%,100%{opacity:.25}}.lw-bl{animation:lwblink 1.2s steps(1) infinite}.lw-bl2{animation-delay:-.6s}' +
    '@keyframes lwstar{0%,100%{opacity:.2}50%{opacity:1}}.lw-star{animation:lwstar 3s ease-in-out infinite}.lw-s2{animation-delay:-1s}.lw-s3{animation-delay:-2s}' +
    '@keyframes lwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lw-sp{animation:lwspray 1.4s ease-out infinite}.lw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const MUST = "#e9a23b", RUST = "#b5482e", TEAL = "#7bbfb2", CREAM = "#f4ead2";
  const laShield = (x, y, n) => '<rect x="' + x + '" y="' + y + '" width="44" height="32" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/><text x="' + (x + 22) + '" y="' + (y + 11) + '" text-anchor="middle" ' + font + ' font-size="6.5" fill="#000">LOUISIANA</text><text x="' + (x + 22) + '" y="' + (y + 27) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#000">' + n + '</text>';
  const bin = (x, base, w, h) => '<rect x="' + x + '" y="' + (base - h) + '" width="' + w + '" height="' + h + '" fill="#c9ccd0" stroke="#8b9096"/>' +
    Array.from({ length: Math.floor(h / 8) }, (_, i) => '<path d="M' + x + ' ' + (base - h + 8 + i * 8) + 'h' + w + '" stroke="#a9adb2" stroke-width="1"/>').join("") +
    '<path d="M' + (x - 2) + ' ' + (base - h) + 'l' + (w / 2 + 2) + ' -' + (w * 0.35) + 'l' + (w / 2 + 2) + ' ' + (w * 0.35) + 'z" fill="#b2b6bb"/>';

  /* 1. North out of Winnsboro on LA 15, the stretch signed Lainey Wilson Highway, her pickup rolling in, Delta fields flat to the sky */
  function lwhwy() {
    let rows = "";
    for (let i = 0; i < 12; i++) rows += '<path d="M' + (i * 40 - 30) + ' 172L' + (200 + (i - 6) * 8) + ' 136" stroke="#9a8a3a" stroke-width="2" opacity=".5"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lw1)"/>' +
      '<g class="lw-cl"><ellipse cx="70" cy="30" rx="38" ry="9" fill="#fff" opacity=".7"/><ellipse cx="310" cy="20" rx="42" ry="10" fill="#fff" opacity=".6"/></g>' +
      '<rect x="0" y="134" width="400" height="40" fill="#c4b25a"/>' + rows +
      '<path d="M0 136q60 -8 120 -2t140 -4t140 2v4h-400z" fill="#5f7a3a"/>' +
      '<rect x="0" y="172" width="400" height="88" fill="#4a4d52"/><rect x="0" y="170" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 214h400" stroke="#f2d24a" stroke-width="3" stroke-dasharray="26 22"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      /* highway naming sign + route shield */
      '<rect x="150" y="110" width="6" height="62" fill="#8b9096"/><rect x="298" y="110" width="6" height="62" fill="#8b9096"/>' +
      '<rect x="124" y="30" width="206" height="84" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      '<text x="227" y="62" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">LAINEY WILSON</text>' +
      '<text x="227" y="88" text-anchor="middle" ' + font + ' font-size="20" fill="#fff">HIGHWAY</text>' +
      laShield(36, 104, "15") + '<rect x="40" y="140" width="36" height="12" fill="#fff" stroke="#000" stroke-width="1"/><text x="58" y="149" text-anchor="middle" ' + font + ' font-size="8" fill="#000">NORTH</text><rect x="56" y="152" width="4" height="20" fill="#8b9096"/>' +
      /* pickup rolling in */
      '<g class="anim-train"><g transform="translate(226 0)"><rect x="0" y="194" width="114" height="24" rx="5" fill="' + RUST + '"/><path d="M8 194v-18h40l14 18z" fill="#8f3622"/><path d="M14 192v-13h18v13z" fill="#a8d4ea"/><path d="M36 192v-13h10l10 13z" fill="#a8d4ea"/>' +
      '<rect x="62" y="186" width="50" height="8" fill="#8f3622"/><circle cx="24" cy="220" r="9" fill="#1a1a1a"/><circle cx="24" cy="220" r="4" fill="#9a9a9a"/><circle cx="92" cy="220" r="9" fill="#1a1a1a"/><circle cx="92" cy="220" r="4" fill="#9a9a9a"/>' +
      '<rect x="0" y="200" width="6" height="5" rx="1" fill="#fff6c2" class="lw-glow"/></g>' +
      '<g class="lw-dust"><circle cx="352" cy="214" r="6" fill="#d9c49a" opacity=".5"/></g><g class="lw-dust lw-d2"><circle cx="358" cy="208" r="4" fill="#d9c49a" opacity=".5"/></g></g>',
      sky("lw1", "#5fa8d8", "#f6d79a"));
  }

  /* 2. Her daddy's farm outside Baskin: corn and wheat, grain bins, horses in the pasture by the fence */
  function lwfarm() {
    let corn = "";
    for (let x = 4; x < 190; x += 12) corn += '<g class="lw-sw ' + (x % 24 ? "lw-sw2" : "") + '"><path d="M' + x + ' 196v-44" stroke="#5f8a3a" stroke-width="3"/><path d="M' + x + ' 170q-10 -4 -12 -12M' + x + ' 180q10 -4 12 -12M' + x + ' 160q8 -2 9 -10" stroke="#6f9a44" stroke-width="2.5" fill="none"/><path d="M' + x + ' 152v-8" stroke="#d9b25a" stroke-width="3"/></g>';
    let wheat = "";
    for (let x = 200; x < 400; x += 6) wheat += '<path d="M' + x + ' 200v-22" stroke="#d9b25a" stroke-width="1.6" class="lw-sw ' + (x % 12 ? "lw-sw2" : "") + '"/>';
    const horse = (x, y, c, flip) => '<g transform="translate(' + x + ' ' + y + ')' + (flip ? ' scale(-1 1)' : '') + '"><ellipse cx="0" cy="0" rx="20" ry="9" fill="' + c + '"/><path d="M-14 6v16M-8 6v16M10 6v16M15 6v16" stroke="' + c + '" stroke-width="4"/>' +
      '<g class="lw-head"><path d="M16 -4l10 -12l8 3l-6 14z" fill="' + c + '"/></g><path d="M-20 -2q-8 6 -6 16" stroke="#2a1a10" stroke-width="3" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lw2)"/>' +
      '<g class="lw-cl"><ellipse cx="120" cy="40" rx="40" ry="9" fill="#fff" opacity=".6"/></g>' +
      '<rect x="0" y="120" width="400" height="140" fill="#7f9a4a"/>' +
      bin(250, 124, 36, 60) + bin(292, 124, 36, 50) + bin(334, 124, 30, 40) +
      '<path d="M0 124h400" stroke="#5f7a3a" stroke-width="3"/>' +
      /* pasture fence + horses */
      '<path d="M0 132h400M0 144h400" stroke="#e8e0cc" stroke-width="2.5"/>' + Array.from({ length: 11 }, (_, i) => '<rect x="' + (i * 40) + '" y="128" width="4" height="22" fill="#e8e0cc"/>').join("") +
      horse(250, 150, "#7a4a22") + horse(336, 154, "#e9d6b0", true) +
      '<rect x="0" y="196" width="400" height="64" fill="#8a6a3a"/>' + corn + wheat,
      sky("lw2", "#7cc0e6", "#f5e3b0"));
  }

  /* 3. The parish-fair circuit she worked as a teenager, opening for her own Hannah Montana act: a small stage, a turning Ferris wheel, string lights */
  function lwfair() {
    const R = 54, cx = 300, cy = 96;
    let spokes = "", cars = "";
    for (let i = 0; i < 8; i++) {
      const a = i * Math.PI / 4, x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
      spokes += '<path d="M' + cx + ' ' + cy + 'L' + x.toFixed(1) + ' ' + y.toFixed(1) + '" stroke="#e8e0cc" stroke-width="2"/>';
      cars += '<rect x="' + (x - 7).toFixed(1) + '" y="' + (y - 4).toFixed(1) + '" width="14" height="10" rx="2" fill="' + [MUST, TEAL, RUST, CREAM][i % 4] + '"/>';
    }
    let bulbs = "";
    for (let i = 0; i < 20; i++) bulbs += '<circle cx="' + (6 + i * 20) + '" cy="' + (30 + Math.abs(10 - i) * 1.2) + '" r="3" fill="#ffe08a" class="lw-bl ' + (i % 2 ? "lw-bl2" : "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lw3)"/>' +
      '<path d="M0 30q100 12 200 0t200 0" stroke="#333" stroke-width="1" fill="none"/>' + bulbs +
      /* Ferris wheel */
      '<path d="M270 196l30 -100l30 100" stroke="#c9ccd0" stroke-width="4" fill="none"/>' +
      '<g class="lw-wheel"><circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="#e8e0cc" stroke-width="3"/>' + spokes + cars + '</g><circle cx="' + cx + '" cy="' + cy + '" r="5" fill="' + MUST + '"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#5a4a2a"/>' +
      /* small fair stage */
      '<rect x="30" y="110" width="160" height="10" fill="' + RUST + '"/><path d="M30 120h160v6q-80 10 -160 0z" fill="#8f3622"/>' +
      '<rect x="30" y="120" width="6" height="70" fill="#5a3d28"/><rect x="184" y="120" width="6" height="70" fill="#5a3d28"/>' +
      '<rect x="26" y="176" width="168" height="16" fill="#7a5a3a"/><rect x="26" y="176" width="168" height="3" fill="' + MUST + '"/>' +
      /* performer silhouette in a long blonde wig, no face */
      '<g transform="translate(102 128)"><path d="M0 4q8 -12 16 0v20h-16z" fill="#f2d27a"/><circle cx="8" cy="6" r="7" fill="#1a1a1a"/><rect x="2" y="14" width="12" height="26" rx="3" fill="#1a1a1a"/><path d="M2 40l-4 8M14 40l4 8" stroke="#1a1a1a" stroke-width="4"/><path d="M16 18l12 -10" stroke="#1a1a1a" stroke-width="3"/><circle cx="29" cy="7" r="3" fill="#888"/></g>' +
      '<text x="110" y="188" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">PARISH FAIR</text>' +
      '<circle cx="60" cy="70" r="1.6" fill="#fff" class="lw-star"/><circle cx="210" cy="56" r="1.6" fill="#fff" class="lw-star lw-s2"/><circle cx="380" cy="70" r="1.6" fill="#fff" class="lw-star lw-s3"/>',
      sky("lw3", "#1b1838", "#7a3a5a"));
  }

  /* 4. Nashville, 2011 on: the camper trailer she lived in outside the studio, guitar case on the step, a porch light and string lights */
  function lwcamper() {
    return svg(
      '<rect width="400" height="260" fill="url(#lw4)"/>' +
      '<circle cx="70" cy="50" r="16" fill="#f4ead2" opacity=".9"/>' +
      '<circle cx="140" cy="40" r="1.6" fill="#fff" class="lw-star"/><circle cx="260" cy="30" r="1.6" fill="#fff" class="lw-star lw-s2"/><circle cx="350" cy="50" r="1.6" fill="#fff" class="lw-star lw-s3"/>' +
      /* studio building behind */
      '<rect x="230" y="70" width="170" height="120" fill="#3a3040"/><rect x="250" y="90" width="30" height="22" fill="#e9a23b" opacity=".75" class="lw-glow"/><rect x="300" y="90" width="30" height="22" fill="#e9a23b" opacity=".6" class="lw-glow lw-g2"/><rect x="352" y="140" width="26" height="50" fill="#2a2230"/>' +
      '<rect x="0" y="186" width="400" height="74" fill="#3c3a38"/><path d="M0 220h400" stroke="#55524d" stroke-width="2"/>' +
      /* camper trailer: rounded, cream and teal stripe */
      '<path d="M40 190v-62q0 -26 30 -26h120q30 0 30 26v62z" fill="' + CREAM + '" stroke="#8a8270" stroke-width="2"/>' +
      '<rect x="40" y="150" width="180" height="12" fill="' + TEAL + '"/>' +
      '<rect x="60" y="118" width="40" height="24" rx="6" fill="#ffd27a" class="lw-glow"/><path d="M60 130h40M80 118v24" stroke="#8a8270"/>' +
      '<rect x="150" y="122" width="26" height="62" rx="3" fill="#d9cfb8" stroke="#8a8270"/><circle cx="170" cy="156" r="2" fill="#555"/><circle cx="186" cy="118" r="4" fill="#fff3b0" class="lw-glow"/>' +
      '<rect x="148" y="184" width="30" height="6" fill="#777"/><circle cx="90" cy="194" r="10" fill="#1a1a1a"/><circle cx="90" cy="194" r="4" fill="#9a9a9a"/><path d="M230 182h24" stroke="#777" stroke-width="4"/>' +
      /* guitar case + boots on the step */
      '<path d="M186 204q-6 -10 0 -18q4 -4 8 0q10 -4 18 2q6 8 0 16q-8 6 -18 2q-4 4 -8 -2z" fill="#3a2010" stroke="#c9a46a" stroke-width="1.5"/>' +
      '<path d="M120 204v-14h6v10l8 4z" fill="#8a4a22"/><path d="M132 204v-14h6v10l8 4z" fill="#8a4a22"/>' +
      /* string lights */
      '<path d="M40 104q60 20 120 0t120 6" stroke="#333" stroke-width="1" fill="none"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + (48 + i * 24) + '" cy="' + (108 + (i % 5 === 2 ? 6 : 3)) + '" r="3" fill="' + [MUST, TEAL, RUST][i % 3] + '" class="lw-bl ' + (i % 2 ? "lw-bl2" : "") + '"/>').join(""),
      sky("lw4", "#14122a", "#3a2f4a"));
  }

  /* 5. Her corner in Baskin: LA 15 at LA 577, her Northeast Louisiana Music Trail marker on the roadside, grain bins and the Delta sky behind */
  function lwcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#lw5)"/>' +
      '<rect x="0" y="120" width="400" height="30" fill="#7f9a4a"/>' +
      bin(150, 150, 40, 70) + bin(196, 150, 40, 58) + bin(242, 150, 34, 46) +
      '<path d="M190 82l40 -40" stroke="#8b9096" stroke-width="4"/><rect x="228" y="30" width="8" height="70" fill="#a9adb2"/>' +
      /* metal shop wall with tags */
      '<rect x="0" y="148" width="258" height="78" fill="#b7bcc0"/>' +
      Array.from({ length: 13 }, (_, i) => '<path d="M' + (i * 20) + ' 150v76" stroke="#9aa0a5" stroke-width="2"/>').join("") +
      tag("BASKIN LA", 16, 174, 16, CREAM, -4) + tag("LAINEY", 12, 210, 36, MUST, -5) + tag("BELL BOTTOM", 60, 222, 13, RUST, -3) +
      /* roadside marker */
      '<rect x="226" y="176" width="4" height="48" fill="#3a3a3a"/><rect x="208" y="150" width="40" height="30" rx="3" fill="#2a3f6a" stroke="' + MUST + '" stroke-width="2"/><path d="M216 160h24M216 166h24M216 172h16" stroke="' + CREAM + '" stroke-width="2"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="322" y="126" width="6" height="98" fill="#2f2f2f"/>' + sign(262, 128, 126, "LA Hwy 15") + sign(262, 154, 126, "LA Hwy 577") +
      '<g class="lw-sp"><circle cx="30" cy="188" r="3" fill="' + MUST + '" opacity=".7"/></g><g class="lw-sp lw-sp2"><circle cx="36" cy="182" r="2" fill="' + MUST + '" opacity=".6"/></g>',
      sky("lw5", "#2a3570", "#f0a060"));
  }

  window.SCENES = { lwhwy: lwhwy, lwfarm: lwfarm, lwfair: lwfair, lwcamper: lwcamper, lwcorner: lwcorner };
})();
