/* St. Albans, Queens opening scenes for the LL Cool J game. Each one is a small animated SVG, 400 x 260. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes flick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}' +
    '.flk{animation:flick 2.2s infinite}.flk2{animation-delay:.9s}' +
    '@keyframes lirr{from{transform:translateX(-420px)}to{transform:translateX(460px)}}' +
    '.lirr{animation:lirr 6s linear infinite}' +
    '@keyframes carr{from{transform:translateX(-120px)}to{transform:translateX(480px)}}' +
    '.carr{animation:carr 5s linear infinite}' +
    '@keyframes carl{from{transform:translateX(480px)}to{transform:translateX(-120px)}}' +
    '.carl{animation:carl 6.5s linear infinite}' +
    '@keyframes spr{0%,100%{transform:rotate(-38deg)}50%{transform:rotate(38deg)}}' +
    '.spr{transform-box:fill-box;transform-origin:50% 100%;animation:spr 3s ease-in-out infinite}' +
    '@keyframes thump{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}' +
    '.thump{transform-box:fill-box;transform-origin:50% 50%;animation:thump .5s ease-in-out infinite}' +
    '@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}' +
    '.spin{transform-box:fill-box;transform-origin:50% 50%;animation:spin 1.6s linear infinite}' +
    '@keyframes note{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-46px);opacity:0}}' +
    '.note{animation:note 2.4s ease-out infinite}.nt2{animation-delay:.8s}.nt3{animation-delay:1.6s}' +
    '@keyframes leaf{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-40px,150px) rotate(220deg)}}' +
    '.leaf{animation:leaf 5s linear infinite}.lf2{animation-delay:-1.7s}.lf3{animation-delay:-3.4s}' +
    '</style>';
  const svg = (inner, defs) =>
    '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css +
    '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) =>
    '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) =>
    '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const bullet = (x, y, letter, color, dark) =>
    '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const ACE = "#0039a6", JZ = "#996633", RED = "#e8262b", GOLD = "#e8b84a";
  const sign = (x, y, w, txt, fs) =>
    '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
    '<text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (fs || 11) + '" fill="#fff">' + txt + '</text>';
  /* a little bucket hat, red, no logo */
  const hat = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')">' +
    '<path d="M-16 6q16 8 32 0l-4-4h-24z" fill="#b8141a"/><path d="M-11 3q-1-14 11-14t11 14z" fill="' + RED + '"/><path d="M-11 0h22" stroke="#7a0c10" stroke-width="1.5"/></g>';

  /* 1. Jamaica Center–Parsons/Archer, cut away: the E pulling in down below, up top the entrance on Archer Av and the bus out to Linden Blvd and St. Albans */
  function train() {
    const { svg, sky, tag, T, bullet, wins, cloud } = LM1;
    let bwin = ""; for (let x = 12; x < 120; x += 20) bwin += '<rect x="' + x + '" y="72" width="14" height="12" rx="1" fill="#cfe6ff"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lj1)"/>' + cloud("lm-drift", 0, 20, .9) +
      /* Jamaica Av skyline */
      '<rect x="200" y="8" width="70" height="104" fill="#8a6a5a"/>' + wins(208, 16, 4, 6, 16, 15, 9, 9, "#3a2a22", "#ffd98a") +
      '<rect x="280" y="30" width="110" height="82" fill="#6a6a7a"/>' + wins(290, 38, 6, 5, 16, 15, 9, 9, "#2a2a3a", "#ffd98a") +
      /* the entrance with its sign and bullets */
      '<rect x="14" y="56" width="176" height="56" fill="#3a3a40"/><rect x="14" y="56" width="176" height="20" fill="#111"/><rect x="14" y="56" width="176" height="2" fill="#fff"/>' +
      T(20, 70, "Jamaica Center–Parsons/Archer", 10, "#fff", { a: "start", f: "Helvetica, Arial, sans-serif", w: 700 }) +
      bullet(40, 94, "E", "#0039a6", false, 9) + bullet(64, 94, "J", "#996633", false, 9) + bullet(88, 94, "Z", "#996633", false, 9) +
      '<path d="M110 112V84h70v28" fill="#1d1d22"/><path d="M118 112l20-24h34" stroke="#eab308" stroke-width="2" fill="none"/>' +
      /* street + the bus out to St. Albans */
      '<rect x="0" y="112" width="400" height="34" fill="#2c2c32"/><path d="M0 130h400" stroke="#eab308" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="lm-car" style="animation-duration:8s"><g transform="translate(-120 52)"><rect x="0" y="62" width="130" height="34" rx="5" fill="#f2f4f6" stroke="#6b7280"/>' + bwin.replace(/y="72"/g, 'y="68"') +
        '<rect x="0" y="84" width="130" height="4" fill="#0039a6"/><rect x="96" y="64" width="32" height="8" fill="#111"/>' + T(112, 70.5, "ST ALBANS", 5.5, "#ffb020", { f: "Helvetica, Arial, sans-serif", w: 700 }) +
        '<circle cx="24" cy="96" r="5" fill="#111"/><circle cx="106" cy="96" r="5" fill="#111"/></g></g>' +
      /* the cutaway: platform under Archer Av */
      '<rect x="0" y="146" width="400" height="10" fill="#6a5a4a"/><rect x="0" y="156" width="400" height="104" fill="#ded8c6"/>' +
      '<rect x="0" y="160" width="400" height="8" fill="#0039a6"/>' +
      '<g class="anim-train">' + LM1.subCar(-10, 172, 300, "#0039a6", bullet(250, 212, "E", "#0039a6", false, 9)) + '</g>' +
      '<rect x="0" y="232" width="400" height="6" fill="#eab308"/><rect x="0" y="238" width="400" height="22" fill="#8f8a80"/>' +
      tag("UNCLE L", 292, 222, 22, "#ff3b3b", -6) + tag("I'M BAD", 300, 256, 18, "#e8b84a", -3) +
      '<rect x="216" y="114" width="120" height="16" rx="2" fill="#1f7a3a" stroke="#fff"/>' + T(276, 126, "to Linden Blvd →", 10, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 }),
      sky("lj1", "#8fc3ea", "#f2dcb0"));
  }

  /* 2. Addisleigh Park: the brick Colonial Revival and Tudor houses on deep lawns where the jazz greats lived, the brown historic-district sign, a sprinkler sweeping */
  function addisleigh() {
    let grass = "";
    for (let x = 0; x < 400; x += 7) grass += '<path d="M' + x + ' 214l2-6 2 6" stroke="#2f6b2a" stroke-width="1" fill="none"/>';
    const win = (x, y) => '<rect x="' + x + '" y="' + y + '" width="16" height="20" fill="#ffe7a8" stroke="#fff" stroke-width="2"/><path d="M' + (x + 8) + ' ' + y + 'v20M' + x + ' ' + (y + 10) + 'h16" stroke="#fff" stroke-width="1.5"/>' +
      '<rect x="' + (x - 5) + '" y="' + y + '" width="4" height="20" fill="#24364a"/><rect x="' + (x + 17) + '" y="' + y + '" width="4" height="20" fill="#24364a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ga)"/>' +
      /* big trees behind */
      '<circle cx="30" cy="90" r="46" fill="#3f6b2c"/><circle cx="380" cy="84" r="50" fill="#466f2e"/><circle cx="200" cy="58" r="30" fill="#3a6128"/>' +
      /* brick Colonial Revival: red brick, white trim, columned portico */
      '<path d="M60 96l90-30 90 30z" fill="#3b3a3f"/>' +
      '<rect x="66" y="96" width="168" height="110" fill="#a4442f"/>' +
      (function () { let b = ""; for (let y = 100; y < 206; y += 6) b += '<path d="M66 ' + y + 'h168" stroke="#8a3524" stroke-width=".7"/>'; return b; })() +
      '<rect x="64" y="94" width="172" height="5" fill="#f4efe2"/>' +
      win(82, 112) + win(196, 112) + win(82, 160) + win(196, 160) +
      '<path d="M122 140l28-16 28 16z" fill="#f4efe2"/><rect x="124" y="140" width="52" height="4" fill="#f4efe2"/>' +
      '<rect x="128" y="144" width="5" height="62" fill="#fff"/><rect x="167" y="144" width="5" height="62" fill="#fff"/>' +
      '<rect x="140" y="160" width="20" height="46" fill="#1f3a2a"/><circle cx="156" cy="184" r="1.6" fill="' + GOLD + '"/>' +
      '<rect x="134" y="118" width="32" height="16" fill="#ffe7a8" stroke="#fff" stroke-width="2"/>' +
      '<rect x="120" y="206" width="60" height="6" fill="#d8d2c4"/>' +
      /* Tudor neighbor: stucco + half-timber, steep gable */
      '<path d="M256 206v-74l52-48 52 48v74z" fill="#efe6cf"/><path d="M250 134l58-54 58 54" fill="none" stroke="#3b2a20" stroke-width="7"/>' +
      '<path d="M282 108v98M334 108v98M270 150h76M290 150l18-22 18 22" stroke="#4a3426" stroke-width="4" fill="none"/>' +
      '<rect x="296" y="170" width="22" height="36" rx="10" fill="#4a3426"/>' +
      '<rect x="264" y="164" width="14" height="18" fill="#ffe7a8"/><rect x="338" y="164" width="14" height="18" fill="#ffe7a8"/>' +
      /* lawn + sprinkler */
      '<rect x="0" y="206" width="400" height="54" fill="#4b8a3a"/>' + grass +
      '<rect x="0" y="236" width="400" height="24" fill="#8f8a80"/><rect x="0" y="234" width="400" height="3" fill="#cfc9bc"/>' +
      '<rect x="218" y="222" width="6" height="4" fill="#555"/>' +
      '<g class="spr"><path d="M221 222q-2-26 0-44" stroke="#dff4ff" stroke-width="3.5" fill="none" stroke-dasharray="3 3"/><circle cx="221" cy="176" r="2.5" fill="#dff4ff"/></g>' +
      /* brown NYC historic district sign */
      '<rect x="22" y="132" width="4" height="104" fill="#1d2329"/>' +
      '<rect x="0" y="116" width="62" height="24" rx="2" fill="#6b4226" stroke="#fff" stroke-width="1.2"/>' +
      '<text x="31" y="127" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="7" fill="#fff">Addisleigh Park</text>' +
      '<text x="31" y="136" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="5.5" fill="#fff">Historic District</text>',
      sky("ga", "#7fb4e0", "#d9ecf6"));
  }

  /* 3. Album world, Mama Said Knock You Out (1990): the boxing ring under the lights, the robe on the corner post, the gloves swinging from the ropes */
  function linden() {
    const { svg, sky, tag, T } = LM1;
    let crowd = ""; for (let x = 0; x < 400; x += 14) crowd += '<circle cx="' + x + '" cy="' + (150 + (x * 7) % 10) + '" r="7" fill="#1a1418"/>';
    let flashes = ""; [[60, 136], [180, 142], [300, 134], [360, 146]].forEach(([x, y], k) => flashes += '<circle class="lm-blink' + (k % 2 ? " lm-k2" : "") + '" cx="' + x + '" cy="' + y + '" r="2.5" fill="#fff"/>');
    const glove = (x, cls, c) => '<g class="' + cls + '" style="transform-origin:' + x + 'px 168px"><path d="M' + x + ' 168v14" stroke="#ddd" stroke-width="1.5"/><path d="M' + (x - 9) + ' 182h16a6 6 0 0 1 4 6v8a10 10 0 0 1-10 10h-6a8 8 0 0 1-8-8v-10z" fill="' + c + '"/><rect x="' + (x - 8) + '" y="204" width="13" height="6" fill="#f6f2e6"/></g>';
    return svg(
      '<rect width="400" height="260" fill="#0c0a0c"/>' +
      /* the lights */
      '<path d="M120 0L60 170h80zM280 0L260 170h80z" fill="#fff6d0" opacity=".08"/><rect x="100" y="6" width="200" height="10" fill="#2a2a2a"/>' +
      [120, 160, 200, 240, 280].map((x, k) => '<circle class="lm-flk' + (k % 2 ? " lm-f2" : "") + '" cx="' + x + '" cy="18" r="5" fill="#fff6d0"/>').join("") +
      crowd + flashes +
      /* the ring: canvas, apron, posts, red-white-blue ropes */
      '<path d="M30 230L70 176h260l40 54z" fill="#e8e2d2"/><path d="M30 230h340v18H30z" fill="#b51e1e"/>' +
      T(200, 244, "MAMA SAID KNOCK YOU OUT", 12, "#fff") +
      '<rect x="66" y="120" width="8" height="64" fill="#c9ced6"/><rect x="326" y="120" width="8" height="64" fill="#c9ced6"/>' +
      '<path d="M70 132h260M70 150h260M70 168h260" stroke-width="3" fill="none" stroke="#ff3b3b"/><path d="M70 150h260" stroke="#f6f2e6" stroke-width="3"/><path d="M70 168h260" stroke="#2f5fbf" stroke-width="3"/>' +
      /* the robe hanging on the post */
      '<path d="M320 120h22l6 50h-34z" fill="#e8b84a"/><path d="M331 120v50" stroke="#a8802a" stroke-width="2"/><path d="M322 140h18" stroke="#a8802a" stroke-width="3"/>' +
      T(331, 160, "L", 12, "#ff3b3b") +
      glove(150, "lm-sway", "#d7262d") + glove(250, "lm-sway lm-s2", "#d7262d") +
      '<rect x="120" y="70" width="160" height="36" rx="4" fill="#111" stroke="#e8b84a" stroke-width="2"/>' +
      T(200, 92, "1990", 18, "#e8b84a") +
      tag("UNCLE L", 20, 60, 30, "#ff3b3b", -6),
      "");
  }

  /* 4. Grandma's house, St. Albans, night: the frame house with the porch, the basement window glowing where he made the tapes, the boombox thumping, the red bucket hat on the post */
  function basement() {
    let siding = "";
    for (let y = 72; y < 190; y += 7) siding += '<path d="M80 ' + y + 'h220" stroke="#b8b09a" stroke-width="1"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gb)"/>' + stars(24) +
      '<circle cx="340" cy="44" r="18" fill="#f4f1de"/>' +
      /* falling leaves */
      '<g class="leaf"><ellipse cx="370" cy="70" rx="4" ry="2" fill="#d9822b"/></g><g class="leaf lf2"><ellipse cx="60" cy="40" rx="4" ry="2" fill="#c94a2b"/></g><g class="leaf lf3"><ellipse cx="250" cy="30" rx="4" ry="2" fill="#e8b84a"/></g>' +
      /* the house */
      '<path d="M70 74l120-48 120 48z" fill="#4a3a33"/>' +
      '<rect x="80" y="72" width="220" height="118" fill="#d8d0b8"/>' + siding +
      '<rect x="104" y="88" width="30" height="34" fill="#ffe7a8" stroke="#fff" stroke-width="3"/><rect x="246" y="88" width="30" height="34" fill="#2b3a52" stroke="#fff" stroke-width="3"/>' +
      '<rect x="176" y="40" width="28" height="22" fill="#2b3a52" stroke="#fff" stroke-width="3"/>' +
      /* porch */
      '<path d="M84 128h212l12 10h-236z" fill="#5a4a40"/>' +
      '<rect x="94" y="138" width="5" height="52" fill="#fff"/><rect x="282" y="138" width="5" height="52" fill="#fff"/><rect x="188" y="138" width="5" height="52" fill="#fff"/>' +
      '<rect x="150" y="146" width="26" height="44" fill="#6b2a20"/><circle cx="171" cy="170" r="1.6" fill="' + GOLD + '"/>' +
      '<path d="M96 172h90M196 172h90" stroke="#fff" stroke-width="3"/>' +
      (function () { let r = ""; for (let x = 104; x < 186; x += 9) r += '<rect x="' + x + '" y="172" width="2.5" height="18" fill="#fff"/>'; for (let x = 202; x < 282; x += 9) r += '<rect x="' + x + '" y="172" width="2.5" height="18" fill="#fff"/>'; return r; })() +
      hat(284, 134, .8) +
      /* foundation + glowing basement window */
      '<rect x="80" y="190" width="220" height="26" fill="#8a8478"/>' +
      '<rect class="flk" x="108" y="194" width="64" height="18" fill="#ffcf6b"/>' +
      '<rect x="114" y="200" width="16" height="10" fill="#1a1a1a"/><circle cx="122" cy="205" r="4" fill="#333"/><circle class="spin" cx="122" cy="205" r="3" fill="#111" stroke="' + RED + '" stroke-width="1"/>' +
      '<rect x="136" y="200" width="30" height="10" fill="#2a2a2a"/><circle cx="143" cy="205" r="3" fill="#555"/><circle cx="159" cy="205" r="3" fill="#555"/>' +
      /* boombox on the steps */
      '<rect x="0" y="216" width="400" height="44" fill="#1f2a1c"/><rect x="0" y="236" width="400" height="24" fill="#6e6b66"/>' +
      '<path d="M146 216h40l6 8h-52z" fill="#7a746a"/>' +
      '<g transform="translate(200 196)"><rect x="0" y="0" width="64" height="32" rx="4" fill="#2e2e33" stroke="#111" stroke-width="2"/><path d="M12 0v-6h40v6" stroke="#aaa" stroke-width="2.5" fill="none"/>' +
        '<g class="thump"><circle cx="15" cy="17" r="10" fill="#111" stroke="#999" stroke-width="2"/></g><g class="thump"><circle cx="49" cy="17" r="10" fill="#111" stroke="#999" stroke-width="2"/></g>' +
        '<rect x="27" y="6" width="10" height="7" fill="#9fe3ff"/></g>' +
      '<text class="note" x="250" y="190" font-size="14" fill="' + GOLD + '">♪</text><text class="note nt2" x="230" y="188" font-size="12" fill="#fff">♫</text><text class="note nt3" x="262" y="186" font-size="12" fill="' + RED + '">♪</text>' +
      tag("BASEMENT TAPES", 286, 254, 13, GOLD, -4),
      sky("gb", "#0a1226", "#283a62"));
  }

  /* 5. Farmers Blvd and Linden Blvd: the green street signs, a streetlight, the tag wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#g5)"/>' + stars(12) +
      '<rect x="20" y="70" width="240" height="150" fill="#5e3a2e"/>' +
      (function () { let b = ""; for (let y = 72; y < 220; y += 10) for (let x = (y / 10) % 2 ? 6 : 20; x < 260; x += 28) b += '<rect x="' + x + '" y="' + y + '" width="26" height="8" fill="#6e463a"/>'; return b; })() +
      tag("LL COOL J", 32, 140, 36, RED, -7) + tag("ST. ALBANS", 50, 190, 26, GOLD, -3) +
      hat(226, 104, 1.1) +
      /* streetlight with flicker */
      '<rect x="300" y="56" width="5" height="164" fill="#1d2329"/><path d="M302 58h26" stroke="#1d2329" stroke-width="5"/>' +
      '<path class="flk" d="M318 62h26l-6 8h-14z" fill="#ffe7a8"/><g opacity=".14"><path class="flk" d="M318 70l26 0 34 150h-94z" fill="#ffe7a8"/></g>' +
      sign(258, 88, 88, "Farmers Blvd") + sign(258, 110, 88, "Linden Blvd") +
      '<rect x="0" y="220" width="400" height="40" fill="#14181d"/><path d="M0 240h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>',
      sky("g5", "#0d1b2e", "#3a2a4f"));
  }

  /* LM1 helpers for the redrawn landmark rooms: same svg / sky / tag / bullet style as above, with their own little animations */
  const LM1 = (function () {
    const css = '<style>' +
      '@keyframes lmDrift{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.lm-drift{animation:lmDrift 24s linear infinite}.lm-d2{animation-delay:-12s}' +
      '@keyframes lmCar{from{transform:translateX(-110px)}to{transform:translateX(510px)}}.lm-car{animation:lmCar 6s linear infinite}.lm-c2{animation-delay:-3s}' +
      '@keyframes lmCarL{from{transform:translateX(510px)}to{transform:translateX(-110px)}}.lm-carL{animation:lmCarL 7.5s linear infinite}' +
      '@keyframes lmFlick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lm-flk{animation:lmFlick 2.2s infinite}.lm-f2{animation-delay:-.8s}' +
      '@keyframes lmSway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.lm-sway{transform-box:fill-box;transform-origin:50% 0;animation:lmSway 3s ease-in-out infinite}' +
      '.lm-swayb{transform-box:fill-box;transform-origin:50% 100%;animation:lmSway 3.6s ease-in-out infinite}.lm-s2{animation-delay:-1.5s}' +
      '@keyframes lmBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.lm-bob{animation:lmBob 1.4s ease-in-out infinite}.lm-b2{animation-delay:-.7s}.lm-b3{animation-delay:-.35s}' +
      '@keyframes lmRise{0%{transform:translate(0,0);opacity:1}80%{opacity:1}100%{transform:translate(14px,-150px);opacity:0}}.lm-rise{animation:lmRise 6s ease-in infinite}' +
      '@keyframes lmBlink{0%,49%{opacity:1}50%,100%{opacity:.25}}.lm-blink{animation:lmBlink 1s steps(1) infinite}.lm-k2{animation-delay:-.5s}' +
      '@keyframes lmSpin{to{transform:rotate(360deg)}}.lm-spin{transform-box:fill-box;transform-origin:50% 50%;animation:lmSpin 14s linear infinite}' +
      '@keyframes lmFly{from{transform:translate(-80px,30px)}to{transform:translate(480px,-30px)}}.lm-fly{animation:lmFly 9s linear infinite}' +
      '@keyframes lmLand{from{transform:translate(460px,-40px)}to{transform:translate(-120px,40px)}}.lm-land{animation:lmLand 10s linear infinite}' +
      '@keyframes lmRip{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.lm-rip{animation:lmRip 3s ease-in-out infinite}.lm-r2{animation-delay:-1.5s}' +
      '@keyframes lmBoat{0%,100%{transform:translateX(0)}50%{transform:translateX(-60px)}}.lm-boat{animation:lmBoat 12s ease-in-out infinite}' +
      '@keyframes lmWalk{from{transform:translateX(0)}to{transform:translateX(70px)}}.lm-walk{animation:lmWalk 5s ease-in-out infinite alternate}.lm-w2{animation-delay:-2.5s}' +
      '@keyframes lmFall{0%{transform:translate(0,-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(30px,250px) rotate(300deg);opacity:0}}.lm-fall{animation:lmFall 6s linear infinite}.lm-l2{animation-delay:-2s}.lm-l3{animation-delay:-4s}' +
      '@keyframes lmDrop{0%{transform:translateY(0)}100%{transform:translateY(118px)}}.lm-drop{animation:lmDrop 2.6s cubic-bezier(.5,0,.9,.6) infinite}' +
      '@keyframes lmBall{0%{transform:translate(0,0)}50%{transform:translate(-90px,-26px)}100%{transform:translate(-180px,0)}}.lm-ball{animation:lmBall 2.4s linear infinite}' +
      '@keyframes lmSwim{0%,100%{transform:translateX(0)}50%{transform:translateX(90px)}}.lm-swim{animation:lmSwim 7s ease-in-out infinite}.lm-sw2{animation-delay:-3.5s}' +
      '</style>';
    const svg = (inner, defs) =>
      '<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
    const sky = (id, top, bottom) =>
      '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
    const tag = (txt, x, y, size, fill, rot) =>
      '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
      '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
    const bullet = (x, y, letter, color, dark, r) => { r = r || 11;
      return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * .5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="' + (r * 1.36).toFixed(1) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>'; };
    const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 70) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
    const T = (x, y, txt, size, fill, o) => { o = o || {};
      return '<text x="' + x + '" y="' + y + '" text-anchor="' + (o.a || "middle") + '" font-family="' + (o.f || "Anton, Impact, sans-serif") + '"' + (o.w ? ' font-weight="' + o.w + '"' : '') +
        (o.ls ? ' letter-spacing="' + o.ls + '"' : '') + ' font-size="' + size + '" fill="' + fill + '"' + (o.cls ? ' class="' + o.cls + '"' : '') + '>' + txt + '</text>'; };
    /* a name plaque: dark box, title + subtitle */
    const plaque = (x, y, w, title, sub, bg, accent) => {
      const ts = Math.min(12, (w - 14) / (title.length * .66)), ss = sub ? Math.min(8, (w - 12) / (sub.length * .62 + sub.length * 1.5 / 8)) : 0;
      return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (sub ? 34 : 22) + '" rx="4" fill="' + bg + '" stroke="' + accent + '" stroke-width="2"/>' +
        T(x + w / 2, y + 16, title, ts.toFixed(1), "#fff") + (sub ? T(x + w / 2, y + 28, sub, ss.toFixed(1), accent, { f: "Barlow, Arial, sans-serif", w: 700, ls: (ss * 1.5 / 8).toFixed(2) }) : ""); };
    /* green NYC street sign blade */
    const blade = (x, y, w, txt) =>
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#1f7a3a" stroke="#fff" stroke-width="1.5"/>' +
      T(x + w / 2, y + 13, txt, 11, "#fff", { f: "Helvetica, Arial, sans-serif", w: 700 });
    const car = (cls, y, c, w) => { w = w || 44;
      return '<g class="' + cls + '"><rect x="0" y="' + y + '" width="' + w + '" height="12" rx="4" fill="' + c + '"/><rect x="' + (w * .22) + '" y="' + (y - 7) + '" width="' + (w * .5) + '" height="8" rx="3" fill="' + c + '"/>' +
        '<rect x="' + (w * .27) + '" y="' + (y - 5) + '" width="' + (w * .4) + '" height="5" fill="#cfe6ff" opacity=".8"/><circle cx="' + (w * .22) + '" cy="' + (y + 12) + '" r="3.5" fill="#111"/><circle cx="' + (w * .78) + '" cy="' + (y + 12) + '" r="3.5" fill="#111"/>' +
        '<rect x="' + (w - 3) + '" y="' + (y + 3) + '" width="3" height="3" fill="#fff6c2"/></g>'; };
    /* faceless figure (silhouette), optional sign held up */
    const fig = (x, y, c, sign, sc) => { sc = sc || 1;
      return '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')"><circle cx="0" cy="-30" r="5" fill="' + c + '"/><path d="M-6 -24h12l2 16h-4l-1 14h-6l-1-14h-4z" fill="' + c + '"/>' +
        (sign ? '<path d="M5 -22l6-14" stroke="' + c + '" stroke-width="2.5"/><rect x="' + (13 - Math.max(30, sign[0].length * 4.6 + 6) / 2) + '" y="-58" width="' + Math.max(30, sign[0].length * 4.6 + 6) + '" height="20" fill="' + sign[1] + '" stroke="#222" stroke-width="1"/>' +
          T(13, -44, sign[0], 7, sign[2] || "#111", { f: "Barlow, Arial, sans-serif", w: 700 }) : "") + '</g>'; };
    const wins = (x0, y0, cols, rows, dx, dy, w, h, c, lit) => { let s = "";
      for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) s += '<rect x="' + (x0 + k * dx) + '" y="' + (y0 + r * dy) + '" width="' + w + '" height="' + h + '" fill="' + ((lit && (k * 7 + r * 3) % 4 === 0) ? lit : c) + '"/>';
      return s; };
    const brickLines = (x, y, w, h, c, step) => { let s = ""; for (let yy = y + (step || 7); yy < y + h; yy += (step || 7)) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + c + '" stroke-width=".6"/>'; return s; };
    const cloud = (cls, x, y, s, op) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" opacity="' + (op || .8) + '"><ellipse cx="0" cy="0" rx="26" ry="9" fill="#fff"/><ellipse cx="12" cy="-6" rx="14" ry="9" fill="#fff"/><ellipse cx="-10" cy="-4" rx="11" ry="7" fill="#fff"/></g></g>';
    const tree = (x, y, r, c, cls) => '<g class="' + (cls || "lm-swayb") + '"><rect x="' + (x - 2.5) + '" y="' + (y - 4) + '" width="5" height="' + (r + 6) + '" fill="#5a3a22"/><circle cx="' + x + '" cy="' + (y - r * .6) + '" r="' + r + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x - r * .6) + '" cy="' + (y - r * .2) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '"/><circle cx="' + (x + r * .6) + '" cy="' + (y - r * .2) + '" r="' + (r * .7) + '" fill="' + (c || "#3f7a3a") + '"/></g>';
    const bird = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" fill="none" stroke="#222" stroke-width="1.6"/></g>';
    /* subway car side (R-type), for the station rooms */
    const subCar = (x, y, w, stripe, letters) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="60" rx="7" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/><rect x="' + x + '" y="' + (y + 40) + '" width="' + w + '" height="4" fill="' + stripe + '"/>';
      for (let k = x + 14; k < x + w - 40; k += 44) s += '<rect x="' + k + '" y="' + (y + 10) + '" width="28" height="20" rx="3" fill="#cfe6ff" opacity=".85"/>';
      return s + '<rect x="' + (x + w - 22) + '" y="' + (y + 10) + '" width="14" height="22" rx="3" fill="#1d2a3a"/><circle cx="' + (x + w - 8) + '" cy="' + (y + 50) + '" r="3.5" fill="#fff6c2"/>' + (letters || ""); };
    return { svg, sky, tag, bullet, stars, T, plaque, blade, car, fig, wins, brickLines, cloud, tree, bird, subCar };
  })();

  window.SCENES = { train, addisleigh, linden, basement, corner };
})();
