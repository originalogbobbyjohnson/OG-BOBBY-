/* femdot. scenes (Regions tab: Chicago; Rogers Park, Far North Side). CSS classes and ids prefixed fm- (the page's own anim-train is kept).
   1 Morse on the CTA Red Line: the concrete embankment over Morse Ave in Rogers Park, a silver Red Line train sliding in.
   2 Loyola Park lakefront: the painted "Artists of the Wall" seawall panels on Lake Michigan, waves rolling in.
   3 Madonna della Strada on the Loyola lakeshore: the pale Art Deco limestone chapel with its tall windows and tower, gulls over the lake ("Pray pt. 1").
   4 The hooptie ("94 Camry Music", "Bishop Ford"): a dented, color-switching sedan parked at Oak Street Beach, Gold Coast towers behind.
   5 W Morse Ave and N Glenwood Ave in Rogers Park: green signs, FEMDOT. tagged on the Red Line embankment wall (the Mile of Murals), a train going by on top. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fmflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.fm-flk{animation:fmflick 2.2s infinite}.fm-flk2{animation-delay:.7s}' +
    '@keyframes fmcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.fm-car{animation:fmcar 7s linear infinite}.fm-car2{animation-delay:-3.5s}' +
    '@keyframes fmcarL{from{transform:translateX(520px)}to{transform:translateX(-160px)}}.fm-carL{animation:fmcarL 8s linear infinite}' +
    '@keyframes fmwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-18px)}}.fm-wave{animation:fmwave 3.2s ease-in-out infinite}.fm-wave2{animation-delay:-1.6s}' +
    '@keyframes fmgull{0%{transform:translate(0,0)}50%{transform:translate(70px,-10px)}100%{transform:translate(140px,0)}}.fm-gull{animation:fmgull 9s linear infinite}.fm-gull2{animation-delay:-4.5s}' +
    '@keyframes fmglow{0%,100%{opacity:.35}50%{opacity:.95}}.fm-glow{animation:fmglow 2.6s ease-in-out infinite}.fm-glow2{animation-delay:-1.3s}' +
    '@keyframes fmbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.fm-bob{animation:fmbob .9s ease-in-out infinite}' +
    '@keyframes fmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fm-sp{animation:fmspray 1.4s ease-out infinite}.fm-sp2{animation-delay:.45s}' +
    '@keyframes fmtop{from{transform:translateX(460px)}to{transform:translateX(-420px)}}.fm-top{animation:fmtop 6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const RED = "#c60c30", CREAM = "#f4e3c1", LAKE = "#5fb3ff", GOLD = "#f2c94c";
  const lake = (y, c1, c2) => '<rect x="0" y="' + y + '" width="400" height="' + (260 - y) + '" fill="' + c1 + '"/>' +
    '<g class="fm-wave">' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 52 - 10) + ' ' + (y + 12) + 'q13 -6 26 0t26 0" stroke="' + c2 + '" stroke-width="2" fill="none"/>').join("") + '</g>' +
    '<g class="fm-wave fm-wave2">' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 52 + 14) + ' ' + (y + 28) + 'q13 -6 26 0t26 0" stroke="' + c2 + '" stroke-width="2" fill="none" opacity=".7"/>').join("") + '</g>';
  const gull = (cls, x, y) => '<g class="' + cls + '"><path d="M' + x + ' ' + y + 'q6 -6 12 0q6 -6 12 0" stroke="#f4f4f4" stroke-width="2" fill="none"/></g>';

  /* 1. Morse (Red Line), on the embankment over Morse Ave */
  function fmstation() {
    const win = Array.from({ length: 5 }, (_, i) => '<rect x="' + (46 + i * 48) + '" y="78" width="32" height="22" rx="3" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train"><rect x="26" y="68" width="328" height="62" rx="7" fill="#d4d8dc" stroke="#7a828a" stroke-width="2"/>' + win +
      Array.from({ length: 16 }, (_, i) => '<path d="M' + (34 + i * 20) + ' 106v20" stroke="#b9bfc5" stroke-width="1.5"/>').join("") +
      '<rect x="26" y="102" width="328" height="4" fill="' + RED + '"/>' +
      '<rect x="334" y="72" width="18" height="54" rx="4" fill="#b3b9bf"/><circle cx="344" cy="122" r="3.5" fill="#fff6c2"/>' +
      '<rect x="262" y="72" width="68" height="12" rx="2" fill="#111"/><text x="296" y="81" text-anchor="middle" ' + font + ' font-size="8" fill="#ff4d6a">HOWARD</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fms1)"/>' +
      '<g fill="#3a2f3e"><rect x="0" y="18" width="50" height="50"/><rect x="56" y="30" width="36" height="38"/><rect x="306" y="26" width="40" height="42"/><rect x="352" y="14" width="48" height="54"/></g>' +
      '<g fill="#ffd98a" opacity=".7"><rect x="10" y="28" width="6" height="8"/><rect x="28" y="44" width="6" height="8"/><rect x="318" y="36" width="6" height="8"/><rect x="366" y="26" width="6" height="8"/></g>' +
      '<path d="M0 54h400" stroke="#5a5f66" stroke-width="3"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 2) + '" y="54" width="4" height="14" fill="#5a5f66"/>').join("") +
      '<g class="fm-flk"><rect x="96" y="58" width="36" height="4" fill="#fff3c4"/></g><g class="fm-flk fm-flk2"><rect x="268" y="58" width="36" height="4" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="132" width="400" height="6" fill="#f2c200"/><rect x="0" y="138" width="400" height="12" fill="#9a958c"/>' +
      /* concrete embankment wall + Morse Ave underpass */
      '<rect x="0" y="150" width="400" height="80" fill="#b8b0a2"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 46) + ' 150v80" stroke="#a29a8c" stroke-width="2"/>').join("") +
      '<path d="M150 230v-50q50 -26 100 0v50z" fill="#2a2a30"/><rect x="150" y="226" width="100" height="4" fill="#444"/>' +
      '<g class="fm-glow"><circle cx="175" cy="200" r="3" fill="#ffe9a8"/></g><g class="fm-glow fm-glow2"><circle cx="225" cy="200" r="3" fill="#ffe9a8"/></g>' +
      '<rect x="0" y="230" width="400" height="30" fill="#3a3a3f"/><path d="M0 245h400" stroke="#d8d8d8" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("fm-car", 0, 236, "#2f6f9f") +
      '<rect x="20" y="160" width="126" height="32" rx="3" fill="#111"/><text x="30" y="182" ' + font + ' font-size="17" fill="#fff">Morse</text>' + badge(88, 176, "RED", RED) +
      '<rect x="270" y="160" width="110" height="22" rx="3" fill="#111"/><text x="325" y="175" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MORSE AV</text>' +
      '<text x="200" y="12" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".85">RED LINE · ROGERS PARK · FAR NORTH SIDE</text>',
      sky("fms1", "#1e2140", "#d98a6a"));
  }

  /* 2. Loyola Park lakefront: the painted seawall */
  function fmwall() {
    const panels = ["#e4572e", "#f2c94c", "#5fb3ff", "#3ddc84", "#b56cff", "#ff7aa8", "#f4e3c1", "#2fb5a8"];
    const art = panels.map((c, i) => {
      const x = 8 + i * 49;
      return '<rect x="' + x + '" y="150" width="45" height="44" fill="' + c + '"/>' +
        (i % 3 === 0 ? '<circle cx="' + (x + 22) + '" cy="168" r="10" fill="#fff" opacity=".7"/>' : i % 3 === 1 ? '<path d="M' + (x + 4) + ' 188l18 -30l18 30z" fill="#1b2440" opacity=".55"/>' : '<path d="M' + (x + 4) + ' 172q10 -14 18 0t18 0" stroke="#1b2440" stroke-width="4" fill="none" opacity=".6"/>');
    }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fms2)"/>' +
      '<circle cx="320" cy="48" r="20" fill="#fff1c9"/>' +
      lake(96, "#2f78b5", "#bfe3ff") +
      gull("fm-gull", 20, 50) + gull("fm-gull fm-gull2", 60, 34) +
      '<rect x="0" y="140" width="400" height="10" fill="#cfc8ba"/><rect x="0" y="150" width="400" height="48" fill="#bdb5a6"/>' + art +
      '<rect x="0" y="198" width="400" height="62" fill="#e8d6a8"/>' + Array.from({ length: 14 }, (_, i) => '<circle cx="' + (i * 30 + 12) + '" cy="' + (220 + (i % 3) * 10) + '" r="1.5" fill="#c9b88a"/>').join("") +
      '<g class="fm-bob"><rect x="262" y="206" width="40" height="8" rx="2" fill="#7a4b2a"/><rect x="266" y="214" width="4" height="10" fill="#5a3820"/><rect x="294" y="214" width="4" height="10" fill="#5a3820"/></g>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="11" fill="#14284a">LOYOLA PARK · LAKE MICHIGAN</text>',
      sky("fms2", "#8fd0ff", "#e8f6ff"));
  }

  /* 3. Madonna della Strada chapel on the lake */
  function fmchapel() {
    const WX = [128, 156, 232, 260]; const winds = WX.map((x, i) => '<rect x="' + x + '" y="120" width="12" height="54" rx="6" fill="#3a4a66"/><rect class="fm-glow' + (i % 2 ? " fm-glow2" : "") + '" x="' + (x + 2) + '" y="124" width="8" height="46" rx="4" fill="#ffd98a"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fms3)"/>' +
      lake(150, "#3c6d9e", "#c9e2f5") +
      gull("fm-gull", 30, 60) + gull("fm-gull fm-gull2", 90, 44) +
      /* chapel: long nave, stepped Art Deco tower */
      '<rect x="112" y="104" width="176" height="82" fill="#ece3cf" stroke="#c7b998" stroke-width="2"/>' +
      '<path d="M106 106h188l-8 -10h-172z" fill="#d9ccae"/>' +
      '<rect x="240" y="46" width="40" height="60" fill="#ece3cf" stroke="#c7b998" stroke-width="2"/><rect x="246" y="32" width="28" height="16" fill="#ece3cf" stroke="#c7b998" stroke-width="2"/><rect x="252" y="20" width="16" height="14" fill="#ece3cf" stroke="#c7b998" stroke-width="2"/>' +
      '<path d="M260 20v-12M255 13h10" stroke="#c9a24a" stroke-width="2.5"/>' +
      '<rect x="252" y="58" width="16" height="36" rx="8" fill="#3a4a66"/>' + winds +
      '<path d="M182 186v-28q18 -18 36 0v28z" fill="#6b5232"/>' +
      [118, 146, 174, 222, 250, 278].map(x => '<rect x="' + x + '" y="108" width="2" height="76" fill="#d6c9a8"/>').join("") +
      '<rect x="0" y="186" width="400" height="14" fill="#7aa35a"/><rect x="0" y="200" width="400" height="60" fill="#b8b0a2"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 46) + ' 200v60" stroke="#a29a8c" stroke-width="2"/>').join("") +
      '<text x="200" y="232" text-anchor="middle" ' + font + ' font-size="12" fill="#3a3326">MADONNA DELLA STRADA · LOYOLA</text>',
      sky("fms3", "#f3b38a", "#fbe4c6"));
  }

  /* 4. The hooptie at Oak Street Beach */
  function fmhooptie() {
    const towers = [[10, 40, 60], [56, 60, 44], [96, 30, 70], [140, 70, 36], [176, 50, 56], [226, 20, 80], [270, 56, 50], [316, 36, 64], [356, 60, 44]];
    const sky2 = towers.map(t => '<rect x="' + t[0] + '" y="' + t[1] + '" width="' + t[2] * .6 + '" height="' + (140 - t[1]) + '" fill="#2c2a3e"/>').join("") +
      towers.map((t, k) => Array.from({ length: 4 }, (_, i) => '<rect x="' + (t[0] + 4) + '" y="' + (t[1] + 8 + i * 16) + '" width="5" height="6" fill="#ffd98a" class="' + (k % 2 ? "fm-glow" : "fm-glow fm-glow2") + '"/>').join("")).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#fms4)"/>' + sky2 +
      '<rect x="0" y="140" width="400" height="10" fill="#4a4a52"/>' +
      lake(150, "#1f3e66", "#8fb8de") +
      '<rect x="0" y="196" width="400" height="64" fill="#d9c79a"/>' +
      /* the car: two-tone, dented, paint chipping */
      '<g class="fm-bob"><path d="M96 214h208q10 0 12 -10l-6 -14q-4 -8 -14 -8h-40l-20 -20q-6 -6 -16 -6h-56q-10 0 -18 8l-18 18h-22q-10 0 -12 10z" fill="#b9a37a"/>' +
      '<path d="M210 182h40q10 0 14 8l6 14q-2 10 -12 10h-48z" fill="#7a2f2f"/>' +
      '<path d="M150 178l14 -14h40l18 18z" fill="#bfe3ff" opacity=".85"/><path d="M186 164v18" stroke="#b9a37a" stroke-width="3"/>' +
      '<path d="M120 198q6 4 12 0M240 196q5 5 10 0" stroke="#8a744e" stroke-width="2" fill="none"/>' +
      '<circle cx="128" cy="200" r="3" fill="#f4f1e8"/><circle cx="262" cy="190" r="2" fill="#f4f1e8"/><circle cx="270" cy="196" r="1.5" fill="#f4f1e8"/>' +
      '<rect x="300" y="194" width="10" height="6" rx="2" fill="#fff6c2"/></g>' +
      '<circle cx="136" cy="216" r="14" fill="#111"/><circle cx="136" cy="216" r="6" fill="#888"/><circle cx="270" cy="216" r="14" fill="#111"/><circle cx="270" cy="216" r="6" fill="#888"/>' +
      /* Timbs in the sand */
      '<g><path d="M40 238h22l4 -10h-14l-2 -8h-10z" fill="#d79a3c" stroke="#7a5512" stroke-width="1.5"/><path d="M66 242h22l4 -10h-14l-2 -8h-10z" fill="#d79a3c" stroke="#7a5512" stroke-width="1.5"/></g>' +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="11" fill="#f3e6d0">OAK STREET BEACH · THE HOOPTIE</text>',
      sky("fms4", "#1a1838", "#c86a6a"));
  }

  /* 5. W Morse Ave and N Glenwood Ave: the Red Line embankment wall */
  function fmcorner() {
    const train = '<g class="fm-top"><rect x="0" y="54" width="300" height="34" rx="5" fill="#d4d8dc" stroke="#7a828a" stroke-width="1.5"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (14 + i * 48) + '" y="60" width="30" height="14" rx="2" fill="#1f2a33"/>').join("") + '<rect x="0" y="78" width="300" height="3" fill="' + RED + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fms5)"/>' +
      '<circle cx="60" cy="40" r="14" fill="#fff1c9" opacity=".9"/>' +
      train +
      '<rect x="0" y="88" width="400" height="8" fill="#f2c200"/><rect x="0" y="96" width="400" height="128" fill="#b8b0a2"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 46) + ' 96v128" stroke="#a29a8c" stroke-width="2"/>').join("") +
      /* mural blocks on the wall */
      '<rect x="230" y="104" width="70" height="50" fill="#2fb5a8" opacity=".85"/><circle cx="265" cy="129" r="14" fill="' + GOLD + '"/><rect x="304" y="104" width="40" height="50" fill="#b56cff" opacity=".8"/>' +
      tag("FEMDOT.", 20, 182, 54, CREAM, -6) + tag("KING DILLA", 40, 210, 18, GOLD, -4) + tag("DELACREME", 160, 214, 15, LAKE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="378" y="100" width="6" height="124" fill="#2f2f2f"/>' + sign(272, 160, 120, "W Morse Ave") + sign(270, 186, 124, "N Glenwood Ave") +
      car("fm-carL", 0, 240, "#b9a37a") +
      '<g class="fm-sp"><circle cx="196" cy="150" r="3" fill="' + CREAM + '" opacity=".7"/></g><g class="fm-sp fm-sp2"><circle cx="202" cy="144" r="2" fill="' + CREAM + '" opacity=".6"/></g>',
      sky("fms5", "#2a2f5c", "#e9a07a"));
  }

  window.SCENES = { fmstation: fmstation, fmwall: fmwall, fmchapel: fmchapel, fmhooptie: fmhooptie, fmcorner: fmcorner };
})();
