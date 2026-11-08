/* mrcaponee scenes (Regions tab: Los Angeles + SoCal; West Covina, the San Gabriel Valley). CSS classes and ids prefixed mce- (the page's own anim-train is kept).
   1 Plaza West Covina on Foothill Transit's Silver Streak (West Covina Pkwy and California Ave): a silver articulated Silver Streak bus pulling in at the curb stop, palms, the black stop sign.
   2 Bab-e-Khyber, the stone gate at the mouth of the Khyber Pass outside Peshawar, where he was born: the tan stone arch with its two crenellated towers, the dry hills, a painted jingle truck rolling through.
   3 "Dedicated 2 the Oldies": a glowing jukebox playing a 45, neon tubes pulsing, hearts floating up (Love Jams, slow jams).
   4 Japan (Live in Japan, his Hi Power tour there): Osaka Castle at dusk, white walls, green roofs with gold trim, cherry petals falling.
   5 S Azusa Ave and W Garvey Ave S by the 10: green signs, MR. CAPONE-E tagged on the wall, the San Bernardino Freeway overpass with its green exit sign behind.
   No logos, no faces, no digit 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes mceflk{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.mce-flk{animation:mceflk 2.2s infinite}.mce-flk2{animation-delay:.8s}' +
    '@keyframes mcepalm{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.mce-palm{transform-box:fill-box;transform-origin:50% 100%;animation:mcepalm 3s ease-in-out infinite}.mce-palm2{animation-delay:-1.5s}' +
    '@keyframes mcetruck{from{transform:translateX(-170px)}to{transform:translateX(560px)}}.mce-truck{animation:mcetruck 9s linear infinite}' +
    '@keyframes mcespin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.mce-spin{transform-box:fill-box;transform-origin:50% 50%;animation:mcespin 1.8s linear infinite}' +
    '@keyframes mceheart{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(-90px);opacity:0}}.mce-ht{animation:mceheart 3.2s ease-out infinite}.mce-ht2{animation-delay:-1.1s}.mce-ht3{animation-delay:-2.2s}' +
    '@keyframes mceglow{0%,100%{opacity:.55}50%{opacity:1}}.mce-glow{animation:mceglow 1.6s ease-in-out infinite}.mce-glow2{animation-delay:-.8s}' +
    '@keyframes mcepetal{0%{transform:translate(0,0) rotate(0)}100%{transform:translate(-60px,200px) rotate(300deg)}}.mce-pt{animation:mcepetal 6s linear infinite}.mce-pt2{animation-delay:-2s}.mce-pt3{animation-delay:-4s}' +
    '@keyframes mcecar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.mce-car{animation:mcecar 5s linear infinite}.mce-car2{animation-delay:-2.5s}' +
    '@keyframes mcebird{from{transform:translate(-40px,0)}to{transform:translate(440px,-20px)}}.mce-bird{animation:mcebird 11s linear infinite}' +
    '@keyframes mcespray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.mce-sp{animation:mcespray 1.4s ease-out infinite}.mce-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const palm = (x, base, h, cls) => '<g class="mce-palm ' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#5b4636" stroke-width="5" fill="none"/>' +
    [[-26, 8], [-18, -6], [0, -12], [18, -6], [26, 8]].map(p => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + (p[0] / 2) + ' ' + (p[1] - 10) + ' ' + p[0] + ' ' + (p[1] + 4) + '" stroke="#2f7d46" stroke-width="5" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const heart = (x, y, s, c, cls) => '<g class="' + cls + '"><path transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="M0 4C-6 -4 -14 2 -8 8L0 15L8 8C14 2 6 -4 0 4z" fill="' + c + '"/></g>';
  const GOLD = "#f2c14e", RED = "#c0392b", TEAL = "#3fb6c9", SILVER = "#c3ccd2";

  /* 1. Plaza West Covina, Foothill Transit Silver Streak */
  function mcestation() {
    const win = (x0, n) => Array.from({ length: n }, (_, i) => '<rect x="' + (x0 + i * 34) + '" y="142" width="26" height="22" rx="3" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train">' +
      '<rect x="14" y="130" width="176" height="62" rx="9" fill="' + SILVER + '" stroke="#6d777e" stroke-width="2"/>' + win(24, 5) +
      '<rect x="190" y="134" width="12" height="56" fill="#3a4148"/><path d="M190 136v52M196 136v52M202 136v52" stroke="#5a636b" stroke-width="1"/>' +
      '<rect x="202" y="130" width="160" height="62" rx="9" fill="' + SILVER + '" stroke="#6d777e" stroke-width="2"/>' + win(212, 4) +
      '<rect x="14" y="170" width="348" height="7" fill="#1f5c7a"/><rect x="14" y="177" width="348" height="3" fill="#7a2b55"/>' +
      '<rect x="340" y="136" width="20" height="48" rx="5" fill="#d6dde2"/><circle cx="352" cy="184" r="3.5" fill="#fff6c2"/>' +
      '<rect x="252" y="133" width="86" height="7" rx="2" fill="#111"/><text x="295" y="139" text-anchor="middle" ' + font + ' font-size="5.5" fill="#ffb347">SILVER STREAK · MONTCLAIR</text>' +
      '<text x="102" y="187" text-anchor="middle" ' + font + ' font-size="8" fill="#1f5c7a">SILVER STREAK</text>' +
      [56, 150, 244, 330].map(x => '<circle cx="' + x + '" cy="194" r="11" fill="#151515"/><circle cx="' + x + '" cy="194" r="4" fill="#777"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mces1)"/>' +
      '<path d="M0 104l40 -26l36 14l44 -30l50 24l40 -18l52 28l46 -20l50 22l42 -12v40H0z" fill="#8a8fa8" opacity=".55"/>' +
      '<rect x="40" y="86" width="210" height="44" fill="#e8dcc6"/><rect x="40" y="80" width="210" height="8" fill="#b9a68a"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 33) + '" y="96" width="22" height="28" fill="#a7c4d4"/>').join("") +
      '<text x="145" y="77" text-anchor="middle" ' + font + ' font-size="9" fill="#5a4a36">PLAZA WEST COVINA</text>' +
      palm(14, 132, 74, "") + palm(278, 132, 66, "mce-palm2") + palm(388, 132, 80, "") +
      '<rect x="0" y="130" width="400" height="74" fill="#8e8a80"/><rect x="0" y="198" width="400" height="10" fill="#d6d1c4"/><rect x="0" y="208" width="400" height="52" fill="#3f3f44"/><path d="M0 236h400" stroke="#e7e2a8" stroke-width="2" stroke-dasharray="20 14"/>' +
      '<rect x="372" y="64" width="5" height="134" fill="#2b2b2b"/>' +
      bus +
      '<rect x="20" y="14" width="262" height="36" rx="3" fill="#111" stroke="#444" stroke-width="2"/>' +
      '<circle cx="41" cy="32" r="12" fill="' + SILVER + '"/><text x="41" y="36.5" text-anchor="middle" ' + font + ' font-size="11" fill="#111">SS</text>' +
      '<text x="60" y="29" ' + font + ' font-size="12.5" fill="#fff">Plaza West Covina</text><text x="60" y="43" ' + font + ' font-size="8" fill="#b9c2c8">WEST COVINA PKWY · CALIFORNIA AVE</text>',
      sky("mces1", "#86c3ec", "#f8e3c0"));
  }

  /* 2. Bab-e-Khyber, Khyber Pass, outside Peshawar */
  function mcekhyber() {
    const merlons = (x, y, w) => Array.from({ length: Math.floor(w / 10) }, (_, i) => '<rect x="' + (x + i * 10) + '" y="' + (y - 7) + '" width="6" height="7" fill="#c9a46a"/>').join("");
    const tower = (x) => '<rect x="' + x + '" y="62" width="58" height="130" fill="#d4b47c" stroke="#9c7c4a" stroke-width="1.5"/>' + merlons(x + 2, 62, 58) +
      '<rect x="' + (x + 20) + '" y="80" width="18" height="26" rx="9" fill="#5a4630"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + x + ' ' + (110 + i * 14) + 'h58" stroke="#b8975e" stroke-width="1"/>').join("");
    const truck = '<g class="mce-truck"><rect x="0" y="174" width="96" height="40" rx="3" fill="#e2574c"/><rect x="0" y="166" width="96" height="10" rx="3" fill="' + GOLD + '"/>' +
      '<path d="M6 180h84M6 192h84M6 204h84" stroke="#2e86de" stroke-width="3"/>' + [12, 30, 48, 66, 84].map(x => '<circle cx="' + x + '" cy="186" r="4" fill="#27ae60"/><circle cx="' + x + '" cy="198" r="3" fill="#f5f5f5"/>').join("") +
      '<path d="M96 184h22l14 14v16H96z" fill="#2e86de"/><rect x="102" y="188" width="18" height="10" fill="#bfe3f7"/><path d="M96 180q18 -14 36 0" stroke="' + GOLD + '" stroke-width="3" fill="none"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M' + (4 + i * 13) + ' 214v6" stroke="#c0c0c0" stroke-width="2"/>').join("") +
      '<circle cx="22" cy="216" r="9" fill="#151515"/><circle cx="22" cy="216" r="3.5" fill="#888"/><circle cx="110" cy="216" r="9" fill="#151515"/><circle cx="110" cy="216" r="3.5" fill="#888"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mces2)"/>' +
      '<path d="M0 140l50 -60l40 30l60 -70l60 60l50 -40l60 50l40 -30l40 30v60H0z" fill="#a98e6a"/>' +
      '<path d="M0 160l70 -40l50 20l70 -30l60 30l60 -24l90 34v40H0z" fill="#8c7352"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#c7ad84"/><rect x="0" y="206" width="400" height="34" fill="#5c574f"/><path d="M0 223h400" stroke="#e7e2a8" stroke-width="2" stroke-dasharray="16 12"/>' +
      tower(86) + tower(256) +
      '<rect x="144" y="84" width="112" height="108" fill="#dcc08a" stroke="#9c7c4a" stroke-width="1.5"/>' + merlons(146, 84, 110) +
      '<path d="M162 192v-62q38 -40 76 0v62z" fill="#3c3226"/><path d="M162 130q38 -40 76 0" stroke="#9c7c4a" stroke-width="4" fill="none"/>' +
      '<rect x="172" y="96" width="56" height="12" rx="2" fill="#f2e6c8"/><text x="200" y="105.5" text-anchor="middle" ' + font + ' font-size="8" fill="#5a4630">BAB-E-KHYBER</text>' +
      '<rect x="198" y="40" width="3" height="40" fill="#555"/><g class="mce-flk2"><rect x="201" y="40" width="26" height="16" fill="#0b6623"/><rect x="201" y="40" width="7" height="16" fill="#f4f4f4"/><circle cx="217" cy="48" r="4.5" fill="#f4f4f4"/><circle cx="218.6" cy="47" r="4" fill="#0b6623"/></g>' +
      truck +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2f22" letter-spacing="3">KHYBER PASS · PESHAWAR</text>',
      sky("mces2", "#7fb8e2", "#f3dcae"));
  }

  /* 3. Dedicated 2 the Oldies: the jukebox */
  function mcejukebox() {
    const tubes = ['#ff4d6d', GOLD, TEAL, '#b56cff'].map((c, i) => '<path class="mce-glow' + (i % 2 ? " mce-glow2" : "") + '" d="M' + (150 + i * 8) + ' 200V' + (90 - i * 2) + 'q' + (50 - i * 8) + ' -' + (54 - i * 6) + ' ' + (100 - i * 16) + ' 0V200" stroke="' + c + '" stroke-width="4" fill="none"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#mces3)"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#2a1712"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="206" width="20" height="54" fill="#3a221a"/>').join("") +
      '<rect x="20" y="40" width="96" height="66" rx="4" fill="#3a2418" stroke="' + GOLD + '" stroke-width="2"/><text x="68" y="64" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">DEDICATED</text><text x="68" y="78" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">2 THE</text><text x="68" y="94" text-anchor="middle" ' + font + ' font-size="13" fill="#ff4d6d">OLDIES</text>' +
      '<rect x="292" y="44" width="88" height="58" rx="4" fill="#3a2418" stroke="#ff4d6d" stroke-width="2"/><text x="336" y="68" text-anchor="middle" ' + font + ' font-size="12" fill="#ff4d6d">LOVE</text><text x="336" y="88" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">JAMS</text>' +
      '<path d="M134 210V96q66 -86 132 0V210z" fill="#6b2e1e" stroke="#3a160d" stroke-width="3"/>' + tubes +
      '<rect x="170" y="104" width="60" height="44" rx="6" fill="#1c1210" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<g class="mce-spin"><circle cx="200" cy="126" r="17" fill="#111"/><circle cx="200" cy="126" r="11" fill="none" stroke="#333" stroke-width="1"/><circle cx="200" cy="126" r="6" fill="' + RED + '"/><circle cx="200" cy="126" r="1.6" fill="#f4f4f4"/><path d="M200 112v6" stroke="#555" stroke-width="1.5"/></g>' +
      '<rect x="160" y="156" width="80" height="18" rx="3" fill="#f2e6c8"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="' + (166 + i * 18) + '" y="160" width="14" height="10" fill="#fff" stroke="#b8975e" stroke-width=".8"/>').join("") +
      '<rect x="160" y="180" width="80" height="24" rx="3" fill="#2a1712"/>' + Array.from({ length: 7 }, (_, i) => '<path d="M' + (168 + i * 11) + ' 184v16" stroke="#c9a24a" stroke-width="2"/>').join("") +
      heart(120, 150, 1.1, '#ff4d6d', 'mce-ht') + heart(286, 160, 1.3, GOLD, 'mce-ht mce-ht2') + heart(250, 120, .9, '#ff8fa3', 'mce-ht mce-ht3') + heart(100, 180, .8, GOLD, 'mce-ht mce-ht3') +
      '<text x="200" y="242" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '" letter-spacing="4">SLOW JAMS ALL NIGHT</text>',
      sky("mces3", "#24101a", "#5a2430"));
  }

  /* 4. Japan: Osaka Castle at dusk */
  function mceosaka() {
    const roof = (x, y, w, h) => '<path d="M' + (x - 10) + ' ' + (y + h) + 'Q' + x + ' ' + (y + h - 4) + ' ' + (x + 4) + ' ' + y + 'H' + (x + w - 4) + 'Q' + (x + w) + ' ' + (y + h - 4) + ' ' + (x + w + 10) + ' ' + (y + h) + 'z" fill="#4f8f7a" stroke="#d4a537" stroke-width="1.5"/>';
    const floor = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#f4f1ea"/>' + Array.from({ length: Math.floor(w / 14) }, (_, i) => '<rect x="' + (x + 5 + i * 14) + '" y="' + (y + 4) + '" width="6" height="' + (h - 8) + '" fill="#2f3e4a"/>').join("");
    const petal = (x, y, cls) => '<g class="' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="3" ry="2" fill="#ffc8dd"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mces4)"/>' +
      '<circle cx="320" cy="58" r="20" fill="#ffd6a0" opacity=".85"/>' +
      '<path d="M100 196l20 -40h160l20 40z" fill="#7d7a72"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (104 + i * 4) + ' ' + (190 - i * 8) + 'h' + (192 - i * 8) + '" stroke="#65625b" stroke-width="1"/>').join("") +
      floor(136, 138, 128, 20) + roof(136, 126, 128, 14) +
      floor(148, 106, 104, 20) + roof(148, 94, 104, 14) +
      floor(162, 76, 76, 18) + roof(162, 64, 76, 14) +
      floor(176, 50, 48, 14) + roof(176, 38, 48, 14) +
      '<path d="M184 38l-6 -10M216 38l6 -10" stroke="#d4a537" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#2b4a5c"/><path d="M0 206h400M0 222h400M0 240h400" stroke="#4a7a90" stroke-width="2" opacity=".6"/>' +
      '<g fill="#f7b8cf"><circle cx="30" cy="180" r="26"/><circle cx="64" cy="170" r="22"/><circle cx="350" cy="176" r="26"/><circle cx="380" cy="186" r="20"/></g>' +
      '<path d="M40 196v-20M362 196v-22" stroke="#4a3426" stroke-width="5"/>' +
      petal(120, 40, 'mce-pt') + petal(260, 20, 'mce-pt mce-pt2') + petal(340, 60, 'mce-pt mce-pt3') + petal(60, 30, 'mce-pt mce-pt2') + petal(200, 10, 'mce-pt mce-pt3') +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="11" fill="#f4f1ea" letter-spacing="4">LIVE IN JAPAN</text>',
      sky("mces4", "#3b2f6b", "#f2a07a"));
  }

  /* 5. S Azusa Ave and W Garvey Ave S, West Covina, by the 10 */
  function mcecorner() {
    const car = (cls, c, y) => '<g class="mce-car ' + cls + '"><rect x="0" y="' + y + '" width="46" height="12" rx="4" fill="' + c + '"/><rect x="10" y="' + (y - 7) + '" width="24" height="9" rx="3" fill="' + c + '"/><circle cx="10" cy="' + (y + 12) + '" r="4" fill="#111"/><circle cx="36" cy="' + (y + 12) + '" r="4" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#mces5)"/>' +
      '<rect x="0" y="62" width="400" height="18" fill="#9a958c"/><rect x="0" y="58" width="400" height="5" fill="#c9c3b8"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (20 + i * 72) + '" y="80" width="14" height="46" fill="#8a857c"/>').join("") +
      '<g style="overflow:hidden">' + car('', RED, 46) + car('mce-car2', TEAL, 46) + '</g>' +
      '<rect x="112" y="14" width="190" height="44" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' +
      '<path d="M120 22h18v9q0 9 -9 11q-9 -2 -9 -11z" fill="#1d4fa0" stroke="#fff" stroke-width="1.2"/><text x="129" y="35" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">10</text>' +
      '<text x="148" y="31" ' + font + ' font-size="10" fill="#fff">EAST  San Bernardino</text><text x="148" y="48" ' + font + ' font-size="11" fill="#fff">Azusa Av  West Covina</text>' +
      '<rect x="0" y="122" width="400" height="102" fill="#e3cfa8"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (136 + i * 14) + 'h400" stroke="#cdb68c" stroke-width="1"/>').join("") +
      tag("MR. CAPONE-E", 18, 190, 30, GOLD, -6) + tag("HI POWER", 30, 214, 20, RED, -3) + tag("SLOW JAM", 196, 212, 17, TEAL, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="346" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 140, "S Azusa Ave") + sign(244, 124, 150, "W Garvey Ave S") +
      '<rect x="8" y="112" width="4" height="112" fill="#222"/><circle class="mce-flk" cx="10" cy="110" r="7" fill="#ffe9a8"/>' +
      '<g class="mce-sp"><circle cx="232" cy="164" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="mce-sp mce-sp2"><circle cx="238" cy="158" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("mces5", "#2b3d6e", "#f2a46a"));
  }

  window.SCENES = { mcestation: mcestation, mcekhyber: mcekhyber, mcejukebox: mcejukebox, mceosaka: mceosaka, mcecorner: mcecorner };
})();
