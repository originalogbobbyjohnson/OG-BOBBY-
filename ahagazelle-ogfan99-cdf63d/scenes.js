/* ahagazelle scenes (Regions tab: New Orleans; born and raised in New Orleans, no neighborhood on record). CSS classes prefixed ah- (the page's own anim-train is kept).
   1 The red Loyola-UPT streetcar pulling up at Union Passenger Terminal on Loyola Av, the station a New Orleans kid leaves from (he went up to Grambling State).
   2 His father's church in New Orleans, where he started on the drums at 13: the drum kit through the open doors, sticks moving.
   3 Grambling State, Eddie Robinson Stadium: the black-and-gold Tiger band drumline on the field (he finished his business degree there in 2014).
   4 New Orleans City Park: live oaks with Spanish moss, the Peristyle, gold balloons floating up ("I do all my problems like balloons, let 'em go and send them to the moon").
   5 Loyola Av and Howard Av by the terminal: green signs, AHA GAZELLE tagged on the wall, the CBD towers (Plaza Tower's spire) behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ahcloud{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.ah-cloud{animation:ahcloud 26s linear infinite}.ah-cloud2{animation-delay:-13s}' +
    '@keyframes ahhit{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(10deg)}}.ah-stick{transform-box:fill-box;transform-origin:0% 100%;animation:ahhit .4s ease-in-out infinite}.ah-stick2{animation-delay:-.2s}' +
    '@keyframes ahbump{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.ah-march{animation:ahbump .5s ease-in-out infinite}.ah-march2{animation-delay:-.25s}' +
    '@keyframes ahrise{0%{transform:translateY(40px);opacity:0}15%{opacity:1}100%{transform:translateY(-200px);opacity:0}}.ah-bal{animation:ahrise 7s linear infinite}.ah-bal2{animation-delay:-2.3s}.ah-bal3{animation-delay:-4.6s}' +
    '@keyframes ahsway{0%,100%{transform:skewX(-3deg)}50%{transform:skewX(3deg)}}.ah-moss{transform-box:fill-box;transform-origin:50% 0%;animation:ahsway 4s ease-in-out infinite}' +
    '@keyframes ahblink{0%,100%{opacity:.3}50%{opacity:1}}.ah-bl{animation:ahblink 1.4s ease-in-out infinite}.ah-bl2{animation-delay:-.7s}' +
    '@keyframes ahspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.ah-sp{animation:ahspray 1.4s ease-out infinite}.ah-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt, fs) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="' + (fs || 13) + '" fill="#fff">' + txt + '</text>';
  const GOLD = "#f2c230", PURP = "#7b3fbf", GRN = "#3ad1a0", RED = "#c8232c";
  const oak = (x, base, s) => '<g><path d="M' + x + ' ' + base + 'v' + (-40 * s) + '" stroke="#5a4632" stroke-width="' + (10 * s) + '"/><path d="M' + x + ' ' + (base - 34 * s) + 'q' + (-30 * s) + ' ' + (-6 * s) + ' ' + (-52 * s) + ' ' + (-18 * s) + 'M' + x + ' ' + (base - 34 * s) + 'q' + (30 * s) + ' ' + (-6 * s) + ' ' + (54 * s) + ' ' + (-16 * s) + '" stroke="#5a4632" stroke-width="' + (6 * s) + '" fill="none"/>' +
    '<ellipse cx="' + x + '" cy="' + (base - 62 * s) + '" rx="' + (70 * s) + '" ry="' + (30 * s) + '" fill="#3f6b3a"/><ellipse cx="' + (x - 30 * s) + '" cy="' + (base - 52 * s) + '" rx="' + (36 * s) + '" ry="' + (18 * s) + '" fill="#4a7a42"/><ellipse cx="' + (x + 34 * s) + '" cy="' + (base - 54 * s) + '" rx="' + (34 * s) + '" ry="' + (16 * s) + '" fill="#4a7a42"/>' +
    '<g class="ah-moss" fill="#a7b49a" opacity=".85">' + [-50, -26, -4, 20, 44].map(d => '<path d="M' + (x + d * s) + ' ' + (base - 44 * s) + 'q-3 10 0 ' + (22 * s) + 'q3 -10 4 ' + (-22 * s) + 'z"/>').join("") + '</g></g>';

  /* 1. Loyola-UPT streetcar at Union Passenger Terminal */
  function ahstop() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (66 + i * 36) + '" y="112" width="26" height="24" rx="2" fill="#2a2a30"/>').join("");
    const car = '<g class="anim-train"><rect x="50" y="104" width="300" height="70" rx="6" fill="' + RED + '" stroke="#7a1218" stroke-width="2"/><path d="M50 104q150 -16 300 0" fill="#a81c24"/>' + win +
      '<rect x="50" y="146" width="300" height="5" fill="' + GOLD + '"/><rect x="58" y="154" width="24" height="18" fill="#8a161d"/><rect x="318" y="154" width="24" height="18" fill="#8a161d"/>' +
      '<path d="M200 90v-22M184 68h32" stroke="#333" stroke-width="2"/><circle cx="348" cy="160" r="3" fill="#fff6c2"/>' +
      '<rect x="168" y="152" width="64" height="14" rx="2" fill="#1a1a1a"/><text x="200" y="163" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '">LOYOLA-UPT</text></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ahs1)"/>' +
      '<g class="ah-cloud"><ellipse cx="60" cy="30" rx="34" ry="8" fill="#fff" opacity=".7"/></g><g class="ah-cloud ah-cloud2"><ellipse cx="40" cy="54" rx="22" ry="6" fill="#fff" opacity=".55"/></g>' +
      '<rect x="20" y="58" width="360" height="66" fill="#e7e1d2" stroke="#b8b0a0" stroke-width="2"/><rect x="20" y="58" width="360" height="10" fill="#cfc6b2"/>' +
      Array.from({ length: 12 }, (_, i) => '<rect x="' + (30 + i * 29) + '" y="74" width="20" height="40" fill="#8fb0c4" opacity=".8"/>').join("") +
      '<text x="200" y="66" text-anchor="middle" ' + font + ' font-size="8" fill="#6a6252">UNION PASSENGER TERMINAL</text>' +
      '<path d="M0 68h400" stroke="#444" stroke-width="1" opacity=".6"/>' +
      '<rect x="0" y="174" width="400" height="86" fill="#8b8d90"/><path d="M0 182h400M0 194h400" stroke="#5a5c60" stroke-width="3"/>' +
      car +
      '<rect x="0" y="206" width="400" height="54" fill="#7a7c80"/><path d="M0 230h400" stroke="#e8d36b" stroke-width="2" stroke-dasharray="16 12" opacity=".6"/>' +
      '<rect x="20" y="200" width="6" height="40" fill="#333"/><rect x="0" y="184" width="150" height="26" rx="3" fill="#111"/>' +
      '<text x="10" y="202" ' + font + ' font-size="12" fill="#fff">Loyola &amp; UPT</text>' +
      '<rect x="112" y="190" width="30" height="14" rx="7" fill="' + RED + '"/>',
      sky("ahs1", "#3a8fd0", "#cfe8f6"));
  }

  /* 2. His father's church: the drum kit he learned on at 13 */
  function ahchurch() {
    const kit = '<g><ellipse cx="200" cy="200" rx="26" ry="26" fill="#f4efe4" stroke="#7b3fbf" stroke-width="5"/><circle cx="200" cy="200" r="8" fill="none" stroke="#c9c2b4" stroke-width="2"/>' +
      '<rect x="146" y="176" width="26" height="16" rx="3" fill="#7b3fbf"/><ellipse cx="159" cy="176" rx="13" ry="4" fill="#eee"/>' +
      '<rect x="228" y="176" width="26" height="16" rx="3" fill="#7b3fbf"/><ellipse cx="241" cy="176" rx="13" ry="4" fill="#eee"/>' +
      '<path d="M130 160v66M270 156v70" stroke="#999" stroke-width="2"/><ellipse cx="130" cy="160" rx="18" ry="4" fill="' + GOLD + '"/><ellipse cx="270" cy="156" rx="20" ry="4" fill="' + GOLD + '"/>' +
      '<g class="ah-stick"><path d="M166 166l-16 -12" stroke="#d9b98a" stroke-width="3" stroke-linecap="round"/></g><g class="ah-stick ah-stick2"><path d="M236 166l18 -12" stroke="#d9b98a" stroke-width="3" stroke-linecap="round"/></g></g>';
    const notes = [[120, 120], [280, 112], [96, 90]].map((p, i) => '<text class="ah-bl' + (i % 2 ? " ah-bl2" : "") + '" x="' + p[0] + '" y="' + p[1] + '" font-size="18" fill="' + GOLD + '">&#9834;</text>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ahs2)"/>' +
      '<path d="M60 92l140 -56l140 56z" fill="#f2efe8" stroke="#bdb4a2" stroke-width="2"/><rect x="194" y="10" width="12" height="30" fill="#f2efe8" stroke="#bdb4a2" stroke-width="2"/><path d="M200 10v-8M196 4h8" stroke="#8a6a3a" stroke-width="2"/>' +
      '<rect x="60" y="92" width="280" height="140" fill="#f7f4ee" stroke="#bdb4a2" stroke-width="2"/>' +
      '<path d="M80 110h30v40h-30zM290 110h30v40h-30z" fill="#7b3fbf" opacity=".75"/><path d="M95 110v40M80 130h30M305 110v40M290 130h30" stroke="#f2c230" stroke-width="2"/>' +
      '<path d="M130 232v-104q70 -40 140 0v104z" fill="#3a2414"/><path d="M136 232v-100q64 -34 128 0v100z" fill="#5a3a22"/>' +
      '<rect x="136" y="214" width="128" height="18" fill="#8a2a2a"/>' + kit + notes +
      '<rect x="0" y="232" width="400" height="28" fill="#6c6e72"/>',
      sky("ahs2", "#2d6fae", "#f5c98a"));
  }

  /* 3. Grambling State: black-and-gold drumline at Eddie Robinson Stadium */
  function ahgram() {
    const drummer = (x, i) => '<g class="ah-march' + (i % 2 ? " ah-march2" : "") + '"><rect x="' + (x - 7) + '" y="150" width="14" height="30" rx="3" fill="#111"/><rect x="' + (x - 7) + '" y="160" width="14" height="4" fill="' + GOLD + '"/>' +
      '<rect x="' + (x - 5) + '" y="180" width="4" height="18" fill="#111"/><rect x="' + (x + 1) + '" y="180" width="4" height="18" fill="#111"/>' +
      '<circle cx="' + x + '" cy="142" r="7" fill="#6a4a32"/><rect x="' + (x - 7) + '" y="128" width="14" height="10" fill="#111"/><path d="M' + x + ' 128v-8" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<ellipse cx="' + x + '" cy="176" rx="10" ry="5" fill="#f4efe4" stroke="' + GOLD + '" stroke-width="2"/></g>';
    const crowd = Array.from({ length: 60 }, (_, i) => '<circle cx="' + (6 + (i % 30) * 13.4) + '" cy="' + (64 + Math.floor(i / 30) * 14) + '" r="4" fill="' + (i % 3 ? "#111" : GOLD) + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#ahs3)"/>' +
      '<rect x="0" y="40" width="400" height="58" fill="#5a5c62"/>' + crowd +
      '<rect x="0" y="34" width="400" height="8" fill="' + GOLD + '"/><text x="200" y="31" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">EDDIE ROBINSON STADIUM · GRAMBLING, LA</text>' +
      '<rect x="0" y="98" width="400" height="162" fill="#2f8a3a"/>' + [0, 1, 2, 3, 4, 5].map(i => '<path d="M' + (20 + i * 72) + ' 98v162" stroke="#fff" stroke-width="2" opacity=".6"/>').join("") +
      [60, 110, 160, 210, 260, 310].map((x, i) => drummer(x + 10, i)).join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#2a7a34"/><text x="200" y="244" text-anchor="middle" ' + font + ' font-size="20" fill="' + GOLD + '" stroke="#111" stroke-width="3" paint-order="stroke">TIGERS</text>',
      sky("ahs3", "#1b2a52", "#6a7fb8"));
  }

  /* 4. City Park: live oaks, the Peristyle, gold balloons rising */
  function ahpark() {
    const bal = (x, c, cls) => '<g class="ah-bal ' + cls + '"><ellipse cx="' + x + '" cy="150" rx="11" ry="14" fill="' + c + '"/><path d="M' + x + ' 164q-4 10 2 22" stroke="#555" stroke-width="1" fill="none"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ahs4)"/>' +
      '<circle cx="330" cy="40" r="16" fill="#fff4cf" opacity=".9"/>' +
      '<rect x="0" y="168" width="400" height="92" fill="#5d9a46"/><path d="M0 200q200 -10 400 0v60h-400z" fill="#4c8a3a"/>' +
      '<ellipse cx="200" cy="200" rx="160" ry="14" fill="#5a8fb0" opacity=".85"/>' +
      '<rect x="140" y="132" width="120" height="8" fill="#ece6d6"/><rect x="136" y="124" width="128" height="9" fill="#f4efe2"/>' +
      [146, 168, 190, 210, 232, 254].map(x => '<rect x="' + (x - 3) + '" y="140" width="6" height="40" fill="#f2ede0"/>').join("") +
      '<rect x="136" y="180" width="128" height="8" fill="#e2dccb"/>' +
      oak(50, 200, 1.1) + oak(360, 204, 1.0) +
      bal(120, GOLD, "") + bal(200, "#e8b020", "ah-bal2") + bal(290, GOLD, "ah-bal3") +
      '<text x="200" y="246" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#1f3a18" stroke-width="3" paint-order="stroke">CITY PARK · NEW ORLEANS</text>',
      sky("ahs4", "#4aa0e0", "#e6f4ff"));
  }

  /* 5. Loyola Av & Howard Av */
  function ahcorner() {
    const towers = '<g fill="#8fa3be">' + [[20, 30, 80], [56, 26, 110], [126, 36, 70], [230, 30, 96], [300, 28, 84]].map(b => '<rect x="' + b[0] + '" y="' + (136 - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '"/>').join("") + '</g>';
    const plaza = '<g><rect x="168" y="44" width="34" height="92" fill="#f0eee6" stroke="#c4c0b4" stroke-width="1.5"/><path d="M168 44l17 -18l17 18z" fill="#e2ded2"/><rect x="183" y="6" width="4" height="22" fill="#cfcabc"/>' +
      [56, 70, 84, 98, 112].map(y => '<rect x="172" y="' + y + '" width="26" height="4" fill="#9db3c8"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#ahs5)"/>' +
      '<circle cx="340" cy="44" r="18" fill="#ffe6a0" opacity=".9"/>' + towers + plaza +
      '<rect x="0" y="136" width="400" height="8" fill="#a8a296"/>' +
      '<rect x="0" y="140" width="252" height="88" fill="#3a2a4a"/><rect x="0" y="140" width="252" height="6" fill="#4a3a5c"/>' +
      tag("AHA GAZELLE", 10, 192, 32, GOLD, -5) + tag("TRILLIAM", 74, 220, 20, GRN, -3) +
      '<g class="ah-sp"><circle cx="234" cy="172" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="ah-sp ah-sp2"><circle cx="240" cy="166" r="2" fill="' + GOLD + '" opacity=".7"/></g>' +
      '<rect x="264" y="82" width="5" height="146" fill="#5b6168"/>' + sign(274, 92, 116, "LOYOLA AV") + sign(274, 118, 116, "HOWARD AV") +
      '<rect x="0" y="228" width="400" height="32" fill="#6a6c70"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".5"/>' +
      '<text x="330" y="214" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">NEW ORLEANS</text>',
      sky("ahs5", "#2a2050", "#ff9a6a"));
  }

  window.SCENES = { ahstop, ahchurch, ahgram, ahpark, ahcorner };
})();
