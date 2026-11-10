/* ladywray scenes (Regions tab: Virginia; Portsmouth, Hampton Roads). CSS classes and ids prefixed lw- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lwflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.35}55%{opacity:.95}}.lw-flk{animation:lwflick 2.4s infinite}.lw-flk2{animation-delay:1.2s}' +
    '@keyframes lwchase{0%,100%{opacity:.25}50%{opacity:1}}.lw-ch{animation:lwchase .9s infinite}.lw-ch2{animation-delay:.45s}' +
    '@keyframes lwnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-14px,-60px);opacity:0}}.lw-nt{animation:lwnote 3s ease-out infinite}.lw-nt2{animation-delay:1s}.lw-nt3{animation-delay:2s}' +
    '@keyframes lwglow{0%,100%{opacity:.35}50%{opacity:.95}}.lw-gl{animation:lwglow 2.2s ease-in-out infinite}.lw-gl2{animation-delay:-1.1s}' +
    '@keyframes lwsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.lw-sw{transform-box:fill-box;transform-origin:50% 0;animation:lwsway 3s ease-in-out infinite}.lw-sw2{animation-delay:-1.5s}' +
    '@keyframes lwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lw-sp{animation:lwspray 1.4s ease-out infinite}.lw-sp2{animation-delay:.45s}' +
    '@keyframes lwcar{0%{transform:translateX(420px)}100%{transform:translateX(-200px)}}.lw-car{animation:lwcar 5s linear infinite}' +
    '@keyframes lwspin{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.82)}}.lw-spin{transform-box:fill-box;transform-origin:50% 50%;animation:lwspin .8s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="lw-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="2" height="18" fill="' + c + '"/></g>';
  const GOLD = "#f0b64a", ROSE = "#d4566a", TEAL = "#4aa3a0", CREAM = "#f4ead6", BRICK = "#9c3f2e";

  /* 1. I-264 West into the Downtown Tunnel to Portsmouth: concrete portal, the green overhead sign with the blue/red interstate shield, cars rolling in at dusk */
  function lwtunnel() {
    const shield = (x, y) => '<path d="M' + x + ' ' + y + 'h26v8q0 14 -13 20q-13 -6 -13 -20z" fill="#1d4fa0" stroke="#fff" stroke-width="1.5"/><path d="M' + x + ' ' + y + 'h26v6h-26z" fill="#c8102e"/><text x="' + (x + 13) + '" y="' + (y + 21) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">264</text>';
    const car = (x, c) => '<g transform="translate(' + x + ' 0)"><rect x="0" y="196" width="70" height="20" rx="6" fill="' + c + '"/><path d="M12 196l10 -14h26l10 14z" fill="' + c + '"/><path d="M18 195l7 -10h9v10zM38 195v-10h8l7 10z" fill="#9fb4c8"/><circle cx="16" cy="218" r="7" fill="#151515"/><circle cx="54" cy="218" r="7" fill="#151515"/><rect x="0" y="202" width="6" height="5" fill="#ffefb0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lw1)"/>' +
      '<path d="M0 150q100 -14 200 -6t200 -4v20h-400z" fill="#2f4d63"/>' +
      '<path d="M60 230v-96q0 -40 64 -40h152q64 0 64 40v96z" fill="#a7a49c"/><path d="M92 230v-80q0 -30 50 -30h116q50 0 50 30v80z" fill="#1a1d22"/>' +
      Array.from({ length: 8 }, (_, i) => '<circle cx="' + (118 + i * 24) + '" cy="132" r="3" fill="#ffd98a" class="lw-gl' + (i % 2 ? " lw-gl2" : "") + '"/>').join("") +
      '<rect x="40" y="24" width="6" height="96" fill="#6f757b"/><rect x="354" y="24" width="6" height="96" fill="#6f757b"/><rect x="40" y="28" width="320" height="8" fill="#6f757b"/>' +
      '<rect x="80" y="36" width="240" height="58" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield(94, 44) +
      '<text x="128" y="56" ' + font + ' font-size="11" fill="#fff">WEST</text><text x="128" y="74" ' + font + ' font-size="15" fill="#fff">Downtown Tunnel</text><text x="128" y="89" ' + font + ' font-size="12" fill="#fff">PORTSMOUTH</text>' +
      '<rect x="0" y="226" width="400" height="34" fill="#4a4c50"/><path d="M0 242h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="anim-train">' + car(60, "#c2414b") + car(170, "#e8e2d4") + '</g>' +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="9" fill="#f4ead6">HAMPTON ROADS · VIRGINIA</text>',
      sky("lw1", "#2b2445", "#e88f5f"));
  }

  /* 2. The church choir where she got her first solo at nine: pews, the choir loft with gold robes hung up, stained glass glowing, the hymn board, notes rising */
  function lwchurch() {
    const robe = (x) => '<g class="lw-sw' + (x % 2 ? " lw-sw2" : "") + '"><path d="M' + x + ' 92h22l8 64h-38z" fill="#7a1f3a"/><path d="M' + (x + 5) + ' 92l6 18 6 -18" fill="' + GOLD + '"/><path d="M' + (x + 11) + ' 86v6" stroke="#cfc8b8" stroke-width="2"/></g>';
    const glass = (x, cls) => '<g class="lw-gl ' + cls + '"><path d="M' + x + ' 120v-44q16 -22 32 0v44z" fill="#3a6fb0"/><path d="M' + x + ' 98h32M' + (x + 16) + ' 120v-56" stroke="#1c1c1c" stroke-width="2"/><path d="M' + (x + 4) + ' 96l12 -18 12 18z" fill="' + ROSE + '" opacity=".8"/><rect x="' + (x + 4) + '" y="102" width="10" height="14" fill="' + GOLD + '" opacity=".8"/><rect x="' + (x + 18) + '" y="102" width="10" height="14" fill="' + TEAL + '" opacity=".9"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#efe3c9"/><rect x="0" y="0" width="400" height="30" fill="#d9c7a3"/>' +
      glass(24, "") + glass(344, "lw-gl2") +
      '<rect x="80" y="70" width="240" height="96" fill="#d8c29a"/><rect x="80" y="156" width="240" height="12" fill="#6b4329"/>' +
      [96, 132, 168, 210, 246, 282].map(robe).join("") +
      '<rect x="168" y="38" width="64" height="26" rx="3" fill="#3b2418"/><text x="200" y="50" text-anchor="middle" ' + font + ' font-size="7" fill="' + CREAM + '">HYMN · SOLO</text><text x="200" y="60" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">AGE 9</text>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (30 - i * 6) + '" y="' + (190 + i * 22) + '" width="' + (150 + i * 12) + '" height="12" rx="2" fill="#7a4a2c"/><rect x="' + (30 - i * 6) + '" y="' + (176 + i * 22) + '" width="' + (150 + i * 12) + '" height="16" fill="#5c3820"/>' +
        '<rect x="' + (220 + i * 0) + '" y="' + (190 + i * 22) + '" width="' + (150 + i * 12) + '" height="12" rx="2" fill="#7a4a2c"/><rect x="220" y="' + (176 + i * 22) + '" width="' + (150 + i * 12) + '" height="16" fill="#5c3820"/>').join("") +
      '<rect x="186" y="170" width="28" height="90" fill="#8b1e2e"/>' +
      note(150, 150, GOLD, "") + note(256, 140, ROSE, "lw-nt2") + note(200, 126, TEAL, "lw-nt3"));
  }

  /* 3. Her grandmother's front room: the upright piano by the window, the lamp on, family frames on the wall, the 45 on the record player spinning, notes drifting ("Come On In") */
  function lwparlor() {
    const frame = (x, y, w, h, c) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#c9a24a"/><rect x="' + (x + 3) + '" y="' + (y + 3) + '" width="' + (w - 6) + '" height="' + (h - 6) + '" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#5b2f3a"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 30) + ' 0v170" stroke="#663642" stroke-width="10"/>').join("") +
      '<rect x="290" y="30" width="86" height="96" fill="#26324a"/><rect x="290" y="30" width="86" height="96" fill="none" stroke="' + CREAM + '" stroke-width="5"/><path d="M333 30v96M290 78h86" stroke="' + CREAM + '" stroke-width="3"/><circle cx="352" cy="52" r="8" fill="#f6e7b0" class="lw-gl"/>' +
      '<path d="M282 26h102v12q-14 40 -20 100h-10q4 -60 -18 -100h-22q-22 40 -18 100h-10q-6 -60 -20 -100z" fill="' + ROSE + '" opacity=".75"/>' +
      frame(40, 34, 34, 42, "#d9b98a") + frame(84, 26, 46, 34, "#a9c0b8") + frame(140, 38, 30, 38, "#e0c7a0") +
      '<rect x="40" y="96" width="210" height="104" fill="#3b2016"/><rect x="40" y="92" width="210" height="8" fill="#2a160f"/><rect x="52" y="104" width="186" height="40" fill="#4a2a1d"/>' +
      '<rect x="46" y="150" width="198" height="16" fill="#f4f1ea"/>' + Array.from({ length: 22 }, (_, i) => '<path d="M' + (46 + i * 9) + ' 150v16" stroke="#9a948a" stroke-width="1"/>').join("") +
      Array.from({ length: 15 }, (_, i) => ([1, 2, 4, 5, 6].indexOf(i % 7) >= 0 ? '<rect x="' + (52 + i * 13) + '" y="150" width="6" height="10" fill="#151515"/>' : "")).join("") +
      '<rect x="50" y="200" width="12" height="40" fill="#2a160f"/><rect x="228" y="200" width="12" height="40" fill="#2a160f"/>' +
      '<rect x="196" y="78" width="46" height="14" rx="2" fill="#7a4a2c"/><g transform="translate(219 85)"><g class="lw-spin"><ellipse cx="0" cy="0" rx="18" ry="4" fill="#111"/><ellipse cx="0" cy="0" rx="6" ry="1.6" fill="' + GOLD + '"/></g></g>' +
      '<rect x="60" y="66" width="4" height="26" fill="#c9a24a"/><path d="M50 66h24l-6 -16h-12z" fill="#f6e2a8" class="lw-gl lw-gl2"/>' +
      '<rect x="0" y="240" width="400" height="20" fill="#7a4a2c"/><rect x="0" y="236" width="400" height="6" fill="#5c3820"/><ellipse cx="300" cy="246" rx="80" ry="8" fill="' + TEAL + '" opacity=".7"/>' +
      note(120, 90, GOLD, "") + note(180, 70, CREAM, "lw-nt2") + note(260, 100, ROSE, "lw-nt3") +
      '<text x="145" y="226" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">COME ON IN</text>',
      '');
  }

  /* 4. The Commodore Theatre on High St in Olde Towne: the cream 1945 Art Deco front, the tall red neon blade sign, the marquee bulbs chasing */
  function lwcommodore() {
    const letters = "COMMODORE".split("");
    const bulbs = Array.from({ length: 30 }, (_, i) => '<circle cx="' + (92 + i * 7.5) + '" cy="150" r="2.4" fill="#ffe28a" class="lw-ch' + (i % 2 ? " lw-ch2" : "") + '"/><circle cx="' + (92 + i * 7.5) + '" cy="186" r="2.4" fill="#ffe28a" class="lw-ch' + (i % 2 ? "" : " lw-ch2") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lw4)"/>' +
      '<rect x="20" y="96" width="60" height="124" fill="#6d4a3a"/><rect x="320" y="104" width="64" height="116" fill="#7a4e3c"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (28 + (i % 2) * 26) + '" y="' + (108 + Math.floor(i / 2) * 32) + '" width="16" height="20" fill="#f6d27a" opacity=".7"/><rect x="' + (330 + (i % 2) * 26) + '" y="' + (116 + Math.floor(i / 2) * 32) + '" width="16" height="20" fill="#f6d27a" opacity=".6"/>').join("") +
      '<rect x="86" y="70" width="228" height="150" fill="#e8d9b8"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (100 + i * 44) + '" y="76" width="8" height="70" fill="#d6c39a"/>').join("") +
      '<path d="M86 70h228v-8h-228z" fill="#cdb98e"/>' +
      '<rect x="186" y="6" width="28" height="140" rx="4" fill="#f4efe4" stroke="#b8a888" stroke-width="2"/>' +
      letters.map((c, i) => '<text x="200" y="' + (22 + i * 14.2) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#e0262f" class="lw-flk' + (i % 3 ? "" : " lw-flk2") + '">' + c + '</text>').join("") +
      '<rect x="88" y="146" width="224" height="44" fill="#fbf7ee" stroke="#1c1c1c" stroke-width="2"/>' + bulbs +
      '<text x="200" y="166" text-anchor="middle" ' + font + ' font-size="12" fill="#151515">LADY WRAY</text><text x="200" y="180" text-anchor="middle" ' + font + ' font-size="9" fill="#b0273a">QUEEN ALONE · TONIGHT</text>' +
      '<rect x="120" y="190" width="160" height="30" fill="#2a1a14"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="' + (126 + i * 38) + '" y="194" width="32" height="26" fill="#c9a24a" opacity=".55" class="lw-gl' + (i % 2 ? " lw-gl2" : "") + '"/>').join("") +
      '<rect x="0" y="220" width="400" height="40" fill="#5a5650"/><rect x="0" y="218" width="400" height="4" fill="#d9d2c4"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">HIGH ST · OLDE TOWNE PORTSMOUTH</text>',
      sky("lw4", "#1b1733", "#6b3b56"));
  }

  /* 5. High St and Court St in Olde Towne: green signs, LADY WRAY tagged on the brick wall, Trinity Church's red-brick tower with the white belfry and spire behind */
  function lwcorner() {
    const tower = '<rect x="190" y="70" width="48" height="90" fill="' + BRICK + '"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M190 ' + (80 + i * 10) + 'h48" stroke="#843426" stroke-width="1"/>').join("") +
      '<path d="M206 108v-14q8 -10 16 0v14z" fill="#f4f1ea"/><rect x="186" y="62" width="56" height="10" fill="#f4f1ea"/>' +
      '<rect x="196" y="38" width="36" height="26" fill="#f4f1ea"/><path d="M204 62v-16q10 -8 20 0v16z" fill="#2a2a2a"/><path d="M192 38h44l-22 -10z" fill="#e2ddd2"/>' +
      '<rect x="203" y="20" width="22" height="12" fill="#f4f1ea"/><path d="M203 20l11 -18 11 18z" fill="#e2ddd2"/><rect x="213" y="-2" width="2" height="6" fill="' + GOLD + '"/>' +
      '<rect x="120" y="108" width="70" height="52" fill="' + BRICK + '"/><path d="M120 108l35 -18 35 18z" fill="#843426"/><rect x="238" y="108" width="70" height="52" fill="' + BRICK + '"/><path d="M238 108l35 -18 35 18z" fill="#843426"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (132 + i * 14) + ' 150v-26q4 -6 8 0v26z" fill="#f4f1ea"/><path d="M' + (250 + i * 14) + ' 150v-26q4 -6 8 0v26z" fill="#f4f1ea"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lw5)"/>' + Array.from({ length: 14 }, (_, i) => '<circle cx="' + (20 + i * 29) + '" cy="' + (14 + (i * 17) % 40) + '" r="1.2" fill="#fff" class="lw-gl' + (i % 2 ? " lw-gl2" : "") + '"/>').join("") +
      tower +
      '<rect x="0" y="150" width="400" height="76" fill="#8c4a36"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M0 ' + (160 + i * 10) + 'h400" stroke="#7a3f2e" stroke-width="1.5"/>').join("") +
      tag("QUEEN ALONE", 22, 172, 16, GOLD, -4) + tag("LADY WRAY", 18, 214, 42, ROSE, -6) + tag("NICOLE", 286, 214, 16, TEAL, -5) +
      '<rect x="0" y="226" width="400" height="34" fill="#55524d"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="348" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(300, 98, 100, "High St") + sign(298, 124, 102, "Court St") +
      
      '<g class="lw-sp"><circle cx="190" cy="196" r="3" fill="' + ROSE + '" opacity=".7"/></g><g class="lw-sp lw-sp2"><circle cx="196" cy="190" r="2" fill="' + ROSE + '" opacity=".6"/></g>',
      sky("lw5", "#1a1a3c", "#d9805f"));
  }

  window.SCENES = { lwtunnel: lwtunnel, lwchurch: lwchurch, lwparlor: lwparlor, lwcommodore: lwcommodore, lwcorner: lwcorner };
})();
