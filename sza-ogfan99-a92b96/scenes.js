/* SZA game (NYC map, New Jersey: born in St. Louis, raised in Maplewood, NJ). The Fugees kit already uses Maplewood station, Columbia High School
   and Parker Av & Valley St, so these rooms use other Maplewood spots:
   1. the NJ Transit bus stop at Springfield Av & Tuscan Rd (routes 25 and 70; a blue-and-white bus pulls in), 2. Maplewood Village (Tudor storefronts
   on Maplewood Av, the Village clock), 3. Memorial Park in Maplewood (duck pond, white gazebo, falling leaves), 4. Delaware State University in Dover,
   where she studied marine biology (red-brick hall with a white cupola, a fish swimming in a lab tank), 5. Maplewood Av & Baker St with SZA tagged,
   the Maplewood Theater marquee behind. 400 x 260 SVGs. All CSS classes prefixed sz-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes szcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.sz-car{animation:szcar 5.5s linear infinite}.sz-car2{animation-delay:-2.7s}' +
    '@keyframes szcarL{from{transform:translateX(490px)}to{transform:translateX(-90px)}}.sz-carL{animation:szcarL 6.5s linear infinite}' +
    '@keyframes szblink{0%,100%{opacity:.3}50%{opacity:1}}.sz-bl{animation:szblink 1.7s ease-in-out infinite}.sz-bl2{animation-delay:.6s}.sz-bl3{animation-delay:1.1s}' +
    '@keyframes szduck{0%,100%{transform:translateX(0)}50%{transform:translateX(30px)}}.sz-duck{animation:szduck 6s ease-in-out infinite}.sz-duck2{animation-delay:-3s}' +
    '@keyframes szfish{0%{transform:translateX(0) scaleX(1)}49%{transform:translateX(60px) scaleX(1)}50%{transform:translateX(60px) scaleX(-1)}99%{transform:translateX(0) scaleX(-1)}100%{transform:translateX(0) scaleX(1)}}.sz-fish{animation:szfish 5s linear infinite;transform-box:fill-box;transform-origin:center}' +
    '@keyframes szleaf{0%{transform:translate(0,-20px) rotate(0);opacity:0}15%{opacity:1}100%{transform:translate(-30px,170px) rotate(220deg);opacity:0}}.sz-leaf{animation:szleaf 5.5s linear infinite}.sz-leaf2{animation-delay:-1.8s}.sz-leaf3{animation-delay:-3.6s}' +
    '@keyframes szglow{0%,100%{opacity:.55}50%{opacity:1}}.sz-glow{animation:szglow 2.4s ease-in-out infinite}' +
    '@keyframes szhand{from{transform:rotate(0)}to{transform:rotate(360deg)}}.sz-hand{animation:szhand 8s linear infinite;transform-origin:200px 64px}' +
    '@keyframes szbub{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.sz-bub{animation:szbub 2.6s linear infinite}.sz-bub2{animation-delay:-.9s}.sz-bub3{animation-delay:-1.7s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const bullet = (x, y, label, color, r) => { r = r || 12; return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.36) + '" text-anchor="middle" ' + font + ' font-size="' + r * 0.8 + '" fill="#fff">' + label + '</text>'; };
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="sz-bl sz-bl' + (i % 3 + 1) + '" cx="' + ((i * 89) % 400) + '" cy="' + (8 + (i * 41) % 54) + '" r="' + (i % 3 ? 0.9 : 1.3) + '" fill="#fff"/>'; return s; };
  const person = (x, y, col) => '<g><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const bricks = (x, y, w, h, c1, c2) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c1 + '"/>'; for (let yy = y + 6; yy < y + h; yy += 6) s += '<path d="M' + x + ' ' + yy + 'h' + w + '" stroke="' + c2 + '" stroke-width="1"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 3 * s) + '" y="' + y + '" width="' + 6 * s + '" height="' + 26 * s + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 4 * s) + '" r="' + 18 * s + '" fill="' + c + '"/><circle cx="' + (x - 12 * s) + '" cy="' + (y + 4 * s) + '" r="' + 12 * s + '" fill="' + c + '"/><circle cx="' + (x + 12 * s) + '" cy="' + (y + 4 * s) + '" r="' + 12 * s + '" fill="' + c + '"/>';
  const BLUE = "#7cc6ff", PEACH = "#f2b36b", MINT = "#9be38f", NJT = "#0039a6", NJO = "#f58025", NJP = "#a2238e";

  /* 1. Springfield Av & Tuscan Rd, Maplewood: NJ Transit bus pulls in under the evening sky */
  function szstop() {
    const bus = x => '<rect x="' + x + '" y="112" width="190" height="62" rx="9" fill="#f3f4f6" stroke="#6b7280" stroke-width="2"/>' +
      [14, 46, 78, 110, 142].map(k => '<rect x="' + (x + k) + '" y="120" width="26" height="22" rx="2" fill="#9cc8e6"/>').join("") +
      '<rect x="' + (x + 170) + '" y="118" width="16" height="30" rx="3" fill="#9cc8e6"/>' +
      '<rect x="' + (x + 4) + '" y="150" width="182" height="5" fill="' + NJT + '"/><rect x="' + (x + 4) + '" y="155" width="182" height="3" fill="' + NJO + '"/><rect x="' + (x + 4) + '" y="158" width="182" height="3" fill="' + NJP + '"/>' +
      '<rect x="' + (x + 120) + '" y="104" width="60" height="10" rx="2" fill="#111"/><text x="' + (x + 150) + '" y="112" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb000">MAPLEWOOD</text>' +
      '<circle cx="' + (x + 36) + '" cy="176" r="10" fill="#111"/><circle cx="' + (x + 36) + '" cy="176" r="4" fill="#777"/><circle cx="' + (x + 154) + '" cy="176" r="10" fill="#111"/><circle cx="' + (x + 154) + '" cy="176" r="4" fill="#777"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#szs)"/>' + stars(10) +
      /* Springfield Av storefronts */
      [[0, 66, "#6a5a7a"], [70, 54, "#7a6a5a"], [140, 70, "#5a6a7a"], [210, 58, "#7a5a6a"], [280, 64, "#5a7a6a"], [350, 50, "#6a6a7a"]].map(([x, y, c], i) =>
        '<rect x="' + x + '" y="' + y + '" width="66" height="' + (110 - y) + '" fill="' + c + '"/>' +
        '<rect class="sz-bl sz-bl' + (i % 3 + 1) + '" x="' + (x + 8) + '" y="' + (y + 10) + '" width="14" height="10" fill="#ffd98a"/><rect x="' + (x + 36) + '" y="' + (y + 10) + '" width="14" height="10" fill="#3b3346"/>' +
        '<rect x="' + (x + 4) + '" y="96" width="58" height="14" fill="#2b2433"/>').join("") +
      '<rect x="318" y="64" width="4" height="114" fill="#6b7280"/><rect x="300" y="40" width="74" height="40" rx="4" fill="#fff" stroke="' + NJT + '" stroke-width="2"/>' +
      '<rect x="300" y="40" width="74" height="12" rx="3" fill="' + NJT + '"/>' + txt("BUS STOP", 337, 49, 8, "#fff") + bullet(322, 66, "25", NJT, 10) + bullet(350, 66, "70", NJT, 10) +
      '<rect x="20" y="10" width="252" height="34" rx="3" fill="#111"/><rect x="20" y="10" width="252" height="3" fill="#fff"/>' +
      '<text x="32" y="33" ' + font + ' font-size="14.5" fill="#fff">Springfield Av &amp; Tuscan Rd</text>' +
      '<g class="anim-train">' + bus(60) + '</g>' +
      '<rect x="0" y="186" width="400" height="12" fill="#b9b3a7"/><rect x="0" y="198" width="400" height="62" fill="#46484d"/>' +
      [0, 60, 120, 180, 240, 300, 360].map(x => '<rect x="' + (x + 12) + '" y="228" width="30" height="3" fill="#e5e7eb"/>').join("") +
      '<g class="sz-carL"><rect x="0" y="236" width="48" height="15" rx="4" fill="' + PEACH + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="38" cy="251" r="4" fill="#111"/></g>' +
      person(290, 160, "#1f2a3a") + person(372, 162, "#3a2a1e"),
      sky("szs", "#0f1a33", "#3d5a80"));
  }

  /* 2. Maplewood Village: Tudor storefronts with half-timbering, the Village clock (hands turning), people on the sidewalk */
  function szvillage() {
    const tudor = (x, w, c) => '<rect x="' + x + '" y="92" width="' + w + '" height="96" fill="' + c + '"/><path d="M' + (x - 4) + ' 94l' + (w / 2 + 4) + ' -40l' + (w / 2 + 4) + ' 40z" fill="#5a3a2a"/>' +
      '<path d="M' + x + ' 92h' + w + 'M' + (x + w / 3) + ' 92v40M' + (x + 2 * w / 3) + ' 92v40M' + x + ' 132h' + w + 'M' + x + ' 96l' + w / 3 + ' 36M' + (x + w) + ' 96l-' + w / 3 + ' 36" stroke="#4a3024" stroke-width="4"/>' +
      '<rect x="' + (x + 8) + '" y="146" width="' + (w - 16) + '" height="30" fill="#ffe3a8" class="sz-glow"/><rect x="' + (x + 6) + '" y="138" width="' + (w - 12) + '" height="8" fill="' + PEACH + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#szv)"/>' +
      tudor(10, 110, "#efe3cc") + tudor(130, 110, "#f4ead8") + tudor(280, 110, "#efe3cc") +
      /* the Village clock on its post */
      '<rect x="248" y="70" width="6" height="118" fill="#1f2a1f"/><circle cx="251" cy="64" r="20" fill="#f7f3ea" stroke="#1f2a1f" stroke-width="4"/>' +
      '<g transform="translate(51 0)"><path class="sz-hand" d="M200 64v-14" stroke="#111" stroke-width="2.5" stroke-linecap="round"/></g><path d="M251 64h9" stroke="#111" stroke-width="3" stroke-linecap="round"/><circle cx="251" cy="64" r="2" fill="#111"/>' +
      txt("MAPLEWOOD VILLAGE", 200, 34, 15, "#3d2b1f") +
      '<rect x="0" y="188" width="400" height="14" fill="#c9c2b4"/><rect x="0" y="202" width="400" height="58" fill="#4a4a50"/>' +
      [0, 70, 140, 210, 280, 350].map(x => '<rect x="' + (x + 14) + '" y="230" width="34" height="3" fill="#e5e7eb"/>').join("") +
      '<g class="sz-car"><rect x="0" y="210" width="50" height="16" rx="4" fill="' + BLUE + '"/><circle cx="10" cy="226" r="4" fill="#111"/><circle cx="40" cy="226" r="4" fill="#111"/></g>' +
      person(118, 160, "#2b3a4a") + person(222, 162, "#4a2b3a"),
      sky("szv", "#9fd0f0", "#fbe7cf"));
  }

  /* 3. Memorial Park, Maplewood: duck pond, white gazebo, autumn trees, leaves falling */
  function szpark() {
    return svg(
      '<rect width="400" height="260" fill="url(#szp)"/>' +
      '<rect x="0" y="140" width="400" height="120" fill="#6aa85a"/>' +
      tree(40, 100, 1.5, "#d9822b") + tree(110, 110, 1.2, "#e3a13a") + tree(340, 98, 1.6, "#c8552e") + tree(282, 112, 1.1, "#e3b03a") +
      /* gazebo */
      '<path d="M170 92l30 -26l30 26z" fill="#f7f3ea" stroke="#9a8f80" stroke-width="2"/><rect x="172" y="92" width="56" height="6" fill="#e8e1d2"/>' +
      [176, 192, 208, 224].map(x => '<rect x="' + (x - 2) + '" y="98" width="4" height="40" fill="#f7f3ea"/>').join("") +
      '<rect x="168" y="136" width="64" height="8" fill="#e8e1d2"/><path d="M174 120h52" stroke="#f7f3ea" stroke-width="3"/>' +
      /* pond */
      '<ellipse cx="200" cy="200" rx="160" ry="38" fill="#4c94b8"/><ellipse cx="200" cy="196" rx="140" ry="28" fill="#5aa6c9"/>' +
      '<g class="sz-duck"><ellipse cx="150" cy="198" rx="10" ry="5" fill="#8a6a3a"/><circle cx="159" cy="192" r="4" fill="#2f6b3d"/><path d="M162 192l4 1" stroke="' + PEACH + '" stroke-width="2.5"/></g>' +
      '<g class="sz-duck sz-duck2"><ellipse cx="236" cy="208" rx="10" ry="5" fill="#8a6a3a"/><circle cx="245" cy="202" r="4" fill="#2f6b3d"/><path d="M248 202l4 1" stroke="' + PEACH + '" stroke-width="2.5"/></g>' +
      [70, 190, 320].map((x, i) => '<path class="sz-leaf sz-leaf' + (i + 1) + '" d="M' + x + ' 40q6 -6 10 0q-4 6 -10 0z" fill="' + ["#d9822b", "#e3b03a", "#c8552e"][i] + '"/>').join("") +
      txt("MEMORIAL PARK", 200, 30, 15, "#3d2b1f"),
      sky("szp", "#a9d8f5", "#f3e3c3"));
  }

  /* 4. Delaware State University, Dover (she studied marine biology there): red-brick hall, white cupola, a fish swimming in a lab tank */
  function szdsu() {
    let win = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 6; c++) if (!(r === 1 && (c === 2 || c === 3))) win += '<rect x="' + (96 + c * 36) + '" y="' + (100 + r * 36) + '" width="14" height="22" fill="#f7f3ea"/><rect x="' + (98 + c * 36) + '" y="102" width="10" height="18" fill="#a9d3ee" transform="translate(0 ' + r * 36 + ')"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#szd)"/>' +
      /* cupola */
      '<rect x="188" y="40" width="24" height="26" fill="#f7f3ea" stroke="#9a8f80"/><path d="M184 42l16 -18l16 18z" fill="#3f6b55"/><path d="M200 24v-10" stroke="#3f6b55" stroke-width="2"/>' +
      '<path d="M76 92l124 -30l124 30z" fill="#5a3a30"/>' +
      bricks(80, 90, 240, 96, "#a8553f", "#8a4332") + win +
      '<rect x="172" y="138" width="56" height="48" fill="#f7f3ea"/><rect x="186" y="150" width="28" height="36" fill="#3b2a22"/>' +
      '<rect x="120" y="70" width="160" height="0" fill="none"/>' + txt("DELAWARE STATE", 200, 82, 11, "#f7f3ea") +
      '<rect x="0" y="204" width="400" height="56" fill="#5f9a4f"/>' +
      /* lab fish tank on the lawn */
      '<rect x="22" y="214" width="92" height="40" rx="4" fill="#5aa6c9" stroke="#dfe7ee" stroke-width="3"/><rect x="22" y="246" width="92" height="8" fill="#e3c27a"/>' +
      '<g class="sz-fish"><path d="M34 232q10 -8 20 0q-10 8 -20 0zM54 232l8 -6v12z" fill="' + PEACH + '"/></g>' +
      [50, 72, 94].map((x, i) => '<circle class="sz-bub sz-bub' + (i + 1) + '" cx="' + x + '" cy="244" r="2.5" fill="#fff" opacity=".8"/>').join("") +
      txt("MARINE BIO", 68, 210, 9, "#f7f3ea") +
      tree(350, 160, 1.2, "#3f7d43"),
      sky("szd", "#7ab8e8", "#e2f1fb"));
  }

  /* 5. Maplewood Av & Baker St: green signs, SZA tagged on the wall, the Maplewood Theater marquee lit up behind */
  function szcorner() {
    let bulbs = "";
    for (let i = 0; i < 14; i++) bulbs += '<circle class="sz-bl sz-bl' + (i % 3 + 1) + '" cx="' + (236 + i * 10) + '" cy="38" r="2.4" fill="#ffe08a"/><circle class="sz-bl sz-bl' + ((i + 1) % 3 + 1) + '" cx="' + (236 + i * 10) + '" cy="78" r="2.4" fill="#ffe08a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#szk)"/>' + stars(9) +
      /* theater marquee behind */
      '<rect x="240" y="0" width="140" height="30" fill="#4a3a5a"/>' +
      '<rect x="226" y="30" width="148" height="56" rx="4" fill="#2a1f33" stroke="' + PEACH + '" stroke-width="3"/>' + bulbs +
      txt("MAPLEWOOD", 300, 58, 15, "#ffe08a") + txt("THEATER", 300, 74, 10, "#fff") +
      /* wall */
      bricks(150, 96, 250, 116, "#6b4a5a", "#553a48") +
      tag("SZA", 196, 178, 64, BLUE, -6) + tag("CTRL", 318, 136, 22, MINT, -4) + tag("SOS", 330, 196, 24, PEACH, -5) +
      /* signs */
      '<rect x="78" y="34" width="5" height="178" fill="#5b616b"/>' +
      '<rect x="8" y="40" width="146" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("MAPLEWOOD AV", 81, 56, 12, "#fff") +
      '<rect x="30" y="64" width="102" height="20" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("BAKER ST", 81, 78, 11, "#fff") +
      '<rect x="0" y="212" width="400" height="10" fill="#b9b3a7"/><rect x="0" y="222" width="400" height="38" fill="#46484d"/>' +
      '<g class="sz-car sz-car2"><rect x="0" y="230" width="48" height="15" rx="4" fill="' + PEACH + '"/><circle cx="10" cy="245" r="4" fill="#111"/><circle cx="38" cy="245" r="4" fill="#111"/></g>' +
      person(118, 186, "#1f2a3a"),
      sky("szk", "#08121f", "#2d4a6a"));
  }

  window.SCENES = { szstop, szvillage, szpark, szdsu, szcorner };
})();
