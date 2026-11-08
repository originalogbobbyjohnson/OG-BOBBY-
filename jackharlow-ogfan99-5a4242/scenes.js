/* jackharlow scenes (Regions tab: More of the South; the Highlands, Louisville, Kentucky). CSS classes and ids prefixed jh- (the page's own anim-train is kept).
   1 TARC Route 17 Bardstown Road pulling in at the Bardstown Rd & Douglass Blvd stop (the old Douglass Loop), Highlands storefronts behind.
   2 Churchill Downs: the white twin spires on the grandstand roof, the dirt oval and a field of horses galloping by.
   3 Waterfront Park and the Big Four Bridge at night: the truss lit up in changing colors over the Ohio River, a white gazebo on the lawn.
   4 Atherton High School on Dundee Rd (his school, varsity soccer): red-brick front, a ball curling into the net.
   5 Bardstown Rd & Eastern Pkwy in the Highlands: green signs, HARLOW tagged on the wall, the downtown Louisville skyline behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes jhcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.jh-cloud{animation:jhcloud 30s linear infinite}.jh-cloud2{animation-delay:-15s}' +
    '@keyframes jhgallop{from{transform:translateX(-140px)}to{transform:translateX(470px)}}.jh-horses{animation:jhgallop 5.5s linear infinite}' +
    '@keyframes jhleg{0%,100%{transform:rotate(18deg)}50%{transform:rotate(-18deg)}}.jh-leg{transform-box:fill-box;transform-origin:50% 0;animation:jhleg .35s ease-in-out infinite}.jh-leg2{animation-delay:-.17s}' +
    '@keyframes jhflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-8deg)}}.jh-flag{transform-box:fill-box;transform-origin:0% 50%;animation:jhflag 1.1s ease-in-out infinite}' +
    '@keyframes jhhue{0%{stroke:#ff5a8a}25%{stroke:#ffd34d}50%{stroke:#4fd1ff}75%{stroke:#9b7bff}100%{stroke:#ff5a8a}}.jh-led{animation:jhhue 4s linear infinite}' +
    '@keyframes jhhuef{0%{fill:#ff5a8a}25%{fill:#ffd34d}50%{fill:#4fd1ff}75%{fill:#9b7bff}100%{fill:#ff5a8a}}.jh-ledf{animation:jhhuef 4s linear infinite}' +
    '@keyframes jhtw{0%,100%{opacity:.25}50%{opacity:1}}.jh-star{animation:jhtw 2.2s ease-in-out infinite}.jh-star2{animation-delay:-1.1s}' +
    '@keyframes jhwave{from{transform:translateX(0)}to{transform:translateX(-40px)}}.jh-wave{animation:jhwave 3s linear infinite}' +
    '@keyframes jhball{0%{transform:translate(0,0) rotate(0)}60%{transform:translate(150px,-34px) rotate(300deg)}100%{transform:translate(214px,-8px) rotate(520deg)}}.jh-ball{transform-box:fill-box;transform-origin:50% 50%;animation:jhball 2.4s ease-in infinite}' +
    '@keyframes jhnet{0%,80%{transform:translateX(0)}90%{transform:translateX(4px)}100%{transform:translateX(0)}}.jh-net{animation:jhnet 2.4s ease-in infinite}' +
    '@keyframes jhblink{0%,100%{opacity:.35}50%{opacity:1}}.jh-blink{animation:jhblink 1s steps(2) infinite}.jh-blink2{animation-delay:.5s}' +
    '@keyframes jhspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.jh-sp{animation:jhspray 1.4s ease-out infinite}.jh-sp2{animation-delay:.45s}.jh-sp3{animation-delay:.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let r = 0; r < h / 8; r++) { s += '<path d="M' + x + ' ' + (y + r * 8) + 'h' + w + '" stroke="' + m + '" stroke-width="1"/>'; for (let k = (r % 2) * 10; k < w; k += 20) s += '<path d="M' + (x + k) + ' ' + (y + r * 8) + 'v8" stroke="' + m + '" stroke-width="1"/>'; } return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 3 * s) + '" y="' + (y - 18 * s) + '" width="' + (6 * s) + '" height="' + (18 * s) + '" fill="#5a3a22"/><ellipse cx="' + x + '" cy="' + (y - 28 * s) + '" rx="' + (22 * s) + '" ry="' + (16 * s) + '" fill="' + (c || "#2f6a3a") + '"/><ellipse cx="' + (x - 10 * s) + '" cy="' + (y - 22 * s) + '" rx="' + (12 * s) + '" ry="' + (9 * s) + '" fill="#3c7c46"/>';
  const cloud = (cls, x, y, rx) => '<g class="jh-cloud ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + (rx / 4) + '" fill="#fff" opacity=".8"/></g>';
  const NAVY = "#123a6b", TGREEN = "#6cb33f", SKY = "#5fb4ff", GOLD = "#f2c14e", CORAL = "#ff7a6b";

  /* 1. TARC Route 17, Bardstown Rd & Douglass Blvd */
  function jhstop() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (150 + i * 36) + '" y="134" width="28" height="24" rx="3" fill="#22303c"/>').join("");
    const bus = '<g class="anim-train"><rect x="124" y="124" width="266" height="72" rx="10" fill="#f4f6f8" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M124 168h266v9H124z" fill="' + NAVY + '"/><path d="M124 177h266v4H124z" fill="' + TGREEN + '"/>' +
      '<rect x="128" y="134" width="16" height="52" fill="#22303c"/>' +
      '<rect x="318" y="127" width="66" height="9" rx="2" fill="#111"/><text x="351" y="134.5" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffb000">17 BARDSTOWN RD</text>' +
      '<circle cx="384" cy="186" r="3" fill="#fff6c2"/>' +
      '<circle cx="176" cy="198" r="13" fill="#222"/><circle cx="176" cy="198" r="6" fill="#aab"/><circle cx="340" cy="198" r="13" fill="#222"/><circle cx="340" cy="198" r="6" fill="#aab"/></g>';
    const shops = [
      [0, 40, 70, "#b5523b", "#8e3c2b"], [70, 54, 62, "#3f6f8f", "#2f566f"], [132, 34, 76, "#c98a3a", "#a26c28"],
      [208, 50, 64, "#7a4f8f", "#5d3a6e"], [272, 38, 70, "#4f8a5a", "#3a6a44"], [342, 52, 58, "#b5523b", "#8e3c2b"]
    ].map(([x, y, w, c, d]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (118 - y) + '" fill="' + c + '"/><rect x="' + x + '" y="' + y + '" width="' + w + '" height="6" fill="' + d + '"/>' +
      '<rect x="' + (x + 8) + '" y="' + (y + 14) + '" width="' + (w / 2 - 12) + '" height="16" fill="#f2e3b0" opacity=".85"/><rect x="' + (x + w / 2 + 4) + '" y="' + (y + 14) + '" width="' + (w / 2 - 12) + '" height="16" fill="#f2e3b0" opacity=".85"/>' +
      '<path d="M' + (x + 4) + ' 96h' + (w - 8) + 'l-6 10h' + (-(w - 20)) + 'z" fill="' + d + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jhs1)"/>' + cloud("", 80, 22, 34) + cloud("jh-cloud2", 60, 34, 22) +
      shops + '<rect x="0" y="116" width="400" height="8" fill="#bdb6a8"/>' + bus +
      '<rect x="0" y="212" width="400" height="48" fill="#55565a"/><path d="M0 216h400" stroke="#e8d070" stroke-width="3"/>' +
      '<rect x="22" y="148" width="4" height="66" fill="#5b6168"/><rect x="2" y="132" width="104" height="44" rx="3" fill="' + NAVY + '" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="54" y="145" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">TARC BUS STOP</text>' +
      '<rect x="8" y="151" width="24" height="18" rx="3" fill="' + TGREEN + '"/><text x="20" y="164" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">17</text>' +
      '<text x="36" y="160" ' + font + ' font-size="7.5" fill="#fff">BARDSTOWN RD</text><text x="36" y="169" ' + font + ' font-size="6.5" fill="#cfe3ff">&amp; DOUGLASS</text>' +
      '<text x="200" y="242" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".85">THE HIGHLANDS · LOUISVILLE, KY</text>',
      sky("jhs1", "#7fbfe8", "#d9eefa"));
  }

  /* 2. Churchill Downs twin spires */
  function jhdowns() {
    const spire = x => '<g><rect x="' + (x - 9) + '" y="58" width="18" height="34" fill="#f7f5ee" stroke="#9a9a92" stroke-width="1.2"/>' +
      '<rect x="' + (x - 5) + '" y="64" width="4" height="10" fill="#6a7a8a"/><rect x="' + (x + 1) + '" y="64" width="4" height="10" fill="#6a7a8a"/>' +
      '<rect x="' + (x - 11) + '" y="54" width="22" height="5" fill="#e9e6da" stroke="#9a9a92" stroke-width="1"/>' +
      '<path d="M' + (x - 9) + ' 54L' + x + ' 14L' + (x + 9) + ' 54z" fill="#f7f5ee" stroke="#9a9a92" stroke-width="1.2"/>' +
      '<path d="M' + x + ' 14L' + x + ' 54" stroke="#cfcab8" stroke-width="1"/>' +
      '<circle cx="' + x + '" cy="40" r="3.5" fill="none" stroke="#9a9a92" stroke-width="1"/>' +
      '<rect x="' + (x - .8) + '" y="4" width="1.6" height="11" fill="#555"/><path class="jh-flag" d="M' + (x + .8) + ' 4h9l-2 3l2 3h-9z" fill="#d6283a"/></g>';
    const horse = (x, c, j) => '<g transform="translate(' + x + ' 0)"><path d="M0 190q4 -14 22 -14h18l10 -10l6 2l-2 8q4 6 -2 10l-8 -2q-4 8 -22 8q-16 0 -22 -2z" fill="' + c + '"/>' +
      '<path d="M8 192v14M14 192v14" stroke="' + c + '" stroke-width="3" class="jh-leg"/><path d="M36 192v14M42 192v14" stroke="' + c + '" stroke-width="3" class="jh-leg jh-leg2"/>' +
      '<path d="M0 182q-8 2 -10 10" stroke="#222" stroke-width="3" fill="none"/>' +
      '<path d="M22 168q6 -12 14 -6l-2 10z" fill="' + j + '"/><circle cx="30" cy="160" r="4" fill="' + j + '"/><rect x="18" y="176" width="14" height="8" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jhs2)"/>' + cloud("", 90, 20, 30) + cloud("jh-cloud2", 50, 36, 20) +
      '<rect x="40" y="92" width="320" height="60" fill="#ecebe4" stroke="#a8a69a" stroke-width="2"/>' +
      '<path d="M30 92h340l-14 -8H44z" fill="#d8d5c8"/>' +
      Array.from({ length: 15 }, (_, i) => '<rect x="' + (50 + i * 21) + '" y="100" width="12" height="18" fill="#7f8f9c"/>').join("") +
      '<rect x="40" y="124" width="320" height="28" fill="#2f6a3a"/>' + Array.from({ length: 30 }, (_, i) => '<circle cx="' + (46 + i * 10.6) + '" cy="' + (132 + (i % 3) * 6) + '" r="2.4" fill="' + ["#ff7a6b", "#f2c14e", "#5fb4ff", "#fff"][i % 4] + '"/>').join("") +
      spire(176) + spire(224) +
      '<rect x="0" y="152" width="400" height="10" fill="#f1f1ea"/><path d="M0 152h400" stroke="#cfcfc6" stroke-width="2"/>' +
      Array.from({ length: 21 }, (_, i) => '<rect x="' + (i * 20) + '" y="150" width="2" height="12" fill="#cfcfc6"/>').join("") +
      '<rect x="0" y="162" width="400" height="56" fill="#a8734a"/><path d="M0 176h400M0 200h400" stroke="#946240" stroke-width="1" opacity=".6"/>' +
      '<g class="jh-horses">' + horse(0, "#5a3420", "#d6283a") + horse(70, "#2a1a12", GOLD) + horse(140, "#7a4a2a", SKY) + '</g>' +
      '<rect x="0" y="218" width="400" height="42" fill="#3f7f3c"/><path d="M0 218h400" stroke="#fff" stroke-width="3"/>' +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">CHURCHILL DOWNS · CENTRAL AVE</text>',
      sky("jhs2", "#79b7e6", "#e6f3fb"));
  }

  /* 3. Big Four Bridge over the Ohio, Waterfront Park gazebo */
  function jhbridge() {
    const trussTop = 'M20 96h360';
    const spans = [20, 110, 200, 290].map(x => '<path d="M' + x + ' 136L' + (x + 45) + ' 96L' + (x + 90) + ' 136M' + (x + 45) + ' 96v40" stroke="#ff5a8a" stroke-width="3" fill="none" class="jh-led"/>').join("");
    const piers = [20, 110, 200, 290, 380].map(x => '<rect x="' + (x - 6) + '" y="136" width="12" height="44" fill="#6e6a66"/>').join("");
    const stars = [[30, 20], [80, 40], [140, 16], [230, 30], [300, 14], [360, 40], [190, 52]].map(([x, y], i) => '<circle cx="' + x + '" cy="' + y + '" r="1.6" fill="#fff" class="jh-star' + (i % 2 ? " jh-star2" : "") + '"/>').join("");
    const gazebo = '<g transform="translate(300 182)"><path d="M-30 0l30 -22l30 22z" fill="#f5f2ea" stroke="#9a968a" stroke-width="1.5"/><rect x="-26" y="0" width="52" height="4" fill="#e6e2d6"/>' +
      [-24, -8, 8, 24].map(x => '<rect x="' + (x - 1.5) + '" y="4" width="3" height="28" fill="#f5f2ea"/>').join("") + '<rect x="-30" y="30" width="60" height="5" fill="#d8d4c8"/>' +
      '<circle cx="0" cy="-24" r="2.4" fill="' + GOLD + '" class="jh-blink"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jhs3)"/>' + stars +
      '<g fill="#2b3650">' + [[0, 70, 26], [28, 56, 20], [52, 80, 30], [86, 60, 18], [330, 66, 24], [356, 50, 30], [388, 74, 12]].map(([x, y, w]) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (100 - y) + '"/>').join("") + '</g>' +
      '<rect x="0" y="136" width="400" height="44" fill="#1d3a5a"/>' +
      '<g class="jh-wave"><path d="M0 150q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#4f7fa8" stroke-width="1.5" fill="none"/>' +
      '<path d="M0 166q10 -4 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" stroke="#4f7fa8" stroke-width="1.5" fill="none"/></g>' +
      piers + '<path d="' + trussTop + '" stroke="#ff5a8a" stroke-width="4" class="jh-led"/>' + spans +
      '<path d="M20 136h360" stroke="#8a8680" stroke-width="5"/>' +
      '<path d="M0 182q200 -14 400 0v78H0z" fill="#2f5a34"/>' + tree(40, 214, .9, "#24502c") + tree(96, 222, .7, "#24502c") + gazebo +
      '<path d="M140 260q30 -40 90 -50" stroke="#c9c3b2" stroke-width="10" fill="none" opacity=".6"/>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">BIG FOUR BRIDGE · WATERFRONT PARK</text>',
      sky("jhs3", "#0d1530", "#33406a"));
  }

  /* 4. Atherton High School, Dundee Rd */
  function jhatherton() {
    const wins = (x0, y) => Array.from({ length: 5 }, (_, i) => '<rect x="' + (x0 + i * 22) + '" y="' + y + '" width="12" height="16" fill="#dfe8ef" stroke="#f4f0e6" stroke-width="1.5"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#jhs4)"/>' + cloud("", 70, 24, 30) + cloud("jh-cloud2", 40, 40, 18) +
      bricks(30, 40, 340, 86, "#a8483a", "#86362b") +
      '<rect x="160" y="28" width="80" height="98" fill="#b4513f"/>' + bricks(160, 28, 80, 98, "#b4513f", "#8e3c2f") +
      '<rect x="30" y="38" width="340" height="5" fill="#efe6d2"/><rect x="156" y="24" width="88" height="6" fill="#efe6d2"/>' +
      wins(42, 54) + wins(42, 86) + wins(260, 54) + wins(260, 86) +
      '<rect x="174" y="40" width="52" height="14" fill="#efe6d2"/><text x="200" y="51" text-anchor="middle" ' + font + ' font-size="8" fill="#5a2a1c">ATHERTON</text>' +
      [176, 190, 204, 218].map(x => '<rect x="' + x + '" y="60" width="6" height="66" fill="#f4f0e6"/>').join("") +
      '<rect x="182" y="94" width="36" height="32" fill="#3a2a22"/>' +
      '<rect x="0" y="126" width="400" height="10" fill="#c9c2b2"/>' +
      '<rect x="0" y="136" width="400" height="124" fill="#4a9a46"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="136" width="25" height="124" fill="#55a851"/>').join("") +
      '<path d="M0 200h400M200 136v124" stroke="#fff" stroke-width="2" opacity=".8"/><circle cx="200" cy="200" r="28" fill="none" stroke="#fff" stroke-width="2" opacity=".8"/>' +
      '<g class="jh-net"><rect x="300" y="160" width="80" height="48" fill="none" stroke="#fff" stroke-width="3"/>' +
      Array.from({ length: 8 }, (_, i) => '<path d="M' + (306 + i * 10) + ' 160v48" stroke="#fff" stroke-width=".8" opacity=".7"/>').join("") +
      Array.from({ length: 4 }, (_, i) => '<path d="M300 ' + (170 + i * 10) + 'h80" stroke="#fff" stroke-width=".8" opacity=".7"/>').join("") + '</g>' +
      '<g class="jh-ball"><circle cx="96" cy="214" r="8" fill="#fff" stroke="#222" stroke-width="1.5"/><path d="M93 210l3 -2l3 2l-1 4h-4z" fill="#222"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">ATHERTON HIGH · DUNDEE RD</text>',
      sky("jhs4", "#8cc6ee", "#e8f4fb"));
  }

  /* 5. Bardstown Rd & Eastern Pkwy, downtown skyline behind */
  function jhcorner() {
    const towers = '<g fill="#5b6a86" opacity=".95">' +
      '<rect x="236" y="40" width="34" height="92"/><path d="M236 40q17 -26 34 0z"/><rect x="251" y="6" width="4" height="12"/>' +
      '<rect x="276" y="56" width="26" height="76"/><path d="M276 56l13 -12l13 12z"/><rect x="306" y="30" width="30" height="102"/><rect x="340" y="62" width="24" height="70"/><rect x="368" y="48" width="28" height="84"/><rect x="214" y="72" width="20" height="60"/></g>' +
      '<g fill="#f2e3b0" opacity=".7">' + Array.from({ length: 12 }, (_, i) => '<rect x="' + (242 + (i % 3) * 9) + '" y="' + (52 + Math.floor(i / 3) * 16) + '" width="4" height="6"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#jhs5)"/>' + cloud("", 120, 24, 30) +
      towers + '<rect x="0" y="130" width="400" height="6" fill="#7a7f86"/>' +
      bricks(0, 136, 262, 92, "#8a4a36", "#6c3828") +
      tag("HARLOW", 16, 196, 46, SKY, -5) + tag("PRIVATE GARDEN", 14, 222, 14, GOLD, -3) + tag("YOUNG JACK", 156, 222, 15, CORAL, -4) +
      '<g class="jh-sp"><circle cx="232" cy="176" r="3" fill="' + SKY + '" opacity=".7"/></g><g class="jh-sp jh-sp2"><circle cx="238" cy="170" r="2" fill="' + SKY + '" opacity=".7"/></g><g class="jh-sp jh-sp3"><circle cx="228" cy="168" r="2" fill="' + GOLD + '" opacity=".7"/></g>' +
      '<rect x="276" y="104" width="5" height="124" fill="#5b6168"/>' + sign(286, 112, 108, "BARDSTOWN RD") + sign(286, 138, 108, "EASTERN PKWY") +
      '<rect x="0" y="228" width="400" height="32" fill="#55565a"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".5"/>' +
      '<text x="340" y="220" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">THE HIGHLANDS, KY</text>',
      sky("jhs5", "#ff9a7a", "#ffe2b8"));
  }

  window.SCENES = { jhstop, jhdowns, jhbridge, jhatherton, jhcorner };
})();
