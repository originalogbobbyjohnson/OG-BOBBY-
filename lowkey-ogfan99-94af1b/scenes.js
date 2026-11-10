/* Lowkey scenes (Regions tab: UK + EUROPE; Ladbroke Grove, West London W10/W11 - Kareem Dennis, born 1986 in London,
   Iraqi mother, English father; won the name Lowkey in a battle at the Deal Real record shop on Carnaby Street; Mesopotamia Music).
   1 Ladbroke Grove station (Hammersmith & City + Circle lines): the open-air platforms up on the viaduct, the Westway beside it.
   2 Notting Hill Carnival rolling down Ladbroke Grove: pastel terraces, a sound-system stack, feathered float, flags.
   3 Carnaby Street, Soho: the old record shop where the open-mic battles ran (shop shown generic, no name/logo), the street arch.
   4 Trellick Tower, Golborne Road: grey concrete slab, the separate lift tower with its sky bridges and the cantilevered top.
   5 Ladbroke Grove at Lancaster Road, W11: London street plates, LOWKEY tagged, the Westway flyover with traffic behind.
   Avoids Fleetwood Mac's Notting Hill Gate/Coronet and Lil Peep's Portobello Road. CSS classes prefixed "lky".
   No roundel, no logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lkyCloud{0%{transform:translateX(-140px)}100%{transform:translateX(480px)}}.lkyCloud{animation:lkyCloud 30s linear infinite}.lkyC2{animation-delay:-15s}' +
    '@keyframes lkyCar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.lkyCar{animation:lkyCar 7s linear infinite}.lkyK2{animation-delay:-3.5s}' +
    '@keyframes lkyCarL{0%{transform:translateX(520px)}100%{transform:translateX(-120px)}}.lkyCarL{animation:lkyCarL 8s linear infinite}' +
    '@keyframes lkyBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.lkyBob{animation:lkyBob .9s ease-in-out infinite}.lkyB2{animation-delay:-.45s}' +
    '@keyframes lkyFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(8deg)}}.lkyFlag{transform-box:fill-box;transform-origin:0 50%;animation:lkyFlag 1.4s ease-in-out infinite}' +
    '@keyframes lkyPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.lkyPulse{transform-box:fill-box;transform-origin:50% 50%;animation:lkyPulse .5s ease-in-out infinite}' +
    '@keyframes lkyTw{0%,100%{opacity:1}50%{opacity:.25}}.lkyTw{animation:lkyTw 1.8s ease-in-out infinite}.lkyT2{animation-delay:.6s}.lkyT3{animation-delay:1.2s}' +
    '@keyframes lkyNote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.lkyNote{animation:lkyNote 2.4s linear infinite}.lkyN2{animation-delay:-.8s}.lkyN3{animation-delay:-1.6s}' +
    '@keyframes lkyBoat{0%{transform:translateX(-120px)}100%{transform:translateX(480px)}}.lkyBoat{animation:lkyBoat 22s linear infinite}' +
    '@keyframes lkySpin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.lkySpin{transform-box:fill-box;transform-origin:50% 50%;animation:lkySpin 2s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const HC = "#f3a9bb", CIRCLE = "#ffd300", NAVY = "#0b2a5b", GOLD = "#f2c14e", GREEN = "#2fa36b", RED = "#d7263d", CONC = "#9a9a96";
  const clouds = (op) => '<g fill="#fff" opacity="' + (op || .7) + '"><g class="lkyCloud"><ellipse cx="40" cy="34" rx="34" ry="10"/><ellipse cx="62" cy="27" rx="20" ry="9"/></g>' +
    '<g class="lkyCloud lkyC2"><ellipse cx="40" cy="66" rx="28" ry="8"/><ellipse cx="56" cy="60" rx="16" ry="8"/></g></g>';
  const car = (x, y, col, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + (y + 6) + '" width="44" height="12" rx="4" fill="' + col + '"/><path d="M' + (x + 8) + ' ' + (y + 6) + 'l6 -7h16l6 7z" fill="' + col + '"/>' +
    '<rect x="' + (x + 15) + '" y="' + y + '" width="7" height="5" fill="#bcd3e0"/><rect x="' + (x + 24) + '" y="' + y + '" width="7" height="5" fill="#bcd3e0"/><circle cx="' + (x + 10) + '" cy="' + (y + 18) + '" r="4" fill="#111"/><circle cx="' + (x + 34) + '" cy="' + (y + 18) + '" r="4" fill="#111"/></g>';

  /* 1. Ladbroke Grove station - open-air platforms on the viaduct, Hammersmith & City and Circle lines */
  function lkystation() {
    let wins = "";
    for (const x of [30, 64, 150, 184, 270, 304]) wins += '<rect x="' + x + '" y="144" width="24" height="20" rx="3" fill="#1d2a36"/>';
    const train = '<g class="anim-train">' +
      '<path d="M10 136h310q22 0 26 24v42H10z" fill="#f4f4f2" stroke="#2b2b2b" stroke-width="2"/>' + wins +
      '<g fill="#d8232a"><rect x="98" y="142" width="40" height="56"/><rect x="218" y="142" width="40" height="56"/></g>' +
      '<path d="M118 142v56M238 142v56" stroke="#7a1015" stroke-width="2"/>' +
      '<g fill="#9fb3c4"><rect x="103" y="148" width="10" height="20"/><rect x="123" y="148" width="10" height="20"/><rect x="223" y="148" width="10" height="20"/><rect x="243" y="148" width="10" height="20"/></g>' +
      '<rect x="10" y="186" width="336" height="10" fill="#0a3a8a"/><path d="M320 142q20 2 22 22h-22z" fill="#1d2a36"/>' +
      '<rect x="332" y="176" width="10" height="5" fill="#fff3b0"/>' +
      '<g fill="#161616"><circle cx="46" cy="204" r="6"/><circle cx="70" cy="204" r="6"/><circle cx="276" cy="204" r="6"/><circle cx="300" cy="204" r="6"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lkys1)"/>' + clouds() +
      /* the Westway flyover running past behind the platform */
      '<rect x="0" y="92" width="400" height="12" fill="#b8b6ae"/><rect x="0" y="104" width="400" height="4" fill="#8a8880"/>' +
      '<g fill="#a7a59d"><rect x="40" y="108" width="14" height="30"/><rect x="170" y="108" width="14" height="30"/><rect x="300" y="108" width="14" height="30"/></g>' +
      car(0, 76, "#2f6db5", "lkyCar") + car(0, 76, "#e0e0dc", "lkyCar lkyK2") +
      /* terraces below the viaduct */
      '<g fill="#d9cfc0"><rect x="0" y="112" width="40" height="26"/><rect x="56" y="114" width="110" height="24"/><rect x="186" y="112" width="112" height="26"/><rect x="316" y="114" width="84" height="24"/></g>' +
      '<g fill="#5a6a78" opacity=".7"><rect x="66" y="120" width="8" height="10"/><rect x="90" y="120" width="8" height="10"/><rect x="200" y="118" width="8" height="10"/><rect x="226" y="118" width="8" height="10"/><rect x="330" y="120" width="8" height="10"/></g>' +
      /* canopy */
      '<rect x="0" y="40" width="160" height="8" fill="#5b2c2c"/><g fill="#5b2c2c"><rect x="20" y="48" width="5" height="88"/><rect x="130" y="48" width="5" height="88"/></g>' +
      '<path d="M0 48h160l-8 8H0z" fill="#7a3b3b"/>' +
      '<rect x="0" y="136" width="400" height="70" fill="#3a3632"/>' + train +
      '<rect x="0" y="208" width="400" height="52" fill="#6b6760"/><rect x="0" y="208" width="400" height="6" fill="#f2d24a"/>' +
      /* name board with the two line colours (no roundel) */
      '<g transform="translate(186 22)"><rect width="200" height="44" rx="4" fill="#fff" stroke="' + NAVY + '" stroke-width="2"/>' +
      '<text x="100" y="22" ' + F + ' font-size="16" fill="' + NAVY + '" text-anchor="middle">Ladbroke Grove</text>' +
      '<rect x="0" y="30" width="100" height="14" fill="' + HC + '"/><rect x="100" y="30" width="100" height="14" fill="' + CIRCLE + '"/>' +
      '<text x="50" y="41" ' + F + ' font-size="8" fill="' + NAVY + '" text-anchor="middle">HAMMERSMITH &amp; CITY</text><text x="150" y="41" ' + F + ' font-size="8" fill="' + NAVY + '" text-anchor="middle">CIRCLE</text></g>' +
      '<g ' + F + ' font-size="9" fill="#fff"><text x="14" y="238">LADBROKE GROVE · W10 / W11</text><text x="300" y="238">WAY OUT</text></g>' +
      '<path d="M354 234l10 0l-4 -4m4 4l-4 4" stroke="#fff" stroke-width="2" fill="none"/>',
      sky("lkys1", "#86b4d6", "#e9dcc4"));
  }

  /* 2. Notting Hill Carnival on Ladbroke Grove - pastel terraces, sound system, feathered float, flags */
  function lkycarnival() {
    const cols = ["#f4c6c6", "#c9e3c2", "#f6e3a6", "#bcd6ee", "#e8cbe6", "#f7d2b0"];
    let houses = "";
    for (let i = 0; i < 6; i++) {
      const x = i * 68 - 8;
      houses += '<rect x="' + x + '" y="60" width="68" height="110" fill="' + cols[i] + '" stroke="#b8ad9c" stroke-width="1"/>' +
        '<rect x="' + x + '" y="56" width="68" height="6" fill="#efe8dc"/>' +
        '<g fill="#3d4a58"><rect x="' + (x + 12) + '" y="74" width="14" height="22"/><rect x="' + (x + 42) + '" y="74" width="14" height="22"/><rect x="' + (x + 12) + '" y="110" width="14" height="22"/><rect x="' + (x + 42) + '" y="110" width="14" height="22"/></g>' +
        '<rect x="' + (x + 6) + '" y="98" width="56" height="4" fill="#fff"/>';
    }
    let bunting = '';
    const bc = [RED, GOLD, GREEN, "#2f6db5", "#e86ab0"];
    for (let i = 0; i < 20; i++) bunting += '<path d="M' + (i * 20) + ' 44l10 12l10 -12z" fill="' + bc[i % 5] + '"/>';
    let crowd = "";
    for (let i = 0; i < 22; i++) {
      const x = 8 + i * 18, h = 26 + (i % 3) * 5, c = ["#2a2a33", "#3b2e2a", "#26303a"][i % 3];
      crowd += '<g class="lkyBob' + (i % 2 ? ' lkyB2' : '') + '"><circle cx="' + x + '" cy="' + (238 - h) + '" r="6" fill="' + c + '"/><rect x="' + (x - 7) + '" y="' + (244 - h) + '" width="14" height="' + (h + 4) + '" rx="5" fill="' + c + '"/></g>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#lkys2)"/>' + clouds(.6) + houses +
      '<path d="M0 44h400" stroke="#555" stroke-width="1"/>' + bunting +
      '<rect x="0" y="170" width="400" height="90" fill="#7a7872"/>' +
      /* sound-system speaker stack */
      '<g transform="translate(18 112)"><rect width="70" height="80" fill="#1b1b1f" stroke="#444" stroke-width="2"/>' +
      '<g fill="#333"><circle cx="20" cy="22" r="13"/><circle cx="50" cy="22" r="13"/><circle cx="35" cy="58" r="18"/></g>' +
      '<g fill="#111" class="lkyPulse"><circle cx="20" cy="22" r="6"/><circle cx="50" cy="22" r="6"/><circle cx="35" cy="58" r="9"/></g></g>' +
      '<g fill="' + GOLD + '"><text class="lkyNote" x="70" y="110" font-size="18">&#9834;</text><text class="lkyNote lkyN2" x="40" y="104" font-size="16">&#9835;</text><text class="lkyNote lkyN3" x="90" y="100" font-size="14">&#9834;</text></g>' +
      /* float with a feathered costume backpiece (no person) */
      '<g transform="translate(200 108)"><rect x="0" y="62" width="170" height="30" rx="4" fill="#2f6db5"/>' +
      '<g fill="#111"><circle cx="26" cy="94" r="8"/><circle cx="144" cy="94" r="8"/></g>' +
      '<g class="lkyBob"><path d="M85 60q-60 -30 -70 -70q40 10 70 50q30 -40 70 -50q-10 40 -70 70z" fill="' + RED + '"/>' +
      '<path d="M85 58q-40 -30 -44 -60q24 14 44 42q20 -28 44 -42q-4 30 -44 60z" fill="' + GOLD + '"/>' +
      '<path d="M85 56q-20 -24 -18 -44q10 10 18 28q8 -18 18 -28q2 20 -18 44z" fill="' + GREEN + '"/><circle cx="85" cy="46" r="6" fill="#fff"/></g></g>' +
      /* flags on poles */
      '<g><rect x="120" y="120" width="3" height="70" fill="#333"/><path class="lkyFlag" d="M123 120h30l-8 9l8 9h-30z" fill="' + GOLD + '"/></g>' +
      '<g><rect x="380" y="110" width="3" height="80" fill="#333"/><path class="lkyFlag" d="M383 110h17v14h-17z" fill="#e86ab0"/></g>' +
      crowd,
      sky("lkys2", "#6fb0e6", "#fbe7b8"));
  }

  /* 3. Carnaby Street, Soho - the little record shop where the battles happened (generic shopfront), the street arch */
  function lkydealreal() {
    let recs = "";
    for (let i = 0; i < 6; i++) recs += '<g transform="translate(' + (128 + i * 24) + ' 126)"><rect width="20" height="20" fill="' + [RED, GOLD, GREEN, "#2f6db5", "#e86ab0", "#f0f0f0"][i] + '"/><circle cx="10" cy="10" r="6" fill="#111"/><circle cx="10" cy="10" r="1.6" fill="#ddd"/></g>';
    let crowd = "";
    for (let i = 0; i < 12; i++) {
      const x = 20 + i * 32;
      crowd += '<g class="lkyBob' + (i % 2 ? ' lkyB2' : '') + '" fill="#15151a"><circle cx="' + x + '" cy="214" r="9"/><rect x="' + (x - 11) + '" y="222" width="22" height="40" rx="8"/></g>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#lkys3)"/>' +
      /* the arch over the street */
      '<path d="M20 70Q200 6 380 70" stroke="#dcdcdc" stroke-width="10" fill="none"/>' +
      '<g class="lkyTw"><text x="200" y="30" ' + F + ' font-size="18" fill="#fff6c8" text-anchor="middle" letter-spacing="6">CARNABY</text></g>' +
      '<g fill="#fff6c8">' + [40, 80, 120, 280, 320, 360].map((x, i) => '<circle class="lkyTw' + (i % 3 ? ' lkyT' + (i % 3 + 1) : '') + '" cx="' + x + '" cy="' + (70 - Math.round(Math.sin(Math.PI * (x - 20) / 360) * 52)) + '" r="3"/>').join("") + '</g>' +
      /* brick buildings */
      '<rect x="0" y="74" width="100" height="186" fill="#7b4a3a"/><rect x="300" y="74" width="100" height="186" fill="#6e5246"/>' +
      '<g fill="#f3d58a" opacity=".85"><rect x="18" y="92" width="22" height="26"/><rect x="58" y="92" width="22" height="26"/><rect x="318" y="92" width="22" height="26"/><rect x="358" y="92" width="22" height="26"/></g>' +
      /* the record shop in the middle */
      '<rect x="100" y="80" width="200" height="180" fill="#26262c"/>' +
      '<rect x="110" y="88" width="180" height="22" fill="#111"/><text x="200" y="104" ' + F + ' font-size="13" fill="' + GOLD + '" text-anchor="middle" letter-spacing="3">RECORDS</text>' +
      '<rect x="116" y="118" width="168" height="60" fill="#3d5868" opacity=".9"/>' + recs +
      '<rect x="116" y="150" width="168" height="4" fill="#111"/>' +
      /* open-mic: a mic on a stand, a spinning record on the decks */
      '<g transform="translate(200 182)"><rect x="-2" y="0" width="4" height="40" fill="#bbb"/><rect x="-6" y="-12" width="12" height="16" rx="6" fill="#444"/></g>' +
      '<g transform="translate(248 160)"><rect x="-26" y="10" width="52" height="12" fill="#333"/><g class="lkySpin"><circle cx="0" cy="8" r="12" fill="#111"/><circle cx="0" cy="8" r="4" fill="' + RED + '"/><rect x="-1" y="-3" width="2" height="6" fill="#666"/></g></g>' +
      crowd,
      sky("lkys3", "#1a1f3a", "#3c3460"));
  }

  /* 4. Trellick Tower, Golborne Road - the concrete slab, separate lift tower, sky bridges, cantilevered top */
  function lkytrellick() {
    let slab = "";
    for (let y = 40; y < 214; y += 8) slab += '<rect x="150" y="' + y + '" width="120" height="6" fill="#6f6f6a"/>';
    let wins = "";
    for (let y = 40; y < 214; y += 8) for (let x = 154; x < 266; x += 14) wins += '<rect x="' + x + '" y="' + (y + 1) + '" width="10" height="4" fill="' + ((x + y) % 5 === 0 ? "#e8c05a" : "#3d4a58") + '"' + ((x + y) % 7 === 0 ? ' class="lkyTw lkyT2"' : '') + '/>';
    let bridges = "";
    for (let y = 56; y < 214; y += 24) bridges += '<rect x="122" y="' + y + '" width="28" height="7" fill="' + CONC + '" stroke="#6f6f6a" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lkys4)"/>' + clouds(.75) +
      /* low-rise W10 roofs */
      '<g fill="#8b7d70"><rect x="0" y="176" width="110" height="40"/><path d="M0 176l55 -18l55 18z"/><rect x="290" y="182" width="110" height="34"/><path d="M290 182l55 -16l55 16z"/></g>' +
      /* main slab */
      '<rect x="146" y="36" width="128" height="180" fill="' + CONC + '"/>' + slab + wins +
      /* separate service tower */
      '<rect x="100" y="20" width="22" height="196" fill="#a3a39e" stroke="#7d7d78" stroke-width="1"/>' +
      '<g fill="#7d7d78">' + [40, 80, 120, 160, 200].map(y => '<rect x="106" y="' + y + '" width="10" height="3"/>').join("") + '</g>' +
      bridges +
      /* the cantilevered boiler house on top */
      '<path d="M88 4h52v18h-52z" fill="#a3a39e" stroke="#7d7d78" stroke-width="1.5"/><path d="M92 8h44v4h-44z" fill="#6f6f6a"/>' +
      '<rect x="146" y="30" width="128" height="6" fill="#7d7d78"/>' +
      /* the railway cutting + canal in front, a narrowboat drifting */
      '<rect x="0" y="216" width="400" height="16" fill="#4a4a46"/><path d="M0 222h400M0 228h400" stroke="#9a9a90" stroke-width="1.5"/>' +
      '<rect x="0" y="232" width="400" height="28" fill="#3e6a6a"/>' +
      '<g class="lkyBoat"><rect x="0" y="238" width="90" height="12" rx="3" fill="#1f5a2e"/><rect x="14" y="230" width="58" height="10" fill="' + RED + '"/><rect x="20" y="232" width="8" height="5" fill="' + GOLD + '"/><rect x="34" y="232" width="8" height="5" fill="' + GOLD + '"/><rect x="48" y="232" width="8" height="5" fill="' + GOLD + '"/></g>' +
      '<g fill="#fff" opacity=".4"><rect x="40" y="252" width="30" height="2"/><rect x="200" y="246" width="40" height="2"/><rect x="320" y="254" width="26" height="2"/></g>',
      sky("lkys4", "#7aa8cf", "#e9d9c4"));
  }

  /* 5. Ladbroke Grove at Lancaster Road, W11 - street plates, LOWKEY tagged, the Westway flyover behind */
  function lkycorner() {
    const plate = (x, y, name, dist) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="136" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="68" y="20" text-anchor="middle" ' + F + ' font-size="12" fill="#111">' + name + '</text>' +
      '<rect x="0" y="25" width="136" height="9" fill="#c4202e"/><text x="68" y="32" text-anchor="middle" ' + F + ' font-size="6.5" fill="#fff">' + dist + '</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lkys5)"/>' +
      /* Trellick far off on the skyline */
      '<rect x="40" y="20" width="26" height="80" fill="#555a66"/><rect x="30" y="14" width="10" height="86" fill="#5f6470"/><rect x="26" y="8" width="18" height="8" fill="#5f6470"/>' +
      /* the Westway flyover with traffic */
      '<rect x="0" y="74" width="400" height="14" fill="#a9a79f"/><rect x="0" y="88" width="400" height="5" fill="#7f7d76"/>' +
      '<g fill="#8f8d86"><rect x="90" y="93" width="16" height="30"/><rect x="230" y="93" width="16" height="30"/><rect x="360" y="93" width="16" height="30"/></g>' +
      car(0, 58, "#d8232a", "lkyCar") + car(0, 58, "#f2f2ee", "lkyCarL") + car(0, 58, "#2f6db5", "lkyCar lkyK2") +
      '<g fill="#fff6d0">' + [30, 110, 190, 270, 350].map((x, i) => '<rect x="' + x + '" y="68" width="3" height="6" class="lkyTw' + (i % 2 ? ' lkyT2' : '') + '"/>').join("") + '</g>' +
      /* wall under the flyover */
      '<rect x="0" y="118" width="400" height="96" fill="#8c8a84"/>' +
      '<g stroke="#77756f" stroke-width="1">' + [138, 158, 178, 198].map(y => '<path d="M0 ' + y + 'h400"/>').join("") + '</g>' +
      '<rect x="14" y="128" width="250" height="80" fill="#2a2d36"/>' +
      tag("LOWKEY", 28, 182, 44, GOLD, -6) + tag("W11", 196, 202, 20, GREEN, -4) + tag("DEAR LISTENER", 40, 146, 14, RED, -3) +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3a40"/><path d="M0 236h400" stroke="#e8e8e0" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* sign post with two London street plates */
      '<rect x="370" y="104" width="6" height="140" fill="#2a2a2a"/>' +
      plate(244, 104, "LADBROKE GROVE", "W11 · KENSINGTON") + plate(244, 142, "LANCASTER ROAD", "W11 · KENSINGTON"),
      sky("lkys5", "#2a3a66", "#f0a878"));
  }

  window.SCENES = { lkystation, lkycarnival, lkydealreal, lkytrellick, lkycorner };
})();
