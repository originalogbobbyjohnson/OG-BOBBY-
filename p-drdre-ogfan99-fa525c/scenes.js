/* Compton opening scenes for the Dr. Dre PRODUCER game: G-funk, the Wreckin' Cru, the Doctor's beats.
   The A Line pulling into Compton station under the palms, Eve After Dark where the Wreckin' Cru spun, lowriders hopping on
   Crenshaw Blvd, the El Mirage dry lake party from "California Love", and the corner of Compton Blvd and Willowbrook Av
   with the downtown LA skyline behind. 400 x 260 each. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.7s}' +
    '@keyframes carR{from{transform:translateX(-160px)}to{transform:translateX(560px)}}' +
    '@keyframes carL{from{transform:translateX(560px)}to{transform:translateX(-160px)}}' +
    '.carR{animation:carR 6s linear infinite}.carL{animation:carL 7s linear infinite}.d2{animation-delay:-3s}' +
    '@keyframes hop{0%,100%{transform:translateY(0)}20%{transform:translateY(-34px) rotate(-6deg)}40%{transform:translateY(0)}}' +
    '.hop{transform-box:fill-box;transform-origin:20% 100%;animation:hop 1.6s ease-in-out infinite}' +
    '@keyframes sway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}' +
    '.palm{transform-box:fill-box;transform-origin:50% 100%;animation:sway 3.4s ease-in-out infinite}.p2{animation-delay:-1.7s}' +
    '@keyframes blink{0%,100%{opacity:.25}50%{opacity:1}}' +
    '.blk{animation:blink 1.4s ease-in-out infinite}.b2{animation-delay:-.45s}.b3{animation-delay:-.9s}' +
    '@keyframes spin{to{transform:rotate(360deg)}}.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.8s linear infinite}' +
    '@keyframes dust{0%{transform:translateX(0);opacity:.7}100%{transform:translateX(-120px);opacity:0}}' +
    '.dust{animation:dust 1.6s linear infinite}.u2{animation-delay:-.8s}' +
    '@keyframes buggy{from{transform:translateX(460px)}to{transform:translateX(-200px)}}.bug{animation:buggy 6s linear infinite}.bug2{animation-delay:-3s}' +
    '@keyframes shimmer{0%,100%{opacity:.25}50%{opacity:.55}}.shim{animation:shimmer 2.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls, c) => { c = c || "#10141c"; let fr = ""; [-70, -35, 0, 35, 70, 110, -110].forEach(a => fr += '<path d="M0 0q' + (Math.sin(a * Math.PI / 180) * 18).toFixed(1) + ' -14 ' + (Math.sin(a * Math.PI / 180) * 34).toFixed(1) + ' ' + (8 - Math.cos(a * Math.PI / 180) * 10).toFixed(1) + '" stroke="' + c + '" stroke-width="5" fill="none" stroke-linecap="round"/>');
    return '<g class="palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 -' + (h / 2) + ' -2 -' + h + '" stroke="' + c + '" stroke-width="5" fill="none"/><g transform="translate(' + (x - 2) + ' ' + (base - h) + ')">' + fr + '</g></g>'; };
  const lowrider = (x, y, c, cls) => '<g class="' + (cls || "") + '"><path d="M' + x + ' ' + (y + 14) + 'h96l-6-12h-18l-12-12h-34l-12 12h-12z" fill="' + c + '" stroke="#111" stroke-width="1.5"/>' +
    '<rect x="' + (x + 36) + '" y="' + (y - 6) + '" width="14" height="8" fill="#bcd3e6"/><rect x="' + (x + 52) + '" y="' + (y - 6) + '" width="12" height="8" fill="#bcd3e6"/>' +
    '<path d="M' + x + ' ' + (y + 10) + 'h96" stroke="#e8e8e8" stroke-width="1.5"/>' +
    '<circle cx="' + (x + 20) + '" cy="' + (y + 16) + '" r="8" fill="#111"/><circle cx="' + (x + 20) + '" cy="' + (y + 16) + '" r="5" fill="#d9d9d9"/>' +
    '<circle cx="' + (x + 76) + '" cy="' + (y + 16) + '" r="8" fill="#111"/><circle cx="' + (x + 76) + '" cy="' + (y + 16) + '" r="5" fill="#d9d9d9"/></g>';
  const BLUE = "#0072bc", GOLD = "#f2c14e", TEAL = "#2ec4b6", PINK = "#ff5fa2", SUN = "#ff8a3d";

  /* 1. The A Line light rail pulling into Compton station, at street level under the palms, sunset over the Hub City */
  function station() {
    let windows = "";
    for (let x = 30; x < 290; x += 40) windows += '<rect x="' + x + '" y="134" width="26" height="22" rx="3" fill="#1d2b3a"/><rect x="' + (x + 2) + '" y="136" width="22" height="9" fill="#ffd6a0" opacity=".55"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#d1)"/>' +
      '<circle cx="320" cy="122" r="34" fill="#ffb347" opacity=".9"/>' +
      '<g fill="#3a1f3d"><rect x="0" y="104" width="80" height="40"/><rect x="90" y="96" width="50" height="48"/><rect x="230" y="108" width="70" height="36"/><rect x="340" y="100" width="60" height="44"/></g>' +
      palm(30, 150, 96, "") + palm(372, 150, 110, "p2") + palm(196, 150, 84, "p2") +
      /* canopy and the black station sign */
      '<rect x="0" y="52" width="400" height="10" fill="#4a4f57"/><rect x="40" y="62" width="5" height="112" fill="#4a4f57"/><rect x="355" y="62" width="5" height="112" fill="#4a4f57"/>' +
      '<rect x="110" y="16" width="180" height="36" rx="3" fill="#111"/>' +
      '<circle cx="132" cy="34" r="11" fill="' + BLUE + '"/><text x="132" y="39.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#fff">A</text>' +
      '<text x="152" y="40" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="18" fill="#fff">Compton</text>' +
      /* the light rail train: silver body, blue band */
      '<g class="anim-train">' +
        '<path d="M8 124h270q22 0 28 22v32H8z" fill="#d7dbe0" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="160" width="298" height="6" fill="' + BLUE + '"/>' + windows +
        '<rect x="282" y="130" width="18" height="24" rx="3" fill="#1d2b3a"/><circle cx="300" cy="170" r="4" fill="#fff6c2"/>' +
        '<circle cx="268" cy="146" r="9" fill="' + BLUE + '"/><text x="268" y="150.5" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">A</text>' +
        '<path d="M60 124l20-18M220 124l20-18" stroke="#333" stroke-width="2"/>' +
      '</g>' +
      '<path d="M0 104h400" stroke="#333" stroke-width="1.5"/>' +
      '<rect x="0" y="178" width="400" height="8" fill="#e8c547"/><rect x="0" y="186" width="400" height="20" fill="#8c8478"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#2a2a30"/><path d="M0 232h400" stroke="#f2f2f2" stroke-width="1.5" stroke-dasharray="18 14"/>' +
      lowrider(0, 212, "#6a2c91", "carR") + lowrider(0, 236, "#c0392b", "carR d2"),
      sky("d1", "#3b1f5c", "#ff7b54"));
  }

  /* 2. Eve After Dark in Compton, where the World Class Wreckin' Cru spun: neon sign, two turntables spinning in the window */
  function club() {
    return svg(
      '<rect width="400" height="260" fill="url(#d2)"/>' + stars(24) +
      palm(26, 214, 120, "") + palm(380, 214, 132, "p2") +
      '<rect x="60" y="74" width="280" height="140" fill="#2b1a33" stroke="#120a16" stroke-width="3"/>' +
      '<rect x="60" y="74" width="280" height="10" fill="#120a16"/>' +
      /* neon sign */
      '<rect x="96" y="30" width="208" height="40" rx="8" fill="#140c18" stroke="' + PINK + '" stroke-width="3" class="flk"/>' +
      '<text x="200" y="58" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="19" fill="' + TEAL + '" class="flk flk2">EVE AFTER DARK</text>' +
      '<path d="M180 70v4M220 70v4" stroke="#555" stroke-width="2"/>' +
      /* the window: DJ booth with two decks and a mixer */
      '<rect x="92" y="98" width="216" height="82" fill="#0d0710" stroke="' + PINK + '" stroke-width="2"/>' +
      '<rect x="110" y="140" width="180" height="30" rx="4" fill="#3a3a44"/>' +
      '<circle class="spin" cx="146" cy="150" r="17" fill="#111" stroke="#555" stroke-width="2"/><circle cx="146" cy="150" r="5" fill="' + PINK + '"/><rect x="144" y="134" width="4" height="4" fill="#ddd"/>' +
      '<circle class="spin" cx="254" cy="150" r="17" fill="#111" stroke="#555" stroke-width="2"/><circle cx="254" cy="150" r="5" fill="' + TEAL + '"/><rect x="252" y="134" width="4" height="4" fill="#ddd"/>' +
      '<rect x="184" y="140" width="32" height="22" rx="2" fill="#22222a"/><rect class="blk" x="190" y="146" width="4" height="10" fill="' + GOLD + '"/><rect class="blk b2" x="198" y="144" width="4" height="12" fill="' + GOLD + '"/><rect class="blk b3" x="206" y="148" width="4" height="8" fill="' + GOLD + '"/>' +
      '<g class="blk"><path d="M100 104l40 30" stroke="' + PINK + '" stroke-width="3" opacity=".6"/></g><g class="blk b2"><path d="M300 104l-40 30" stroke="' + TEAL + '" stroke-width="3" opacity=".6"/></g>' +
      '<rect x="178" y="184" width="44" height="30" fill="#140c18" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<rect x="0" y="214" width="400" height="10" fill="#8c8478"/><rect x="0" y="224" width="400" height="36" fill="#1e1e24"/>' +
      lowrider(0, 228, "#1a7f6e", "carR"),
      sky("d2", "#0a0620", "#4a1d5c"));
  }

  /* 3. Sunday cruise on Crenshaw Blvd: a candy-paint lowrider hitting the switches, palms swaying, the hills behind */
  function cruise() {
    return svg(
      '<rect width="400" height="260" fill="url(#d3)"/>' +
      '<circle cx="80" cy="70" r="26" fill="#fff1b8" opacity=".9"/>' +
      '<path d="M0 150q70-40 140-14t130-20 130 10v30H0z" fill="#7a5a74" opacity=".7"/>' +
      palm(40, 190, 120, "") + palm(130, 190, 140, "p2") + palm(280, 190, 126, "") + palm(360, 190, 150, "p2") +
      '<rect x="0" y="176" width="400" height="14" fill="#9a9183"/><rect x="0" y="190" width="400" height="70" fill="#34343c"/>' +
      '<path d="M0 226h400" stroke="#f2c14e" stroke-width="2" stroke-dasharray="22 14"/>' +
      sign(300, 112, 96, "Crenshaw Blvd") + '<rect x="346" y="130" width="4" height="46" fill="#333"/>' +
      lowrider(70, 200, "#c2185b", "hop") + lowrider(0, 230, "#2e7dd1", "carL") +
      '<text x="150" y="250" font-family="Anton, Impact, sans-serif" font-size="12" fill="' + GOLD + '" opacity=".9">G-FUNK SUNDAY</text>',
      sky("d3", "#ff9a5a", "#ffd27a"));
  }

  /* 4. El Mirage dry lake, the "California Love" desert party: cracked lakebed, dune buggies kicking up dust, heat shimmer */
  function desert() {
    let cracks = "";
    for (let i = 0; i < 14; i++) { const x = (i * 61) % 400, y = 200 + (i * 17) % 52; cracks += '<path d="M' + x + ' ' + y + 'l14 6l10 -5l12 7" stroke="#b39a73" stroke-width="1.2" fill="none"/>'; }
    const buggy = (cls, y, c) => '<g class="bug ' + cls + '"><path d="M0 ' + y + 'h58l-8-14H14z" fill="' + c + '" stroke="#111" stroke-width="1.5"/><path d="M16 ' + (y - 14) + 'l8-12h18l6 12" stroke="#222" stroke-width="2.5" fill="none"/>' +
      '<circle cx="10" cy="' + (y + 4) + '" r="8" fill="#111"/><circle cx="50" cy="' + (y + 4) + '" r="8" fill="#111"/>' +
      '<g class="dust"><circle cx="70" cy="' + (y + 2) + '" r="8" fill="#e7d3a8"/><circle cx="84" cy="' + (y - 4) + '" r="10" fill="#e7d3a8"/></g><g class="dust u2"><circle cx="76" cy="' + (y + 6) + '" r="7" fill="#e7d3a8"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#d4)"/>' +
      '<circle cx="300" cy="64" r="30" fill="#fff4c9"/>' +
      '<path d="M0 150l40-26 30 14 50-36 46 30 40-20 60 34 50-26 84 30v20H0z" fill="#8a6b5a"/>' +
      '<path d="M0 162l60-14 70 10 90-16 80 14 100-8v24H0z" fill="#a8846a"/>' +
      '<rect x="0" y="176" width="400" height="84" fill="#e3cfa3"/>' + cracks +
      '<rect class="shim" x="0" y="176" width="400" height="10" fill="#fff6dc"/>' +
      /* party stage built from scrap */
      '<rect x="40" y="134" width="110" height="46" fill="#5a4636" stroke="#2a1d14" stroke-width="2"/><rect x="40" y="128" width="110" height="8" fill="#3a2d22"/>' +
      '<rect x="56" y="146" width="20" height="30" fill="#222"/><circle cx="66" cy="156" r="6" fill="#444"/><circle cx="66" cy="170" r="4" fill="#444"/>' +
      '<rect x="114" y="146" width="20" height="30" fill="#222"/><circle cx="124" cy="156" r="6" fill="#444"/><circle cx="124" cy="170" r="4" fill="#444"/>' +
      '<path class="blk" d="M50 128l-10-30M140 128l10-30" stroke="' + SUN + '" stroke-width="3"/>' +
      buggy("", 214, "#c0392b") + buggy("bug2", 240, "#5d6d7e"),
      sky("d4", "#f4a259", "#ffe0a3"));
  }

  /* 5. His corner: green signs at Compton Blvd and Willowbrook Av, DRE on the wall, the downtown LA skyline and palms behind */
  function corner() {
    let stucco = "";
    for (let i = 0; i < 26; i++) stucco += '<circle cx="' + (10 + (i * 37) % 240) + '" cy="' + (76 + (i * 29) % 140) + '" r="1.5" fill="#d9a77a" opacity=".6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#d5)"/>' + stars(10) +
      /* downtown LA: the round-crowned tallest tower, a sail-topped tower, the rest */
      '<g fill="#2a2440"><rect x="262" y="70" width="26" height="150"/><path d="M262 70q13-14 26 0z"/><rect x="292" y="40" width="30" height="180"/><path d="M292 40q15-18 30 0z"/>' +
      '<rect x="326" y="86" width="22" height="134"/><path d="M326 86l22-16v16z"/><rect x="352" y="100" width="30" height="120"/><rect x="384" y="120" width="16" height="100"/></g>' +
      '<circle class="blk" cx="307" cy="28" r="2.5" fill="#ff3b3b"/><circle class="blk b2" cx="275" cy="60" r="2" fill="#ff3b3b"/>' +
      '<g fill="#ffd98a" opacity=".5"><rect x="298" y="70" width="18" height="2"/><rect x="298" y="100" width="18" height="2"/><rect x="298" y="130" width="18" height="2"/><rect x="266" y="110" width="18" height="2"/></g>' +
      palm(250, 220, 150, "p2") + palm(392, 220, 130, "") +
      '<rect x="4" y="70" width="240" height="150" fill="#c9875a"/>' + stucco + '<rect x="4" y="70" width="240" height="8" fill="#8a5636"/>' +
      tag("DRE", 30, 140, 54, TEAL, -7) + tag("COMPTON", 40, 190, 30, GOLD, -4) + tag("G-FUNK", 150, 210, 22, PINK, -8) +
      '<rect x="338" y="60" width="5" height="160" fill="#1d2329"/>' +
      sign(266, 92, 118, "Compton Blvd") + sign(272, 114, 106, "Willowbrook Av") +
      '<rect x="0" y="220" width="400" height="40" fill="#1c1c22"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      lowrider(0, 224, "#6a2c91", "carR"),
      sky("d5", "#1a0f3a", "#ff7b54"));
  }

  window.SCENES = { station, club, cruise, desert, corner };
})();
