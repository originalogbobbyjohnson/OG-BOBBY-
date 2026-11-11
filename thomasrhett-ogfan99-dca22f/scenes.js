/* thomasrhett scenes (Regions: MEMPHIS + TENNESSEE; Genres: country; born in Valdosta GA, grew up on Center Point Road in Hendersonville TN,
   studied at Lipscomb University in Nashville). CSS classes and ids prefixed trh- (the page's own anim-train is kept). No logos, no faces, no 9 drawn. */
(function () {
  const W = 400, H = 260;
  const LAKE = "#3f7fa8", CREAM = "#f4ead8", ORANGE = "#e86a3a", BRICK = "#8e3b2a", GRASS = "#4f7a34", GRASS2 = "#3d6329";
  const css = '<style>' +
    '@keyframes trhglow{0%,100%{opacity:.4}50%{opacity:1}}.trh-glow{animation:trhglow 2.4s ease-in-out infinite}.trh-g2{animation-delay:-1.2s}' +
    '@keyframes trhcloud{0%{transform:translateX(0)}100%{transform:translateX(36px)}}.trh-cl{animation:trhcloud 14s ease-in-out infinite alternate}' +
    '@keyframes trhcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.trh-car{animation:trhcar 7s linear infinite}' +
    '@keyframes trhsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.trh-moss{transform-box:fill-box;transform-origin:50% 0;animation:trhsway 3.2s ease-in-out infinite}.trh-m2{animation-delay:-1.6s}' +
    '@keyframes trhbug{0%{transform:translate(0,0);opacity:.2}50%{transform:translate(7px,-9px);opacity:1}100%{transform:translate(0,0);opacity:.2}}.trh-bug{animation:trhbug 3s ease-in-out infinite}.trh-b2{animation-delay:-1s}.trh-b3{animation-delay:-2s}' +
    '@keyframes trhboat{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}.trh-boat{animation:trhboat 9s ease-in-out infinite}' +
    '@keyframes trhbob{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}.trh-bob{animation:trhbob 2s ease-in-out infinite}' +
    '@keyframes trhflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.trh-flag{transform-box:fill-box;transform-origin:0 50%;animation:trhflag 1.6s ease-in-out infinite}' +
    '@keyframes trhwalk{0%{transform:translateX(0)}100%{transform:translateX(260px)}}.trh-walk{animation:trhwalk 12s linear infinite}.trh-w2{animation-delay:-6s}' +
    '@keyframes trhspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.trh-sp{animation:trhspray 1.4s ease-out infinite}.trh-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const cap = (txt, y) => '<text x="200" y="' + (y || 252) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-6" width="4" height="10" fill="#3a2a1c"/><circle cx="0" cy="-18" r="14" fill="' + c + '"/><circle cx="-9" cy="-10" r="9" fill="' + c + '"/><circle cx="9" cy="-10" r="9" fill="' + c + '"/></g>';
  const bugs = (pts) => pts.map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.8" fill="#f6ff8a" class="trh-bug ' + (["", "trh-b2", "trh-b3"][i % 3]) + '"/>').join("");
  const walker = (cls, y, c) => '<g class="trh-walk ' + cls + '"><circle cx="0" cy="' + (y - 15) + '" r="3.2" fill="#5a3e2c"/><rect x="-3.5" y="' + (y - 12) + '" width="7" height="10" rx="2" fill="' + c + '"/><path d="M-2 ' + (y - 2) + 'l-2 7M2 ' + (y - 2) + 'l2 7" stroke="#222" stroke-width="2"/></g>';

  /* ROOM 0: WeGo Route 87 pulling into the Glenbrook Way park & ride in Hendersonville: black stop sign with the route badge, shelter, bus rolling in */
  function trhstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (50 + i * 44) + '" y="132" width="34" height="22" rx="3" fill="#1e2a33"/>').join("");
    const bus = '<g class="anim-train"><rect x="34" y="120" width="318" height="64" rx="10" fill="#f2f4f6" stroke="#7d868f" stroke-width="2"/>' + win +
      '<rect x="34" y="160" width="318" height="9" fill="#0d4f8b"/><rect x="34" y="170" width="318" height="3" fill="#7fc4e8"/>' +
      '<rect x="326" y="128" width="22" height="40" rx="3" fill="#2b3640"/><rect x="306" y="122" width="44" height="9" rx="2" fill="#111"/><text x="328" y="129.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb347">87 EXPRESS</text>' +
      '<circle cx="88" cy="186" r="11" fill="#222"/><circle cx="88" cy="186" r="4" fill="#888"/><circle cx="300" cy="186" r="11" fill="#222"/><circle cx="300" cy="186" r="4" fill="#888"/><circle cx="350" cy="172" r="3.5" fill="#fff6c2" class="trh-glow"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#trh0)"/>' +
      '<g class="trh-cl"><ellipse cx="80" cy="30" rx="46" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="40" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<path d="M0 116q80-24 170-8t130-10t100 6v20H0z" fill="#5d8a46"/>' +
      [30, 70, 360].map((x, i) => tree(x, 118, .9 + (i % 2) * .2, i % 2 ? "#3d6329" : "#4f7a34")).join("") +
      '<rect x="0" y="118" width="400" height="80" fill="#4a4d52"/><path d="M0 196h400" stroke="#d8d8d0" stroke-width="3"/><rect x="0" y="198" width="400" height="62" fill="#5a5d62"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (12 + i * 50) + ' 214v40" stroke="#f2f2ea" stroke-width="2.5"/>').join("") +
      /* shelter */
      '<rect x="8" y="74" width="4" height="46" fill="#8a8e94"/><rect x="74" y="74" width="4" height="46" fill="#8a8e94"/><path d="M2 74h82l-6-8H8z" fill="#2a3440"/><rect x="12" y="80" width="62" height="30" fill="#bfe0ee" opacity=".35"/>' +
      bus +
      /* black stop sign with route badge */
      '<rect x="98" y="36" width="210" height="44" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/><rect x="198" y="80" width="5" height="40" fill="#8a8e94"/>' +
      '<text x="110" y="54" ' + font + ' font-size="12" fill="#fff">Glenbrook Way</text><text x="110" y="71" ' + font + ' font-size="10" fill="#ccc">Park &amp; Ride · Hendersonville</text>' +
      '<circle cx="284" cy="58" r="15" fill="#0d4f8b"/><text x="284" y="63" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">87</text>' +
      cap("WEGO ROUTE 87  ·  GLENBROOK WAY PARK & RIDE", 254),
      sky("trh0", "#86b9df", "#eef0ea"));
  }

  /* ROOM 1: Center Point Road at dusk, the street he grew up on: green street sign, two-lane road, brick ranch house, mailbox, fireflies, a pickup rolling by */
  function trhroad() {
    return svg(
      '<rect width="400" height="260" fill="url(#trh1)"/>' +
      '<circle cx="320" cy="70" r="22" fill="#ffd38a" opacity=".8"/>' +
      '<path d="M0 140q90-30 200-12t200-6v40H0z" fill="#3d5a2c"/>' +
      [20, 60, 250, 380].map((x, i) => tree(x, 142, 1.1, i % 2 ? "#2f4a24" : "#3a5a2c")).join("") +
      '<rect x="0" y="150" width="400" height="110" fill="' + GRASS2 + '"/>' +
      /* ranch house */
      '<rect x="96" y="116" width="120" height="44" fill="' + BRICK + '"/><path d="M88 118l68-26 68 26z" fill="#3a3a3e"/><rect x="112" y="128" width="22" height="16" fill="#ffe7a8" class="trh-glow"/><rect x="178" y="128" width="22" height="16" fill="#ffe7a8" class="trh-glow trh-g2"/><rect x="146" y="132" width="16" height="28" fill="#5a3a24"/>' +
      '<rect x="230" y="118" width="54" height="42" fill="#d8d2c4"/><path d="M226 120l31-14 31 14z" fill="#3a3a3e"/><rect x="236" y="130" width="42" height="30" fill="#bdb6a6"/>' +
      /* road */
      '<path d="M0 196h400v40H0z" fill="#3a3a40"/><path d="M0 216h400" stroke="#f0d040" stroke-width="2.5" stroke-dasharray="18 12"/>' +
      '<g class="trh-car"><g transform="translate(0 182)"><rect x="0" y="6" width="70" height="18" rx="4" fill="#2a4a7a"/><path d="M40 6v-12h16l12 12z" fill="#2a4a7a"/><path d="M44 4v-8h10l8 8z" fill="#bfe0ee"/><circle cx="16" cy="26" r="6" fill="#222"/><circle cx="54" cy="26" r="6" fill="#222"/></g></g>' +
      /* mailbox */
      '<rect x="62" y="168" width="4" height="26" fill="#6a4a30"/><path d="M52 160h24v10H52z" fill="#555"/><path d="M52 160q12-8 24 0" fill="#666"/><rect x="74" y="156" width="2" height="8" fill="' + ORANGE + '"/>' +
      /* street sign */
      '<rect x="330" y="120" width="5" height="76" fill="#8a8e94"/>' + sign(286, 108, 94, "Center Point Rd") +
      bugs([[40, 176], [120, 184], [210, 170], [300, 180], [370, 166], [180, 186]]) +
      cap("CENTER POINT ROAD  ·  WHERE HE GREW UP", 254),
      sky("trh1", "#2c2e58", "#e8956a"));
  }

  /* ROOM 2: Valdosta, Georgia, where he was born: live oaks dripping Spanish moss over a brick street, azaleas in bloom, a "Welcome to Valdosta" style sign */
  function trhoaks() {
    const moss = (x, y, h, cls) => '<path class="trh-moss ' + cls + '" d="M' + x + ' ' + y + 'q-4 ' + (h / 2) + ' 0 ' + h + 'q3 -' + (h / 3) + ' 2 -' + h + 'z" fill="#a9b39a" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#trh2)"/>' +
      '<rect x="0" y="170" width="400" height="90" fill="' + GRASS + '"/>' +
      /* brick street */
      '<path d="M150 260l40-90h20l40 90z" fill="#9a4a32"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (186 - i * 6) + ' ' + (178 + i * 11) + 'h' + (28 + i * 12) + '" stroke="#7a3624" stroke-width="1.2"/>').join("") +
      /* oak trunks and canopy */
      '<path d="M40 180q6-60-10-110M40 180q14-50 70-74" stroke="#4a3a2a" stroke-width="12" fill="none" stroke-linecap="round"/>' +
      '<path d="M360 180q-6-60 10-110M360 180q-14-50-70-74" stroke="#4a3a2a" stroke-width="12" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="80" cy="60" rx="110" ry="40" fill="#3f5a32"/><ellipse cx="320" cy="58" rx="110" ry="40" fill="#3f5a32"/><ellipse cx="200" cy="40" rx="80" ry="22" fill="#4a6a3a"/>' +
      [30, 60, 92, 124, 150, 250, 278, 306, 340, 372].map((x, i) => moss(x, 80 + (i % 3) * 4, 30 + (i % 4) * 8, i % 2 ? "trh-m2" : "")).join("") +
      /* azaleas */
      [20, 70, 110, 290, 330, 380].map((x, i) => '<ellipse cx="' + x + '" cy="186" rx="22" ry="12" fill="#2f4a26"/>' + Array.from({ length: 6 }, (_, j) => '<circle cx="' + (x - 14 + j * 6) + '" cy="' + (180 + (j % 2) * 5) + '" r="3" fill="' + (i % 2 ? "#f28ab0" : "#e8507a") + '"/>').join("")).join("") +
      /* welcome sign */
      '<rect x="244" y="206" width="5" height="34" fill="#6a4a30"/><rect x="330" y="206" width="5" height="34" fill="#6a4a30"/><rect x="232" y="178" width="114" height="34" rx="4" fill="' + CREAM + '" stroke="#2a4a2a" stroke-width="2"/><text x="289" y="193" text-anchor="middle" ' + font + ' font-size="9" fill="#2a4a2a">WELCOME TO</text><text x="289" y="207" text-anchor="middle" ' + font + ' font-size="12" fill="#2a4a2a">VALDOSTA, GA</text>' +
      cap("VALDOSTA, GEORGIA  ·  WHERE IT ALL STARTED", 254),
      sky("trh2", "#9cc6e4", "#f4ead8"));
  }

  /* ROOM 3: Lipscomb University in Nashville, where he studied before he signed: red-brick hall with white columns and a cupola, students crossing the lawn */
  function trhcampus() {
    return svg(
      '<rect width="400" height="260" fill="url(#trh3)"/>' +
      '<g class="trh-cl"><ellipse cx="90" cy="34" rx="40" ry="8" fill="#fff" opacity=".6"/></g>' +
      '<rect x="0" y="176" width="400" height="84" fill="' + GRASS + '"/><path d="M0 214h400" stroke="#cfc6b2" stroke-width="10"/>' +
      [24, 376].map(x => tree(x, 176, 1.4, "#3d6329")).join("") +
      /* hall */
      '<rect x="70" y="90" width="260" height="88" fill="' + BRICK + '"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M70 ' + (96 + i * 7) + 'h260" stroke="#7a3022" stroke-width=".6"/>').join("") +
      '<path d="M140 90l60-28 60 28z" fill="' + CREAM + '"/><rect x="140" y="88" width="120" height="6" fill="' + CREAM + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (146 + i * 21) + '" y="94" width="7" height="84" fill="#fbf6ec"/>').join("") +
      '<rect x="188" y="140" width="24" height="38" fill="#3a2a1c"/>' +
      [84, 108, 284, 308].map(x => '<rect x="' + x + '" y="104" width="14" height="22" fill="#e9e2c8"/><rect x="' + x + '" y="140" width="14" height="22" fill="#e9e2c8"/>').join("") +
      /* cupola + flag */
      '<rect x="190" y="40" width="20" height="22" fill="' + CREAM + '"/><path d="M186 40l14-14 14 14z" fill="#5a6a72"/><rect x="199" y="8" width="2" height="20" fill="#888"/><path class="trh-flag" d="M201 9h16v9h-16z" fill="#7a1f3a"/>' +
      walker("", 222, ORANGE) + walker("trh-w2", 226, "#2a4a7a") +
      cap("LIPSCOMB UNIVERSITY  ·  NASHVILLE  ·  MAJORIN' IN UNDECIDED", 252),
      sky("trh3", "#8ec0e4", "#f2efe4"));
  }

  /* ROOM 4: his corner: Center Point Rd and W Main St in Hendersonville, Old Hickory Lake behind with sailboats, a brick wall with his name tagged */
  function trhcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#trh4)"/>' +
      '<path d="M0 92q100-14 200-4t200-4v16H0z" fill="#3d5a2c"/>' +
      '<rect x="0" y="98" width="400" height="44" fill="' + LAKE + '"/><path d="M0 110h400M0 124h400" stroke="#7fb3d4" stroke-width="1" stroke-dasharray="12 18" opacity=".7"/>' +
      '<g class="trh-boat"><g class="trh-bob"><path d="M60 122h30l-5 6H65z" fill="#fff"/><path d="M75 120v-26l14 24z" fill="#f4ead8"/><path d="M73 120v-20l-10 18z" fill="' + ORANGE + '"/></g></g>' +
      '<g class="trh-boat" style="animation-delay:-4s"><g class="trh-bob"><path d="M250 116h22l-4 5h-14z" fill="#fff"/><path d="M261 114v-18l10 16z" fill="#f4ead8"/></g></g>' +
      /* brick wall */
      '<rect x="0" y="142" width="400" height="80" fill="' + BRICK + '"/>' + Array.from({ length: 10 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2) * 15 - 15) + '" y="' + (142 + r * 8) + '" width="28" height="6.5" fill="#9a4632" opacity=".55"/>').join("")).join("") +
      tag("THOMAS RHETT", 30, 196, 30, "#7fc4e8", -5) + tag("TR", 270, 214, 24, ORANGE, -8) + tag("HOME TEAM", 40, 160, 14, CREAM, -3) +
      '<g class="trh-sp"><circle cx="300" cy="200" r="2" fill="#7fc4e8"/></g><g class="trh-sp trh-sp2"><circle cx="306" cy="206" r="2" fill="#7fc4e8"/></g>' +
      '<rect x="0" y="222" width="400" height="38" fill="#9a9a94"/><path d="M0 222h400" stroke="#cfcfc6" stroke-width="2"/>' +
      /* signpost with two green street signs */
      '<rect x="338" y="92" width="5" height="132" fill="#8a8e94"/>' + sign(268, 70, 124, "Center Point Rd") + sign(296, 96, 90, "W Main St") +
      cap("CENTER POINT RD & W MAIN ST  ·  OLD HICKORY LAKE", 252),
      sky("trh4", "#7fb7e0", "#f6e6c8"));
  }

  window.SCENES = { trhstop: trhstop, trhroad: trhroad, trhoaks: trhoaks, trhcampus: trhcampus, trhcorner: trhcorner };
})();
