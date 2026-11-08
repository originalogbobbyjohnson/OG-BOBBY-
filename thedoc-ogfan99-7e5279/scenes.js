/* thedoc scenes (Regions tab: Houston + Texas; West Dallas). CSS classes prefixed dc- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dcglow{0%,100%{opacity:.35}50%{opacity:1}}.dc-glow{animation:dcglow 1.8s ease-in-out infinite}.dc-g2{animation-delay:-.9s}' +
    '@keyframes dcwalk{0%{transform:translateX(-40px)}100%{transform:translateX(440px)}}.dc-walk{animation:dcwalk 14s linear infinite}.dc-walk2{animation-delay:-7s}' +
    '@keyframes dcriver{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.dc-riv{animation:dcriver 3.4s linear infinite}' +
    '@keyframes dcspin{to{transform:rotate(360deg)}}.dc-spin{transform-box:fill-box;transform-origin:50% 50%;animation:dcspin 1.6s linear infinite}' +
    '@keyframes dcvu{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}.dc-vu{transform-box:fill-box;transform-origin:50% 100%;animation:dcvu .5s ease-in-out infinite}' +
    '@keyframes dcsweep{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.dc-sw{transform-box:fill-box;transform-origin:50% 0%;animation:dcsweep 4s ease-in-out infinite}.dc-sw2{animation-delay:-2s}' +
    '@keyframes dcchalk{0%,40%{opacity:0}60%,100%{opacity:1}}.dc-chalk{animation:dcchalk 3s ease-in-out infinite alternate}' +
    '@keyframes dcspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dc-sp{animation:dcspray 1.4s ease-out infinite}.dc-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "dc-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const GOLD = "#f2c230", RED = "#c8102e", ICE = "#9ad1ff", DART = "#0b5ca8";
  const skyline = (fill) => '<g fill="' + fill + '"><rect x="40" y="70" width="30" height="70"/><rect x="76" y="44" width="26" height="96"/><rect x="108" y="58" width="34" height="82"/><rect x="148" y="30" width="22" height="110"/><path d="M148 30l11 -14l11 14z"/><rect x="176" y="50" width="30" height="90"/><rect x="212" y="64" width="26" height="76"/><rect x="244" y="40" width="28" height="100"/><rect x="278" y="72" width="34" height="68"/><rect x="318" y="60" width="24" height="80"/></g>';

  /* 1. The DART 25 bus pulling into the Bernal/Singleton Transfer Location in West Dallas: the bus-only canopy, the black station sign, the bus sliding in */
  function dcstation() {
    const bus = '<g class="anim-train"><rect x="40" y="124" width="290" height="72" rx="8" fill="#f2f4f6" stroke="#8e959c" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 40) + '" y="134" width="32" height="26" rx="3" fill="#1f2a36"/>').join("") +
      '<path d="M296 134h22q8 0 8 10v18h-30z" fill="#1f2a36"/><rect x="290" y="128" width="34" height="5" rx="2" fill="#111"/><text x="307" y="132.4" text-anchor="middle" ' + font + ' font-size="4.5" fill="#ffb02e">25</text>' +
      '<rect x="40" y="166" width="290" height="7" fill="' + DART + '"/><rect x="40" y="174" width="290" height="3" fill="' + GOLD + '"/>' +
      '<circle cx="90" cy="198" r="12" fill="#1a1a1a"/><circle cx="90" cy="198" r="5" fill="#9aa1a8"/><circle cx="280" cy="198" r="12" fill="#1a1a1a"/><circle cx="280" cy="198" r="5" fill="#9aa1a8"/>' +
      '<rect x="322" y="182" width="8" height="6" rx="2" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dc1)"/>' +
      '<g opacity=".45">' + skyline("#7a8494") + '</g>' +
      '<rect x="0" y="140" width="400" height="70" fill="#5a5d62"/>' + bus +
      '<rect x="0" y="208" width="400" height="10" fill="#d9d4c6"/><rect x="0" y="216" width="400" height="44" fill="#a59d8c"/>' +
      /* canopy */
      '<path d="M20 36h360l-14 16h-332z" fill="' + DART + '"/><rect x="20" y="30" width="360" height="8" fill="#e7e9ec"/>' +
      [52, 200, 348].map(x => '<rect x="' + (x - 3) + '" y="52" width="6" height="164" fill="#9aa1a8"/>').join("") +
      '<rect x="78" y="62" width="244" height="30" rx="3" fill="#111"/><text x="90" y="82" ' + font + ' font-size="12.5" fill="#fff">Bernal/Singleton</text>' + badge(230, 77, "25", DART) + badge(264, 77, "128", DART) +
      '<rect class="dc-glow" x="150" y="232" width="100" height="5" rx="2" fill="#fff6c2" opacity=".5"/>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9.5" fill="#1b1b1b">SINGLETON BLVD  ·  WEST DALLAS</text>',
      sky("dc1", "#f6b46a", "#9cc8e8"));
  }

  /* 2. The old Continental Avenue Bridge over the Trinity, turned into a park: the concrete arches, people strolling across, the river and the downtown towers behind */
  function dcbridge() {
    const arches = Array.from({ length: 6 }, (_, i) => { const x = i * 70 - 10; return '<path d="M' + x + ' 150h70v86h-8q0 -54 -27 -54t-27 54h-8z" fill="#d8d0bf"/>'; }).join("");
    const walker = (cls, c) => '<g class="dc-walk ' + cls + '"><circle cx="0" cy="120" r="4" fill="#3a2a22"/><rect x="-4" y="124" width="8" height="14" rx="3" fill="' + c + '"/><path d="M-2 138l-3 10M2 138l3 10" stroke="#222" stroke-width="2.4"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dc2)"/>' +
      skyline("#5b6b84") + Array.from({ length: 14 }, (_, i) => '<rect class="' + (i % 3 ? "" : "dc-glow") + '" x="' + [82, 90, 114, 126, 152, 162, 182, 194, 216, 250, 260, 284, 296, 324][i] + '" y="' + [56, 74, 70, 92, 44, 66, 62, 84, 78, 52, 70, 86, 100, 74][i] + '" width="5" height="6" fill="#ffe7a0" opacity=".8"/>').join("") +
      '<rect x="0" y="136" width="400" height="16" fill="#6f8a4a"/>' +
      '<rect x="0" y="226" width="400" height="34" fill="#5b7f6e"/><g class="dc-riv">' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 40) + ' 240q10 -4 20 0" stroke="#cfe8de" stroke-width="2" fill="none" opacity=".7"/>').join("") + '</g>' +
      arches + '<rect x="0" y="146" width="400" height="8" fill="#c4bba8"/>' +
      Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20 + 6) + '" y="136" width="3" height="10" fill="#4a4a4a"/>').join("") + '<rect x="0" y="134" width="400" height="3" fill="#4a4a4a"/>' +
      '<rect x="60" y="128" width="16" height="8" rx="2" fill="' + RED + '"/><rect x="250" y="128" width="16" height="8" rx="2" fill="' + GOLD + '"/>' +
      walker("", RED) + walker("dc-walk2", DART) +
      '<rect x="92" y="236" width="216" height="18" rx="3" fill="#000" opacity=".45"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">CONTINENTAL AVE BRIDGE  ·  TRINITY RIVER</text>',
      sky("dc2", "#f2a65a", "#f7d9b0"));
  }

  /* 3. "It's the formula": the studio, E = D.O.C. chalked on the board, the reels turning, the meters jumping while Dre rides the faders */
  function dcformula() {
    const vu = Array.from({ length: 10 }, (_, i) => '<rect class="dc-vu" style="animation-delay:' + (-i * 0.12).toFixed(2) + 's" x="' + (244 + i * 10) + '" y="190" width="7" height="22" fill="' + (i > 7 ? RED : i > 5 ? GOLD : "#4ad66d") + '"/>').join("");
    const faders = Array.from({ length: 12 }, (_, i) => '<rect x="' + (60 + i * 14) + '" y="200" width="3" height="34" fill="#222"/><rect x="' + (55 + i * 14) + '" y="' + (204 + (i * 9) % 22) + '" width="13" height="6" rx="1" fill="' + (i % 4 === 0 ? GOLD : "#d8d8d8") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1d2230"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (i * 34) + '" y="0" width="30" height="176" fill="#232a3a"/>').join("") +
      /* chalkboard */
      '<rect x="60" y="20" width="280" height="120" rx="4" fill="#2f4a3a" stroke="#8a6a3a" stroke-width="6"/>' +
      '<text x="200" y="72" text-anchor="middle" font-family="Permanent Marker, Comic Sans MS, cursive" font-size="34" fill="#f2f2e8">E = D.O.C.</text>' +
      '<text class="dc-chalk" x="200" y="106" text-anchor="middle" font-family="Permanent Marker, Comic Sans MS, cursive" font-size="15" fill="#f2f2e8" opacity=".85">knowledge + talent = the formula</text>' +
      '<path d="M100 120h200" stroke="#f2f2e8" stroke-width="1.5" opacity=".5" stroke-dasharray="6 5"/>' +
      '<rect x="310" y="126" width="18" height="6" rx="1" fill="#f2f2e8"/>' +
      /* console */
      '<path d="M24 256l20 -82h312l20 82z" fill="#3b3b44"/>' +
      '<rect x="234" y="182" width="110" height="34" rx="3" fill="#111"/>' + vu + faders +
      '<rect x="70" y="150" width="100" height="26" rx="3" fill="#2a2a30"/><circle class="dc-spin" cx="96" cy="163" r="10" fill="none" stroke="#bbb" stroke-width="2" stroke-dasharray="4 3"/><circle class="dc-spin" cx="144" cy="163" r="10" fill="none" stroke="#bbb" stroke-width="2" stroke-dasharray="4 3"/>' +
      '<path d="M96 153h48" stroke="#5a3a20" stroke-width="1.5"/>' +
      '<text x="200" y="12" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">THE D.O.C. AND THE DOCTOR</text>',
      "");
  }

  /* 4. "No one can do it better": the plaque wall, gold and platinum records lined up, two spotlights sweeping across */
  function dcplaques() {
    const plaque = (x, y, c) => '<rect x="' + x + '" y="' + y + '" width="58" height="74" rx="3" fill="#141414" stroke="' + c + '" stroke-width="3"/><circle cx="' + (x + 29) + '" cy="' + (y + 30) + '" r="20" fill="' + c + '"/><circle cx="' + (x + 29) + '" cy="' + (y + 30) + '" r="13" fill="none" stroke="#fff" stroke-width="1" opacity=".4"/><circle cx="' + (x + 29) + '" cy="' + (y + 30) + '" r="5" fill="#141414"/><rect x="' + (x + 9) + '" y="' + (y + 58) + '" width="40" height="8" fill="#e8e0c8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dc4)"/>' +
      '<rect x="0" y="0" width="400" height="200" fill="#2a1a22"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="200" fill="#331f2a"/>').join("") +
      plaque(30, 40, GOLD) + plaque(102, 30, "#d7dbe0") + plaque(174, 40, GOLD) + plaque(246, 30, "#d7dbe0") + plaque(318, 40, GOLD) +
      plaque(66, 120, "#d7dbe0") + plaque(282, 120, GOLD) +
      '<rect x="146" y="128" width="108" height="56" rx="4" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="152" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" textLength="80" lengthAdjust="spacingAndGlyphs" fill="' + GOLD + '">NO ONE CAN</text><text x="200" y="172" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="14" textLength="92" lengthAdjust="spacingAndGlyphs" fill="' + GOLD + '">DO IT BETTER</text>' +
      '<g class="dc-sw"><path d="M110 0l-40 220h80z" fill="#fff6c2" opacity=".14"/></g><g class="dc-sw dc-sw2"><path d="M290 0l-40 220h80z" fill="#fff6c2" opacity=".14"/></g>' +
      '<rect x="0" y="200" width="400" height="60" fill="#3a2a1e"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (206 + i * 6) + 'h400" stroke="#2e2116" stroke-width="1"/>').join(""),
      sky("dc4", "#1a1018", "#3a2a1e"));
  }

  /* 5. Singleton Blvd and Sylvan Ave in West Dallas: green signs, THE D.O.C. tagged on the wall, the downtown skyline lit up across the Trinity */
  function dccorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dc5)"/>' + stars(14) +
      skyline("#2a2f4a") +
      Array.from({ length: 16 }, (_, i) => '<rect class="' + (i % 3 ? "" : "dc-glow") + '" x="' + [82, 90, 114, 126, 152, 162, 182, 194, 216, 250, 260, 284, 296, 324, 46, 56][i] + '" y="' + [56, 74, 70, 92, 44, 66, 62, 84, 78, 52, 70, 86, 100, 74, 84, 104][i] + '" width="5" height="6" fill="#ffd98a" opacity=".85"/>').join("") +
      '<rect x="0" y="132" width="400" height="92" fill="#4a4f5c"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (140 + i * 8) + 'h400" stroke="#40444f" stroke-width="1"/>').join("") +
      tag("THE D.O.C.", 18, 186, 40, GOLD, -5) + tag("DIGGY DOC", 30, 216, 22, "#fff", -3) + tag("FILA FRESH", 176, 214, 20, ICE, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#58554f"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(296, 96, 102, "Singleton Blvd") + sign(310, 122, 88, "Sylvan Ave") +
      '<g class="dc-sp"><circle cx="262" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="dc-sp dc-sp2"><circle cx="268" cy="162" r="2" fill="' + RED + '" opacity=".6"/></g>',
      sky("dc5", "#0f1430", "#5a3a5a"));
  }

  window.SCENES = { dcstation: dcstation, dcbridge: dcbridge, dcformula: dcformula, dcplaques: dcplaques, dccorner: dccorner };
})();
