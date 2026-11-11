/* vincentmason scenes (Regions: ATLANTA; Genres: country; born and raised in Roswell GA, north of Atlanta; Ole Miss, then Lipscomb in Nashville;
   MCA / Interscope / Music Soup). CSS classes prefixed vmn- (the page's own anim-train is kept). No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#e0a84a", CREAM = "#f3ece0", SAGE = "#7f9a6a", BRICK = "#8e3b2a", NAVY = "#1d2a44";
  const css = '<style>' +
    '@keyframes vmnglow{0%,100%{opacity:.45}50%{opacity:1}}.vmn-glow{animation:vmnglow 2.2s ease-in-out infinite}.vmn-g2{animation-delay:-1.1s}' +
    '@keyframes vmncloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.vmn-cl{animation:vmncloud 14s ease-in-out infinite alternate}' +
    '@keyframes vmncar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.vmn-car{animation:vmncar 6s linear infinite}' +
    '@keyframes vmnfall{0%{transform:translateY(-8px);opacity:.2}50%{opacity:.9}100%{transform:translateY(10px);opacity:.2}}.vmn-fall{animation:vmnfall 1.1s linear infinite}.vmn-f2{animation-delay:-.4s}.vmn-f3{animation-delay:-.8s}' +
    '@keyframes vmnflow{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.vmn-flow{animation:vmnflow 3s linear infinite}' +
    '@keyframes vmnbob{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}.vmn-bob{animation:vmnbob 2.4s ease-in-out infinite}' +
    '@keyframes vmnkayak{0%{transform:translateX(0)}100%{transform:translateX(-460px)}}.vmn-kayak{animation:vmnkayak 16s linear infinite}' +
    '@keyframes vmnnote{0%{transform:translate(0,0);opacity:1}100%{transform:translate(14px,-40px);opacity:0}}.vmn-note{animation:vmnnote 2.4s ease-out infinite}.vmn-n2{animation-delay:-.8s}.vmn-n3{animation-delay:-1.6s}' +
    '@keyframes vmnstrum{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}.vmn-strum{transform-box:fill-box;transform-origin:50% 0;animation:vmnstrum .5s ease-in-out infinite}' +
    '@keyframes vmnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.vmn-sp{animation:vmnspray 1.4s ease-out infinite}.vmn-sp2{animation-delay:.45s}' +
    '@keyframes vmnjet{0%{transform:translateY(0);opacity:.85}100%{transform:translateY(-6px);opacity:.3}}.vmn-jet{animation:vmnjet 1.2s ease-in-out infinite alternate}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const cap = (txt, y) => '<text x="200" y="' + (y || 252) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-6" width="4" height="10" fill="#3a2a1c"/><circle cx="0" cy="-18" r="14" fill="' + c + '"/><circle cx="-9" cy="-10" r="9" fill="' + c + '"/><circle cx="9" cy="-10" r="9" fill="' + c + '"/></g>';
  const pine = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-4" width="4" height="8" fill="#3a2a1c"/><path d="M0 -46l14 24h-6l10 18H-10l10 -18h-6z" fill="' + c + '"/></g>';
  /* Georgia state route shield: white with black outline; here GA 400 / GA 140 as plain black-on-white */
  const gaShield = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="-17" y="-14" width="34" height="28" rx="3" fill="#fff" stroke="#111" stroke-width="2"/><text x="0" y="6" text-anchor="middle" ' + font + ' font-size="' + (n.length > 2 ? 13 : 15) + '" fill="#111">' + n + '</text></g>';
  const pickup = (c, s) => '<g transform="scale(' + (s || 1) + ')"><rect x="0" y="6" width="74" height="20" rx="4" fill="' + c + '"/><path d="M42 6v-14h18l12 14z" fill="' + c + '"/><path d="M46 4v-9h12l8 9z" fill="#bfe0ee"/>' +
    '<circle cx="16" cy="28" r="7" fill="#222"/><circle cx="16" cy="28" r="3" fill="#aaa"/><circle cx="58" cy="28" r="7" fill="#222"/><circle cx="58" cy="28" r="3" fill="#aaa"/><rect x="70" y="12" width="5" height="4" fill="#ffe9a0" class="vmn-glow"/></g>';

  /* ROOM 0: GA 400 north out of Atlanta, the overhead green sign for Exit 7, Holcomb Bridge Rd / GA 140 into Roswell, a pickup rolling up the off-ramp */
  function vmnexit() {
    return svg(
      '<rect width="400" height="260" fill="url(#vmn1)"/>' +
      '<g class="vmn-cl"><ellipse cx="70" cy="26" rx="44" ry="9" fill="#fff" opacity=".55"/><ellipse cx="300" cy="34" rx="50" ry="9" fill="#fff" opacity=".45"/></g>' +
      [14, 40, 66, 92, 312, 338, 364, 390].map((x, i) => pine(x, 176 - (i % 2) * 6, 1 + (i % 3) * .15, i % 2 ? "#2c4a2a" : "#36583a")).join("") +
      '<rect x="0" y="176" width="400" height="84" fill="#3a3a40"/><path d="M0 218h400" stroke="#fff" stroke-width="2.5" stroke-dasharray="20 14"/><path d="M0 178h400" stroke="#fff" stroke-width="2"/><path d="M0 256h400" stroke="#f0d040" stroke-width="2.5"/>' +
      /* overhead gantry */
      '<rect x="120" y="36" width="5" height="142" fill="#8a8e94"/><rect x="372" y="36" width="5" height="142" fill="#8a8e94"/><rect x="120" y="40" width="257" height="5" fill="#8a8e94"/><rect x="120" y="58" width="257" height="4" fill="#8a8e94"/>' +
      /* exit tab + main panel */
      '<rect x="292" y="30" width="62" height="18" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="323" y="44" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">EXIT 7</text>' +
      '<rect x="134" y="48" width="224" height="88" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' + gaShield(166, 78, "140") +
      '<text x="194" y="74" ' + font + ' font-size="15" fill="#fff">Holcomb Bridge Rd</text><text x="194" y="96" ' + font + ' font-size="19" fill="#fff">Roswell</text>' +
      '<path d="M318 108l18 18M336 108v18h-18" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      '<text x="194" y="124" ' + font + ' font-size="10" fill="#fff">EXIT ONLY</text>' +
      /* GA 400 trailblazer on its own post */
      '<rect x="46" y="120" width="4" height="58" fill="#8a8e94"/>' + gaShield(48, 108, "400") + '<rect x="30" y="126" width="36" height="12" fill="#fff" stroke="#111" stroke-width="1"/><text x="48" y="135" text-anchor="middle" ' + font + ' font-size="8" fill="#111">NORTH</text>' +
      '<g class="anim-train"><g transform="translate(170 188)">' + pickup("#2f4f6f") + '</g></g>' +
      '<g class="vmn-car"><rect x="0" y="228" width="40" height="14" rx="3" fill="#d8d8dc"/><circle cx="9" cy="242" r="4" fill="#222"/><circle cx="31" cy="242" r="4" fill="#222"/></g>' +
      cap("GA 400 NORTH  ·  EXIT 7  ·  HOLCOMB BRIDGE RD  ·  ROSWELL", 252),
      sky("vmn1", "#8ab8dc", "#eef0e6"));
  }

  /* ROOM 1: Roswell Mill on Vickery Creek: the old stone dam with the falls pouring over it, the covered footbridge across the creek, woods both sides */
  function vmnmill() {
    return svg(
      '<rect width="400" height="260" fill="url(#vmn2)"/>' +
      '<path d="M0 70q60 -26 120 -8t120 -14t160 4V150H0z" fill="#3c5e36"/><path d="M0 96q80 -20 170 -4t230 -6V160H0z" fill="#2f4c2b"/>' +
      [24, 70, 330, 376].map((x, i) => tree(x, 128, 1.2, i % 2 ? "#4c7a3e" : "#5a8a46")).join("") +
      /* covered footbridge (weathered wood, dark shingle roof) */
      '<g><rect x="64" y="60" width="272" height="6" fill="#4a3a2c"/><path d="M56 60l144 -26l144 26z" fill="#3a3530"/><path d="M56 60l144 -26l144 26" stroke="#2a2522" stroke-width="3" fill="none"/>' +
      '<rect x="66" y="66" width="268" height="30" fill="#8a6a48"/>' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (76 + i * 22) + '" y="70" width="12" height="16" fill="#2a2a2a"/>').join("") +
      '<rect x="62" y="96" width="276" height="6" fill="#5a4630"/><rect x="66" y="102" width="6" height="48" fill="#6a6058"/><rect x="328" y="102" width="6" height="48" fill="#6a6058"/></g>' +
      /* stone dam across the creek */
      '<rect x="0" y="150" width="400" height="22" fill="#7d7a72"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + (i % 2) * 4) + '" y="152" width="16" height="8" fill="#8e8b82"/>').join("") +
      /* the falls */
      '<rect x="0" y="172" width="400" height="34" fill="#cfe6ef" opacity=".9"/>' +
      Array.from({ length: 30 }, (_, i) => '<path d="M' + (i * 14 + 4) + ' 172v32" stroke="#fff" stroke-width="2" opacity=".8" class="vmn-fall ' + (["", "vmn-f2", "vmn-f3"][i % 3]) + '"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#5a7f86"/>' +
      '<g class="vmn-flow">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 34) + ' ' + (218 + (i % 3) * 10) + 'q8 -4 16 0t16 0" stroke="#cfe6ef" stroke-width="1.6" fill="none"/>').join("") + '</g>' +
      '<ellipse cx="200" cy="210" rx="200" ry="6" fill="#fff" opacity=".5" class="vmn-jet"/>' +
      cap("ROSWELL MILL  ·  VICKERY CREEK FALLS  ·  THE COVERED BRIDGE"),
      sky("vmn2", "#9cc4de", "#e8efe4"));
  }

  /* ROOM 2: Canton Street at night: the old brick storefronts of historic Roswell, string lights over the street, a guitar strumming on a patio, notes rising */
  function vmncanton() {
    const front = (x, w, c, h) => '<rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + x + '" y="' + (150 - h) + '" width="' + w + '" height="6" fill="#2a1a14"/>' +
      '<rect x="' + (x + 8) + '" y="' + (164 - h) + '" width="' + (w / 2 - 12) + '" height="20" fill="#ffd98a" class="vmn-glow"/><rect x="' + (x + w / 2 + 4) + '" y="' + (164 - h) + '" width="' + (w / 2 - 12) + '" height="20" fill="#ffd98a" class="vmn-glow vmn-g2"/>' +
      '<rect x="' + (x + 6) + '" y="118" width="' + (w - 12) + '" height="32" fill="#ffcf73" opacity=".85"/><path d="M' + (x + 2) + ' 116h' + (w - 4) + 'l-6 -8h-' + (w - 16) + 'z" fill="' + SAGE + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#vmn3)"/>' +
      [[40, 20], [120, 50], [300, 30], [360, 60], [210, 16]].map(p => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.3" fill="#fff"/>').join("") +
      front(0, 86, BRICK, 96) + front(86, 74, "#a24c34", 80) + front(160, 84, "#6e3326", 104) + front(244, 76, "#9a5a3a", 86) + front(320, 80, BRICK, 98) +
      '<rect x="0" y="150" width="400" height="18" fill="#8a7e70"/><rect x="0" y="168" width="400" height="92" fill="#2e2e34"/><path d="M0 214h400" stroke="#f0d040" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* string lights */
      '<path d="M0 40q100 30 200 6t200 10" stroke="#222" stroke-width="1" fill="none"/>' + Array.from({ length: 16 }, (_, i) => { const x = i * 26 + 6; const y = 40 + Math.sin(i / 2.4) * 12 + 8; return '<circle cx="' + x + '" cy="' + y + '" r="2.6" fill="#ffe7a0" class="vmn-glow ' + (i % 2 ? "vmn-g2" : "") + '"/>'; }).join("") +
      /* patio guitar */
      '<g transform="translate(180 176)"><rect x="-30" y="34" width="70" height="6" fill="#5a3a24"/><rect x="-26" y="40" width="4" height="22" fill="#5a3a24"/><rect x="32" y="40" width="4" height="22" fill="#5a3a24"/>' +
      '<g transform="rotate(-24)"><ellipse cx="0" cy="20" rx="14" ry="16" fill="#c8843a"/><ellipse cx="0" cy="6" rx="11" ry="11" fill="#c8843a"/><circle cx="0" cy="14" r="4" fill="#2a1a10"/><rect x="-2" y="-40" width="4" height="46" fill="#3a2414"/><rect x="-4" y="-48" width="8" height="10" fill="#2a1a10"/></g>' +
      '<rect x="6" y="6" width="14" height="4" rx="2" fill="#e8d2b0" class="vmn-strum"/></g>' +
      ['vmn-note', 'vmn-note vmn-n2', 'vmn-note vmn-n3'].map((c, i) => '<g class="' + c + '"><text x="' + (206 + i * 8) + '" y="178" font-size="16" fill="' + GOLD + '">&#9834;</text></g>').join("") +
      cap("CANTON STREET  ·  HISTORIC ROSWELL"),
      sky("vmn3", "#0f1630", "#3a3456"));
  }

  /* ROOM 3: the Chattahoochee River at Roswell: the Roswell Road bridge spanning the water, kayaks paddling by, river birches on the bank, golden hour */
  function vmnriver() {
    return svg(
      '<rect width="400" height="260" fill="url(#vmn4)"/>' +
      '<circle cx="320" cy="70" r="26" fill="#ffd27a" opacity=".9"/>' +
      '<path d="M0 110q90 -26 200 -8t200 -6V150H0z" fill="#4a6a3a"/><path d="M0 126q120 -18 230 -4t170 -4V156H0z" fill="#3a5a30"/>' +
      [30, 80, 130].map((x, i) => tree(x, 150, 1.1, i % 2 ? "#6a8a40" : "#7a9a48")).join("") +
      /* concrete bridge with arches */
      '<rect x="0" y="92" width="400" height="12" fill="#cfcac0"/><rect x="0" y="88" width="400" height="5" fill="#a8a398"/>' + Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="82" width="3" height="7" fill="#a8a398"/>').join("") +
      [40, 140, 240, 340].map(x => '<path d="M' + (x - 44) + ' 104q44 34 88 0" fill="none" stroke="#cfcac0" stroke-width="5"/><rect x="' + (x + 40) + '" y="104" width="10" height="56" fill="#bdb8ae"/>').join("") +
      '<g class="vmn-car"><rect x="0" y="76" width="30" height="10" rx="2" fill="#c8302a"/></g>' +
      /* river */
      '<rect x="0" y="150" width="400" height="110" fill="#6f8a7a"/><path d="M0 150h400v12H0z" fill="#86a08c"/>' +
      '<g class="vmn-flow">' + Array.from({ length: 16 }, (_, i) => '<path d="M' + (i * 30) + ' ' + (170 + (i % 4) * 18) + 'q8 -3 16 0t16 0" stroke="#e6efe6" stroke-width="1.4" fill="none" opacity=".7"/>').join("") + '</g>' +
      '<path d="M300 152h40l-8 100h-24z" fill="#ffd27a" opacity=".25"/>' +
      /* kayaks drifting */
      '<g class="vmn-kayak"><g transform="translate(400 196)"><g class="vmn-bob"><path d="M0 8q30 -10 60 0q-30 8 -60 0z" fill="' + GOLD + '"/><rect x="26" y="-6" width="8" height="12" rx="3" fill="#2f4f6f"/><path d="M10 -10l40 16" stroke="#3a3a3a" stroke-width="2"/></g></g>' +
      '<g transform="translate(500 222)"><g class="vmn-bob"><path d="M0 8q30 -10 60 0q-30 8 -60 0z" fill="#c8302a"/><rect x="26" y="-6" width="8" height="12" rx="3" fill="#3a5a30"/><path d="M50 -10l-40 16" stroke="#3a3a3a" stroke-width="2"/></g></g></g>' +
      cap("THE CHATTAHOOCHEE  ·  ROSWELL ROAD BRIDGE"),
      sky("vmn4", "#e8a868", "#f3dcb4"));
  }

  /* ROOM 4: his corner: Mimosa Blvd and Bulloch Ave at Roswell Town Square, the square's fountain and old bandstand behind, his name tagged on the brick */
  function vmncorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#vmn5)"/>' +
      /* square behind: big oaks, white bandstand, fountain */
      tree(250, 132, 2.2, "#2f4c2b") + tree(380, 128, 2, "#36583a") +
      '<g transform="translate(300 78)"><path d="M-40 30l40 -26l40 26z" fill="' + CREAM + '"/><rect x="-36" y="30" width="72" height="5" fill="#ddd4c4"/>' + [-32, -12, 8, 28].map(x => '<rect x="' + x + '" y="35" width="4" height="36" fill="' + CREAM + '"/>').join("") +
      '<rect x="-40" y="70" width="80" height="8" fill="#ddd4c4"/><rect x="-36" y="56" width="72" height="3" fill="' + CREAM + '"/></g>' +
      '<g transform="translate(230 140)"><ellipse cx="0" cy="18" rx="40" ry="8" fill="#9a958a"/><ellipse cx="0" cy="16" rx="34" ry="5" fill="#8fc2d6"/><rect x="-4" y="-8" width="8" height="24" fill="#b0aa9e"/><ellipse cx="0" cy="-8" rx="14" ry="4" fill="#b0aa9e"/>' +
      '<path d="M0 -12q-10 -18 -18 6M0 -12q10 -18 18 6M0 -12v-14" stroke="#dff2fa" stroke-width="2.4" fill="none" class="vmn-jet"/></g>' +
      '<path d="M0 164h400v96H0z" fill="#3a3a40"/><path d="M0 204h400" stroke="#f0d040" stroke-width="2" stroke-dasharray="16 12"/><rect x="0" y="160" width="400" height="6" fill="#a8a094"/>' +
      /* brick wall with tag */
      '<rect x="0" y="92" width="176" height="72" fill="#7a3428"/>' + Array.from({ length: 6 }, (_, r) => '<path d="M0 ' + (100 + r * 12) + 'h176" stroke="#5a2418" stroke-width="1.5"/>').join("") +
      tag("VINCENT", 10, 128, 28, GOLD, -6) + tag("MASON", 34, 158, 26, CREAM, -6) +
      '<circle cx="160" cy="130" r="3" fill="' + GOLD + '" class="vmn-sp"/><circle cx="166" cy="126" r="2" fill="' + GOLD + '" class="vmn-sp vmn-sp2"/>' +
      /* sign post */
      '<rect x="196" y="58" width="5" height="146" fill="#8a8e94"/>' + sign(140, 64, 118, "MIMOSA BLVD") + sign(150, 88, 100, "BULLOCH AVE") +
      '<g transform="translate(262 194)">' + pickup("#2f4f6f", .9) + '</g>' +
      cap("MIMOSA BLVD & BULLOCH AVE  ·  ROSWELL TOWN SQUARE"),
      sky("vmn5", "#1a2040", "#7a6a7a"));
  }

  window.SCENES = { vmnexit, vmnmill, vmncanton, vmnriver, vmncorner };
})();
