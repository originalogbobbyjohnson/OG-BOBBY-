/* davidbanner scenes (Regions tab: More of the South; West Jackson, Mississippi). CSS classes and ids prefixed db- (the page's own anim-train is kept).
   1 JTRAN at Union Station, 300 W Capitol St, Bay G: the 4R Robinson Road bus pulling in at the red-brick 1927 depot.
   2 The Mississippi State Capitol: pale limestone Beaux-Arts front, copper-green dome, the gold eagle on top.
   3 Provine High, 2400 Robinson Rd, "Ram City" (his school): Friday night lights, the RAMS scoreboard, a pass in the air.
   4 Farish Street historic district: the Alamo Theatre marquee, a candy Cadillac rolling by on 22s, rims spinning.
   5 Robinson Rd & Ellis Ave, West Jackson: green signs, BANNER tagged on the wall, downtown Jackson and the Capitol dome behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dbcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.db-cloud{animation:dbcloud 28s linear infinite}.db-cloud2{animation-delay:-14s}' +
    '@keyframes dbglint{0%,100%{opacity:.2}50%{opacity:1}}.db-glint{animation:dbglint 1.6s ease-in-out infinite}' +
    '@keyframes dbflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-7deg)}}.db-flag{transform-box:fill-box;transform-origin:0% 50%;animation:dbflag 1.2s ease-in-out infinite}' +
    '@keyframes dbball{0%{transform:translate(0,0)}50%{transform:translate(110px,-60px)}100%{transform:translate(220px,0)}}.db-ball{animation:dbball 2.6s ease-in-out infinite}' +
    '@keyframes dbblink{0%,100%{opacity:.35}50%{opacity:1}}.db-led{animation:dbblink .9s steps(2) infinite}.db-led2{animation-delay:.45s}' +
    '@keyframes dbroll{from{transform:translateX(-260px)}to{transform:translateX(460px)}}.db-car{animation:dbroll 6s linear infinite}' +
    '@keyframes dbspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.db-rim{transform-box:fill-box;transform-origin:50% 50%;animation:dbspin .5s linear infinite}' +
    '@keyframes dbchase{0%,100%{opacity:1}50%{opacity:.25}}.db-bulb{animation:dbchase .8s steps(2) infinite}.db-bulb2{animation-delay:.4s}' +
    '@keyframes dbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.db-sp{animation:dbspray 1.4s ease-out infinite}.db-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const bricks = (x, y, w, h, c, m) => { let s = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>'; for (let r = 0; r < h / 8; r++) { s += '<path d="M' + x + ' ' + (y + r * 8) + 'h' + w + '" stroke="' + m + '" stroke-width="1"/>'; for (let k = (r % 2) * 10; k < w; k += 20) s += '<path d="M' + (x + k) + ' ' + (y + r * 8) + 'v8" stroke="' + m + '" stroke-width="1"/>'; } return s; };
  const oak = (x, y, s) => '<rect x="' + (x - 3 * s) + '" y="' + (y - 20 * s) + '" width="' + (6 * s) + '" height="' + (20 * s) + '" fill="#5a3a22"/><ellipse cx="' + x + '" cy="' + (y - 30 * s) + '" rx="' + (26 * s) + '" ry="' + (18 * s) + '" fill="#2f5a34"/><ellipse cx="' + (x - 12 * s) + '" cy="' + (y - 24 * s) + '" rx="' + (14 * s) + '" ry="' + (10 * s) + '" fill="#3a6a3e"/>';
  const GOLD = "#f0c040", CANDY = "#8e1b2c", JBLUE = "#1d5fa8";
  const cloud = (cls, x, y, rx) => '<g class="db-cloud ' + cls + '"><ellipse cx="' + x + '" cy="' + y + '" rx="' + rx + '" ry="' + (rx / 4) + '" fill="#fff" opacity=".75"/></g>';

  /* 1. JTRAN, Union Station Bay G, 4R Robinson Road */
  function dbstop() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (64 + i * 38) + '" y="132" width="30" height="24" rx="3" fill="#24323e"/>').join("");
    const bus = '<g class="anim-train"><rect x="40" y="122" width="320" height="72" rx="9" fill="#f2f4f6" stroke="#7d868f" stroke-width="2"/>' + win +
      '<path d="M40 166h320v10H40z" fill="' + JBLUE + '"/><path d="M40 176h320v4H40z" fill="#3aa35a"/>' +
      '<rect x="44" y="132" width="14" height="50" fill="#24323e"/>' +
      '<rect x="300" y="125" width="54" height="9" rx="2" fill="#111"/><text x="327" y="132.5" text-anchor="middle" ' + font + ' font-size="7" fill="#ffb000">4R ROBINSON</text>' +
      '<circle cx="352" cy="184" r="3" fill="#fff6c2"/>' +
      '<circle cx="100" cy="196" r="13" fill="#222"/><circle cx="100" cy="196" r="6" fill="#aab"/><circle cx="300" cy="196" r="13" fill="#222"/><circle cx="300" cy="196" r="6" fill="#aab"/></g>';
    const arches = [0, 1, 2, 3, 4].map(i => '<path d="M' + (70 + i * 54) + ' 108v-22q14 -16 28 0v22z" fill="#2c3a46" stroke="#e9dcc0" stroke-width="3"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dbs1)"/>' + cloud("", 80, 26, 34) + cloud("db-cloud2", 60, 44, 22) +
      bricks(50, 52, 300, 64, "#9a4a32", "#7a3524") +
      '<rect x="44" y="44" width="312" height="10" fill="#e9dcc0"/><rect x="150" y="30" width="100" height="16" fill="#e9dcc0"/>' +
      '<text x="200" y="42" text-anchor="middle" ' + font + ' font-size="10" fill="#5a2a1c">UNION STATION</text>' + arches +
      '<rect x="0" y="114" width="400" height="8" fill="#bdb6a8"/>' + bus +
      '<rect x="0" y="210" width="400" height="50" fill="#55565a"/><path d="M0 214h400" stroke="#d8c060" stroke-width="3"/>' +
      '<rect x="22" y="150" width="4" height="64" fill="#5b6168"/><rect x="2" y="136" width="98" height="40" rx="3" fill="#111" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="51" y="150" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">JTRAN · BAY G</text>' +
      '<rect x="8" y="155" width="22" height="16" rx="3" fill="' + JBLUE + '"/><text x="19" y="167" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">4R</text>' +
      '<text x="34" y="167" ' + font + ' font-size="8.5" fill="#fff">ROBINSON RD</text>' +
      '<text x="200" y="240" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" opacity=".85">300 W CAPITOL ST · JACKSON, MS</text>',
      sky("dbs1", "#7fb6e6", "#d6ecfa"));
  }

  /* 2. Mississippi State Capitol */
  function dbcapitol() {
    const cols = Array.from({ length: 8 }, (_, i) => '<rect x="' + (154 + i * 13) + '" y="126" width="6" height="58" fill="#f4f0e6"/>').join("");
    const wins = (x0) => Array.from({ length: 4 }, (_, i) => '<rect x="' + (x0 + i * 22) + '" y="140" width="10" height="16" fill="#8a8f96"/><rect x="' + (x0 + i * 22) + '" y="166" width="10" height="14" fill="#8a8f96"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dbs2)"/>' + cloud("", 60, 30, 30) + cloud("db-cloud2", 90, 52, 20) +
      '<rect x="40" y="130" width="320" height="60" fill="#e6e0d2" stroke="#b9b1a0" stroke-width="2"/>' + wins(54) + wins(268) +
      '<rect x="30" y="122" width="340" height="9" fill="#d6cfbe"/>' +
      '<path d="M146 126l54 -22l54 22z" fill="#e6e0d2" stroke="#b9b1a0" stroke-width="2"/>' + cols +
      '<rect x="160" y="74" width="80" height="34" fill="#e6e0d2" stroke="#b9b1a0" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (166 + i * 12.5) + '" y="80" width="5" height="26" fill="#f4f0e6"/>').join("") +
      '<path d="M164 76q36 -56 72 0z" fill="#5f9e8a" stroke="#3e7464" stroke-width="2"/><path d="M180 76q20 -40 40 0" fill="none" stroke="#3e7464" stroke-width="1.5"/>' +
      '<rect x="194" y="24" width="12" height="10" fill="#e6e0d2"/><rect x="198" y="16" width="4" height="9" fill="#c9a24a"/>' +
      '<g class="db-glint"><path d="M200 4l9 6l-9 3l-9 -3z" fill="' + GOLD + '"/><path d="M186 8l14 5l14 -5" fill="none" stroke="' + GOLD + '" stroke-width="3"/></g>' +
      '<rect x="0" y="190" width="400" height="20" fill="#c9c2b2"/><path d="M150 190h100l20 30H130z" fill="#ddd6c6"/>' +
      '<rect x="0" y="208" width="400" height="52" fill="#4f8a3c"/>' + oak(40, 210, 1.1) + oak(360, 212, 1.2) + oak(96, 216, .8) + oak(306, 216, .8) +
      '<text x="200" y="244" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">MISSISSIPPI STATE CAPITOL</text>',
      sky("dbs2", "#6aa8de", "#e0f0fb"));
  }

  /* 3. Provine High, Ram City */
  function dbrams() {
    const light = (x) => '<rect x="' + (x - 2) + '" y="40" width="4" height="120" fill="#6e737b"/><rect x="' + (x - 18) + '" y="26" width="36" height="16" fill="#3a3e46"/>' +
      [0, 1, 2].map(i => '<circle cx="' + (x - 12 + i * 12) + '" cy="34" r="4" fill="#fffbe0" class="db-led' + (i % 2 ? ' db-led2' : '') + '"/>').join("");
    let yard = ""; for (let i = 0; i < 9; i++) yard += '<path d="M' + (20 + i * 45) + ' 172L' + (-10 + i * 52) + ' 250" stroke="#fff" stroke-width="2" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dbs3)"/>' +
      [[30, 20], [120, 12], [260, 18], [350, 30], [200, 40]].map(p => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.2" fill="#fff"/>').join("") +
      light(40) + light(360) +
      '<rect x="130" y="40" width="140" height="70" rx="4" fill="#111" stroke="#8a8f96" stroke-width="3"/><rect x="190" y="110" width="20" height="50" fill="#6e737b"/>' +
      '<text x="200" y="60" text-anchor="middle" ' + font + ' font-size="15" fill="' + GOLD + '">RAMS</text>' +
      '<text x="162" y="96" text-anchor="middle" font-family="monospace" font-weight="700" font-size="22" fill="#ff4a3a">21</text><text x="238" y="96" text-anchor="middle" font-family="monospace" font-weight="700" font-size="22" fill="#ff4a3a">14</text>' +
      '<text x="162" y="72" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">HOME</text><text x="238" y="72" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">GUEST</text>' +
      '<rect x="0" y="150" width="400" height="22" fill="#2a2e36"/>' + Array.from({ length: 40 }, (_, i) => '<circle cx="' + (6 + i * 10) + '" cy="' + (156 + (i % 3) * 5) + '" r="2.5" fill="' + ['#7a3a8a', GOLD, '#ddd'][i % 3] + '"/>').join("") +
      '<rect x="0" y="172" width="400" height="88" fill="#3f8a3a"/>' + yard +
      '<path d="M300 230v-50M286 180h28M286 180v-22M314 180v-22" stroke="' + GOLD + '" stroke-width="4" fill="none"/>' +
      '<g class="db-ball"><ellipse cx="60" cy="210" rx="9" ry="5.5" fill="#8a4a22" stroke="#fff" stroke-width="1"/></g>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">RAM CITY · ROBINSON RD</text>',
      sky("dbs3", "#0c1030", "#2a2e5a"));
  }

  /* 4. Farish Street, Alamo Theatre, a Cadillac on 22s */
  function dbcaddy() {
    const bulbs = Array.from({ length: 14 }, (_, i) => '<circle cx="' + (128 + i * 11) + '" cy="72" r="2.6" fill="#fff3a0" class="db-bulb' + (i % 2 ? ' db-bulb2' : '') + '"/><circle cx="' + (128 + i * 11) + '" cy="110" r="2.6" fill="#fff3a0" class="db-bulb' + (i % 2 ? '' : ' db-bulb2') + '"/>').join("");
    const rim = (cx) => '<circle cx="' + cx + '" cy="206" r="15" fill="#151515"/><g class="db-rim"><circle cx="' + cx + '" cy="206" r="11" fill="#d8dde2"/>' +
      [0, 60, 120].map(a => '<path d="M' + (cx - 10) + ' 206h20" stroke="#8a9098" stroke-width="2.5" transform="rotate(' + a + ' ' + cx + ' 206)"/>').join("") + '<circle cx="' + cx + '" cy="206" r="3" fill="#8a9098"/></g>';
    const car = '<g class="db-car"><path d="M16 202v-20q4 -8 20 -10l30 -4l22 -20h76l26 20l40 6q12 2 12 14v14z" fill="' + CANDY + '" stroke="#3a0810" stroke-width="2"/>' +
      '<path d="M94 166l18 -16h28v16zM146 166v-16h24l20 16z" fill="#9cc6e8"/><path d="M16 190h236" stroke="#f3d0d6" stroke-width="2" opacity=".6"/>' +
      '<rect x="244" y="186" width="10" height="8" fill="#fff6c2"/><rect x="14" y="186" width="6" height="8" fill="#ff4a3a"/>' + rim(62) + rim(206) + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dbs4)"/>' +
      bricks(0, 40, 110, 140, "#7a5a44", "#5e4432") + bricks(290, 50, 110, 130, "#8a3f2c", "#6a2c1e") +
      [12, 60].map(x => '<rect x="' + x + '" y="60" width="34" height="40" fill="#e7c98a" opacity=".85"/>').join("") +
      [302, 350].map(x => '<rect x="' + x + '" y="70" width="34" height="40" fill="#e7c98a" opacity=".85"/>').join("") +
      '<rect x="110" y="30" width="180" height="150" fill="#d9c7a0" stroke="#9e8a62" stroke-width="2"/>' +
      '<rect x="120" y="66" width="160" height="50" fill="#1a1a1a" stroke="' + GOLD + '" stroke-width="2"/>' + bulbs +
      '<text x="200" y="98" text-anchor="middle" ' + font + ' font-size="22" fill="#ff5a3a" letter-spacing="4">ALAMO</text>' +
      '<rect x="190" y="30" width="20" height="36" fill="#1a1a1a"/>' + [38, 48, 58].map((y, i) => '<circle cx="200" cy="' + y + '" r="2.6" fill="#fff3a0" class="db-bulb' + (i % 2 ? ' db-bulb2' : '') + '"/>').join("") + '' +
      '<rect x="150" y="128" width="100" height="52" fill="#3a2a22"/><path d="M200 128v52" stroke="#d9c7a0" stroke-width="2"/>' +
      '<rect x="0" y="180" width="400" height="10" fill="#b8b2a6"/><rect x="0" y="190" width="400" height="70" fill="#4a4b50"/><path d="M0 240h400" stroke="#d8c060" stroke-width="2" stroke-dasharray="16 12"/>' +
      car +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">FARISH STREET · JACKSON</text>',
      sky("dbs4", "#1e1a3a", "#5a3a5e"));
  }

  /* 5. Robinson Rd & Ellis Ave, West Jackson */
  function dbcorner() {
    const towers = '<g fill="#5b6a80" opacity=".9"><rect x="250" y="40" width="26" height="80"/><rect x="282" y="60" width="22" height="60"/><rect x="310" y="30" width="30" height="90"/><rect x="346" y="56" width="24" height="64"/><rect x="226" y="70" width="20" height="50"/></g>' +
      '<g fill="#8ab0a0"><path d="M150 120v-24h40v24z" fill="#cfc8b8"/><path d="M152 96q18 -30 36 0z"/><rect x="168" y="60" width="4" height="8" fill="' + GOLD + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dbs5)"/>' + cloud("", 120, 24, 30) +
      towers + '<rect x="0" y="118" width="400" height="6" fill="#7a7f86"/>' +
      bricks(0, 124, 250, 104, "#6e3b2e", "#552c22") +
      tag("BANNER", 18, 188, 44, GOLD, -5) + tag("601", 36, 216, 22, "#ff6a6a", -3) + tag("CROOKED LETTAZ", 120, 214, 14, "#8fc8ff", -4) +
      '<g class="db-sp"><circle cx="236" cy="168" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="db-sp db-sp2"><circle cx="242" cy="162" r="2" fill="' + GOLD + '" opacity=".7"/></g>' +
      '<rect x="270" y="98" width="5" height="130" fill="#5b6168"/>' + sign(280, 106, 112, "ROBINSON RD") + sign(280, 132, 112, "ELLIS AVE") +
      '<rect x="0" y="228" width="400" height="32" fill="#55565a"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".5"/>' +
      '<text x="336" y="214" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">WEST JACKSON, MS</text>',
      sky("dbs5", "#ff9a6a", "#ffe0b0"));
  }

  window.SCENES = { dbstop, dbcapitol, dbrams, dbcaddy, dbcorner };
})();
