/* Da Brat scenes (Regions tab: Chicago; the West Side). CSS classes and ids prefixed db- (the page's own anim-train is kept).
   1 Cicero on the CTA Green Line: the elevated steel 'L' over Lake St, a silver train sliding in, black station sign with the green bullet.
   2 The Apostolic church where she sang in the choir several times a week: West Side brick church, the choir's purple robes swaying, notes floating.
   3 Kenwood Academy (5015 S Blackstone, opened 1969), where she ran track and played basketball: brown-brick modern school, Columbia blue + red BRONCOS banner, a ball bouncing.
   4 The 1992 rap contest that got her to Kris Kross and So So Def: a TV stage, spotlights sweeping, the mic up front, the trophy waiting.
   5 Lake St and Cicero Ave under the Green Line: green signs, DA BRAT tagged, the 'L' rolling overhead and the downtown skyline behind at dusk.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dbblink{0%,100%{opacity:1}50%{opacity:.25}}.db-blink{animation:dbblink 1.2s infinite}.db-blink2{animation-delay:-.6s}' +
    '@keyframes dbsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.db-sway{transform-box:fill-box;transform-origin:50% 100%;animation:dbsway 1.6s ease-in-out infinite}.db-sway2{animation-delay:-.8s}' +
    '@keyframes dbnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-44px);opacity:0}}.db-note{animation:dbnote 2.6s ease-out infinite}.db-note2{animation-delay:-1.3s}' +
    '@keyframes dbball{0%,100%{transform:translateY(0)}50%{transform:translateY(-38px)}}.db-ball{animation:dbball .9s ease-in-out infinite}' +
    '@keyframes dbflag{0%,100%{transform:skewY(0)}50%{transform:skewY(-6deg)}}.db-flag{transform-box:fill-box;transform-origin:0% 50%;animation:dbflag 1.4s ease-in-out infinite}' +
    '@keyframes dbspot{0%,100%{transform:rotate(-14deg)}50%{transform:rotate(14deg)}}.db-spot{transform-box:fill-box;transform-origin:50% 0%;animation:dbspot 3s ease-in-out infinite}.db-spot2{animation-delay:-1.5s}' +
    '@keyframes dbel{from{transform:translateX(-260px)}to{transform:translateX(460px)}}.db-el{animation:dbel 7s linear infinite}' +
    '@keyframes dbcar{from{transform:translateX(460px)}to{transform:translateX(-120px)}}.db-car{animation:dbcar 6s linear infinite}' +
    '@keyframes dbspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.db-sp{animation:dbspray 1.4s ease-out infinite}.db-sp2{animation-delay:.5s}' +
    '@keyframes dbtw{0%,100%{opacity:.25}50%{opacity:1}}.db-tw{animation:dbtw 1.8s ease-in-out infinite}.db-tw2{animation-delay:-.9s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 15.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const label = (x, w, txt) => '<rect x="' + x + '" y="234" width="' + w + '" height="18" rx="3" fill="#000" opacity=".55"/><text x="' + (x + w / 2) + '" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 4 ? "" : "db-tw" + (i % 8 ? "" : " db-tw2")) + '" cx="' + ((i * 67) % 400) + '" cy="' + (6 + (i * 31) % 66) + '" r="' + (i % 3 ? 0.8 : 1.3) + '" fill="#fff" opacity=".7"/>').join("");
  const GREEN = "#009b3a", PINK = "#ff5fa2", GOLD = "#f2c14e", PURPLE = "#6b3fa0", CBLUE = "#7fb2e5", RED = "#c8102e";
  const girders = (y, h) => '<rect x="0" y="' + y + '" width="400" height="' + h + '" fill="#3c4a3f"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M' + (i * 20) + ' ' + y + 'l10 ' + h + 'l10 -' + h + '" fill="none" stroke="#2a352c" stroke-width="2"/>').join("");

  /* 1. Cicero on the Green Line, up over Lake St */
  function dbstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="82" width="30" height="20" rx="3" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><rect x="34" y="72" width="332" height="52" rx="8" fill="#d7dce1" stroke="#7d868f" stroke-width="2"/>' + win +
      '<rect x="34" y="108" width="332" height="4" fill="' + GREEN + '"/><rect x="330" y="78" width="30" height="24" rx="3" fill="#1c2630"/>' +
      '<rect x="292" y="74" width="34" height="7" rx="1" fill="#111"/><text x="309" y="80" text-anchor="middle" ' + font + ' font-size="5.5" fill="#7dff9b">HARLEM</text>' +
      '<circle cx="358" cy="116" r="3" fill="#fff6c2"/></g>';
    const cols = [30, 150, 270, 370].map(x => '<rect x="' + x + '" y="140" width="12" height="74" fill="#3c4a3f"/><path d="M' + (x - 8) + ' 140l14 14l14 -14" fill="none" stroke="#2a352c" stroke-width="3"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dbs1)"/>' +
      '<g fill="#b29a7c"><rect x="0" y="40" width="60" height="100"/><rect x="330" y="30" width="70" height="110"/></g>' +
      '<g fill="#e7d3a3" opacity=".7">' + [10, 34, 344, 370].map(x => '<rect x="' + x + '" y="56" width="12" height="14"/><rect x="' + x + '" y="84" width="12" height="14"/>').join("") + '</g>' +
      /* platform canopy */
      '<path d="M24 34h352l-10 10H34z" fill="#7d8a80"/><rect x="34" y="44" width="332" height="4" fill="#3c4a3f"/>' + [70, 200, 330].map(x => '<rect x="' + (x - 3) + '" y="48" width="6" height="24" fill="#3c4a3f"/>').join("") +
      '<rect class="db-blink" x="110" y="49" width="40" height="3" fill="#fff3c4"/><rect class="db-blink db-blink2" x="250" y="49" width="40" height="3" fill="#fff3c4"/>' +
      train + girders(124, 16) + cols +
      '<rect x="0" y="214" width="400" height="46" fill="#3a3a3e"/><path d="M0 240h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<rect x="128" y="154" width="150" height="34" rx="3" fill="#111"/><text x="140" y="177" ' + font + ' font-size="17" fill="#fff">Cicero</text>' + badge(206, 171, "GREEN", GREEN) +
      '<text x="203" y="206" text-anchor="middle" ' + font + ' font-size="8" fill="#fff" opacity=".85">LAKE ST · WEST SIDE</text>',
      sky("dbs1", "#6aa0d6", "#f4dcae"));
  }

  /* 2. The West Side Apostolic church, the choir in purple */
  function dbchurch() {
    const singer = (x, i) => '<g class="db-sway' + (i % 2 ? " db-sway2" : "") + '"><circle cx="' + x + '" cy="160" r="9" fill="#2a1a12"/><path d="M' + (x - 14) + ' 212q2 -40 14 -42q12 2 14 42z" fill="' + PURPLE + '"/><path d="M' + (x - 6) + ' 172l6 14 6 -14" fill="none" stroke="' + GOLD + '" stroke-width="3"/></g>';
    const note = (x, cls) => '<g class="' + cls + '"><circle cx="' + x + '" cy="132" r="4" fill="' + GOLD + '"/><path d="M' + (x + 4) + ' 132v-14l8 3" fill="none" stroke="' + GOLD + '" stroke-width="2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dbs2)"/>' +
      '<rect x="40" y="70" width="320" height="150" fill="#8f4a33"/><g stroke="#7a3d2a" stroke-width="1">' + Array.from({ length: 14 }, (_, i) => '<path d="M40 ' + (80 + i * 10) + 'h320"/>').join("") + '</g>' +
      '<path d="M30 74l170 -40 170 40z" fill="#6a3424"/><rect x="194" y="6" width="12" height="34" fill="#f4f1ea"/><rect x="186" y="14" width="28" height="9" fill="#f4f1ea"/>' +
      '<path d="M70 96h40v40H70zM290 96h40v40h-40z" fill="#6a4fb3"/><path d="M90 96v40M70 116h40M310 96v40M290 116h40" stroke="' + GOLD + '" stroke-width="2"/>' +
      '<path d="M168 136h64v-28q-32 -26 -64 0z" fill="#e8c86a" opacity=".8"/>' +
      '<rect x="120" y="66" width="160" height="20" fill="#f4f1ea"/><text x="200" y="80" text-anchor="middle" ' + font + ' font-size="10" fill="#3b1d12">APOSTOLIC CHURCH · CHOIR</text>' +
      '<rect x="0" y="212" width="400" height="48" fill="#8a8a8e"/>' +
      [110, 150, 190, 230, 270].map(singer).join("") + note(80, "db-note") + note(320, "db-note db-note2") + note(350, "db-note") +
      label(120, 160, "SUNDAY, CHOIR STAND, WEST SIDE"),
      sky("dbs2", "#9cc6ee", "#f8ecd3"));
  }

  /* 3. Kenwood Academy */
  function dbkenwood() {
    const wins = Array.from({ length: 10 }, (_, c) => '<rect x="' + (40 + c * 30) + '" y="78" width="18" height="42" fill="#cfe1ec" stroke="#4a3426" stroke-width="2"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#dbs3)"/>' +
      '<rect x="20" y="60" width="360" height="100" fill="#7a5238"/><rect x="16" y="52" width="368" height="10" fill="#d9d3c6"/><rect x="20" y="124" width="360" height="8" fill="#d9d3c6"/>' + wins +
      '<rect x="160" y="132" width="80" height="28" fill="#2c3a44"/><text x="200" y="46" text-anchor="middle" ' + font + ' font-size="14" fill="#1d2a33">KENWOOD ACADEMY</text>' +
      '<rect x="356" y="0" width="3" height="60" fill="#888"/><g class="db-flag"><rect x="359" y="2" width="30" height="10" fill="' + CBLUE + '"/><rect x="359" y="12" width="30" height="10" fill="' + RED + '"/></g>' +
      '<rect x="40" y="134" width="90" height="22" fill="' + CBLUE + '" stroke="' + RED + '" stroke-width="3"/><text x="85" y="150" text-anchor="middle" ' + font + ' font-size="13" fill="' + RED + '">BRONCOS</text>' +
      /* track + court */
      '<rect x="0" y="160" width="400" height="100" fill="#b5523b"/><path d="M0 182h400M0 204h400M0 226h400" stroke="#f4f1ea" stroke-width="2"/>' +
      '<rect x="300" y="150" width="4" height="70" fill="#666"/><rect x="290" y="146" width="30" height="20" fill="#f4f1ea" stroke="#666" stroke-width="2"/><path d="M296 166h18" stroke="' + RED + '" stroke-width="3"/>' +
      '<g class="db-ball"><circle cx="274" cy="214" r="9" fill="#e67e22" stroke="#5a2d0c" stroke-width="1.5"/><path d="M265 214h18M274 205v18" stroke="#5a2d0c" stroke-width="1.2"/></g>' +
      label(120, 160, "TRACK + HOOPS · HYDE PARK"),
      sky("dbs3", "#8cc0ea", "#eef4f8"));
  }

  /* 4. The 1992 rap contest stage */
  function dbcontest() {
    const spot = (x, cls) => '<g class="' + cls + '"><path d="M' + x + ' 0l-40 200h80z" fill="#fff4c2" opacity=".18"/><rect x="' + (x - 8) + '" y="0" width="16" height="10" fill="#555"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dbs4)"/>' + stars(26) +
      '<rect x="40" y="40" width="320" height="120" fill="#1d1630" stroke="' + PINK + '" stroke-width="3"/>' +
      '<text x="200" y="88" text-anchor="middle" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="34" fill="' + GOLD + '" stroke="#000" stroke-width="3" paint-order="stroke">RAP CONTEST</text>' +
      '<text class="db-blink" x="200" y="120" text-anchor="middle" ' + font + ' font-size="16" fill="' + PINK + '">CHICAGO · 1992</text>' +
      spot(90, "db-spot") + spot(310, "db-spot db-spot2") +
      '<rect x="0" y="180" width="400" height="80" fill="#3a2a1e"/><path d="M0 180h400" stroke="' + GOLD + '" stroke-width="3"/>' +
      '<rect x="196" y="132" width="4" height="50" fill="#bbb"/><rect x="190" y="124" width="16" height="12" rx="5" fill="#333"/><rect x="186" y="180" width="24" height="4" fill="#bbb"/>' +
      '<path d="M298 150h28l-4 18h-20z" fill="' + GOLD + '" stroke="#5a4210" stroke-width="2"/><rect x="306" y="168" width="12" height="8" fill="' + GOLD + '"/><rect x="300" y="176" width="24" height="5" fill="#5a4210"/>' +
      label(100, 200, "THE WIN THAT LED TO SO SO DEF"),
      sky("dbs4", "#120a24", "#3a1f4a"));
  }

  /* 5. Lake St and Cicero Ave under the Green Line */
  function dbcorner() {
    const el = '<g class="db-el"><rect x="0" y="20" width="200" height="30" rx="5" fill="#d7dce1" stroke="#7d868f" stroke-width="2"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (12 + i * 38) + '" y="26" width="24" height="12" rx="2" fill="#1c2630"/>').join("") + '<rect x="0" y="42" width="200" height="3" fill="' + GREEN + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#dbs5)"/>' +
      /* downtown skyline behind */
      '<g fill="#3e3550"><rect x="270" y="70" width="18" height="40"/><rect x="292" y="58" width="24" height="52"/><path d="M320 110V40h14v-12h6v12h14v70z"/><rect x="358" y="64" width="20" height="46"/><rect x="380" y="80" width="16" height="30"/></g>' +
      el + girders(50, 14) + [60, 200, 340].map(x => '<rect x="' + x + '" y="64" width="10" height="40" fill="#3c4a3f"/>').join("") +
      /* wall */
      '<rect x="0" y="104" width="260" height="100" fill="#6f5a6a"/>' + '<g stroke="#5e4b59" stroke-width="1">' + Array.from({ length: 10 }, (_, i) => '<path d="M0 ' + (114 + i * 10) + 'h260"/>').join("") + '</g>' +
      tag("DA BRAT", 18, 168, 46, PINK, -6) + tag("SO SO DEF", 120, 196, 22, GOLD, 3) +
      '<g fill="' + PINK + '"><circle class="db-sp" cx="236" cy="160" r="3"/><circle class="db-sp db-sp2" cx="228" cy="168" r="2.5"/></g>' +
      '<rect x="326" y="110" width="6" height="98" fill="#6b6b6b"/>' + sign(286, 114, 86, "W Lake St") + sign(278, 140, 102, "N Cicero Ave") +
      '<rect x="0" y="204" width="400" height="56" fill="#3a3a3e"/><path d="M0 236h400" stroke="#f2c200" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="db-car"><rect x="0" y="222" width="50" height="14" rx="4" fill="#2c6fb5"/><circle cx="12" cy="238" r="5" fill="#111"/><circle cx="38" cy="238" r="5" fill="#111"/></g>',
      sky("dbs5", "#e86f8f", "#ffd3a8"));
  }

  window.SCENES = { dbstation, dbchurch, dbkenwood, dbcontest, dbcorner };
})();
