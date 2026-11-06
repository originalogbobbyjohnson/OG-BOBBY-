/* Lady London game (NYC map, New Jersey: East Orange, where she grew up in her grandmother's house; born in the Bronx). Scenes:
   1. the NJ Transit 44 pulling up at the Central Av & S Munn Av stop, East Orange's prewar brick apartment houses behind (both East Orange train stations are taken on the map);
   2. Doheny Memorial Library at USC, where she earned her master's in global medicine: pale brick and limestone, round Romanesque arches, the octagonal lantern tower, palms;
   3. Mother Seton Regional High School in Clark, NJ (class of 2012), the track at dusk, runners going around, the scoreboard lit;
   4. Wintrust Arena, Chicago: her halftime set at a Chicago Sky game, spotlights sweeping, the crowd's phone lights;
   5. Central Av & S Munn Av: green signs, the wall tagged LADY LONDON, the brick apartment houses of S Munn Av behind. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes llcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.ll-car{animation:llcar 7s linear infinite}.ll-car2{animation-delay:-3.5s}' +
    '@keyframes llflk{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.ll-flk{animation:llflk 2.4s infinite}' +
    '@keyframes llcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.ll-cloud{animation:llcloud 26s linear infinite}.ll-cloud2{animation-delay:-13s}' +
    '@keyframes llwalk{from{transform:translateX(-30px)}to{transform:translateX(430px)}}.ll-walk{animation:llwalk 14s linear infinite}.ll-walk2{animation-delay:-7s}' +
    '@keyframes llrun{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.ll-run{animation:llrun 5s linear infinite}.ll-run2{animation-delay:-1.6s}.ll-run3{animation-delay:-3.3s}' +
    '@keyframes llspot{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.ll-spot{transform-box:fill-box;transform-origin:50% 0%;animation:llspot 3.2s ease-in-out infinite}.ll-spot2{animation-delay:-1.6s}' +
    '@keyframes lltw{0%,100%{opacity:.25}50%{opacity:1}}.ll-tw{animation:lltw 1.4s ease-in-out infinite}.ll-tw2{animation-delay:.45s}.ll-tw3{animation-delay:.9s}' +
    '@keyframes llbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.ll-bob{animation:llbob .6s ease-in-out infinite}.ll-bob2{animation-delay:.3s}' +
    '@keyframes llsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.ll-sway{transform-box:fill-box;transform-origin:50% 100%;animation:llsway 3.4s ease-in-out infinite}' +
    '@keyframes lldrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(14px);opacity:0}}.ll-drip{animation:lldrip 1.8s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const cloud = (x, y, s, cls) => '<g class="ll-cloud ' + (cls || "") + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><ellipse cx="0" cy="0" rx="26" ry="9" fill="#fff" opacity=".9"/><ellipse cx="14" cy="-6" rx="14" ry="9" fill="#fff" opacity=".9"/><ellipse cx="-10" cy="-4" rx="11" ry="7" fill="#fff" opacity=".9"/></g></g>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="5" fill="' + col + '"/><rect x="' + (x - 5) + '" y="' + (y + 6) + '" width="10" height="16" rx="4" fill="' + col + '"/></g>';
  const palm = (x, y, h) => '<g class="ll-sway"><path d="M' + x + ' ' + y + 'q-4 -' + (h / 2) + ' 2 -' + h + '" stroke="#7a5a3a" stroke-width="5" fill="none"/>' +
    '<g transform="translate(' + (x + 2) + ' ' + (y - h) + ')"><path d="M0 0q-18-8-30 4M0 0q18-8 30 4M0 0q-12-16-26-14M0 0q12-16 26-14M0 0q0-14 4-20" stroke="#2f8a3f" stroke-width="5" fill="none" stroke-linecap="round"/></g></g>';
  const PINK = "#f7a8d8", GOLD = "#f2c46b", BLUE = "#7fd6ff", NJT = "#0039a6";
  /* a prewar East Orange apartment house: brick, limestone trim, rows of windows */
  const apt = (x, y, w, h, col, lit) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + col + '"/><rect x="' + (x - 3) + '" y="' + y + '" width="' + (w + 6) + '" height="6" fill="#d8cdb8"/>';
    for (let wy = y + 14; wy < y + h - 12; wy += 20) for (let wx = x + 8; wx < x + w - 10; wx += 18) s += '<rect x="' + wx + '" y="' + wy + '" width="9" height="12" fill="' + (((wx + wy) % 3) ? (lit || "#2a3340") : "#ffe9a8") + '" opacity=".9"/>';
    return s;
  };

  /* 1. Central Av & S Munn Av: the 44 bus pulling up at the stop, the shelter, the bus stop sign, the brick apartment houses behind */
  function llBus() {
    let win = "";
    for (let x = 64; x < 290; x += 30) win += '<rect x="' + x + '" y="112" width="22" height="22" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#llb)"/>' + cloud(80, 30, .9) + cloud(300, 22, .7, "ll-cloud2") +
      apt(0, 46, 120, 130, "#8a4a36", "#3a3340") + apt(126, 30, 140, 146, "#a0563c", "#3a3340") + apt(272, 54, 128, 122, "#7a4232", "#3a3340") +
      /* sidewalk + street */
      '<rect x="0" y="176" width="400" height="16" fill="#9a9a96"/><rect x="0" y="192" width="400" height="68" fill="#4a4c50"/><path d="M0 236h400" stroke="#d8c060" stroke-width="2" stroke-dasharray="20 14"/>' +
      /* shelter */
      '<rect x="300" y="122" width="88" height="6" fill="#3a3c40"/><rect x="304" y="128" width="3" height="50" fill="#3a3c40"/><rect x="382" y="128" width="3" height="50" fill="#3a3c40"/>' +
      '<rect x="308" y="130" width="72" height="44" fill="#bfe3f5" opacity=".35"/><rect x="314" y="160" width="60" height="5" fill="#555"/>' +
      /* the bus: white body, blue stripe, route 44 sign */
      '<g class="anim-train">' +
        '<rect x="40" y="96" width="260" height="88" rx="10" fill="#f2f2f0" stroke="#9aa3ad" stroke-width="2"/>' + win +
        '<rect x="40" y="150" width="260" height="8" fill="' + NJT + '"/><rect x="40" y="158" width="260" height="3" fill="#e66a1f"/>' +
        '<rect x="272" y="102" width="26" height="44" rx="4" fill="#1d2a3a"/><rect x="236" y="100" width="62" height="10" fill="#111"/>' + txt("44", 266, 109, 9, "#ffb43a") +
        '<circle cx="292" cy="172" r="4" fill="#fff6c2"/>' +
        '<circle cx="90" cy="186" r="12" fill="#111"/><circle cx="90" cy="186" r="5" fill="#888"/><circle cx="246" cy="186" r="12" fill="#111"/><circle cx="246" cy="186" r="5" fill="#888"/>' +
      '</g>' +
      /* stop sign pole */
      '<rect x="392" y="100" width="4" height="78" fill="#666"/><rect x="368" y="86" width="30" height="22" rx="2" fill="' + NJT + '" stroke="#fff" stroke-width="1"/>' + txt("44", 383, 102, 11, "#fff") +
      '<rect x="8" y="204" width="236" height="22" rx="3" fill="#111" opacity=".85"/>' + txt("CENTRAL AV &amp; S MUNN AV", 126, 219, 11, "#fff", 'letter-spacing="1"') +
      '<g class="ll-car ll-car2"><rect x="0" y="240" width="44" height="13" rx="4" fill="' + PINK + '"/><circle cx="10" cy="253" r="4" fill="#111"/><circle cx="34" cy="253" r="4" fill="#111"/></g>',
      sky("llb", "#5b8fd0", "#f4c9a8"));
  }

  /* 2. Doheny Memorial Library, USC: pale brick + limestone, Romanesque round arches, the octagonal lantern tower with its tile cap, palms */
  function llDoheny() {
    let arches = "", upper = "";
    for (let i = 0; i < 3; i++) { const x = 162 + i * 28; arches += '<path d="M' + x + ' 214v-34a12 12 0 0 1 24 0v34z" fill="#3a2a22" stroke="#efe6d4" stroke-width="3"/>'; }
    for (let i = 0; i < 4; i++) { const x = 96 + i * 18; upper += '<path d="M' + x + ' 170v-30a6 6 0 0 1 12 0v30z" fill="#5a7fa8" stroke="#efe6d4" stroke-width="2"/>'; upper += '<path d="M' + (x + 166) + ' 170v-30a6 6 0 0 1 12 0v30z" fill="#5a7fa8" stroke="#efe6d4" stroke-width="2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#lld)"/>' + cloud(60, 34, 1) + cloud(280, 24, .8, "ll-cloud2") +
      /* lawn + walk */
      '<rect x="0" y="214" width="400" height="46" fill="#6fb04f"/><path d="M150 260l20-46h60l20 46z" fill="#d8cdb8"/>' +
      /* wings */
      '<rect x="80" y="120" width="240" height="94" fill="#e2c9a0"/>' +
      (() => { let b = ""; for (let y = 126; y < 214; y += 7) b += '<path d="M80 ' + y + 'h240" stroke="#d2b88e" stroke-width="1"/>'; return b; })() +
      '<path d="M74 122l126-30l126 30z" fill="#b5532e"/><rect x="80" y="118" width="240" height="5" fill="#efe6d4"/>' + upper +
      /* center block + rose window */
      '<rect x="150" y="96" width="100" height="118" fill="#e8d1aa" stroke="#d2b88e"/><circle cx="200" cy="140" r="16" fill="#5a7fa8" stroke="#efe6d4" stroke-width="3"/>' +
      '<path d="M200 124v32M184 140h32M189 129l22 22M211 129l-22 22" stroke="#efe6d4" stroke-width="1.5"/>' + arches +
      /* octagonal lantern tower */
      '<rect x="176" y="40" width="48" height="56" fill="#e8d1aa" stroke="#d2b88e"/>' +
      [182, 194, 206].map(x => '<path d="M' + x + ' 82v-26a6 6 0 0 1 12 0v26z" fill="#4a5a70"/>').join("") +
      '<path d="M172 40h56l-8-8h-40z" fill="#efe6d4"/><path d="M180 32l20-22l20 22z" fill="#b5532e"/>' +
      palm(40, 214, 120) + palm(362, 214, 104) +
      person(30, 192, "#c0392b", "ll-walk") + person(30, 194, "#3a6ea5", "ll-walk ll-walk2") +
      '<rect x="252" y="232" width="140" height="20" rx="3" fill="#111" opacity=".85"/>' + txt("DOHENY LIBRARY · USC", 322, 246, 9.5, "#fff"),
      sky("lld", "#4aa3e0", "#d6eef8"));
  }

  /* 3. Mother Seton Regional HS, Clark NJ: the track at dusk, runners going round, the lit scoreboard, the school behind */
  function llSeton() {
    let lanes = "";
    for (let i = 0; i < 5; i++) lanes += '<path d="M0 ' + (190 + i * 12) + 'h400" stroke="#fff" stroke-width="1.5" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lls)"/>' + stars(10) +
      /* school building */
      '<rect x="20" y="100" width="200" height="60" fill="#9a5040"/>' +
      (() => { let w = ""; for (let x = 30; x < 214; x += 22) w += '<rect x="' + x + '" y="112" width="14" height="12" fill="#ffe9a8" opacity=".85"/><rect x="' + x + '" y="134" width="14" height="12" fill="#ffe9a8" opacity=".6"/>'; return w; })() +
      '<rect x="20" y="96" width="200" height="6" fill="#d8cdb8"/><rect x="104" y="80" width="32" height="20" fill="#9a5040"/><path d="M100 80l20-12l20 12z" fill="#d8cdb8"/>' +
      /* light towers */
      [250, 380].map(x => '<rect x="' + (x - 2) + '" y="40" width="4" height="140" fill="#666"/><rect class="ll-flk" x="' + (x - 14) + '" y="34" width="28" height="10" rx="2" fill="#fff8d6"/>').join("") +
      /* scoreboard */
      '<rect x="262" y="70" width="104" height="58" rx="3" fill="#111" stroke="#444" stroke-width="2"/>' + txt("MOTHER SETON", 314, 86, 10, GOLD) +
      '<rect x="274" y="94" width="32" height="22" fill="#220"/><rect x="322" y="94" width="32" height="22" fill="#220"/>' +
      '<text x="290" y="111" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#ff5a3a" class="ll-tw">12</text>' +
      '<text x="338" y="111" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="#ff5a3a" class="ll-tw ll-tw2">00</text>' +
      /* grass infield + track */
      '<rect x="0" y="160" width="400" height="24" fill="#3f8a3f"/><rect x="0" y="184" width="400" height="76" fill="#b04a32"/>' + lanes +
      /* runners */
      '<g class="ll-run"><g class="ll-bob">' + person(0, 196, PINK) + '</g></g><g class="ll-run ll-run2"><g class="ll-bob ll-bob2">' + person(0, 208, BLUE) + '</g></g><g class="ll-run ll-run3"><g class="ll-bob">' + person(0, 220, GOLD) + '</g></g>' +
      '<rect x="8" y="234" width="150" height="20" rx="3" fill="#111" opacity=".85"/>' + txt("CLARK, NJ · CLASS OF 2012", 83, 248, 8.5, "#fff"),
      sky("lls", "#1a1e48", "#e88a6a"));
  }

  /* 4. Wintrust Arena, Chicago: halftime at a Sky game, the stage at center court, spotlights sweeping, phone lights in the stands */
  function llHalftime() {
    let crowd = "";
    for (let r = 0; r < 4; r++) for (let x = 6 + (r % 2) * 8; x < 400; x += 16) crowd += '<circle cx="' + x + '" cy="' + (64 + r * 16) + '" r="5" fill="#2a2440"/>' + (((x + r * 7) % 5) ? "" : '<rect class="ll-tw ll-tw' + (1 + (x % 3)) + '" x="' + (x + 3) + '" y="' + (54 + r * 16) + '" width="3" height="5" fill="#fff6c2"/>');
    return svg(
      '<rect width="400" height="260" fill="#0e0b1a"/>' +
      /* roof trusses */
      '<path d="M0 20h400M0 34h400" stroke="#2a2a3a" stroke-width="3"/>' + [40, 120, 200, 280, 360].map(x => '<path d="M' + (x - 30) + ' 20l30 14l30-14" stroke="#2a2a3a" stroke-width="2" fill="none"/>').join("") +
      '<rect x="150" y="18" width="100" height="26" rx="3" fill="#1a1a24" stroke="#555"/><rect x="158" y="24" width="40" height="14" fill="#3a8ad6" opacity=".8"/><rect x="202" y="24" width="40" height="14" fill="' + PINK + '" opacity=".8"/>' +
      crowd +
      /* court */
      '<path d="M0 260l40-110h320l40 110z" fill="#d8a868"/><path d="M60 150h280" stroke="#fff" stroke-width="2"/><ellipse cx="200" cy="200" rx="60" ry="18" fill="none" stroke="#fff" stroke-width="2"/><path d="M200 150v110" stroke="#fff" stroke-width="2"/>' +
      '<path d="M40 150h320" stroke="#3a8ad6" stroke-width="4"/>' +
      /* spotlights */
      '<path class="ll-spot" d="M120 36l-40 170h80z" fill="#fff6c2" opacity=".25"/><path class="ll-spot ll-spot2" d="M280 36l-40 170h80z" fill="' + PINK + '" opacity=".25"/>' +
      /* stage + performer silhouette (no face) */
      '<rect x="150" y="188" width="100" height="16" fill="#111"/><rect x="150" y="186" width="100" height="3" fill="' + GOLD + '"/>' +
      '<g class="ll-bob"><circle cx="200" cy="160" r="7" fill="#111"/><path d="M192 186l3-18h10l3 18z" fill="#111"/><path d="M205 170l10-8" stroke="#111" stroke-width="3"/><circle cx="216" cy="161" r="2.5" fill="#999"/></g>' +
      '<rect x="12" y="232" width="150" height="20" rx="3" fill="#000" opacity=".85"/>' + txt("HALFTIME · WINTRUST ARENA", 87, 246, 8.5, "#fff"),
      "");
  }

  /* 5. Central Av & S Munn Av: green signs, the wall tagged LADY LONDON, the S Munn Av apartment houses behind */
  function llCorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#llx)"/>' + stars(14) +
      apt(0, 30, 130, 100, "#6a3a2e", "#2a2a38") + apt(136, 14, 120, 116, "#7a4232", "#2a2a38") + apt(262, 36, 138, 94, "#5a3428", "#2a2a38") +
      /* the wall */
      '<rect x="0" y="130" width="400" height="96" fill="#3a2a40"/>' +
      (() => { let b = ""; for (let y = 142; y < 226; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#2f2236" stroke-width="1"/>'; return b; })() +
      tag("LADY LONDON", 12, 190, 40, PINK, -5) + tag("BOSS LADY", 22, 220, 16, GOLD, -3) + tag("WOOSAH", 170, 220, 17, BLUE, -4) +
      '<path class="ll-drip" d="M48 194v8" stroke="' + PINK + '" stroke-width="3"/><path class="ll-drip" style="animation-delay:-.9s" d="M200 186v8" stroke="' + PINK + '" stroke-width="3"/>' +
      /* sidewalk + street */
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="ll-car"><rect x="0" y="236" width="70" height="18" rx="4" fill="#f2f2f0"/><rect x="0" y="246" width="70" height="3" fill="' + NJT + '"/><rect x="50" y="238" width="16" height="7" fill="#1d2a3a"/><circle cx="14" cy="255" r="4" fill="#111"/><circle cx="56" cy="255" r="4" fill="#111"/></g>' +
      /* pole + green signs */
      '<rect x="352" y="96" width="5" height="132" fill="#3d4b3f"/>' +
      '<rect x="276" y="98" width="120" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Central Av", 336, 114, 12, "#fff") +
      '<rect x="282" y="124" width="114" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("S Munn Av", 339, 140, 12, "#fff") +
      '<circle class="ll-flk" cx="354" cy="92" r="4" fill="#fff6c2"/>',
      sky("llx", "#0c0b22", "#4a2440"));
  }

  window.SCENES = { llBus: llBus, llDoheny: llDoheny, llSeton: llSeton, llHalftime: llHalftime, llCorner: llCorner };
})();
