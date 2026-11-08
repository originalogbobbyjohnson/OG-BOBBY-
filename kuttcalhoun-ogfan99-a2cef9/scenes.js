/* kuttcalhoun scenes (Regions tab: Kansas City; Prospect Ave, east side KCMO). CSS classes and ids prefixed kt- (the page's own anim-train is kept).
   1 RideKC Prospect MAX bus pulling into the Prospect & 35th St station on Prospect Ave.
   2 Central High School (KCMO), "the halls of Central High School" from School Daze: red brick, glass entry, flag waving, the bell ringing.
   3 The Landing mall at 63rd & Troost ("mannequin from Harold Penn's at the Landing Mall", J's On My Feet): tall pylon sign, a suit in one window, J's in the next.
   4 Prospect Ave at sundown ("My posse's on Prospect ... newbies and Chevys on the Daytons", "the sun start to get low"): a drop-top on wire wheels rolling by.
   5 E 35th St and Prospect Ave: green signs, KUTT tagged on the wall, the Power & Light Building's glowing crown on the skyline behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ktflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.kt-flag{transform-box:fill-box;transform-origin:0 50%;animation:ktflag 1.6s ease-in-out infinite}' +
    '@keyframes ktring{0%,100%{transform:rotate(0)}25%{transform:rotate(14deg)}75%{transform:rotate(-14deg)}}.kt-bell{transform-box:fill-box;transform-origin:50% 0;animation:ktring .9s ease-in-out infinite}' +
    '@keyframes ktwave{0%{opacity:0;transform:scale(.6)}40%{opacity:.9}100%{opacity:0;transform:scale(1.5)}}.kt-wave{transform-box:fill-box;transform-origin:50% 50%;animation:ktwave 1.8s ease-out infinite}.kt-wave2{animation-delay:-.9s}' +
    '@keyframes ktblink{0%,100%{opacity:.25}50%{opacity:1}}.kt-bl{animation:ktblink 1.6s ease-in-out infinite}.kt-bl2{animation-delay:-.8s}' +
    '@keyframes ktcar{from{transform:translateX(-170px)}to{transform:translateX(430px)}}.kt-car{animation:ktcar 8s linear infinite;animation-delay:-3.6s}' +
    '@keyframes ktspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.kt-spin{transform-box:fill-box;transform-origin:50% 50%;animation:ktspin .6s linear infinite}' +
    '@keyframes ktsun{0%,100%{transform:translateY(0)}50%{transform:translateY(6px)}}.kt-sun{animation:ktsun 6s ease-in-out infinite}' +
    '@keyframes ktglow{0%,100%{fill:#ffcf5a}33%{fill:#ff7a5a}66%{fill:#7fd3ff}}.kt-crown{animation:ktglow 4.5s linear infinite}' +
    '@keyframes ktspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kt-sp{animation:ktspray 1.4s ease-out infinite}.kt-sp2{animation-delay:.45s}' +
    '@keyframes ktwalk{from{transform:translateX(0)}to{transform:translateX(60px)}}.kt-walk{animation:ktwalk 5s linear infinite alternate}' +
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
  const PMAX = "#5aa83a", RED = "#e23b2e", GOLD = "#e8b33a", TEAL = "#4fc3d9";

  /* 1. Prospect MAX at Prospect & 35th St */
  function ktstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="12" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 158h316v12H36z" fill="' + PMAX + '"/><path d="M36 170h316v4H36z" fill="#2f6b20"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="284" y="118" width="68" height="9" rx="2" fill="#111"/><text x="318" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">PROSPECT MAX</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kts1)"/>' +
      '<g fill="#3c3a48" opacity=".7"><rect x="10" y="70" width="44" height="46"/><rect x="60" y="84" width="60" height="32"/><rect x="300" y="78" width="40" height="38"/><rect x="346" y="64" width="46" height="52"/></g>' +
      '<path d="M120 52h170l-10 14H130z" fill="#d7dde2"/><path d="M120 52h170" stroke="' + PMAX + '" stroke-width="4"/>' +
      [136, 274].map(x => '<rect x="' + (x - 3) + '" y="64" width="6" height="54" fill="#8a96a3"/>').join("") +
      '<rect x="150" y="70" width="110" height="40" fill="#9fd7ff" opacity=".25" stroke="#8a96a3" stroke-width="2"/>' +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="372" y="150" width="5" height="70" fill="#4a4f55"/><rect x="354" y="132" width="42" height="22" rx="2" fill="' + PMAX + '"/><text x="375" y="147" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">MAX</text>' +
      '<rect x="36" y="204" width="300" height="44" rx="3" fill="#111"/><text x="48" y="222" ' + font + ' font-size="14" fill="#fff">Prospect &amp; 35th St</text><text x="48" y="239" ' + font + ' font-size="10.5" fill="#cfd8e0">Prospect Ave · Kansas City, MO</text>' +
      badge(270, 234, "PMAX", PMAX),
      sky("kts1", "#2f4a7a", "#f4a86a"));
  }

  /* 2. Central High School, KCMO */
  function ktschool() {
    const brick = Array.from({ length: 12 }, (_, i) => '<path d="M40 ' + (92 + i * 9) + 'h320" stroke="#8e3a2a" stroke-width="1"/>').join("");
    const wins = [60, 100, 280, 320].map(x => [96, 136].map(y => '<rect x="' + x + '" y="' + y + '" width="26" height="28" fill="#2c3d55" stroke="#e9dcc6" stroke-width="2"/><path d="M' + (x + 13) + ' ' + y + 'v28" stroke="#e9dcc6" stroke-width="1"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kts2)"/>' +
      '<rect x="40" y="86" width="320" height="110" fill="#a8483a"/>' + brick + wins +
      '<rect x="36" y="80" width="328" height="8" fill="#e9dcc6"/>' +
      '<path d="M150 196V70h100v126z" fill="#7fb0d6" opacity=".55"/><path d="M150 70h100" stroke="#e9dcc6" stroke-width="5"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (170 + i * 20) + ' 72v124" stroke="#e9dcc6" stroke-width="2"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<path d="M150 ' + (100 + i * 24) + 'h100" stroke="#e9dcc6" stroke-width="1.5"/>').join("") +
      '<rect x="128" y="54" width="144" height="18" fill="#e9dcc6"/><text x="200" y="67.5" text-anchor="middle" ' + font + ' font-size="10" fill="#6a2418">CENTRAL HIGH SCHOOL</text>' +
      '<rect x="176" y="164" width="48" height="32" fill="#2c3d55" stroke="#e9dcc6" stroke-width="2"/><path d="M200 164v32" stroke="#e9dcc6" stroke-width="2"/>' +
      '<g class="kt-bell"><path d="M310 40q-10 0-10 12v6h20v-6q0-12-10-12z" fill="' + GOLD + '" stroke="#6a4a10" stroke-width="1.5"/><circle cx="310" cy="61" r="3" fill="#6a4a10"/></g>' +
      '<path d="M310 34v6" stroke="#555" stroke-width="2"/><path d="M296 30h28" stroke="#555" stroke-width="3"/>' +
      '<circle class="kt-wave" cx="310" cy="52" r="16" fill="none" stroke="' + GOLD + '" stroke-width="2"/><circle class="kt-wave kt-wave2" cx="310" cy="52" r="16" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<rect x="78" y="20" width="3" height="66" fill="#ccc"/><g class="kt-flag"><rect x="81" y="22" width="34" height="20" fill="#b22234"/>' + [0, 1, 2].map(i => '<rect x="81" y="' + (25 + i * 6) + '" width="34" height="3" fill="#fff"/>').join("") + '<rect x="81" y="22" width="14" height="11" fill="#3c3b6e"/></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#6f6b63"/><path d="M160 196h80v8h-80zM150 204h100v8H150z" fill="#cfc8bb"/>' +
      '<g class="kt-walk"><rect x="96" y="206" width="12" height="18" rx="3" fill="#1f5fa8"/><rect x="96" y="224" width="5" height="10" fill="#333"/><rect x="103" y="224" width="5" height="10" fill="#333"/><rect x="94" y="234" width="8" height="4" rx="1" fill="#fff"/><rect x="102" y="234" width="8" height="4" rx="1" fill="#fff"/><circle cx="102" cy="200" r="6" fill="#5a3a22"/></g>' +
      label(196, 196, "CENTRAL HIGH · KANSAS CITY, MO"),
      sky("kts2", "#6aa8d8", "#f6e2bc"));
  }

  /* 3. The Landing at 63rd & Troost */
  function ktlanding() {
    const shoe = (x, y, c) => '<path d="M' + x + ' ' + (y + 14) + 'v-12q0-4 4-4h6l4 6 10 4q4 2 4 6H' + x + 'z" fill="' + c + '" stroke="#111" stroke-width="1.5"/><path d="M' + x + ' ' + (y + 14) + 'h28" stroke="#fff" stroke-width="3"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kts3)"/>' + stars(18) +
      '<rect x="30" y="20" width="8" height="120" fill="#5a5a5a"/><rect x="18" y="14" width="96" height="42" rx="4" fill="#1d2b4a" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<text class="kt-bl" x="66" y="34" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">THE</text><text x="66" y="50" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">LANDING</text>' +
      '<rect x="0" y="92" width="400" height="108" fill="#c9b79a"/><rect x="0" y="86" width="400" height="12" fill="#8a3b2a"/>' +
      '<rect x="20" y="106" width="110" height="80" fill="#24324a"/><rect x="150" y="106" width="110" height="80" fill="#24324a"/><rect x="280" y="106" width="104" height="80" fill="#24324a"/>' +
      '<rect x="20" y="100" width="110" height="10" fill="' + RED + '"/><rect x="150" y="100" width="110" height="10" fill="' + GOLD + '"/><rect x="280" y="100" width="104" height="10" fill="' + TEAL + '"/>' +
      /* mannequin in a tailor-made suit (no face: a plain oval head) */
      '<ellipse cx="75" cy="122" rx="7" ry="8" fill="#e8e0d4"/><path d="M62 132h26l4 34H58z" fill="#3a3f52"/><path d="M75 132l-5 12h10z" fill="#fff"/><path d="M75 136v24" stroke="' + RED + '" stroke-width="2"/><rect x="72" y="166" width="6" height="16" fill="#ccc"/><rect x="64" y="180" width="22" height="4" fill="#999"/>' +
      '<g class="kt-bl kt-bl2"><rect x="24" y="110" width="102" height="72" fill="#fff6c2" opacity=".12"/></g>' +
      /* J's on the shelf */
      '<rect x="160" y="146" width="90" height="4" fill="#ddd"/><rect x="160" y="172" width="90" height="4" fill="#ddd"/>' + shoe(164, 130, RED) + shoe(208, 130, "#fff") + shoe(164, 156, "#111") + shoe(208, 156, GOLD) +
      /* fitted caps */
      '<path d="M296 150q14-20 28 0z" fill="#1f5fa8"/><path d="M290 150h38" stroke="#1f5fa8" stroke-width="4"/><path d="M340 150q14-20 28 0z" fill="' + RED + '"/><path d="M334 150h38" stroke="' + RED + '" stroke-width="4"/>' +
      '<text x="332" y="128" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">KC FITTEDS</text>' +
      '<rect x="0" y="200" width="400" height="60" fill="#55565a"/><path d="M0 214h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="14 10" opacity=".6"/>' +
      label(110, 180, "THE LANDING · 63RD &amp; TROOST"),
      sky("kts3", "#22284a", "#7a4a6a"));
  }

  /* 4. Prospect Ave at sundown, a drop-top on Daytons */
  function ktcruise() {
    const wire = (cx) => '<g transform="translate(' + cx + ' 222)"><circle r="13" fill="#111"/><circle r="9" fill="#d9d9d9"/><g class="kt-spin">' + Array.from({ length: 8 }, (_, i) => '<path d="M0 0L' + (9 * Math.cos(i * Math.PI / 4)).toFixed(1) + ' ' + (9 * Math.sin(i * Math.PI / 4)).toFixed(1) + '" stroke="#777" stroke-width="1.2"/>').join("") + '</g><circle r="2.5" fill="' + GOLD + '"/></g>';
    const car = '<g class="kt-car"><path d="M0 214q2-14 20-16l26-2 18-12h40l20 12 30 2q12 2 12 16z" fill="' + RED + '" stroke="#5a1410" stroke-width="2"/><path d="M66 186l-4 12M104 186l10 12" stroke="#ccc" stroke-width="2"/><path d="M8 206h156" stroke="#ffd7c8" stroke-width="2" opacity=".6"/>' + wire(34) + wire(134) + '<circle cx="164" cy="206" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kts4)"/>' +
      '<g class="kt-sun"><circle cx="300" cy="116" r="34" fill="#ffb347"/><circle cx="300" cy="116" r="46" fill="#ffb347" opacity=".25"/></g>' +
      '<g fill="#3a2436"><rect x="0" y="120" width="70" height="78"/><rect x="74" y="104" width="54" height="94"/><rect x="132" y="128" width="40" height="70"/><rect x="230" y="136" width="60" height="62"/><rect x="330" y="112" width="70" height="86"/></g>' +
      '<g fill="#ffd166" opacity=".55">' + [[10, 132], [30, 150], [84, 118], [104, 140], [140, 146], [240, 150], [262, 170], [344, 126], [370, 150]].map(p => '<rect x="' + p[0] + '" y="' + p[1] + '" width="8" height="10"/>').join("") + '</g>' +
      '<rect x="176" y="70" width="5" height="128" fill="#2f2f2f"/>' + sign(126, 74, 104, "Prospect Ave") +
      '<rect x="0" y="198" width="400" height="62" fill="#4a4748"/><path d="M0 240h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      car +
      tag("POSSE ON PROSPECT", 196, 60, 18, GOLD, -4),
      sky("kts4", "#3a2a6a", "#ff8a5a"));
  }

  /* 5. E 35th St and Prospect Ave, Power & Light Building behind */
  function ktcorner() {
    const pl = '<g><rect x="186" y="60" width="36" height="74" fill="#6a6478"/><rect x="190" y="44" width="28" height="18" fill="#757086"/><rect x="194" y="32" width="20" height="14" fill="#807a92"/>' +
      '<path d="M198 32l6-16 6 16z" fill="#8a849c"/><rect class="kt-crown" x="196" y="22" width="16" height="12" rx="2" fill="#ffcf5a" opacity=".9"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (190 + i * 6) + ' 64v68" stroke="#57526a" stroke-width="1"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kts5)"/>' + stars(20) +
      '<g fill="#3a3550"><rect x="90" y="88" width="40" height="46"/><rect x="134" y="74" width="30" height="60"/><rect x="230" y="84" width="36" height="50"/><rect x="270" y="98" width="50" height="36"/><rect x="40" y="104" width="44" height="30"/></g>' + pl +
      '<rect x="0" y="130" width="400" height="94" fill="#5a3a30"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (138 + i * 8) + 'h400" stroke="#4a2e26" stroke-width="1"/>').join("") +
      Array.from({ length: 11 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (130 + i * 8) + 'v8" stroke="#4a2e26" stroke-width="1"/>').join("")).join("") +
      tag("KUTT", 24, 200, 64, RED, -6) + tag("BLACK GOLD", 236, 170, 20, GOLD, -4) + tag("KUTTY CAL", 200, 214, 20, TEAL, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(270, 98, 130, "E 35th St") + sign(270, 124, 130, "Prospect Ave") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="kt-bl" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="kt-sp"><circle cx="200" cy="170" r="3" fill="' + RED + '" opacity=".7"/></g><g class="kt-sp kt-sp2"><circle cx="206" cy="164" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("kts5", "#1c2048", "#d8705a"));
  }

  window.SCENES = { ktstop: ktstop, ktschool: ktschool, ktlanding: ktlanding, ktcruise: ktcruise, ktcorner: ktcorner };
})();
