/* Lil Peep game (NYC map, Long Island: Long Beach). Rest in Power, Lil Peep. 400 x 260 SVGs.
   0. Meadowbrook State Parkway south over the marsh: the green sign for Exit M10, Loop Pkwy to Point Lookout and Long Beach.
   1. Lindell Elementary on Lindell Blvd, across from his mom's apartment, where he played trombone and tuba.
   2. Long Beach High School in Lido Beach, Marines blue and gold.
   3. Portobello Road, London, the pastel houses where he lived after the 2017 tour.
   4. Lindell Blvd and W Park Av, the Granada Towers down the block toward the ocean, LIL PEEP tagged on the wall.
   All scene CSS classes are prefixed lp- so they never clash with the game page. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes lpcar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.lp-car{animation:lpcar 6.5s linear infinite}.lp-car2{animation-delay:-3.2s}' +
    '@keyframes lpcarL{from{transform:translateX(490px)}to{transform:translateX(-120px)}}.lp-carl{animation:lpcarL 8s linear infinite}' +
    '@keyframes lptw{0%,100%{opacity:.25}50%{opacity:1}}.lp-tw{animation:lptw 2s ease-in-out infinite}.lp-tw2{animation-delay:.7s}.lp-tw3{animation-delay:1.4s}' +
    '@keyframes lpnote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(30px,-70px);opacity:0}}.lp-note{transform-box:fill-box;animation:lpnote 3.2s ease-out infinite}.lp-note2{animation-delay:-1.1s}.lp-note3{animation-delay:-2.2s}' +
    '@keyframes lpflag{0%,100%{transform:skewY(0deg)}50%{transform:skewY(-6deg)}}.lp-flag{transform-box:fill-box;transform-origin:0% 50%;animation:lpflag 1.5s ease-in-out infinite}' +
    '@keyframes lpgull{0%{transform:translate(-40px,0)}50%{transform:translate(220px,-14px)}100%{transform:translate(480px,0)}}.lp-gull{animation:lpgull 9s linear infinite}' +
    '@keyframes lpwave{0%,100%{transform:translateX(0)}50%{transform:translateX(-14px)}}.lp-wave{animation:lpwave 3s ease-in-out infinite}' +
    '@keyframes lpflick{0%,100%{opacity:1}46%{opacity:.8}50%{opacity:.3}54%{opacity:.9}}.lp-flk{animation:lpflick 2.6s infinite}' +
    '@keyframes lpsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.lp-sway{transform-box:fill-box;transform-origin:50% 0%;animation:lpsway 2.2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="lp-tw lp-tw' + (i % 3 + 1) + '" cx="' + ((i * 89 + 17) % 400) + '" cy="' + (8 + (i * 47) % 70) + '" r="' + (i % 3 ? 1 : 1.6) + '" fill="#fff"/>'; return s; };
  const PINK = "#ff8fc7", BLUE = "#9bd6ff", NAVY = "#1b2c6b", GOLD = "#f2c230", CREAM = "#f6efe2";
  const gull = '<g class="lp-gull"><path d="M20 40q6-6 12 0q6-6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g>';

  /* 0. Meadowbrook State Pkwy south at dusk over the salt marsh; overhead sign for Exit M10, a car rolls in under it */
  function parkway() {
    return svg(
      '<rect width="400" height="260" fill="url(#lps0)"/>' + stars(8) +
      '<circle cx="312" cy="128" r="22" fill="#ffb37a" opacity=".85"/>' +
      /* marsh + water */
      '<rect x="0" y="140" width="400" height="30" fill="#5a6a8a"/><g class="lp-wave"><path d="M0 150q20-4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#c9d6ee" stroke-width="1.5" fill="none" opacity=".6"/></g>' +
      '<path d="M0 160q30-14 60 0q30-12 70 0q30-14 60 0q34-12 70 0q30-14 70 0q30-10 70 0v14H0z" fill="#6b7a3a"/>' +
      /* road */
      '<path d="M0 172h400v88H0z" fill="#3a3c40"/><path d="M0 172h400" stroke="#9a9a9a" stroke-width="4"/>' +
      '<path d="M0 204h400" stroke="#f2f2f2" stroke-width="2" stroke-dasharray="18 14"/><path d="M0 238h400" stroke="#f4c430" stroke-width="3"/>' +
      '<g class="anim-train"><rect x="40" y="180" width="70" height="20" rx="6" fill="' + PINK + '"/><rect x="52" y="174" width="40" height="12" rx="4" fill="#ffc6e2"/><rect x="58" y="176" width="12" height="8" fill="#cfe2f5"/><rect x="74" y="176" width="12" height="8" fill="#cfe2f5"/><circle cx="56" cy="200" r="6" fill="#111"/><circle cx="96" cy="200" r="6" fill="#111"/><rect x="104" y="184" width="6" height="5" fill="#fff6c2"/></g>' +
      '<g class="lp-carl"><rect x="0" y="212" width="54" height="16" rx="5" fill="#c9ced6"/><circle cx="12" cy="228" r="5" fill="#111"/><circle cx="42" cy="228" r="5" fill="#111"/><rect x="1" y="215" width="5" height="4" fill="#ff8a80"/></g>' +
      /* gantry */
      '<rect x="30" y="34" width="7" height="140" fill="#7b6a55"/><rect x="363" y="34" width="7" height="140" fill="#7b6a55"/><rect x="30" y="34" width="340" height="6" fill="#7b6a55"/>' +
      '<rect x="56" y="44" width="122" height="64" rx="4" fill="#0b6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="117" y="66" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Meadowbrook</text><text x="117" y="80" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">State Pkwy</text>' +
      '<text x="117" y="98" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">SOUTH</text>' +
      '<rect x="194" y="44" width="160" height="64" rx="4" fill="#0b6b3a" stroke="#fff" stroke-width="2"/>' +
      '<rect x="286" y="32" width="68" height="15" rx="2" fill="#0b6b3a" stroke="#fff" stroke-width="1.5"/><text x="320" y="43" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">EXIT M10</text>' +
      '<text x="206" y="64" ' + font + ' font-size="13" fill="#fff">Loop Pkwy</text>' +
      '<text x="206" y="80" ' + font + ' font-size="10" fill="#fff">Point Lookout</text>' +
      '<text x="206" y="96" ' + font + ' font-size="10" fill="#fff">Long Beach</text>' +
      '<path d="M326 70l14 14M340 70v14h-14" stroke="#fff" stroke-width="3" fill="none" stroke-linejoin="round"/>' + gull,
      sky("lps0", "#1c1940", "#e98a9a"));
  }

  /* 1. Lindell Elementary on Lindell Blvd: a long two-story brick school, flag out front, music notes drifting from the band room */
  function lindell() {
    let wins = "";
    for (let x = 52; x < 350; x += 34) { if (x > 170 && x < 230) continue; wins += '<rect x="' + x + '" y="98" width="22" height="22" fill="#cfe2f5" stroke="' + CREAM + '" stroke-width="2"/><rect x="' + x + '" y="140" width="22" height="22" fill="#cfe2f5" stroke="' + CREAM + '" stroke-width="2"/>'; }
    return svg(
      '<rect width="400" height="260" fill="url(#lps1)"/>' +
      '<circle cx="60" cy="44" r="18" fill="#fff3c4"/>' +
      '<rect x="36" y="84" width="328" height="100" fill="#a8553f"/>' +
      (() => { let b = ""; for (let y = 90; y < 184; y += 8) b += '<path d="M36 ' + y + 'h328" stroke="#8e4434" stroke-width=".7"/>'; return b; })() +
      '<rect x="32" y="78" width="336" height="8" fill="' + CREAM + '"/>' + wins +
      '<rect x="176" y="70" width="48" height="114" fill="#b8634b"/><rect x="172" y="64" width="56" height="8" fill="' + CREAM + '"/>' +
      '<rect x="188" y="140" width="24" height="44" fill="#3a4a6a"/><path d="M188 140h24M200 140v44" stroke="' + CREAM + '" stroke-width="2"/>' +
      '<rect x="180" y="84" width="40" height="40" rx="20" fill="#cfe2f5" stroke="' + CREAM + '" stroke-width="3"/>' +
      '<rect x="96" y="58" width="208" height="0"/>' +
      '<rect x="128" y="190" width="144" height="18" rx="3" fill="' + NAVY + '"/><text x="200" y="203" text-anchor="middle" ' + font + ' font-size="9" fill="#fff" letter-spacing="2">LINDELL SCHOOL</text>' +
      /* flag */
      '<rect x="20" y="70" width="3" height="120" fill="#ddd"/><g class="lp-flag"><rect x="23" y="72" width="34" height="20" fill="#b22234"/><rect x="23" y="75" width="34" height="2" fill="#fff"/><rect x="23" y="80" width="34" height="2" fill="#fff"/><rect x="23" y="85" width="34" height="2" fill="#fff"/><rect x="23" y="72" width="14" height="10" fill="#3c3b6e"/></g>' +
      /* lawn + sidewalk + street */
      '<rect x="0" y="184" width="400" height="30" fill="#5c9a4a"/><rect x="0" y="210" width="400" height="12" fill="#bdb9ae"/><rect x="0" y="222" width="400" height="38" fill="#3a3c40"/>' +
      '<g class="lp-car"><rect x="0" y="232" width="50" height="15" rx="4" fill="' + GOLD + '"/><rect x="6" y="226" width="34" height="8" rx="2" fill="#f2d870"/><circle cx="12" cy="247" r="4" fill="#111"/><circle cx="38" cy="247" r="4" fill="#111"/></g>' +
      /* trombone + tuba hints with notes */
      '<g transform="translate(316 118)"><path d="M0 0h34M0 8h28M34 0v8" stroke="' + GOLD + '" stroke-width="3" fill="none"/><path d="M34 -4l10-6v24l-10-6z" fill="' + GOLD + '"/></g>' +
      '<text class="lp-note" x="330" y="112" font-size="16" fill="#fff">♪</text><text class="lp-note lp-note2" x="344" y="108" font-size="14" fill="' + PINK + '">♫</text><text class="lp-note lp-note3" x="320" y="104" font-size="13" fill="' + BLUE + '">♪</text>',
      sky("lps1", "#7fb6e8", "#e8f2fb"));
  }

  /* 2. Long Beach High School in Lido Beach: tan brick, blue and gold, the Marines banner, the bay behind */
  function lbhs() {
    let wins = "";
    for (let x = 40; x < 370; x += 30) wins += '<rect x="' + x + '" y="108" width="20" height="16" fill="#9fc4e8"/><rect x="' + x + '" y="140" width="20" height="16" fill="#9fc4e8"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#lps2)"/>' + gull +
      '<rect x="0" y="80" width="400" height="20" fill="#6f9ac2"/><g class="lp-wave"><path d="M0 90q20-4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#e1edf7" stroke-width="1.5" fill="none"/></g>' +
      '<rect x="24" y="96" width="352" height="78" fill="#cbb08a"/><rect x="20" y="90" width="360" height="8" fill="' + NAVY + '"/>' + wins +
      '<rect x="20" y="130" width="360" height="4" fill="' + GOLD + '"/>' +
      '<rect x="150" y="70" width="100" height="104" fill="#d9c09a"/><rect x="146" y="64" width="108" height="8" fill="' + NAVY + '"/>' +
      '<text x="200" y="88" text-anchor="middle" ' + font + ' font-size="8" fill="' + NAVY + '" letter-spacing="1">LONG BEACH</text><text x="200" y="99" text-anchor="middle" ' + font + ' font-size="8" fill="' + NAVY + '" letter-spacing="1">HIGH SCHOOL</text>' +
      '<rect x="176" y="136" width="48" height="38" fill="#2f3f66"/><path d="M200 136v38" stroke="' + CREAM + '" stroke-width="2"/>' +
      /* hanging Marines banner */
      '<g class="lp-sway"><rect x="264" y="102" width="40" height="56" fill="' + NAVY + '" stroke="' + GOLD + '" stroke-width="2"/><text x="284" y="126" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '">GO</text><text x="284" y="138" text-anchor="middle" ' + font + ' font-size="7" fill="' + GOLD + '">MARINES</text></g>' +
      '<rect x="0" y="174" width="400" height="36" fill="#5c9a4a"/><rect x="0" y="206" width="400" height="10" fill="#bdb9ae"/><rect x="0" y="216" width="400" height="44" fill="#3a3c40"/>' +
      '<g class="lp-car lp-car2"><rect x="0" y="230" width="52" height="15" rx="4" fill="' + BLUE + '"/><circle cx="12" cy="245" r="4" fill="#111"/><circle cx="40" cy="245" r="4" fill="#111"/></g>' +
      '<rect x="112" y="186" width="176" height="18" rx="3" fill="' + NAVY + '" stroke="' + GOLD + '" stroke-width="1.5"/><text x="200" y="199" text-anchor="middle" ' + font + ' font-size="8.5" fill="' + GOLD + '" letter-spacing=".8">LAGOON DR W · LIDO BEACH</text>',
      sky("lps2", "#8fc1ec", "#f3e3c8"));
  }

  /* 3. Portobello Road, London: the row of pastel houses, market awnings, a red bus passing, the white street sign */
  function portobello() {
    const cols = ["#f6b8c8", "#a9d8f0", "#f7e08a", "#b9e3c6", "#d8c2f0", "#f9c49a"];
    let houses = "";
    cols.forEach((c, i) => { const x = i * 68 - 4;
      houses += '<rect x="' + x + '" y="' + (40 + (i % 2) * 8) + '" width="66" height="' + (140 - (i % 2) * 8) + '" fill="' + c + '"/>';
      houses += '<rect x="' + x + '" y="' + (36 + (i % 2) * 8) + '" width="66" height="6" fill="#fff" opacity=".85"/>';
      [0, 1].forEach(r => [0, 1].forEach(k => houses += '<rect x="' + (x + 10 + k * 26) + '" y="' + (60 + r * 36) + '" width="18" height="24" fill="#3b4a63" stroke="#fff" stroke-width="2.5"/>'));
      houses += '<path d="M' + (x + 4) + ' 136h58l-6 14h-46z" fill="' + (i % 2 ? "#3b6e8a" : "#b8434e") + '"/>' +
        (() => { let s = ""; for (let k = 0; k < 6; k++) s += '<rect x="' + (x + 6 + k * 9) + '" y="136" width="5" height="14" fill="#fff" opacity=".45"/>'; return s; })();
    });
    return svg(
      '<rect width="400" height="260" fill="url(#lps3)"/>' + houses +
      '<rect x="0" y="180" width="400" height="12" fill="#c9c2b6"/>' +
      /* fruit/flower stalls */
      '<rect x="20" y="164" width="60" height="18" fill="#6b4a2c"/><circle cx="32" cy="162" r="5" fill="#e94e4e"/><circle cx="44" cy="162" r="5" fill="#f2a33a"/><circle cx="56" cy="162" r="5" fill="#9bd65a"/><circle cx="68" cy="162" r="5" fill="#e94e4e"/>' +
      '<rect x="300" y="164" width="60" height="18" fill="#6b4a2c"/><circle cx="312" cy="161" r="5" fill="' + PINK + '"/><circle cx="324" cy="161" r="5" fill="#fff"/><circle cx="336" cy="161" r="5" fill="' + PINK + '"/><circle cx="348" cy="161" r="5" fill="#d8c2f0"/>' +
      '<rect x="0" y="192" width="400" height="68" fill="#4a4c52"/>' +
      '<g class="lp-car"><rect x="0" y="196" width="96" height="46" rx="6" fill="#d0262d"/><rect x="6" y="202" width="84" height="12" fill="#2c3550"/><rect x="6" y="220" width="84" height="10" fill="#2c3550"/><circle cx="20" cy="244" r="7" fill="#111"/><circle cx="76" cy="244" r="7" fill="#111"/></g>' +
      /* London street sign: white, black letters, red district */
      '<rect x="106" y="4" width="188" height="28" rx="2" fill="#fff" stroke="#111" stroke-width="2"/>' +
      '<text x="186" y="24" text-anchor="middle" ' + font + ' font-size="13" fill="#111">PORTOBELLO ROAD</text><text x="276" y="24" text-anchor="middle" ' + font + ' font-size="10" fill="#d0262d">W11</text>',
      sky("lps3", "#a7c7e7", "#eef3f8"));
  }

  /* 4. Lindell Blvd & W Park Av at night: green signs, the Granada Towers down toward the ocean, LIL PEEP on the wall */
  function corner() {
    return svg(
      '<rect width="400" height="260" fill="url(#lps4)"/>' + stars(18) +
      '<circle cx="64" cy="40" r="14" fill="#f6efe2"/><circle cx="70" cy="36" r="13" fill="#1a1838"/>' +
      /* Granada Towers: cream stucco, red tile roofs, tower with arched windows */
      '<rect x="90" y="86" width="200" height="66" fill="#efe2c8"/><path d="M84 88l16-14h180l16 14z" fill="#b8543a"/>' +
      '<rect x="168" y="34" width="44" height="118" fill="#f3e8d2"/><path d="M162 36l28-20l28 20z" fill="#b8543a"/>' +
      '<path d="M178 48v-6q12-12 24 0v6z" fill="#2c2f55"/><path d="M178 74v-8q12-12 24 0v8z" fill="#2c2f55"/>' +
      [104, 132, 228, 256].map(x => '<path d="M' + x + ' 128v-18q9-10 18 0v18z" fill="#2c2f55"/><rect class="lp-tw lp-tw' + (x % 3 + 1) + '" x="' + (x + 4) + '" y="112" width="10" height="8" fill="#ffd98a"/>').join("") +
      /* the wall */
      '<rect x="0" y="146" width="400" height="80" fill="#2e2a38"/>' +
      (() => { let b = ""; for (let y = 152; y < 226; y += 9) b += '<path d="M0 ' + y + 'h400" stroke="#24212c" stroke-width="1"/>'; return b; })() +
      tag("LIL PEEP", 12, 202, 42, PINK, -5) + tag("GBC", 236, 182, 24, BLUE, -8) + tag("STAR SHOPPING", 160, 218, 16, CREAM, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55575c"/><rect x="0" y="226" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="lp-car"><rect x="0" y="238" width="44" height="13" rx="4" fill="' + PINK + '"/><circle cx="10" cy="251" r="4" fill="#111"/><circle cx="34" cy="251" r="4" fill="#111"/></g>' +
      /* sign pole */
      '<rect x="352" y="96" width="5" height="132" fill="#2d3a33"/>' +
      '<rect x="296" y="98" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="346" y="114" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">Lindell Blvd</text>' +
      '<rect x="296" y="124" width="100" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="346" y="140" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">W Park Av</text>' +
      '<circle class="lp-flk" cx="354" cy="92" r="4" fill="#fff6c2"/>',
      sky("lps4", "#0d0b1f", "#3a2a55"));
  }

  window.SCENES = { parkway: parkway, lindell: lindell, lbhs: lbhs, portobello: portobello, corner: corner };
})();
