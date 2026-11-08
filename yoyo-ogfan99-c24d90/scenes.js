/* yoyo scenes (Regions tab: Los Angeles + SoCal; South Central LA). CSS classes prefixed yyo- (the page's own anim-train is kept).
   1 Manchester station, Metro J Line, down in the median of the Harbor Freeway (110) under the Manchester Ave bridge, at dusk.
   2 The TV dance-show stage in Hollywood where she rocked "You Can't Play with My Yo-Yo" in '91: light-up floor, spotlights, the dance line.
   3 The I.B.W.C. (Intelligent Black Women's Coalition) rally: banner, podium mic, signs "UPLIFT THE WOMAN" ("upliftin' the woman").
   4 The Boyz n the Hood block (she played Shalika, 1991): Crenshaw-area bungalows, palms, the film camera rolling, the clapboard snapping.
   5 W Manchester Ave and S Figueroa St in South Central: green signs, YO-YO tagged, the downtown skyline and the Wilshire Grand spire behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes yyoflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.9}}.yyo-flk{animation:yyoflick 2.6s infinite}' +
    '@keyframes yyoglow{0%,100%{opacity:.35}50%{opacity:1}}.yyo-glow{animation:yyoglow 1.4s ease-in-out infinite}.yyo-g2{animation-delay:-.35s}.yyo-g3{animation-delay:-.7s}.yyo-g4{animation-delay:-1.05s}' +
    '@keyframes yyocar{from{transform:translateX(-100px)}to{transform:translateX(500px)}}.yyo-car{animation:yyocar 5s linear infinite}.yyo-car2{animation-delay:-2.5s}' +
    '@keyframes yyocarL{from{transform:translateX(500px)}to{transform:translateX(-100px)}}.yyo-carL{animation:yyocarL 6s linear infinite}.yyo-carL2{animation-delay:-3s}' +
    '@keyframes yyosway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.yyo-sway{transform-box:fill-box;transform-origin:50% 100%;animation:yyosway 3.4s ease-in-out infinite}' +
    '@keyframes yyobob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.yyo-bob{animation:yyobob .6s ease-in-out infinite}.yyo-b2{animation-delay:-.15s}.yyo-b3{animation-delay:-.3s}.yyo-b4{animation-delay:-.45s}' +
    '@keyframes yyobeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.yyo-beam{transform-box:fill-box;transform-origin:50% 0;animation:yyobeam 3s ease-in-out infinite}.yyo-beam2{animation-delay:-1.5s}' +
    '@keyframes yyowave{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.yyo-wave{transform-box:fill-box;transform-origin:50% 100%;animation:yyowave 1.2s ease-in-out infinite}.yyo-w2{animation-delay:-.6s}' +
    '@keyframes yyoclap{0%,80%,100%{transform:rotate(0)}88%{transform:rotate(-24deg)}}.yyo-clap{transform-box:fill-box;transform-origin:0 100%;animation:yyoclap 2.2s ease-in-out infinite}' +
    '@keyframes yyoyo{0%,100%{transform:translateY(0)}50%{transform:translateY(40px)}}.yyo-yo{animation:yyoyo 1.6s ease-in-out infinite}' +
    '@keyframes yyostr{0%,100%{transform:scaleY(1)}50%{transform:scaleY(2.15)}}.yyo-str{transform-box:fill-box;transform-origin:50% 0;animation:yyostr 1.6s ease-in-out infinite}' +
    '@keyframes yyospray{0%,100%{transform:scaleY(.8)}50%{transform:scaleY(1.1)}}.yyo-spray{transform-box:fill-box;transform-origin:50% 100%;animation:yyospray 1s ease-in-out infinite}' +
    '@keyframes yyotw{0%,100%{opacity:.2}50%{opacity:1}}.yyo-tw{animation:yyotw 1.6s ease-in-out infinite}.yyo-tw2{animation-delay:-.8s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const bullet = (x, y, letter, color, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + (r || 11) + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">' + letter + '</text>';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 12) + '" fill="#fff">' + txt + '</text>';
  const palm = (x, y, h, c) => '<g class="yyo-sway"><path d="M' + x + ' ' + y + 'q4 -' + (h / 2) + ' 0 -' + h + '" stroke="#3a2c20" stroke-width="4" fill="none"/>' +
    [-40, -15, 15, 40, 66, -66].map(a => '<path d="M' + x + ' ' + (y - h) + 'q' + (a / 2) + ' -10 ' + a + ' ' + (Math.abs(a) / 3) + '" stroke="' + (c || "#2f5a35") + '" stroke-width="4" fill="none"/>').join("") + '</g>';
  const car = (x, y, body, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ')"><rect x="0" y="8" width="70" height="16" rx="5" fill="' + body + '"/><path d="M14 8l8 -9h26l10 9z" fill="' + body + '"/><path d="M20 7l5 -6h9v6zM37 7v-6h9l7 6z" fill="#bfe3f2"/>' +
    '<circle cx="16" cy="25" r="6" fill="#111"/><circle cx="16" cy="25" r="3" fill="#cfcfcf"/><circle cx="54" cy="25" r="6" fill="#111"/><circle cx="54" cy="25" r="3" fill="#cfcfcf"/></g></g>';
  /* a person silhouette, no face: head circle + body */
  const fig = (x, y, c, cls, s) => { s = s || 1; return '<g class="' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><circle cx="0" cy="-34" r="7" fill="' + c + '"/><path d="M-9 -26h18l4 22h-8l-1 22h-8l-1 -22h-8z" fill="' + c + '"/></g></g>'; };
  const PINK = "#ff4f9a", GOLD = "#ffd23f", TEAL = "#36c9a7", JLINE = "#a3a9b0";
  /* downtown skyline with the Wilshire Grand's sail top and spire */
  const skyline = (y, c) => '<g fill="' + c + '">' +
    '<rect x="150" y="' + (y - 44) + '" width="22" height="44"/><rect x="176" y="' + (y - 62) + '" width="18" height="62"/>' +
    '<path d="M198 ' + y + 'v-86l14 -10l14 10v86z"/><rect x="211" y="' + (y - 112) + '" width="2" height="18"/>' +
    '<rect x="230" y="' + (y - 70) + '" width="20" height="70"/><path d="M254 ' + y + 'v-78q11 -14 22 0v78z"/><rect x="280" y="' + (y - 50) + '" width="24" height="50"/>' +
    '<rect x="120" y="' + (y - 30) + '" width="26" height="30"/><rect x="308" y="' + (y - 36) + '" width="20" height="36"/></g>';

  /* 1. Manchester station, Metro J Line, in the 110 median */
  function yystation() {
    let win = ""; for (let x = 46; x < 300; x += 32) win += '<rect x="' + x + '" y="130" width="24" height="20" rx="3" fill="#24303d"/>';
    const bus = '<g class="anim-train"><rect x="24" y="120" width="296" height="56" rx="10" fill="#e3e6ea" stroke="#7d848c" stroke-width="2"/>' + win +
      '<rect x="24" y="156" width="296" height="6" fill="' + JLINE + '"/><path d="M172 120v56" stroke="#3a3e46" stroke-width="5"/>' +
      '<rect x="302" y="126" width="14" height="28" rx="3" fill="#24303d"/><circle cx="312" cy="168" r="4" fill="#fff6c2"/>' + bullet(110, 141, "J", JLINE, 10) +
      '<circle cx="64" cy="178" r="10" fill="#111"/><circle cx="64" cy="178" r="4" fill="#888"/><circle cx="214" cy="178" r="10" fill="#111"/><circle cx="214" cy="178" r="4" fill="#888"/><circle cx="282" cy="178" r="10" fill="#111"/><circle cx="282" cy="178" r="4" fill="#888"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yys1)"/><circle cx="330" cy="40" r="16" fill="#ffd9a0" opacity=".85"/>' +
      skyline(70, "#5b4a78") +
      /* Manchester Ave bridge across the freeway */
      '<rect x="0" y="70" width="400" height="20" fill="#bdb4a4"/><rect x="0" y="66" width="400" height="5" fill="#857e72"/>' +
      car(10, 44, PINK, "yyo-car") + car(10, 44, "#f2efe6", "yyo-car yyo-car2") +
      '<rect x="0" y="90" width="400" height="4" fill="#968f80"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 7) + '" y="94" width="14" height="22" fill="#a9a190"/>').join("") +
      /* station canopy on poles */
      '<path d="M0 104h400l-8 10H8z" fill="#6f7680"/>' + [40, 140, 260, 360].map(x => '<rect x="' + (x - 2) + '" y="112" width="4" height="72" fill="#545b64"/>').join("") +
      '<rect x="0" y="176" width="400" height="8" fill="#6d6d6d"/>' + bus +
      '<rect x="0" y="184" width="400" height="7" fill="#eab308"/><rect x="0" y="191" width="400" height="24" fill="#b6afa3"/>' +
      /* station sign */
      '<rect x="120" y="194" width="170" height="18" rx="2" fill="#111"/><text x="196" y="207.5" text-anchor="middle" ' + font + ' font-size="12.5" fill="#fff">Manchester</text>' +
      '<circle cx="272" cy="203" r="7.5" fill="' + JLINE + '"/><text x="272" y="207" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">J</text>' +
      /* freeway lanes below */
      '<rect x="0" y="215" width="400" height="45" fill="#45474d"/><path d="M0 237h400" stroke="#f4f4f4" stroke-width="2" stroke-dasharray="18 14"/>' +
      car(0, 218, GOLD, "yyo-carL") + car(0, 218, "#3b6fd1", "yyo-carL yyo-carL2") +
      '<path d="M18 196h30v10q0 14 -15 20q-15 -6 -15 -20z" fill="#1f4fa3" stroke="#fff" stroke-width="2"/><rect x="18" y="196" width="30" height="7" fill="#c8102e"/><text x="33" y="218" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">110</text>',
      sky("yys1", "#3b2a5a", "#f19a6b"));
  }

  /* 2. The TV dance-show stage in Hollywood */
  function yystage() {
    let floor = ""; const cols = [PINK, GOLD, TEAL, "#7c5cff"];
    for (let r = 0; r < 3; r++) for (let c = 0; c < 10; c++) floor += '<rect class="yyo-glow yyo-g' + (1 + ((r + c) % 4)) + '" x="' + (c * 40 + 2) + '" y="' + (196 + r * 22) + '" width="36" height="18" rx="2" fill="' + cols[(r + c) % 4] + '"/>';
    const line = [40, 80, 320, 360].map((x, i) => fig(x, 192, ["#2a1838", "#1e2a3a", "#2a1838", "#1e2a3a"][i], "yyo-bob yyo-b" + (1 + i), 1.1)).join("");
    return svg(
      '<rect width="400" height="260" fill="#120a1c"/>' +
      /* backdrop with light bulbs */
      '<rect x="20" y="20" width="360" height="150" rx="8" fill="#2a1240" stroke="' + GOLD + '" stroke-width="3"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle class="yyo-glow yyo-g' + (1 + i % 4) + '" cx="' + (32 + i * 20) + '" cy="28" r="3.5" fill="#ffe8a3"/>').join("") +
      '<text x="200" y="76" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="34" fill="' + PINK + '" stroke="#000" stroke-width="2" paint-order="stroke">YO-YO</text>' +
      '<text x="200" y="100" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '" letter-spacing="3">LIVE ON THE DANCE SHOW</text>' +
      /* spotlight beams */
      '<g opacity=".28"><path class="yyo-beam" d="M120 0l-30 190h60z" fill="#fff6c8"/><path class="yyo-beam yyo-beam2" d="M280 0l-30 190h60z" fill="#ffd0ea"/></g>' +
      /* mic stand centre stage */
      '<path d="M200 120v70" stroke="#c9c9d1" stroke-width="3"/><path d="M188 192h24" stroke="#c9c9d1" stroke-width="4"/><rect x="194" y="108" width="12" height="16" rx="6" fill="#333" stroke="#ddd" stroke-width="1.5"/>' +
      floor + line,
      "");
  }

  /* 3. The I.B.W.C. rally */
  function yyibwc() {
    const crowd = Array.from({ length: 9 }, (_, i) => fig(30 + i * 44, 246, ["#1c1424", "#24182e", "#18202a"][i % 3], "", 1.1)).join("");
    const placard = (x, y, t, c, cls) => '<g class="yyo-wave ' + cls + '"><path d="M' + x + ' ' + (y + 30) + 'v34" stroke="#6b4a2a" stroke-width="3"/><rect x="' + (x - 34) + '" y="' + y + '" width="68" height="32" rx="2" fill="' + c + '" stroke="#111" stroke-width="1.5"/>' +
      '<text x="' + x + '" y="' + (y + 13) + '" text-anchor="middle" ' + font + ' font-size="8.5" fill="#111">' + t[0] + '</text><text x="' + x + '" y="' + (y + 25) + '" text-anchor="middle" ' + font + ' font-size="8.5" fill="#111">' + t[1] + '</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#yys3)"/>' +
      palm(30, 120, 60) + palm(372, 120, 70) +
      /* stage + banner */
      '<rect x="60" y="34" width="280" height="56" rx="3" fill="#111" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<text x="200" y="64" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="28" fill="' + GOLD + '">I.B.W.C.</text>' +
      '<text x="200" y="82" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff" letter-spacing="1">INTELLIGENT BLACK WOMEN\'S COALITION</text>' +
      '<rect x="40" y="130" width="320" height="16" fill="#5a3b2a"/><rect x="40" y="146" width="320" height="40" fill="#3f2a1e"/>' +
      /* podium with mic */
      '<path d="M180 102h40l-4 30h-32z" fill="' + PINK + '" stroke="#111" stroke-width="1.5"/><path d="M200 102v-6" stroke="#ccc" stroke-width="2"/><rect x="196" y="94" width="8" height="8" rx="4" fill="#333"/>' +
      placard(90, 150, ["UPLIFT", "THE WOMAN"], GOLD, "") + placard(310, 150, ["KNOWLEDGE", "IS THE KEY"], TEAL, "yyo-w2") + placard(200, 160, ["STAND ON OUR", "OWN TWO FEET"], "#fff", "yyo-w2") +
      crowd,
      sky("yys3", "#7fc4ef", "#ffe1b8"));
  }

  /* 4. The Boyz n the Hood block, 1991 */
  function yyboyz() {
    const house = (x, c, roof) => '<rect x="' + x + '" y="120" width="96" height="62" fill="' + c + '"/><path d="M' + (x - 8) + ' 122l56 -30l56 30z" fill="' + roof + '"/>' +
      '<rect x="' + (x + 12) + '" y="136" width="22" height="18" fill="#2b3a4a" stroke="#fff" stroke-width="2"/><rect x="' + (x + 60) + '" y="140" width="20" height="42" fill="#7a4a2c"/>' +
      '<rect x="' + (x - 4) + '" y="182" width="104" height="5" fill="#e9e3d6"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#yys4)"/>' +
      palm(22, 120, 72) + palm(200, 116, 80) + palm(380, 120, 66) +
      house(30, "#efd9b4", "#b5533c") + house(150, "#cfe3d6", "#6b4f3a") + house(270, "#f2c6c6", "#8a3b3b") +
      /* lawn, sidewalk, street */
      '<rect x="0" y="187" width="400" height="12" fill="#6fae4f"/><rect x="0" y="199" width="400" height="10" fill="#d8d2c4"/><rect x="0" y="209" width="400" height="51" fill="#4b4d53"/>' +
      car(0, 214, "#7b1e2a", "yyo-car") +
      /* film camera on a tripod, red light blinking */
      '<g transform="translate(300 150)"><path d="M10 40l-14 50M20 40v50M30 40l14 50" stroke="#222" stroke-width="3"/><rect x="0" y="16" width="44" height="26" rx="3" fill="#222"/><circle cx="12" cy="10" r="10" fill="#333" stroke="#111" stroke-width="2"/><circle cx="34" cy="10" r="10" fill="#333" stroke="#111" stroke-width="2"/>' +
      '<path d="M44 22l14 -6v26l-14 -6z" fill="#333"/><circle class="yyo-glow" cx="6" cy="22" r="3" fill="#ff3b3b"/></g>' +
      /* clapboard */
      '<g transform="translate(40 198)"><rect x="0" y="10" width="66" height="40" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<g class="yyo-clap"><rect x="0" y="0" width="66" height="10" fill="#111"/><path d="M6 0l8 10M22 0l8 10M38 0l8 10M54 0l8 10" stroke="#fff" stroke-width="4"/></g>' +
      '<text x="33" y="28" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">ON SET</text><text x="33" y="42" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">SHALIKA</text></g>',
      sky("yys4", "#8ccbf0", "#fbe7c4"));
  }

  /* 5. W Manchester Ave and S Figueroa St */
  function yycorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#yys5)"/>' + skyline(132, "#8b7fa8") +
      palm(30, 140, 70) + palm(350, 136, 64) +
      /* stucco wall */
      '<rect x="0" y="132" width="400" height="80" fill="#e6c9a3"/><rect x="0" y="132" width="400" height="6" fill="#c9a77d"/>' +
      tag("YO-YO", 92, 188, 46, PINK, -5) + tag("I.B.W.C.", 250, 176, 24, GOLD, -3) + tag("STOMPIN'", 262, 202, 18, TEAL, -4) +
      /* spray can */
      '<g class="yyo-spray"><rect x="214" y="186" width="10" height="22" rx="3" fill="' + TEAL + '" stroke="#111"/><rect x="216" y="182" width="6" height="5" fill="#ccc"/></g>' +
      /* sidewalk + street */
      '<rect x="0" y="212" width="400" height="12" fill="#cfc8b8"/><rect x="0" y="224" width="400" height="36" fill="#47494f"/>' + car(0, 226, GOLD, "yyo-car") + car(0, 226, "#3b6fd1", "yyo-car yyo-car2") +
      /* sign pole */
      '<rect x="328" y="80" width="5" height="132" fill="#6b6f75"/>' + sign(268, 78, 124, "W Manchester Ave", 11) + sign(272, 104, 116, "S Figueroa St", 11),
      sky("yys5", "#f7b37a", "#f9e3c4"));
  }

  window.SCENES = { yystation, yystage, yyibwc, yyboyz, yycorner };
})();
