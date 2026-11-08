/* citygirls scenes (Regions tab: South Florida; Opa-locka / Liberty City). CSS classes and ids prefixed cg-.
   1 Metrobus Route 135 pulling into the end of the line at Opa-locka station (480 Ali Baba Ave): the 1927 Moorish Revival depot with keyhole arches and little domes, palms, pink dusk.
   2 Miami-Opa-locka Executive Airport, Yung Miami's side of town: a white private jet lifting off the runway at sunset (Flewed Out), the control tower, palms.
   3 Charles Hadley Park, Liberty City, JT's side of town: block party on the football field under the lights, the speakers thumping, the DJ booth, a crowd in silhouette.
   4 The Caresha Please set (Yung Miami's talk show): pink velvet couch, two mics, the ON AIR light blinking, a neon sign buzzing.
   5 Sharazad Blvd and Ali Baba Ave in Opa-locka: green signs, CITY GIRLS tagged with PERIOD and 305, the pink walls and white onion domes of the old City Hall up the block.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cgbus{0%{transform:translateX(440px)}45%,100%{transform:translateX(0)}}.cg-bus{animation:cgbus 7s ease-out infinite;animation-delay:-3.4s}' +
    '@keyframes cgsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.cg-sway{transform-box:fill-box;transform-origin:50% 100%;animation:cgsway 4s ease-in-out infinite}.cg-s2{animation-delay:-2s}' +
    '@keyframes cgjet{0%{transform:translate(-120px,40px) rotate(0)}40%{transform:translate(140px,20px) rotate(-6deg)}100%{transform:translate(480px,-90px) rotate(-14deg)}}.cg-jet{animation:cgjet 8s ease-in infinite;animation-delay:-3.2s}' +
    '@keyframes cgblink{0%,100%{opacity:.2}50%{opacity:1}}.cg-blink{animation:cgblink 1.2s ease-in-out infinite}.cg-b2{animation-delay:-.6s}' +
    '@keyframes cgthump{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}.cg-thump{transform-box:fill-box;transform-origin:50% 50%;animation:cgthump .5s ease-in-out infinite}' +
    '@keyframes cgbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.cg-bounce{animation:cgbounce .5s ease-in-out infinite}.cg-o2{animation-delay:-.25s}' +
    '@keyframes cgbeam{0%,100%{opacity:.18}50%{opacity:.4}}.cg-beam{animation:cgbeam 2s ease-in-out infinite}' +
    '@keyframes cgbuzz{0%,100%{opacity:1}46%{opacity:1}48%{opacity:.35}50%{opacity:1}72%{opacity:.6}74%{opacity:1}}.cg-buzz{animation:cgbuzz 3s linear infinite}' +
    '@keyframes cgcar{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.cg-car{animation:cgcar 6s linear infinite}' +
    '@keyframes cgdrip{0%{transform:scaleY(.2)}60%,100%{transform:scaleY(1)}}.cg-drip{transform-box:fill-box;transform-origin:50% 0%;animation:cgdrip 2.4s ease-in infinite}.cg-d2{animation-delay:-.9s}.cg-d3{animation-delay:-1.6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const PINK = "#ff4fa3", GOLD = "#f5d27a", AQUA = "#2bd9c9", MDBLUE = "#0072bc";
  /* a palm tree: trunk + swaying fronds */
  const palm = (x, y, h, cls) => '<path d="M' + x + ' ' + y + 'q-6 -' + (h / 2) + ' 4 -' + h + '" stroke="#7a5a3a" stroke-width="6" fill="none"/>' +
    '<g class="cg-sway ' + (cls || "") + '"><g transform="translate(' + (x + 4) + ' ' + (y - h) + ')" fill="#2f7a3a">' +
    '<path d="M0 0q-22 -8 -34 6q16 -6 34 -6z"/><path d="M0 0q22 -10 34 4q-16 -6 -34 -4z"/><path d="M0 0q-12 -18 -28 -14q16 2 28 14z"/><path d="M0 0q12 -20 28 -14q-16 2 -28 14z"/><path d="M0 0q-4 -22 4 -26q0 12 -4 26z"/></g></g>';
  /* Moorish onion dome on a drum */
  const dome = (x, y, r, col, drum) => '<rect x="' + (x - r * .8) + '" y="' + y + '" width="' + (r * 1.6) + '" height="' + (r * .9) + '" fill="' + (drum || "#f6e7d8") + '"/>' +
    '<path d="M' + (x - r) + ' ' + y + 'q0 -' + (r * 1.1) + ' ' + r + ' -' + (r * 1.7) + 'q' + r + ' ' + (r * .6) + ' ' + r + ' ' + (r * 1.7) + 'z" fill="' + col + '"/><rect x="' + (x - 1) + '" y="' + (y - r * 2.1) + '" width="2" height="' + (r * .5) + '" fill="' + GOLD + '"/>';

  /* 1. Metrobus 135 at Opa-locka station */
  function cgstop() {
    const bus = '<g class="cg-bus"><rect x="40" y="132" width="236" height="76" rx="10" fill="#f6f6f4" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 38) + '" y="146" width="32" height="28" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="146" width="28" height="52" rx="2" fill="#24323e"/><rect x="40" y="180" width="236" height="6" fill="' + MDBLUE + '"/><rect x="40" y="188" width="236" height="4" fill="#3aa64a"/>' +
      '<rect x="44" y="134" width="104" height="11" rx="2" fill="#111"/><text x="96" y="142.6" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">135 OPA-LOCKA STA</text>' +
      '<circle cx="88" cy="208" r="12" fill="#222"/><circle cx="88" cy="208" r="5" fill="#9aa1a8"/><circle cx="234" cy="208" r="12" fill="#222"/><circle cx="234" cy="208" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="198" r="3.5" fill="#fff6c2"/></g>';
    /* the 1927 Moorish depot: cream stucco, keyhole arches, a pair of small domes, crenellated parapet */
    const arches = Array.from({ length: 5 }, (_, i) => { const x = 128 + i * 34; return '<path d="M' + x + ' 128v-22q0 -10 10 -14q10 4 10 14v22z" fill="#3a2a2a"/><path d="M' + (x - 2) + ' 104q12 -16 24 0" stroke="' + AQUA + '" stroke-width="2" fill="none"/>'; }).join("");
    const merlons = Array.from({ length: 13 }, (_, i) => '<rect x="' + (112 + i * 16) + '" y="70" width="8" height="8" fill="#f6e7d8"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cg1)"/>' +
      '<circle cx="64" cy="48" r="20" fill="#ffd8a8" opacity=".9"/>' +
      '<rect x="112" y="78" width="200" height="50" fill="#f6e7d8"/>' + merlons + arches +
      dome(132, 66, 12, "#f6e7d8", "#efd9c4") + dome(292, 66, 12, "#f6e7d8", "#efd9c4") + dome(212, 60, 16, PINK) +
      '<rect x="150" y="82" width="124" height="10" rx="2" fill="#3a2a2a"/><text x="212" y="90" text-anchor="middle" ' + font + ' font-size="7.5" fill="' + GOLD + '">OPA-LOCKA</text>' +
      palm(70, 132, 76) + palm(340, 132, 84, "cg-s2") + palm(380, 132, 64) +
      '<rect x="0" y="128" width="400" height="14" fill="#d8cfc0"/><rect x="0" y="142" width="400" height="118" fill="#4e4e54"/><path d="M0 240h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      /* bus-bay sign with the 135 bullet */
      '<rect x="330" y="150" width="5" height="62" fill="#6b7178"/><rect x="292" y="104" width="100" height="48" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="342" y="118" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">OPA-LOCKA</text><text x="342" y="128" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">STATION</text>' +
      '<circle cx="342" cy="141" r="8.5" fill="' + MDBLUE + '"/><text x="342" y="144.2" text-anchor="middle" ' + font + ' font-size="7.5" fill="#fff">135</text>',
      sky("cg1", "#ff86b8", "#ffd9a0"));
  }

  /* 2. Opa-locka Executive Airport: private jet lifting off at sunset */
  function cgjet() {
    const jet = '<g class="cg-jet"><g transform="translate(0 150)"><path d="M0 0q50 -10 104 -6q8 3 0 7q-54 6 -104 4z" fill="#f4f4f2" stroke="#8a8f96" stroke-width="1.5"/>' +
      '<path d="M44 -3l24 -22h9l-11 22zM44 3l24 18h9l-11 -18z" fill="#dfe3e8" stroke="#8a8f96" stroke-width="1"/><path d="M4 -1l-6 -18h8l10 17z" fill="' + PINK + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<circle cx="' + (52 + i * 8) + '" cy="-3" r="1.8" fill="#24323e"/>').join("") + '<path d="M96 -4q6 0 8 3h-8z" fill="#24323e"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cg2)"/>' +
      '<circle cx="300" cy="120" r="34" fill="#ffe0a0" opacity=".85"/>' +
      '<g fill="#6a3a5a" opacity=".55"><rect x="0" y="150" width="400" height="20"/></g>' +
      /* control tower */
      '<rect x="54" y="92" width="16" height="70" fill="#d8d2c6"/><path d="M42 92h40l-6 -18h-28z" fill="#2a4a5a"/><rect x="40" y="70" width="44" height="6" fill="#d8d2c6"/><circle cx="62" cy="66" r="3" fill="#ff3b3b" class="cg-blink"/>' +
      /* hangar */
      '<path d="M100 162v-30q50 -26 100 0v30z" fill="#b8bec6"/><rect x="128" y="140" width="44" height="22" fill="#4a5058"/>' +
      palm(26, 166, 60) + palm(360, 166, 70, "cg-s2") +
      /* runway */
      '<path d="M0 166h400v94h-400z" fill="#3c3c42"/><path d="M0 206h400" stroke="#fff" stroke-width="3" stroke-dasharray="26 18"/>' +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + (20 + i * 40) + '" cy="170" r="2.5" fill="' + GOLD + '" class="cg-blink ' + (i % 2 ? "cg-b2" : "") + '"/>').join("") +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + (20 + i * 40) + '" cy="244" r="2.5" fill="' + GOLD + '" class="cg-blink ' + (i % 2 ? "" : "cg-b2") + '"/>').join("") +
      jet +
      '<rect x="230" y="216" width="150" height="20" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="1.5"/><text x="305" y="229.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + GOLD + '">OPA-LOCKA EXECUTIVE</text>',
      sky("cg2", "#7a2a6a", "#ff8a6a"));
  }

  /* 3. Charles Hadley Park, Liberty City: block party under the lights */
  function cgpark() {
    const light = x => '<rect x="' + (x - 2) + '" y="40" width="4" height="120" fill="#8a8f96"/><rect x="' + (x - 14) + '" y="32" width="28" height="12" rx="2" fill="#e8e8e8"/><path d="M' + (x - 14) + ' 44l-40 120h108l-40 -120z" fill="#fff8d0" class="cg-beam"/>';
    const head = (x, y, cls) => '<g class="cg-bounce ' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="9" fill="#120a14"/><rect x="' + (x - 11) + '" y="' + (y + 8) + '" width="22" height="30" rx="8" fill="#120a14"/></g>';
    const speaker = x => '<g><rect x="' + x + '" y="150" width="40" height="62" rx="3" fill="#1a1a1e" stroke="#444" stroke-width="2"/><circle cx="' + (x + 20) + '" cy="168" r="9" fill="#333" class="cg-thump"/><circle cx="' + (x + 20) + '" cy="194" r="13" fill="#333" class="cg-thump"/><circle cx="' + (x + 20) + '" cy="194" r="5" fill="#666"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cg3)"/>' +
      Array.from({ length: 20 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (8 + (i * 29) % 50) + '" r="1.2" fill="#fff" opacity=".7"/>').join("") +
      light(70) + light(330) +
      /* grandstand + field */
      '<rect x="110" y="110" width="180" height="40" fill="#5a6068"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M110 ' + (118 + i * 9) + 'h180" stroke="#7a8088" stroke-width="2"/>').join("") +
      '<rect x="0" y="150" width="400" height="110" fill="#2f7a3a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (20 + i * 72) + ' 150l-16 110" stroke="#fff" stroke-width="2" opacity=".55"/>').join("") +
      palm(20, 152, 70) + palm(386, 152, 62, "cg-s2") +
      /* DJ table */
      '<rect x="150" y="168" width="100" height="34" rx="3" fill="#222"/><rect x="150" y="164" width="100" height="6" fill="' + PINK + '"/><circle cx="176" cy="164" r="9" fill="#111" stroke="' + AQUA + '" stroke-width="2"/><circle cx="224" cy="164" r="9" fill="#111" stroke="' + AQUA + '" stroke-width="2"/>' +
      speaker(100) + speaker(260) +
      head(40, 214) + head(70, 218, "cg-o2") + head(320, 216) + head(350, 214, "cg-o2") + head(380, 220) + head(10, 220, "cg-o2") +
      '<rect x="140" y="62" width="120" height="30" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="200" y="76" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">CHARLES HADLEY</text><text x="200" y="87" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">PARK</text>',
      sky("cg3", "#1a0a2a", "#4a1a4a"));
  }

  /* 4. The Caresha Please set */
  function cgshow() {
    const mic = x => '<rect x="' + (x - 1.5) + '" y="150" width="3" height="60" fill="#888"/><path d="M' + (x - 14) + ' 212h28" stroke="#666" stroke-width="4"/><path d="M' + x + ' 150q0 -10 14 -14" stroke="#888" stroke-width="3" fill="none"/><rect x="' + (x + 10) + '" y="122" width="12" height="20" rx="6" fill="#2a2a2e" stroke="#aaa" stroke-width="1.5"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a0a1e"/>' +
      /* back wall panels */
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50 + 4) + '" y="10" width="42" height="150" rx="4" fill="#3e1030"/>').join("") +
      /* neon sign */
      '<g class="cg-buzz"><text x="200" y="62" text-anchor="middle" font-family="Brush Script MT, Segoe Script, cursive" font-size="38" fill="none" stroke="' + PINK + '" stroke-width="2.5">Caresha Please</text>' +
      '<text x="200" y="62" text-anchor="middle" font-family="Brush Script MT, Segoe Script, cursive" font-size="38" fill="#ffd0e8" opacity=".35">Caresha Please</text></g>' +
      /* ON AIR light */
      '<rect x="160" y="80" width="80" height="22" rx="4" fill="#3a0a0a" stroke="#666" stroke-width="2"/><text x="200" y="96" text-anchor="middle" ' + font + ' font-size="13" fill="#ff3b3b" class="cg-blink">ON AIR</text>' +
      /* floor */
      '<rect x="0" y="160" width="400" height="100" fill="#f2d6e4"/><ellipse cx="200" cy="226" rx="170" ry="26" fill="#e8bcd2"/>' +
      /* pink velvet couch */
      '<rect x="86" y="140" width="228" height="44" rx="16" fill="' + PINK + '"/><rect x="74" y="160" width="34" height="50" rx="12" fill="#e83a8e"/><rect x="292" y="160" width="34" height="50" rx="12" fill="#e83a8e"/>' +
      '<rect x="100" y="176" width="200" height="30" rx="8" fill="#ff6ab4"/><path d="M200 178v26" stroke="#e83a8e" stroke-width="2"/><rect x="108" y="206" width="8" height="10" fill="' + GOLD + '"/><rect x="284" y="206" width="8" height="10" fill="' + GOLD + '"/>' +
      /* coffee table with gold trim */
      '<rect x="150" y="216" width="100" height="10" rx="3" fill="#fff" stroke="' + GOLD + '" stroke-width="2"/><rect x="190" y="204" width="10" height="12" rx="2" fill="' + AQUA + '"/>' +
      mic(120) + mic(262) +
      /* camera on tripod */
      '<g><rect x="346" y="150" width="40" height="26" rx="3" fill="#222"/><circle cx="346" cy="163" r="9" fill="#111" stroke="#555" stroke-width="2"/><path d="M366 176l-12 50M366 176l12 50M366 176v50" stroke="#555" stroke-width="3"/><circle cx="380" cy="156" r="2.5" fill="#ff3b3b" class="cg-blink"/></g>',
      "");
  }

  /* 5. Sharazad Blvd and Ali Baba Ave, Opa-locka */
  function cgcorner() {
    const drip = (x, y, cls) => '<rect x="' + x + '" y="' + y + '" width="4" height="16" rx="2" fill="' + PINK + '" class="cg-drip ' + (cls || "") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#cg5)"/>' +
      /* the old City Hall up the block: pink walls, white onion domes, a minaret */
      '<g><rect x="250" y="88" width="140" height="62" fill="#f5a8c4"/>' +
      Array.from({ length: 4 }, (_, i) => '<path d="M' + (262 + i * 32) + ' 150v-26q0 -10 10 -14q10 4 10 14v26z" fill="#6a2a4a"/>').join("") +
      dome(270, 76, 12, "#fff") + dome(320, 64, 20, "#fff") + dome(370, 76, 12, "#fff") +
      '<rect x="236" y="36" width="12" height="114" fill="#f5a8c4"/><path d="M232 36h20l-10 -22z" fill="#fff"/><rect x="240" y="60" width="4" height="10" fill="#6a2a4a"/></g>' +
      palm(218, 152, 70) + palm(392, 152, 58, "cg-s2") +
      '<rect x="0" y="148" width="400" height="6" fill="#c9bfae"/>' +
      /* the wall */
      '<rect x="0" y="112" width="230" height="118" fill="#f1e4cf"/>' +
      Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (120 + i * 11) + 'h230" stroke="#e2d2b8" stroke-width="1"/>').join("") +
      tag("CITY GIRLS", 10, 176, 34, PINK, -5) + drip(30, 182) + drip(96, 178, "cg-d2") + drip(160, 172, "cg-d3") +
      tag("PERIOD", 20, 216, 20, AQUA, -3) + tag("305", 140, 214, 22, GOLD, 4) + tag("JT + YUNG MIAMI", 14, 140, 14, "#fff", -4) +
      '<rect x="0" y="230" width="400" height="30" fill="#55555c"/><path d="M0 246h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="cg-car"><rect x="0" y="232" width="60" height="14" rx="4" fill="' + PINK + '"/><rect x="12" y="225" width="32" height="9" rx="3" fill="#2a3442"/><circle cx="14" cy="246" r="5" fill="#111"/><circle cx="46" cy="246" r="5" fill="#111"/></g>' +
      '<rect x="318" y="150" width="5" height="80" fill="#6e737b"/>' + sign(262, 160, 120, "SHARAZAD BLVD") + sign(272, 186, 100, "ALI BABA AVE"),
      sky("cg5", "#ff8ac0", "#ffe0b0"));
  }

  window.SCENES = { cgstop, cgjet, cgpark, cgshow, cgcorner };
})();
