/* wyattflores scenes (Regions: More of the South / Genres: country; Stillwater, Oklahoma - born and raised there). CSS classes prefixed wfx- (the page's own anim-train is kept). */
(function () {
  const W = 400, H = 260;
  const ORANGE = "#f2782a", DIRT = "#b5452a", SAGE = "#7fae9a", CREAM = "#f6ecd8", BRICK = "#9c3f2c";
  const css = '<style>' +
    '@keyframes wfxcloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.wfx-cl{animation:wfxcloud 14s ease-in-out infinite alternate}' +
    '@keyframes wfxdrive{0%{transform:translateX(-120px)}100%{transform:translateX(480px)}}.wfx-dr{animation:wfxdrive 9s linear infinite}.wfx-dr2{animation-delay:-4.5s}' +
    '@keyframes wfxfly{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,4px)}}.wfx-fly{animation:wfxfly 12s linear infinite}' +
    '@keyframes wfxflap{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-.6)}}.wfx-flap{transform-box:fill-box;transform-origin:50% 100%;animation:wfxflap .5s ease-in-out infinite}' +
    '@keyframes wfxspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.wfx-spin{transform-box:fill-box;transform-origin:50% 50%;animation:wfxspin 3s linear infinite}' +
    '@keyframes wfxbeam{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.wfx-bm{transform-box:fill-box;transform-origin:50% 0%;animation:wfxbeam 3s ease-in-out infinite}.wfx-bm2{animation-delay:-1.5s}' +
    '@keyframes wfxblink{0%,100%{opacity:.35}50%{opacity:1}}.wfx-bl{animation:wfxblink 1.3s ease-in-out infinite}.wfx-bl2{animation-delay:-.65s}' +
    '@keyframes wfxsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.wfx-sw{transform-box:fill-box;transform-origin:50% 100%;animation:wfxsway 1.6s ease-in-out infinite}.wfx-sw2{animation-delay:-.8s}' +
    '@keyframes wfxspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.wfx-sp{animation:wfxspray 1.4s ease-out infinite}.wfx-sp2{animation-delay:.45s}' +
    '@keyframes wfxsun{0%,100%{transform:translateY(0)}50%{transform:translateY(5px)}}.wfx-sun{animation:wfxsun 6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const clouds = () => '<g class="wfx-cl"><ellipse cx="70" cy="30" rx="38" ry="9" fill="#fff" opacity=".7"/><ellipse cx="100" cy="24" rx="20" ry="7" fill="#fff" opacity=".65"/><ellipse cx="280" cy="24" rx="32" ry="8" fill="#fff" opacity=".6"/></g>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 3 * s) + '" y="' + (y - 14 * s) + '" width="' + (6 * s) + '" height="' + (14 * s) + '" fill="#5a3a22"/><circle cx="' + x + '" cy="' + (y - 24 * s) + '" r="' + (13 * s) + '" fill="' + c + '"/><circle cx="' + (x - 9 * s) + '" cy="' + (y - 18 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 9 * s) + '" cy="' + (y - 18 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  /* OSU's Edmon Low Library: long red-brick Georgian front, white columns, white cupola on top */
  const library = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')">' +
    '<rect x="0" y="-60" width="200" height="60" fill="' + BRICK + '" stroke="#5a1e14" stroke-width="1.5"/><path d="M-4 -60h208l-8 -10h-192z" fill="#e9e2d2"/>' +
    '<path d="M70 -70l30 -18l30 18z" fill="#e9e2d2" stroke="#9a9384" stroke-width="1"/>' +
    [76, 88, 100, 112, 124].map(cx => '<rect x="' + (cx - 2.5) + '" y="-60" width="5" height="44" fill="#f4efe4"/>').join("") +
    '<rect x="70" y="-16" width="60" height="5" fill="#e9e2d2"/>' +
    [10, 28, 46, 146, 164, 182].map(wx => '<rect x="' + wx + '" y="-50" width="10" height="16" fill="#2f3a4a" stroke="#fff" stroke-width="1.2"/><rect x="' + wx + '" y="-28" width="10" height="16" fill="#2f3a4a" stroke="#fff" stroke-width="1.2"/>').join("") +
    '<rect x="88" y="-118" width="24" height="30" fill="#f4efe4" stroke="#9a9384" stroke-width="1"/><rect x="92" y="-112" width="16" height="16" rx="8" fill="#2f3a4a"/><path d="M84 -118h32l-16 -18z" fill="#f4efe4" stroke="#9a9384" stroke-width="1"/><rect x="98.5" y="-150" width="3" height="16" fill="#c9a24a"/></g>';

  /* 1. The Bus pulling into the Multimodal Transportation Terminal, Hall of Fame Ave & Monroe St, Stillwater */
  function wfxbus() {
    return svg(
      '<rect width="400" height="260" fill="url(#wfx1)"/>' + clouds() +
      /* the terminal: brick parking garage with tan bands, glass waiting room at street level */
      '<rect x="40" y="62" width="320" height="104" fill="' + BRICK + '" stroke="#5a1e14" stroke-width="1.5"/>' +
      [76, 100, 124].map(yy => '<rect x="40" y="' + yy + '" width="320" height="6" fill="#d9c7a3"/>').join("") +
      [56, 100, 144, 188, 232, 276, 320].map(xx => '<rect x="' + xx + '" y="84" width="28" height="12" fill="#3a2a24"/><rect x="' + xx + '" y="108" width="28" height="12" fill="#3a2a24"/>').join("") +
      '<rect x="60" y="132" width="280" height="34" fill="#9fc3d8" stroke="#e9e2d2" stroke-width="2"/>' + [100, 140, 180, 220, 260, 300].map(xx => '<rect x="' + xx + '" y="132" width="3" height="34" fill="#e9e2d2"/>').join("") +
      /* black station sign */
      '<rect x="64" y="36" width="272" height="22" rx="2" fill="#111"/><text x="200" y="51" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MULTIMODAL TERMINAL  ·  HALL OF FAME AVE</text>' +
      '<rect x="0" y="166" width="400" height="10" fill="#c9c3b6"/><rect x="0" y="176" width="400" height="84" fill="#4a4744"/>' +
      '<path d="M0 222h400" stroke="#f2d04a" stroke-width="3" stroke-dasharray="20 14"/>' +
      /* route tabs on a stop pole */
      '<rect x="356" y="120" width="4" height="58" fill="#777"/><rect x="340" y="104" width="36" height="16" rx="2" fill="#2f6ab0"/><text x="358" y="116" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BLUE</text>' +
      '<rect x="340" y="86" width="36" height="16" rx="2" fill="#6b3fa0"/><text x="358" y="98" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">PURPLE</text>' +
      /* the bus (anim-train slides it in) */
      '<g class="anim-train">' +
        '<rect x="40" y="148" width="200" height="58" rx="8" fill="#f4f1ea" stroke="#333" stroke-width="2"/>' +
        '<rect x="40" y="188" width="200" height="8" fill="' + ORANGE + '"/><rect x="40" y="182" width="200" height="4" fill="#222"/>' +
        [54, 88, 122, 156].map(x => '<rect x="' + x + '" y="158" width="28" height="20" rx="2" fill="#9fc3d8"/>').join("") +
        '<rect x="192" y="158" width="40" height="30" rx="2" fill="#9fc3d8" stroke="#333" stroke-width="1"/>' +
        '<rect x="196" y="150" width="34" height="7" fill="#111"/><text x="213" y="156" text-anchor="middle" ' + font + ' font-size="5.5" fill="#ffb347">THE BUS</text>' +
        '<circle cx="78" cy="206" r="11" fill="#222"/><circle cx="78" cy="206" r="4" fill="#999"/><circle cx="200" cy="206" r="11" fill="#222"/><circle cx="200" cy="206" r="4" fill="#999"/>' +
        '<circle cx="236" cy="194" r="3" fill="#ffe08a" class="wfx-bl"/></g>',
      sky("wfx1", "#7fb4e0", "#dcecf6"));
  }

  /* 2. Boone Pickens Stadium at sunset: the brick west side and press box, field lights sweeping, where he played his hometown show */
  function wfxstadium() {
    return svg(
      '<rect width="400" height="260" fill="url(#wfx2)"/>' +
      '<g class="wfx-sun"><circle cx="320" cy="78" r="26" fill="#ffcf6b" opacity=".9"/></g>' +
      '<g class="wfx-bm" ><path d="M70 40l-30 120h60z" fill="#fff6c8" opacity=".18"/></g><g class="wfx-bm wfx-bm2"><path d="M330 40l-30 120h60z" fill="#fff6c8" opacity=".18"/></g>' +
      '<rect x="60" y="28" width="20" height="10" fill="#ddd"/><rect x="69" y="38" width="3" height="40" fill="#888"/><rect x="320" y="28" width="20" height="10" fill="#ddd"/><rect x="329" y="38" width="3" height="40" fill="#888"/>' +
      /* west side: tall brick stand with arched windows and the press box on top */
      '<rect x="40" y="78" width="320" height="110" fill="' + BRICK + '" stroke="#4a1a10" stroke-width="1.5"/>' +
      '<rect x="80" y="56" width="240" height="24" fill="#2b2b2b"/><rect x="86" y="62" width="228" height="10" fill="#e8c46a" opacity=".85"/>' +
      [56, 92, 128, 164, 200, 236, 272, 308].map(x => '<path d="M' + x + ' 150v-34a12 12 0 0 1 24 0v34z" fill="#2f3a4a" stroke="#e9e2d2" stroke-width="1.5"/>').join("") +
      '<rect x="40" y="96" width="320" height="6" fill="' + ORANGE + '"/><rect x="40" y="160" width="320" height="6" fill="#111"/>' +
      '<rect x="0" y="188" width="400" height="72" fill="#3d7a35"/>' + [40, 100, 160, 220, 280, 340].map(x => '<rect x="' + x + '" y="188" width="3" height="72" fill="#fff" opacity=".7"/>').join("") +
      '<rect x="126" y="206" width="148" height="22" rx="2" fill="#111"/><text x="200" y="221" text-anchor="middle" ' + font + ' font-size="10" fill="' + ORANGE + '">BOYS FROM OKLAHOMA</text>',
      sky("wfx2", "#3c3a7a", "#f2905a"));
  }

  /* 3. Cain's Ballroom, Tulsa: the old tan-brick dance hall on Main St, marquee lit, where he cut his live album */
  function wfxcains() {
    return svg(
      '<rect width="400" height="260" fill="url(#wfx3)"/>' +
      [[30, 20], [90, 40], [150, 14], [260, 30], [350, 18], [210, 50]].map(([x, y], i) => '<circle cx="' + x + '" cy="' + y + '" r="1.4" fill="#fff" class="wfx-bl' + (i % 2 ? ' wfx-bl2' : '') + '"/>').join("") +
      '<rect x="60" y="70" width="280" height="130" fill="#c8a678" stroke="#6b4a2a" stroke-width="1.5"/><rect x="60" y="62" width="280" height="10" fill="#a8865a"/>' +
      [80, 120, 250, 290].map(x => '<rect x="' + x + '" y="88" width="26" height="34" fill="#3a2a24" stroke="#f6ecd8" stroke-width="1.5"/>').join("") +
      /* tall vertical neon blade */
      '<rect x="186" y="20" width="28" height="104" rx="3" fill="#7a1e1e" stroke="#ffd36b" stroke-width="2"/>' +
      'BALLROOM'.split("").map((c, i) => '<text x="200" y="' + (36 + i * 11.5) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#ffe7a0" class="wfx-bl' + (i % 2 ? ' wfx-bl2' : '') + '">' + c + '</text>').join("") +
      /* marquee */
      '<rect x="120" y="128" width="160" height="30" fill="#1b1b1b" stroke="#ffd36b" stroke-width="2"/>' +
      Array.from({ length: 16 }, (_, i) => '<circle cx="' + (126 + i * 10) + '" cy="131" r="1.6" fill="#ffd36b" class="wfx-bl' + (i % 2 ? ' wfx-bl2' : '') + '"/>').join("") +
      '<text x="200" y="151" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">LIVE TONIGHT  ·  W. FLORES</text>' +
      '<rect x="176" y="160" width="48" height="40" fill="#3a2a24" stroke="#f6ecd8" stroke-width="1.5"/><rect x="199" y="160" width="2" height="40" fill="#f6ecd8"/>' +
      '<rect x="0" y="200" width="400" height="12" fill="#b9b2a4"/><rect x="0" y="212" width="400" height="48" fill="#3a3836"/>' +
      '<g class="wfx-dr"><rect x="0" y="222" width="70" height="20" rx="5" fill="' + SAGE + '"/><rect x="12" y="214" width="38" height="12" rx="3" fill="' + SAGE + '"/><circle cx="14" cy="244" r="6" fill="#111"/><circle cx="56" cy="244" r="6" fill="#111"/></g>',
      sky("wfx3", "#0f1630", "#3a3060"));
  }

  /* 4. The red dirt plains outside Stillwater: wheat, a windmill, a morning dove over the Cimarron Turnpike */
  function wfxplains() {
    return svg(
      '<rect width="400" height="260" fill="url(#wfx4)"/>' + clouds() +
      '<path d="M0 132q100 -10 200 0t200 0v128h-400z" fill="#c9a24a"/>' +
      Array.from({ length: 40 }, (_, i) => '<path d="M' + (5 + i * 10) + ' 150v-10" stroke="#e8c46a" stroke-width="2" class="wfx-sw' + (i % 2 ? ' wfx-sw2' : '') + '"/>').join("") +
      /* red dirt road */
      '<path d="M170 260l26 -110h8l26 110z" fill="' + DIRT + '"/>' +
      /* windmill */
      '<path d="M318 168l10 -86h6l10 86z" fill="none" stroke="#6b6b6b" stroke-width="2.5"/><path d="M322 140h18M326 112h12" stroke="#6b6b6b" stroke-width="2"/>' +
      '<g class="wfx-spin">' + [0, 45, 90, 135, 180, 225, 270, 315].map(a => '<path d="M331 80l0 -20" stroke="#cfcfcf" stroke-width="3" transform="rotate(' + a + ' 331 80)"/>').join("") + '</g><circle cx="331" cy="80" r="3" fill="#555"/><path d="M334 80h18l-4 -5" stroke="#cfcfcf" stroke-width="2.5" fill="none"/>' +
      /* turnpike with semis */
      '<rect x="0" y="176" width="400" height="20" fill="#4a4744"/><path d="M0 186h400" stroke="#f2d04a" stroke-width="1.5" stroke-dasharray="12 10"/>' +
      '<g class="wfx-dr"><rect x="0" y="166" width="60" height="18" fill="#e9e2d2" stroke="#555"/><rect x="60" y="170" width="18" height="14" rx="2" fill="' + DIRT + '"/><circle cx="10" cy="186" r="4" fill="#111"/><circle cx="48" cy="186" r="4" fill="#111"/><circle cx="70" cy="186" r="4" fill="#111"/></g>' +
      '<g class="wfx-dr wfx-dr2"><rect x="0" y="174" width="34" height="12" rx="4" fill="#6a7fa0"/><circle cx="8" cy="187" r="3.5" fill="#111"/><circle cx="27" cy="187" r="3.5" fill="#111"/></g>' +
      '<rect x="16" y="104" width="4" height="34" fill="#666"/><rect x="2" y="88" width="88" height="22" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="46" y="103" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">CIMARRON TPK</text>' +
      /* morning dove */
      '<g class="wfx-fly"><ellipse cx="0" cy="56" rx="9" ry="4" fill="#9a8e86"/><circle cx="8" cy="54" r="3" fill="#9a8e86"/><path d="M-4 55l6 -8l4 8z" fill="#7a6e66" class="wfx-flap"/></g>',
      sky("wfx4", "#f7b56a", "#fbe3b8"));
  }

  /* 5. Washington St & Elm Ave on the strip, his name on the wall, OSU's Edmon Low Library behind */
  function wfxcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#wfx5)"/>' + clouds() +
      library(120, 122, 0.8) + tree(40, 120, 1.2, "#4f8a3f") + tree(360, 120, 1.2, "#4f8a3f") +
      '<rect x="0" y="120" width="400" height="80" fill="#d9c7a3" stroke="#8a7458" stroke-width="1.5"/>' +
      Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (130 + r * 9) + 'h400" stroke="#c4b08a" stroke-width="1"/>').join("") +
      tag("WYATT FLORES", 60, 176, 34, ORANGE, -5) + tag("RED DIRT", 250, 194, 16, CREAM, -3) +
      '<g class="wfx-sp"><circle cx="300" cy="186" r="2" fill="' + ORANGE + '"/><circle cx="306" cy="182" r="1.5" fill="' + ORANGE + '"/></g><g class="wfx-sp wfx-sp2"><circle cx="296" cy="180" r="1.6" fill="' + ORANGE + '"/></g>' +
      '<rect x="0" y="200" width="400" height="12" fill="#b9b2a4"/><rect x="0" y="212" width="400" height="48" fill="#4a4744"/>' +
      '<rect x="352" y="96" width="4" height="116" fill="#555"/>' + sign(300, 96, 96, "WASHINGTON ST") + sign(310, 120, 76, "ELM AVE"),
      sky("wfx5", "#7fb4e0", "#e4f0f8"));
  }

  window.SCENES = { wfxbus, wfxstadium, wfxcains, wfxplains, wfxcorner };
})();
