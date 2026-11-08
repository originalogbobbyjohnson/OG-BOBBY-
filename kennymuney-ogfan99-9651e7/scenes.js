/* kennymuney scenes (Regions tab: Memphis + Tennessee; South Memphis). CSS classes and ids prefixed km- (the page's own anim-train is kept).
   1 MATA Route 12 Mallory bus pulling up at Florida St & South Pkwy E in South Memphis.
   2 A South Memphis corner store at night: OPEN sign blinking, scratch-off tickets in the window ("thinkin' 'bout opening a corner store" - My $eason; "go buy me a scratch-off" - Scratch Off).
   3 The Mud Island monorail gliding over the Wolf River Harbor, the Mississippi beyond ("you might as well really come jump in this river" - Diamonds).
   4 Cross Country: a tour van rolling under the green I-55 / I-40 interstate signs out of Memphis ("I'm 'cross the country with this").
   5 Kansas St and South Pkwy W in South Memphis: green signs, KENNY MUNEY tagged in blue, the old Tennessee Brewery's brick tower up toward downtown behind.
   400 x 260 SVGs. No logos, no faces. No 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes kmblink{0%,49%{opacity:1}50%,100%{opacity:.18}}.km-bl{animation:kmblink 1.2s steps(1) infinite}' +
    '@keyframes kmglow{0%,100%{opacity:.35}50%{opacity:1}}.km-gl{animation:kmglow 2s ease-in-out infinite}.km-gl2{animation-delay:-1s}' +
    '@keyframes kmmono{from{transform:translateX(-160px)}to{transform:translateX(440px)}}.km-mono{animation:kmmono 9s linear infinite;animation-delay:-4s}' +
    '@keyframes kmwave{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.km-wave{animation:kmwave 3s linear infinite}' +
    '@keyframes kmvan{from{transform:translateX(-150px)}to{transform:translateX(430px)}}.km-van{animation:kmvan 6s linear infinite;animation-delay:-3s}' +
    '@keyframes kmdash{from{stroke-dashoffset:0}to{stroke-dashoffset:-56}}.km-dash{animation:kmdash .6s linear infinite}' +
    '@keyframes kmspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.km-sp{animation:kmspray 1.4s ease-out infinite}.km-sp2{animation-delay:.5s}' +
    '@keyframes kmtw{0%,100%{opacity:.3}50%{opacity:1}}.km-tw{animation:kmtw 1.8s ease-in-out infinite}.km-tw2{animation-delay:-.9s}' +
    '@keyframes kmleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.km-leaf{animation:kmleaf 3s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom center}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="km-tw' + (i % 2 ? ' km-tw2' : '') + '" cx="' + ((i * 73 + 11) % 400) + '" cy="' + (8 + (i * 37) % 70) + '" r="' + (i % 3 ? 0.8 : 1.4) + '" fill="#fff"/>').join("");
  const MATA = "#0057a8", BLUE = "#2f8cff", ICE = "#9be7ff", GREEN = "#3ecf6e", GOLD = "#e8c547";

  /* 1. MATA Route 12 Mallory at Florida St & South Pkwy E */
  function kmstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 44) + '" y="128" width="34" height="24" rx="3" fill="#1b2633"/>').join("");
    const bus = '<g class="anim-train"><rect x="36" y="116" width="316" height="66" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M36 160h316v10H36z" fill="' + MATA + '"/><path d="M36 170h316v4H36z" fill="' + GREEN + '"/>' +
      '<rect x="326" y="124" width="22" height="40" rx="3" fill="#2b3640"/><rect x="286" y="118" width="66" height="9" rx="2" fill="#111"/><text x="319" y="125.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">12 MALLORY</text>' +
      '<circle cx="90" cy="184" r="11" fill="#222"/><circle cx="90" cy="184" r="4" fill="#888"/><circle cx="300" cy="184" r="11" fill="#222"/><circle cx="300" cy="184" r="4" fill="#888"/><circle cx="348" cy="172" r="3.5" fill="#fff6c2"/></g>';
    const tree = (x, r) => '<g class="km-leaf"><rect x="' + (x - 2) + '" y="' + (100 - r) + '" width="4" height="' + (r + 16) + '" fill="#4a3324"/><circle cx="' + x + '" cy="' + (96 - r) + '" r="' + r + '" fill="#2f6b3a"/><circle cx="' + (x + r * .6) + '" cy="' + (100 - r) + '" r="' + r * .7 + '" fill="#3b7d45"/></g>';
    const house = (x, c, roof) => '<rect x="' + x + '" y="84" width="46" height="32" fill="' + c + '"/><path d="M' + (x - 4) + ' 86l27 -18l27 18z" fill="' + roof + '"/><rect x="' + (x + 8) + '" y="94" width="10" height="10" fill="#ffe7a0" opacity=".8"/><rect x="' + (x + 28) + '" y="98" width="10" height="18" fill="#4a3324"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms1)"/>' +
      house(14, "#c9b49a", "#5a4636") + tree(76, 18) + house(98, "#9fb7c9", "#3d4a57") + tree(166, 15) + house(188, "#d9c7a6", "#6a4a36") + tree(258, 19) + house(280, "#b98a5e", "#4a3a2e") + tree(352, 16) +
      '<rect x="0" y="116" width="400" height="80" fill="#55565a"/><path d="M0 150h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".5"/>' +
      bus +
      '<rect x="0" y="196" width="400" height="64" fill="#b9b3a6"/><path d="M0 196h400" stroke="#8f897c" stroke-width="3"/>' +
      '<rect x="372" y="150" width="5" height="70" fill="#4a4f55"/><circle cx="374.5" cy="142" r="13" fill="' + MATA + '" stroke="#fff" stroke-width="2"/><text x="374.5" y="147" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">12</text>' +
      '<rect x="22" y="204" width="336" height="44" rx="3" fill="#111"/><text x="34" y="222" ' + font + ' font-size="13" fill="#fff">Florida St &amp; South Pkwy E</text>' +
      '<circle cx="42" cy="236" r="7" fill="' + MATA + '"/><text x="42" y="239.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">12</text><text x="56" y="240" ' + font + ' font-size="10.5" fill="#cfd8e0">Mallory · South Memphis</text>',
      sky("kms1", "#7fb7e6", "#f1d9b0"));
  }

  /* 2. South Memphis corner store at night: OPEN sign, scratch-offs in the window */
  function kmstore() {
    const tickets = Array.from({ length: 8 }, (_, i) => {
      const x = 52 + (i % 4) * 30, y = 120 + Math.floor(i / 4) * 30, c = [BLUE, GREEN, GOLD, "#e2574c"][i % 4];
      return '<rect x="' + x + '" y="' + y + '" width="24" height="24" rx="2" fill="' + c + '"/><rect x="' + (x + 4) + '" y="' + (y + 10) + '" width="16" height="8" rx="1" fill="#c0c4c8"/><text x="' + (x + 12) + '" y="' + (y + 8) + '" text-anchor="middle" ' + font + ' font-size="5.5" fill="#fff">WIN $</text>';
    }).join("");
    const cans = Array.from({ length: 7 }, (_, i) => '<rect x="' + (232 + i * 18) + '" y="126" width="12" height="18" rx="2" fill="' + ["#e2574c", BLUE, GREEN, "#f08a24", GOLD, ICE, "#b55cff"][i] + '"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (232 + i * 18) + '" y="152" width="12" height="18" rx="2" fill="' + [GREEN, GOLD, "#e2574c", ICE, BLUE, "#f08a24", "#b55cff"][i] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#kms2)"/>' + stars(18) +
      '<rect x="20" y="56" width="360" height="160" fill="#7a4a34"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M20 ' + (66 + i * 15) + 'h360" stroke="#5e3826" stroke-width="1"/>').join("") +
      '<rect x="20" y="56" width="360" height="30" fill="#1d3a5c"/><text x="200" y="77" text-anchor="middle" ' + font + ' font-size="18" fill="#fff" letter-spacing="3">CORNER STORE</text>' +
      '<rect x="40" y="104" width="134" height="96" fill="#10202e" stroke="#c0c4c8" stroke-width="3"/>' + tickets +
      '<text x="107" y="114" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">SCRATCH-OFFS</text>' +
      '<rect x="190" y="104" width="30" height="112" fill="#0e1822" stroke="#c0c4c8" stroke-width="3"/><circle cx="214" cy="160" r="2.5" fill="#c0c4c8"/>' +
      '<rect x="226" y="104" width="134" height="96" fill="#10202e" stroke="#c0c4c8" stroke-width="3"/>' + cans +
      '<g class="km-bl"><rect x="250" y="176" width="86" height="20" rx="10" fill="none" stroke="#ff3b5c" stroke-width="3"/><text x="293" y="191" text-anchor="middle" ' + font + ' font-size="14" fill="#ff6b84">OPEN</text></g>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4a4b50"/><path d="M0 216h400" stroke="#2d2e32" stroke-width="3"/>' +
      '<path d="M384 120l-40 96h80z" fill="#fff6c2" opacity=".12"/>' +
      '<rect x="382" y="120" width="5" height="96" fill="#3a3d42"/><circle cx="384.5" cy="116" r="7" fill="#fff3b0" class="km-gl km-gl2"/>',
      sky("kms2", "#081428", "#1d2f52"));
  }

  /* 3. Mud Island monorail over the Wolf River Harbor */
  function kmmono() {
    const towers = [70, 200, 330].map(x => '<path d="M' + (x - 8) + ' 214L' + x + ' 34L' + (x + 8) + ' 214z" fill="#d7dbe0" stroke="#8a929b" stroke-width="1.5"/>').join("");
    const cables = '<path d="M0 110Q35 140 70 34Q135 150 200 34Q265 150 330 34Q365 140 400 110" fill="none" stroke="#c7ccd2" stroke-width="2.5"/>' +
      Array.from({ length: 26 }, (_, i) => { const x = 8 + i * 15.4; return '<path d="M' + x + ' 128v-' + (20 + (i * 13) % 50) + '" stroke="#c7ccd2" stroke-width="1" opacity=".7"/>'; }).join("");
    const deck = '<rect x="0" y="126" width="400" height="10" fill="#bfc5cc" stroke="#7d858e" stroke-width="1.5"/>';
    const car = '<g class="km-mono"><rect x="0" y="138" width="130" height="30" rx="12" fill="#e9eef3" stroke="#6f7984" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (12 + i * 22) + '" y="145" width="16" height="12" rx="3" fill="#2d4a66"/>').join("") +
      '<path d="M0 162h130" stroke="' + BLUE + '" stroke-width="3"/><rect x="40" y="134" width="8" height="6" fill="#6f7984"/><rect x="84" y="134" width="8" height="6" fill="#6f7984"/></g>';
    const water = '<rect x="0" y="176" width="400" height="84" fill="#3f6f8f"/>' +
      '<g class="km-wave">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' ' + (196 + (i % 3) * 18) + 'q10 -5 20 0t20 0" stroke="' + ICE + '" stroke-width="1.6" fill="none" opacity=".6"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms3)"/>' +
      '<circle cx="330" cy="70" r="22" fill="#ffd98a" opacity=".85"/>' +
      '<path d="M0 176h400v-16c-40 -8 -80 -4 -120 -10c-60 -8 -120 4 -180 -2c-40 -4 -70 4 -100 0z" fill="#5f7a4a"/>' +
      water + towers + cables + deck + car +
      '<rect x="12" y="226" width="166" height="22" rx="3" fill="#111" opacity=".85"/><text x="22" y="241" ' + font + ' font-size="11" fill="#fff">MUD ISLAND · WOLF RIVER</text>',
      sky("kms3", "#f4a259", "#9bd0e8"));
  }

  /* 4. Cross Country: tour van under the I-55 / I-40 signs */
  function kmroad() {
    const shield = (x, y, n) => '<path d="M' + x + ' ' + y + 'h26v6q0 18 -13 24q-13 -6 -13 -24z" fill="#1e4fa8" stroke="#fff" stroke-width="1.5"/><rect x="' + x + '" y="' + y + '" width="26" height="7" fill="#c8102e"/><text x="' + (x + 13) + '" y="' + (y + 22) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + n + '</text>';
    const panel = (x, w, n, line1, line2) => '<rect x="' + x + '" y="30" width="' + w + '" height="66" rx="5" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' + shield(x + 10, 38, n) +
      '<text x="' + (x + 44) + '" y="52" ' + font + ' font-size="12" fill="#fff">' + line1 + '</text><text x="' + (x + 44) + '" y="70" ' + font + ' font-size="12" fill="#fff">' + line2 + '</text>' +
      '<path d="M' + (x + w / 2) + ' 80v10m-6 -6l6 6l6 -6" stroke="#fff" stroke-width="2.5" fill="none"/>';
    const van = '<g class="km-van"><rect x="0" y="160" width="120" height="40" rx="8" fill="#141c2b"/><path d="M96 160h14q10 0 10 14v8h-24z" fill="#1e2a40"/>' +
      '<rect x="8" y="166" width="80" height="14" rx="3" fill="#2d4a66"/><rect x="100" y="166" width="14" height="12" rx="2" fill="#2d4a66"/>' +
      '<path d="M4 188h112" stroke="' + BLUE + '" stroke-width="3"/><text x="48" y="197" text-anchor="middle" ' + font + ' font-size="7" fill="' + ICE + '">ON TOUR</text>' +
      '<circle cx="26" cy="202" r="9" fill="#222"/><circle cx="26" cy="202" r="3.5" fill="#888"/><circle cx="96" cy="202" r="9" fill="#222"/><circle cx="96" cy="202" r="3.5" fill="#888"/><circle cx="118" cy="182" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms4)"/>' + stars(10) +
      '<path d="M0 150l60 -18l70 10l80 -16l90 14l100 -12v32H0z" fill="#2a3b2e"/>' +
      '<rect x="0" y="102" width="400" height="8" fill="#6d737b"/><rect x="30" y="20" width="6" height="134" fill="#6d737b"/><rect x="364" y="20" width="6" height="134" fill="#6d737b"/>' +
      panel(44, 150, "55", "SOUTH", "Jackson") + panel(206, 150, "40", "WEST", "Little Rock") +
      '<rect x="0" y="150" width="400" height="110" fill="#3b3d42"/><path class="km-dash" d="M0 214h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="28 28"/>' +
      '<path d="M0 154h400" stroke="#e8d36b" stroke-width="2"/>' + van +
      '<rect x="230" y="226" width="160" height="22" rx="3" fill="#111" opacity=".85"/><text x="240" y="241" ' + font + ' font-size="11" fill="#fff">CROSS COUNTRY · I-55</text>',
      sky("kms4", "#0d1b33", "#3a5b8a"));
  }

  /* 5. Kansas St & South Pkwy W, the Tennessee Brewery tower behind */
  function kmcorner() {
    const brewery = '<g><rect x="250" y="40" width="70" height="120" fill="#8a3b2a"/><rect x="236" y="90" width="120" height="70" fill="#7a3324"/>' +
      '<path d="M250 40l35 -18l35 18z" fill="#5a2418"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (252 + i * 14) + '" y="34" width="8" height="8" fill="#8a3b2a"/>').join("") +
      '<rect x="252" y="52" width="66" height="14" fill="#5a2418"/><text x="285" y="62.5" text-anchor="middle" ' + font + ' font-size="7" fill="#f2ead8">TENNESSEE</text>' +
      '<text x="296" y="104" text-anchor="middle" ' + font + ' font-size="8" fill="#f2ead8">BREWERY</text>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (262 + i * 18) + '" y="72" width="8" height="14" rx="4" fill="#2a1410"/>').join("") +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (244 + i * 22) + '" y="114" width="10" height="16" rx="5" fill="#2a1410"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#kms5)"/>' + stars(16) + brewery +
      '<rect x="0" y="150" width="400" height="10" fill="#555a60"/>' +
      '<rect x="20" y="96" width="210" height="110" fill="#c9c2b4"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M20 ' + (106 + i * 13) + 'h210" stroke="#b1aa9c" stroke-width="1"/>').join("") +
      tag("KENNY", 38, 140, 34, BLUE, -6) + tag("MUNEY", 72, 182, 34, ICE, -6) + tag("P.R.E.", 166, 126, 18, GREEN, 8) +
      '<circle class="km-sp" cx="214" cy="176" r="3" fill="' + BLUE + '"/><circle class="km-sp km-sp2" cx="220" cy="170" r="2.5" fill="' + ICE + '"/>' +
      '<rect x="0" y="206" width="400" height="54" fill="#4a4b50"/><path d="M0 206h400" stroke="#2d2e32" stroke-width="3"/>' +
      '<rect x="364" y="124" width="6" height="86" fill="#4a4f55"/>' + sign(262, 132, 132, "Kansas St") + sign(268, 158, 126, "South Pkwy W") +
      '<rect x="360" y="184" width="14" height="10" rx="2" fill="#4a4f55"/>',
      sky("kms5", "#0a1530", "#3c3a6a"));
  }

  window.SCENES = { kmstop, kmstore, kmmono, kmroad, kmcorner };
})();
