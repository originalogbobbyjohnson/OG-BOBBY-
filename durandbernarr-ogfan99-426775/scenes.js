/* durandbernarr scenes (Regions tab: St. Louis + Ohio; Glenville, Cleveland). CSS classes and ids prefixed db- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dbflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.35}55%{opacity:.95}}.db-flk{animation:dbflick 2.4s infinite}.db-flk2{animation-delay:1.2s}' +
    '@keyframes dbbeam{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(10deg)}}.db-bm{transform-box:fill-box;transform-origin:50% 0;animation:dbbeam 3s ease-in-out infinite}.db-bm2{animation-delay:-1.5s}' +
    '@keyframes dbnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-14px,-60px);opacity:0}}.db-nt{animation:dbnote 3s ease-out infinite}.db-nt2{animation-delay:1s}.db-nt3{animation-delay:2s}' +
    '@keyframes dbglow{0%,100%{opacity:.35}50%{opacity:.95}}.db-gl{animation:dbglow 2s ease-in-out infinite}.db-gl2{animation-delay:-1s}' +
    '@keyframes dbbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.db-bob{animation:dbbob 1.2s ease-in-out infinite}.db-bob2{animation-delay:-.6s}' +
    '@keyframes dbheart{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-70px);opacity:0}}.db-ht{animation:dbheart 2.6s ease-out infinite}.db-ht2{animation-delay:.9s}.db-ht3{animation-delay:1.7s}' +
    '@keyframes dbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.db-sp{animation:dbspray 1.4s ease-out infinite}.db-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const note = (x, y, c, cls) => '<g class="db-nt ' + (cls || "") + '"><ellipse cx="' + x + '" cy="' + y + '" rx="5" ry="3.6" fill="' + c + '"/><rect x="' + (x + 3.6) + '" y="' + (y - 18) + '" width="2" height="18" fill="' + c + '"/></g>';
  const tree = (x, base, r) => '<g><rect x="' + (x - 4) + '" y="' + (base - r * 1.5) + '" width="8" height="' + (r * 1.5) + '" fill="#4a3424"/><ellipse cx="' + x + '" cy="' + (base - r * 1.7) + '" rx="' + (r * 1.3) + '" ry="' + r + '" fill="#3c6b3a"/></g>';
  const MANGO = "#f5a623", PINK = "#d63a8a", TEAL = "#2fb3a6", CREAM = "#f6efe2", RTA = "#00539b";

  /* 1. RTA's 10 bus (East 105–Lakeshore) pulling up at E 105th St and Superior Ave in Glenville: white bus with the blue and red stripes, the bus-stop sign, Glenville storefronts */
  function dbbus() {
    const bus = '<g class="anim-train"><rect x="30" y="116" width="300" height="80" rx="10" fill="#f4f4f2" stroke="#8d949b" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (78 + i * 40) + '" y="128" width="34" height="30" rx="3" fill="#1f2b38"/>').join("") +
      '<rect x="38" y="128" width="32" height="60" rx="3" fill="#1f2b38"/><path d="M30 166h300v8h-300z" fill="' + RTA + '"/><path d="M30 174h300v4h-300z" fill="#d7262e"/>' +
      '<rect x="36" y="118" width="120" height="11" rx="2" fill="#111"/><text x="96" y="126.5" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">10 E 105–LAKESHORE</text>' +
      '<circle cx="86" cy="196" r="13" fill="#222"/><circle cx="86" cy="196" r="5" fill="#9aa1a8"/><circle cx="276" cy="196" r="13" fill="#222"/><circle cx="276" cy="196" r="5" fill="#9aa1a8"/><circle cx="34" cy="184" r="3.5" fill="#fff6c2"/></g>';
    const shops = '<rect x="0" y="70" width="120" height="134" fill="#8a4b38"/><rect x="120" y="86" width="150" height="118" fill="#6f5a4a"/><rect x="270" y="64" width="130" height="140" fill="#93573f"/>' +
      Array.from({ length: 9 }, (_, i) => '<rect x="' + (12 + (i % 3) * 36) + '" y="' + (80 + Math.floor(i / 3) * 30) + '" width="22" height="18" fill="#f6d27a" opacity=".55"/>').join("") +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (282 + (i % 4) * 30) + '" y="' + (76 + Math.floor(i / 4) * 30) + '" width="18" height="18" fill="#f6d27a" opacity=".5"/>').join("");
    const stop = '<rect x="364" y="88" width="5" height="116" fill="#6f757b"/><rect x="346" y="60" width="42" height="44" rx="4" fill="#fff" stroke="' + RTA + '" stroke-width="3"/><text x="367" y="78" text-anchor="middle" ' + font + ' font-size="9" fill="' + RTA + '">RTA</text><text x="367" y="96" text-anchor="middle" ' + font + ' font-size="13" fill="#d7262e">10</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#db1)"/>' + shops + sign(110, 24, 120, "E 105th St") + sign(236, 24, 120, "Superior Av") +
      '<rect x="0" y="204" width="400" height="56" fill="#55585c"/><path d="M0 230h400" stroke="#f2d04a" stroke-width="3" stroke-dasharray="22 16"/><rect x="0" y="202" width="400" height="4" fill="#c9b9a4"/>' +
      stop + bus,
      sky("db1", "#f2a65a", "#fbe0c0"));
  }

  /* 2. Movement class at the Cleveland Institute of Music in University Circle: the wood floor, the barre, the mirror wall, the grand piano, big windows, notes in the air */
  function dbstudio() {
    return svg(
      '<rect width="400" height="260" fill="#e9e2d6"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (24 + i * 124) + '" y="26" width="104" height="96" fill="url(#db2)"/><path d="M' + (76 + i * 124) + ' 26v96M' + (24 + i * 124) + ' 74h104" stroke="#fff" stroke-width="3"/><rect x="' + (24 + i * 124) + '" y="26" width="104" height="96" fill="none" stroke="#fff" stroke-width="4"/>').join("") +
      '<g class="db-gl"><rect x="30" y="34" width="40" height="34" fill="#fff" opacity=".25"/></g><g class="db-gl db-gl2"><rect x="278" y="80" width="40" height="34" fill="#fff" opacity=".25"/></g>' +
      '<rect x="0" y="132" width="400" height="58" fill="#c8d3d8" opacity=".85"/><path d="M0 132h400M100 132v58M200 132v58M300 132v58" stroke="#a9b6bd" stroke-width="2"/>' +
      '<rect x="0" y="150" width="400" height="4" fill="#b08a5a"/>' + [40, 140, 240, 340].map((x) => '<rect x="' + x + '" y="150" width="3" height="40" fill="#8a6a40"/>').join("") +
      '<rect x="0" y="190" width="400" height="70" fill="#c48a52"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (198 + i * 8) + 'h400" stroke="#b37b46" stroke-width="1.5"/>').join("") +
      '<path d="M236 196q0 -24 36 -24h80q16 0 16 14v10z" fill="#151515"/><path d="M236 196h132v8h-132z" fill="#0b0b0b"/><rect x="240" y="204" width="6" height="34" fill="#151515"/><rect x="356" y="204" width="6" height="34" fill="#151515"/>' +
      '<path d="M246 186l20 -36" stroke="#151515" stroke-width="3"/><rect x="250" y="188" width="70" height="6" fill="#f4f1ea"/>' +
      '<g class="db-bob"><circle cx="90" cy="226" r="9" fill="' + PINK + '"/></g><g class="db-bob db-bob2"><circle cx="128" cy="230" r="7" fill="' + MANGO + '"/></g>' +
      note(170, 120, PINK, "") + note(210, 110, TEAL, "db-nt2") + note(300, 128, MANGO, "db-nt3") +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">UNIVERSITY CIRCLE · MOVEMENT CLASS</text>',
      sky("db2", "#9fc8e6", "#dbeaf3"));
  }

  /* 3. On tour as a background singer: the riser with three vocal mics, the purple and mango stage lights sweeping, the crowd's phones lit up */
  function dbstage() {
    const beam = (x, c, cls) => '<g class="db-bm ' + cls + '"><path d="M' + x + ' 0l-40 200h80z" fill="' + c + '" opacity=".22"/></g>';
    const mic = (x) => '<rect x="' + (x - 1.5) + '" y="118" width="3" height="56" fill="#9aa1a8"/><path d="M' + (x - 12) + ' 174l12 -6 12 6" stroke="#9aa1a8" stroke-width="2" fill="none"/><rect x="' + (x - 5) + '" y="106" width="10" height="16" rx="5" fill="#2b2b2b" stroke="#777"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#db3)"/>' +
      beam(70, "#a46bff", "") + beam(200, MANGO, "db-bm2") + beam(330, PINK, "") +
      Array.from({ length: 10 }, (_, i) => '<circle cx="' + (24 + i * 40) + '" cy="16" r="6" fill="#fff3c4" class="db-flk' + (i % 2 ? " db-flk2" : "") + '"/>').join("") + '<rect x="0" y="6" width="400" height="6" fill="#222"/>' +
      '<rect x="60" y="174" width="280" height="22" fill="#2a2030"/><rect x="60" y="174" width="280" height="3" fill="' + MANGO + '"/>' + mic(140) + mic(200) + mic(260) +
      '<rect x="0" y="196" width="400" height="10" fill="#151018"/>' +
      Array.from({ length: 16 }, (_, i) => '<ellipse cx="' + (14 + i * 25) + '" cy="' + (244 - (i % 3) * 4) + '" rx="13" ry="22" fill="#0b080d"/>').join("") +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (30 + i * 54) + '" y="' + (214 + (i % 2) * 6) + '" width="7" height="11" rx="1" fill="#cfe8ff" class="db-flk' + (i % 2 ? " db-flk2" : "") + '"/>').join(""),
      sky("db3", "#120a1c", "#3a1640"));
  }

  /* 4. Where it started: the bedroom YouTube setup (camera on a tripod, ring light, laptop with the comments lit and hearts flying), the gold gramophone award on the shelf */
  function dbroom() {
    return svg(
      '<rect width="400" height="260" fill="#2b1f3a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44) + ' 0v190" stroke="#33264a" stroke-width="18"/>').join("") +
      '<rect x="250" y="40" width="130" height="8" fill="#6b4a2e"/><g transform="translate(300 0)"><rect x="-10" y="34" width="20" height="6" fill="#c9a24a"/><rect x="-2" y="18" width="4" height="16" fill="#c9a24a"/><path d="M0 20q-6 -14 18 -18q4 10 -8 16z" fill="' + MANGO + '"/><circle cx="0" cy="22" r="4" fill="#c9a24a"/></g>' +
      '<rect x="262" y="26" width="10" height="14" fill="' + PINK + '"/><rect x="336" y="22" width="12" height="18" fill="' + TEAL + '"/><rect x="350" y="28" width="10" height="12" fill="' + CREAM + '"/>' +
      '<circle cx="80" cy="96" r="38" fill="none" stroke="#fff6dc" stroke-width="9" class="db-gl"/><rect x="78" y="134" width="4" height="70" fill="#666"/><path d="M62 204l18 -14 18 14" stroke="#666" stroke-width="3" fill="none"/>' +
      '<rect x="150" y="100" width="40" height="26" rx="4" fill="#1a1a1a"/><circle cx="190" cy="113" r="9" fill="#2a2a2a" stroke="#555" stroke-width="2"/><circle cx="190" cy="113" r="4" fill="#3d6ea8"/><circle cx="158" cy="106" r="2.5" fill="#e33" class="db-flk"/>' +
      '<rect x="168" y="126" width="4" height="78" fill="#555"/><path d="M152 204l18 -16 18 16" stroke="#555" stroke-width="3" fill="none"/>' +
      '<rect x="220" y="150" width="160" height="10" fill="#7a5a3a"/><rect x="236" y="160" width="8" height="44" fill="#5a3f28"/><rect x="356" y="160" width="8" height="44" fill="#5a3f28"/>' +
      '<rect x="256" y="104" width="90" height="56" rx="3" fill="#151515"/><rect x="260" y="108" width="82" height="44" fill="#f6efe2"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect x="266" y="' + (113 + i * 10) + '" width="' + (60 - i * 8) + '" height="5" rx="2" fill="#b9b2a6"/>').join("") +
      '<path d="M248 160h106l8 6h-122z" fill="#2a2a2a"/>' +
      [[300, 104, PINK, ""], [318, 100, MANGO, "db-ht2"], [284, 98, TEAL, "db-ht3"]].map((h) => '<g class="db-ht ' + h[3] + '"><path d="M' + h[0] + ' ' + h[1] + 'l-6 -6a4 4 0 0 1 6 -5a4 4 0 0 1 6 5z" fill="' + h[2] + '"/></g>').join("") +
      '<rect x="0" y="204" width="400" height="56" fill="#4a3424"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M0 ' + (212 + i * 9) + 'h400" stroke="#3d2a1c" stroke-width="2"/>').join("") +
      '<ellipse cx="170" cy="236" rx="110" ry="12" fill="' + PINK + '" opacity=".45"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="10" fill="' + CREAM + '">THE COMMENTS LIT</text>');
  }

  /* 5. E 88th St and Martin Luther King Jr Dr in Glenville: green signs, DURAND tagged on the wall, the Rockefeller Park Greenhouse's glass dome behind */
  function dbcorner() {
    const glass = '<path d="M120 140v-34q60 -60 160 0v34z" fill="#bfe3e6" opacity=".85" stroke="#f4f4f4" stroke-width="3"/>' +
      Array.from({ length: 7 }, (_, i) => '<path d="M' + (140 + i * 20) + ' 140v-' + (40 + Math.round(Math.sin((i + 1) / 8 * Math.PI) * 24)) + '" stroke="#f4f4f4" stroke-width="2"/>').join("") +
      '<path d="M120 116q80 -40 160 0" stroke="#f4f4f4" stroke-width="2" fill="none"/><rect x="194" y="56" width="12" height="18" fill="#f4f4f4"/><path d="M194 56l6 -8 6 8z" fill="#f4f4f4"/>' +
      '<rect x="60" y="112" width="60" height="28" fill="#cfe6e3" stroke="#f4f4f4" stroke-width="2"/><rect x="280" y="112" width="60" height="28" fill="#cfe6e3" stroke="#f4f4f4" stroke-width="2"/>' +
      '<g class="db-gl"><path d="M150 100q50 -26 100 0" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#db5)"/>' + tree(30, 140, 22) + tree(372, 140, 22) + glass +
      '<rect x="0" y="136" width="400" height="90" fill="#e8dcc6"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M0 ' + (146 + i * 10) + 'h400" stroke="#d9cbb1" stroke-width="1"/>').join("") +
      tag("AYO!", 26, 166, 18, TEAL, -4) + tag("DURAND", 20, 214, 46, MANGO, -6) + tag("BERNARR", 232, 208, 18, PINK, -5) +
      '<rect x="0" y="226" width="400" height="34" fill="#58554f"/><rect x="0" y="224" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="94" width="6" height="132" fill="#2f2f2f"/>' + sign(300, 96, 100, "E 88th St") + sign(296, 122, 104, "MLK Jr Dr") +
      '<g class="db-sp"><circle cx="252" cy="196" r="3" fill="' + MANGO + '" opacity=".7"/></g><g class="db-sp db-sp2"><circle cx="258" cy="190" r="2" fill="' + MANGO + '" opacity=".6"/></g>',
      sky("db5", "#2a6fa6", "#f2c58a"));
  }

  window.SCENES = { dbbus: dbbus, dbstudio: dbstudio, dbstage: dbstage, dbroom: dbroom, dbcorner: dbcorner };
})();
