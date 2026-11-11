/* drakemilligan scenes (Regions: HOUSTON + TEXAS; Genres: country; born in Arlington TX, raised in Mansfield, Legacy High School; played Elvis
   in CMT's Sun Records (Memphis) before his senior year ended; America's Got Talent 2022; BBR / Stoney Creek).
   CSS classes prefixed dmg- (the page's own anim-train is kept). No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const RED = "#c8312a", CREAM = "#f4ead8", TEAL = "#3f8f8a", GOLD = "#e3b04b", BRICK = "#9a4a30";
  const css = '<style>' +
    '@keyframes dmgglow{0%,100%{opacity:.45}50%{opacity:1}}.dmg-glow{animation:dmgglow 2.2s ease-in-out infinite}.dmg-g2{animation-delay:-1.1s}' +
    '@keyframes dmgcloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.dmg-cl{animation:dmgcloud 14s ease-in-out infinite alternate}' +
    '@keyframes dmgcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.dmg-car{animation:dmgcar 6s linear infinite}' +
    '@keyframes dmgspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.dmg-spin{transform-box:fill-box;transform-origin:50% 50%;animation:dmgspin 2s linear infinite}' +
    '@keyframes dmgball{0%{transform:translate(0,0)}50%{transform:translate(90px,-60px)}100%{transform:translate(180px,0)}}.dmg-ball{animation:dmgball 2.6s ease-in-out infinite}' +
    '@keyframes dmgflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.dmg-flag{transform-box:fill-box;transform-origin:0 50%;animation:dmgflag 1.4s ease-in-out infinite}' +
    '@keyframes dmgnote{0%{transform:translate(0,0);opacity:1}100%{transform:translate(14px,-40px);opacity:0}}.dmg-note{animation:dmgnote 2.4s ease-out infinite}.dmg-n2{animation-delay:-.8s}.dmg-n3{animation-delay:-1.6s}' +
    '@keyframes dmgspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.dmg-sp{animation:dmgspray 1.4s ease-out infinite}.dmg-sp2{animation-delay:.45s}' +
    '@keyframes dmgbeam{0%,100%{opacity:.18}50%{opacity:.4}}.dmg-beam{animation:dmgbeam 2s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const cap = (txt, y) => '<text x="200" y="' + (y || 252) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const mesq = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M0 0v-14l-8 -10M0 -14l9 -12" stroke="#4a3624" stroke-width="3" fill="none"/><ellipse cx="-9" cy="-26" rx="12" ry="7" fill="#6a8a3a"/><ellipse cx="9" cy="-28" rx="13" ry="7" fill="#7a9a42"/></g>';
  /* US route shield: white shield on black square */
  const usShield = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><rect x="-18" y="-18" width="36" height="36" fill="#111"/><path d="M-14 -14h28q2 14 -4 22q-6 8 -10 10q-4 -2 -10 -10q-6 -8 -4 -22z" fill="#fff"/><text x="0" y="5" text-anchor="middle" ' + font + ' font-size="12" fill="#111">' + n + '</text></g>';
  const pickup = (c, s) => '<g transform="scale(' + (s || 1) + ')"><rect x="0" y="6" width="74" height="20" rx="4" fill="' + c + '"/><path d="M42 6v-14h18l12 14z" fill="' + c + '"/><path d="M46 4v-9h12l8 9z" fill="#bfe0ee"/>' +
    '<circle cx="16" cy="28" r="7" fill="#222"/><circle cx="16" cy="28" r="3" fill="#aaa"/><circle cx="58" cy="28" r="7" fill="#222"/><circle cx="58" cy="28" r="3" fill="#aaa"/><rect x="70" y="12" width="5" height="4" fill="#ffe9a0" class="dmg-glow"/></g>';

  /* ROOM 0: US 287 south out of Fort Worth: the Mansfield city limit sign, the green exit sign for Broad St, a pickup rolling off the freeway, flat Texas prairie */
  function dmghwy() {
    return svg(
      '<rect width="400" height="260" fill="url(#dmg1)"/>' +
      '<g class="dmg-cl"><ellipse cx="80" cy="30" rx="50" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="22" rx="44" ry="8" fill="#fff" opacity=".5"/></g>' +
      '<path d="M0 160h400v20H0z" fill="#b9a86a"/>' + [20, 60, 330, 372].map((x, i) => mesq(x, 166, .9 + (i % 2) * .2)).join("") +
      '<rect x="0" y="176" width="400" height="84" fill="#4a4a50"/><path d="M0 218h400" stroke="#fff" stroke-width="2.5" stroke-dasharray="20 14"/><path d="M0 178h400" stroke="#fff" stroke-width="2"/><path d="M0 256h400" stroke="#f0d040" stroke-width="2.5"/>' +
      /* overhead exit sign */
      '<rect x="140" y="36" width="5" height="142" fill="#8a8e94"/><rect x="368" y="36" width="5" height="142" fill="#8a8e94"/><rect x="140" y="40" width="233" height="5" fill="#8a8e94"/>' +
      '<rect x="152" y="48" width="208" height="84" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' + usShield(184, 80, "287") +
      '<text x="212" y="72" ' + font + ' font-size="11" fill="#fff">SOUTH</text><text x="212" y="96" ' + font + ' font-size="19" fill="#fff">Broad St</text><text x="212" y="118" ' + font + ' font-size="13" fill="#fff">Mansfield</text>' +
      '<path d="M326 100l16 16M342 100v16h-16" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>' +
      /* city limit sign */
      '<rect x="56" y="130" width="4" height="48" fill="#8a8e94"/><rect x="22" y="100" width="72" height="34" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="2"/>' +
      '<text x="58" y="115" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">MANSFIELD</text><text x="58" y="128" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">CITY LIMIT</text>' +
      '<g class="anim-train"><g transform="translate(170 188)">' + pickup(RED) + '</g></g>' +
      '<g class="dmg-car"><rect x="0" y="228" width="40" height="14" rx="3" fill="#d8d8dc"/><circle cx="9" cy="242" r="4" fill="#222"/><circle cx="31" cy="242" r="4" fill="#222"/></g>' +
      cap("US 287 SOUTH  ·  BROAD ST EXIT  ·  MANSFIELD", 252),
      sky("dmg1", "#7fb6e0", "#f1ead6"));
  }

  /* ROOM 1: Historic downtown Mansfield on Main Street: the old brick storefronts with tin awnings, a vintage water tower over the roofs, flags waving */
  function dmgmain() {
    const front = (x, w, c, h, aw) => '<rect x="' + x + '" y="' + (176 - h) + '" width="' + w + '" height="' + h + '" fill="' + c + '"/><rect x="' + x + '" y="' + (176 - h) + '" width="' + w + '" height="8" fill="#5a2a18"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (x + 8 + i * (w - 16) / 3) + '" y="' + (190 - h) + '" width="' + ((w - 16) / 3 - 6) + '" height="22" rx="' + ((w - 16) / 6 - 3) + '" fill="#f4dfa8" class="dmg-glow ' + (i % 2 ? "dmg-g2" : "") + '"/>').join("") +
      '<path d="M' + x + ' 130h' + w + 'l-6 10h-' + (w - 12) + 'z" fill="' + aw + '"/><rect x="' + (x + 6) + '" y="140" width="' + (w - 12) + '" height="36" fill="#2a2a30"/><rect x="' + (x + 10) + '" y="144" width="' + (w - 20) + '" height="20" fill="#bfe0ee" opacity=".7"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dmg2)"/>' +
      /* water tower behind */
      '<g transform="translate(320 18)"><ellipse cx="0" cy="18" rx="30" ry="8" fill="#d8dde2"/><rect x="-30" y="18" width="60" height="26" fill="#d8dde2"/><ellipse cx="0" cy="44" rx="30" ry="7" fill="#b8bdc4"/>' +
      '<text x="0" y="36" text-anchor="middle" ' + font + ' font-size="9" fill="' + RED + '">MANSFIELD</text><path d="M-6 10l6 -8l6 8z" fill="#b8bdc4"/><path d="M-22 48l-8 46M22 48l8 46M-8 48l-2 46M8 48l2 46" stroke="#9a9fa6" stroke-width="3"/></g>' +
      front(0, 96, BRICK, 120, TEAL) + front(96, 90, "#b5683e", 104, "#8a3a2a") + front(186, 104, "#7e3a26", 128, TEAL) + front(290, 110, "#a8573a", 112, "#5a6a3a") +
      /* flags on the posts */
      [60, 240].map(x => '<rect x="' + x + '" y="30" width="3" height="60" fill="#8a8e94"/><g class="dmg-flag"><rect x="' + (x + 3) + '" y="30" width="30" height="18" fill="' + RED + '"/><rect x="' + (x + 3) + '" y="30" width="30" height="9" fill="#fff"/><rect x="' + (x + 3) + '" y="30" width="11" height="18" fill="#1d3a7a"/><circle cx="' + (x + 8.5) + '" cy="39" r="2.4" fill="#fff"/></g>').join("") +
      '<rect x="0" y="176" width="400" height="12" fill="#a89e8e"/><rect x="0" y="188" width="400" height="72" fill="#3a3a40"/><path d="M0 226h400" stroke="#f0d040" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="dmg-car"><g transform="translate(0 200)">' + pickup("#3a5a8a", .8) + '</g></g>' +
      cap("MAIN STREET  ·  HISTORIC DOWNTOWN MANSFIELD"),
      sky("dmg2", "#8cc0e6", "#f4ecda"));
  }

  /* ROOM 2: Friday night at Legacy High School, home of the Broncos: the stadium lights, the scoreboard, a football spiraling over the field */
  function dmglegacy() {
    return svg(
      '<rect width="400" height="260" fill="url(#dmg3)"/>' +
      [[40, 30], [90, 50], [200, 20], [260, 40], [350, 26]].map(p => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.2" fill="#fff"/>').join("") +
      /* light towers with beams */
      [30, 370].map(x => '<path d="M' + x + ' 34l' + (x < 200 ? 140 : -140) + ' 150h-60z" fill="#fff6c8" class="dmg-beam"/><rect x="' + (x - 2) + '" y="30" width="4" height="120" fill="#8a8e94"/><rect x="' + (x - 18) + '" y="18" width="36" height="16" fill="#3a3a40"/>' +
        Array.from({ length: 8 }, (_, i) => '<circle cx="' + (x - 14 + (i % 4) * 9.5) + '" cy="' + (22 + Math.floor(i / 4) * 8) + '" r="3" fill="#fffbe0" class="dmg-glow"/>').join("")).join("") +
      /* bleachers + press box */
      '<path d="M60 150l20 -40h240l20 40z" fill="#5a5f6a"/>' + Array.from({ length: 6 }, (_, i) => '<path d="M' + (80 - i * 3.4) + ' ' + (116 + i * 6.4) + 'h' + (240 + i * 6.8) + '" stroke="#7a808a" stroke-width="2"/>').join("") +
      '<rect x="160" y="80" width="80" height="30" fill="#2a2e38"/><rect x="166" y="86" width="68" height="12" fill="#ffe7a0" class="dmg-glow dmg-g2"/>' +
      /* scoreboard */
      '<g transform="translate(150 34)"><rect x="0" y="0" width="100" height="40" fill="#111"/><rect x="2" y="2" width="96" height="10" fill="#1d3a7a"/><text x="50" y="10" text-anchor="middle" ' + font + ' font-size="7" fill="#fff">LEGACY BRONCOS</text>' +
      '<text x="20" y="22" text-anchor="middle" ' + font + ' font-size="6" fill="#ddd">HOME</text><text x="80" y="22" text-anchor="middle" ' + font + ' font-size="6" fill="#ddd">GUEST</text>' +
      '<text x="20" y="36" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">21</text><text x="80" y="36" text-anchor="middle" ' + font + ' font-size="12" fill="' + GOLD + '">14</text><text x="50" y="34" text-anchor="middle" ' + font + ' font-size="7" fill="#e33">4TH</text></g>' +
      /* field */
      '<rect x="0" y="150" width="400" height="110" fill="#2f7a3a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50 + 0) + ' 150l' + ((i - 4) * 14) + ' 110" stroke="#fff" stroke-width="2" opacity=".75"/>').join("") +
      '<path d="M0 150h400" stroke="#fff" stroke-width="3"/>' +
      '<g class="dmg-ball"><g transform="translate(100 200)"><ellipse cx="0" cy="0" rx="8" ry="5" fill="#7a3a1a" transform="rotate(-30)"/><path d="M-3 -1l6 -2" stroke="#fff" stroke-width="1"/></g></g>' +
      cap("FRIDAY NIGHT  ·  LEGACY HIGH SCHOOL  ·  MANSFIELD"),
      sky("dmg3", "#0b1028", "#2a2a50"));
  }

  /* ROOM 3: Memphis, Union Ave: the little brick studio where rock and roll was cut (he played Elvis on screen in Sun Records), a record spinning in the window */
  function dmgsun() {
    return svg(
      '<rect width="400" height="260" fill="url(#dmg4)"/>' +
      '<rect x="0" y="180" width="400" height="80" fill="#3a3a40"/><rect x="0" y="174" width="400" height="8" fill="#a8a094"/><path d="M0 222h400" stroke="#f0d040" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* neighbouring low buildings */
      '<rect x="0" y="110" width="80" height="64" fill="#6a6a70"/><rect x="320" y="100" width="80" height="74" fill="#5a5e66"/>' +
      /* the studio: two-storey cream-and-brick corner building */
      '<rect x="80" y="70" width="240" height="104" fill="' + CREAM + '"/><rect x="80" y="70" width="240" height="8" fill="#d8ccb4"/>' +
      '<rect x="80" y="124" width="240" height="50" fill="' + BRICK + '"/>' + Array.from({ length: 4 }, (_, r) => '<path d="M80 ' + (132 + r * 11) + 'h240" stroke="#7a3420" stroke-width="1.2"/>').join("") +
      [100, 150, 200, 250].map(x => '<rect x="' + x + '" y="86" width="34" height="28" fill="#2a3a4a"/><rect x="' + (x + 2) + '" y="88" width="30" height="24" fill="#ffd98a" opacity=".6" class="dmg-glow"/>').join("") +
      '<rect x="120" y="134" width="80" height="34" fill="#1a1a20"/><rect x="230" y="134" width="40" height="40" fill="#3a2a1a"/><circle cx="264" cy="156" r="2" fill="' + GOLD + '"/>' +
      /* record spinning in the window */
      '<g transform="translate(160 151)"><g class="dmg-spin"><circle r="15" fill="#111"/><circle r="11" fill="none" stroke="#333" stroke-width="1"/><circle r="5" fill="' + GOLD + '"/><circle r="1.2" fill="#111"/></g></g>' +
      /* plain text sign over the door */
      '<rect x="150" y="44" width="100" height="22" fill="#111"/><text x="200" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="' + GOLD + '">SUN STUDIO</text>' +
      ['dmg-note', 'dmg-note dmg-n2', 'dmg-note dmg-n3'].map((c, i) => '<g class="' + c + '"><text x="' + (184 + i * 10) + '" y="136" font-size="15" fill="' + GOLD + '">&#9835;</text></g>').join("") +
      '<g class="dmg-car"><g transform="translate(0 192)">' + pickup("#d8d8dc", .8) + '</g></g>' +
      cap("UNION AVE  ·  MEMPHIS  ·  WHERE HE PLAYED THE KING"),
      sky("dmg4", "#6aa6d6", "#f0e2c8"));
  }

  /* ROOM 4: his corner: Main St and Broad St in downtown Mansfield, the water tower behind, his name tagged on the old brick */
  function dmgcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#dmg5)"/>' +
      '<g transform="translate(300 20)"><ellipse cx="0" cy="18" rx="34" ry="9" fill="#c8cdd4"/><rect x="-34" y="18" width="68" height="28" fill="#c8cdd4"/><ellipse cx="0" cy="46" rx="34" ry="8" fill="#a8adb4"/>' +
      '<text x="0" y="38" text-anchor="middle" ' + font + ' font-size="10" fill="' + RED + '">MANSFIELD</text><path d="M-25 52l-9 72M25 52l9 72M-9 52l-2 72M9 52l2 72" stroke="#8a8e94" stroke-width="3"/><path d="M-30 90h60" stroke="#8a8e94" stroke-width="2"/></g>' +
      '<rect x="216" y="120" width="184" height="54" fill="#6a3a28"/>' + [228, 268, 308, 348].map(x => '<rect x="' + x + '" y="132" width="26" height="20" fill="#ffd98a" class="dmg-glow"/>').join("") +
      '<path d="M0 164h400v96H0z" fill="#3a3a40"/><path d="M0 204h400" stroke="#f0d040" stroke-width="2" stroke-dasharray="16 12"/><rect x="0" y="160" width="400" height="6" fill="#a8a094"/>' +
      /* brick wall with tag */
      '<rect x="0" y="88" width="180" height="76" fill="#8a3e28"/>' + Array.from({ length: 6 }, (_, r) => '<path d="M0 ' + (96 + r * 12) + 'h180" stroke="#5e2416" stroke-width="1.5"/>').join("") +
      tag("DRAKE", 16, 124, 30, GOLD, -6) + tag("MILLIGAN", 18, 156, 24, CREAM, -6) +
      '<circle cx="164" cy="126" r="3" fill="' + GOLD + '" class="dmg-sp"/><circle cx="170" cy="122" r="2" fill="' + GOLD + '" class="dmg-sp dmg-sp2"/>' +
      '<rect x="196" y="58" width="5" height="146" fill="#8a8e94"/>' + sign(150, 64, 98, "MAIN ST") + sign(150, 88, 98, "BROAD ST") +
      '<g transform="translate(262 194)">' + pickup(RED, .9) + '</g>' +
      cap("MAIN ST & BROAD ST  ·  DOWNTOWN MANSFIELD"),
      sky("dmg5", "#1c1a3a", "#a86a5a"));
  }

  window.SCENES = { dmghwy, dmgmain, dmglegacy, dmgsun, dmgcorner };
})();
