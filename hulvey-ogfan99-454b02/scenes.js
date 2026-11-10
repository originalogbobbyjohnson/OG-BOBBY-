/* hulvey scenes (Regions tab: Atlanta; Westside, where Crossover ATL meets at the City of Refuge - by way of Brunswick, GA). CSS classes prefixed hv- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes hvglow{0%,100%{opacity:.45}50%{opacity:1}}.hv-glow{animation:hvglow 2.2s ease-in-out infinite}.hv-g2{animation-delay:-1.1s}' +
    '@keyframes hvboat{0%{transform:translateX(-140px)}100%{transform:translateX(440px)}}.hv-boat{animation:hvboat 16s linear infinite}' +
    '@keyframes hvsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.hv-sw{transform-box:fill-box;transform-origin:50% 0%;animation:hvsway 3.2s ease-in-out infinite}.hv-sw2{animation-delay:-1.6s}' +
    '@keyframes hvbird{0%{transform:translate(0,0)}50%{transform:translate(60px,-8px)}100%{transform:translate(120px,0)}}.hv-bd{animation:hvbird 9s linear infinite}' +
    '@keyframes hvchair{0%,20%{transform:translateX(-90px);opacity:0}45%,100%{transform:translateX(0);opacity:1}}.hv-ch{animation:hvchair 5s ease-out infinite}' +
    '@keyframes hvbeam{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.hv-bm{transform-box:fill-box;transform-origin:50% 0%;animation:hvbeam 4s ease-in-out infinite}.hv-bm2{animation-delay:-2s}' +
    '@keyframes hvspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.hv-sp{animation:hvspray 1.4s ease-out infinite}.hv-sp2{animation-delay:.45s}' +
    '@keyframes hvdrip{0%{transform:translateY(0);opacity:1}100%{transform:translateY(30px);opacity:0}}.hv-dr{animation:hvdrip 1.8s ease-in infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const DROP = "#5ec8f0", GOLD = "#f2b33d", GREEN = "#7bd389", MBLUE = "#0060a8", MORANGE = "#f58220", MYEL = "#fdbb30";

  /* 0. MARTA's 51 Joseph E. Boone bus pulling up to the stop at Mayson Turner Rd on the Westside, the blue stop flag, the black stop sign, Westside bungalows */
  function hvstation() {
    const bus = '<g class="anim-train"><rect x="40" y="112" width="250" height="84" rx="10" fill="#f4f4f2" stroke="#9aa1a8" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (80 + i * 40) + '" y="124" width="34" height="32" rx="3" fill="#24323e"/>').join("") +
      '<rect x="46" y="124" width="28" height="60" rx="2" fill="#24323e"/>' +
      '<rect x="40" y="162" width="250" height="6" fill="' + MBLUE + '"/><rect x="40" y="168" width="250" height="4" fill="' + MORANGE + '"/><rect x="40" y="172" width="250" height="3" fill="' + MYEL + '"/>' +
      '<rect x="44" y="113" width="96" height="11" rx="2" fill="#111"/><text x="92" y="121.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">51 JOSEPH E BOONE</text>' +
      '<circle cx="88" cy="196" r="12" fill="#222"/><circle cx="88" cy="196" r="5" fill="#9aa1a8"/><circle cx="246" cy="196" r="12" fill="#222"/><circle cx="246" cy="196" r="5" fill="#9aa1a8"/>' +
      '<circle cx="44" cy="182" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#hv0)"/>' +
      [0, 96, 200, 300].map((x, i) => '<path d="M' + (x + 4) + ' 90l46 -30l46 30z" fill="' + ["#5a4a42", "#4a5a62", "#6a4a3a", "#55524a"][i] + '"/><rect x="' + (x + 10) + '" y="90" width="80" height="44" fill="' + ["#c9b48a", "#9fb4c2", "#d8c8a8", "#b8a48a"][i] + '"/>' +
        '<rect x="' + (x + 20) + '" y="100" width="18" height="16" fill="#2a3442"/><rect x="' + (x + 58) + '" y="100" width="18" height="16" fill="' + (i % 2 ? "#ffd98a" : "#2a3442") + '"/><rect x="' + (x + 6) + '" y="116" width="88" height="5" fill="#eee"/>').join("") +
      '<rect x="0" y="134" width="400" height="16" fill="#bdb8ae"/><rect x="0" y="150" width="400" height="110" fill="#4e4e54"/><path d="M0 232h400" stroke="#f2c200" stroke-width="3" stroke-dasharray="20 14"/>' +
      bus +
      '<rect x="336" y="70" width="5" height="80" fill="#6b7178"/><rect x="318" y="54" width="42" height="32" rx="3" fill="' + MBLUE + '" stroke="#fff" stroke-width="1.5"/><text x="339" y="67" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">MARTA</text><text x="339" y="81" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">51</text>' +
      '<rect x="20" y="18" width="270" height="30" rx="3" fill="#111"/><text x="32" y="38" ' + font + ' font-size="12" fill="#fff">Joseph E Boone Blvd @ Mayson Turner Rd</text>',
      sky("hv0", "#86bde6", "#f3e0c0"));
  }

  /* 1. Brunswick, GA: the Sidney Lanier Bridge over the Brunswick River at sunset, the two tall pale concrete towers and the fans of white cables, the marsh grass, a shrimp boat passing under */
  function hvbridge() {
    const cables = (tx) => Array.from({ length: 7 }, (_, i) => '<path d="M' + tx + ' ' + (40 + i * 5) + 'L' + (tx - 30 - i * 16) + ' 128M' + tx + ' ' + (40 + i * 5) + 'L' + (tx + 30 + i * 16) + ' 128" stroke="#f4f4f4" stroke-width="1.2"/>').join("");
    const tower = (x) => '<path d="M' + (x - 10) + ' 176L' + (x - 4) + ' 26h8L' + (x + 10) + ' 176z" fill="#d8d4cc" stroke="#9a968e" stroke-width="1.5"/><rect x="' + (x - 9) + '' + '" y="70" width="18" height="5" fill="#9a968e"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hv1)"/>' +
      '<circle cx="320" cy="120" r="26" fill="#ffcf6a" opacity=".9"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#3a5a7a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (i * 70) + ' ' + (170 + i % 3 * 18) + 'h40" stroke="#ffcf6a" stroke-width="2" opacity=".5"/>').join("") +
      cables(130) + cables(270) + tower(130) + tower(270) +
      '<path d="M0 132q200 -14 400 0v6q-200 -14 -400 0z" fill="#c8c4bc"/>' +
      '<g class="hv-boat"><g transform="translate(0 0)"><path d="M10 196h90l-12 18h-66z" fill="#f4f4f2" stroke="#555" stroke-width="1.5"/><rect x="40" y="178" width="30" height="18" fill="#e8e4dc" stroke="#555" stroke-width="1.5"/><path d="M56 178v-34M56 150l-40 30M56 150l40 30" stroke="#555" stroke-width="2"/><path d="M14 180l8 12M98 180l-8 12" stroke="#7a8a6a" stroke-width="3"/></g></g>' +
      '<path d="M0 260v-40q30 -14 60 -4q40 -12 80 0q50 -10 100 2q60 -14 160 -2v44z" fill="#6a7a3a"/>' + Array.from({ length: 30 }, (_, i) => '<path d="M' + (i * 14) + ' 236l3 -16" stroke="#8a9a4a" stroke-width="2"/>').join("") +
      '<g class="hv-bd"><path d="M30 60q5 -5 10 0q5 -5 10 0" stroke="#222" stroke-width="2" fill="none"/></g>',
      sky("hv1", "#3a4a7a", "#f2a35a"));
  }

  /* 2. Brunswick's Lover's Oak on Albany St: the giant old live oak spreading over the median, Spanish moss swaying, the brick street and a porch house behind */
  function hvoak() {
    const moss = (x, y, d) => '<path class="hv-sw' + (d ? " hv-sw2" : "") + '" d="M' + x + ' ' + y + 'q-3 12 0 22q3 8 -1 16" stroke="#a8b49a" stroke-width="3" fill="none" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#hv2)"/>' +
      '<rect x="270" y="110" width="110" height="70" fill="#f2ece0" stroke="#bbb" stroke-width="1.5"/><path d="M262 110l63 -30l63 30z" fill="#6a5a4a"/><rect x="270" y="140" width="110" height="6" fill="#fff"/>' +
      [284, 316, 348].map(x => '<rect x="' + x + '" y="118" width="16" height="18" fill="#3a4a5a"/>').join("") +
      '<rect x="0" y="180" width="400" height="80" fill="#9a4a3a"/>' + Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (186 + r * 8) + 'h400" stroke="#7a3a2e" stroke-width="1"/>').join("") +
      '<path d="M150 190q-4 -40 4 -70q8 -14 20 -14q12 0 20 14q8 30 4 70z" fill="#5a4636"/>' +
      '<path d="M160 130q-50 -10 -120 10M196 128q60 -14 140 4M170 118q-20 -40 -60 -54M184 118q30 -40 80 -50" stroke="#5a4636" stroke-width="12" fill="none" stroke-linecap="round"/>' +
      '<ellipse cx="90" cy="88" rx="90" ry="44" fill="#3e5a32"/><ellipse cx="300" cy="84" rx="100" ry="46" fill="#3e5a32"/><ellipse cx="190" cy="60" rx="110" ry="50" fill="#4a6a3a"/>' +
      Array.from({ length: 14 }, (_, i) => moss(30 + i * 26, 100 + (i % 3) * 8, i % 2)).join("") +
      '<rect x="120" y="186" width="160" height="8" rx="3" fill="#7a9a5a"/>',
      sky("hv2", "#9cc8e8", "#f4ead2"));
  }

  /* 3. Sunday at Crossover ATL, the church that meets inside the City of Refuge: the big warehouse room, stage lights sweeping, a plain cross of light, and the folding chairs going into rows (he still sets them up) */
  function hvrefuge() {
    return svg(
      '<rect width="400" height="260" fill="#14161e"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 56) + ' 0v90" stroke="#262a36" stroke-width="3"/>').join("") + '<path d="M0 20h400M0 50h400" stroke="#262a36" stroke-width="3"/>' +
      '<g class="hv-bm"><path d="M110 0l-40 160h80z" fill="' + DROP + '" opacity=".16"/></g><g class="hv-bm hv-bm2"><path d="M290 0l-40 160h80z" fill="' + GOLD + '" opacity=".16"/></g>' +
      '<rect x="80" y="96" width="240" height="40" fill="#22252e"/><rect x="80" y="134" width="240" height="6" fill="#3a3e48"/>' +
      '<rect x="194" y="40" width="12" height="64" fill="#fff6d8" class="hv-glow"/><rect x="176" y="58" width="48" height="12" fill="#fff6d8" class="hv-glow"/>' +
      [110, 150, 250, 290].map(x => '<rect x="' + x + '" y="112" width="10" height="22" rx="2" fill="#0e1014"/><circle cx="' + (x + 5) + '" cy="112" r="5" fill="#2a2e38"/>').join("") +
      '<rect x="0" y="140" width="400" height="120" fill="#3a3430"/>' +
      [0, 1, 2].map(r => Array.from({ length: 8 }, (_, c) => { const x = 30 + c * 44 + r * 6, y = 160 + r * 30; return '<g' + (r === 2 && c === 7 ? ' class="hv-ch"' : '') + '><rect x="' + x + '" y="' + y + '" width="26" height="6" fill="#6a7078"/><rect x="' + (x + 2) + '" y="' + (y - 14) + '" width="22" height="12" rx="2" fill="#6a7078"/><path d="M' + (x + 3) + ' ' + (y + 6) + 'v12M' + (x + 23) + ' ' + (y + 6) + 'v12" stroke="#4a4e56" stroke-width="2"/></g>'; }).join("")).join(""),
      "");
  }

  /* 4. The corner: Joseph E Boone Blvd NW and Mayson Turner Rd NW on the Westside, HULVEY tagged on the wall, downtown Atlanta's skyline behind with the gold-topped tower */
  function hvcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#hv4)"/>' +
      '<g fill="#232a40"><rect x="40" y="70" width="40" height="70"/><rect x="88" y="50" width="30" height="90"/><rect x="200" y="58" width="38" height="82"/><rect x="250" y="80" width="50" height="60"/><rect x="310" y="66" width="34" height="74"/>' +
      '<path d="M150 140V40l14 -12l14 12v100z"/><rect x="214" y="44" width="10" height="16"/></g>' +
      '<path d="M157 34l7 -24l7 24z" fill="' + GOLD + '"/><rect x="161" y="0" width="6" height="12" fill="' + GOLD + '" opacity=".9"/>' +
      '<ellipse cx="327" cy="62" rx="17" ry="5" fill="#232a40"/>' +
      Array.from({ length: 24 }, (_, i) => '<rect class="' + (i % 3 ? "" : "hv-glow") + '" x="' + [46, 60, 94, 106, 156, 168, 206, 222, 258, 280, 316, 330][i % 12] + '" y="' + (78 + (i % 4) * 14) + '" width="5" height="6" fill="#ffd98a" opacity=".8"/>').join("") +
      '<rect x="0" y="136" width="400" height="90" fill="#6a5a6e"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (144 + i * 8) + 'h400" stroke="#5a4a5e" stroke-width="1"/>').join("") +
      tag("HULVEY", 24, 200, 50, DROP, -5) + tag("EVERY DROP", 30, 222, 20, GOLD, -3) + tag("116", 262, 196, 28, GREEN, -6) + tag("THE A", 200, 220, 20, "#fff", -4) +
      '<g class="hv-dr"><path d="M70 206q-4 6 0 10q4 -4 0 -10z" fill="' + DROP + '"/></g>' +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="350" y="96" width="6" height="130" fill="#2f2f2f"/>' + sign(268, 98, 130, "Joseph E Boone Blvd") + sign(282, 124, 116, "Mayson Turner Rd") +
      '<g class="hv-sp"><circle cx="160" cy="166" r="3" fill="' + DROP + '" opacity=".7"/></g><g class="hv-sp hv-sp2"><circle cx="166" cy="160" r="2" fill="' + DROP + '" opacity=".6"/></g>',
      sky("hv4", "#121a36", "#e08a5a"));
  }

  window.SCENES = { hvstation: hvstation, hvbridge: hvbridge, hvoak: hvoak, hvrefuge: hvrefuge, hvcorner: hvcorner };
})();
