/* kanebrown scenes (Regions: MEMPHIS + TENNESSEE; Genres: country; born in Chattanooga, raised in Rossville / Fort Oglethorpe GA and Red Bank TN,
   went viral with cover songs filmed on his phone). CSS classes and ids prefixed kbr- (the page's own anim-train is kept). No logos, no faces, no 9 drawn. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#f2c14e", ICE = "#eef2f6", BLUE = "#3aa0d8", RIDGE = "#3c5a46", RIDGE2 = "#2c4636", GRASS = "#4f7a34";
  const css = '<style>' +
    '@keyframes kbrglow{0%,100%{opacity:.4}50%{opacity:1}}.kbr-glow{animation:kbrglow 2.2s ease-in-out infinite}.kbr-g2{animation-delay:-1.1s}' +
    '@keyframes kbrcloud{0%{transform:translateX(0)}100%{transform:translateX(36px)}}.kbr-cl{animation:kbrcloud 13s ease-in-out infinite alternate}' +
    '@keyframes kbrcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.kbr-car{animation:kbrcar 7s linear infinite}' +
    '@keyframes kbrsmoke{0%{transform:translateY(0);opacity:.7}100%{transform:translate(10px,-30px);opacity:0}}.kbr-smoke{animation:kbrsmoke 3s ease-out infinite}.kbr-s2{animation-delay:-1.5s}' +
    '@keyframes kbrwater{0%{transform:translateX(0)}100%{transform:translateX(-24px)}}.kbr-water{animation:kbrwater 2s linear infinite}' +
    '@keyframes kbrnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-60px);opacity:0}}.kbr-note{animation:kbrnote 3s ease-out infinite}.kbr-n2{animation-delay:-1s}.kbr-n3{animation-delay:-2s}' +
    '@keyframes kbrheart{0%{transform:translateY(0) scale(.6);opacity:0}20%{opacity:1}100%{transform:translateY(-90px) scale(1);opacity:0}}.kbr-heart{transform-box:fill-box;animation:kbrheart 3.4s ease-out infinite}.kbr-h2{animation-delay:-1.1s}.kbr-h3{animation-delay:-2.2s}' +
    '@keyframes kbrrec{0%,100%{opacity:1}50%{opacity:.2}}.kbr-rec{animation:kbrrec 1s steps(1) infinite}' +
    '@keyframes kbrspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.kbr-sp{animation:kbrspray 1.4s ease-out infinite}.kbr-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const cap = (txt, y) => '<text x="200" y="' + (y || 252) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-6" width="4" height="10" fill="#3a2a1c"/><circle cx="0" cy="-18" r="14" fill="' + c + '"/><circle cx="-9" cy="-10" r="9" fill="' + c + '"/><circle cx="9" cy="-10" r="9" fill="' + c + '"/></g>';
  /* Lookout Mountain: long flat-topped ridge with the steep north point */
  const lookout = (y, c1, c2) => '<path d="M0 ' + y + 'L60 ' + (y - 44) + 'h210l40 20l90 ' + 8 + 'V260H0z" fill="' + c1 + '"/><path d="M0 ' + (y + 16) + 'q120 -24 240 -6t160 0V260H0z" fill="' + c2 + '"/>';

  /* ROOM 0: CARTA Route 13 Rossville at the end of the line, State St / State Line, where Tennessee turns into Georgia; Lookout Mountain behind */
  function kbrstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (50 + i * 44) + '" y="132" width="34" height="22" rx="3" fill="#1e2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="34" y="120" width="318" height="64" rx="10" fill="#f2f4f6" stroke="#7d868f" stroke-width="2"/>' + win +
      '<rect x="34" y="160" width="318" height="9" fill="#1f4e79"/><rect x="34" y="170" width="318" height="3" fill="' + GOLD + '"/>' +
      '<rect x="326" y="128" width="22" height="40" rx="3" fill="#2b3640"/><rect x="300" y="122" width="50" height="9" rx="2" fill="#111"/><text x="325" y="129.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">13 ROSSVILLE</text>' +
      '<circle cx="88" cy="186" r="11" fill="#222"/><circle cx="88" cy="186" r="4" fill="#888"/><circle cx="300" cy="186" r="11" fill="#222"/><circle cx="300" cy="186" r="4" fill="#888"/><circle cx="350" cy="172" r="3.5" fill="#fff6c2" class="kbr-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kbr0)"/>' +
      '<g class="kbr-cl"><ellipse cx="90" cy="28" rx="44" ry="8" fill="#fff" opacity=".6"/><ellipse cx="310" cy="20" rx="36" ry="7" fill="#fff" opacity=".5"/></g>' +
      lookout(118, RIDGE, RIDGE2) +
      '<rect x="0" y="118" width="400" height="80" fill="#4a4d52"/><path d="M0 196h400" stroke="#d8d8d0" stroke-width="3"/><rect x="0" y="198" width="400" height="62" fill="#5a5d62"/><path d="M0 228h400" stroke="#f0d040" stroke-width="2.5" stroke-dasharray="18 12"/>' +
      bus +
      /* black stop sign with route badge */
      '<rect x="96" y="34" width="212" height="44" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/><rect x="198" y="78" width="5" height="42" fill="#8a8e94"/>' +
      '<text x="108" y="52" ' + font + ' font-size="12" fill="#fff">State St / State Line</text><text x="108" y="69" ' + font + ' font-size="10" fill="#ccc">End of the line · Rossville</text>' +
      '<circle cx="284" cy="56" r="15" fill="#1f4e79"/><text x="284" y="61" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">13</text>' +
      /* state line sign */
      '<rect x="22" y="88" width="4" height="32" fill="#8a8e94"/><rect x="62" y="88" width="4" height="32" fill="#8a8e94"/><rect x="6" y="62" width="76" height="30" rx="3" fill="' + ICE + '" stroke="#1f4e79" stroke-width="2"/><text x="44" y="75" text-anchor="middle" ' + font + ' font-size="8" fill="#1f4e79">WELCOME TO</text><text x="44" y="87" text-anchor="middle" ' + font + ' font-size="10" fill="#1f4e79">GEORGIA</text>' +
      cap("CARTA ROUTE 13  ·  STATE LINE  ·  TENNESSEE / GEORGIA", 254),
      sky("kbr0", "#8ec0e4", "#eef0ea"));
  }

  /* ROOM 1: the John Ross House in Rossville (1797), the two-story log house the town is named for, by the spring; smoke from the chimney, water running */
  function kbrross() {
    const logs = Array.from({ length: 12 }, (_, i) => '<rect x="110" y="' + (92 + i * 7) + '" width="180" height="6" rx="3" fill="' + (i % 2 ? "#7a5232" : "#8a5e3a") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kbr1)"/>' +
      '<path d="M0 150q100-30 200-14t200-6v30H0z" fill="#3d5a2c"/>' +
      [24, 66, 340, 384].map((x, i) => tree(x, 156, 1.2, i % 2 ? "#2f4a24" : "#3a5a2c")).join("") +
      '<rect x="0" y="176" width="400" height="84" fill="' + GRASS + '"/>' +
      /* house */
      logs + '<path d="M100 94l100-36 100 36z" fill="#5a5a5e"/><rect x="100" y="92" width="200" height="4" fill="#4a4a4e"/>' +
      '<rect x="284" y="52" width="16" height="44" fill="#9a8a78"/><rect x="100" y="52" width="16" height="44" fill="#9a8a78"/>' +
      '<circle cx="292" cy="44" r="6" fill="#ddd" class="kbr-smoke"/><circle cx="292" cy="44" r="5" fill="#ddd" class="kbr-smoke kbr-s2"/>' +
      [128, 176, 238].map(x => '<rect x="' + x + '" y="102" width="20" height="16" fill="#e9e2c8" stroke="#4a3220" stroke-width="2"/><rect x="' + x + '" y="140" width="20" height="16" fill="#e9e2c8" stroke="#4a3220" stroke-width="2"/>').join("") +
      '<rect x="206" y="138" width="22" height="38" fill="#4a3220"/><rect x="104" y="174" width="192" height="4" fill="#6a5a48"/>' +
      /* spring branch */
      '<path d="M0 214q100-10 200 0t200 0v18q-100 6-200-4t-200 2z" fill="#4f8fb8"/>' +
      '<g class="kbr-water">' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 24) + ' 222h10" stroke="#bfe0ee" stroke-width="1.5"/>').join("") + '</g>' +
      /* marker */
      '<rect x="44" y="180" width="4" height="30" fill="#555"/><rect x="24" y="160" width="44" height="24" rx="2" fill="#1f3a5a" stroke="' + GOLD + '" stroke-width="1.5"/><text x="46" y="171" text-anchor="middle" ' + font + ' font-size="6" fill="' + GOLD + '">JOHN ROSS</text><text x="46" y="180" text-anchor="middle" ' + font + ' font-size="6" fill="' + GOLD + '">HOUSE · 1797</text>' +
      cap("THE JOHN ROSS HOUSE  ·  ROSSVILLE, GEORGIA", 252),
      sky("kbr1", "#9cc6e4", "#f2efe4"));
  }

  /* ROOM 2: Lakeview-Fort Oglethorpe High, where he sang in the school choir: brick school front, sign, notes floating out of the open doors */
  function kbrschool() {
    return svg(
      '<rect width="400" height="260" fill="url(#kbr2)"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="' + GRASS + '"/><path d="M0 222h400" stroke="#cfc6b2" stroke-width="12"/>' +
      '<rect x="40" y="86" width="320" height="96" fill="#9a4a32"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M40 ' + (92 + i * 7) + 'h320" stroke="#7a3624" stroke-width=".6"/>').join("") +
      '<rect x="40" y="80" width="320" height="8" fill="#d8d2c4"/>' +
      Array.from({ length: 8 }, (_, i) => i === 3 || i === 4 ? "" : '<rect x="' + (56 + i * 38) + '" y="100" width="24" height="26" fill="#bfe0ee"/><rect x="' + (56 + i * 38) + '" y="140" width="24" height="26" fill="#bfe0ee"/>').join("") +
      '<rect x="168" y="120" width="64" height="62" fill="#2a2a30"/><rect x="172" y="124" width="27" height="58" fill="#ffe7a8" class="kbr-glow"/><rect x="201" y="124" width="27" height="58" fill="#ffe7a8" class="kbr-glow kbr-g2"/>' +
      '<text x="200" y="112" text-anchor="middle" ' + font + ' font-size="9" fill="' + ICE + '">CHOIR TONIGHT</text>' +
      ['kbr-note', 'kbr-note kbr-n2', 'kbr-note kbr-n3'].map((c, i) => '<g class="' + c + '"><text x="' + (184 + i * 16) + '" y="130" ' + font + ' font-size="16" fill="' + GOLD + '">' + (i % 2 ? "♫" : "♪") + '</text></g>').join("") +
      /* school sign */
      '<rect x="270" y="196" width="5" height="22" fill="#6a6a6a"/><rect x="340" y="196" width="5" height="22" fill="#6a6a6a"/><rect x="256" y="168" width="104" height="32" rx="3" fill="#1f2a44" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="308" y="181" text-anchor="middle" ' + font + ' font-size="5.8" fill="' + GOLD + '">LAKEVIEW-FORT OGLETHORPE</text><text x="308" y="194" text-anchor="middle" ' + font + ' font-size="9" fill="' + ICE + '">HIGH SCHOOL</text>' +
      [20, 380].map(x => tree(x, 180, 1.3, "#3d6329")).join("") +
      cap("FORT OGLETHORPE, GA  ·  WHERE HE SANG IN THE CHOIR", 252),
      sky("kbr2", "#f2a86a", "#f6e6c8"));
  }

  /* ROOM 3: the bedroom covers that went viral: phone on a little tripod recording (red dot blinking), acoustic guitar, lamp, hearts floating up */
  function kbrcover() {
    return svg(
      '<rect width="400" height="260" fill="#2a2430"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#5a4636"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 190v70" stroke="#4a3828" stroke-width="2"/>').join("") +
      /* window with night + moon */
      '<rect x="40" y="40" width="110" height="90" fill="#141a30" stroke="#d8d2c4" stroke-width="5"/><path d="M95 40v90M40 85h110" stroke="#d8d2c4" stroke-width="3"/><circle cx="70" cy="62" r="9" fill="#f6f0c8"/>' +
      /* poster with notes */
      '<rect x="190" y="44" width="70" height="56" fill="' + BLUE + '"/><text x="225" y="78" text-anchor="middle" ' + font + ' font-size="22" fill="' + ICE + '">♫</text>' +
      /* lamp */
      '<rect x="300" y="160" width="60" height="30" fill="#6a5040"/><rect x="326" y="120" width="4" height="40" fill="#888"/><path d="M312 120h32l-8-20h-16z" fill="' + GOLD + '"/><circle cx="328" cy="112" r="16" fill="#ffe7a8" opacity=".18"/>' +
      /* guitar on its stand */
      '<g transform="translate(110 150) rotate(-14)"><rect x="-3" y="-70" width="6" height="60" fill="#5a3a24"/><rect x="-5" y="-82" width="10" height="14" rx="2" fill="#3a2418"/><ellipse cx="0" cy="0" rx="20" ry="16" fill="#c98a4a"/><ellipse cx="0" cy="18" rx="25" ry="20" fill="#c98a4a"/><circle cx="0" cy="6" r="6" fill="#3a2418"/><path d="M-1 -70v80M1 -70v80" stroke="#ddd" stroke-width=".5"/></g>' +
      /* phone on tripod */
      '<path d="M240 190l12-40M268 190l-12-40M254 190v-40" stroke="#333" stroke-width="3"/><rect x="236" y="104" width="36" height="58" rx="5" fill="#111"/><rect x="239" y="109" width="30" height="46" rx="2" fill="#24324a"/><circle cx="262" cy="114" r="2.6" fill="#ff3b3b" class="kbr-rec"/>' +
      '<text x="254" y="140" text-anchor="middle" ' + font + ' font-size="7" fill="' + ICE + '">COVER</text>' +
      ['kbr-heart', 'kbr-heart kbr-h2', 'kbr-heart kbr-h3'].map((c, i) => '<path class="' + c + '" d="M' + (232 + i * 16) + ' 104q-6-6-6-10q0-4 3-4q3 0 3 3q0-3 3-3q3 0 3 4q0 4-6 10z" fill="#ff6a8a"/>').join("") +
      cap("THE COVERS THAT WENT VIRAL  ·  ONE PHONE, ONE GUITAR", 252),
      '');
  }

  /* ROOM 4: his corner: Chickamauga Ave and W Gordon Ave in Rossville, Lookout Mountain behind, his name tagged on a block wall */
  function kbrcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#kbr4)"/>' +
      lookout(132, "#4a6a5a", "#3a5a4a") +
      '<rect x="0" y="140" width="400" height="84" fill="#c9c2b4"/>' + Array.from({ length: 10 }, (_, r) => Array.from({ length: 11 }, (_, c) => '<rect x="' + (c * 40 + (r % 2) * 20 - 20) + '" y="' + (140 + r * 8.4) + '" width="38" height="7" fill="#b8b0a0" opacity=".6"/>').join("")).join("") +
      tag("KANE BROWN", 26, 196, 36, GOLD, -5) + tag("WORLDWIDE", 40, 158, 14, BLUE, -3) + tag("1021", 250, 214, 22, ICE, -7) +
      '<g class="kbr-sp"><circle cx="232" cy="198" r="2" fill="' + GOLD + '"/></g><g class="kbr-sp kbr-sp2"><circle cx="238" cy="204" r="2" fill="' + GOLD + '"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#9a9a94"/><path d="M0 224h400" stroke="#cfcfc6" stroke-width="2"/>' +
      '<g class="kbr-car"><g transform="translate(0 226)"><rect x="0" y="6" width="56" height="16" rx="4" fill="#7a1f1f"/><path d="M14 6l6-8h18l6 8z" fill="#7a1f1f"/><circle cx="12" cy="24" r="5" fill="#222"/><circle cx="44" cy="24" r="5" fill="#222"/></g></g>' +
      '<rect x="338" y="92" width="5" height="134" fill="#8a8e94"/>' + sign(256, 70, 140, "Chickamauga Ave") + sign(286, 96, 108, "W Gordon Ave") +
      cap("CHICKAMAUGA AVE & W GORDON AVE  ·  LOOKOUT MOUNTAIN", 254),
      sky("kbr4", "#7fb7e0", "#f6e6c8"));
  }

  window.SCENES = { kbrstop: kbrstop, kbrross: kbrross, kbrschool: kbrschool, kbrcover: kbrcover, kbrcorner: kbrcorner };
})();
