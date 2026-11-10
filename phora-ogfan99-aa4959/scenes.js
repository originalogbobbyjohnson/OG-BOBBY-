/* phora scenes (Regions tab: Los Angeles + SoCal; Anaheim, Orange County). CSS classes prefixed ph- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes phglow{0%,100%{opacity:.45}50%{opacity:1}}.ph-glow{animation:phglow 2.4s ease-in-out infinite}.ph-g2{animation-delay:-1.2s}' +
    '@keyframes phflick{0%,100%{opacity:1}46%{opacity:.8}50%{opacity:.3}54%{opacity:.95}}.ph-flk{animation:phflick 3s infinite}' +
    '@keyframes phbuzz{0%,100%{transform:translate(0,0)}25%{transform:translate(.6px,-.6px)}75%{transform:translate(-.6px,.6px)}}.ph-buzz{animation:phbuzz .12s linear infinite}' +
    '@keyframes phspray{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(-18px,-22px);opacity:0}}.ph-sp{animation:phspray 1.3s ease-out infinite}.ph-sp2{animation-delay:.45s}.ph-sp3{animation-delay:.9s}' +
    '@keyframes phfall{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-40px,180px) rotate(220deg)}}.ph-pt{transform-box:fill-box;animation:phfall 6s linear infinite}.ph-pt2{animation-delay:-2s}.ph-pt3{animation-delay:-4s}' +
    '@keyframes phtw{0%,100%{opacity:.25}50%{opacity:1}}.ph-tw{animation:phtw 1.8s ease-in-out infinite}.ph-tw2{animation-delay:-.6s}.ph-tw3{animation-delay:-1.2s}' +
    '@keyframes phcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.ph-car{animation:phcar 7s linear infinite}.ph-car2{animation-delay:-3.5s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="ph-tw' + (i % 3 === 1 ? " ph-tw2" : i % 3 === 2 ? " ph-tw3" : "") + '" cx="' + ((i * 97 + 13) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff"/>'; return s; };
  const rose = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0v26" stroke="#2f6b3a" stroke-width="2.5"/><path d="M0 14q-9 -2 -11 -9q8 0 11 9z" fill="#3f8a4a"/>' +
    '<circle cx="0" cy="-4" r="8" fill="' + c + '"/><path d="M-6 -4q6 -9 12 0q-6 6 -12 0z" fill="#000" opacity=".22"/><path d="M-3 -6q3 -4 6 0" stroke="#000" stroke-opacity=".3" stroke-width="1.2" fill="none"/></g>';
  const OC = "#ff7602", PS = "#005a9c", ROSE = "#ff6b8b", GOLD = "#f5c96a", MOON = "#8fb7ff";

  /* 1. ARTIC, Anaheim: the white diamond-grid gridshell vault, the glass end wall, the Metrolink Orange County Line train pulling in on the platform under it */
  function phstation() {
    let grid = "";
    for (let i = -8; i <= 16; i++) grid += '<path d="M' + (i * 30) + ' 150L' + (i * 30 + 120) + ' 20" stroke="#dfe6ee" stroke-width="2.4"/><path d="M' + (i * 30) + ' 20L' + (i * 30 + 120) + ' 150" stroke="#dfe6ee" stroke-width="2.4"/>';
    const tr = '<g class="anim-train"><rect x="20" y="146" width="330" height="62" rx="8" fill="#f2f4f6" stroke="#8a929a" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 44) + '" y="156" width="30" height="22" rx="2" fill="#1d262e"/>').join("") +
      '<rect x="20" y="184" width="330" height="7" fill="#1f3f7a"/><rect x="20" y="193" width="330" height="3" fill="' + OC + '"/>' +
      '<path d="M330 150h18q8 0 10 10v42q0 6 -8 6h-20z" fill="#d6dbe0"/><circle cx="350" cy="196" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ph1)"/>' +
      /* the vault: a big arch shell filled with the diamond grid, glass glowing through */
      '<clipPath id="ph1c"><path d="M-10 150Q200 -70 410 150z"/></clipPath>' +
      '<path d="M-10 150Q200 -70 410 150z" fill="#bcd6ea" opacity=".55"/>' +
      '<g clip-path="url(#ph1c)">' + grid + '</g>' +
      '<path d="M-10 150Q200 -70 410 150" fill="none" stroke="#f4f7fa" stroke-width="6"/>' +
      '<rect class="ph-glow" x="150" y="40" width="100" height="10" rx="5" fill="#fff8dc" opacity=".6"/>' +
      '<rect x="0" y="140" width="400" height="10" fill="#c9ced4"/>' +
      '<rect x="0" y="150" width="400" height="60" fill="#3a3f46"/>' + tr +
      '<rect x="0" y="208" width="400" height="7" fill="#f2c200"/><rect x="0" y="215" width="400" height="45" fill="#b9b4aa"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 215l-14 45" stroke="#a7a298" stroke-width="1.5"/>').join("") +
      /* black station sign */
      '<rect x="60" y="92" width="280" height="38" rx="3" fill="#111"/><text x="74" y="117" ' + font + ' font-size="15" fill="#fff">Anaheim ARTIC</text>' +
      badge(222, 111, "OC", OC) + badge(258, 111, "SURFLINER", PS),
      sky("ph1", "#5fa2d8", "#f5d6a8"));
  }

  /* 2. Plan B: the tattoo parlor on Tustin St in Orange where he gets his work done (he wanted to be a tattoo artist himself) - flash sheets on the wall, the chair, the machine buzzing, the neon OPEN sign */
  function phtattoo() {
    const flash = (x, y, inner) => '<rect x="' + x + '" y="' + y + '" width="54" height="54" rx="2" fill="#f4ecd8" stroke="#8a7a5a" stroke-width="1.5"/><g transform="translate(' + (x + 27) + ' ' + (y + 27) + ')">' + inner + '</g>';
    return svg(
      '<rect width="400" height="260" fill="#2a1f2a"/>' +
      '<rect x="0" y="0" width="400" height="180" fill="#3a2a36"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 0v180" stroke="#33242f" stroke-width="2"/>').join("") +
      flash(24, 20, '<path d="M0 -16l5 11l12 2l-9 8l2 12l-10 -6l-10 6l2 -12l-9 -8l12 -2z" fill="' + GOLD + '" stroke="#5a4320" stroke-width="1.2"/>') +
      flash(88, 20, '<path d="M0 14q-18 -12 -18 -22q0 -10 9 -10q6 0 9 6q3 -6 9 -6q9 0 9 10q0 10 -18 22z" fill="' + ROSE + '" stroke="#6a1f2f" stroke-width="1.2"/><rect x="-20" y="-3" width="40" height="8" fill="#fff" stroke="#333" stroke-width=".8"/><text x="0" y="3.5" text-anchor="middle" ' + font + ' font-size="6" fill="#333">TRUE</text>') +
      flash(24, 84, rose(0, 4, 1.3, "#d6304f")) +
      flash(88, 84, '<path d="M0 -14q14 0 14 14t-14 14q8 -6 8 -14t-8 -14z" fill="#e8eaf2" stroke="#556" stroke-width="1"/><circle cx="-8" cy="-8" r="1.5" fill="' + GOLD + '"/><circle cx="-12" cy="6" r="1" fill="' + GOLD + '"/>') +
      /* neon OPEN + PLAN B */
      '<rect x="180" y="24" width="110" height="40" rx="8" fill="#140c14" stroke="#4a3a4a" stroke-width="2"/><text class="ph-flk" x="235" y="52" text-anchor="middle" ' + font + ' font-size="22" fill="none" stroke="' + ROSE + '" stroke-width="2">OPEN</text>' +
      '<text class="ph-glow" x="340" y="52" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="22" fill="' + MOON + '">plan B</text>' +
      /* the chair */
      '<rect x="0" y="180" width="400" height="80" fill="#1c1418"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="' + (180 + (i % 2) * 40) + '" width="40" height="40" fill="#241a20"/>').join("") +
      '<path d="M190 176h120l20 -40h14l-18 50h-136z" fill="#111" stroke="#444" stroke-width="2"/><rect x="236" y="186" width="10" height="40" fill="#555"/><rect x="214" y="224" width="54" height="8" rx="3" fill="#555"/>' +
      /* lamp */
      '<path d="M360 260v-150l-34 -30" stroke="#666" stroke-width="4" fill="none"/><path d="M310 74l32 12l-10 18z" fill="#888"/><path class="ph-glow" d="M318 94l-28 70h50z" fill="#fff6c8" opacity=".18"/>' +
      /* the machine on the tray, buzzing, ink caps */
      '<rect x="40" y="170" width="120" height="10" fill="#777"/><path d="M100 180v70" stroke="#666" stroke-width="4"/>' +
      '<g class="ph-buzz"><rect x="66" y="148" width="40" height="14" rx="4" fill="#2a2a2a" stroke="#999" stroke-width="1.5"/><rect x="104" y="152" width="22" height="6" rx="2" fill="#aaa"/><path d="M126 155h8" stroke="#ccc" stroke-width="2"/></g>' +
      [[56, "#111"], [70, ROSE], [84, MOON], [146, GOLD]].map(a => '<path d="M' + a[0] + ' 170v-8h10v8z" fill="' + a[1] + '" stroke="#ddd" stroke-width="1"/>').join("") +
      '<rect x="180" y="74" width="110" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="235" y="88" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Tustin St</text>',
      "");
  }

  /* 3. The writer: a concrete wall by the Santa Ana River channel in Anaheim, his name going up in pieces, a can spraying, the river bike trail, palms and the Santa Ana Mountains behind */
  function phwall() {
    return svg(
      '<rect width="400" height="260" fill="url(#ph3)"/>' +
      '<path d="M0 110l40 -24l40 14l50 -32l46 22l40 -18l54 26l44 -20l50 22l36 -10v60h-400z" fill="#8a7a8e" opacity=".8"/>' +
      '<path d="M0 124l60 -14l70 10l80 -16l90 14l100 -8v40h-400z" fill="#6e6276"/>' +
      [30, 70, 330, 368].map((x, i) => '<path d="M' + x + ' 150q2 -46 ' + (i % 2 ? 4 : -2) + ' -76" stroke="#5a4a3a" stroke-width="3" fill="none"/><path d="M' + (x + (i % 2 ? 4 : -2)) + ' 74q-16 -2 -22 8M' + (x + (i % 2 ? 4 : -2)) + ' 74q16 -4 22 6M' + (x + (i % 2 ? 4 : -2)) + ' 74q-10 -12 -20 -10M' + (x + (i % 2 ? 4 : -2)) + ' 74q12 -12 20 -8" stroke="#2f5a3a" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") +
      /* the sloped concrete channel wall */
      '<path d="M0 150h400v70h-400z" fill="#b7b2a8"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 150v70" stroke="#a49f94" stroke-width="2"/>').join("") +
      tag("PHORA", 40, 202, 54, ROSE, -5) + tag("STAY TRUE", 238, 184, 22, MOON, -4) + tag("YT", 340, 212, 32, GOLD, -8) +
      '<path d="M0 220h400v40h-400z" fill="#8f99a3"/><path d="M0 232q100 6 200 0t200 0" stroke="#c3ccd4" stroke-width="2" fill="none" opacity=".7"/>' +
      '<path d="M0 148h400" stroke="#7a756c" stroke-width="3"/>' +
      /* spray can */
      '<g transform="translate(296 128) rotate(-30)"><rect x="0" y="0" width="14" height="30" rx="3" fill="' + ROSE + '" stroke="#333" stroke-width="1.5"/><rect x="4" y="-6" width="6" height="6" fill="#ddd"/></g>' +
      [1, 2, 3].map(k => '<g class="ph-sp' + (k > 1 ? " ph-sp" + k : "") + '"><circle cx="' + (286 - k * 3) + '" cy="' + (120 + k * 2) + '" r="' + (3 - k * .6) + '" fill="' + ROSE + '" opacity=".7"/></g>').join(""),
      sky("ph3", "#f7a26b", "#ffd9a0"));
  }

  /* 4. To the Moon: a rooftop at night, a big full moon, roses in a pot, a letter signed "yours truly", petals drifting */
  function phmoon() {
    return svg(
      '<rect width="400" height="260" fill="url(#ph4)"/>' + stars(30) +
      '<circle class="ph-glow" cx="290" cy="74" r="58" fill="' + MOON + '" opacity=".25"/><circle cx="290" cy="74" r="44" fill="#eef1f8"/>' +
      '<circle cx="276" cy="62" r="8" fill="#d6dbe8"/><circle cx="304" cy="86" r="11" fill="#d6dbe8"/><circle cx="296" cy="56" r="4" fill="#d6dbe8"/>' +
      /* far city lights */
      '<g fill="#1a1630">' + [[0, 150, 40], [44, 140, 30], [80, 156, 50], [140, 146, 36], [184, 160, 60], [250, 150, 40], [300, 158, 50], [356, 144, 44]].map(a => '<rect x="' + a[0] + '" y="' + a[1] + '" width="' + a[2] + '" height="' + (200 - a[1]) + '"/>').join("") + '</g>' +
      Array.from({ length: 24 }, (_, i) => '<rect class="' + (i % 4 ? "" : "ph-glow") + '" x="' + (8 + (i * 37) % 384) + '" y="' + (164 + (i * 13) % 30) + '" width="3" height="4" fill="' + GOLD + '" opacity=".7"/>').join("") +
      /* rooftop ledge */
      '<rect x="0" y="196" width="400" height="64" fill="#2b2238"/><rect x="0" y="192" width="400" height="8" fill="#3d3150"/>' +
      /* pot of roses */
      '<path d="M50 236h50l-6 -30h-38z" fill="#8a4a32" stroke="#5a2a18" stroke-width="2" transform="translate(0 0)"/>' +
      rose(62, 178, 1.2, "#d6304f") + rose(76, 170, 1.3, ROSE) + rose(90, 180, 1.1, "#b01f3e") +
      /* the letter */
      '<g transform="rotate(-8 230 222)"><rect x="170" y="200" width="120" height="44" rx="2" fill="#f7f1e2" stroke="#a0907a" stroke-width="1.5"/>' +
      '<path d="M180 212h70M180 220h86M180 228h60" stroke="#8a8aa0" stroke-width="1.5"/><text x="282" y="240" text-anchor="end" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="11" fill="#b01f3e">yours truly</text></g>' +
      '<path class="ph-pt" d="M300 120q4 -5 8 0q-4 5 -8 0z" fill="' + ROSE + '"/><path class="ph-pt ph-pt2" d="M200 100q4 -5 8 0q-4 5 -8 0z" fill="' + ROSE + '"/><path class="ph-pt ph-pt3" d="M360 90q4 -5 8 0q-4 5 -8 0z" fill="#d6304f"/>',
      sky("ph4", "#0d0b24", "#3a2556"));
  }

  /* 5. Anaheim Blvd and Santa Ana St, Downtown Anaheim: green signs, PHORA tagged on the wall, the cream 1919 Packing House with its red-tile roof and big windows behind, palms, cars rolling by */
  function phcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#ph5)"/>' +
      /* Packing House: long cream building, red tile roof, tall arched windows, rooftop sign frame */
      '<rect x="70" y="58" width="270" height="86" fill="#efe4c8"/><path d="M62 60l18 -18h250l18 18z" fill="#b5523a"/>' +
      Array.from({ length: 14 }, (_, i) => '<path d="M' + (82 + i * 18) + ' 44l-4 16" stroke="#8e3a26" stroke-width="1.2"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<path class="' + (i % 3 ? "" : "ph-glow") + '" d="M' + (86 + i * 31) + ' 132v-36q9 -12 18 0v36z" fill="#ffd98a" opacity=".85"/>').join("") +
      '<rect x="70" y="138" width="270" height="6" fill="#d8caa6"/>' +
      '<path d="M150 42v-16h110v16" stroke="#5a5048" stroke-width="2" fill="none"/><rect x="156" y="28" width="98" height="12" fill="#3a3430"/><text x="205" y="38" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">PACKING HOUSE</text>' +
      [20, 372].map(x => '<path d="M' + x + ' 144q2 -50 0 -90" stroke="#5a4a3a" stroke-width="3" fill="none"/><path d="M' + x + ' 54q-16 -2 -22 8M' + x + ' 54q16 -4 22 6M' + x + ' 54q-10 -12 -20 -10M' + x + ' 54q12 -12 20 -8" stroke="#2f5a3a" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") +
      /* street + cars */
      '<rect x="0" y="144" width="400" height="22" fill="#4a4a50"/><path d="M0 155h400" stroke="#f2c200" stroke-width="1.5" stroke-dasharray="14 10"/>' +
      '<g class="ph-car"><rect x="0" y="146" width="44" height="12" rx="4" fill="' + MOON + '"/><circle cx="10" cy="159" r="3.5" fill="#111"/><circle cx="34" cy="159" r="3.5" fill="#111"/></g>' +
      '<g class="ph-car ph-car2"><rect x="0" y="146" width="40" height="12" rx="4" fill="' + ROSE + '"/><circle cx="9" cy="159" r="3.5" fill="#111"/><circle cx="31" cy="159" r="3.5" fill="#111"/></g>' +
      /* the wall */
      '<rect x="0" y="166" width="300" height="70" fill="#d9c9b0"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (174 + i * 8) + 'h300" stroke="#cbbb9f" stroke-width="1"/>').join("") +
      tag("PHORA", 14, 218, 44, ROSE, -6) + tag("ANAHEIM", 194, 196, 20, MOON, -4) + tag("STAY TRUE", 190, 226, 17, GOLD, -3) +
      '<rect x="0" y="236" width="400" height="24" fill="#8e8a82"/><rect x="0" y="234" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="336" y="150" width="6" height="86" fill="#2f2f2f"/>' + sign(296, 150, 92, "Anaheim Blvd") + sign(292, 176, 100, "Santa Ana St"),
      sky("ph5", "#ff9a6b", "#ffe0a8"));
  }

  window.SCENES = { phstation: phstation, phtattoo: phtattoo, phwall: phwall, phmoon: phmoon, phcorner: phcorner };
})();
