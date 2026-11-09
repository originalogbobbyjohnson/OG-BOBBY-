/* celinedion scenes (Regions tab: CANADA; Charlemagne, Quebec). CSS classes prefixed cd- (the page's own anim-train is kept).
   1 Repentigny station on exo's Mascouche line (the commuter stop next door to Charlemagne; buses 14 and 100 run on to Charlemagne): high platform, black name sign with the magenta line circle, a double-deck commuter train sliding in.
   2 Montreal's Olympic Stadium (the 1984 papal Mass where a 16-year-old Celine sang "Une colombe"): the white shell and the leaning tower, the cable car riding up the tower.
   3 The ocean-liner bow at night for "My Heart Will Go On": a black-and-white bow with red waterline cutting through moonlit water, stars twinkling.
   4 Her Las Vegas years (the A New Day... residency, 2003-2019): a white columned Roman-style theatre with a lit marquee, fountains shooting in front.
   5 Boulevard Celine-Dion and Rue Notre-Dame in Charlemagne: green signs, CELINE tagged on the brick, the river and a silver Quebec church steeple behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes cdflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.cd-flk{animation:cdflick 2.3s infinite}.cd-flk2{animation-delay:.8s}' +
    '@keyframes cdcab{0%,100%{transform:translate(0,0)}50%{transform:translate(-34px,-70px)}}.cd-cab{animation:cdcab 8s ease-in-out infinite}' +
    '@keyframes cdbird{from{transform:translate(-40px,0)}to{transform:translate(440px,-30px)}}.cd-bird{animation:cdbird 12s linear infinite}.cd-bird2{animation-delay:-6s}' +
    '@keyframes cdtw{0%,100%{opacity:.25}50%{opacity:1}}.cd-tw{animation:cdtw 1.6s ease-in-out infinite}.cd-tw2{animation-delay:-.8s}' +
    '@keyframes cdbob{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(4px) rotate(.6deg)}}.cd-ship{transform-box:fill-box;transform-origin:50% 100%;animation:cdbob 4s ease-in-out infinite}' +
    '@keyframes cdwave{0%,100%{transform:translateX(0)}50%{transform:translateX(14px)}}.cd-wv{animation:cdwave 3s ease-in-out infinite}.cd-wv2{animation-delay:-1.5s}' +
    '@keyframes cdjet{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}.cd-jet{transform-box:fill-box;transform-origin:50% 100%;animation:cdjet 2.4s ease-in-out infinite}.cd-j2{animation-delay:-.6s}.cd-j3{animation-delay:-1.2s}.cd-j4{animation-delay:-1.8s}' +
    '@keyframes cdspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cd-sp{animation:cdspray 1.4s ease-out infinite}.cd-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12.5" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "cd-tw" + (i % 2 ? " cd-tw2" : "")) + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 80) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const MAG = "#be5c96", GOLD = "#e8c46a", ROSE = "#f2a7c3";

  /* 1. Repentigny station, Mascouche line */
  function cdstation() {
    const deck = (y) => Array.from({ length: 6 }, (_, i) => '<rect x="' + (40 + i * 48) + '" y="' + y + '" width="36" height="16" rx="3" fill="#1d262e"/>').join("");
    const train = '<g class="anim-train"><rect x="22" y="92" width="332" height="96" rx="8" fill="#e9ebee" stroke="#6d757c" stroke-width="2"/>' +
      deck(104) + deck(132) + '<rect x="22" y="156" width="332" height="7" fill="#2f3a44"/><rect x="22" y="165" width="332" height="3" fill="' + MAG + '"/>' +
      [100, 260].map(x => '<rect x="' + x + '" y="150" width="24" height="36" fill="#cfd3d8" stroke="#7d848a" stroke-width="1"/>').join("") +
      '<rect x="334" y="98" width="18" height="84" rx="4" fill="#c4c9ce"/><circle cx="344" cy="176" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#cd1)"/>' +
      '<g fill="#3a4a3a"><circle cx="20" cy="86" r="22"/><circle cx="60" cy="80" r="26"/><circle cx="350" cy="82" r="24"/><circle cx="388" cy="88" r="20"/></g>' +
      train +
      '<rect x="0" y="188" width="400" height="7" fill="#f2c200"/><rect x="0" y="195" width="400" height="65" fill="#a8a49c"/><path d="M0 226h400" stroke="#97938b" stroke-width="2"/>' +
      '<rect x="0" y="20" width="400" height="10" fill="#4c5560"/>' + [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="30" width="6" height="60" fill="#4c5560"/>').join("") +
      '<rect x="96" y="40" width="208" height="36" rx="3" fill="#111"/><text x="112" y="64" ' + font + ' font-size="19" fill="#fff">Repentigny</text>' +
      '<circle cx="276" cy="58" r="13" fill="' + MAG + '"/><text x="276" y="63" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">15</text>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#2b2b2b">LIGNE MASCOUCHE · REPENTIGNY</text>',
      sky("cd1", "#9cc8ec", "#f4e6d4"));
  }

  /* 2. Olympic Stadium, Montreal */
  function cdstadium() {
    return svg(
      '<rect width="400" height="260" fill="url(#cd2)"/>' +
      '<g class="cd-bird"><path d="M20 50q6 -6 12 0q6 -6 12 0" stroke="#fff" stroke-width="2" fill="none"/></g><g class="cd-bird cd-bird2"><path d="M30 70q5 -5 10 0q5 -5 10 0" stroke="#fff" stroke-width="2" fill="none"/></g>' +
      '<path d="M40 196q20 -66 150 -74q120 6 160 74z" fill="#eceae4"/>' +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (60 + i * 25) + ' 196q' + (6 - i) + ' -30 ' + (14 - i * 2.4) + ' -' + (54 - Math.abs(i - 6) * 4) + '" stroke="#c9c6be" stroke-width="2" fill="none"/>').join("") +
      '<path d="M90 160q100 -34 220 0" stroke="#b9b6ae" stroke-width="3" fill="none"/>' +
      '<path d="M300 196L248 40l18 -6l62 162z" fill="#e2dfd8"/><path d="M248 40l18 -6l8 20l-16 6z" fill="#cfcbc3"/><path d="M262 64l50 132" stroke="#b9b5ad" stroke-width="2"/>' +
      '<path d="M200 128q40 -80 54 -88" stroke="#7d7d7d" stroke-width="1.5" fill="none"/>' +
      '<g class="cd-cab"><rect x="286" y="150" width="16" height="12" rx="2" fill="#d9373c"/><rect x="289" y="153" width="10" height="5" fill="#bfe3ff"/></g>' +
      '<rect x="0" y="196" width="400" height="64" fill="#5c7a4a"/><rect x="0" y="210" width="400" height="50" fill="#8c8a84"/>' +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">STADE OLYMPIQUE · MONTRÉAL · 1984</text>',
      sky("cd2", "#6fa8dc", "#e6f0f8"));
  }

  /* 3. The bow at sea */
  function cdbow() {
    return svg(
      '<rect width="400" height="260" fill="url(#cd3)"/>' + stars(40) +
      '<circle cx="320" cy="56" r="18" fill="#f6efd8"/><path d="M300 150h40" stroke="#f6efd8" stroke-width="2" opacity=".5"/>' +
      '<rect x="0" y="150" width="400" height="110" fill="#0f2238"/>' +
      '<g class="cd-wv"><path d="M10 170h60M150 182h80M290 168h70M40 210h90M250 228h120" stroke="#3f6a92" stroke-width="2" stroke-linecap="round"/></g>' +
      '<g class="cd-wv cd-wv2"><path d="M290 160h50M310 176h40M80 236h70M200 200h50" stroke="#f6efd8" stroke-width="1.5" stroke-linecap="round" opacity=".45"/></g>' +
      '<g class="cd-ship"><path d="M30 196L300 156L270 210H50z" fill="#14161a"/><path d="M60 208L284 180l-8 18H66z" fill="#b5262b"/>' +
      '<path d="M30 196L300 156l-4 8L36 202z" fill="#f2f0ea"/><path d="M80 176h150l20 -4v-16H90z" fill="#f2f0ea"/>' +
      Array.from({ length: 9 }, (_, i) => '<circle cx="' + (96 + i * 16) + '" cy="166" r="2" fill="#ffd98a"/>').join("") +
      '<rect x="120" y="128" width="16" height="30" fill="#e8b33c"/><rect x="120" y="128" width="16" height="7" fill="#1a1a1a"/>' +
      '<rect x="156" y="124" width="16" height="34" fill="#e8b33c"/><rect x="156" y="124" width="16" height="7" fill="#1a1a1a"/>' +
      '<path d="M298 156l-120 -50M300 156v-4" stroke="#9aa1a8" stroke-width="1"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#f6efd8">NEAR, FAR, WHEREVER YOU ARE</text>',
      sky("cd3", "#060b1f", "#25365c"));
  }

  /* 4. The Las Vegas theatre */
  function cdvegas() {
    const cols = Array.from({ length: 11 }, (_, i) => '<rect x="' + (72 + i * 24) + '" y="96" width="9" height="74" fill="#f4f1e8"/><rect x="' + (69 + i * 24) + '" y="92" width="15" height="5" fill="#e0dbcf"/>').join("");
    const jets = Array.from({ length: 8 }, (_, i) => '<path class="cd-jet cd-j' + ((i % 4) + 1) + '" d="M' + (64 + i * 40) + ' 214q2 -40 4 -60q2 20 4 60z" fill="#cfefff" opacity=".85"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#cd4)"/>' + stars(16) +
      '<g fill="#2a2440"><rect x="0" y="80" width="40" height="110"/><rect x="18" y="60" width="26" height="130"/><rect x="356" y="70" width="44" height="120"/></g>' +
      '<path d="M60 170V96q140 -46 280 0v74z" fill="#d9d3c4"/>' + cols +
      '<path d="M60 96q140 -46 280 0" stroke="#f4f1e8" stroke-width="6" fill="none"/>' +
      '<rect x="130" y="40" width="140" height="36" rx="4" fill="#1a1426" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<text x="200" y="64" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="17" fill="' + GOLD + '">A New Day...</text>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="cd-tw' + (i % 2 ? " cd-tw2" : "") + '" cx="' + (136 + i * 11.6) + '" cy="44" r="1.6" fill="#fff6c2"/>').join("") +
      '<rect x="0" y="170" width="400" height="12" fill="#3a3550"/><rect x="0" y="182" width="400" height="78" fill="#163a5c"/>' +
      jets + '<path d="M0 214h400" stroke="#4f86b8" stroke-width="2"/>' +
      '<text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#f4f1e8">LAS VEGAS · 2003-2019</text>',
      sky("cd4", "#0c0a22", "#4a2550"));
  }

  /* 5. Boulevard Celine-Dion and Rue Notre-Dame, Charlemagne */
  function cdcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cd5)"/>' +
      '<rect x="0" y="104" width="400" height="30" fill="#4f7fa8"/>' +
      '<g class="cd-wv"><path d="M20 116h50M260 112h60" stroke="#a8cdee" stroke-width="2" stroke-linecap="round"/></g>' +
      '<path d="M0 104q60 -8 120 -4q80 -8 160 -2q60 -6 120 0v6H0z" fill="#3e6b3a"/><rect x="0" y="102" width="400" height="10" fill="#3e6b3a"/><rect x="0" y="112" width="400" height="3" fill="#c9c1a8"/>' +
      '<rect x="208" y="58" width="40" height="48" fill="#e8e1d2"/><path d="M204 60l24 -16l24 16z" fill="#a9b1b8"/>' +
      '<rect x="220" y="20" width="16" height="30" fill="#e8e1d2"/><path d="M216 22l12 -22l12 22z" fill="#c4ccd3"/><path d="M228 0v-0" stroke="#999"/>' +
      '<rect x="224" y="30" width="8" height="12" rx="4" fill="#5a6470"/><rect x="220" y="72" width="16" height="22" rx="8" fill="#5a6470"/>' +
      '<rect x="0" y="126" width="400" height="98" fill="#7a3f2c"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M0 ' + (134 + i * 8) + 'h400" stroke="#653322" stroke-width="1"/>').join("") +
      Array.from({ length: 12 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (126 + i * 8) + 'v8" stroke="#653322" stroke-width="1"/>').join("")).join("") +
      tag("CÉLINE", 18, 192, 54, ROSE, -6) + tag("CHARLEMAGNE", 30, 216, 17, "#ffffff", -3) + tag("MERCI", 196, 208, 22, GOLD, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="92" width="6" height="132" fill="#2f2f2f"/>' + sign(252, 96, 146, "Boul. Céline-Dion") + sign(270, 122, 116, "Rue Notre-Dame") +
      '<rect x="296" y="160" width="4" height="64" fill="#222"/>' +
      '<g class="cd-sp"><circle cx="150" cy="170" r="3" fill="' + ROSE + '" opacity=".7"/></g><g class="cd-sp cd-sp2"><circle cx="156" cy="164" r="2" fill="' + ROSE + '" opacity=".6"/></g>',
      sky("cd5", "#7fb4e0", "#f6d9c4"));
  }

  window.SCENES = { cdstation: cdstation, cdstadium: cdstadium, cdbow: cdbow, cdvegas: cdvegas, cdcorner: cdcorner };
})();
