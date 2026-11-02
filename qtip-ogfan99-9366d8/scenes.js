/* St. Albans, Queens opening scenes for the Q-Tip game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.4s infinite}' +
    '@keyframes car{from{transform:translateX(440px)}to{transform:translateX(-110px)}}' +
    '.car{animation:car 7s linear infinite}.car2{animation-duration:9s;animation-delay:-4s}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.8s linear infinite}' +
    '@keyframes pump{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}' +
    '.pump{transform-box:fill-box;transform-origin:50% 50%;animation:pump .5s ease-in-out infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(20px,-70px);opacity:0}}' +
    '.note{animation:note 3s linear infinite}.note2{animation-delay:-1s}.note3{animation-delay:-2s}' +
    '@keyframes leaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,140px) rotate(200deg)}}' +
    '.leaf{animation:leaf 6s linear infinite}.leaf2{animation-delay:-2s}.leaf3{animation-delay:-4s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const badge = (x, y, w, label, color) =>
    '<rect x="' + x + '" y="' + (y - 10) + '" width="' + w + '" height="20" rx="4" fill="' + color + '"/><text x="' + (x + w / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" fill="#fff">' + label + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const RED = "#e8392f", GREEN = "#2fb06b", GOLD = "#f5c542";

  /* 1. St. Albans LIRR station: raised platform on the embankment above Linden Blvd, a silver train sliding in */
  function train() {
    let windows = "";
    for (let x = 24; x < 260; x += 44) windows += '<rect x="' + x + '" y="92" width="28" height="20" rx="3" fill="#dfeaf5" opacity=".9"/>';
    let posts = "";
    for (let x = 30; x < 400; x += 90) posts += '<rect x="' + x + '" y="10" width="6" height="64" fill="#7d838b"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gs)"/>' +
      '<path d="M0 6h400v8H0z" fill="#4f5862"/>' + posts +
      '<rect x="40" y="22" width="320" height="40" rx="4" fill="#111"/>' +
      '<text x="54" y="49" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="17" fill="#fff">St. Albans</text>' +
      badge(156, 42, 50, "LIRR", "#0039a6") +
      '<text x="218" y="46" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="9" fill="#fff">WEST HEMPSTEAD BRANCH</text>' +
      '<g class="anim-train">' +
        '<rect x="8" y="80" width="300" height="56" rx="8" fill="#cfd5dc" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="118" width="300" height="6" fill="#0039a6"/><rect x="8" y="124" width="300" height="3" fill="#6a5acd"/>' + windows +
        '<rect x="284" y="92" width="16" height="20" rx="3" fill="#dfeaf5" opacity=".9"/><circle cx="300" cy="130" r="4" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="136" width="400" height="8" fill="#eab308"/>' +
      /* bridge deck over Linden Blvd */
      '<rect x="0" y="144" width="400" height="26" fill="#6e6a62"/><rect x="0" y="144" width="400" height="4" fill="#4a4740"/>' +
      '<rect x="0" y="170" width="70" height="90" fill="#8a8273"/><rect x="330" y="170" width="70" height="90" fill="#8a8273"/>' +
      '<rect x="70" y="170" width="260" height="90" fill="#24262b"/>' +
      '<rect x="70" y="236" width="260" height="24" fill="#3a3d44"/><path d="M70 248h260" stroke="#eab308" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="car"><rect x="0" y="230" width="60" height="16" rx="5" fill="' + RED + '"/><rect x="10" y="224" width="34" height="9" rx="3" fill="#bfe1f5"/><circle cx="14" cy="247" r="4.5" fill="#111"/><circle cx="48" cy="247" r="4.5" fill="#111"/></g>' +
      '<text x="200" y="161" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#f7f3ea" letter-spacing="3">LINDEN BLVD</text>',
      sky("gs", "#ffb36b", "#ffe2b8"));
  }

  /* 2. The St. Albans legends mural under the railroad bridge: jazz horns, a piano keyboard and records painted on the wall */
  function mural() {
    let keys = "";
    for (let x = 60; x < 340; x += 14) keys += '<rect x="' + x + '" y="172" width="13" height="30" fill="#f7f3ea"/>';
    for (let x = 70; x < 336; x += 14) if (((x - 70) / 14) % 7 !== 2 && ((x - 70) / 14) % 7 !== 6) keys += '<rect x="' + x + '" y="172" width="8" height="18" fill="#111"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gm)"/>' +
      /* bridge overhead */
      '<rect x="0" y="0" width="400" height="30" fill="#55524b"/><rect x="0" y="30" width="400" height="6" fill="#3a3832"/>' +
      /* mural wall */
      '<rect x="20" y="40" width="360" height="176" fill="#2a3f7a"/>' +
      '<circle cx="90" cy="90" r="40" fill="' + GOLD + '" opacity=".9"/><circle cx="300" cy="96" r="44" fill="' + RED + '" opacity=".85"/>' +
      '<path d="M20 150q90-40 180-10t180-10v26H20z" fill="' + GREEN + '" opacity=".8"/>' +
      /* saxophone */
      '<path d="M84 60v54q0 24 22 24t22-18l-4-6q-4 14-16 14t-14-14V60z" fill="#e0a92e" stroke="#7a5a10" stroke-width="2"/><rect x="80" y="54" width="10" height="8" fill="#7a5a10"/>' +
      /* trumpet */
      '<path d="M220 92h70l18-12v32l-18-12h-70z" fill="#f2d16b" stroke="#7a5a10" stroke-width="2"/><rect x="242" y="80" width="5" height="12" fill="#7a5a10"/><rect x="254" y="80" width="5" height="12" fill="#7a5a10"/><rect x="266" y="80" width="5" height="12" fill="#7a5a10"/>' +
      /* spinning record */
      '<g class="spin"><circle cx="170" cy="90" r="30" fill="#111"/><circle cx="170" cy="90" r="20" fill="none" stroke="#333" stroke-width="1"/><circle cx="170" cy="90" r="9" fill="' + RED + '"/><rect x="168" y="70" width="4" height="8" fill="' + GOLD + '"/></g>' +
      keys +
      '<text x="200" y="152" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="#f7f3ea" letter-spacing="3">ST. ALBANS LEGENDS</text>' +
      '<g class="note"><text x="120" y="70" font-size="20" fill="#fff">&#9834;</text></g>' +
      '<g class="note note2"><text x="320" y="60" font-size="18" fill="' + GOLD + '">&#9835;</text></g>' +
      /* sidewalk */
      '<rect x="0" y="216" width="400" height="44" fill="#8d8f93"/><rect x="0" y="216" width="400" height="4" fill="#6b6d70"/>',
      sky("gm", "#2b2b30", "#4a4a52"));
  }

  /* 3. Murry Bergtraum High School on Pearl St by the Brooklyn Bridge: the brutalist brick fortress where he and Ali Shaheed met, the bridge's stone tower behind */
  function tudor() {
    let slits = "";
    for (let x = 70; x < 330; x += 24) slits += '<rect x="' + x + '" y="112" width="8" height="38" fill="#2a1e1a"/>';
    let rows = "";
    for (let y = 72; y < 206; y += 7) rows += '<path d="M50 ' + y + 'h300" stroke="#5a2a1e" stroke-width=".7" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gt)"/>' +
      /* the Brooklyn Bridge tower and cables */
      '<path d="M336 36h44v120h-44z" fill="#b8a888"/><path d="M342 60q6-14 12 0v40h-12zM360 60q6-14 12 0v40h-12z" fill="#8fc0e0"/><rect x="332" y="32" width="52" height="6" fill="#a89878"/>' +
      '<path d="M358 38Q260 130 120 140M358 38Q390 70 420 90" stroke="#59616e" stroke-width="2" fill="none"/>' +
      [150, 190, 230, 270].map(x => '<path d="M' + x + ' ' + (140 - (x - 120) * 0.62) + 'V150" stroke="#59616e" stroke-width=".8"/>').join("") +
      /* the school: dark red-brown brick, deep slit windows, the stepped mass */
      '<rect x="50" y="70" width="300" height="136" fill="#7a3426"/>' + rows + '<rect x="90" y="52" width="140" height="20" fill="#6a2c20"/>' + slits +
      '<rect x="50" y="160" width="300" height="10" fill="#5a2418"/><rect x="160" y="170" width="80" height="36" fill="#3a2a22"/>' +
      '<path d="M50 206l40-26h40l-40 26z" fill="#8a3e2e"/>' +
      '<text x="200" y="196" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="7" fill="#f4d58d" letter-spacing="1">MURRY BERGTRAUM H.S.</text>' +
      '<rect x="0" y="206" width="400" height="16" fill="#c9c4b8"/><rect x="0" y="222" width="400" height="38" fill="#3a3d44"/><path d="M0 242h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="car"><rect x="0" y="226" width="66" height="16" rx="5" fill="' + GOLD + '"/><rect x="12" y="220" width="36" height="9" rx="3" fill="#bfe1f5"/><circle cx="16" cy="243" r="4.5" fill="#111"/><circle cx="50" cy="243" r="4.5" fill="#111"/></g>' +
      '<text x="160" y="26" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#2a2016" letter-spacing="2">PEARL ST · BY THE BROOKLYN BRIDGE</text>' +
      tag("TRIBE", 16, 252, 24, GOLD, -4) + tag("THE ABSTRACT", 230, 254, 18, GREEN, -3),
      sky("gt", "#9ed1ef", "#e8f5fb"));
  }

  /* 4. Electric Lady Studios, 52 W 8th St in the Village: the curved brick front and the round door, notes floating out */
  function block() {
    const town = (x, w, c) => { let s = '<rect x="' + x + '" y="60" width="' + w + '" height="146" fill="' + c + '"/>';
      for (let y = 76; y < 170; y += 30) for (let xx = x + 10; xx < x + w - 14; xx += 26) s += '<rect x="' + xx + '" y="' + y + '" width="14" height="20" fill="' + ((xx + y) % 3 ? "#2a2a3a" : "#f4d58d") + '"/>';
      return s; };
    let curve = "";
    for (let y = 92; y < 206; y += 7) curve += '<path d="M128 ' + y + 'q72 -16 144 0" stroke="#7a3a28" stroke-width=".8" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gp)"/>' + stars(12) +
      town(0, 118, "#6a4a3a") + town(282, 118, "#5a4a5a") +
      /* the curved brick front */
      '<path d="M128 206V92q72-26 144 0v114z" fill="#9a4a32"/>' + curve +
      '<path d="M128 92q72-26 144 0" stroke="#5a2a1a" stroke-width="4" fill="none"/>' +
      '<circle cx="200" cy="168" r="26" fill="#2a2018" stroke="#d8c8a8" stroke-width="4"/><circle class="flk" cx="200" cy="168" r="18" fill="#f4d58d" opacity=".35"/><circle cx="212" cy="170" r="2" fill="#d8c8a8"/>' +
      '<rect x="150" y="104" width="100" height="16" fill="#14102a"/><text x="200" y="116" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="8" fill="' + GOLD + '" letter-spacing="1">ELECTRIC LADY</text>' +
      '<g class="note"><text x="170" y="140" font-size="18" fill="' + GOLD + '">&#9834;</text></g><g class="note note2"><text x="220" y="136" font-size="18" fill="#fff">&#9835;</text></g><g class="note note3"><text x="196" y="130" font-size="18" fill="' + GREEN + '">&#9834;</text></g>' +
      '<rect x="0" y="206" width="400" height="14" fill="#8a8478"/><rect x="0" y="220" width="400" height="40" fill="#3a3d44"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>' +
      '<g class="car car2"><rect x="0" y="224" width="66" height="16" rx="5" fill="#f2c200"/><rect x="12" y="218" width="36" height="9" rx="3" fill="#bfe1f5"/><circle cx="16" cy="241" r="4.5" fill="#111"/><circle cx="50" cy="241" r="4.5" fill="#111"/></g>' +
      '<text x="200" y="30" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="16" fill="' + GOLD + '" letter-spacing="2">52 W 8TH ST · GREENWICH VILLAGE</text>' +
      tag("Q-TIP", 16, 200, 26, GOLD, -6) + tag("CAN I KICK IT", 286, 200, 16, RED, -4),
      sky("gp", "#14102a", "#3b2a5a"));
  }

  /* 5. The corner: Linden Blvd and 192nd St in St. Albans, green signs, his name sprayed on the wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gc)"/>' + stars(10) +
      '<rect x="20" y="70" width="380" height="146" fill="#4a5568"/>' +
      '<rect x="20" y="70" width="380" height="8" fill="#2d3748"/>' +
      (function () { let s = ""; for (let y = 86; y < 216; y += 14) s += '<path d="M20 ' + y + 'h380" stroke="#3b4556" stroke-width="1"/>'; return s; })() +
      tag("Q-TIP", 150, 160, 46, GOLD, -5) +
      tag("NATIVE TONGUES", 170, 200, 22, GREEN, -3) +
      tag("CAN I KICK IT", 168, 108, 17, RED, -4) +
      '<rect x="60" y="20" width="6" height="200" fill="#6b7280"/>' +
      '<rect x="0" y="22" width="122" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="61" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">Linden Blvd</text>' +
      '<rect x="6" y="48" width="120" height="22" rx="3" fill="#00703c" stroke="#fff" stroke-width="2"/>' +
      '<text x="66" y="64" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#fff">192nd St</text>' +
      '<rect x="0" y="216" width="400" height="44" fill="#2a2d33"/><path d="M0 238h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="car"><rect x="0" y="222" width="70" height="20" rx="6" fill="' + RED + '"/><rect x="12" y="214" width="40" height="12" rx="4" fill="#bfe1f5"/><circle cx="16" cy="244" r="6" fill="#111"/><circle cx="54" cy="244" r="6" fill="#111"/></g>' +
      '<text x="390" y="254" text-anchor="end" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="9" fill="#f7f3ea" letter-spacing="2">ST. ALBANS, QUEENS</text>',
      sky("gc", "#141a33", "#3a4a78"));
  }

  window.SCENES = { train, mural, tudor, block, corner };
})();
