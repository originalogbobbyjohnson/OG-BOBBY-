/* brunomars scenes (Regions tab: Los Angeles + SoCal - no Hawaii region; Waikiki, Honolulu - Peter Hernandez, born 1985, "Little Elvis" in his father's Waikiki show, Roosevelt High in Makiki, to Los Angeles at 17).
   CSS classes and ids prefixed bm- (the page's own anim-train is kept, used on the bus).
   1 TheBus Route 8 (Makiki - Ala Moana - Waikiki, real route) pulling up on Kalakaua Ave, palms and the beach behind.
   2 The Waikiki hotel showroom: his father's doo-wop band the Love Notes, a tiny white rhinestone jumpsuit on the stage for "Little Elvis", marquee bulbs chasing.
   3 The Ilikai Hotel by the yacht harbor (his teen group the School Boys had a standing gig there): the white Y-shaped tower, the glass elevator riding up the outside, masts bobbing.
   4 Roosevelt High School on its grassy knoll in upper Makiki: the cream Spanish Revival main building, tower, red tile roofs, a CLASS OF 2003 banner flapping.
   5 Kalakaua Ave and Royal Hawaiian Ave: green signs, BRUNO MARS tagged on the wall, the pink 1927 beach hotel (Spanish-Moorish, the "Pink Palace") behind.
   400 x 260 SVGs. No logos, no faces. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bmchase{0%,100%{opacity:1}50%{opacity:.25}}.bm-bulb{animation:bmchase .8s steps(1) infinite}.bm-b2{animation-delay:-.4s}' +
    '@keyframes bmglow{0%,100%{opacity:.55}50%{opacity:1}}.bm-glow{animation:bmglow 2.4s ease-in-out infinite}' +
    '@keyframes bmwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.bm-wave{animation:bmwave 3s ease-in-out infinite}.bm-w2{animation-delay:-1.5s}' +
    '@keyframes bmpalm{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.bm-palm{transform-box:fill-box;transform-origin:50% 100%;animation:bmpalm 3.4s ease-in-out infinite}.bm-p2{animation-delay:-1.7s}' +
    '@keyframes bmlift{0%,100%{transform:translateY(0)}50%{transform:translateY(-120px)}}.bm-lift{animation:bmlift 7s ease-in-out infinite}' +
    '@keyframes bmbob{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(2px) rotate(1.5deg)}}.bm-bob{transform-box:fill-box;transform-origin:50% 100%;animation:bmbob 2.6s ease-in-out infinite}.bm-bo2{animation-delay:-1.3s}' +
    '@keyframes bmflap{0%,100%{transform:skewY(0)}50%{transform:skewY(3deg)}}.bm-flap{transform-box:fill-box;transform-origin:0 50%;animation:bmflap 1.6s ease-in-out infinite}' +
    '@keyframes bmspin{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}.bm-spin{transform-box:fill-box;transform-origin:50% 0;animation:bmspin 2.2s ease-in-out infinite}' +
    '@keyframes bmcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.bm-car{animation:bmcar 7s linear infinite}' +
    '@keyframes bmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.bm-sp{animation:bmspray 1.4s ease-out infinite}.bm-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const GOLD = "#ffcf40", CORAL = "#ff6f61", TEAL = "#2ec4c6", SIGN = "#0f6b3a", PINK = "#f29cb0", SEA = "#1fa2c9";
  const palm = (x, y, h, cls) => '<g class="bm-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-6 ' + (-h / 2) + ' 4 ' + (-h) + '" stroke="#7a5a3a" stroke-width="6" fill="none"/>' +
    [[-30, 8], [30, 8], [-22, -10], [22, -10], [0, -16]].map(([dx, dy]) => '<path d="M' + (x + 4) + ' ' + (y - h) + 'q' + (dx / 2) + ' ' + (dy - 14) + ' ' + dx + ' ' + (dy + 4) + '" stroke="#2f7a3a" stroke-width="7" fill="none" stroke-linecap="round"/>').join("") + '</g>';

  /* 1. TheBus Route 8 on Kalakaua Ave */
  function bmbus() {
    return svg(
      '<rect width="400" height="260" fill="url(#bms1)"/>' +
      /* ocean + sand */
      '<rect x="0" y="96" width="400" height="44" fill="' + SEA + '"/>' +
      '<g class="bm-wave"><path d="M0 108q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e8f8ff" stroke-width="2" fill="none"/></g>' +
      '<g class="bm-wave bm-w2"><path d="M0 124q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfeaf5" stroke-width="2" fill="none"/></g>' +
      '<rect x="0" y="140" width="400" height="22" fill="#f1dcae"/>' +
      palm(40, 170, 90) + palm(360, 170, 100, "bm-p2") + palm(300, 168, 70) +
      /* road */
      '<rect x="0" y="162" width="400" height="10" fill="#bdb8ae"/><rect x="0" y="172" width="400" height="88" fill="#3a3a3e"/><path d="M0 238h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* bus stop sign */
      '<rect x="332" y="120" width="4" height="56" fill="#666"/><rect x="318" y="104" width="32" height="22" rx="3" fill="#f7f3ea" stroke="#333" stroke-width="1.5"/><text x="334" y="113" text-anchor="middle" ' + font + ' font-size="7" fill="#c8102e">BUS</text><text x="334" y="122" text-anchor="middle" ' + font + ' font-size="7" fill="#111">STOP</text>' +
      /* TheBus */
      '<g class="anim-train"><rect x="40" y="150" width="250" height="78" rx="10" fill="#f7f6f2" stroke="#7a7a7a" stroke-width="2"/>' +
      '<path d="M40 204h250" stroke="#ffcf40" stroke-width="5"/><path d="M40 210h250" stroke="#f08a24" stroke-width="5"/><path d="M40 216h250" stroke="#c8402a" stroke-width="5"/><path d="M40 222h250" stroke="#7a3a20" stroke-width="4"/>' +
      [0, 1, 2, 3, 4].map(i => '<rect x="' + (60 + i * 40) + '" y="162" width="32" height="28" rx="3" fill="#1d2733"/>').join("") +
      '<rect x="262" y="162" width="24" height="38" rx="3" fill="#2a3a4a"/><rect x="196" y="158" width="88" height="0" fill="none"/>' +
      '<rect x="234" y="152" width="52" height="10" rx="2" fill="#111"/><text x="260" y="160" text-anchor="middle" ' + font + ' font-size="8" fill="#ffb000">8 WAIKIKI</text>' +
      [80, 250].map(x => '<circle cx="' + x + '" cy="230" r="12" fill="#111"/><circle cx="' + x + '" cy="230" r="5" fill="#888"/>').join("") + '</g>' +
      '<text x="12" y="252" ' + font + ' font-size="9" fill="#fff">KALAKAUA AVE</text>',
      sky("bms1", "#6fc3ef", "#e9f7ff"));
  }

  /* 2. The Waikiki showroom - the Love Notes and Little Elvis */
  function bmlounge() {
    const bulbs = (y, x0, x1) => Array.from({ length: Math.floor((x1 - x0) / 12) }, (_, i) => '<circle class="bm-bulb' + (i % 2 ? " bm-b2" : "") + '" cx="' + (x0 + 6 + i * 12) + '" cy="' + y + '" r="2.6" fill="#ffe27a"/>').join("");
    const mic = (x, h) => '<path d="M' + x + ' 206v-' + h + '" stroke="#bbb" stroke-width="3"/><rect x="' + (x - 4) + '" y="' + (196 - h) + '" width="8" height="12" rx="4" fill="#ddd" stroke="#888" stroke-width="1"/><path d="M' + (x - 12) + ' 208h24" stroke="#bbb" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="#160c1e"/>' +
      /* curtains */
      '<path d="M0 0h400v30q-50 14 -100 0q-50 14 -100 0q-50 14 -100 0q-50 14 -100 0z" fill="#b3122e"/>' +
      '<path d="M0 30h60q-6 90 8 180h-68z" fill="#8a0f24"/><path d="M400 30h-60q6 90 -8 180h68z" fill="#8a0f24"/>' +
      /* marquee */
      '<rect x="96" y="44" width="208" height="40" rx="4" fill="#2a1a3a" stroke="#ffe27a" stroke-width="2"/>' + bulbs(50, 100, 300) + bulbs(78, 100, 300) +
      '<text x="200" y="64" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">THE LOVE NOTES</text><text x="200" y="75" text-anchor="middle" ' + font + ' font-size="8" fill="#f7f3ea">WITH LITTLE ELVIS · NIGHTLY</text>' +
      /* spotlight */
      '<path d="M200 90L150 210h100z" fill="#fff6d0" opacity=".14" class="bm-glow"/>' +
      /* stage */
      '<rect x="0" y="206" width="400" height="12" fill="#6a3a1a"/><rect x="0" y="218" width="400" height="42" fill="#1a1016"/>' +
      mic(110, 70) + mic(150, 70) + mic(250, 70) + mic(290, 70) +
      /* tiny jumpsuit on a stand, center */
      '<path d="M200 206v-44" stroke="#888" stroke-width="2"/><path d="M190 206h20" stroke="#888" stroke-width="2"/>' +
      '<g class="bm-spin"><path d="M188 116h24l8 12l-5 3l-4 -5v36h-7l-2 -20l-2 20h-7v-36l-4 5l-5 -3z" fill="#f7f3ea" stroke="#8a929a" stroke-width="1.5"/>' +
      '<path d="M188 116l12 10l12 -10" fill="none" stroke="' + GOLD + '" stroke-width="2.5"/><rect x="190" y="138" width="20" height="3" fill="' + GOLD + '"/>' +
      [194, 200, 206].map(x => '<circle cx="' + x + '" cy="132" r="1.4" fill="' + GOLD + '"/>').join("") + '</g>' +
      /* tables */
      [40, 360].map(x => '<ellipse cx="' + x + '" cy="240" rx="26" ry="6" fill="#3a2a3a"/><circle cx="' + x + '" cy="232" r="3" fill="#ffe27a" class="bm-glow"/>').join(""));
  }

  /* 3. The Ilikai by the yacht harbor */
  function bmilikai() {
    const rows = 14;
    return svg(
      '<rect width="400" height="260" fill="url(#bms3)"/>' +
      /* Y-shaped tower: center wing face-on + two angled wings */
      '<path d="M120 200V54l40 -10v156z" fill="#d9d4c8" stroke="#8a857a" stroke-width="1.5"/>' +
      '<path d="M280 200V54l-40 -10v156z" fill="#d9d4c8" stroke="#8a857a" stroke-width="1.5"/>' +
      '<rect x="160" y="40" width="80" height="160" fill="#f2efe6" stroke="#8a857a" stroke-width="2"/>' +
      Array.from({ length: rows }, (_, i) => '<path d="M160 ' + (52 + i * 10.6) + 'h80" stroke="#b8b2a4" stroke-width="2.5"/><path d="M122 ' + (60 + i * 10) + 'l36 -9M278 ' + (60 + i * 10) + 'l-36 -9" stroke="#b8b2a4" stroke-width="2"/>').join("") +
      '<rect x="160" y="34" width="80" height="8" fill="#c9c3b6"/>' +
      /* glass elevator up the outside */
      '<rect x="242" y="44" width="6" height="156" fill="#8a929a"/>' +
      '<g class="bm-lift"><rect x="234" y="172" width="20" height="24" rx="2" fill="' + TEAL + '" opacity=".8" stroke="#1d6a70" stroke-width="1.5"/><path d="M234 184h20" stroke="#eaffff" stroke-width="1"/></g>' +
      palm(70, 206, 90) + palm(330, 206, 80, "bm-p2") +
      /* harbor */
      '<rect x="0" y="200" width="400" height="60" fill="#1b7fa8"/>' +
      '<g class="bm-wave"><path d="M0 216q20 -5 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bfeaf5" stroke-width="2" fill="none"/></g>' +
      [40, 120, 220, 320].map((x, i) => '<g class="bm-bob' + (i % 2 ? " bm-bo2" : "") + '"><path d="M' + x + ' 236h44l-8 10h-28z" fill="#f7f3ea" stroke="#555" stroke-width="1"/><path d="M' + (x + 20) + ' 236v-56" stroke="#ddd" stroke-width="2"/><path d="M' + (x + 22) + ' 186l14 44h-14z" fill="#f7f3ea" opacity=".7"/></g>').join(""),
      sky("bms3", "#ff9a6a", "#ffe0a8"));
  }

  /* 4. Roosevelt High School, upper Makiki */
  function bmschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#bms4)"/>' +
      /* green mountains behind */
      '<path d="M0 120q60 -70 130 -30q50 -50 120 -10q70 -50 150 10v40H0z" fill="#3e7a4a"/>' +
      /* building */
      '<rect x="60" y="100" width="280" height="80" fill="#efe3c8" stroke="#a08a60" stroke-width="2"/>' +
      '<path d="M54 100l20 -14h252l20 14z" fill="#b5523a"/>' +
      /* tower */
      '<rect x="176" y="44" width="48" height="136" fill="#efe3c8" stroke="#a08a60" stroke-width="2"/><path d="M170 44l30 -22l30 22z" fill="#b5523a"/>' +
      '<path d="M190 80v-18q10 -12 20 0v18z" fill="#3a2a2a"/>' +
      /* arcade */
      [76, 108, 140, 236, 268, 300].map(x => '<path d="M' + x + ' 180v-34q12 -16 24 0v34z" fill="#5a4a3a" stroke="#a08a60" stroke-width="1.5"/>').join("") +
      [80, 112, 144, 240, 272, 304].map(x => '<rect x="' + x + '" y="110" width="14" height="18" fill="#4a5a6a"/>').join("") +
      '<path d="M186 180v-40q14 -16 28 0v40z" fill="#4a2a1a"/>' +
      /* banner */
      '<path d="M100 92v-30" stroke="#666" stroke-width="2"/><g class="bm-flap"><rect x="100" y="62" width="62" height="20" fill="' + CORAL + '"/><text x="131" y="76" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">CLASS OF 2003</text></g>' +
      /* knoll + steps */
      '<path d="M0 260v-80q200 -10 400 0v80z" fill="#6aa84f"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (180 - i * 6) + '" y="' + (180 + i * 12) + '" width="' + (40 + i * 12) + '" height="8" fill="#ddd2bc"/>').join("") +
      palm(30, 230, 100) + palm(372, 230, 90, "bm-p2") +
      '<text x="388" y="252" text-anchor="end" ' + font + ' font-size="9" fill="#fff">NEHOA ST</text>',
      sky("bms4", "#7cc4ef", "#e9f6ff"));
  }

  /* 5. Kalakaua Ave & Royal Hawaiian Ave, the pink beach hotel behind */
  function bmcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#bms5)"/>' +
      /* pink palace */
      '<rect x="200" y="100" width="200" height="104" fill="' + PINK + '" stroke="#b05a72" stroke-width="2"/>' +
      [212, 240, 330, 358].map(x => '<path d="M' + x + ' 140v-20q8 -10 16 0v20z" fill="#7a3a52"/><path d="M' + x + ' 186v-20q8 -10 16 0v20z" fill="#7a3a52"/>').join("") +
      '<rect x="270" y="56" width="56" height="148" fill="#f4a8ba" stroke="#b05a72" stroke-width="2"/>' +
      '<path d="M270 56q28 -40 56 0z" fill="#e88aa2" stroke="#b05a72" stroke-width="2"/><rect x="294" y="10" width="8" height="10" fill="#e88aa2"/>' +
      '<path d="M282 110v-30q16 -18 32 0v30z" fill="#7a3a52"/><path d="M286 196v-40q12 -14 24 0v40z" fill="#5a2a3a"/>' +
      palm(388, 204, 110) +
      /* wall with the tag */
      '<rect x="0" y="104" width="196" height="116" fill="#2a3a4a"/>' +
      Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (114 + i * 10) + 'h196" stroke="#22303e" stroke-width="1"/>').join("") +
      tag("BRUNO MARS", 8, 166, 28, GOLD, -6) + tag("LIL ELVIS", 30, 204, 18, CORAL, -3) +
      '<g class="bm-sp"><circle cx="186" cy="138" r="3" fill="' + GOLD + '"/></g><g class="bm-sp bm-sp2"><circle cx="180" cy="148" r="2.5" fill="' + GOLD + '"/></g>' +
      /* street signs */
      '<rect x="246" y="150" width="5" height="70" fill="#555"/>' +
      '<rect x="198" y="146" width="102" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="249" y="158" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">KALAKAUA AVE</text>' +
      '<rect x="188" y="164" width="122" height="16" rx="2" fill="' + SIGN + '" stroke="#fff" stroke-width="1"/><text x="249" y="176" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">ROYAL HAWAIIAN AVE</text>' +
      '<rect x="0" y="220" width="400" height="12" fill="#bdb8ae"/><rect x="0" y="232" width="400" height="28" fill="#2b2b2e"/>' +
      '<g class="bm-car"><rect x="0" y="236" width="64" height="16" rx="5" fill="' + TEAL + '"/><rect x="12" y="230" width="36" height="10" rx="4" fill="#1d8a8c"/><circle cx="14" cy="254" r="5" fill="#111"/><circle cx="50" cy="254" r="5" fill="#111"/></g>',
      sky("bms5", "#ff8a6a", "#ffd9a0"));
  }

  window.SCENES = { bmbus: bmbus, bmlounge: bmlounge, bmilikai: bmilikai, bmschool: bmschool, bmcorner: bmcorner };
})();
