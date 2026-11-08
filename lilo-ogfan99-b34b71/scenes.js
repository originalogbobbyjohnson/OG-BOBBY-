/* lilo scenes (Regions tab: Houston + Texas; Southwest Houston, around S Braeswood Blvd and Fondren Rd: "I'm Lil' O, 8900 Braeswood"). CSS classes and ids prefixed lo- (the page's own anim-train is kept).
   1 METRO 68 Braeswood bus pulling into the S Braeswood Blvd @ Fondren Rd stop: the wide boulevard, live oaks on the esplanade, low brick apartments, the METRO stop flag with the 68.
   2 8900 Braeswood (his own address line in "Playas Get Chose"): a two-story brick apartment block at night, the address sign drawn with straight-stem 9s, a candy-gold car with its trunk popping.
   3 The Richmond Ave club strip in Southwest Houston ("I'm at the bar taking sips of long island ice tea" / "Back, back ... gimme 50 feet"): neon club fronts, a velvet rope, a taped 50 FT line on the sidewalk, lights flickering.
   4 Southwest Houston's Nigerian shops (born in Lagos, raised in Southwest Houston; "Food On Tha Table"): a strip of storefronts with green-white-green awnings, a big pot steaming, the flag waving.
   5 S Braeswood Blvd and Fondren Rd: green signs, LIL O tagged on the wall, the Southwest Freeway's overpass and its big green sign far behind, cars streaming. No 9 drawn except the hand-drawn straight-stem ones. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes loflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.lo-flk{animation:loflick 2.2s infinite}.lo-flk2{animation-delay:.8s}.lo-flk3{animation-delay:1.5s}' +
    '@keyframes lotrunk{0%,30%{transform:rotate(0)}55%,85%{transform:rotate(-34deg)}100%{transform:rotate(0)}}.lo-trunk{transform-box:fill-box;transform-origin:0% 100%;animation:lotrunk 4s ease-in-out infinite}' +
    '@keyframes losteam{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(-30px);opacity:0}}.lo-stm{animation:losteam 2s ease-out infinite}.lo-stm2{animation-delay:.7s}.lo-stm3{animation-delay:1.4s}' +
    '@keyframes loflag{0%,100%{transform:skewY(0)}50%{transform:skewY(3deg)}}.lo-flag{transform-box:fill-box;transform-origin:0 50%;animation:loflag 1.8s ease-in-out infinite}' +
    '@keyframes locars{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.lo-car{animation:locars 6s linear infinite}.lo-car2{animation-delay:-3s}' +
    '@keyframes lospray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lo-sp{animation:lospray 1.4s ease-out infinite}.lo-sp2{animation-delay:.45s}' +
    '@keyframes loleaf{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.lo-leaf{transform-box:fill-box;transform-origin:50% 100%;animation:loleaf 3s ease-in-out infinite}' +
    '@keyframes lobeat{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}.lo-beat{transform-box:fill-box;transform-origin:50% 50%;animation:lobeat .55s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 79) % 400) + '" cy="' + (6 + (i * 43) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const METRO = "#1f4e79", GOLD = "#ffc93c", RED = "#ff5a36", CYAN = "#4fd1ff";
  /* hand-drawn digits so every 9 has a straight stem (circle on top, straight line down) */
  const digit = (d, x, y, s, c) => {
    const w = 'stroke="' + c + '" stroke-width="' + (2.2 * s) + '" fill="none" stroke-linecap="round"';
    if (d === "9") return '<g ' + w + '><circle cx="' + (x + 4 * s) + '" cy="' + (y + 4 * s) + '" r="' + (3.6 * s) + '"/><path d="M' + (x + 7.6 * s) + ' ' + (y + 4 * s) + 'V' + (y + 14 * s) + '"/></g>';
    if (d === "8") return '<g ' + w + '><circle cx="' + (x + 4 * s) + '" cy="' + (y + 3.4 * s) + '" r="' + (3 * s) + '"/><circle cx="' + (x + 4 * s) + '" cy="' + (y + 10.2 * s) + '" r="' + (3.8 * s) + '"/></g>';
    return '<ellipse cx="' + (x + 4 * s) + '" cy="' + (y + 7 * s) + '" rx="' + (3.8 * s) + '" ry="' + (7 * s) + '" ' + w + '/>';
  };
  const digits = (str, x, y, s, c) => str.split("").map((d, i) => digit(d, x + i * 10.5 * s, y, s, c)).join("");
  const oak = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-5" y="0" width="10" height="40" fill="#5b4632"/><path d="M-5 12l-18 -10M5 10l18 -12" stroke="#5b4632" stroke-width="5"/><g class="lo-leaf"><ellipse cx="0" cy="-8" rx="42" ry="20" fill="#3f6b35"/><ellipse cx="-22" cy="-16" rx="22" ry="13" fill="#4d7d40"/><ellipse cx="22" cy="-14" rx="20" ry="12" fill="#4d7d40"/></g></g>';
  /* a person from behind: round head, no face */
  const person = (x, y, shirt, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')"><rect x="-7" y="-2" width="14" height="22" rx="4" fill="' + shirt + '"/><circle cx="0" cy="-9" r="7" fill="#5a3d2b"/><rect x="-6" y="20" width="5" height="12" fill="#22262e"/><rect x="1" y="20" width="5" height="12" fill="#22262e"/></g>';

  /* 1. METRO 68 Braeswood at S Braeswood Blvd @ Fondren Rd */
  function lostation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (62 + i * 36) + '" y="148" width="30" height="22" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="28" y="138" width="318" height="70" rx="10" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="34" y="148" width="22" height="48" rx="2" fill="#1d2833"/><rect x="28" y="178" width="318" height="8" fill="' + METRO + '"/><rect x="28" y="188" width="318" height="3" fill="#e31837"/>' +
      '<rect x="32" y="140" width="128" height="10" rx="2" fill="#111"/><text x="96" y="148" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">68 BRAESWOOD</text>' +
      '<circle cx="80" cy="210" r="12" fill="#222"/><circle cx="80" cy="210" r="5" fill="#9aa1a8"/><circle cx="294" cy="210" r="12" fill="#222"/><circle cx="294" cy="210" r="5" fill="#9aa1a8"/>' +
      '<circle cx="32" cy="198" r="3.5" fill="#fff6c2"/></g>';
    const apt = (x, body) => '<g transform="translate(' + x + ' 0)"><rect x="0" y="74" width="120" height="58" fill="' + body + '"/><rect x="0" y="70" width="120" height="6" fill="#4a3c34"/>' +
      [0, 1, 2, 3].map(i => '<rect x="' + (10 + i * 28) + '" y="84" width="16" height="13" fill="#f3d79a" opacity=".85"/><rect x="' + (10 + i * 28) + '" y="108" width="16" height="13" fill="#2c3a48"/>').join("") + '</g>';
    return svg('<rect width="400" height="260" fill="url(#los1)"/>' + stars(9) + '<circle cx="320" cy="38" r="15" fill="#ffe1a8" opacity=".9"/>' +
      apt(-10, "#9c5a44") + apt(130, "#b8734f") + apt(270, "#8f4f3c") +
      oak(118, 128, 0.85) + oak(268, 128, 0.75) +
      '<rect x="0" y="128" width="400" height="10" fill="#cfc9bd"/><rect x="0" y="138" width="400" height="122" fill="#55565c"/><path d="M0 236h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/>' +
      bus +
      '<rect x="374" y="98" width="5" height="118" fill="#6b7178"/><rect x="350" y="72" width="48" height="50" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="374" y="86" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">METRO</text><rect x="360" y="92" width="28" height="22" rx="3" fill="#fff"/><text x="374" y="108" text-anchor="middle" ' + font + ' font-size="13" fill="' + METRO + '">68</text>' +
      sign(6, 8, 150, "S BRAESWOOD BLVD") + sign(6, 34, 104, "FONDREN RD") + '<rect x="56" y="56" width="4" height="12" fill="#6b7178"/>',
      sky("los1", "#1d2a50", "#e8946a"));
  }

  /* 2. 8900 Braeswood: the apartment block at night */
  function lobraes() {
    const row = (y, lit) => Array.from({ length: 8 }, (_, i) => '<rect x="' + (40 + i * 42) + '" y="' + y + '" width="24" height="18" rx="2" fill="' + (lit.includes(i) ? "#ffd98a" : "#24303c") + '"' + (i === lit[0] ? ' class="lo-flk"' : "") + '/>').join("");
    const car = '<g transform="translate(206 186)"><rect x="0" y="10" width="130" height="24" rx="7" fill="' + GOLD + '"/><path d="M24 10l14 -14h50l16 14z" fill="' + GOLD + '"/><path d="M42 -2h40l10 10h-56z" fill="#cfe9ff" opacity=".7"/>' +
      '<g class="lo-trunk"><path d="M104 10h26v6h-26z" fill="#e0a920"/></g><rect x="108" y="16" width="20" height="8" fill="' + CYAN + '" class="lo-flk2"/>' +
      '<circle cx="28" cy="36" r="10" fill="#cfd5db" stroke="#222" stroke-width="3"/><circle cx="102" cy="36" r="10" fill="#cfd5db" stroke="#222" stroke-width="3"/>' +
      '<path d="M28 36h-20M102 36h20" stroke="#eef2f5" stroke-width="3" stroke-linecap="round"/></g>';
    return svg('<rect width="400" height="260" fill="url(#los2)"/>' + stars(16) + '<circle cx="60" cy="34" r="12" fill="#f6f1d8"/>' +
      '<rect x="24" y="76" width="352" height="112" fill="#8a4a36"/><rect x="18" y="68" width="364" height="10" fill="#3b2a22"/>' + row(88, [1, 4, 6]) + row(132, [0, 3, 5, 7]) +
      '<path d="M24 120h352" stroke="#e6ddd0" stroke-width="4"/><path d="M24 124h352" stroke="#5a3a2c" stroke-width="2"/>' +
      '<rect x="180" y="150" width="40" height="38" fill="#1b232c"/><rect x="176" y="146" width="48" height="6" fill="#d8cfc0"/>' +
      '<rect x="0" y="188" width="400" height="72" fill="#3d3f45"/><path d="M0 214h400" stroke="#fff" stroke-width="2" stroke-dasharray="4 26" opacity=".5"/>' +
      '<rect x="40" y="158" width="104" height="34" rx="3" fill="#f2ead8" stroke="#3b2a22" stroke-width="2"/>' + digits("8900", 50, 162, 1.4, "#3b2a22") +
      '<text x="92" y="190" text-anchor="middle" ' + font + ' font-size="7" fill="#3b2a22">S BRAESWOOD</text><rect x="88" y="192" width="8" height="18" fill="#6b5a4a"/>' +
      car + oak(372, 186, 0.6),
      sky("los2", "#0c1430", "#3a2c56"));
  }

  /* 3. The Richmond Ave club strip: neon fronts, the velvet rope, the 50 FT line */
  function lostrip() {
    const front = (x, w, c, word, cls) => '<rect x="' + x + '" y="70" width="' + w + '" height="118" fill="#1a1622"/><rect x="' + (x + 10) + '" y="84" width="' + (w - 20) + '" height="26" rx="4" fill="none" stroke="' + c + '" stroke-width="3" class="' + cls + '"/>' +
      '<text x="' + (x + w / 2) + '" y="103" text-anchor="middle" ' + font + ' font-size="13" fill="' + c + '" class="' + cls + '">' + word + '</text><rect x="' + (x + w / 2 - 16) + '" y="136" width="32" height="52" fill="#0d0b12" stroke="' + c + '" stroke-width="1.5"/>';
    const post = x => '<rect x="' + x + '" y="186" width="5" height="26" fill="#c9a24a"/><circle cx="' + (x + 2.5) + '" cy="185" r="4" fill="#e8c46a"/>';
    return svg('<rect width="400" height="260" fill="url(#los3)"/>' + stars(12) +
      front(10, 120, "#ff4fa3", "LOUNGE", "lo-flk") + front(140, 120, CYAN, "CLUB", "lo-flk2") + front(270, 120, GOLD, "BAR", "lo-flk3") +
      '<g class="lo-beat"><rect x="304" y="120" width="52" height="12" rx="3" fill="#2a1f10"/><text x="330" y="129" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '">ICED TEA</text></g>' +
      '<rect x="0" y="188" width="400" height="72" fill="#2c2b31"/><rect x="0" y="186" width="400" height="5" fill="#8a8790"/>' +
      post(150) + post(206) + '<path d="M154 192q26 12 54 0" stroke="#b3122e" stroke-width="4" fill="none"/>' +
      '<rect x="20" y="226" width="360" height="4" fill="' + GOLD + '"/><rect x="186" y="232" width="44" height="14" rx="2" fill="' + GOLD + '"/><text x="208" y="243" text-anchor="middle" ' + font + ' font-size="10" fill="#111">50 FT</text>' +
      person(70, 196, "#3a5aa8", 0.9) + person(96, 200, "#8a2f4a", 0.85) + person(330, 198, "#2f6b4a", 0.9) +
      '<rect x="0" y="0" width="400" height="22" fill="#0e0d14"/><text x="200" y="15" text-anchor="middle" ' + font + ' font-size="10" fill="#cfd5db" letter-spacing="3">RICHMOND AVE</text>',
      sky("los3", "#120c24", "#3b1d3e"));
  }

  /* 4. Southwest Houston's Nigerian shops: green-white-green awnings, the pot on the table */
  function lofood() {
    const shop = (x, word) => '<rect x="' + x + '" y="86" width="120" height="102" fill="#e9e0cf"/>' +
      '<path d="M' + x + ' 86h40v18h-40z" fill="#008751"/><path d="M' + (x + 40) + ' 86h40v18h-40z" fill="#fff"/><path d="M' + (x + 80) + ' 86h40v18h-40z" fill="#008751"/>' +
      '<rect x="' + (x + 8) + '" y="66" width="104" height="18" rx="2" fill="#1c3d2c"/><text x="' + (x + 60) + '" y="79" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">' + word + '</text>' +
      '<rect x="' + (x + 12) + '" y="114" width="56" height="44" fill="#9fc8d8" opacity=".8"/><rect x="' + (x + 78) + '" y="118" width="30" height="70" fill="#5a4636"/>';
    const flag = '<g transform="translate(330 30)"><rect x="0" y="0" width="3" height="56" fill="#ccc"/><g class="lo-flag"><rect x="3" y="0" width="16" height="26" fill="#008751"/><rect x="19" y="0" width="16" height="26" fill="#fff"/><rect x="35" y="0" width="16" height="26" fill="#008751"/></g></g>';
    return svg('<rect width="400" height="260" fill="url(#los4)"/>' + '<circle cx="70" cy="40" r="20" fill="#ffd27a"/>' + flag +
      shop(10, "AFRICAN MARKET") + shop(140, "KITCHEN") + shop(270, "FABRICS") +
      '<rect x="0" y="188" width="400" height="72" fill="#b8b2a4"/>' +
      '<rect x="120" y="200" width="160" height="10" fill="#7a4a2a"/><rect x="132" y="210" width="8" height="34" fill="#5a3a20"/><rect x="260" y="210" width="8" height="34" fill="#5a3a20"/>' +
      '<path d="M156 200q0 -26 44 -26q44 0 44 26z" fill="#3a3a3a"/><ellipse cx="200" cy="176" rx="44" ry="8" fill="#e85a20"/><rect x="150" y="186" width="100" height="6" fill="#2a2a2a"/>' +
      '<g fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"><path class="lo-stm" d="M184 166q-6 -10 0 -20"/><path class="lo-stm lo-stm2" d="M200 164q6 -10 0 -20"/><path class="lo-stm lo-stm3" d="M216 166q-6 -10 0 -20"/></g>' +
      '<ellipse cx="96" cy="204" rx="20" ry="6" fill="#f6efe2" stroke="#9a8e7a"/><ellipse cx="96" cy="201" rx="12" ry="4" fill="#f2b23a"/>' +
      '<ellipse cx="304" cy="204" rx="20" ry="6" fill="#f6efe2" stroke="#9a8e7a"/><ellipse cx="304" cy="201" rx="12" ry="4" fill="#c2421c"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="#2a2a2a" letter-spacing="2">FOOD ON THA TABLE</text>',
      sky("los4", "#7fc6ff", "#ffe2b0"));
  }

  /* 5. S Braeswood Blvd and Fondren Rd, the Southwest Freeway behind */
  function locorner() {
    const car = (c, cls) => '<g class="' + cls + '"><rect x="0" y="0" width="54" height="14" rx="4" fill="' + c + '"/><rect x="12" y="-8" width="28" height="9" rx="3" fill="' + c + '"/><circle cx="12" cy="15" r="4" fill="#222"/><circle cx="42" cy="15" r="4" fill="#222"/></g>';
    return svg('<rect width="400" height="260" fill="url(#los5)"/>' + stars(10) +
      '<rect x="0" y="54" width="400" height="16" fill="#8d9097"/><rect x="0" y="70" width="400" height="5" fill="#5a5d63"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + x + '" y="75" width="12" height="40" fill="#7a7d84"/>').join("") +
      '<g transform="translate(0 40)">' + car("#ffc93c", "lo-car") + car("#4fd1ff", "lo-car lo-car2") + '</g>' +
      '<rect x="236" y="14" width="126" height="34" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="299" y="30" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">SOUTHWEST FWY</text><text x="299" y="43" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">DOWNTOWN</text>' +
      '<rect x="252" y="48" width="4" height="8" fill="#7a7d84"/><rect x="342" y="48" width="4" height="8" fill="#7a7d84"/>' +
      '<rect x="0" y="112" width="400" height="96" fill="#b07a5a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (124 + i * 11) + 'h400" stroke="#8a5a40" stroke-width="1"/>').join("") +
      tag("LIL O", 150, 178, 46, GOLD, -7) + tag("SOUTHWEST", 92, 200, 18, CYAN, -4) + tag("FAT RAT", 286, 150, 20, RED, 5) +
      '<g fill="' + GOLD + '"><circle class="lo-sp" cx="262" cy="172" r="2.5"/><circle class="lo-sp lo-sp2" cx="270" cy="168" r="2"/></g>' +
      '<rect x="0" y="208" width="400" height="52" fill="#4b4c52"/><path d="M0 232h400" stroke="#e8e8e8" stroke-width="3" stroke-dasharray="20 14"/>' +
      '<rect x="56" y="62" width="5" height="150" fill="#6b7178"/>' + sign(4, 66, 150, "S BRAESWOOD BLVD") + sign(10, 92, 104, "FONDREN RD"),
      sky("los5", "#141d3e", "#c96a5a"));
  }

  window.SCENES = { lostation: lostation, lobraes: lobraes, lostrip: lostrip, lofood: lofood, locorner: locorner };
})();
