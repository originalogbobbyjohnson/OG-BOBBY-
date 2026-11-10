/* Akala scenes (Regions tab: UK + EUROPE; Kentish Town, Camden, North London NW5 - Kingslee Daley, born 1983 in Crawley,
   raised by his mum in Kentish Town, Acland Burghley School; Illa State Records; founded the Hip-Hop Shakespeare Company in 2009).
   1 Kentish Town station, Northern line: the deep-level tube platform, curved tiled tunnel, a train pulling in.
   2 Camden Lock: the black iron footbridge over the Regent's Canal, the lock gates, narrowboats, market stalls.
   3 Shakespeare's Globe on Bankside: round white timber-framed playhouse, thatched roof, flag up, the Thames in front
     (the Black Shakespeare / Hip-Hop Shakespeare Company).
   4 Parliament Hill on Hampstead Heath, up the road from Kentish Town: kites over the London skyline.
   5 Kentish Town Road at Leighton Road, NW5: London street plates, AKALA tagged, the cream art-deco Forum front behind.
   Avoids every other UK kit's stops and landmarks. CSS classes prefixed "akl". No roundel, no logos, no faces, no digit 9. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes aklCloud{0%{transform:translateX(-140px)}100%{transform:translateX(480px)}}.aklCloud{animation:aklCloud 30s linear infinite}.aklC2{animation-delay:-15s}' +
    '@keyframes aklBoat{0%{transform:translateX(-140px)}100%{transform:translateX(480px)}}.aklBoat{animation:aklBoat 20s linear infinite}' +
    '@keyframes aklKite{0%,100%{transform:translate(0,0) rotate(-6deg)}50%{transform:translate(10px,-8px) rotate(6deg)}}.aklKite{transform-box:fill-box;transform-origin:50% 100%;animation:aklKite 3s ease-in-out infinite}.aklK2{animation-delay:-1.5s}' +
    '@keyframes aklFlag{0%,100%{transform:skewY(0)}50%{transform:skewY(10deg)}}.aklFlag{transform-box:fill-box;transform-origin:0 50%;animation:aklFlag 1.5s ease-in-out infinite}' +
    '@keyframes aklTw{0%,100%{opacity:1}50%{opacity:.25}}.aklTw{animation:aklTw 1.8s ease-in-out infinite}.aklT2{animation-delay:.6s}.aklT3{animation-delay:1.2s}' +
    '@keyframes aklRip{0%,100%{transform:translateX(0)}50%{transform:translateX(10px)}}.aklRip{animation:aklRip 3s ease-in-out infinite}' +
    '@keyframes aklBus{0%{transform:translateX(-220px)}100%{transform:translateX(560px)}}.aklBus{animation:aklBus 10s linear infinite}' +
    '@keyframes aklBird{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(460px,0)}}.aklBird{animation:aklBird 12s linear infinite}.aklB2{animation-delay:-6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const ORANGE = "#e85d3c", GOLD = "#f2c14e", BLUE = "#3a8fd6", NAVY = "#0b2a5b";
  const clouds = (op) => '<g fill="#fff" opacity="' + (op || .7) + '"><g class="aklCloud"><ellipse cx="40" cy="34" rx="34" ry="10"/><ellipse cx="62" cy="27" rx="20" ry="9"/></g>' +
    '<g class="aklCloud aklC2"><ellipse cx="40" cy="62" rx="28" ry="8"/><ellipse cx="56" cy="56" rx="16" ry="8"/></g></g>';
  const birds = '<g stroke="#2a2a33" stroke-width="1.6" fill="none"><path class="aklBird" d="M20 50q5 -5 10 0q5 -5 10 0"/><path class="aklBird aklB2" d="M10 74q4 -4 8 0q4 -4 8 0"/></g>';

  /* 1. Kentish Town - deep-level Northern line platform in the curved tube tunnel */
  function aklstation() {
    let tiles = "";
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 30v110" stroke="#d9d4c6" stroke-width="1"/>';
    for (let y = 40; y < 140; y += 14) tiles += '<path d="M0 ' + y + 'h400" stroke="#d9d4c6" stroke-width="1"/>';
    let wins = "";
    for (const x of [34, 68, 154, 188, 274, 308]) wins += '<rect x="' + x + '" y="150" width="24" height="18" rx="3" fill="#1d2a36"/>';
    const train = '<g class="anim-train">' +
      '<path d="M10 140h312q22 0 26 26v38H10z" fill="#f2f2f0" stroke="#2b2b2b" stroke-width="2"/>' + wins +
      '<g fill="#d8232a"><rect x="102" y="146" width="40" height="56"/><rect x="222" y="146" width="40" height="56"/></g>' +
      '<path d="M122 146v56M242 146v56" stroke="#7a1015" stroke-width="2"/>' +
      '<g fill="#9fb3c4"><rect x="107" y="152" width="10" height="18"/><rect x="127" y="152" width="10" height="18"/><rect x="227" y="152" width="10" height="18"/><rect x="247" y="152" width="10" height="18"/></g>' +
      '<rect x="10" y="188" width="338" height="10" fill="#0a3a8a"/><path d="M324 148q20 2 22 22h-22z" fill="#1d2a36"/>' +
      '<rect x="334" y="180" width="10" height="5" fill="#fff3b0"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#1b1b1e"/>' +
      /* curved tunnel wall */
      '<path d="M0 140V40Q200 -10 400 40V140z" fill="#ece6d4"/>' + '<g clip-path="url(#aklclip)">' + tiles + '</g>' +
      '<path d="M0 40Q200 -10 400 40" stroke="#b9b09a" stroke-width="4" fill="none"/>' +
      /* lights along the crown */
      '<g fill="#fff8d8">' + [60, 140, 220, 300, 380].map((x, i) => '<rect class="aklTw' + (i % 2 ? ' aklT2' : '') + '" x="' + (x - 14) + '" y="' + (26 - Math.round(Math.sin(Math.PI * x / 400) * 8)) + '" width="28" height="4" rx="2"/>').join("") + '</g>' +
      /* name board on the tunnel wall: black Northern line bar, no roundel */
      '<g transform="translate(108 52)"><rect width="184" height="46" rx="4" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="92" y="24" ' + F + ' font-size="17" fill="' + NAVY + '" text-anchor="middle">Kentish Town</text>' +
      '<rect x="0" y="32" width="184" height="14" fill="#000"/><text x="92" y="43" ' + F + ' font-size="9" fill="#fff" text-anchor="middle" letter-spacing="2">NORTHERN LINE</text></g>' +
      '<g transform="translate(18 72)"><rect width="66" height="26" rx="3" fill="#000"/><text x="33" y="17" ' + F + ' font-size="9" fill="#fff" text-anchor="middle">EDGWARE</text></g>' +
      '<g transform="translate(316 72)"><rect width="66" height="26" rx="3" fill="#000"/><text x="33" y="17" ' + F + ' font-size="9" fill="#fff" text-anchor="middle">MORDEN</text></g>' +
      '<rect x="0" y="140" width="400" height="66" fill="#2a2724"/>' + train +
      '<rect x="0" y="206" width="400" height="54" fill="#5f5b55"/><rect x="0" y="206" width="400" height="6" fill="#f2d24a"/>' +
      '<g ' + F + ' font-size="9" fill="#fff"><text x="14" y="238">KENTISH TOWN · NW5</text><text x="300" y="238">WAY OUT</text></g>' +
      '<path d="M354 234l10 0l-4 -4m4 4l-4 4" stroke="#fff" stroke-width="2" fill="none"/>',
      '<clipPath id="aklclip"><path d="M0 140V40Q200 -10 400 40V140z"/></clipPath>');
  }

  /* 2. Camden Lock - black iron footbridge over the Regent's Canal, lock gates, narrowboats, stalls */
  function akllock() {
    let stalls = "";
    const sc = [ORANGE, GOLD, BLUE, "#2fa36b", "#e86ab0", "#d7263d"];
    for (let i = 0; i < 6; i++) stalls += '<g transform="translate(' + (10 + i * 66) + ' 92)"><path d="M0 14l28 -14l28 14z" fill="' + sc[i] + '"/><rect x="2" y="14" width="52" height="24" fill="#3b2f2a"/><rect x="6" y="18" width="44" height="10" fill="' + sc[(i + 2) % 6] + '" opacity=".8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#akls2)"/>' + clouds() + birds +
      /* brick warehouses behind */
      '<rect x="0" y="62" width="400" height="70" fill="#8a4f3a"/>' +
      '<g fill="#f3d58a" opacity=".85">' + [20, 70, 120, 170, 220, 270, 320, 370].map(x => '<rect x="' + x + '" y="72" width="14" height="16"/>').join("") + '</g>' +
      stalls +
      /* canal */
      '<rect x="0" y="176" width="400" height="84" fill="#3c5c58"/>' +
      '<g fill="#fff" opacity=".35" class="aklRip"><rect x="30" y="200" width="40" height="2"/><rect x="160" y="228" width="50" height="2"/><rect x="300" y="210" width="40" height="2"/></g>' +
      '<rect x="0" y="130" width="400" height="46" fill="#6c6560"/><rect x="0" y="170" width="400" height="6" fill="#4c4743"/>' +
      /* lock gate: dark timber gate across the cut, black-and-white balance beam on the bank */
      '<g><rect x="70" y="176" width="16" height="50" fill="#4a3826"/><path d="M70 186h16M70 198h16M70 210h16" stroke="#2e2318" stroke-width="2"/><rect x="20" y="166" width="70" height="7" fill="#f2f2f0"/><rect x="20" y="166" width="18" height="7" fill="#111"/></g>' +
      /* narrowboat */
      '<g class="aklBoat"><rect x="0" y="214" width="110" height="14" rx="3" fill="#1f5a2e"/><rect x="14" y="204" width="76" height="12" fill="#c4202e"/><g fill="' + GOLD + '"><rect x="20" y="207" width="8" height="5"/><rect x="36" y="207" width="8" height="5"/><rect x="52" y="207" width="8" height="5"/><rect x="68" y="207" width="8" height="5"/></g></g>' +
      /* the black iron footbridge: arched deck, railings, name panel on the crown */
      '<path d="M150 170Q260 128 370 170" stroke="#1b1b1b" stroke-width="10" fill="none"/>' +
      '<path d="M150 152Q260 110 370 152" stroke="#1b1b1b" stroke-width="3" fill="none"/>' +
      '<g stroke="#1b1b1b" stroke-width="2">' + [165, 185, 205, 225, 295, 315, 335, 355].map(x => { const t = (x - 150) / 220, y1 = 152 - 84 * t * (1 - t), y2 = 170 - 84 * t * (1 - t); return '<path d="M' + x + ' ' + y1.toFixed(1) + 'V' + y2.toFixed(1) + '"/>'; }).join("") + '</g>' +
      '<rect x="212" y="118" width="96" height="18" rx="2" fill="#1b1b1b"/><text x="260" y="131" ' + F + ' font-size="10" fill="#f2f2f0" text-anchor="middle" letter-spacing="2">CAMDEN LOCK</text>',
      sky("akls2", "#86b4d6", "#efdcc0"));
  }

  /* 3. Shakespeare's Globe, Bankside - round timber-framed playhouse, thatched roof, flag, the Thames */
  function aklglobe() {
    let beams = "";
    for (let x = 96; x <= 304; x += 16) beams += '<path d="M' + x + ' 104v86" stroke="#4a3426" stroke-width="3"/>';
    let diag = "";
    for (let x = 96; x < 304; x += 32) diag += '<path d="M' + x + ' 104l16 43M' + (x + 32) + ' 104l-16 43M' + x + ' 147l16 43M' + (x + 32) + ' 147l-16 43" stroke="#4a3426" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#akls3)"/>' + clouds(.8) + birds +
      /* far skyline across the river: a dome and towers */
      '<g fill="#8d95a3" opacity=".7"><rect x="10" y="120" width="30" height="40"/><path d="M320 160v-30q20 -24 40 0v30z"/><rect x="336" y="104" width="8" height="10"/><rect x="360" y="110" width="26" height="50"/></g>' +
      /* the playhouse drum */
      '<g clip-path="url(#aklgl)"><rect x="88" y="96" width="224" height="104" fill="#f4efe2"/>' + beams + diag +
      '<path d="M88 104Q200 114 312 104M88 147Q200 157 312 147" stroke="#4a3426" stroke-width="4" fill="none"/>' +
      '<rect x="88" y="96" width="34" height="104" fill="#000" opacity=".12"/><rect x="278" y="96" width="34" height="104" fill="#000" opacity=".12"/></g>' +
      '<path d="M88 190Q200 204 312 190" stroke="#4a3426" stroke-width="4" fill="none"/>' +
      /* thatched roof ring */
      '<path d="M78 106Q200 70 322 106L312 92Q200 60 88 92z" fill="#c9a35a"/>' +
      '<g stroke="#a8843e" stroke-width="1.2">' + [100, 130, 160, 190, 220, 250, 280, 300].map(x => '<path d="M' + x + ' 96l2 8"/>').join("") + '</g>' +
      /* the stair tower + flag */
      '<rect x="182" y="58" width="36" height="34" fill="#f4efe2" stroke="#4a3426" stroke-width="2"/><path d="M178 60l22 -16l22 16z" fill="#c9a35a"/>' +
      '<rect x="199" y="12" width="3" height="34" fill="#4a3426"/><path class="aklFlag" d="M202 12h30l-6 8l6 8h-30z" fill="' + ORANGE + '"/>' +
      '<rect x="186" y="152" width="28" height="44" fill="#4a3426"/>' +
      /* the Thames embankment and river */
      '<rect x="0" y="190" width="400" height="16" fill="#9a958a"/><rect x="0" y="206" width="400" height="54" fill="#58716f"/>' +
      '<g fill="#fff" opacity=".35" class="aklRip"><rect x="40" y="222" width="50" height="2"/><rect x="200" y="238" width="60" height="2"/><rect x="320" y="226" width="40" height="2"/></g>' +
      '<g class="aklBoat"><rect x="0" y="226" width="120" height="14" rx="4" fill="#f2f2f0"/><rect x="18" y="214" width="80" height="12" fill="' + BLUE + '"/><g fill="#1d2a36"><rect x="24" y="217" width="10" height="6"/><rect x="40" y="217" width="10" height="6"/><rect x="56" y="217" width="10" height="6"/><rect x="72" y="217" width="10" height="6"/></g></g>',
      sky("akls3", "#7fb3dd", "#f0e2c8") + '<clipPath id="aklgl"><path d="M88 100Q200 112 312 100V190Q200 204 88 190z"/></clipPath>');
  }

  /* 4. Parliament Hill - kites over the London skyline from the top of the Heath */
  function aklhill() {
    const kite = (x, y, c, cls) => '<g class="aklKite ' + cls + '"><path d="M' + x + ' ' + y + 'l12 16l-12 20l-12 -20z" fill="' + c + '" stroke="#222" stroke-width="1"/><path d="M' + x + ' ' + (y + 36) + 'q6 12 -4 24q-8 12 2 26" stroke="#222" stroke-width="1" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#akls4)"/>' + clouds(.85) +
      kite(90, 30, ORANGE, "") + kite(300, 22, BLUE, "aklK2") + kite(210, 54, GOLD, "") +
      /* skyline: towers, a dome, a pointed shard, a rounded tower */
      '<g fill="#7d8796">' +
      '<rect x="20" y="150" width="26" height="40"/><rect x="52" y="140" width="18" height="50"/>' +
      '<path d="M120 190v-34q18 -26 36 0v34z"/><rect x="134" y="120" width="8" height="12"/><rect x="136" y="112" width="4" height="10"/>' +
      '<path d="M220 190l14 -96l14 96z"/>' +
      '<path d="M270 190v-40q8 -26 16 0v40z"/><rect x="300" y="146" width="22" height="44"/><rect x="330" y="134" width="20" height="56"/><rect x="356" y="152" width="30" height="38"/></g>' +
      '<g fill="#f3d58a" opacity=".7"><rect x="304" y="152" width="4" height="4" class="aklTw"/><rect x="336" y="140" width="4" height="4" class="aklTw aklT2"/><rect x="58" y="146" width="4" height="4" class="aklTw aklT3"/></g>' +
      /* the green hill in front, a bench and a path */
      '<path d="M0 196Q200 160 400 196V260H0z" fill="#5f8f3e"/><path d="M0 214Q200 184 400 214V260H0z" fill="#4c7a31"/>' +
      '<path d="M170 260Q200 210 230 190" stroke="#c9b48a" stroke-width="10" fill="none"/>' +
      '<g transform="translate(250 198)"><rect width="56" height="6" fill="#6b4a2e"/><rect y="-12" width="56" height="5" fill="#6b4a2e"/><path d="M4 6v12M52 6v12" stroke="#333" stroke-width="3"/></g>' +
      '<g fill="#2f5a22"><circle cx="40" cy="198" r="16"/><circle cx="60" cy="192" r="14"/><circle cx="360" cy="200" r="18"/></g>',
      sky("akls4", "#78aee0", "#f7e2b8"));
  }

  /* 5. Kentish Town Road at Leighton Road, NW5 - street plates, AKALA tagged, the Forum's cream art-deco front behind */
  function aklcorner() {
    const plate = (x, y, name, dist) => '<g transform="translate(' + x + ' ' + y + ')"><rect width="140" height="34" rx="3" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="70" y="20" text-anchor="middle" ' + F + ' font-size="11.5" fill="#111">' + name + '</text>' +
      '<rect x="0" y="25" width="140" height="9" fill="#c4202e"/><text x="70" y="32" text-anchor="middle" ' + F + ' font-size="6.5" fill="#fff">' + dist + '</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#akls5)"/>' +
      /* the art-deco music hall front */
      '<rect x="90" y="24" width="220" height="96" fill="#efe6cf"/>' +
      '<g fill="#d9cdb0">' + [110, 150, 190, 230, 270].map(x => '<rect x="' + x + '" y="40" width="18" height="70"/>').join("") + '</g>' +
      '<path d="M90 24h220v10H90z" fill="#d9cdb0"/><path d="M170 24l30 -14l30 14z" fill="#efe6cf"/>' +
      '<g fill="#fff6c8">' + [118, 158, 198, 238, 278].map((x, i) => '<rect class="aklTw' + (i % 3 ? ' aklT' + (i % 3 + 1) : '') + '" x="' + (x - 2) + '" y="112" width="6" height="4"/>').join("") + '</g>' +
      /* shopfront wall */
      '<rect x="0" y="118" width="400" height="92" fill="#6d5a4d"/>' +
      '<g stroke="#5a483c" stroke-width="1">' + [138, 158, 178, 198].map(y => '<path d="M0 ' + y + 'h400"/>').join("") + '</g>' +
      '<rect x="14" y="126" width="240" height="80" fill="#2a2d36"/>' +
      tag("AKALA", 30, 182, 46, ORANGE, -6) + tag("ILLA STATE", 150, 200, 15, GOLD, -4) + tag("NW5", 40, 146, 16, BLUE, -3) +
      '<rect x="0" y="206" width="400" height="38" fill="#8f8a84"/><path d="M0 222h400" stroke="#7a756f" stroke-width="1"/>' +
      /* a red bus rolling past */
      '<g class="aklBus"><rect x="0" y="196" width="120" height="44" rx="6" fill="#d0202a"/><g fill="#1d2a33"><rect x="8" y="202" width="20" height="12"/><rect x="34" y="202" width="20" height="12"/><rect x="60" y="202" width="20" height="12"/><rect x="86" y="202" width="20" height="12"/>' +
      '<rect x="8" y="220" width="20" height="10"/><rect x="34" y="220" width="20" height="10"/><rect x="60" y="220" width="20" height="10"/></g><circle cx="24" cy="242" r="7" fill="#111"/><circle cx="98" cy="242" r="7" fill="#111"/></g>' +
      '<rect x="0" y="244" width="400" height="16" fill="#3a3a40"/>' +
      '<rect x="372" y="96" width="6" height="150" fill="#2a2a2a"/>' +
      plate(240, 104, "KENTISH TOWN ROAD", "NW5 · CAMDEN") + plate(240, 142, "LEIGHTON ROAD", "NW5 · CAMDEN"),
      sky("akls5", "#26345e", "#f0a070"));
  }

  window.SCENES = { aklstation, akllock, aklglobe, aklhill, aklcorner };
})();
