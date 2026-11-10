/* Olivia Rodrigo game (GENRES: POP; region: LOS ANGELES + SOCAL; raised in Temecula in southwest Riverside County, went to
   Dorothy McElhinney Middle School in Murrieta, where she sang in the choir, before moving to Los Angeles at 12).
   Rooms: Riverside Transit Agency Route 24 pulling up in Old Town Temecula, hot-air balloons over the Temecula wine country,
   the middle school choir room in Murrieta, the "drivers license" suburbs at night (red lights, stop signs, white cars), and
   Old Town Front St at Main St with the Old Town ironwork arch behind.
   CSS classes prefixed "olr" (the page's anim-train is kept for the bus). No logos (no RTA mark), no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes olrTw{0%,100%{opacity:1}50%{opacity:.25}}.olrTw{animation:olrTw 1.7s ease-in-out infinite}.olrT2{animation-delay:.55s}.olrT3{animation-delay:1.1s}' +
    '@keyframes olrFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.olrFloat{animation:olrFloat 4s ease-in-out infinite}.olrF2{animation-delay:-1.3s}.olrF3{animation-delay:-2.6s}' +
    '@keyframes olrFlame{0%,100%{opacity:1}50%{opacity:.3}}.olrFlame{animation:olrFlame .5s ease-in-out infinite}' +
    '@keyframes olrNote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(14px,-46px);opacity:0}}.olrNote{animation:olrNote 2.8s ease-out infinite}.olrN2{animation-delay:.9s}.olrN3{animation-delay:1.8s}' +
    '@keyframes olrBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.olrBob{animation:olrBob .9s ease-in-out infinite}.olrB2{animation-delay:.45s}' +
    '@keyframes olrLight{0%,40%{fill:#ff3b3b}45%,85%{fill:#3a1010}90%,100%{fill:#ff3b3b}}.olrRed{animation:olrLight 4s linear infinite}' +
    '@keyframes olrLight2{0%,40%{fill:#103a18}45%,85%{fill:#3bff6a}90%,100%{fill:#103a18}}.olrGrn{animation:olrLight2 4s linear infinite}' +
    '@keyframes olrDrive{0%{transform:translateX(-140px)}100%{transform:translateX(520px)}}.olrDrive{animation:olrDrive 7s linear infinite}' +
    '@keyframes olrGlow{0%,100%{opacity:.5}50%{opacity:1}}.olrGlow{animation:olrGlow 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const PURPLE = "#8e5ad6", LILAC = "#c9a7ff", PINK = "#ff8fb8", GOLD = "#e9c46a", GREEN = "#1f6b45", RTABLUE = "#1d4f9a", RTAGRN = "#3aa35a";
  const stars = (n, y0, y1) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = (i * 67 + 29) % 400, y = y0 + ((i * 43) % (y1 - y0));
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + (i % 3 ? 1 : 1.5) + '" fill="#fff" class="olrTw' + (i % 3 === 1 ? ' olrT2' : i % 3 === 2 ? ' olrT3' : '') + '"/>';
    }
    return s;
  };
  const palm = (x, base, h) => '<path d="M' + x + ' ' + base + 'q4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#5a4030" stroke-width="4" fill="none"/>' +
    '<g fill="#2f5a34" transform="translate(' + (x + 2) + ' ' + (base - h) + ')"><path d="M0 0q-18 -4 -26 8q12 -6 26 -8z"/><path d="M0 0q18 -4 26 8q-12 -6 -26 -8z"/><path d="M0 0q-12 -14 -24 -10q14 0 24 10z"/><path d="M0 0q12 -14 24 -10q-14 0 -24 10z"/></g>';
  /* an Old West false-front storefront */
  const front = (x, w, h, base, col, trim) =>
    '<path d="M' + x + ' ' + base + 'v' + (-h) + 'h' + w + 'v' + h + 'z" fill="' + col + '"/>' +
    '<rect x="' + (x - 2) + '" y="' + (base - h) + '" width="' + (w + 4) + '" height="5" fill="' + trim + '"/>' +
    '<rect x="' + (x + 6) + '" y="' + (base - h + 12) + '" width="' + (w / 2 - 9) + '" height="16" fill="#ffe7a0" opacity=".8"/><rect x="' + (x + w / 2 + 3) + '" y="' + (base - h + 12) + '" width="' + (w / 2 - 9) + '" height="16" fill="#ffe7a0" opacity=".8"/>' +
    '<rect x="' + (x + w / 2 - 7) + '" y="' + (base - 24) + '" width="14" height="24" fill="#3a2414"/>';
  const balloon = (x, y, s, c1, c2, cls) =>
    '<g class="olrFloat' + (cls || '') + '"><path d="M' + x + ' ' + (y + 30 * s) + 'q' + (-26 * s) + ' ' + (-14 * s) + ' ' + (-26 * s) + ' ' + (-36 * s) + 'a' + (26 * s) + ' ' + (26 * s) + ' 0 0 1 ' + (52 * s) + ' 0q0 ' + (22 * s) + ' ' + (-26 * s) + ' ' + (36 * s) + 'z" fill="' + c1 + '"/>' +
    '<path d="M' + x + ' ' + (y + 30 * s) + 'q' + (-10 * s) + ' ' + (-14 * s) + ' ' + (-10 * s) + ' ' + (-36 * s) + 'q0 ' + (-24 * s) + ' ' + (10 * s) + ' ' + (-26 * s) + 'q' + (10 * s) + ' ' + (2 * s) + ' ' + (10 * s) + ' ' + (26 * s) + 'q0 ' + (22 * s) + ' ' + (-10 * s) + ' ' + (36 * s) + 'z" fill="' + c2 + '"/>' +
    '<path d="M' + (x - 5 * s) + ' ' + (y + 31 * s) + 'l2 ' + (8 * s) + 'M' + (x + 5 * s) + ' ' + (y + 31 * s) + 'l-2 ' + (8 * s) + '" stroke="#5a3a24" stroke-width="1"/>' +
    '<rect x="' + (x - 4 * s) + '" y="' + (y + 38 * s) + '" width="' + (8 * s) + '" height="' + (6 * s) + '" fill="#8a5a2a"/>' +
    '<circle cx="' + x + '" cy="' + (y + 33 * s) + '" r="' + (1.6 * s) + '" fill="#ffb000" class="olrFlame"/></g>';

  /* 1. RTA Route 24 pulling up at the Old Town Temecula stop, the wooden false fronts behind */
  function olrstation() {
    let wins = "";
    for (let i = 0; i < 7; i++) wins += '<rect x="' + (52 + i * 30) + '" y="140" width="24" height="26" rx="2" fill="#24303a"/>';
    const bus = '<g class="anim-train">' +
      '<rect x="36" y="128" width="256" height="72" rx="10" fill="#f4f4f0" stroke="#7d828a" stroke-width="2"/>' + wins +
      '<rect x="266" y="136" width="22" height="44" rx="2" fill="#24303a"/>' +
      '<path d="M36 176h256v6H36z" fill="' + RTABLUE + '"/><path d="M36 182h256v5H36z" fill="' + RTAGRN + '"/>' +
      '<rect x="218" y="131" width="46" height="8" rx="1" fill="#111"/><text x="241" y="137.5" text-anchor="middle" ' + F + ' font-size="6" fill="#ffb000">24 OLD TOWN</text>' +
      '<rect x="194" y="142" width="22" height="54" fill="#cfd4d8" stroke="#7d828a"/>' +
      '<circle cx="82" cy="202" r="11" fill="#222"/><circle cx="82" cy="202" r="4" fill="#888"/><circle cx="246" cy="202" r="11" fill="#222"/><circle cx="246" cy="202" r="4" fill="#888"/>' +
      '<rect x="288" y="184" width="6" height="8" rx="1" fill="#ffe08a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#olrs1)"/>' +
      '<path d="M0 90q80 -36 170 -24q90 12 140 -6q50 -14 90 6v40H0z" fill="#b89a6a"/><path d="M0 104q100 -20 200 -12t200 -4v30H0z" fill="#9a8a5a"/>' +
      /* Old Town false fronts */
      front(0, 70, 74, 136, "#8a5a3a", "#5a3a24") + front(74, 84, 88, 136, "#b3202a", "#6a1414") + front(162, 66, 70, 136, "#c9a77a", "#7a5a3a") +
      front(232, 90, 92, 136, "#6a7a5a", "#3a4a2a") + front(326, 74, 78, 136, "#a5553f", "#6a2a1a") +
      '<rect x="0" y="122" width="400" height="14" fill="#6a4a2a"/><path d="M0 122h400" stroke="#3a2414" stroke-width="2"/>' +
      [10, 70, 130, 190, 250, 310, 370].map(x => '<rect x="' + x + '" y="108" width="4" height="28" fill="#3a2414"/>').join("") +
      '<rect x="0" y="136" width="400" height="60" fill="#a7a296"/>' +
      '<rect x="0" y="196" width="400" height="10" fill="#b8b2a6"/><rect x="0" y="206" width="400" height="54" fill="#4c4d52"/><path d="M0 226h400" stroke="#f0d24a" stroke-width="2" stroke-dasharray="18 12"/>' +
      /* bus stop flag on its pole */
      '<rect x="338" y="128" width="4" height="72" fill="#5a5f66"/><rect x="322" y="116" width="36" height="28" rx="3" fill="' + RTABLUE + '" stroke="#fff" stroke-width="1.5"/><text x="340" y="135" text-anchor="middle" ' + F + ' font-size="13" fill="#fff">24</text>' +
      bus +
      '<rect x="46" y="220" width="308" height="32" rx="3" fill="#111" stroke="#555" stroke-width="1.5"/>' +
      '<circle cx="66" cy="236" r="11" fill="' + RTABLUE + '"/><text x="66" y="240.5" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">24</text>' +
      '<text x="210" y="242" text-anchor="middle" ' + F + ' font-size="16" fill="#fff">Old Town Temecula</text>',
      sky("olrs1", "#7ab8e8", "#f6dcb0"));
  }

  /* 2. Hot-air balloons rising over the Temecula wine country at sunrise, rows of vines below */
  function olrballoons() {
    let vines = "";
    for (let r = 0; r < 7; r++) vines += '<path d="M' + (-20 + r * 4) + ' ' + (176 + r * 12) + 'q210 -' + (8 + r) + ' 440 0" stroke="' + (r % 2 ? "#4a7a3a" : "#3a6a2e") + '" stroke-width="5" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#olrs2)"/>' +
      '<circle cx="300" cy="150" r="30" fill="#ffd27a" opacity=".9"/>' +
      '<path d="M0 150q60 -40 140 -30q60 8 120 -18q80 -30 140 10v38H0z" fill="#8a6aa0" opacity=".7"/>' +
      '<path d="M0 166q100 -26 200 -16t200 -6v26H0z" fill="#7a8a5a"/>' +
      balloon(90, 40, 1.1, PURPLE, LILAC, '') + balloon(210, 70, .8, PINK, "#ffd0e0", ' olrF2') + balloon(320, 30, .9, GOLD, "#fff0b8", ' olrF3') + balloon(150, 110, .5, "#e8682a", "#ffc08a", ' olrF2') +
      '<rect x="0" y="168" width="400" height="92" fill="#6a8a4a"/>' + vines +
      /* a winery barn on the hill */
      '<path d="M30 168v-22l22 -14l22 14v22z" fill="#e8dcc0" stroke="#7a6a4a" stroke-width="1.5"/><path d="M26 148l26 -18l26 18" fill="none" stroke="#a5553f" stroke-width="4"/>',
      sky("olrs2", "#6a7ac0", "#ffc8a0"));
  }

  /* 3. The middle school choir room in Murrieta: risers, piano, music stands, notes floating up */
  function olrchoir() {
    let risers = "";
    for (let r = 0; r < 3; r++) risers += '<path d="M' + (150 - r * 30) + ' ' + (200 - r * 22) + 'h' + (220 + r * 60) + 'v22H' + (150 - r * 30) + 'z" fill="' + (r % 2 ? "#8a8a96" : "#a0a0ac") + '" stroke="#5a5a66"/>';
    let chairs = "";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 6 + r; c++) chairs += '<rect x="' + (160 - r * 30 + c * 34) + '" y="' + (184 - r * 22) + '" width="14" height="14" rx="2" fill="' + PURPLE + '" opacity=".85"/>';
    const note = (x, y, cls) => '<g class="olrNote' + cls + '"><circle cx="' + x + '" cy="' + y + '" r="4" fill="' + LILAC + '"/><path d="M' + (x + 4) + ' ' + y + 'v-16l8 4" stroke="' + LILAC + '" stroke-width="2" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#e6e0d2"/>' +
      '<rect x="0" y="0" width="400" height="140" fill="#d8d0bc"/><path d="M0 140h400" stroke="#b8ae98" stroke-width="3"/>' +
      /* whiteboard with a staff and a treble line */
      '<rect x="120" y="20" width="200" height="80" rx="3" fill="#fbfbf6" stroke="#8a8a8a" stroke-width="3"/>' +
      '<path d="M134 44h172M134 52h172M134 60h172M134 68h172M134 76h172" stroke="#3a3a3a" stroke-width="1"/>' +
      '<g fill="' + PURPLE + '"><circle cx="170" cy="64" r="4"/><circle cx="200" cy="56" r="4"/><circle cx="230" cy="60" r="4"/><circle cx="260" cy="48" r="4"/></g>' +
      '<text x="220" y="94" text-anchor="middle" ' + F + ' font-size="10" fill="#3a3a3a">CHOIR · WARM UPS</text>' +
      '<rect x="20" y="30" width="70" height="56" rx="3" fill="#bfe0f2" stroke="#e8e2d2" stroke-width="5"/><path d="M55 30v56M20 58h70" stroke="#e8e2d2" stroke-width="3"/>' +
      risers + chairs +
      /* the upright piano */
      '<rect x="14" y="146" width="96" height="70" rx="3" fill="#3a2414"/><rect x="18" y="186" width="88" height="10" fill="#f4f4f0"/>' +
      [22, 30, 42, 50, 58, 70, 78, 90, 98].map(x => '<rect x="' + x + '" y="186" width="4" height="6" fill="#111"/>').join("") +
      '<rect x="30" y="152" width="64" height="26" fill="#5a3a24"/>' +
      /* music stand */
      '<path d="M120 236v-56M110 236h20" stroke="#333" stroke-width="3"/><rect x="104" y="166" width="32" height="20" fill="#333"/><rect x="108" y="168" width="24" height="15" fill="#fff"/>' +
      note(140, 120, '') + note(240, 110, ' olrN2') + note(320, 124, ' olrN3') +
      '<rect x="0" y="222" width="400" height="38" fill="#c4b49a"/><path d="M0 240h400" stroke="#ae9e84" stroke-width="2"/>',
      "");
  }

  /* 4. The suburbs at night: red lights, stop signs, white cars, front yards, a car driving by */
  function olrsuburbs() {
    const house = (x, col, roof) => '<path d="M' + x + ' 160v-40l36 -26l36 26v40z" fill="' + col + '"/><path d="M' + (x - 4) + ' 122l40 -30l40 30" fill="none" stroke="' + roof + '" stroke-width="5"/>' +
      '<rect x="' + (x + 12) + '" y="126" width="14" height="12" fill="#ffd98a" class="olrGlow"/><rect x="' + (x + 46) + '" y="126" width="14" height="12" fill="#ffd98a"/><rect x="' + (x + 30) + '" y="138" width="12" height="22" fill="#3a2a2a"/>';
    const car = '<g class="olrDrive"><rect x="0" y="206" width="96" height="22" rx="6" fill="#f4f4f6"/><path d="M18 206l12 -14h36l12 14z" fill="#e8e8ee"/><rect x="34" y="194" width="14" height="10" fill="#3a4a5a"/><rect x="52" y="194" width="14" height="10" fill="#3a4a5a"/>' +
      '<circle cx="22" cy="230" r="8" fill="#222"/><circle cx="74" cy="230" r="8" fill="#222"/><rect x="92" y="212" width="5" height="6" fill="#fff6c2"/><rect x="0" y="212" width="4" height="6" fill="#ff3b3b"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#olrs4)"/>' + stars(20, 4, 70) +
      '<circle cx="330" cy="40" r="13" fill="#f2e6c0"/><circle cx="337" cy="36" r="12" fill="#1c1640"/>' +
      '<path d="M0 120q100 -30 200 -18t200 -10v40H0z" fill="#2a2450"/>' +
      house(10, "#8a7aa0", "#4a3a5a") + house(130, "#a08aa0", "#5a3a4a") + house(250, "#7a8aa0", "#3a4a5a") +
      '<rect x="0" y="160" width="400" height="30" fill="#2e4a2e"/><rect x="0" y="190" width="400" height="10" fill="#8a8a90"/>' +
      '<rect x="0" y="200" width="400" height="60" fill="#2a2a30"/><path d="M0 240h400" stroke="#f0d24a" stroke-width="2" stroke-dasharray="18 12"/>' +
      /* traffic light */
      '<rect x="356" y="70" width="4" height="120" fill="#555"/><rect x="346" y="70" width="24" height="56" rx="4" fill="#111"/>' +
      '<circle cx="358" cy="84" r="7" class="olrRed"/><circle cx="358" cy="100" r="7" fill="#3a3010"/><circle cx="358" cy="116" r="7" class="olrGrn"/>' +
      /* stop sign */
      '<rect x="40" y="140" width="3" height="54" fill="#888"/><path d="M34 120h15l10 10v15l-10 10H34l-10 -10V130z" fill="#c8102e" stroke="#fff" stroke-width="2"/><text x="41.5" y="141.5" text-anchor="middle" ' + F + ' font-size="8" fill="#fff">STOP</text>' +
      car,
      sky("olrs4", "#0e0a2a", "#3a2a6a"));
  }

  /* 5. Old Town Front St at Main St: a tagged wall, the Old Town ironwork arch and the hills behind */
  function olrcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#olrs5)"/>' + stars(14, 4, 50) +
      '<path d="M0 120q80 -40 170 -30q90 10 150 -12q50 -16 80 10v52H0z" fill="#4a3a5a"/>' +
      /* the ironwork arch over Front St */
      '<rect x="168" y="62" width="8" height="80" fill="#2a2a2e"/><rect x="304" y="62" width="8" height="80" fill="#2a2a2e"/>' +
      '<path d="M172 70q68 -40 136 0" stroke="#2a2a2e" stroke-width="7" fill="none"/><path d="M172 84q68 -32 136 0" stroke="#2a2a2e" stroke-width="3" fill="none"/>' +
      '<g stroke="#2a2a2e" stroke-width="2">' + [190, 206, 222, 240, 258, 274, 290].map(x => '<path d="M' + x + ' 82v-' + (x > 220 && x < 260 ? 26 : 16) + '"/>').join("") + '</g>' +
      '<text x="240" y="102" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="11" fill="' + GOLD + '" class="olrGlow">OLD TOWN</text>' +
      palm(120, 140, 70) +
      /* the tagged wall */
      '<rect x="0" y="140" width="400" height="66" fill="#7a5a4a"/><path d="M0 156h400M0 172h400M0 188h400" stroke="#6a4c3e" stroke-width="1"/>' +
      tag("OLIVIA", 70, 192, 38, PURPLE, -4) +
      tag("LIVIES", 248, 170, 18, PINK, -6) +
      tag("LIV", 330, 200, 22, "#fff", -3) +
      tag("GOOD 4 U", 236, 202, 15, GOLD, -2) +
      '<rect x="0" y="206" width="400" height="8" fill="#b8b2a6"/><rect x="0" y="214" width="400" height="46" fill="#3d3f45"/>' +
      '<path d="M0 238h400" stroke="#f0d24a" stroke-width="2" stroke-dasharray="16 14"/>' +
      /* green street signs */
      '<rect x="40" y="40" width="5" height="174" fill="#5a5f66"/>' +
      '<rect x="6" y="38" width="136" height="22" rx="3" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/><text x="74" y="53.5" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">OLD TOWN FRONT ST</text>' +
      '<rect x="6" y="62" width="84" height="22" rx="3" fill="' + GREEN + '" stroke="#fff" stroke-width="1.5"/><text x="48" y="77.5" text-anchor="middle" ' + F + ' font-size="11" fill="#fff">MAIN ST</text>',
      sky("olrs5", "#140c2a", "#6a3a6a"));
  }

  window.SCENES = { olrstation, olrballoons, olrchoir, olrsuburbs, olrcorner };
})();
