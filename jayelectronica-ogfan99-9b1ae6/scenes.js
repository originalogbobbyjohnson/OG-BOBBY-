/* jayelectronica scenes (Regions tab: New Orleans; the Magnolia Projects, 3rd Ward - where Jay Electronica (Timothy Thedford) grew up). CSS classes and ids prefixed je- (the page's own anim-train is kept).
   1 S Claiborne Av / Washington Av on RTA bus route 51 (St. Bernard - Claiborne), the stop on the Magnolia's lake-side corner: the bus pulls in under the live oaks of the Claiborne neutral ground.
   2 Meserole Av, Brooklyn, in the rain ("sleepin' on the train, sleepin' on Meserole Ave out in the rain without even a single slice of pizza" - Exhibit C): the G train entrance glowing, rain falling, the pizza window lit.
   3 Boudhanath stupa, Kathmandu (his spiritual retreats to the Bodinath / Pashupatinath temples): white dome, gold spire, prayer flags fluttering, the Himalaya behind.
   4 A French Quarter cafe at dawn (he worked in a Quarter cafe before leaving for the 1995 Million Man March): iron gallery, gas lamps flickering, steam off the cup.
   5 Washington Av and Magnolia St at the old Magnolia: green signs, JAY ELEC tagged on the brick, the white tombs of Lafayette Cemetery No. 1 down Washington Av behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jeflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.35}55%{opacity:.9}}.je-flk{animation:jeflick 2.4s infinite}.je-flk2{animation-delay:.9s}' +
    '@keyframes jemoss{0%,100%{transform:skewX(0)}50%{transform:skewX(6deg)}}.je-moss{transform-box:fill-box;transform-origin:50% 0%;animation:jemoss 3.4s ease-in-out infinite}.je-moss2{animation-delay:-1.7s}' +
    '@keyframes jerain{from{transform:translate(0,-40px)}to{transform:translate(-14px,280px)}}.je-rain{animation:jerain .9s linear infinite}.je-rain2{animation-delay:-.3s}.je-rain3{animation-delay:-.6s}' +
    '@keyframes jeflag{0%,100%{transform:skewY(0) scaleY(1)}50%{transform:skewY(8deg) scaleY(.85)}}.je-flag{transform-box:fill-box;transform-origin:50% 0%;animation:jeflag 1.3s ease-in-out infinite}.je-flag2{animation-delay:-.65s}' +
    '@keyframes jebird{from{transform:translate(-40px,0)}to{transform:translate(460px,-30px)}}.je-bird{animation:jebird 12s linear infinite}.je-bird2{animation-delay:-6s}' +
    '@keyframes jesteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-22px);opacity:0}}.je-stm{animation:jesteam 2s ease-out infinite}.je-stm2{animation-delay:-1s}' +
    '@keyframes jeglow{0%,100%{opacity:.35}50%{opacity:.75}}.je-glow{animation:jeglow 2.8s ease-in-out infinite}' +
    '@keyframes jebolt{0%,86%,100%{opacity:0}88%,92%{opacity:1}}.je-bolt{animation:jebolt 4s infinite}' +
    '@keyframes jespray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.je-spr{animation:jespray 1.4s ease-out infinite}.je-spr2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const BLUE = "#6f8bff", GOLD = "#f2c14e", MINT = "#4fe3c1";
  const oak = (cx, cy, r, c) => '<g><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + r + '" ry="' + (r * 0.45) + '" fill="' + c + '"/><ellipse cx="' + (cx - r * 0.5) + '" cy="' + (cy + r * 0.1) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.32) + '" fill="' + c + '"/><ellipse cx="' + (cx + r * 0.5) + '" cy="' + (cy + r * 0.12) + '" rx="' + (r * 0.55) + '" ry="' + (r * 0.3) + '" fill="' + c + '"/>' +
    [-0.55, -0.15, 0.25, 0.65].map((k, i) => '<path class="je-moss' + (i % 2 ? " je-moss2" : "") + '" d="M' + (cx + k * r) + ' ' + (cy + r * 0.25) + 'q-3 12 1 22q-2 7 0 12" stroke="#9aa58c" stroke-width="3" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const trunk = (x, y, h) => '<path d="M' + (x - 5) + ' ' + (y + h) + 'q4 -' + (h / 2) + ' 2 -' + h + 'h6q-2 ' + (h / 2) + ' 4 ' + h + 'z" fill="#3a2a1e"/>';
  const bullet = (x, y, r, txt, fill, tc) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + fill + '"/><text x="' + x + '" y="' + (y + r * 0.42) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.2) + '" fill="' + (tc || "#fff") + '">' + txt + '</text>';

  /* 1. S Claiborne Av / Washington Av, RTA 51 */
  function jestation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 36) + '" y="128" width="28" height="22" rx="2" fill="#1d2a36"/>').join("");
    const bus = '<g class="anim-train"><rect x="60" y="118" width="268" height="72" rx="10" fill="#f2f4f6" stroke="#2a3440" stroke-width="2"/>' + win +
      '<rect x="296" y="124" width="30" height="40" rx="4" fill="#1d2a36"/><rect x="60" y="156" width="268" height="7" fill="#0b6fb8"/><rect x="60" y="163" width="268" height="4" fill="' + GOLD + '"/>' +
      '<rect x="250" y="108" width="76" height="12" rx="2" fill="#111"/><text x="288" y="117" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffd36a">51 ST. BERNARD</text>' +
      '<circle cx="104" cy="192" r="11" fill="#1c1c1c"/><circle cx="104" cy="192" r="4" fill="#888"/><circle cx="280" cy="192" r="11" fill="#1c1c1c"/><circle cx="280" cy="192" r="4" fill="#888"/>' +
      '<rect x="322" y="170" width="6" height="8" rx="1" fill="#ffe08a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jes1)"/>' +
      '<g fill="#2b3150"><rect x="20" y="70" width="34" height="60"/><rect x="60" y="54" width="26" height="76"/><rect x="300" y="60" width="30" height="70"/><rect x="340" y="80" width="40" height="50"/></g>' +
      '<g fill="#ffe9a8" opacity=".6"><rect class="je-flk" x="66" y="62" width="4" height="6"/><rect x="76" y="80" width="4" height="6"/><rect class="je-flk je-flk2" x="308" y="72" width="4" height="6"/><rect x="318" y="96" width="4" height="6"/></g>' +
      oak(70, 92, 62, "#22402c") + oak(330, 88, 66, "#22402c") + oak(200, 76, 54, "#264a32") + trunk(70, 110, 90) + trunk(330, 106, 94) + trunk(200, 96, 104) +
      '<rect x="0" y="200" width="400" height="60" fill="#3b3f46"/><rect x="0" y="198" width="400" height="4" fill="#d9dde3"/>' +
      '<path d="M0 230h400" stroke="#ffd23f" stroke-width="2" stroke-dasharray="18 14"/>' + bus +
      /* stop sign post */
      '<rect x="22" y="70" width="4" height="132" fill="#555"/><rect x="368" y="70" width="4" height="132" fill="#555"/>' +
      '<rect x="4" y="34" width="392" height="40" rx="3" fill="#111" stroke="#cfd6dd" stroke-width="1.5"/>' +
      '<text x="16" y="59" ' + font + ' font-size="15" fill="#fff">S CLAIBORNE AV / WASHINGTON AV</text>' +
      bullet(370, 54, 13, "51", "#0b6fb8"),
      sky("jes1", "#141a3a", "#e08a5a"));
  }

  /* 2. Meserole Av in the rain, Brooklyn */
  function jemeserole() {
    const rain = Array.from({ length: 40 }, (_, i) => '<path class="je-rain je-rain' + (1 + i % 3) + '" d="M' + ((i * 37) % 420) + ' ' + ((i * 53) % 220) + 'l-4 14" stroke="#9ec3ff" stroke-width="1.4" opacity=".55"/>').join("");
    const bwin = (x0, y0, cols, rows) => Array.from({ length: cols * rows }, (_, i) => '<rect class="' + (i % 5 === 1 ? "je-flk" : "") + '" x="' + (x0 + (i % cols) * 22) + '" y="' + (y0 + Math.floor(i / cols) * 26) + '" width="12" height="16" fill="' + (i % 3 ? "#2a2030" : "#ffd98a") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jes2)"/>' +
      '<rect x="0" y="40" width="190" height="170" fill="#6e3a2c"/>' + bwin(14, 54, 8, 3) +
      '<rect x="210" y="56" width="190" height="154" fill="#584050"/>' + bwin(224, 68, 8, 2) +
      /* pizza shop */
      '<rect x="210" y="130" width="190" height="80" fill="#2a1a18"/><rect x="222" y="142" width="120" height="56" fill="#ffcf6a" class="je-glow"/>' +
      '<rect x="210" y="122" width="190" height="14" fill="#b8322a"/><text x="305" y="133" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">PIZZA - SLICES</text>' +
      '<path d="M250 186l22 -34l22 34z" fill="#f4b840" stroke="#a0601a" stroke-width="2"/><circle cx="266" cy="176" r="3" fill="#c0392b"/><circle cx="276" cy="180" r="3" fill="#c0392b"/><circle cx="272" cy="168" r="2.5" fill="#c0392b"/>' +
      '<rect x="352" y="146" width="36" height="64" fill="#1a1010"/><circle cx="380" cy="180" r="2" fill="#d4af37"/>' +
      /* subway entrance */
      '<rect x="40" y="168" width="110" height="42" fill="#1c2a1c"/><path d="M40 168h110" stroke="#2f6b2f" stroke-width="4"/>' +
      '<rect x="36" y="150" width="4" height="60" fill="#2e3a2e"/><rect x="150" y="150" width="4" height="60" fill="#2e3a2e"/>' +
      '<circle class="je-glow" cx="38" cy="146" r="7" fill="#4caf50"/><circle class="je-glow" cx="152" cy="146" r="7" fill="#4caf50"/>' +
      '<rect x="52" y="174" width="86" height="18" rx="2" fill="#111"/><text x="60" y="187" ' + font + ' font-size="10" fill="#fff">NASSAU AV</text>' + bullet(128, 183, 7, "G", "#6cbe45") +
      '<path d="M56 210l8 -14h62l8 14" fill="#121812"/>' +
      '<rect x="0" y="210" width="400" height="50" fill="#20242c"/><rect x="0" y="210" width="400" height="3" fill="#8a96a8"/>' +
      '<path d="M0 238h400" stroke="#3a4a6a" stroke-width="6" opacity=".6"/><ellipse cx="290" cy="236" rx="60" ry="5" fill="#ffcf6a" opacity=".25"/><ellipse cx="96" cy="236" rx="30" ry="4" fill="#4caf50" opacity=".25"/>' +
      '<rect x="180" y="96" width="4" height="114" fill="#2a2a2a"/>' + sign(160, 98, 90, "Meserole Av") + rain,
      sky("jes2", "#0c1024", "#2c3450"));
  }

  /* 3. Boudhanath stupa, Kathmandu */
  function jestupa() {
    const flagC = ["#1e6fd9", "#ffffff", "#d62828", "#2a9d5a", "#ffd23f"];
    const flags = (x1, y1, x2, y2, n, cls) => '<path d="M' + x1 + ' ' + y1 + 'Q' + ((x1 + x2) / 2) + ' ' + (Math.max(y1, y2) + 18) + ' ' + x2 + ' ' + y2 + '" stroke="#ccc" stroke-width="1" fill="none"/>' +
      Array.from({ length: n }, (_, i) => { const t = (i + 0.5) / n, x = (1 - t) * (1 - t) * x1 + 2 * t * (1 - t) * ((x1 + x2) / 2) + t * t * x2, y = (1 - t) * (1 - t) * y1 + 2 * t * (1 - t) * (Math.max(y1, y2) + 18) + t * t * y2;
        return '<rect class="je-flag' + (i % 2 ? " je-flag2" : "") + '" x="' + (x - 4) + '" y="' + y + '" width="8" height="10" fill="' + flagC[i % 5] + '"/>'; }).join("");
    const rings = Array.from({ length: 8 }, (_, i) => '<rect x="' + (186 + i * 1.6) + '" y="' + (56 - i * 6) + '" width="' + (28 - i * 3.2) + '" height="5" fill="' + (i % 2 ? "#e0b040" : "#c99a2e") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jes3)"/>' +
      '<path d="M0 120l50 -46l30 22l46 -54l40 40l30 -20l52 46l40 -34l56 44l56 -40v140h-400z" fill="#8a9ab8"/><path d="M126 22l20 18l-12 0zM294 66l16 14h-24z" fill="#fff"/>' +
      '<path d="M0 140l70 -30l60 20l80 -26l70 22l120 -24v100h-400z" fill="#5a6a7c"/>' +
      '<g class="je-bird"><path d="M0 60q6 -6 12 0q6 -6 12 0" stroke="#333" stroke-width="2" fill="none"/></g><g class="je-bird je-bird2"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#333" stroke-width="2" fill="none"/></g>' +
      /* terraces */
      '<rect x="40" y="200" width="320" height="22" fill="#efe8dc"/><rect x="60" y="184" width="280" height="18" fill="#f6f1e8"/><rect x="80" y="170" width="240" height="16" fill="#efe8dc"/>' +
      Array.from({ length: 18 }, (_, i) => '<rect x="' + (46 + i * 18) + '" y="206" width="8" height="10" rx="4" fill="#c9b89a"/>').join("") +
      /* dome */
      '<path d="M110 172q0 -86 90 -86q90 0 90 86z" fill="#fbfaf6" stroke="#ddd6c8" stroke-width="2"/><path d="M140 172q6 -60 60 -66" stroke="#e8e2d6" stroke-width="6" fill="none"/>' +
      /* harmika (gold, plain) */
      '<rect x="176" y="68" width="48" height="22" fill="#d8a838"/><rect x="172" y="64" width="56" height="6" fill="#b8862a"/>' + rings +
      '<path d="M194 10h12l-6 -8z" fill="#e0b040"/><rect x="198" y="8" width="4" height="4" fill="#ffd23f"/>' +
      flags(200, 8, 20, 150, 12, "") + flags(200, 8, 380, 150, 12, "") + flags(200, 30, 60, 172, 9, "") + flags(200, 30, 340, 172, 9, "") +
      '<rect x="0" y="222" width="400" height="38" fill="#b8a888"/>' +
      '<g fill="#8a5a3a"><circle cx="70" cy="234" r="3"/><circle cx="90" cy="238" r="3"/><circle cx="320" cy="236" r="3"/></g>',
      sky("jes3", "#5aa0e8", "#f6d6a8"));
  }

  /* 4. French Quarter cafe at dawn */
  function jecafe() {
    const lamp = (x, y, cls) => '<rect x="' + (x - 1.5) + '" y="' + y + '" width="3" height="16" fill="#222"/><path d="M' + (x - 8) + ' ' + (y + 16) + 'h16l-3 18h-10z" fill="#2a2a2a"/><path class="je-flk ' + cls + '" d="M' + (x - 5) + ' ' + (y + 19) + 'h10l-2 12h-6z" fill="#ffcf5a"/><circle class="je-glow" cx="' + x + '" cy="' + (y + 26) + '" r="16" fill="#ffcf5a" opacity=".3"/>';
    const rail = (x0, y0, w) => '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="3" fill="#1a1a1a"/><rect x="' + x0 + '" y="' + (y0 + 24) + '" width="' + w + '" height="3" fill="#1a1a1a"/>' +
      Array.from({ length: Math.floor(w / 8) }, (_, i) => '<rect x="' + (x0 + 3 + i * 8) + '" y="' + y0 + '" width="1.5" height="26" fill="#1a1a1a"/>').join("") +
      Array.from({ length: Math.floor(w / 24) }, (_, i) => '<circle cx="' + (x0 + 12 + i * 24) + '" cy="' + (y0 + 13) + '" r="5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>').join("");
    const table = (x) => '<ellipse cx="' + x + '" cy="200" rx="22" ry="5" fill="#f4f1ea"/><rect x="' + (x - 2) + '" y="200" width="4" height="26" fill="#2a2a2a"/><rect x="' + (x - 10) + '" y="224" width="20" height="3" fill="#2a2a2a"/>' +
      '<rect x="' + (x - 6) + '" y="190" width="12" height="9" rx="2" fill="#fff" stroke="#999"/><path d="M' + (x + 6) + ' 192q5 1 0 5" stroke="#999" fill="none"/>' +
      '<path class="je-stm" d="M' + (x - 2) + ' 188q-3 -6 0 -10" stroke="#fff" stroke-width="1.5" fill="none" opacity=".7"/><path class="je-stm je-stm2" d="M' + (x + 2) + ' 188q3 -6 0 -10" stroke="#fff" stroke-width="1.5" fill="none" opacity=".7"/>' +
      '<g fill="#f6e8c8"><rect x="' + (x - 18) + '" y="194" width="8" height="5" rx="2"/><rect x="' + (x - 14) + '" y="190" width="7" height="4" rx="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jes4)"/>' +
      '<rect x="0" y="30" width="230" height="190" fill="#e9a8a0"/><rect x="230" y="40" width="170" height="180" fill="#9fc8c0"/>' +
      [20, 80, 140].map(x => '<rect x="' + x + '" y="48" width="36" height="56" fill="#3a5a4a"/><rect x="' + (x + 2) + '" y="50" width="15" height="52" fill="#2e4a3c"/><rect x="' + (x + 19) + '" y="50" width="15" height="52" fill="#2e4a3c"/>').join("") +
      [250, 320].map(x => '<rect x="' + x + '" y="56" width="36" height="52" fill="#2e4a6a"/>').join("") +
      '<rect x="0" y="108" width="400" height="8" fill="#1a1a1a"/>' + rail(0, 82, 230) + rail(230, 88, 170) +
      [10, 120, 222, 300, 392].map(x => '<rect x="' + (x - 2) + '" y="116" width="4" height="110" fill="#1a1a1a"/>').join("") +
      '<rect x="20" y="130" width="90" height="70" fill="#4a3020"/><rect x="26" y="136" width="78" height="58" fill="#ffd98a" class="je-glow"/>' +
      '<rect x="134" y="130" width="76" height="76" fill="#3a2418"/><rect x="140" y="136" width="64" height="70" fill="#5a3a26"/>' +
      '<rect x="20" y="120" width="190" height="12" fill="#2a3a5a"/><text x="115" y="130" text-anchor="middle" ' + font + ' font-size="9" fill="#f6e8c8">CAFE - COFFEE AND BEIGNETS</text>' +
      '<rect x="244" y="130" width="140" height="80" fill="#2a3a4a"/><rect x="250" y="136" width="58" height="68" fill="#ffd98a" opacity=".75"/><rect x="320" y="136" width="58" height="68" fill="#ffd98a" opacity=".6"/>' +
      lamp(222, 116, "") + lamp(378, 116, "je-flk2") +
      '<rect x="0" y="226" width="400" height="34" fill="#6a6258"/><rect x="0" y="224" width="400" height="4" fill="#8a8278"/>' +
      Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' 228v32" stroke="#5a544c" stroke-width="1"/>').join("") +
      table(60) + table(170) + table(330),
      sky("jes4", "#f6b8a0", "#ffe6b8"));
  }

  /* 5. Washington Av and Magnolia St, Lafayette Cemetery tombs behind */
  function jecorner() {
    const tomb = (x, y, w, h) => '<g><rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="#e9e6df"/><path d="M' + (x - 3) + ' ' + y + 'l' + (w / 2 + 3) + ' -' + (h * 0.35) + 'l' + (w / 2 + 3) + ' ' + (h * 0.35) + 'z" fill="#d8d4cc"/>' +
      '<rect x="' + (x + w * 0.3) + '" y="' + (y + h * 0.3) + '" width="' + (w * 0.4) + '" height="' + (h * 0.5) + '" fill="#c4beb2"/><rect x="' + (x + w / 2 - 1) + '" y="' + (y - h * 0.35 - 7) + '" width="2" height="8" fill="#bbb"/><rect x="' + (x + w / 2 - 3) + '" y="' + (y - h * 0.35 - 5) + '" width="6" height="2" fill="#bbb"/></g>';
    const city = '<g fill="#3a4060"><rect x="230" y="40" width="22" height="70"/><rect x="256" y="56" width="18" height="54"/><rect x="278" y="30" width="16" height="80"/><rect x="298" y="62" width="26" height="48"/></g>' +
      Array.from({ length: 10 }, (_, i) => '<rect class="' + (i % 3 ? "" : "je-flk") + '" x="' + (234 + (i % 5) * 18) + '" y="' + (50 + Math.floor(i / 5) * 22) + '" width="4" height="6" fill="#ffe9a8" opacity=".7"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jes5)"/>' + city +
      '<rect x="120" y="96" width="250" height="34" fill="#cfc8bc"/>' + tomb(140, 78, 22, 40) + tomb(176, 70, 26, 50) + tomb(216, 80, 20, 40) + tomb(250, 72, 24, 48) + tomb(290, 82, 20, 38) + tomb(322, 74, 24, 46) +
      oak(26, 98, 58, "#24402a") + oak(380, 100, 48, "#24402a") +
      '<path class="je-bolt" d="M210 10l-8 18h8l-6 16l16 -22h-8l6 -12z" fill="#cfe0ff"/>' +
      '<rect x="0" y="128" width="400" height="96" fill="#8a4a36"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (136 + i * 8) + 'h400" stroke="#73392a" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (128 + i * 8) + 'v8" stroke="#73392a" stroke-width="1"/>').join("")).join("") +
      tag("JAY ELEC", 18, 196, 54, BLUE, -6) + tag("DOGON", 36, 220, 22, GOLD, -4) + tag("EXHIBIT C", 150, 218, 18, MINT, -4) + tag("ACT III", 266, 180, 22, "#ff7ad9", -6) +
      '<path d="M312 196l-6 14h6l-4 12l12 -16h-6l4 -10z" fill="' + GOLD + '" stroke="#000" stroke-width="1.5"/>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="372" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(274, 98, 120, "Washington Av") + sign(274, 124, 120, "Magnolia St") +
      '<rect x="8" y="116" width="4" height="108" fill="#222"/><circle class="je-flk" cx="10" cy="114" r="7" fill="#ffe9a8"/>' +
      '<g class="je-spr"><circle cx="168" cy="168" r="3" fill="' + BLUE + '" opacity=".7"/></g><g class="je-spr je-spr2"><circle cx="174" cy="162" r="2" fill="' + BLUE + '" opacity=".6"/></g>',
      sky("jes5", "#141638", "#c86a7a"));
  }

  window.SCENES = { jestation: jestation, jemeserole: jemeserole, jestupa: jestupa, jecafe: jecafe, jecorner: jecorner };
})();
