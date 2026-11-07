/* jayrock scenes (Regions tab: Los Angeles + SoCal; Nickerson Gardens, Watts). CSS classes prefixed jr- (the page's own anim-train is kept).
   1 Metro Local 120 stop at Imperial Hwy and Central Ave, the corner of Nickerson Gardens: the orange 120 pulling in, the two-story project buildings behind.
   2 Nickerson Gardens courtyard ("Where the barbeque pits and the mini-bikes ... Domino tables", Hood Gone Love It): grill smoke rising, a mini-bike buzzing past.
   3 Locke High School on E 111th St (his school; the Saints, Columbia blue and gold): the campus, the banner and flag waving, the bell ringing.
   4 Grammy night downtown (he won Best Rap Performance for King's Dead in 2019): the arena glowing, spotlights sweeping, confetti falling, the red carpet.
   5 E 112th St and Compton Ave ("Rotation 112th"): green signs, JAY ROCK tagged, the downtown LA skyline behind.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jrflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.jr-flk{animation:jrflick 2.2s infinite}.jr-flk2{animation-delay:.8s}' +
    '@keyframes jrcar{from{transform:translateX(-170px)}to{transform:translateX(560px)}}.jr-car{animation:jrcar 7s linear infinite}.jr-car2{animation-delay:-3.5s}' +
    '@keyframes jrbike{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.jr-bike{animation:jrbike 4.5s linear infinite}' +
    '@keyframes jrsway{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.jr-palm{transform-box:fill-box;transform-origin:50% 100%;animation:jrsway 3.6s ease-in-out infinite}.jr-palm2{animation-delay:-1.7s}' +
    '@keyframes jrsmoke{0%{transform:translateY(0) scale(.6);opacity:.8}100%{transform:translateY(-46px) scale(1.4);opacity:0}}.jr-sm{transform-box:fill-box;transform-origin:50% 50%;animation:jrsmoke 2.4s ease-out infinite}.jr-sm2{animation-delay:.8s}.jr-sm3{animation-delay:1.6s}' +
    '@keyframes jrflag{0%,100%{transform:skewY(0) scaleX(1)}50%{transform:skewY(5deg) scaleX(.94)}}.jr-flag{transform-box:fill-box;transform-origin:0 50%;animation:jrflag 1.4s ease-in-out infinite}' +
    '@keyframes jrbell{0%,100%{transform:rotate(0)}25%{transform:rotate(14deg)}75%{transform:rotate(-14deg)}}.jr-bell{transform-box:fill-box;transform-origin:50% 0;animation:jrbell .8s ease-in-out infinite}' +
    '@keyframes jrbeamL{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(10deg)}}.jr-beamL{transform-box:fill-box;transform-origin:50% 100%;animation:jrbeamL 4s ease-in-out infinite}' +
    '@keyframes jrbeamR{0%,100%{transform:rotate(24deg)}50%{transform:rotate(-10deg)}}.jr-beamR{transform-box:fill-box;transform-origin:50% 100%;animation:jrbeamR 4s ease-in-out infinite}' +
    '@keyframes jrfall{from{transform:translateY(-30px)}to{transform:translateY(200px)}}.jr-cf{animation:jrfall 3.2s linear infinite}.jr-cf2{animation-delay:-1.1s}.jr-cf3{animation-delay:-2.2s}' +
    '@keyframes jrspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jr-sp{animation:jrspray 1.4s ease-out infinite}.jr-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const palm = (x, y, h, cls) => '<g class="jr-palm ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'q-4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#6b4a2a" stroke-width="4" fill="none"/>' +
    '<g fill="#2f6a3a"><path d="M' + (x + 2) + ' ' + (y - h) + 'q-20 -6 -30 8q16 -10 30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q20 -6 30 8q-16 -10 -30 -8z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q-8 -18 -26 -16q16 2 26 16z"/><path d="M' + (x + 2) + ' ' + (y - h) + 'q8 -18 26 -16q-16 2 -26 16z"/></g></g>';
  /* a Nickerson Gardens two-story block: beige stucco, brown trim, flat roof, little porches */
  const block = (x, y, w, h, c) => {
    let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (c || "#e3cfa8") + '"/><rect x="' + (x - 3) + '" y="' + (y - 4) + '" width="' + (w + 6) + '" height="5" fill="#7a4e2c"/>' +
      '<rect x="' + x + '" y="' + (y + h / 2 - 2) + '" width="' + w + '" height="3" fill="#7a4e2c" opacity=".6"/>';
    for (let i = 0; i < Math.floor(w / 26); i++) {
      const wx = x + 8 + i * 26;
      s += '<rect x="' + wx + '" y="' + (y + 8) + '" width="12" height="10" fill="#4a5a68"/><rect x="' + wx + '" y="' + (y + h / 2 + 6) + '" width="12" height="10" fill="#4a5a68"/>';
    }
    return s + '<rect x="' + (x + w / 2 - 6) + '" y="' + (y + h - 16) + '" width="12" height="16" fill="#5b3a22"/>';
  };
  const METRO = "#e56b1f", GOLD = "#ffd25a", RED = "#ff5a3a", BLUE = "#4fb3ff", LOCKE = "#9bc4e8", LGOLD = "#f2c230";

  /* 1. Metro Local 120 at Imperial Hwy / Central Ave, Nickerson Gardens behind */
  function jrstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 40) + '" y="112" width="30" height="22" rx="2" fill="#20303c"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="102" width="300" height="56" rx="8" fill="' + METRO + '" stroke="#8a3c10" stroke-width="2"/>' + wins +
      '<rect x="40" y="140" width="300" height="6" fill="#f3f4f6"/>' +
      '<rect x="306" y="110" width="30" height="24" rx="3" fill="#20303c"/><rect x="302" y="104" width="36" height="6" rx="1" fill="#111"/><text x="320" y="109" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb000">120 IMPERIAL</text>' +
      '<circle cx="90" cy="160" r="11" fill="#1a1a1a"/><circle cx="90" cy="160" r="5" fill="#aaa"/><circle cx="290" cy="160" r="11" fill="#1a1a1a"/><circle cx="290" cy="160" r="5" fill="#aaa"/>' +
      '<circle cx="337" cy="148" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jrs1)"/>' +
      '<circle cx="330" cy="40" r="20" fill="#fff0b8" opacity=".85"/>' +
      block(10, 70, 150, 100) + block(240, 74, 150, 96, "#dcc59c") +
      '<rect x="160" y="140" width="80" height="30" fill="#7fa65a"/>' +
      palm(178, 170, 112) + palm(388, 170, 100, "jr-palm2") +
      '<rect x="0" y="170" width="400" height="14" fill="#c7c1b4"/>' +
      bus +
      '<rect x="0" y="184" width="400" height="76" fill="#3e3d44"/><path d="M0 232h400" stroke="#f2d04a" stroke-width="2" stroke-dasharray="18 12"/>' +
      '<rect x="18" y="100" width="4" height="70" fill="#555"/><rect x="6" y="84" width="28" height="18" rx="2" fill="' + METRO + '"/><text x="20" y="97" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">120</text>' +
      car("jr-car", 0, 246, "#3a6fd8") +
      '<rect x="54" y="190" width="292" height="32" rx="3" fill="#111"/><text x="68" y="211" ' + font + ' font-size="14" fill="#fff">Imperial Hwy / Central Av</text>' +
      '<rect x="296" y="196" width="40" height="20" rx="3" fill="' + METRO + '"/><text x="316" y="211" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">120</text>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">METRO LOCAL · NICKERSON GARDENS · WATTS</text>',
      sky("jrs1", "#ff9a5a", "#ffe1b0"));
  }

  /* 2. Nickerson Gardens courtyard: barbecue pits, the domino table, a mini-bike */
  function jrgardens() {
    const doms = Array.from({ length: 7 }, (_, i) => '<rect x="' + (236 + i * 11) + '" y="' + (176 + (i % 2) * 4) + '" width="8" height="5" rx="1" fill="#f7f3ea" stroke="#333" stroke-width=".6"/>').join("");
    const bike = '<g class="jr-bike"><circle cx="20" cy="236" r="9" fill="none" stroke="#111" stroke-width="4"/><circle cx="58" cy="236" r="9" fill="none" stroke="#111" stroke-width="4"/>' +
      '<path d="M20 236l14 -16h16l8 16M34 220l-4 -8h-6" stroke="' + RED + '" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="32" y="222" width="18" height="8" rx="2" fill="#333"/>' +
      '<circle cx="40" cy="200" r="7" fill="#3b2a20"/><path d="M40 207l-2 14M38 213l12 6M38 221l-6 12" stroke="#2a4a8a" stroke-width="5" stroke-linecap="round"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jrs2)"/>' +
      block(0, 50, 190, 110) + block(214, 56, 186, 104, "#dcc59c") +
      '<rect x="0" y="160" width="400" height="100" fill="#8fb36a"/><rect x="0" y="214" width="400" height="46" fill="#bdb5a6"/>' +
      /* barbecue pit with smoke */
      '<g><rect x="56" y="150" width="54" height="26" rx="6" fill="#2a2a2a"/><rect x="60" y="146" width="46" height="6" rx="2" fill="#555"/><path d="M64 176v20M102 176v20" stroke="#2a2a2a" stroke-width="4"/>' +
      '<rect x="64" y="150" width="38" height="4" fill="#e8642a" class="jr-flk"/></g>' +
      '<circle class="jr-sm" cx="83" cy="136" r="9" fill="#e8e8e8"/><circle class="jr-sm jr-sm2" cx="78" cy="132" r="8" fill="#ddd"/><circle class="jr-sm jr-sm3" cx="88" cy="134" r="7" fill="#eee"/>' +
      /* domino table */
      '<rect x="226" y="172" width="96" height="14" rx="3" fill="#7a4e2c"/><path d="M236 186v22M312 186v22" stroke="#5b3a22" stroke-width="5"/>' + doms +
      '<rect x="210" y="190" width="14" height="18" fill="#3a6fd8"/><rect x="326" y="190" width="14" height="18" fill="#3a6fd8"/>' +
      bike +
      tag("WATTS", 150, 120, 22, GOLD, -5) +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">NICKERSON GARDENS · BARBECUE PITS · DOMINO TABLES</text>',
      sky("jrs2", "#5fb4ef", "#d9f0ff"));
  }

  /* 3. Locke High School: Columbia blue and gold, banner and bell */
  function jrlocke() {
    const wins = Array.from({ length: 9 }, (_, i) => '<rect x="' + (40 + i * 36) + '" y="96" width="22" height="16" fill="#3d5a73"/><rect x="' + (40 + i * 36) + '" y="128" width="22" height="16" fill="#3d5a73"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jrs3)"/>' +
      '<rect x="24" y="80" width="352" height="90" fill="#efe6d2"/><rect x="20" y="74" width="360" height="8" fill="' + LOCKE + '"/><rect x="24" y="118" width="352" height="4" fill="' + LGOLD + '"/>' + wins +
      '<rect x="168" y="138" width="64" height="32" fill="#2c4258"/><rect x="198" y="138" width="4" height="32" fill="#efe6d2"/>' +
      '<rect x="120" y="52" width="160" height="20" rx="3" fill="' + LOCKE + '" stroke="' + LGOLD + '" stroke-width="2"/><text x="200" y="67" text-anchor="middle" ' + font + ' font-size="13" fill="#1d3550">LOCKE HIGH SCHOOL</text>' +
      /* bell */
      '<rect x="330" y="30" width="4" height="44" fill="#666"/><rect x="316" y="30" width="32" height="4" fill="#666"/><g class="jr-bell"><path d="M324 34h16v4q0 12 4 16h-24q4 -4 4 -16z" fill="' + LGOLD + '" stroke="#8a6a12" stroke-width="1.5"/><circle cx="332" cy="56" r="2.5" fill="#8a6a12"/></g>' +
      /* flagpole + banner */
      '<rect x="56" y="20" width="3" height="60" fill="#ccc"/><g class="jr-flag"><rect x="59" y="22" width="46" height="26" fill="' + LOCKE + '"/><rect x="59" y="35" width="46" height="5" fill="' + LGOLD + '"/><text x="82" y="33" text-anchor="middle" ' + font + ' font-size="8" fill="#1d3550">SAINTS</text></g>' +
      '<rect x="0" y="170" width="400" height="10" fill="#c7c1b4"/><rect x="0" y="180" width="400" height="80" fill="#7fae5a"/>' +
      palm(16, 172, 104) + palm(388, 172, 96, "jr-palm2") +
      '<path d="M0 232h400" stroke="#fff" stroke-width="2" opacity=".6"/>' +
      tag("ONCE A SAINT", 120, 220, 20, LGOLD, -4) +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".9">E 111TH ST · WATTS</text>',
      sky("jrs3", "#7cc4f2", "#e4f4ff"));
  }

  /* 4. Grammy night: the arena glowing, spotlights, confetti, the red carpet */
  function jrgrammy() {
    const cf = Array.from({ length: 18 }, (_, i) => '<rect class="jr-cf' + (i % 3 ? " jr-cf" + (i % 3 + 1) : "") + '" x="' + (14 + i * 22) + '" y="' + ((i * 37) % 60) + '" width="5" height="8" fill="' + [GOLD, RED, BLUE, "#fff"][i % 4] + '" transform="rotate(' + (i * 25) + ' ' + (16 + i * 22) + ' ' + ((i * 37) % 60) + ')"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jrs4)"/>' +
      '<path class="jr-beamL" d="M90 200L70 0h40z" fill="#fff6c8" opacity=".22"/><path class="jr-beamR" d="M310 200L290 0h40z" fill="#fff6c8" opacity=".22"/>' +
      /* arena: curved glass facade */
      '<path d="M40 190V110q160 -60 320 0v80z" fill="#2a3442"/><path d="M52 190V118q148 -52 296 0v72z" fill="#3c5a78"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (64 + i * 24) + ' 190V' + (124 - Math.round(Math.sin((i + .5) / 12 * Math.PI) * 22)) + '" stroke="#6d8aa8" stroke-width="2"/>').join("") +
      '<rect x="52" y="146" width="296" height="10" fill="' + GOLD + '" class="jr-flk"/><rect x="52" y="146" width="296" height="10" fill="' + RED + '" class="jr-flk jr-flk2" opacity=".6"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#1e1e24"/>' +
      '<path d="M150 260l30 -70h40l30 70z" fill="#c8102e"/><path d="M168 260l20 -70h24l20 70z" fill="#e0233f" opacity=".6"/>' +
      '<path d="M150 190v-14M250 190v-14" stroke="' + GOLD + '" stroke-width="3"/><path d="M150 180h100" stroke="' + GOLD + '" stroke-width="2"/>' +
      cf +
      '<text x="200" y="240" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" opacity=".9">BEST RAP PERFORMANCE · DOWNTOWN LA</text>',
      sky("jrs4", "#0b0a1e", "#3a1f4a"));
  }

  /* 5. E 112th St and Compton Ave: green signs, JAY ROCK tagged, downtown skyline behind */
  function jrcorner() {
    const towers = [[150, 70, 26], [180, 50, 22], [206, 40, 28], [238, 62, 24], [266, 80, 20], [120, 90, 22], [290, 96, 18]]
      .map(([x, y, w]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (140 - y) + '" fill="#8fa3bd"/>').join("") +
      '<path d="M206 40l14 -10 14 10z" fill="#8fa3bd"/><path d="M180 50l11 -16 11 16z" fill="#8fa3bd"/><rect x="190" y="22" width="2" height="12" fill="#8fa3bd"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#jrs5)"/>' +
      '<circle cx="70" cy="40" r="18" fill="#ffd27a" opacity=".85"/>' +
      towers +
      '<rect x="0" y="140" width="400" height="120" fill="#3e3d44"/>' +
      '<rect x="20" y="104" width="250" height="96" fill="#d9c3a0"/><rect x="20" y="98" width="250" height="8" fill="#7a4e2c"/>' +
      tag("JAY ROCK", 34, 156, 40, RED, -6) + tag("TDE", 200, 188, 22, GOLD, -3) + tag("WIN WIN", 60, 192, 20, BLUE, -4) +
      '<g class="jr-sp"><circle cx="262" cy="150" r="3" fill="' + RED + '"/></g><g class="jr-sp jr-sp2"><circle cx="266" cy="144" r="2" fill="' + RED + '"/></g>' +
      '<rect x="314" y="80" width="5" height="130" fill="#6d737a"/>' + sign(276, 72, 84, "E 112th St") + sign(272, 98, 92, "Compton Av") +
      palm(380, 200, 120, "jr-palm2") +
      '<rect x="0" y="200" width="400" height="8" fill="#c7c1b4"/>' +
      car("jr-car", 0, 236, "#2b2b30") + car("jr-car jr-car2", 0, 238, GOLD),
      sky("jrs5", "#f58a5a", "#ffd9a8"));
  }

  window.SCENES = { jrstation: jrstation, jrgardens: jrgardens, jrlocke: jrlocke, jrgrammy: jrgrammy, jrcorner: jrcorner };
})();
