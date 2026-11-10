/* Keith Urban game (GENRES: Country; INTERNATIONAL region: ASIA + AUSTRALIA; Caboolture, Queensland - born in Whangarei, NZ,
   the family moved to Caboolture when he was two and he grew up there).
   Rooms: a Queensland Rail City train pulling into Caboolture station (ground level, Matthew Terrace, Caboolture + Sunshine Coast lines),
   his dad's little corner shop with the "guitar teacher wanted" card in the window (that ad got him his first teacher),
   the Northern Suburbs Country Music Club hall in Bald Hills where he played as a kid, the Big Golden Guitar in Tamworth
   (he won a Golden Guitar there), and King Street by Matthew Terrace in Caboolture with the Glass House Mountains behind.
   CSS classes prefixed "kub" (the page's anim-train is kept). No logos, no faces, no 9s. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kubTw{0%,100%{opacity:.25}50%{opacity:1}}.kubTw{animation:kubTw 1.8s ease-in-out infinite}.kubT2{animation-delay:-.6s}.kubT3{animation-delay:-1.2s}' +
    '@keyframes kubSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.kubSway{transform-box:fill-box;transform-origin:50% 100%;animation:kubSway 3s ease-in-out infinite}' +
    '@keyframes kubSwing{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.kubSwing{transform-box:fill-box;transform-origin:50% 0;animation:kubSwing 2.2s ease-in-out infinite}' +
    '@keyframes kubNote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-60px);opacity:0}}.kubNote{animation:kubNote 3s ease-out infinite}.kubN2{animation-delay:-1s}.kubN3{animation-delay:-2s}' +
    '@keyframes kubBeam{0%,100%{opacity:.18}50%{opacity:.4}}.kubBeam{animation:kubBeam 2.6s ease-in-out infinite}' +
    '@keyframes kubGlint{0%,100%{opacity:0}45%,55%{opacity:1}}.kubGlint{animation:kubGlint 3.2s ease-in-out infinite}' +
    '@keyframes kubUte{0%{transform:translateX(-90px)}100%{transform:translateX(480px)}}.kubUte{animation:kubUte 7s linear infinite}' +
    '@keyframes kubBird{0%{transform:translate(-40px,0)}100%{transform:translate(460px,-30px)}}.kubBird{animation:kubBird 11s linear infinite}' +
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
  const GOLD = "#e8b04a", DENIM = "#3b6ea5", SUN = "#d9643a", QR = "#0072bc";
  const stars = (n, seed) => {
    let s = "", k = seed || 7;
    for (let i = 0; i < n; i++) { k = (k * 37 + 11) % 101; const x = (k * 4.1 + i * 23) % 400, y = (k * 1.3 + i * 7) % 60; s += '<circle cx="' + x.toFixed(1) + '" cy="' + (6 + y).toFixed(1) + '" r="' + (i % 3 ? 1 : 1.5) + '" fill="#fff" class="kubTw' + (i % 3 ? ' kubT' + (1 + i % 3) : '') + '"/>'; }
    return s;
  };
  const bullet = (x, y, t, c) => '<g><rect x="' + (x - 17) + '" y="' + (y - 9) + '" width="34" height="18" rx="9" fill="' + c + '"/><text x="' + x + '" y="' + (y + 4) + '" ' + F + ' font-size="10" fill="#fff" text-anchor="middle">' + t + '</text></g>';
  /* acoustic guitar body (no brand), centred at x,y, scale k */
  const guitar = (x, y, k, body, cls) =>
    '<g transform="translate(' + x + ' ' + y + ') scale(' + k + ')"><g' + (cls ? ' class="' + cls + '"' : '') + '>' +
    '<rect x="-3" y="-62" width="6" height="40" fill="#5a3a22"/><rect x="-5" y="-72" width="10" height="12" rx="2" fill="#3b2414"/>' +
    '<path d="M0 -26c-14 0 -18 8 -14 16c3 6 -6 8 -6 18c0 14 10 22 20 22s20 -8 20 -22c0 -10 -9 -12 -6 -18c4 -8 0 -16 -14 -16z" fill="' + body + '" stroke="#5a3a22" stroke-width="1.5"/>' +
    '<circle cx="0" cy="0" r="5" fill="#2a1a10"/><rect x="-7" y="14" width="14" height="3" fill="#2a1a10"/>' +
    '<path d="M-1 -60V16M1 -60V16" stroke="#e8e0d0" stroke-width=".5"/></g></g>';
  /* the Glass House Mountains: steep volcanic plugs on the skyline (Tibrogargan, Coonowrin, Beerwah, Ngungun) */
  const glassHouse = (y, c) =>
    '<path d="M0 ' + y + 'L40 ' + (y - 6) + 'Q60 ' + (y - 40) + ' 74 ' + (y - 44) + 'Q90 ' + (y - 44) + ' 96 ' + (y - 14) + 'L130 ' + (y - 10) + 'L150 ' + (y - 58) + 'L158 ' + (y - 60) + 'L166 ' + (y - 16) +
    'L200 ' + (y - 12) + 'Q214 ' + (y - 70) + ' 236 ' + (y - 74) + 'Q258 ' + (y - 70) + ' 268 ' + (y - 12) + 'L300 ' + (y - 8) + 'Q312 ' + (y - 30) + ' 326 ' + (y - 32) + 'Q338 ' + (y - 28) + ' 344 ' + (y - 6) + 'L400 ' + (y - 2) + 'V260H0z" fill="' + c + '"/>';
  const gum = (x, y, k) => '<g transform="translate(' + x + ' ' + y + ') scale(' + k + ')"><path d="M-2 0V-40M0 -26l-12 -10M0 -32l10 -8" stroke="#d8cfc0" stroke-width="3"/>' +
    '<g fill="#5c7a4a" class="kubSway"><ellipse cx="-12" cy="-42" rx="14" ry="9"/><ellipse cx="8" cy="-48" rx="15" ry="9"/><ellipse cx="-2" cy="-56" rx="12" ry="8"/></g></g>';

  /* 1. Caboolture station: ground-level platform with a canopy, navy station sign, a silver City train with yellow doors pulling in */
  function kubcaboolture() {
    let wins = "", doors = "";
    for (let x = 24; x < 380; x += 30) wins += '<rect x="' + x + '" y="134" width="20" height="16" rx="2" fill="#24323a"/>';
    for (let x = 60; x < 380; x += 90) doors += '<rect x="' + x + '" y="130" width="18" height="44" fill="#f2c200" stroke="#9a7a00" stroke-width="1"/><path d="M' + (x + 9) + ' 130v44" stroke="#9a7a00"/>';
    const train = '<g class="anim-train"><rect x="8" y="124" width="384" height="56" rx="10" fill="#dfe3e6"/>' + wins + doors +
      '<rect x="8" y="160" width="384" height="5" fill="' + QR + '"/><rect x="8" y="176" width="384" height="4" fill="#5f666b"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kubSk1)"/>' +
      glassHouse(122, "#7f9fb3") + gum(30, 124, 1.1) + gum(372, 122, 1) +
      '<rect x="0" y="116" width="400" height="10" fill="#9aa39a"/>' +
      train +
      '<rect x="0" y="180" width="400" height="10" fill="#f2d000"/><rect x="0" y="190" width="400" height="70" fill="#b9b2a6"/>' +
      '<rect x="0" y="0" width="400" height="16" fill="#e6e8ea"/><path d="M0 16h400" stroke="#9aa0a6" stroke-width="2"/>' +
      [70, 330].map(x => '<rect x="' + (x - 2) + '" y="16" width="4" height="40" fill="#8a9096"/>').join("") +
      '<rect x="96" y="30" width="208" height="54" rx="4" fill="#12284b" stroke="#fff" stroke-width="2"/>' +
      '<text x="200" y="60" ' + F + ' font-size="24" fill="#fff" text-anchor="middle">Caboolture</text>' +
      bullet(176, 74, "CAB", QR) + bullet(224, 74, "SUN", QR) +
      '<g fill="#a79f92">' + [20, 100, 180, 260, 340].map(x => '<rect x="' + x + '" y="206" width="50" height="38" rx="2"/>').join("") + '</g>' +
      '<text x="200" y="232" ' + F + ' font-size="9" fill="#5a544b" text-anchor="middle">MATTHEW TERRACE  ·  CABOOLTURE  ·  QUEENSLAND</text>',
      sky("kubSk1", "#5fa8e0", "#cfe6f5"));
  }

  /* 2. His dad's corner shop in Caboolture: a low shopfront, an awning, the handwritten card in the window, a ukulele and a guitar */
  function kubshop() {
    return svg(
      '<rect width="400" height="260" fill="url(#kubSk2)"/>' +
      '<g class="kubBird"><path d="M0 40q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      gum(30, 196, 1.4) +
      '<rect x="60" y="70" width="300" height="130" fill="#efe3c8"/><rect x="56" y="60" width="308" height="14" fill="#7a5230"/>' +
      '<rect x="120" y="36" width="180" height="26" rx="3" fill="#fff7e6" stroke="#7a5230" stroke-width="2"/>' +
      '<text x="210" y="55" ' + F + ' font-size="14" fill="#7a3a1a" text-anchor="middle">CORNER STORE</text>' +
      '<path d="M60 74h300l-14 22H74z" fill="' + SUN + '"/><path d="M60 74h300" stroke="#fff" stroke-width="2"/>' +
      [80, 120, 160, 200, 240, 280, 320].map(x => '<path d="M' + x + ' 74l-4 22" stroke="#fff" stroke-width="5" opacity=".5"/>').join("") +
      '<rect x="74" y="104" width="170" height="80" fill="#cfe3ee" stroke="#7a5230" stroke-width="3"/>' +
      '<rect x="88" y="114" width="78" height="46" fill="#fffef6" stroke="#bbb" transform="rotate(-3 127 137)"/>' +
      '<g transform="rotate(-3 127 137)" font-family="Permanent Marker, cursive" font-size="10" fill="#1d3f75" text-anchor="middle"><text x="127" y="130">GUITAR</text><text x="127" y="142">TEACHER</text><text x="127" y="154">WANTED</text></g>' +
      guitar(212, 150, 1.0, "#d9a25a", "kubSway") +
      '<g transform="translate(184 172) scale(.4)"><rect x="-2" y="-50" width="4" height="30" fill="#5a3a22"/><path d="M0 -22c-10 0 -14 6 -10 12c-4 4 -6 8 -6 12c0 10 8 16 16 16s16 -6 16 -16c0 -4 -2 -8 -6 -12c4 -6 0 -12 -10 -12z" fill="#e8c47a" stroke="#5a3a22" stroke-width="2"/></g>' +
      '<rect x="262" y="104" width="54" height="96" fill="#7a5230"/><rect x="268" y="112" width="42" height="40" fill="#cfe3ee"/><circle cx="304" cy="160" r="3" fill="' + GOLD + '"/>' +
      '<g class="kubSwing"><path d="M289 96v8" stroke="#555"/><circle cx="289" cy="108" r="4" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#8d8478"/><rect x="0" y="198" width="400" height="5" fill="#cfc6b6"/>',
      sky("kubSk2", "#5fa8e0", "#e9f3f8"));
  }

  /* 3. Northern Suburbs Country Music Club, Bald Hills: a little hall stage, bunting, a spotlight on a guitar and a mic, music notes */
  function kubclub() {
    let bunting = "";
    for (let i = 0; i < 16; i++) bunting += '<path d="M' + (i * 26) + ' 22l13 16l13 -16z" fill="' + [GOLD, DENIM, SUN, "#f3ead7"][i % 4] + '"/>';
    let seats = "";
    for (let r = 0; r < 2; r++) for (let x = 14 + r * 14; x < 400; x += 30) seats += '<rect x="' + x + '" y="' + (210 + r * 22) + '" width="22" height="14" rx="3" fill="#5a3b28"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a1d16"/>' +
      '<rect x="0" y="0" width="400" height="20" fill="#3b2a1f"/><path d="M0 22Q200 40 400 22" stroke="#d9c9a8" stroke-width="1.5" fill="none"/>' + bunting +
      '<rect x="40" y="56" width="320" height="120" fill="#4a1f1f"/>' +
      [40, 80, 120, 160, 200, 240, 280, 320].map(x => '<path d="M' + (x + 20) + ' 56v120" stroke="#3a1616" stroke-width="6"/>').join("") +
      '<rect x="40" y="52" width="320" height="10" fill="' + GOLD + '"/>' +
      '<text x="200" y="80" ' + F + ' font-size="11" fill="#f3e2b0" text-anchor="middle">NORTHERN SUBURBS COUNTRY MUSIC CLUB</text>' +
      '<path d="M140 0L110 176h180L260 0z" fill="#fff6d0" class="kubBeam"/>' +
      '<rect x="20" y="176" width="360" height="24" fill="#8a5a34"/><rect x="20" y="174" width="360" height="4" fill="#b07a48"/>' +
      '<path d="M236 176V110" stroke="#222" stroke-width="3"/><path d="M226 176h20" stroke="#222" stroke-width="3"/><rect x="232" y="100" width="8" height="12" rx="4" fill="#333"/>' +
      '<rect x="166" y="160" width="40" height="4" fill="#333"/><path d="M170 176l16 -16l16 16" stroke="#333" stroke-width="3" fill="none"/>' +
      guitar(186, 146, 0.7, GOLD) +
      '<g fill="#f3e2b0" font-size="16" font-family="serif"><text x="270" y="140" class="kubNote">&#9834;</text><text x="300" y="130" class="kubNote kubN2">&#9835;</text><text x="120" y="140" class="kubNote kubN3">&#9834;</text></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#1d140f"/>' + seats);
  }

  /* 4. The Big Golden Guitar, Tamworth: the tall gold guitar on its plinth in front of a low building, Tamworth hills, a glint of sun */
  function kubtamworth() {
    return svg(
      '<rect width="400" height="260" fill="url(#kubSk4)"/>' +
      '<circle cx="330" cy="56" r="22" fill="#fff2b8"/>' +
      '<path d="M0 170Q80 130 160 150T320 140T400 150V260H0z" fill="#9db07a"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="#c7b58e"/>' +
      '<rect x="230" y="140" width="160" height="50" fill="#e9e1cf"/><path d="M226 140h168l-10 -14H236z" fill="#8a3a2a"/>' +
      [244, 276, 308, 340].map(x => '<rect x="' + x + '" y="152" width="22" height="20" fill="#6d8ea8"/>').join("") +
      '<rect x="40" y="168" width="40" height="24" fill="#6b5f50"/>' + gum(60, 172, 1.2) + gum(372, 140, .9) +
      '<rect x="126" y="196" width="108" height="18" fill="#8d8478"/><rect x="134" y="186" width="92" height="12" fill="#a69c8e"/>' +
      '<g transform="translate(180 140)">' +
      '<rect x="-7" y="-108" width="14" height="70" fill="#c8901e"/><rect x="-11" y="-124" width="22" height="20" rx="3" fill="#a87412"/>' +
      '<path d="M0 -44c-26 0 -32 14 -26 28c5 10 -10 14 -10 32c0 24 18 36 36 36s36 -12 36 -36c0 -18 -15 -22 -10 -32c6 -14 0 -28 -26 -28z" fill="#e8b04a" stroke="#a87412" stroke-width="3"/>' +
      '<circle cx="0" cy="2" r="10" fill="#7a5410"/><rect x="-14" y="30" width="28" height="5" fill="#7a5410"/>' +
      '<path d="M-2 -104V32M2 -104V32" stroke="#fff3c4" stroke-width="1"/>' +
      '<path d="M-20 -20l10 -6" stroke="#fff" stroke-width="3" stroke-linecap="round" class="kubGlint"/></g>' +
      '<g class="kubUte"><rect x="0" y="222" width="64" height="16" rx="3" fill="' + DENIM + '"/><rect x="6" y="212" width="24" height="12" rx="2" fill="' + DENIM + '"/><rect x="10" y="215" width="16" height="7" fill="#cfe3ee"/><circle cx="14" cy="240" r="6" fill="#222"/><circle cx="50" cy="240" r="6" fill="#222"/></g>',
      sky("kubSk4", "#4f95d6", "#f3d9a8"));
  }

  /* 5. King Street by Matthew Terrace, Caboolture: green street signs on a post, his name tagged on a wall, the Glass House Mountains at sunset */
  function kubcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kubSk5)"/>' + stars(8, 5) +
      glassHouse(150, "#4a3550") +
      '<rect x="0" y="118" width="260" height="112" fill="#7d4f36"/>' +
      '<g stroke="#6a412c" stroke-width="1">' + [132, 146, 160, 174, 188, 202, 216].map(y => '<path d="M0 ' + y + 'H260"/>').join("") + '</g>' +
      tag("KEITH", 18, 178, 40, GOLD, -6) + tag("URBAN", 92, 214, 38, "#f3ead7", -4) + tag("THE RANCH", 150, 148, 15, "#9fc3e8", 4) + tag("DAYS GO BY", 160, 176, 13, SUN, -3) +
      gum(380, 230, 1.6) +
      '<rect x="0" y="230" width="400" height="30" fill="#4a4646"/><rect x="0" y="228" width="400" height="4" fill="#cfc6b6"/>' +
      '<g class="kubUte"><rect x="0" y="236" width="60" height="14" rx="3" fill="' + SUN + '"/><rect x="6" y="228" width="22" height="10" rx="2" fill="' + SUN + '"/><circle cx="12" cy="251" r="5" fill="#222"/><circle cx="48" cy="251" r="5" fill="#222"/></g>' +
      '<rect x="318" y="96" width="5" height="134" fill="#8a8f94"/>' +
      '<rect x="252" y="92" width="118" height="22" rx="2" fill="#1f6b3a" stroke="#fff" stroke-width="1.5"/><text x="311" y="108" ' + F + ' font-size="12" fill="#fff" text-anchor="middle">KING ST</text>' +
      '<rect x="256" y="118" width="128" height="22" rx="2" fill="#1f6b3a" stroke="#fff" stroke-width="1.5"/><text x="320" y="134" ' + F + ' font-size="11" fill="#fff" text-anchor="middle">MATTHEW TCE</text>',
      sky("kubSk5", "#2a2346", "#e8894a"));
  }

  window.SCENES = { kubcaboolture, kubshop, kubclub, kubtamworth, kubcorner };
})();
