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

  /* 3. Addisleigh Park: the Tudor-style houses with white stucco, dark beams and steep roofs, big old trees */
  function tudor() {
    const house = (x, w, roof) =>
      '<rect x="' + x + '" y="110" width="' + w + '" height="96" fill="#efe6d2"/>' +
      '<path d="M' + (x - 8) + ' 112l' + (w / 2 + 8) + '-' + roof + ' ' + (w / 2 + 8) + ' ' + roof + 'z" fill="#5a3a2a"/>' +
      '<path d="M' + x + ' 140h' + w + 'M' + (x + w / 3) + ' 110v96M' + (x + 2 * w / 3) + ' 110v96M' + x + ' 110l' + (w / 3) + ' 30M' + (x + w) + ' 110l-' + (w / 3) + ' 30" stroke="#4a2e1e" stroke-width="4"/>' +
      '<rect x="' + (x + 10) + '" y="150" width="20" height="24" fill="#f4d58d" class="flk"/><rect x="' + (x + w - 30) + '" y="150" width="20" height="24" fill="#f4d58d"/>' +
      '<rect x="' + (x + w / 2 - 10) + '" y="176" width="20" height="30" rx="8" fill="#5a3a2a"/>' +
      '<rect x="' + (x + w - 26) + '" y="' + (112 - roof + 10) + '" width="10" height="' + (roof - 10) + '" fill="#9a4b34"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gt)"/>' +
      '<circle cx="40" cy="120" r="44" fill="#3d7a3a"/><circle cx="370" cy="110" r="48" fill="#356d33"/>' +
      house(40, 140, 70) + house(220, 150, 76) +
      '<rect x="0" y="206" width="400" height="16" fill="#5aa04e"/><rect x="0" y="222" width="400" height="10" fill="#c9c4b8"/>' +
      '<rect x="0" y="232" width="400" height="28" fill="#3a3d44"/>' +
      '<g class="car car2"><rect x="0" y="236" width="66" height="16" rx="5" fill="' + GREEN + '"/><rect x="12" y="230" width="36" height="9" rx="3" fill="#bfe1f5"/><circle cx="16" cy="253" r="4.5" fill="#111"/><circle cx="52" cy="253" r="4.5" fill="#111"/></g>' +
      '<g class="leaf"><path d="M360 40q6-6 12 0q-6 6-12 0z" fill="#e0892a"/></g><g class="leaf leaf2"><path d="M60 30q6-6 12 0q-6 6-12 0z" fill="#c9502a"/></g>' +
      '<text x="200" y="26" text-anchor="middle" font-family="Barlow, Arial, sans-serif" font-weight="700" font-size="10" fill="#2a2016" letter-spacing="3">ADDISLEIGH PARK</text>',
      sky("gt", "#9ed1ef", "#e8f5fb"));
  }

  /* 4. A Native Tongues block party: turntables on a folding table, the speaker stack thumping, red-black-green flags */
  function block() {
    let flags = "";
    for (let x = 0; x < 400; x += 24) { const c = [RED, "#111", GREEN][(x / 24) % 3]; flags += '<path d="M' + x + ' 26l12 16 12-16z" fill="' + c + '"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#gp)"/>' + stars(12) +
      '<path d="M0 24q200 30 400 0" stroke="#ddd" stroke-width="1.5" fill="none"/>' + flags +
      /* brick row houses behind */
      '<rect x="0" y="70" width="400" height="120" fill="#7a3e2c"/>' +
      (function () { let s = ""; for (let x = 20; x < 400; x += 60) s += '<rect x="' + x + '" y="86" width="22" height="30" fill="#f4d58d" class="flk"/><rect x="' + x + '" y="130" width="22" height="30" fill="#f4d58d"/>'; return s; })() +
      /* speaker stacks */
      '<g><rect x="20" y="110" width="70" height="90" fill="#1a1a1a"/><circle class="pump" cx="55" cy="135" r="16" fill="#333" stroke="#666" stroke-width="3"/><circle class="pump" cx="55" cy="176" r="20" fill="#333" stroke="#666" stroke-width="3"/></g>' +
      '<g><rect x="310" y="110" width="70" height="90" fill="#1a1a1a"/><circle class="pump" cx="345" cy="135" r="16" fill="#333" stroke="#666" stroke-width="3"/><circle class="pump" cx="345" cy="176" r="20" fill="#333" stroke="#666" stroke-width="3"/></g>' +
      /* folding table with two turntables */
      '<rect x="110" y="160" width="180" height="10" fill="#8a8f96"/><path d="M120 170l-10 36M280 170l10 36" stroke="#6b7280" stroke-width="4"/>' +
      '<rect x="116" y="140" width="76" height="20" rx="3" fill="#c8ccd4"/><rect x="208" y="140" width="76" height="20" rx="3" fill="#c8ccd4"/>' +
      '<g class="spin"><ellipse cx="148" cy="148" rx="24" ry="6" fill="#111"/><ellipse cx="148" cy="148" rx="6" ry="2" fill="' + RED + '"/></g>' +
      '<g class="spin"><ellipse cx="240" cy="148" rx="24" ry="6" fill="#111"/><ellipse cx="240" cy="148" rx="6" ry="2" fill="' + GREEN + '"/></g>' +
      '<text x="200" y="64" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="' + GOLD + '" letter-spacing="3">NATIVE TONGUES</text>' +
      '<g class="note"><text x="130" y="120" font-size="20" fill="' + GOLD + '">&#9834;</text></g>' +
      '<g class="note note2"><text x="250" y="122" font-size="18" fill="#fff">&#9835;</text></g>' +
      '<g class="note note3"><text x="200" y="118" font-size="20" fill="' + GREEN + '">&#9834;</text></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a3d44"/><path d="M0 230h400" stroke="#eab308" stroke-width="2" stroke-dasharray="18 14"/>',
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
