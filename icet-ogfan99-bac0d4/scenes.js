/* icet scenes (REGIONS tab: Los Angeles + SoCal; Crenshaw / View Park, South LA - came west from Newark at 12, lived with his aunt in View Park-Windsor Hills, went to Crenshaw High). CSS classes prefixed it- (the page's own anim-train is kept).
   1 Metro Local 210 bus stop at Crenshaw / 50th, by Crenshaw High: the orange 210 pulling in, palms, the blue-and-gold school wall behind.
   2 View Park-Windsor Hills at dusk: the hillside homes he landed in, windows lighting up, a car winding up the hill.
   3 Crenshaw Blvd, Sunday afternoon ("Crenshaw Boulevard, Sunday afternoon / folks sittin' on things, mad systems boom", Gotta Lotta Love): a rag-top lowrider in three-wheel motion, bass rings.
   4 Breakin' (1984), his first film: the club stage, the DJ's two turntables spinning, a b-boy silhouette spinning on cardboard, a mic on a stand.
   5 W 50th St and 11th Ave by Crenshaw High: green signs, ICE-T tagged with SYNDICATE and O.G., the Capitol Records tower far north in Hollywood, its spire light blinking. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes itflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.it-flk{animation:itflick 2.2s infinite}.it-flk2{animation-delay:.7s}' +
    '@keyframes itcarR{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.it-carR{animation:itcarR 6s linear infinite}.it-carR2{animation-delay:-3s}' +
    '@keyframes itcarL{from{transform:translateX(520px)}to{transform:translateX(-140px)}}.it-carL{animation:itcarL 5s linear infinite}' +
    '@keyframes itsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.it-palm{transform-box:fill-box;transform-origin:50% 100%;animation:itsway 3.5s ease-in-out infinite}.it-palm2{animation-delay:-1.7s}' +
    '@keyframes itclimb{0%{offset-distance:0%}100%{offset-distance:100%}}.it-climb{offset-path:path("M20 236 C120 230 150 200 220 196 S330 170 390 150");animation:itclimb 7s linear infinite}' +
    '@keyframes itwin{0%,30%{opacity:.15}40%,100%{opacity:.95}}.it-win{animation:itwin 5s ease-in-out infinite alternate}.it-w2{animation-delay:-1.2s}.it-w3{animation-delay:-2.6s}.it-w4{animation-delay:-3.8s}' +
    '@keyframes ittilt{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-7deg)}}.it-3w{transform-box:view-box;transform-origin:262px 200px;animation:ittilt 1.8s ease-in-out infinite}' +
    '@keyframes itring{0%{transform:scale(.4);opacity:.9}100%{transform:scale(1.8);opacity:0}}.it-ring{transform-box:fill-box;transform-origin:50% 50%;animation:itring 1.2s ease-out infinite}.it-ring2{animation-delay:.6s}' +
    '@keyframes itspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.it-spin{transform-box:fill-box;transform-origin:50% 50%;animation:itspin 1.6s linear infinite}.it-spin2{animation-duration:2.1s}' +
    '@keyframes itbboy{from{transform:rotate(0)}to{transform:rotate(360deg)}}.it-bboy{transform-box:view-box;transform-origin:200px 206px;animation:itbboy 1.4s linear infinite}' +
    '@keyframes itbeam{0%,100%{opacity:.18}50%{opacity:.42}}.it-beam{animation:itbeam 1.6s ease-in-out infinite}.it-beam2{animation-delay:-.8s}' +
    '@keyframes itspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.it-sp{animation:itspray 1.4s ease-out infinite}.it-sp2{animation-delay:.45s}' +
    '@keyframes itblink{0%,60%,100%{opacity:1}70%,90%{opacity:.1}}.it-blink{animation:itblink 1.6s infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const GOLD = "#e8c04a", RED = "#d7263d", ICEB = "#5ec8e5", METRO = "#e56b1f", BLUE = "#1d3f8f";
  const palm = (x, base, h, cls) => '<g class="it-palm' + (cls || "") + '"><path d="M' + x + ' ' + base + 'q4 ' + (-h / 2) + ' 2 ' + (-h) + '" stroke="#2a1d14" stroke-width="4" fill="none"/>' +
    [[-22, -6], [-16, 8], [20, -6], [16, 9], [0, -14]].map(([dx, dy]) => '<path d="M' + (x + 2) + ' ' + (base - h) + 'q' + dx / 2 + ' ' + (dy - 8) + ' ' + dx + ' ' + dy + '" stroke="#1f2a1c" stroke-width="4" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const car = (x, y, body, cls) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="44" height="11" rx="4" fill="' + body + '"/><rect x="' + (x + 9) + '" y="' + (y - 7) + '" width="24" height="8" rx="3" fill="' + body + '" opacity=".85"/>' +
    '<circle cx="' + (x + 10) + '" cy="' + (y + 12) + '" r="4" fill="#111"/><circle cx="' + (x + 34) + '" cy="' + (y + 12) + '" r="4" fill="#111"/></g>';

  /* 1. Metro Local 210 at Crenshaw / 50th */
  function itstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (70 + i * 40) + '" y="112" width="30" height="22" rx="2" fill="#20303c"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="100" width="300" height="58" rx="8" fill="#e9e9e6" stroke="#7a7a78" stroke-width="2"/>' + wins +
      '<rect x="40" y="138" width="300" height="8" fill="' + METRO + '"/>' +
      '<rect x="306" y="110" width="30" height="26" rx="3" fill="#20303c"/><rect x="286" y="102" width="52" height="7" rx="1" fill="#111"/><text x="312" y="107.5" text-anchor="middle" ' + font + ' font-size="5" fill="#ffb000">210 CRENSHAW</text>' +
      '<circle cx="90" cy="160" r="11" fill="#1a1a1a"/><circle cx="90" cy="160" r="5" fill="#aaa"/><circle cx="290" cy="160" r="11" fill="#1a1a1a"/><circle cx="290" cy="160" r="5" fill="#aaa"/>' +
      '<circle class="it-flk" cx="336" cy="150" r="3" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#its1)"/>' +
      '<circle cx="70" cy="50" r="22" fill="#ffe3a0" opacity=".8"/>' +
      /* Crenshaw High wall behind: blue and gold */
      '<rect x="120" y="64" width="270" height="44" fill="#d9cdb4"/><rect x="120" y="64" width="270" height="8" fill="' + BLUE + '"/><rect x="120" y="72" width="270" height="3" fill="' + GOLD + '"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (132 + i * 37) + '" y="82" width="22" height="16" fill="#6c7f99"/>').join("") +
      '<text x="255" y="70.5" text-anchor="middle" ' + font + ' font-size="6" fill="' + GOLD + '" letter-spacing="3">CRENSHAW HIGH</text>' +
      palm(26, 172, 110) + palm(110, 108, 56, " it-palm2") + palm(380, 172, 120, " it-palm2") +
      '<rect x="0" y="168" width="400" height="10" fill="#c9c2b2"/><rect x="0" y="178" width="400" height="82" fill="#4a4846"/>' +
      '<path d="M0 220h40M70 220h40M140 220h40M210 220h40M280 220h40M350 220h40" stroke="#e8d36a" stroke-width="3"/>' +
      car(0, 236, "#2b2b30", "it-carL") +
      bus +
      '<g><rect x="12" y="120" width="5" height="50" fill="#333"/><rect x="2" y="102" width="46" height="20" rx="2" fill="#111"/><rect x="4" y="104" width="20" height="16" rx="2" fill="' + METRO + '"/><text x="14" y="115.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">210</text><text x="36" y="115" text-anchor="middle" ' + font + ' font-size="5.5" fill="#fff">METRO</text></g>' +
      '<rect x="96" y="194" width="208" height="30" rx="4" fill="#111" stroke="#666" stroke-width="1.5"/>' +
      '<text x="200" y="214" text-anchor="middle" ' + font + ' font-size="15" fill="#fff" letter-spacing="1">CRENSHAW / 50TH</text>',
      sky("its1", "#4b6fa8", "#f3c283"));
  }

  /* 2. View Park-Windsor Hills at dusk */
  function itview() {
    const stars = Array.from({ length: 16 }, (_, i) => '<circle class="it-flk' + (i % 2 ? " it-flk2" : "") + '" cx="' + ((i * 59) % 400) + '" cy="' + (8 + (i * 17) % 60) + '" r="1" fill="#fff" opacity=".7"/>').join("");
    const house = (x, y, w, c, k) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" fill="' + c + '"/><path d="M' + (x - 5) + ' ' + y + 'l' + (w / 2 + 5) + ' -11l' + (w / 2 + 5) + ' 11z" fill="#6b3a2a"/>' +
      '<rect class="it-win it-w' + k + '" x="' + (x + 6) + '" y="' + (y + 7) + '" width="9" height="8" fill="#ffd27a"/><rect class="it-win it-w' + (((k + 1) % 4) + 1) + '" x="' + (x + w - 15) + '" y="' + (y + 7) + '" width="9" height="8" fill="#ffd27a"/>';
    const rows = [[18, 150, 46, "#d8c6a6", 1], [80, 140, 50, "#e6d7bb", 2], [148, 128, 46, "#cdb995", 3], [210, 116, 52, "#e2cfae", 4], [280, 104, 46, "#d4bf9b", 1], [338, 94, 50, "#e8d9bd", 2],
      [40, 196, 50, "#e6d4b2", 3], [120, 186, 46, "#d9c7a3", 4], [196, 172, 52, "#e2cfae", 1], [270, 160, 46, "#cfbb96", 2], [334, 150, 50, "#e6d7bb", 3]];
    return svg(
      '<rect width="400" height="260" fill="url(#its2)"/>' + stars +
      '<circle cx="330" cy="40" r="14" fill="#fff1c8" opacity=".85"/>' +
      '<path d="M0 170 C80 150 160 120 240 100 S360 70 400 64 V260 H0z" fill="#3c4a33"/>' +
      '<path d="M0 220 C100 206 180 180 260 168 S360 146 400 140 V260 H0z" fill="#4a5a3c"/>' +
      rows.map(r => house(r[0], r[1], r[2], r[3], r[4])).join("") +
      palm(64, 150, 48) + palm(250, 118, 46, " it-palm2") + palm(372, 154, 50) +
      '<path d="M20 236 C120 230 150 200 220 196 S330 170 390 150" stroke="#2c2c2c" stroke-width="9" fill="none"/>' +
      '<g class="it-climb"><rect x="-12" y="-6" width="24" height="9" rx="3" fill="' + RED + '"/><circle cx="12" cy="-2" r="2.5" fill="#fff6c8"/><circle cx="-7" cy="4" r="3" fill="#111"/><circle cx="7" cy="4" r="3" fill="#111"/></g>' +
      '<rect x="98" y="232" width="204" height="20" rx="3" fill="#111" opacity=".85"/><text x="200" y="246" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="1">VIEW PARK · WINDSOR HILLS</text>',
      sky("its2", "#251a45", "#e88a5a"));
  }

  /* 3. Crenshaw Blvd, Sunday afternoon: rag top in three-wheel motion */
  function itcruise() {
    const store = (x, w, c) => '<rect x="' + x + '" y="92" width="' + w + '" height="70" fill="' + c + '"/><rect x="' + (x + 6) + '" y="122" width="' + (w - 12) + '" height="30" fill="#2c3a48" opacity=".8"/><rect x="' + x + '" y="92" width="' + w + '" height="8" fill="#00000033"/>';
    const lowrider = '<g class="it-3w">' +
      '<path d="M190 196h140l-6 -14h-34l-14 -10h-44l-16 10h-26z" fill="#6a1fb0" stroke="#3a0f66" stroke-width="2"/>' +
      '<path d="M228 172h40l12 10h-62z" fill="#f2e6cc"/><rect x="188" y="192" width="144" height="4" fill="#d9dde3"/>' +
      '<circle cx="214" cy="200" r="11" fill="#111"/><circle cx="214" cy="200" r="7" fill="#d9dde3"/><circle cx="214" cy="200" r="2" fill="' + GOLD + '"/>' +
      '<circle cx="306" cy="200" r="11" fill="#111"/><circle cx="306" cy="200" r="7" fill="#d9dde3"/><circle cx="306" cy="200" r="2" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#its3)"/>' +
      '<circle cx="64" cy="44" r="20" fill="#fff3c4"/>' +
      store(0, 80, "#c98a5a") + store(84, 90, "#e1c48e") + store(178, 70, "#a6c3c8") + store(252, 84, "#d7a3a0") + store(340, 60, "#c9b07a") +
      palm(40, 170, 120) + palm(170, 170, 104, " it-palm2") + palm(330, 170, 128) +
      '<rect x="0" y="162" width="400" height="12" fill="#cfc7b6"/><rect x="0" y="174" width="400" height="86" fill="#4a4846"/>' +
      '<path d="M0 238h40M70 238h40M140 238h40M210 238h40M280 238h40M350 238h40" stroke="#e8d36a" stroke-width="3"/>' +
      car(0, 222, "#2a6abf", "it-carR") + car(0, 222, "#e0e0e0", "it-carR it-carR2") +
      '<circle class="it-ring" cx="262" cy="182" r="18" fill="none" stroke="' + GOLD + '" stroke-width="2"/><circle class="it-ring it-ring2" cx="262" cy="182" r="18" fill="none" stroke="' + GOLD + '" stroke-width="2"/>' +
      lowrider +
      '<g><rect x="96" y="118" width="5" height="52" fill="#333"/>' + sign(30, 98, 140, "Crenshaw Blvd") + '</g>' +
      '<rect x="120" y="8" width="160" height="20" rx="3" fill="#111" opacity=".8"/><text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" letter-spacing="2">SUNDAY AFTERNOON</text>',
      sky("its3", "#6fb2e6", "#f6d9a6"));
  }

  /* 4. Breakin' (1984): stage, two turntables, a b-boy spinning on cardboard */
  function itbreak() {
    const deck = (x) => '<rect x="' + x + '" y="128" width="64" height="40" rx="3" fill="#2a2a30" stroke="#55555e" stroke-width="1.5"/>' +
      '<g class="it-spin' + (x > 200 ? " it-spin2" : "") + '"><circle cx="' + (x + 28) + '" cy="148" r="16" fill="#111"/><circle cx="' + (x + 28) + '" cy="148" r="10" fill="none" stroke="#333" stroke-width="1"/><circle cx="' + (x + 28) + '" cy="148" r="5" fill="' + RED + '"/><rect x="' + (x + 27) + '" y="134" width="2" height="6" fill="#ddd"/></g>' +
      '<path d="M' + (x + 54) + ' 134v18l-12 8" stroke="#c0c5ce" stroke-width="2" fill="none"/>';
    return svg(
      '<rect width="400" height="260" fill="#120c1c"/>' +
      '<path class="it-beam" d="M60 0L20 190h90z" fill="' + ICEB + '"/><path class="it-beam it-beam2" d="M340 0L290 190h90z" fill="' + RED + '"/><path class="it-beam it-beam2" d="M200 0L150 190h100z" fill="' + GOLD + '" opacity=".3"/>' +
      '<rect x="40" y="30" width="320" height="30" rx="4" fill="#1d1428" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<text x="200" y="52" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="22" fill="' + GOLD + '" letter-spacing="6">BREAKIN\' ‘84</text>' +
      '<rect x="90" y="166" width="220" height="8" fill="#3a2c48"/>' +
      '<rect x="100" y="120" width="200" height="50" fill="#22182e"/>' + deck(108) + deck(228) +
      '<rect x="182" y="134" width="36" height="26" rx="2" fill="#3a3a44"/>' + [0, 1, 2].map(i => '<rect x="' + (188 + i * 10) + '" y="138" width="4" height="18" fill="#111"/><rect class="it-flk' + (i % 2 ? " it-flk2" : "") + '" x="' + (187 + i * 10) + '" y="' + (144 - i * 3) + '" width="6" height="3" fill="' + ICEB + '"/>').join("") +
      /* mic on a stand */
      '<path d="M352 176v-70" stroke="#c0c5ce" stroke-width="3"/><rect x="346" y="94" width="12" height="16" rx="6" fill="#2a2a30" stroke="#c0c5ce" stroke-width="1.5"/><path d="M340 176h24" stroke="#c0c5ce" stroke-width="3"/>' +
      /* floor and cardboard */
      '<rect x="0" y="176" width="400" height="84" fill="#2a2030"/>' +
      '<path d="M118 232l164 0l-12 -36h-140z" fill="#b8925a" stroke="#8a6a3a" stroke-width="1.5"/><path d="M150 214h100" stroke="#8a6a3a" stroke-width="1"/>' +
      /* b-boy silhouette in a windmill spin, no face */
      '<g class="it-bboy"><circle cx="200" cy="206" r="7" fill="#0b0b10"/><path d="M200 206l-30 -8M200 206l30 8M200 206l-14 22M200 206l14 -22" stroke="#0b0b10" stroke-width="7" stroke-linecap="round"/>' +
      '<circle cx="170" cy="198" r="4" fill="' + RED + '"/><circle cx="230" cy="214" r="4" fill="' + RED + '"/></g>' +
      /* boombox */
      '<g><rect x="24" y="196" width="66" height="34" rx="4" fill="#c0c5ce" stroke="#6a6e76" stroke-width="1.5"/><circle class="it-ring" cx="40" cy="214" r="9" fill="#2a2a30"/><circle class="it-ring it-ring2" cx="74" cy="214" r="9" fill="#2a2a30"/><rect x="48" y="200" width="18" height="7" fill="#333"/><path d="M30 196l10 -10h34l10 10" stroke="#6a6e76" stroke-width="2.5" fill="none"/></g>',
      "");
  }

  /* 5. W 50th St & 11th Ave by Crenshaw High; Capitol Records tower far north */
  function itcorner() {
    /* round stacked tower: discs of floors, a cap and the spire */
    const discs = Array.from({ length: 9 }, (_, i) => '<rect x="' + (186 + i * 0.4) + '" y="' + (44 + i * 6) + '" width="' + (28 - i * 0.8) + '" height="4" rx="2" fill="#d8dde4"/>').join("");
    const tower = '<g opacity=".95"><rect x="190" y="42" width="20" height="58" fill="#b9c0c9"/>' + discs + '<path d="M186 42h28l-4 -6h-20z" fill="#d8dde4"/><rect x="199" y="14" width="2" height="22" fill="#d8dde4"/><circle class="it-blink" cx="200" cy="13" r="2.6" fill="#ff3b3b"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#its5)"/>' +
      '<path d="M0 104 C70 88 120 96 180 90 S300 80 400 92 V126 H0z" fill="#4a3c5e" opacity=".55"/>' +
      tower +
      palm(70, 128, 74) + palm(320, 128, 84, " it-palm2") +
      '<rect x="0" y="126" width="400" height="98" fill="#e3cfa6"/>' + Array.from({ length: 30 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + (132 + (i * 23) % 88) + '" r="1.2" fill="#c9ad80"/>').join("") +
      '<rect x="0" y="126" width="400" height="6" fill="' + BLUE + '"/><rect x="0" y="132" width="400" height="2" fill="' + GOLD + '"/>' +
      tag("ICE-T", 18, 196, 54, GOLD, -6) + tag("SYNDICATE", 24, 218, 17, ICEB, -3) + tag("O.G.", 168, 216, 22, RED, -5) +
      '<rect x="0" y="224" width="400" height="36" fill="#5a5753"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(254, 98, 140, "W 50th St") + sign(276, 124, 96, "11th Av") +
      '<g class="it-sp"><circle cx="150" cy="170" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="it-sp it-sp2"><circle cx="156" cy="164" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("its5", "#1c1a3e", "#f08a5a"));
  }

  window.SCENES = { itstation: itstation, itview: itview, itcruise: itcruise, itbreak: itbreak, itcorner: itcorner };
})();
