/* joeycool scenes (Regions tab: Kansas City). CSS classes and ids prefixed jc- (the page's own anim-train is kept).
   1 The KC Streetcar sliding into the River Market North stop on Grand Blvd: overhead wire, glass shelter, black stop sign with the STRC bullet.
   2 The Riot Room in Westport, where he and JL ran their "Riot Room Nights": dark brick bar front, red door, a mic on the little stage, crowd hands up.
   3 Arthur Bryant's Barbeque at 18th & Brooklyn, his KC barbecue pick: brick front, red BAR-B-Q sign, smoke rolling out of the pit chimney.
   4 Columbus Park, KC's Little Italy ("Cap it off with cappuccinos, slice of the tiramisu ... young swanky Sinatra", Under Pressure): Holy Rosary's bell tower, a cafe table with a steaming cappuccino, tiramisu and a fedora.
   5 E 3rd St and Grand Blvd in the River Market: green signs, JOEY COOL tagged on the wall, the Christopher S. Bond Bridge's white delta pylon and fanned cables behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jcsmoke{0%{transform:translate(0,0) scale(.6);opacity:.8}100%{transform:translate(14px,-60px) scale(1.8);opacity:0}}.jc-sm{transform-box:fill-box;transform-origin:50% 50%;animation:jcsmoke 2.8s ease-out infinite}.jc-sm2{animation-delay:-.9s}.jc-sm3{animation-delay:-1.8s}' +
    '@keyframes jcsteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-24px);opacity:0}}.jc-st{animation:jcsteam 2s ease-out infinite}.jc-st2{animation-delay:-.7s}.jc-st3{animation-delay:-1.4s}' +
    '@keyframes jcblink{0%,100%{opacity:.25}50%{opacity:1}}.jc-bl{animation:jcblink 1.6s ease-in-out infinite}.jc-bl2{animation-delay:-.8s}' +
    '@keyframes jchands{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}.jc-hand{animation:jchands .8s ease-in-out infinite}.jc-hand2{animation-delay:-.4s}' +
    '@keyframes jcbeam{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.jc-beam{transform-box:fill-box;transform-origin:50% 0;animation:jcbeam 3s ease-in-out infinite}.jc-beam2{animation-delay:-1.5s}' +
    '@keyframes jcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jc-sp{animation:jcspray 1.4s ease-out infinite}.jc-sp2{animation-delay:.45s}' +
    '@keyframes jccar{from{transform:translateX(-90px)}to{transform:translateX(470px)}}.jc-car{animation:jccar 6s linear infinite}' +
    '@keyframes jcbird{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.jc-bird{animation:jcbird 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="232" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="245" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle cx="' + ((i * 71) % 400) + '" cy="' + (8 + (i * 41) % 70) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const STRC = "#1b75bb", BLUE = "#7ad3ff", GOLD = "#f4c95d", PINK = "#e86a92";

  /* 1. KC Streetcar at River Market North */
  function jcstop() {
    const wins = Array.from({ length: 7 }, (_, i) => '<rect x="' + (40 + i * 40) + '" y="122" width="30" height="26" rx="3" fill="#1d2833"/>').join("");
    const car = '<g class="anim-train"><rect x="24" y="112" width="330" height="72" rx="14" fill="#f2f4f6" stroke="#8a939c" stroke-width="2"/>' + wins +
      '<path d="M24 156h330v10H24z" fill="' + STRC + '"/><path d="M24 166h330v4H24z" fill="#0d3f66"/>' +
      '<rect x="318" y="120" width="30" height="34" rx="4" fill="#2a3540"/><rect x="290" y="114" width="58" height="8" rx="2" fill="#111"/><text x="319" y="120.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb347">RIVER MARKET</text>' +
      '<path d="M200 112l-14-18h28z" fill="#555"/><path d="M200 94l40-22" stroke="#444" stroke-width="2"/>' +
      '<rect x="60" y="182" width="40" height="8" fill="#333"/><rect x="280" y="182" width="40" height="8" fill="#333"/><circle cx="350" cy="166" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jcs1)"/>' +
      '<g fill="#8a4a3a"><rect x="0" y="54" width="90" height="72"/><rect x="96" y="40" width="70" height="86"/><rect x="300" y="48" width="100" height="78"/></g>' +
      '<g fill="#f0d9a8" opacity=".7">' + [[12, 66], [42, 66], [12, 92], [42, 92], [108, 54], [134, 54], [108, 84], [134, 84], [314, 62], [346, 62], [374, 62], [314, 92], [346, 92]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="16" height="16"/>').join("") + '</g>' +
      '<path d="M0 72h400" stroke="#333" stroke-width="1.5"/>' +
      '<rect x="0" y="184" width="400" height="76" fill="#b9b3a6"/><path d="M0 188h400M0 196h400" stroke="#6d6d6d" stroke-width="2"/>' +
      car +
      '<rect x="186" y="196" width="4" height="40" fill="#555"/><path d="M178 196h20l-4-8h-12z" fill="#9fd7ff" opacity=".6"/>' +
      '<rect x="20" y="204" width="300" height="44" rx="3" fill="#111"/><text x="32" y="222" ' + font + ' font-size="14" fill="#fff">River Market North</text><text x="32" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">Grand Blvd · KC Streetcar</text>' +
      badge(250, 234, "STRC", STRC),
      sky("jcs1", "#5b8fd0", "#f2c49a"));
  }

  /* 2. The Riot Room, Westport */
  function jcriot() {
    const hand = (x, cls) => '<g class="jc-hand ' + cls + '"><path d="M' + x + ' 236v-22" stroke="#2a2030" stroke-width="7" stroke-linecap="round"/><circle cx="' + x + '" cy="210" r="5" fill="#2a2030"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jcs2)"/>' + stars(16) +
      '<rect x="20" y="40" width="360" height="190" fill="#3a2226"/>' + Array.from({ length: 22 }, (_, i) => '<path d="M20 ' + (46 + i * 8) + 'h360" stroke="#2c181c" stroke-width="1"/>').join("") +
      '<rect x="60" y="26" width="280" height="30" rx="3" fill="#111" stroke="#c0392b" stroke-width="3"/><text class="jc-bl" x="200" y="48" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="20" fill="#ff4a3a" letter-spacing="3">RIOT ROOM</text>' +
      '<rect x="40" y="74" width="230" height="130" fill="#140c12" stroke="#5a3a40" stroke-width="3"/>' +
      '<path class="jc-beam" d="M100 76l-30 128h60z" fill="' + BLUE + '" opacity=".22"/><path class="jc-beam jc-beam2" d="M210 76l-30 128h60z" fill="' + PINK + '" opacity=".22"/>' +
      '<rect x="40" y="186" width="230" height="18" fill="#2a1a12"/>' +
      '<rect x="153" y="132" width="4" height="54" fill="#888"/><rect x="146" y="184" width="18" height="4" fill="#888"/><rect x="149" y="118" width="12" height="18" rx="6" fill="#444" stroke="#aaa" stroke-width="1.5"/>' +
      '<rect x="292" y="106" width="56" height="98" fill="#b5281e" stroke="#5a1410" stroke-width="3"/><circle cx="336" cy="156" r="3" fill="' + GOLD + '"/><rect x="290" y="96" width="60" height="10" fill="#222"/>' +
      '<text x="320" y="88" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">LIVE TONIGHT</text>' +
      '<rect x="0" y="204" width="400" height="56" fill="#1a1418"/>' +
      hand(60, "") + hand(90, "jc-hand2") + hand(130, "") + hand(170, "jc-hand2") + hand(210, "") + hand(250, "jc-hand2") +
      label(232, 160, "THE RIOT ROOM · WESTPORT"),
      sky("jcs2", "#120c22", "#3a1a3a"));
  }

  /* 3. Arthur Bryant's, 18th & Brooklyn */
  function jcbbq() {
    return svg(
      '<rect width="400" height="260" fill="url(#jcs3)"/>' +
      '<rect x="300" y="44" width="22" height="26" fill="#6a3a2a"/>' +
      '<circle class="jc-sm" cx="311" cy="44" r="10" fill="#cfcfcf" opacity=".7"/><circle class="jc-sm jc-sm2" cx="311" cy="44" r="10" fill="#bdbdbd" opacity=".7"/><circle class="jc-sm jc-sm3" cx="311" cy="44" r="10" fill="#e0e0e0" opacity=".7"/>' +
      '<rect x="30" y="70" width="340" height="140" fill="#9a4a36"/>' + Array.from({ length: 17 }, (_, i) => '<path d="M30 ' + (76 + i * 8) + 'h340" stroke="#843d2c" stroke-width="1"/>').join("") +
      '<rect x="26" y="64" width="348" height="10" fill="#e9dcc6"/>' +
      '<rect x="70" y="84" width="260" height="34" rx="4" fill="#c0392b" stroke="#fff" stroke-width="3"/><text x="200" y="109" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="24" fill="#fff" letter-spacing="2">BAR-B-Q</text>' +
      '<rect x="50" y="130" width="100" height="56" fill="#24324a" stroke="#e9dcc6" stroke-width="3"/><rect x="250" y="130" width="100" height="56" fill="#24324a" stroke="#e9dcc6" stroke-width="3"/>' +
      '<g class="jc-bl"><rect x="54" y="134" width="92" height="48" fill="#ffd27a" opacity=".25"/><rect x="254" y="134" width="92" height="48" fill="#ffd27a" opacity=".25"/></g>' +
      '<rect x="172" y="128" width="56" height="82" fill="#3a2418" stroke="#e9dcc6" stroke-width="3"/><path d="M200 128v82" stroke="#e9dcc6" stroke-width="2"/>' +
      '<text x="100" y="164" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">RIBS · BRISKET</text><text x="300" y="164" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BURNT ENDS</text>' +
      '<rect x="0" y="210" width="400" height="50" fill="#6f6b63"/>' +
      '<g class="jc-car"><rect x="0" y="224" width="70" height="16" rx="5" fill="' + BLUE + '"/><rect x="14" y="214" width="38" height="12" rx="4" fill="#3a8ab0"/><circle cx="16" cy="242" r="5" fill="#111"/><circle cx="54" cy="242" r="5" fill="#111"/></g>' +
      label(96, 208, "ARTHUR BRYANT'S · 18TH &amp; BROOKLYN"),
      sky("jcs3", "#78b6e6", "#f2e6c8"));
  }

  /* 4. Columbus Park cafe: Holy Rosary bell tower, cappuccino, tiramisu, fedora */
  function jccafe() {
    return svg(
      '<rect width="400" height="260" fill="url(#jcs4)"/>' +
      '<rect x="0" y="120" width="400" height="20" fill="#7a6a5a"/>' +
      '<g class="jc-bird"><path d="M0 40q6-6 12 0q6-6 12 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      '<rect x="40" y="40" width="50" height="150" fill="#c9b48e"/><path d="M36 40l29-26 29 26z" fill="#8a6a4a"/><rect x="62" y="4" width="6" height="14" fill="' + GOLD + '"/><rect x="58" y="8" width="14" height="4" fill="' + GOLD + '"/>' +
      '<path d="M54 76v-10a11 11 0 0 1 22 0v10z" fill="#3a2a22"/><path d="M54 120v-14a11 11 0 0 1 22 0v14z" fill="#3a2a22"/>' +
            '<rect x="110" y="70" width="290" height="120" fill="#e6dccb"/>' +
      '<path d="M110 70h290v26H110z" fill="#fff"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (110 + i * 29) + ' 70h14.5v26H' + (110 + i * 29) + 'z" fill="' + (i % 3 === 0 ? "#2e8b47" : i % 3 === 1 ? "#fff" : "#c0392b") + '"/>').join("") +
      '<path d="M110 96' + Array.from({ length: 10 }, (_, i) => 'q14.5 10 29 0').join("") + '" fill="#fff" stroke="#ccc" stroke-width="1"/>' +
      '<rect x="130" y="112" width="110" height="70" fill="#3a2a22"/><rect x="270" y="112" width="110" height="70" fill="#3a2a22"/><g class="jc-bl"><rect x="134" y="116" width="102" height="62" fill="#ffd27a" opacity=".2"/></g>' +
      '<text x="325" y="152" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">CAFFE</text>' +
      '<rect x="0" y="190" width="400" height="70" fill="#8a7a66"/>' +
      /* table */
      '<ellipse cx="200" cy="200" rx="90" ry="12" fill="#f6f2ea" stroke="#999" stroke-width="2"/><rect x="196" y="200" width="8" height="46" fill="#555"/><rect x="176" y="244" width="48" height="5" fill="#555"/>' +
      /* cappuccino */
      '<ellipse cx="160" cy="196" rx="18" ry="4" fill="#ddd"/><path d="M148 180h24l-2 14h-20z" fill="#fff" stroke="#888" stroke-width="1.5"/><ellipse cx="160" cy="180" rx="12" ry="3" fill="#c89a6a"/><path d="M172 184q8 0 6 6h-6" stroke="#888" stroke-width="2" fill="none"/>' +
      '<path class="jc-st" d="M156 174q-4-6 0-12" stroke="#fff" stroke-width="2" fill="none" opacity=".8"/><path class="jc-st jc-st2" d="M162 174q4-6 0-12" stroke="#fff" stroke-width="2" fill="none" opacity=".8"/><path class="jc-st jc-st3" d="M168 174q-4-6 0-12" stroke="#fff" stroke-width="2" fill="none" opacity=".8"/>' +
      /* tiramisu */
      '<ellipse cx="206" cy="196" rx="16" ry="4" fill="#ddd"/><path d="M194 194v-14l24 6v8z" fill="#f2e2c4"/><path d="M194 186l24 4M194 190l24 2" stroke="#7a4a2a" stroke-width="2"/><path d="M194 180l24 6" stroke="#5a3a1a" stroke-width="3"/>' +
      /* fedora */
      '<ellipse cx="252" cy="194" rx="24" ry="5" fill="#2a2a30"/><path d="M238 194q0-18 14-18t14 18z" fill="#2a2a30"/><path d="M238 188h28" stroke="' + GOLD + '" stroke-width="3"/>' +
      label(8, 212, "COLUMBUS PARK · KC'S LITTLE ITALY"),
      sky("jcs4", "#86c0ea", "#f6e2bc"));
  }

  /* 5. E 3rd St and Grand Blvd, River Market, Bond Bridge behind */
  function jccorner() {
    const cables = Array.from({ length: 7 }, (_, i) => '<path d="M200 22L' + (90 + i * 14) + ' 96M200 22L' + (310 - i * 14) + ' 96" stroke="#e8ecf2" stroke-width="1"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jcs5)"/>' + stars(18) +
      '<rect x="40" y="96" width="320" height="8" fill="#cfd5e0"/>' + cables +
      '<path d="M200 14L186 104h6l8-60 8 60h6z" fill="#f4f6f8"/>' +
      '<g fill="#2e3550"><rect x="0" y="104" width="70" height="30"/><rect x="330" y="100" width="70" height="34"/></g>' +
      '<rect x="0" y="130" width="400" height="94" fill="#4a3a52"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#3c2e44" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#3c2e44" stroke-width="1"/>').join("")).join("") +
      tag("JOEY COOL", 16, 196, 46, BLUE, -6) + tag("SWANK", 40, 150, 20, GOLD, -4) + tag("COOLIE", 214, 214, 22, PINK, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(276, 98, 118, "E 3rd St") + sign(276, 124, 118, "Grand Blvd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="jc-bl" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="jc-sp"><circle cx="176" cy="160" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="jc-sp jc-sp2"><circle cx="182" cy="154" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("jcs5", "#1a2250", "#c87a8a"));
  }

  window.SCENES = { jcstop: jcstop, jcriot: jcriot, jcbbq: jcbbq, jccafe: jccafe, jccorner: jccorner };
})();
