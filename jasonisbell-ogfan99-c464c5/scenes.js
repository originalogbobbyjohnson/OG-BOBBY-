/* jasonisbell scenes (Regions: More of the South / Genres: country-Americana; Green Hill, Lauderdale County AL and the Shoals: Florence, Muscle Shoals). CSS classes prefixed jix- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e8c25a", BRICK = "#c0442f", RIVER = "#5aa0c8", CREAM = "#f4ead6";
  const css = '<style>' +
    '@keyframes jixcloud{0%{transform:translateX(0)}100%{transform:translateX(50px)}}.jix-cl{animation:jixcloud 14s ease-in-out infinite alternate}' +
    '@keyframes jixdrive{0%{transform:translateX(-140px)}100%{transform:translateX(460px)}}.jix-car{animation:jixdrive 7s linear infinite}' +
    '@keyframes jixflow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.jix-flow{animation:jixflow 2.4s linear infinite}' +
    '@keyframes jixfall{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(18px);opacity:.2}}.jix-fall{animation:jixfall 1.2s linear infinite}.jix-fall2{animation-delay:-.6s}' +
    '@keyframes jixbulb{0%,100%{opacity:.35}50%{opacity:1}}.jix-b{animation:jixbulb 1.2s ease-in-out infinite}.jix-b2{animation-delay:-.6s}' +
    '@keyframes jixnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(18px,-58px);opacity:0}}.jix-nt{animation:jixnote 3.2s ease-out infinite}.jix-nt2{animation-delay:-1.1s}.jix-nt3{animation-delay:-2.2s}' +
    '@keyframes jixspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jix-sp{animation:jixspray 1.4s ease-out infinite}.jix-sp2{animation-delay:.45s}' +
    '@keyframes jixsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.jix-sw{transform-box:fill-box;transform-origin:50% 100%;animation:jixsway 3.6s ease-in-out infinite}.jix-sw2{animation-delay:-1.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const pine = (x, y, s, c, cls) => '<g class="jix-sw ' + (cls || "") + '"><rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (8 * s) + '" fill="#4a3020"/><path d="M' + x + ' ' + (y - 40 * s) + 'l' + (9 * s) + ' ' + (14 * s) + 'h-' + (4 * s) + 'l' + (9 * s) + ' ' + (12 * s) + 'h-' + (4 * s) + 'l' + (9 * s) + ' ' + (12 * s) + 'h-' + (28 * s) + 'l' + (9 * s) + ' -' + (12 * s) + 'h-' + (4 * s) + 'l' + (9 * s) + ' -' + (12 * s) + 'h-' + (4 * s) + 'z" fill="' + c + '"/></g>';
  const note = (x, y, c, cls) => '<g class="jix-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '" transform="rotate(-20 ' + x + ' ' + y + ')"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="1.8" height="18" fill="' + c + '"/><path d="M' + (x + 5.4) + ' ' + (y - 18) + 'q7 3 5 10" stroke="' + c + '" stroke-width="1.8" fill="none"/></g>';
  const usShield = (x, y, n) => '<path d="M' + x + ' ' + y + 'h40q-2 6 2 12q-4 22 -22 30q-18 -8 -22 -30q4 -6 2 -12z" fill="#fff" stroke="#111" stroke-width="2.5"/><text x="' + (x + 20) + '" y="' + (y + 28) + '" text-anchor="middle" ' + font + ' font-size="17" fill="#111">' + n + '</text>';
  const truss = (x0, x1, y, h, c) => { let s = '<path d="M' + x0 + ' ' + y + 'H' + x1 + 'M' + x0 + ' ' + (y - h) + 'H' + x1 + '" stroke="' + c + '" stroke-width="3"/>'; for (let x = x0, i = 0; x < x1; x += 20, i++) s += '<path d="M' + x + ' ' + y + 'l20 -' + h + 'M' + x + ' ' + (y - h) + 'l20 ' + h + 'M' + x + ' ' + y + 'v-' + h + '" stroke="' + c + '" stroke-width="1.6"/>'; return s; };

  /* 1. US 43 north into Green Hill, Lauderdale County AL: green guide sign, US 43 shield, pines, a pickup rolling by */
  function jixsign() {
    let pines = "";
    [[20, 168, 1.6], [56, 170, 1.2], [340, 168, 1.7], [376, 170, 1.3]].forEach((p, i) => pines += pine(p[0], p[1], p[2], i % 2 ? "#2a5a32" : "#2f6a3a", i % 2 ? "jix-sw2" : ""));
    return svg(
      '<rect width="400" height="260" fill="url(#jix1)"/>' +
      '<g class="jix-cl"><ellipse cx="80" cy="30" rx="38" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="30" ry="7" fill="#fff" opacity=".5"/></g>' +
      '<path d="M0 150q100 -20 200 -6t200 -4V176H0z" fill="#6a9a4a"/>' + pines +
      '<rect x="0" y="176" width="400" height="84" fill="#4a4a4e"/><rect x="0" y="174" width="400" height="4" fill="#d9d4c6"/>' +
      '<path d="M0 218h400" stroke="#f2c14e" stroke-width="3" stroke-dasharray="26 18"/><rect x="0" y="252" width="400" height="3" fill="#f2f2f2"/>' +
      '<rect x="138" y="102" width="6" height="74" fill="#9aa0a6"/><rect x="296" y="102" width="6" height="74" fill="#9aa0a6"/>' +
      '<rect x="112" y="22" width="216" height="84" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="3"/>' +
      '<text x="220" y="58" text-anchor="middle" ' + font + ' font-size="26" fill="#fff">Green Hill</text>' +
      '<text x="220" y="80" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" letter-spacing="1">LAUDERDALE COUNTY</text>' +
      '<path d="M206 92h28l-6 -6M234 92l-6 6" stroke="#fff" stroke-width="2.5" fill="none"/>' +
      usShield(70, 100, "43") + '<rect x="66" y="148" width="48" height="14" fill="#fff" stroke="#111"/><text x="90" y="159" text-anchor="middle" ' + font + ' font-size="10" fill="#111">NORTH</text><rect x="88" y="162" width="4" height="14" fill="#9aa0a6"/>' +
      '<g class="jix-car"><rect x="0" y="196" width="70" height="20" rx="3" fill="' + RIVER + '"/><path d="M10 196l8 -14h22l6 14z" fill="' + RIVER + '"/><path d="M20 194l5 -9h12l4 9z" fill="#dff0f8"/><rect x="46" y="190" width="24" height="6" fill="#2f6a8a"/><circle cx="16" cy="218" r="7" fill="#111"/><circle cx="56" cy="218" r="7" fill="#111"/><circle cx="16" cy="218" r="3" fill="#bbb"/><circle cx="56" cy="218" r="3" fill="#bbb"/></g>',
      sky("jix1", "#4f8fcf", "#f2d9a8"));
  }

  /* 2. Wilson Dam on the Tennessee River between Florence and Muscle Shoals: the long gray concrete dam with its row of arches, water spilling */
  function jixdam() {
    let arches = "", falls = "";
    for (let x = 0, i = 0; x < 400; x += 22, i++) {
      arches += '<path d="M' + (x + 3) + ' 150v-26q8 -12 16 0v26z" fill="#6a6e72"/>';
      falls += '<rect class="jix-fall ' + (i % 2 ? "jix-fall2" : "") + '" x="' + (x + 5) + '" y="152" width="12" height="16" fill="#cfe8f4" opacity=".8"/>';
    }
    return svg(
      '<rect width="400" height="260" fill="url(#jix2)"/>' +
      '<g class="jix-cl"><ellipse cx="320" cy="34" rx="40" ry="9" fill="#fff" opacity=".7"/></g>' +
      '<path d="M0 80q80 -20 160 -6t240 -10V100H0z" fill="#5a8a4a"/>' +
      /* the dam */
      '<rect x="0" y="86" width="400" height="16" fill="#c9c6bc"/><rect x="0" y="100" width="400" height="52" fill="#b2afa4"/>' + arches +
      [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 10) + '" y="72" width="20" height="16" fill="#a8a59a"/><rect x="' + (x - 6) + '" y="66" width="12" height="8" fill="#8e8b80"/>').join("") +
      '<text x="200" y="97" text-anchor="middle" ' + font + ' font-size="8" fill="#5a5a52" letter-spacing="2">WILSON DAM · TENNESSEE RIVER</text>' +
      falls +
      /* river */
      '<rect x="0" y="166" width="400" height="94" fill="#3f7fa0"/>' +
      '<g class="jix-flow"><path d="M0 182h30M60 190h40M140 180h30M210 196h50M290 186h30M350 200h40M420 190h30M20 214h40M110 222h30M200 212h50M300 226h40M380 216h40" stroke="#a8d8ec" stroke-width="2" opacity=".7"/></g>' +
      '<path d="M0 166q200 10 400 0" stroke="#fff" stroke-width="3" opacity=".5" fill="none"/>',
      sky("jix2", "#5aa0d8", "#e2f0f8"));
  }

  /* 3. FAME Studios, Avalon Ave in Muscle Shoals, where the Shoals sound was cut and where he started out: low tan brick building, a guitar amp glowing, notes floating */
  function jixfame() {
    return svg(
      '<rect width="400" height="260" fill="url(#jix3)"/>' +
      pine(26, 160, 1.5, "#2a5a32") + pine(380, 160, 1.6, "#2f6a3a", "jix-sw2") +
      '<rect x="60" y="80" width="280" height="90" fill="#c8a878"/>' + Array.from({ length: 12 }, (_, r) => '<path d="M60 ' + (86 + r * 7) + 'h280" stroke="#a8885a" stroke-width=".8" opacity=".7"/>').join("") +
      '<rect x="52" y="70" width="296" height="12" fill="#5a3a22"/>' +
      '<rect x="88" y="104" width="44" height="30" fill="#2a3a44" stroke="#5a3a22" stroke-width="3"/><rect x="268" y="104" width="44" height="30" fill="#2a3a44" stroke="#5a3a22" stroke-width="3"/>' +
      '<rect x="176" y="112" width="48" height="58" fill="#3a2a1e" stroke="#5a3a22" stroke-width="3"/><circle cx="216" cy="142" r="3" fill="' + GOLD + '"/>' +
      '<text x="200" y="80" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '" letter-spacing="2">MUSCLE SHOALS, AL</text>' +
      '<rect x="0" y="170" width="400" height="10" fill="#cfc8b8"/><rect x="0" y="180" width="400" height="80" fill="#4a4a4e"/>' +
      '<rect x="150" y="226" width="100" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">AVALON AVE</text>' +
      /* amp in the doorway */
      '<rect x="110" y="140" width="40" height="34" rx="3" fill="#222" stroke="#111" stroke-width="2"/><rect x="114" y="144" width="32" height="20" fill="#5a4a3a"/><circle class="jix-b" cx="142" cy="168" r="2" fill="#e83a2a"/>' +
      note(140, 160, GOLD, "") + note(156, 166, "#fff", "jix-nt2") + note(128, 168, GOLD, "jix-nt3"),
      sky("jix3", "#e8905a", "#f8d8a0"));
  }

  /* 4. The Shoals Theatre on Court St in downtown Florence: art-deco vertical sign and marquee with chasing bulbs */
  function jixtheatre() {
    let bulbs = "";
    for (let x = 96, i = 0; x <= 304; x += 12, i++) bulbs += '<circle class="jix-b ' + (i % 2 ? "jix-b2" : "") + '" cx="' + x + '" cy="118" r="2.6" fill="#ffe08a"/><circle class="jix-b ' + (i % 2 ? "" : "jix-b2") + '" cx="' + x + '" cy="162" r="2.6" fill="#ffe08a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jix4)"/>' +
      Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (8 + (i * 29) % 70) + '" r="1" fill="#fff" opacity=".6"/>').join("") +
      '<rect x="40" y="40" width="80" height="150" fill="#6a3a2a"/><rect x="280" y="50" width="90" height="140" fill="#5a3226"/>' +
      '<rect x="110" y="24" width="180" height="166" fill="#d8c8a8"/>' + [130, 170, 210, 250].map(x => '<rect x="' + x + '" y="40" width="20" height="40" fill="#3a3040"/>').join("") +
      /* vertical sign */
      '<rect x="186" y="6" width="28" height="104" rx="4" fill="' + BRICK + '" stroke="' + GOLD + '" stroke-width="2"/>' +
      'SHOALS'.split("").map((c, i) => '<text x="200" y="' + (26 + i * 16) + '" text-anchor="middle" ' + font + ' font-size="14" fill="#fff8e0">' + c + '</text>').join("") +
      /* marquee */
      '<path d="M86 112h228l-10 56h-208z" fill="#1d1a22" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<rect x="110" y="126" width="180" height="28" fill="#fff8e0"/><text x="200" y="137" text-anchor="middle" ' + font + ' font-size="9" fill="#111">TONIGHT</text><text x="200" y="150" text-anchor="middle" ' + font + ' font-size="11" fill="#111">JASON ISBELL</text>' +
      '<rect x="110" y="168" width="180" height="30" fill="#3a2a2e"/><rect x="170" y="172" width="60" height="26" fill="#ffd27a" opacity=".6"/>' +
      '<rect x="0" y="198" width="400" height="10" fill="#bfb8a8"/><rect x="0" y="208" width="400" height="52" fill="#3a3a3e"/>' +
      '',
      sky("jix4", "#141a3a", "#3a2a4a"));
  }

  /* 5. His corner in the Shoals: Court St and Tennessee St in downtown Florence, a brick wall tagged ISBELL, the O'Neal Bridge over the Tennessee River behind */
  function jixcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jix5)"/>' +
      '<circle cx="70" cy="56" r="20" fill="#ffcf7a" opacity=".85"/>' +
      '<path d="M0 104q100 -14 200 -4t200 -6V120H0z" fill="#4a6a3a"/>' +
      '<rect x="0" y="112" width="400" height="40" fill="#3f7fa0"/><g class="jix-flow"><path d="M0 128h30M70 136h40M150 124h30M220 140h50M300 130h30M360 138h40M420 132h30" stroke="#a8d8ec" stroke-width="1.5" opacity=".7"/></g>' +
      /* O'Neal Bridge: steel truss on piers */
      truss(0, 400, 108, 18, "#3a5a6a") + [60, 160, 260, 360].map(x => '<rect x="' + (x - 5) + '" y="108" width="10" height="40" fill="#9aa0a6"/>').join("") +
      '<text x="200" y="84" text-anchor="middle" ' + font + ' font-size="8" fill="#e8f2fb" letter-spacing="1" opacity=".85">O\'NEAL BRIDGE · TENNESSEE RIVER</text>' +
      /* brick wall with tags */
      '<rect x="0" y="152" width="400" height="70" fill="#8a4a36"/>' + Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (158 + r * 7) + 'h400" stroke="#6a3626" stroke-width=".8" opacity=".7"/>').join("") +
      tag("ISBELL", 18, 202, 36, GOLD, -5) + tag("400 UNIT", 196, 186, 17, RIVER, -4) + tag("GREEN HILL", 200, 212, 15, CREAM, -3) +
      '<g class="jix-sp"><circle cx="150" cy="186" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="jix-sp jix-sp2"><circle cx="156" cy="180" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#4c4a46"/><rect x="0" y="220" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="344" y="56" width="6" height="166" fill="#2f2f2f"/>' + sign(298, 56, 96, "COURT ST") + sign(282, 82, 112, "TENNESSEE ST"),
      sky("jix5", "#24305a", "#e88a5a"));
  }

  window.SCENES = { jixsign: jixsign, jixdam: jixdam, jixfame: jixfame, jixtheatre: jixtheatre, jixcorner: jixcorner };
})();
