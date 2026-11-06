/* Lil Mabu game (NYC map, Manhattan: Upper East Side, where Matthew grew up and recorded his first songs on a laptop).
   The 4/5/6 down at 86 St (Lexington Av line), his prep school with the press waiting out back ("Rich Scholar"),
   Turks and Caicos at night ("sand in turks": the moon, the villa, the beach "black and blue"), Gracie Mansion in Carl Schurz Park
   on the East River, and E 82 St & 5 Av with the Metropolitan Museum's limestone front behind. 400 x 260 SVGs. All classes prefixed lm-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lmcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.lm-car{animation:lmcar 7s linear infinite}.lm-car2{animation-delay:-3.5s}' +
    '@keyframes lmblink{0%,100%{opacity:.3}50%{opacity:1}}.lm-bl{animation:lmblink 1.8s ease-in-out infinite}.lm-bl2{animation-delay:.6s}.lm-bl3{animation-delay:1.2s}' +
    '@keyframes lmflick{0%,100%{opacity:1}45%{opacity:.85}50%{opacity:.3}55%{opacity:.9}}.lm-flk{animation:lmflick 2.6s infinite}' +
    '@keyframes lmflash{0%,86%,100%{opacity:0}90%{opacity:1}}.lm-fl{transform-box:fill-box;transform-origin:50% 50%;animation:lmflash 1.9s linear infinite}.lm-fl2{animation-delay:-.7s}.lm-fl3{animation-delay:-1.3s}' +
    '@keyframes lmwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.lm-wv{animation:lmwave 3.2s ease-in-out infinite}.lm-wv2{animation-delay:-1.6s}' +
    '@keyframes lmsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.lm-palm{transform-box:fill-box;transform-origin:50% 100%;animation:lmsway 3.6s ease-in-out infinite}.lm-palm2{animation-delay:-1.8s}' +
    '@keyframes lmtug{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.lm-tug{animation:lmtug 16s linear infinite}' +
    '@keyframes lmleaf{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-30px,90px);opacity:0}}.lm-leaf{animation:lmleaf 4s linear infinite}.lm-leaf2{animation-delay:-1.3s}.lm-leaf3{animation-delay:-2.6s}' +
    '@keyframes lmwalk{from{transform:translateX(0)}to{transform:translateX(150px)}}.lm-walk{animation:lmwalk 6s linear infinite alternate}' +
    '@keyframes lmflag{0%,100%{transform:skewY(0)}50%{transform:skewY(4deg)}}.lm-flag{transform-box:fill-box;transform-origin:0 50%;animation:lmflag 2.4s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const stars = (n, maxY) => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="lm-bl lm-bl' + (i % 3 + 1) + '" cx="' + ((i * 97 + 13) % 400) + '" cy="' + (6 + (i * 53) % (maxY || 70)) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#e9c46a", SKY = "#8fd3ff", CREAM = "#f4ead8", GRN = "#00933c", ICE = "#bfe9ff";
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  /* a little silhouette person (no face) */
  const person = (x, y, col, cls, bag) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/>' +
    (bag ? '<rect x="' + (x - 11) + '" y="' + (y + 9) + '" width="7" height="12" rx="2" fill="' + bag + '"/>' : "") + '</g>';

  /* 1. 86 St on the Lexington Av line, underground: cream tile, the green-and-tan mosaic band, black sign with the 4, 5 and 6, a silver 6 train pulling in */
  function st86() {
    let tiles = "";
    for (let y = 30; y < 150; y += 10) for (let x = (y / 10) % 2 ? 0 : 10; x < 400; x += 20) tiles += '<rect x="' + x + '" y="' + y + '" width="19" height="9" fill="#f1ead8"/>';
    let band = "";
    for (let x = 0; x < 400; x += 14) band += '<rect x="' + x + '" y="37" width="7" height="7" fill="' + (x % 28 ? "#2e7d5b" : "#b9925a") + '"/>';
    let win = "";
    for (let x = 30; x < 290; x += 34) win += '<rect x="' + x + '" y="114" width="22" height="20" rx="2" fill="#d6e8f7" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="#ddd4c0"/>' + tiles +
      '<rect x="0" y="33" width="400" height="15" fill="#1c3f33"/>' + band +
      '<rect x="0" y="0" width="400" height="30" fill="#2a2a2e"/>' +
      [60, 160, 260, 360].map((x, i) => '<rect class="lm-flk" style="animation-delay:-' + i * 0.7 + 's" x="' + (x - 26) + '" y="22" width="52" height="6" rx="2" fill="#fff8d6"/>').join("") +
      /* black sign */
      '<rect x="60" y="56" width="280" height="34" rx="3" fill="#111"/><rect x="60" y="56" width="280" height="3" fill="#fff"/>' +
      '<text x="76" y="80" ' + font + ' font-size="17" fill="#fff">86 St</text>' +
      bullet(256, 73, "4", GRN) + bullet(282, 73, "5", GRN) + bullet(308, 73, "6", GRN) +
      [16, 384].map(x => '<rect x="' + (x - 5) + '" y="30" width="10" height="130" fill="#2f5d4a"/>').join("") +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="102" width="300" height="58" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="290" y="110" width="16" height="24" rx="2" fill="#d6e8f7"/>' + bullet(298, 148, "6", GRN) +
        '<rect x="10" y="140" width="280" height="4" fill="' + GRN + '"/>' +
        '<circle cx="22" cy="152" r="3" fill="#fff6c2"/>' +
      '</g>' +
      '<rect x="0" y="160" width="400" height="10" fill="#eab308"/><rect x="0" y="170" width="400" height="90" fill="#5a5751"/>' +
      '<rect x="0" y="170" width="400" height="3" fill="#3a3834"/>' +
      person(334, 196, "#1b1b1b", "", ICE) + person(358, 200, "#2a2a2a") +
      txt("UPPER EAST SIDE", 150, 236, 11, CREAM, 'letter-spacing="3"'));
  }

  /* 2. His prep school on the West Side ("leave out the back of my school, the press out to get me"): brick and glass building,
     a kid with a backpack heading out, camera flashes popping behind the barrier */
  function school() {
    let glass = "";
    for (let y = 44; y < 170; y += 18) for (let x = 152; x < 270; x += 22) glass += '<rect class="lm-bl lm-bl' + ((x + y) % 3 + 1) + '" x="' + x + '" y="' + y + '" width="18" height="14" fill="#9cc7e6" opacity=".55"/>';
    let brick = "";
    for (let y = 70; y < 196; y += 7) for (let x = (y / 7) % 2 ? 20 : 26; x < 140; x += 12) brick += '<rect x="' + x + '" y="' + y + '" width="10" height="5" fill="#8a3b2a"/>';
    for (let y = 70; y < 196; y += 7) for (let x = (y / 7) % 2 ? 296 : 302; x < 382; x += 12) brick += '<rect x="' + x + '" y="' + y + '" width="10" height="5" fill="#8a3b2a"/>';
    const cam = (x, y, cls) => person(x, y, "#141414") + '<rect x="' + (x + 4) + '" y="' + (y + 4) + '" width="12" height="8" rx="1" fill="#2b2b2b"/><circle cx="' + (x + 16) + '" cy="' + (y + 8) + '" r="3" fill="#555"/>' +
      '<circle class="lm-fl ' + cls + '" cx="' + (x + 17) + '" cy="' + (y + 6) + '" r="9" fill="#fffbe0"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#ls)"/>' +
      /* towers */
      '<rect x="140" y="30" width="156" height="170" fill="#33414f"/>' + glass +
      '<rect x="140" y="30" width="156" height="6" fill="#c9d3dc"/>' +
      '<rect x="14" y="64" width="132" height="136" fill="#9b4733"/>' + brick + '<rect x="14" y="60" width="132" height="6" fill="#d8c8b0"/>' +
      '<rect x="290" y="64" width="96" height="136" fill="#9b4733"/><rect x="290" y="60" width="96" height="6" fill="#d8c8b0"/>' +
      [34, 74, 114].map(x => '<rect x="' + x + '" y="84" width="18" height="24" fill="#f4d58d" opacity=".75"/><rect x="' + x + '" y="126" width="18" height="24" fill="#f4d58d" opacity=".55"/>').join("") +
      [306, 346].map(x => '<rect x="' + x + '" y="84" width="18" height="24" fill="#f4d58d" opacity=".75"/><rect x="' + x + '" y="126" width="18" height="24" fill="#f4d58d" opacity=".55"/>').join("") +
      /* back door */
      '<rect x="186" y="140" width="64" height="16" rx="2" fill="#141c26"/><rect x="196" y="160" width="44" height="40" fill="#1e2a35"/><rect x="198" y="162" width="19" height="36" fill="#9cc7e6" opacity=".6"/><rect x="219" y="162" width="19" height="36" fill="#9cc7e6" opacity=".6"/>' +
      txt("STUDENT EXIT", 218, 151, 8, CREAM, 'letter-spacing="1.5"') +
      /* sidewalk */
      '<rect x="0" y="200" width="400" height="60" fill="#6b6a66"/><rect x="0" y="200" width="400" height="4" fill="#8e8c86"/>' +
      /* the kid walking out (no face), backpack */
      person(206, 206, "#0e0e10", "lm-walk", "#3a7bd5") +
      /* barrier + press */
      '<rect x="20" y="226" width="160" height="6" fill="#d8d0b8"/><rect x="28" y="226" width="4" height="24" fill="#d8d0b8"/><rect x="168" y="226" width="4" height="24" fill="#d8d0b8"/>' +
      cam(40, 204, "") + cam(80, 208, "lm-fl2") + cam(122, 204, "lm-fl3") +
      txt("THE PRESS IS OUT", 290, 244, 11, GOLD, 'letter-spacing="2"'),
      sky("ls", "#1a2238", "#5b6b8a"));
  }

  /* 3. Turks and Caicos at night ("sand in turks"): big moon over the water, white sand going black and blue, the villa lit up, palms swaying */
  function turks() {
    const palm = (x, y, cls) => '<g class="lm-palm ' + cls + '"><path d="M' + x + ' 230 q6 -50 ' + (x > 200 ? -4 : 4) + ' -100" stroke="#3b2a1c" stroke-width="6" fill="none"/>' +
      [[-34, 8], [-22, -10], [0, -16], [24, -10], [34, 8]].map(([dx, dy]) => '<path d="M' + (x + (x > 200 ? -4 : 4)) + ' ' + y + ' q' + dx / 2 + ' ' + (dy - 14) + ' ' + dx + ' ' + (dy + 6) + '" stroke="#1d4d3a" stroke-width="6" fill="none" stroke-linecap="round"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lt)"/>' + stars(26, 80) +
      '<circle cx="250" cy="58" r="30" fill="#f6f1dc"/><circle cx="240" cy="50" r="5" fill="#e4dcc0"/><circle cx="262" cy="66" r="4" fill="#e4dcc0"/>' +
      '<circle cx="250" cy="58" r="44" fill="#f6f1dc" opacity=".12"/>' +
      /* water */
      '<rect x="0" y="120" width="400" height="80" fill="url(#lw)"/>' +
      '<g class="lm-wv"><path d="M230 128h40M222 140h56M214 154h72M206 170h88" stroke="#f6f1dc" stroke-width="2" opacity=".55"/></g>' +
      '<g class="lm-wv lm-wv2"><path d="M0 182q20 -6 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bff3ff" stroke-width="2" fill="none" opacity=".7"/></g>' +
      /* sand */
      '<path d="M0 196q100 -14 200 -4t200 -2v70h-400z" fill="#e9e1c8"/><path d="M0 214q120 -10 240 0t160 -4v50h-400z" fill="#d3c8a6"/>' +
      /* villa */
      '<rect x="20" y="132" width="104" height="58" fill="#f2efe6"/><path d="M14 134l62 -24l54 24z" fill="#c8b48a"/>' +
      [32, 62, 92].map(x => '<rect class="lm-bl lm-bl' + (x % 3 + 1) + '" x="' + x + '" y="146" width="18" height="16" fill="#ffd27a"/>').join("") +
      '<rect x="54" y="168" width="22" height="22" fill="#ffd27a" opacity=".85"/><rect x="20" y="186" width="104" height="5" fill="#2bb3c0" opacity=".8"/>' +
      palm(150, 130, "") + palm(352, 120, "lm-palm2") +
      txt("TURKS &amp; CAICOS", 300, 248, 13, "#0e2a44", 'letter-spacing="3"'),
      sky("lt", "#05081a", "#1b2c5a") + '<linearGradient id="lw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f3d6b"/><stop offset="1" stop-color="#1aa3b5"/></linearGradient>');
  }

  /* 4. Gracie Mansion in Carl Schurz Park on the East River: the pale-yellow Federal house, white porch and rooftop railing,
     green lawn, park lamps, a tugboat going by, leaves falling */
  function gracie() {
    let rail = "";
    for (let x = 114; x < 284; x += 8) rail += '<path d="M' + x + ' 106l4 8l4 -8" stroke="#fff" stroke-width="1.4" fill="none"/>';
    let porch = "";
    for (let x = 96; x <= 304; x += 26) porch += '<rect x="' + x + '" y="150" width="5" height="44" fill="#fff"/>';
    let win = "";
    [128, 168, 230, 270].forEach(x => { win += '<rect x="' + x + '" y="122" width="14" height="20" fill="#2b3a4a"/><rect x="' + (x - 5) + '" y="122" width="4" height="20" fill="#1f3b2c"/><rect x="' + (x + 15) + '" y="122" width="4" height="20" fill="#1f3b2c"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#lg)"/>' +
      /* river behind */
      '<rect x="0" y="92" width="400" height="34" fill="#4f7a96"/>' +
      '<g class="lm-tug"><rect x="0" y="100" width="40" height="10" rx="3" fill="#b5302a"/><rect x="10" y="92" width="16" height="9" fill="#f2efe6"/><rect x="16" y="86" width="4" height="7" fill="#222"/></g>' +
      '<path d="M0 92h400" stroke="#9fb9cc" stroke-width="1"/>' +
      /* trees */
      [[30, 120, 34], [70, 128, 26], [350, 118, 36], [388, 130, 24]].map(([x, y, r]) => '<rect x="' + (x - 3) + '" y="' + y + '" width="6" height="80" fill="#4b3424"/><circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#2f6b3c"/><circle cx="' + (x + 10) + '" cy="' + (y - 8) + '" r="' + (r * 0.6) + '" fill="#3f8a4c"/>').join("") +
      /* the house */
      '<rect x="100" y="112" width="200" height="82" fill="#f1dc8e"/>' +
      '<path d="M96 112l20 -16h168l20 16z" fill="#5d5a55"/><rect x="112" y="92" width="176" height="4" fill="#fff"/>' + rail.replace(/ 106l4 8l4 -8/g, ' 84l4 8l4 -8') + '<rect x="112" y="82" width="176" height="3" fill="#fff"/><rect x="100" y="110" width="200" height="4" fill="#fff"/>' +
      '<rect x="100" y="112" width="200" height="4" fill="#d9c070"/>' + win +
      '<rect x="88" y="146" width="224" height="6" fill="#fff"/>' + porch + '<rect x="88" y="186" width="224" height="5" fill="#fff"/>' +
      '<rect x="190" y="158" width="20" height="30" fill="#2a3b2e"/><path d="M186 158q14 -12 28 0" fill="none" stroke="#fff" stroke-width="2"/>' +
      '<rect x="150" y="70" width="8" height="14" fill="#9a8f80"/><rect x="242" y="70" width="8" height="14" fill="#9a8f80"/>' +
      /* lawn + path + lamps */
      '<rect x="0" y="194" width="400" height="66" fill="#3f7d3b"/><path d="M186 194l-30 66h88l-30 -66z" fill="#c9bfa3"/>' +
      [70, 330].map(x => '<rect x="' + (x - 2) + '" y="160" width="4" height="50" fill="#1d1d1d"/><circle class="lm-flk" cx="' + x + '" cy="158" r="6" fill="#fff3c0"/>').join("") +
      '<circle class="lm-leaf" cx="60" cy="110" r="3" fill="#d98b2b"/><circle class="lm-leaf lm-leaf2" cx="340" cy="104" r="3" fill="#e0b13a"/><circle class="lm-leaf lm-leaf3" cx="380" cy="118" r="3" fill="#c4562a"/>' +
      '<rect x="110" y="226" width="180" height="22" rx="4" fill="#0e2216" opacity=".8"/>' +
      txt("GRACIE MANSION", 200, 242, 12, CREAM, 'letter-spacing="3"'),
      sky("lg", "#7ec3f0", "#d8eefa"));
  }

  /* 5. E 82 St & 5 Av: the Metropolitan Museum's limestone front behind (paired columns, three tall arches, banners, the wide steps),
     a sidewalk-shed wall in front with LIL MABU tagged, green street signs, cabs rolling by */
  function corner() {
    let cols = "";
    [74, 144, 246, 316].forEach(x => { cols += '<rect x="' + x + '" y="48" width="9" height="88" fill="#efe6d2"/><rect x="' + (x + 12) + '" y="48" width="9" height="88" fill="#efe6d2"/>' +
      '<rect x="' + (x - 2) + '" y="44" width="25" height="6" fill="#d9ceb5"/><rect x="' + (x + 2) + '" y="30" width="17" height="12" fill="#ddd2b8"/>'; });
    const arch = x => '<path d="M' + x + ' 136v-60a22 22 0 0 1 44 0v60z" fill="#3a3f48"/><path d="M' + (x + 4) + ' 136v-58a18 18 0 0 1 36 0v58z" fill="#e9c46a" opacity=".22"/>';
    const banner = (x, c) => '<rect class="lm-flag" x="' + x + '" y="56" width="16" height="44" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lc)"/>' + stars(14, 24) +
      /* museum front */
      '<rect x="40" y="40" width="320" height="104" fill="#e2d7bf"/><rect x="34" y="26" width="332" height="16" fill="#d6caae"/><rect x="34" y="22" width="332" height="5" fill="#c2b597"/>' +
      arch(108) + arch(178) + arch(248) + cols +
      banner(96, "#c0392b") + banner(166, "#1f6fb2") + banner(268, "#d4a017") +
      /* steps */
      [0, 1, 2, 3].map(i => '<rect x="' + (30 - i * 6) + '" y="' + (144 + i * 6) + '" width="' + (340 + i * 12) + '" height="6" fill="' + (i % 2 ? "#cfc3a8" : "#d9ceb5") + '"/>').join("") +
      /* sidewalk shed wall */
      '<rect x="0" y="168" width="400" height="10" fill="#1c3b2b"/><rect x="0" y="178" width="290" height="50" fill="#2f5d45"/>' +
      [0, 60, 120, 180, 240].map(x => '<path d="M' + x + ' 178v50" stroke="#24493a" stroke-width="2"/>').join("") +
      tag("LIL MABU", 14, 218, 38, ICE, -5) + tag("LET ME COOK", 190, 204, 15, GOLD, -4) + tag("YGA", 236, 224, 15, "#fff", -3) +
      /* sidewalk + street */
      '<rect x="0" y="228" width="400" height="32" fill="#5d5f63"/><rect x="0" y="228" width="400" height="4" fill="#8a8c90"/>' +
      '<g class="lm-car"><rect x="0" y="240" width="46" height="13" rx="4" fill="#f2c200"/><rect x="12" y="234" width="20" height="7" rx="2" fill="#f2c200"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="36" cy="253" r="4" fill="#111"/></g>' +
      '<g class="lm-car lm-car2"><rect x="0" y="240" width="46" height="13" rx="4" fill="#1b1b1b"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="36" cy="253" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="352" y="94" width="5" height="136" fill="#3d4b3f"/>' +
      '<rect x="300" y="98" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("E 82 St", 348, 114, 12, "#fff") +
      '<rect x="300" y="124" width="96" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("5 Av", 348, 140, 12, "#fff") +
      '<circle class="lm-flk" cx="354" cy="92" r="4" fill="#fff6c2"/>',
      sky("lc", "#0b1026", "#3b3f66"));
  }

  window.SCENES = { st86: st86, school: school, turks: turks, gracie: gracie, corner: corner };
})();
