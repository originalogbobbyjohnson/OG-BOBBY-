/* thejacka scenes (Regions tab: The Bay Area; Pittsburg, Contra Costa County). CSS classes prefixed jka- (the page's own anim-train is kept).
   1 Pittsburg Center: the eBART train on BART's Yellow Line pulling into the station in the Highway 4 median, hills behind.
   2 Pittsburg Marina on New York Slough: boats rocking, the old steel mill's stacks smoking across the water at dusk.
   3 El Pueblo, where he met Husalah as a young teen and the Mob Figaz began: two-story stucco rows, a boombox on the stoop playing.
   4 The Artist Records: his Oakland house studio where young rappers got tested: mic, pop filter, board lights, the Tear Gas plaque.
   5 Railroad Ave and 10th St in Old Town Pittsburg: green signs, THE JACKA tagged, Mount Diablo with its beacon behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jkaflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.95}}.jka-flk{animation:jkaflick 2.4s infinite}.jka-flk2{animation-delay:.8s}' +
    '@keyframes jkacar{from{transform:translateX(-120px)}to{transform:translateX(540px)}}.jka-car{animation:jkacar 5s linear infinite}.jka-car2{animation-delay:-2.5s}' +
    '@keyframes jkarock{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.jka-boat{transform-box:fill-box;transform-origin:50% 100%;animation:jkarock 3s ease-in-out infinite}.jka-boat2{animation-delay:-1.5s}' +
    '@keyframes jkasmoke{0%{transform:translate(0,0) scale(.6);opacity:.7}100%{transform:translate(18px,-40px) scale(1.6);opacity:0}}.jka-smk{transform-box:fill-box;transform-origin:50% 50%;animation:jkasmoke 4s ease-out infinite}.jka-smk2{animation-delay:-2s}' +
    '@keyframes jkawave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.jka-wave{animation:jkawave 3s ease-in-out infinite}' +
    '@keyframes jkanote{0%{transform:translate(0,0);opacity:1}100%{transform:translate(14px,-40px);opacity:0}}.jka-note{animation:jkanote 2s ease-out infinite}.jka-note2{animation-delay:-1s}' +
    '@keyframes jkameter{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}.jka-mt{transform-box:fill-box;transform-origin:50% 100%;animation:jkameter .7s ease-in-out infinite}.jka-mt2{animation-delay:-.35s}.jka-mt3{animation-delay:-.2s}' +
    '@keyframes jkabeam{0%,100%{opacity:.15}50%{opacity:1}}.jka-beam{animation:jkabeam 2s ease-in-out infinite}' +
    '@keyframes jkaspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jka-sp{animation:jkaspray 1.4s ease-out infinite}.jka-sp2{animation-delay:.5s}' +
    '@keyframes jkabird{0%{transform:translate(0,0)}100%{transform:translate(440px,-16px)}}.jka-bird{animation:jkabird 11s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="50" height="12" rx="5" fill="' + c + '"/><rect x="' + (x + 10) + '" y="' + (y - 7) + '" width="28" height="9" rx="3" fill="' + c + '"/><circle cx="' + (x + 11) + '" cy="' + (y + 12) + '" r="4.5" fill="#111"/><circle cx="' + (x + 39) + '" cy="' + (y + 12) + '" r="4.5" fill="#111"/></g>';
  const GOLD = "#e8b84a", RED = "#d8323c", CREAM = "#f4ead2", YL = "#ffe800";
  const diablo = (y, c) => '<path d="M0 ' + (y + 30) + 'L90 ' + (y + 12) + 'L150 ' + (y - 4) + 'L190 ' + (y - 22) + 'L214 ' + (y - 30) + 'L236 ' + (y - 20) + 'L280 ' + (y - 2) + 'L340 ' + (y + 10) + 'L400 ' + (y + 20) + 'V' + (y + 60) + 'H0z" fill="' + c + '"/>';

  /* 1. Pittsburg Center eBART */
  function jkastation() {
    const wins = Array.from({ length: 7 }, (_, i) => '<rect x="' + (60 + i * 40) + '" y="128" width="28" height="22" rx="3" fill="#1d2a38"/>').join("");
    const train = '<g class="anim-train"><path d="M30 120h300q34 0 44 24v34H30z" fill="#f4f6f8" stroke="#8a96a2" stroke-width="2"/>' + wins +
      '<rect x="30" y="156" width="344" height="8" fill="#1f5fae"/><rect x="30" y="164" width="344" height="4" fill="' + YL + '"/>' +
      '<path d="M336 126h18q12 4 16 18h-34z" fill="#1d2a38"/><circle cx="364" cy="170" r="3" fill="#fff6c2"/>' +
      '<circle cx="70" cy="180" r="7" fill="#222"/><circle cx="110" cy="180" r="7" fill="#222"/><circle cx="290" cy="180" r="7" fill="#222"/><circle cx="330" cy="180" r="7" fill="#222"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jka1)"/>' + diablo(60, "#8a7a5a") +
      '<rect x="0" y="96" width="400" height="16" fill="#9aa0a4"/>' + car("jka-car", 0, 86, RED) + car("jka-car jka-car2", 0, 86, "#e8e8e8") +
      '<rect x="0" y="112" width="400" height="8" fill="#6a6e72"/>' +
      '<rect x="0" y="180" width="400" height="10" fill="#4a4e52"/><rect x="0" y="188" width="400" height="72" fill="#c9c2b0"/><rect x="0" y="188" width="400" height="6" fill="' + YL + '"/>' +
      train +
      '<rect x="40" y="34" width="4" height="62" fill="#555"/><rect x="236" y="34" width="4" height="62" fill="#555"/>' +
      '<rect x="20" y="12" width="240" height="30" rx="3" fill="#111"/><circle cx="40" cy="27" r="10" fill="' + YL + '"/><text x="40" y="32" text-anchor="middle" ' + font + ' font-size="13" fill="#111">Y</text>' +
      '<text x="58" y="33" ' + font + ' font-size="17" fill="#fff">Pittsburg Center</text>' +
      '<rect x="292" y="200" width="90" height="40" rx="3" fill="#1f5fae"/><text x="337" y="218" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">BART</text><text x="337" y="232" text-anchor="middle" ' + font + ' font-size="8" fill="' + YL + '">YELLOW LINE</text>',
      sky("jka1", "#7ab8e8", "#f4dfb0"));
  }

  /* 2. Pittsburg Marina, New York Slough */
  function jkaslough() {
    const boat = (x, y, c, cls) => '<g class="jka-boat ' + cls + '"><path d="M' + x + ' ' + y + 'h60l-8 14h-46z" fill="#f4f6f8" stroke="#555" stroke-width="1.5"/><rect x="' + (x + 16) + '" y="' + (y - 12) + '" width="24" height="12" fill="' + c + '"/><path d="M' + (x + 30) + ' ' + (y - 12) + 'v-44" stroke="#ddd" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jka2)"/>' +
      '<circle cx="80" cy="66" r="20" fill="#ffd27a"/>' +
      '<g class="jka-bird"><path d="M10 50q6-6 12 0q6-6 12 0" stroke="#3a2a2a" stroke-width="2" fill="none"/></g>' +
      '<path d="M0 112q120-14 240-4t160 0v20H0z" fill="#6a6a7a"/>' +
      '<rect x="230" y="70" width="150" height="44" fill="#5a5a66"/><rect x="250" y="56" width="60" height="16" fill="#5a5a66"/>' +
      [272, 300, 330, 358].map((x, i) => '<rect x="' + x + '" y="' + (26 + i * 4) + '" width="10" height="' + (50 - i * 4) + '" fill="#4a4a54"/><g class="jka-smk' + (i % 2 ? " jka-smk2" : "") + '"><circle cx="' + (x + 5) + '" cy="' + (22 + i * 4) + '" r="7" fill="#d8d8de"/></g>').join("") +
      '<rect x="0" y="120" width="400" height="140" fill="#2f5a7a"/>' +
      '<g class="jka-wave">' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 46) + ' ' + (140 + (i % 3) * 22) + 'q12-6 24 0" stroke="#8fc0e0" stroke-width="2" fill="none"/>').join("") + '</g>' +
      '<rect x="0" y="210" width="400" height="10" fill="#8a6a4a"/>' + Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 48 + 10) + '" y="206" width="6" height="40" fill="#6a4a30"/>').join("") +
      boat(30, 186, RED, "") + boat(150, 190, "#1f5fae", "jka-boat2") + boat(270, 186, GOLD, "") +
      '<rect x="142" y="226" width="116" height="22" rx="2" fill="#0f3a5a" stroke="#fff" stroke-width="1.5"/><text x="200" y="241" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">PITTSBURG MARINA</text>',
      sky("jka2", "#e8806a", "#ffd7a0"));
  }

  /* 3. El Pueblo */
  function jkapueblo() {
    const unit = (x) => '<g><rect x="' + x + '" y="80" width="120" height="96" fill="#e8d2a8"/><path d="M' + (x - 6) + ' 82h132l-10-14H' + (x + 4) + 'z" fill="#8a5a3a"/>' +
      '<rect x="' + (x + 10) + '" y="94" width="26" height="20" fill="#3b5a72"/><rect x="' + (x + 84) + '" y="94" width="26" height="20" fill="#3b5a72"/>' +
      '<rect x="' + (x + 10) + '" y="134" width="26" height="20" fill="#3b5a72"/><rect x="' + (x + 50) + '" y="132" width="22" height="44" fill="#7a4a2a"/><rect x="' + (x + 84) + '" y="134" width="26" height="20" fill="#3b5a72"/>' +
      '<rect x="' + x + '" y="122" width="120" height="4" fill="#b89a70"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jka3)"/>' +
      unit(10) + unit(140) + unit(270) +
      '<rect x="0" y="176" width="400" height="84" fill="#9a9488"/><rect x="0" y="176" width="400" height="8" fill="#c9c2b0"/>' +
      '<rect x="0" y="216" width="400" height="44" fill="#4a4a50"/>' +
      '<rect x="150" y="186" width="100" height="24" rx="2" fill="#6a3a24"/><text x="200" y="203" text-anchor="middle" ' + font + ' font-size="13" fill="' + CREAM + '">EL PUEBLO</text>' +
      '<rect x="52" y="160" width="40" height="22" rx="4" fill="#222"/><circle cx="62" cy="171" r="7" fill="#555"/><circle cx="82" cy="171" r="7" fill="#555"/><rect x="60" y="154" width="24" height="5" rx="2" fill="#888"/>' +
      '<g class="jka-note"><text x="90" y="150" font-size="24" fill="' + RED + '">&#9834;</text></g><g class="jka-note jka-note2"><text x="66" y="146" font-size="22" fill="#1f5fae">&#9835;</text></g>' +
      '<g transform="translate(300 182)"><circle cx="0" cy="18" r="10" fill="none" stroke="#222" stroke-width="3"/><circle cx="34" cy="18" r="10" fill="none" stroke="#222" stroke-width="3"/><path d="M0 18l12-16h16l6 16M12 2l-4-6" stroke="' + RED + '" stroke-width="3" fill="none"/></g>',
      sky("jka3", "#8fc8f0", "#f4ead2"));
  }

  /* 4. The Artist Records studio */
  function jkastudio() {
    const meters = Array.from({ length: 10 }, (_, i) => '<rect class="jka-mt' + (i % 3 === 1 ? " jka-mt2" : i % 3 === 2 ? " jka-mt3" : "") + '" x="' + (232 + i * 13) + '" y="150" width="8" height="30" fill="' + (i > 7 ? RED : i > 5 ? GOLD : "#3ad06a") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="#1a1612"/>' +
      Array.from({ length: 8 }, (_, r) => Array.from({ length: 10 }, (_, c) => '<path d="M' + (c * 40) + ' ' + (r * 24) + 'h20v12h-20zM' + (c * 40 + 20) + ' ' + (r * 24 + 12) + 'h20v12h-20z" fill="#2a2420"/>').join("")).join("") +
      '<rect x="20" y="30" width="170" height="150" rx="4" fill="#2a3442" stroke="#5a6472" stroke-width="3"/><rect x="28" y="38" width="154" height="134" fill="#33404f" opacity=".7"/>' +
      '<rect x="102" y="96" width="4" height="84" fill="#9aa0a6"/><rect x="92" y="78" width="24" height="30" rx="12" fill="#2b2b2b" stroke="#888" stroke-width="2"/><circle cx="104" cy="118" r="14" fill="none" stroke="#666" stroke-width="2"/><circle cx="104" cy="118" r="12" fill="#444" opacity=".5"/>' +
      '<rect x="36" y="44" width="70" height="16" rx="2" fill="' + RED + '" class="jka-flk"/><text x="71" y="56" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">ON AIR</text>' +
      '<rect x="214" y="130" width="176" height="60" rx="4" fill="#2b2b30" stroke="#55555c" stroke-width="2"/>' + meters +
      Array.from({ length: 12 }, (_, i) => '<circle cx="' + (226 + i * 14) + '" cy="140" r="3" fill="#aaa"/>').join("") +
      '<rect x="244" y="30" width="120" height="84" rx="4" fill="#3a2a14" stroke="' + GOLD + '" stroke-width="3"/><circle cx="304" cy="66" r="28" fill="' + GOLD + '"/><circle cx="304" cy="66" r="10" fill="#3a2a14"/><circle cx="304" cy="66" r="3" fill="' + GOLD + '"/>' +
      '<text x="304" y="108" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '">TEAR GAS</text>' +
      '<rect x="20" y="200" width="360" height="40" rx="3" fill="#120f0c" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="226" text-anchor="middle" ' + font + ' font-size="16" fill="' + CREAM + '">THE ARTIST RECORDS</text>');
  }

  /* 5. Railroad Ave and 10th St, Old Town Pittsburg */
  function jkacorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#jka5)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + ((i * 53) % 400) + '" cy="' + (10 + (i * 17) % 40) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      diablo(80, "#2a2238") +
      '<rect x="211" y="44" width="6" height="8" fill="#888"/><g class="jka-beam"><circle cx="214" cy="44" r="5" fill="#ff5a3a"/><path d="M214 44L110 26L110 40zM214 44L318 26L318 40z" fill="#ff8a6a" opacity=".35"/></g>' +
      '<rect x="0" y="116" width="400" height="104" fill="#5a4a3a"/>' +
      Array.from({ length: 8 }, (_, r) => Array.from({ length: 14 }, (_, c) => '<rect x="' + (c * 30 + (r % 2 ? 15 : 0) - 10) + '" y="' + (116 + r * 13) + '" width="28" height="11" fill="#6a5644"/>').join("")).join("") +
      tag("THE JACKA", 24, 172, 40, GOLD, -5) + tag("MOB FIGAZ", 40, 208, 22, RED, -3) + tag("THE ARTIST", 186, 206, 18, CREAM, 4) +
      '<g class="jka-sp"><circle cx="250" cy="150" r="4" fill="' + GOLD + '" opacity=".7"/></g><g class="jka-sp jka-sp2"><circle cx="258" cy="160" r="3" fill="' + RED + '" opacity=".7"/></g>' +
      '<rect x="0" y="220" width="400" height="40" fill="#3a3d42"/><rect x="0" y="220" width="400" height="5" fill="#c9c4b4"/>' +
      car("jka-car", 0, 240, "#c9a227") +
      '<rect x="352" y="90" width="5" height="132" fill="#2f3a2f"/>' + sign(294, 92, 104, "Railroad Av") + sign(312, 116, 76, "10th St"),
      sky("jka5", "#0e0c22", "#5a3a5a"));
  }

  window.SCENES = { jkastation, jkaslough, jkapueblo, jkastudio, jkacorner };
})();
