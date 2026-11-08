/* saucewalka scenes (Regions tab: Houston + Texas; Southwest Houston / the Missouri City side, where the Houston Press says he was known as A. Walk).
   CSS classes prefixed sw- (the page's own anim-train is kept).
   1 METRO 47 Hillcroft bus pulling into the Hillcroft Transit Center by the Southwest Freeway: the canopy, the freeway sign, the METRO flag.
   2 Splashtown: the Sauce Twinz' "Splashtown" water-park world (his song Splashtown State of Mind): slide towers, a rider splashing down, the wave pool.
   3 Ghetto Gospel: a little storefront church at night, stained glass glowing, GHETTO GOSPEL on the marquee board, the choir hum.
   4 The Sauce Factory: his crew/label as a real factory, a conveyor of hot-sauce bottles under the neon, red sauce dripping from the sign.
   5 Hillcroft Ave and Beechnut St: green signs, SAUCE WALKA tagged on the wall, the BE SOMEONE rail bridge lit up far off behind. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes swdrip{0%{transform:translateY(0);opacity:1}80%{opacity:1}100%{transform:translateY(26px);opacity:0}}.sw-drip{animation:swdrip 1.6s ease-in infinite}.sw-drip2{animation-delay:-.55s}.sw-drip3{animation-delay:-1.1s}' +
    '@keyframes swslide{0%{transform:translate(0,0)}100%{transform:translate(120px,96px)}}.sw-rider{animation:swslide 2.4s ease-in infinite}' +
    '@keyframes swsplash{0%,60%{transform:scale(0);opacity:0}70%{opacity:1}100%{transform:scale(1.2);opacity:0}}.sw-splash{transform-box:fill-box;transform-origin:50% 100%;animation:swsplash 2.4s ease-out infinite}' +
    '@keyframes swwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.sw-wave{animation:swwave 2.4s ease-in-out infinite}.sw-wave2{animation-delay:-1.2s}' +
    '@keyframes swglow{0%,100%{opacity:.6}50%{opacity:1}}.sw-glow{animation:swglow 2.2s ease-in-out infinite}.sw-glow2{animation-delay:-1.1s}' +
    '@keyframes swbelt{from{transform:translateX(0)}to{transform:translateX(60px)}}.sw-belt{animation:swbelt 2.4s linear infinite}' +
    '@keyframes swflick{0%,92%,100%{opacity:1}94%{opacity:.3}96%{opacity:1}97%{opacity:.4}}.sw-neon{animation:swflick 4s linear infinite}' +
    '@keyframes swnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-40px);opacity:0}}.sw-note{animation:swnote 3s ease-out infinite}.sw-note2{animation-delay:-1.5s}' +
    '@keyframes swspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sw-spr{animation:swspray 1.4s ease-out infinite}.sw-spr2{animation-delay:.45s}' +
    '@keyframes swtrain{from{transform:translateX(-160px)}to{transform:translateX(420px)}}.sw-train{animation:swtrain 9s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11.5" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const METRO = "#1f4e79", RED = "#ff3b30", GOLD = "#ffd23f", AQUA = "#3fd0ff", CREAM = "#fff3d6";
  const person = (x, y, shirt, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')"><rect x="-7" y="-2" width="14" height="22" rx="4" fill="' + shirt + '"/><circle cx="0" cy="-9" r="7" fill="#6b4a33"/><rect x="-6" y="20" width="5" height="12" fill="#22262e"/><rect x="1" y="20" width="5" height="12" fill="#22262e"/></g>';
  /* a sauce bottle: tall neck, red body, cream label */
  const bottle = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + (s || 1) + ')"><rect x="-4" y="-34" width="8" height="10" rx="1" fill="#222"/><path d="M-4 -24h8l6 10v26h-20v-26z" fill="' + RED + '" stroke="#7a1410" stroke-width="1.2"/><rect x="-9" y="-6" width="18" height="10" rx="1" fill="' + CREAM + '"/><path d="M-6 -1h12" stroke="' + RED + '" stroke-width="2"/></g>';

  /* 1. METRO 47 Hillcroft at the Hillcroft Transit Center */
  function swstation() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (62 + i * 36) + '" y="148" width="30" height="22" rx="3" fill="#1d2833"/>').join("");
    const bus = '<g class="anim-train"><rect x="28" y="138" width="318" height="70" rx="10" fill="#f4f5f3" stroke="#8f979e" stroke-width="2"/>' + win +
      '<rect x="34" y="148" width="22" height="48" rx="2" fill="#1d2833"/><rect x="28" y="178" width="318" height="8" fill="' + METRO + '"/><rect x="28" y="188" width="318" height="3" fill="#e31837"/>' +
      '<rect x="32" y="140" width="120" height="10" rx="2" fill="#111"/><text x="92" y="148" text-anchor="middle" ' + font + ' font-size="7.5" fill="#ffb84a">47 HILLCROFT</text>' +
      '<circle cx="80" cy="210" r="12" fill="#222"/><circle cx="80" cy="210" r="5" fill="#9aa1a8"/><circle cx="294" cy="210" r="12" fill="#222"/><circle cx="294" cy="210" r="5" fill="#9aa1a8"/>' +
      '<circle cx="32" cy="198" r="3.5" fill="#fff6c2"/></g>';
    /* the transit-center canopy: a long shallow roof on posts */
    const canopy = '<path d="M0 74h400v10h-400z" fill="#c8ccd2"/><path d="M0 70l20 -8h360l20 8z" fill="#9aa4ae"/>' + [20, 90, 160, 230, 300, 370].map(x => '<rect x="' + x + '" y="84" width="6" height="50" fill="#7d8792"/>').join("") +
      '<rect x="150" y="90" width="110" height="20" rx="2" fill="' + METRO + '" stroke="#fff" stroke-width="1.2"/><text x="205" y="104" text-anchor="middle" ' + font + ' font-size="8.5" fill="#fff">HILLCROFT TRANSIT CTR</text>';
    return svg('<rect width="400" height="260" fill="url(#sws1)"/>' + stars(8) +
      '<rect x="0" y="40" width="400" height="12" fill="#5a6068"/><rect x="0" y="52" width="400" height="4" fill="#3a3f46"/>' +
      '<rect x="232" y="12" width="150" height="26" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="307" y="29" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">US-59 SOUTHWEST FWY</text>' +
      canopy +
      '<rect x="0" y="128" width="400" height="10" fill="#cfc9bd"/><rect x="0" y="138" width="400" height="122" fill="#55565c"/><path d="M0 236h400" stroke="#f2f2f2" stroke-width="3" stroke-dasharray="22 16"/>' +
      bus +
      '<rect x="374" y="98" width="5" height="118" fill="#6b7178"/><rect x="350" y="72" width="48" height="50" rx="3" fill="' + METRO + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="374" y="86" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">METRO</text><rect x="360" y="92" width="28" height="22" rx="3" fill="#fff"/><text x="374" y="108" text-anchor="middle" ' + font + ' font-size="13" fill="' + METRO + '">47</text>',
      sky("sws1", "#1a2a52", "#f0a070"));
  }

  /* 2. Splashtown: slide towers, a rider splashing down, the wave pool */
  function swsplash() {
    const tower = '<rect x="40" y="40" width="70" height="8" fill="#e8e0d0"/>' + [44, 70, 100].map(x => '<rect x="' + x + '" y="48" width="6" height="140" fill="#d0c8b8"/>').join("") +
      '<path d="M44 80h62M44 120h62M44 160h62" stroke="#d0c8b8" stroke-width="4"/><path d="M40 40l35 -22l35 22z" fill="' + RED + '"/>';
    const slide1 = '<path d="M106 50q80 10 110 70t100 70" stroke="' + GOLD + '" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M106 50q80 10 110 70t100 70" stroke="#fff3b0" stroke-width="4" fill="none" opacity=".6"/>';
    const slide2 = '<path d="M106 92q50 30 30 70t60 40" stroke="' + AQUA + '" stroke-width="14" fill="none" stroke-linecap="round"/><path d="M106 92q50 30 30 70t60 40" stroke="#d8f6ff" stroke-width="3" fill="none" opacity=".6"/>';
    const rider = '<g class="sw-rider"><circle cx="150" cy="70" r="7" fill="#6b4a33"/><rect x="143" y="76" width="14" height="10" rx="3" fill="' + RED + '"/></g>';
    const pool = '<rect x="0" y="196" width="400" height="64" fill="#1fa6d6"/>' +
      '<g class="sw-wave"><path d="M-20 206q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bff0ff" stroke-width="3" fill="none"/></g>' +
      '<g class="sw-wave sw-wave2"><path d="M-20 232q20 -8 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#bff0ff" stroke-width="3" fill="none" opacity=".7"/></g>';
    const splash = '<g class="sw-splash"><path d="M300 198q-10 -26 -4 -36M310 198q0 -30 6 -40M320 198q10 -24 20 -30M292 198q-16 -14 -26 -16" stroke="#e8fbff" stroke-width="4" fill="none" stroke-linecap="round"/></g>';
    return svg('<rect width="400" height="260" fill="url(#sws2)"/>' +
      '<circle cx="340" cy="44" r="22" fill="#fff3b0"/>' +
      '<ellipse cx="250" cy="60" rx="50" ry="14" fill="#fff" opacity=".7"/><ellipse cx="80" cy="20" rx="40" ry="10" fill="#fff" opacity=".6"/>' +
      tower + slide2 + slide1 + rider + pool + splash +
      '<rect x="150" y="180" width="110" height="18" rx="3" fill="' + RED + '" stroke="#fff" stroke-width="1.5"/><text x="205" y="194" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="2" fill="#fff">SPLASH</text>' +
      person(40, 222, GOLD, 0.8) + person(370, 224, AQUA, 0.8),
      sky("sws2", "#3fa6f0", "#c8ecff"));
  }

  /* 3. Ghetto Gospel: the storefront church at night */
  function swgospel() {
    const glass = (x, c1, c2) => '<g class="sw-glow ' + (x > 200 ? "sw-glow2" : "") + '"><path d="M' + x + ' 150v-40q16 -20 32 0v40z" fill="' + c1 + '"/><path d="M' + (x + 16) + ' 92v58M' + x + ' 124h32" stroke="#2a1a14" stroke-width="2"/><circle cx="' + (x + 16) + '" cy="110" r="5" fill="' + c2 + '"/></g>';
    const notes = cls => '<g class="sw-note ' + cls + '"><text x="96" y="96" font-size="16" fill="' + GOLD + '">&#9834;</text><text x="300" y="90" font-size="14" fill="' + GOLD + '">&#9835;</text></g>';
    return svg('<rect width="400" height="260" fill="url(#sws3)"/>' + stars(22) +
      '<circle cx="60" cy="40" r="14" fill="#f4f1e0" opacity=".9"/>' +
      '<rect x="0" y="120" width="70" height="80" fill="#2a2f3a"/><rect x="330" y="110" width="70" height="90" fill="#262b36"/>' +
      '<rect x="80" y="70" width="240" height="130" fill="#e6dcc6"/><path d="M80 70h240v10h-240z" fill="#b8a888"/>' +
      '<path d="M190 70v-30h20v30zM186 52h28v8h-28z" fill="#f4efe2"/>' +
      glass(96, RED, GOLD) + glass(140, AQUA, RED) + glass(228, GOLD, AQUA) + glass(272, RED, AQUA) +
      '<rect x="182" y="140" width="36" height="60" fill="#5a2a1c"/><path d="M200 140v60" stroke="#3a1a10" stroke-width="2"/><rect x="186" y="144" width="28" height="20" fill="#ffd36b" opacity=".45"/>' +
      '<rect x="100" y="206" width="200" height="34" rx="3" fill="#15151a" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="229" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="17" letter-spacing="3" fill="' + CREAM + '">GHETTO GOSPEL</text>' +
      '<rect x="0" y="240" width="400" height="20" fill="#3c3c44"/>' + notes("") + notes("sw-note2"),
      sky("sws3", "#0c0a1e", "#3a2448"));
  }

  /* 4. The Sauce Factory: the conveyor of sauce bottles under the dripping neon */
  function swfactory() {
    const belt = '<rect x="0" y="176" width="400" height="12" fill="#3a3f48"/>' + Array.from({ length: 11 }, (_, i) => '<circle cx="' + (i * 40) + '" cy="194" r="7" fill="#5a606a" stroke="#2a2e34" stroke-width="2"/>').join("") +
      '<g class="sw-belt">' + Array.from({ length: 9 }, (_, i) => bottle(-60 + i * 60, 176, 1.1)).join("") + '</g>';
    const drips = cls => '<g class="sw-drip ' + cls + '">' + [120, 168, 214, 262].map((x, i) => '<path d="M' + (x + i * 3) + ' 98q-4 8 0 12q4 -4 0 -12z" fill="' + RED + '"/>').join("") + '</g>';
    return svg('<rect width="400" height="260" fill="url(#sws4)"/>' +
      [0, 1, 2, 3, 4, 5, 6].map(i => '<rect x="' + (i * 60) + '" y="0" width="58" height="160" fill="#2a2228" stroke="#1a1418" stroke-width="2"/>').join("") +
      '<path d="M0 20h400M0 140h400" stroke="#4a3a40" stroke-width="3"/>' +
      [70, 200, 330].map(x => '<g><rect x="' + (x - 1) + '" y="0" width="2" height="18" fill="#555"/><path d="M' + (x - 12) + ' 18h24l-6 8h-12z" fill="#666"/><path d="M' + (x - 30) + ' 26l24 0l30 120h-84z" fill="#ffe9a8" opacity=".06"/></g>').join("") +
      '<g class="sw-neon"><rect x="70" y="54" width="260" height="44" rx="8" fill="none" stroke="' + RED + '" stroke-width="4"/>' +
      '<text x="200" y="86" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" letter-spacing="2" fill="' + RED + '" stroke="#ffd0c8" stroke-width=".8">SAUCE FACTORY</text></g>' +
      drips("") + drips("sw-drip2") + drips("sw-drip3") +
      '<rect x="0" y="160" width="400" height="100" fill="#1c1a1e"/>' + belt +
      '<rect x="0" y="208" width="400" height="52" fill="#141216"/>' +
      '<path d="M330 208h50v-40h-50z" fill="#3a3f48"/><rect x="336" y="174" width="38" height="12" rx="2" fill="#0b0b0e"/><text x="355" y="183" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '">TSF</text>' +
      '<circle cx="345" cy="198" r="3" fill="' + AQUA + '" class="sw-glow"/><circle cx="356" cy="198" r="3" fill="' + RED + '" class="sw-glow sw-glow2"/>',
      sky("sws4", "#140808", "#2a1414"));
  }

  /* 5. Hillcroft Ave and Beechnut St: the BE SOMEONE bridge far off */
  function swcorner() {
    const brick = Array.from({ length: 10 }, (_, r) => Array.from({ length: 12 }, (_, c) => '<rect x="' + (c * 34 + (r % 2 ? -17 : 0)) + '" y="' + (120 + r * 14) + '" width="32" height="12" fill="' + ((r * 7 + c * 3) % 5 ? "#7a3a30" : "#6a3028") + '"/>').join("")).join("");
    /* the rail bridge: dark truss deck on piers, BE SOMEONE painted in white along it, a freight train crossing */
    const bridge = '<rect x="0" y="70" width="400" height="16" fill="#3a3a40"/><path d="M0 70h400" stroke="#55555c" stroke-width="2"/>' +
      [10, 90, 170, 250, 330].map(x => '<rect x="' + x + '" y="86" width="12" height="20" fill="#2e2e34"/>').join("") +
      '<text x="250" y="83" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="13" letter-spacing="4" fill="#fff">BE SOMEONE</text>' +
      '<g class="sw-train">' + [0, 1, 2].map(i => '<rect x="' + (150 + i * 44) + '" y="56" width="40" height="14" rx="1" fill="' + ["#8a5a2a", "#4a6a8a", "#7a2a2a"][i] + '"/>').join("") + '</g>';
    return svg('<rect width="400" height="260" fill="url(#sws5)"/>' + stars(10) +
      '<path d="M160 70v-20h14v20zM360 70v-34h16v34zM300 70v-16h12v16z" fill="#1a1f33"/>' + bridge +
      '<rect x="0" y="104" width="400" height="16" fill="#4a5058"/>' + brick +
      tag("SAUCE", 104, 186, 52, RED, -6) + tag("WALKA", 196, 222, 40, GOLD, -4) + tag("ON SAUCE", 30, 246, 18, AQUA, 4) +
      '<g transform="translate(378 250)"><rect x="-6" y="-24" width="12" height="24" rx="3" fill="' + RED + '"/><rect x="-3" y="-30" width="6" height="6" fill="#aaa"/>' +
      '<circle class="sw-spr" cx="0" cy="-36" r="4" fill="' + GOLD + '" opacity=".7"/><circle class="sw-spr sw-spr2" cx="4" cy="-38" r="3" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="60" y="34" width="5" height="200" fill="#6b7178"/>' + sign(4, 22, 112, "HILLCROFT AVE") + sign(12, 48, 112, "BEECHNUT ST"),
      sky("sws5", "#1a1c40", "#e07a5a"));
  }

  window.SCENES = { swstation: swstation, swsplash: swsplash, swgospel: swgospel, swfactory: swfactory, swcorner: swcorner };
})();
