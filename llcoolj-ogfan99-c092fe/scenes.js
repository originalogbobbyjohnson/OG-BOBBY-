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

  /* 1. The J pulling into Jamaica Center-Parsons/Archer, underground under Archer Av: warm tan tile, brown band */
  function train() {
    let tiles = "";
    for (let y = 30; y < 116; y += 10) tiles += '<path d="M0 ' + y + 'h400" stroke="#c7b394" stroke-width=".8"/>';
    for (let x = 0; x < 400; x += 20) tiles += '<path d="M' + x + ' 30v86" stroke="#c7b394" stroke-width=".6"/>';
    let cols = "";
    [20, 380].forEach(x => cols += '<rect x="' + (x - 6) + '" y="0" width="12" height="186" fill="#22252a"/><rect x="' + (x - 8) + '" y="0" width="16" height="6" fill="#363b42"/>');
    let windows = "";
    for (let x = 18; x < 300; x += 46) windows += '<rect x="' + x + '" y="134" width="30" height="22" rx="3" fill="#fff1c9" opacity=".85"/>';
    return svg(
      '<rect width="400" height="260" fill="#121212"/>' +
      '<rect x="0" y="0" width="400" height="30" fill="#2a2724"/>' +
      '<rect x="0" y="30" width="400" height="86" fill="#e6d6ba"/>' + tiles +
      '<rect x="0" y="30" width="400" height="8" fill="#7a4e2a"/><rect x="0" y="108" width="400" height="8" fill="#7a4e2a"/>' +
      /* station sign */
      '<rect x="44" y="50" width="312" height="44" rx="4" fill="#111"/><rect x="44" y="50" width="312" height="4" fill="#fff"/>' +
      '<text x="56" y="70" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="14" fill="#fff">Jamaica Center</text>' +
      '<text x="56" y="86" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="11" fill="#ddd">Parsons/Archer</text>' +
      bullet(280, 73, "E", ACE) + bullet(306, 73, "J", JZ) + bullet(332, 73, "Z", JZ) +
      '<g class="flk"><rect x="80" y="10" width="90" height="5" rx="2" fill="#fff7d6"/></g><g class="flk flk2"><rect x="240" y="10" width="90" height="5" rx="2" fill="#fff7d6"/></g>' +
      '<rect x="0" y="116" width="400" height="70" fill="#09090a"/>' +
      '<g class="anim-train">' +
        '<rect x="8" y="122" width="300" height="62" rx="8" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' +
        '<rect x="8" y="164" width="300" height="4" fill="' + JZ + '"/>' + windows +
        '<rect x="285" y="134" width="16" height="22" rx="3" fill="#fff1c9" opacity=".85"/>' +
        '<circle cx="300" cy="176" r="4" fill="#fff6c2"/>' + bullet(296, 144, "J", JZ) +
      '</g>' + cols +
      '<rect x="0" y="186" width="400" height="10" fill="#eab308"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#26282b"/>' +
      tag("UNCLE L", 40, 242, 32, RED, -5) + tag("QUEENS", 250, 242, 30, GOLD, -7));
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

  /* 3. The LIRR overpass on Linden Blvd at 180 St by St. Albans station: the colorful jazz mural under the bridge, a train crossing over, cars on the boulevard */
  function linden() {
    let rail = "";
    for (let x = 0; x < 400; x += 16) rail += '<rect x="' + x + '" y="64" width="3" height="14" fill="#5a6168"/>';
    const car = (x, y, c) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="6" width="64" height="16" rx="5" fill="' + c + '"/><path d="M12 6l8-8h22l8 8z" fill="' + c + '"/><path d="M15 6l6-6h8v6zM32 6v-6h9l6 6z" fill="#cfe6ff"/>' +
      '<circle cx="14" cy="22" r="5" fill="#111"/><circle cx="50" cy="22" r="5" fill="#111"/></g>';
    let keys = "";
    for (let i = 0; i < 12; i++) keys += '<rect x="' + (232 + i * 8) + '" y="176" width="7" height="22" fill="#fff" stroke="#222" stroke-width=".6"/>' + (i % 7 !== 2 && i % 7 !== 6 ? '<rect x="' + (237 + i * 8) + '" y="176" width="4" height="13" fill="#111"/>' : "");
    return svg(
      '<rect width="400" height="260" fill="url(#gl)"/>' +
      /* storefront strip behind */
      '<rect x="0" y="40" width="400" height="60" fill="#5a4a44"/>' +
      '<rect x="0" y="40" width="400" height="4" fill="#3a2e2a"/>' +
      /* the train crosses on top */
      '<g class="lirr"><rect x="0" y="40" width="380" height="26" rx="4" fill="#c9ced6" stroke="#6b7280" stroke-width="1.5"/>' +
        '<rect x="0" y="54" width="380" height="3" fill="#2a4f9a"/>' +
        (function () { let w = ""; for (let x = 10; x < 370; x += 30) w += '<rect x="' + x + '" y="44" width="20" height="9" rx="1.5" fill="#cfe6ff"/>'; return w; })() +
        '<circle cx="372" cy="60" r="3" fill="#fff6c2"/></g>' +
      /* bridge deck */
      '<rect x="0" y="66" width="400" height="22" fill="#6d747b"/>' + rail +
      '<rect x="0" y="86" width="400" height="6" fill="#4a5056"/>' +
      '<text x="200" y="82" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="12" letter-spacing="3" fill="#fff">ST. ALBANS</text>' +
      /* abutment walls with the mural */
      '<rect x="0" y="92" width="400" height="114" fill="#1e1a24"/>' +
      '<rect x="14" y="100" width="372" height="102" rx="3" fill="#f2c14e"/>' +
      '<path d="M14 160q90-50 186 0t186 0v42h-372z" fill="#2a6fb0"/><path d="M14 120q60 30 120 0t120 0t132 0v-20h-372z" fill="#e8562b"/>' +
      /* instruments, no faces: sax, trumpet, piano keys, a ball and bat, notes */
      '<path d="M60 120v44q0 14 12 14t12-12" fill="none" stroke="#c9922b" stroke-width="7" stroke-linecap="round"/><circle cx="84" cy="164" r="6" fill="#c9922b"/><path d="M56 118l10-4" stroke="#333" stroke-width="3"/>' +
      '<path d="M120 150h46l14-10v26l-14-10h-46z" fill="#e8b84a" stroke="#7a5512" stroke-width="1.5"/><rect x="134" y="140" width="4" height="10" fill="#7a5512"/><rect x="142" y="140" width="4" height="10" fill="#7a5512"/>' +
      '<circle cx="196" cy="182" r="9" fill="#fff" stroke="#c22" stroke-width="1.2"/><path d="M190 178q6 4 0 9M202 178q-6 4 0 9" stroke="#c22" stroke-width="1" fill="none"/><path d="M206 174l30-30" stroke="#9a6a3a" stroke-width="5" stroke-linecap="round"/>' +
      keys +
      '<text x="350" y="140" font-size="22" fill="#111">♪</text><text x="320" y="122" font-size="16" fill="#111">♫</text>' +
      '<text x="200" y="118" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="2" fill="#111">JAZZ  ·  SOUL  ·  HIP HOP</text>' +
      /* the boulevard */
      '<rect x="0" y="206" width="400" height="54" fill="#2a2d33"/><path d="M0 232h400" stroke="#eab308" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<g class="carr">' + car(0, 206, "#c0392b") + '</g><g class="carl">' + car(0, 230, "#e8e8e8") + '</g>',
      sky("gl", "#f29a5b", "#ffd9a0"));
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

  window.SCENES = { train, addisleigh, linden, basement, corner };
})();
