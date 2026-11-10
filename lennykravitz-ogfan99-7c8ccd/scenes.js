/* lennykravitz scenes (NYC map, Manhattan: grew up on East 82nd St off Madison Av on the Upper East Side, went to P.S. 6 across the street;
   weekends at his grandparents' house at Throop and Kosciuszko in Bed-Stuy). 400 x 260 SVGs.
   CSS classes prefixed lk- (the page's own anim-train is kept on the train).
   0 77 St (6), underground on the Lexington Av line: white tile, green 6 bullet, the train pulling in.
   1 P.S. 6 on the Upper East Side: the old school building, flag waving, a schoolyard bell.
   2 The corner diner down the block (he says he tied his shoe for the first time at its counter): copper lanterns, steam off the coffee.
   3 Grandma's house in Bed-Stuy: a brownstone with a stoop at Throop Av, leaves coming down.
   4 E 82nd St and Madison Av: green street signs, LENNY tagged on the wall, limestone townhouses and Central Park trees behind. */
(function () {
  const W = 400, H = 260;
  const GOLD = "#f2b134", COPPER = "#c8733a", TEAL = "#2aa6a0", BONE = "#efe6d2", GREEN6 = "#00933c";
  const css = '<style>' +
    '@keyframes lkflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.35}55%{opacity:.95}}.lk-flk{animation:lkflick 2.8s infinite}' +
    '@keyframes lkflag{0%,100%{transform:skewY(0)}50%{transform:skewY(6deg)}}.lk-flag{transform-box:fill-box;transform-origin:0% 50%;animation:lkflag 1.6s ease-in-out infinite}' +
    '@keyframes lkbell{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}.lk-bell{transform-box:fill-box;transform-origin:50% 0%;animation:lkbell 1.2s ease-in-out infinite}' +
    '@keyframes lksteam{0%{transform:translateY(0);opacity:0}30%{opacity:.8}100%{transform:translateY(-30px);opacity:0}}.lk-st{animation:lksteam 2.6s ease-out infinite}.lk-st2{animation-delay:-1.3s}' +
    '@keyframes lkleaf{0%{transform:translate(0,-20px) rotate(0)}100%{transform:translate(40px,260px) rotate(360deg)}}.lk-leaf{animation:lkleaf 7s linear infinite}.lk-l2{animation-delay:-2.5s}.lk-l3{animation-delay:-5s}' +
    '@keyframes lkswing{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}.lk-sw{transform-box:fill-box;transform-origin:50% 0%;animation:lkswing 3s ease-in-out infinite}' +
    '@keyframes lkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-24px);opacity:0}}.lk-sp{animation:lkspray 1.4s ease-out infinite}.lk-spb{animation-delay:.5s}' +
    '@keyframes lkwalk{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.lk-walk{animation:lkwalk 15s linear infinite}.lk-wk2{animation-delay:-7s}' +
    '@keyframes lkcab{from{transform:translateX(-100px)}to{transform:translateX(480px)}}.lk-cab{animation:lkcab 7s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const bullet = (x, y, r, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/><text x="' + x + '" y="' + (y + r * 0.42) + '" text-anchor="middle" ' + font + ' font-size="' + (r * 1.25) + '" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 6 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3322"/><circle cx="' + x + '" cy="' + (y - 14 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 8 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 8 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const leaf = (x, cls) => '<g class="lk-leaf ' + cls + '"><path d="M' + x + ' 0q6 -6 12 0q-6 6 -12 0z" fill="' + COPPER + '"/></g>';

  /* 0. 77 St (6), underground */
  function lktrain() {
    const tiles = Array.from({ length: 14 }, (_, i) => '<path d="M0 ' + (i * 8) + 'h400" stroke="#d8d4c8" stroke-width="1"/>').join("") + Array.from({ length: 34 }, (_, i) => '<path d="M' + (i * 12) + ' 0v112" stroke="#d8d4c8" stroke-width="1"/>').join("");
    const wins = Array.from({ length: 8 }, (_, i) => '<rect x="' + (78 + i * 32) + '" y="134" width="22" height="18" rx="2" fill="#2a3440"/>').join("");
    const train = '<g class="anim-train"><rect x="60" y="124" width="290" height="62" rx="6" fill="#c8ccd2" stroke="#7a8088" stroke-width="2"/>' + wins +
      '<rect x="60" y="160" width="290" height="5" fill="#8a9098"/><rect x="62" y="130" width="14" height="42" rx="2" fill="#2a3440"/>' + bullet(208, 174, 7, "6", GREEN6) +
      '<circle cx="66" cy="178" r="3" fill="#fff6c2"/></g>';
    return svg('<rect width="400" height="260" fill="#efeadc"/>' + tiles +
      '<rect x="0" y="100" width="400" height="12" fill="#5a8a5a"/><rect x="0" y="112" width="400" height="86" fill="#2a2a2e"/>' +
      [40, 200, 360].map(x => '<rect x="' + (x - 3) + '" y="112" width="6" height="86" fill="#4a4a50"/>').join("") +
      '<rect x="30" y="44" width="80" height="22" fill="' + BONE + '" stroke="#5a8a5a" stroke-width="3"/><text x="70" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#2a5a2a">77</text>' +
      '<rect x="290" y="44" width="80" height="22" fill="' + BONE + '" stroke="#5a8a5a" stroke-width="3"/><text x="330" y="60" text-anchor="middle" ' + font + ' font-size="13" fill="#2a5a2a">77</text>' +
      train +
      '<rect x="0" y="198" width="400" height="62" fill="#8a8a86"/><rect x="0" y="198" width="400" height="5" fill="#e8c020"/>' +
      '<rect x="134" y="12" width="132" height="34" rx="2" fill="#111"/><path d="M134 16h132" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="186" y="38" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">77 St</text>' + bullet(242, 31, 9, "6", GREEN6) +
      '<circle class="lk-flk" cx="120" cy="104" r="3" fill="#fff3c2"/><circle class="lk-flk" cx="280" cy="104" r="3" fill="#fff3c2"/>' +
      '<rect x="20" y="222" width="190" height="20" rx="2" fill="#111"/><text x="115" y="236" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Lexington Av line, Upper East Side</text>');
  }

  /* 1. P.S. 6 */
  function lkschool() {
    const wins = Array.from({ length: 8 }, (_, i) => '<rect x="' + (78 + i * 32) + '" y="70" width="18" height="24" fill="#cfe2ee" stroke="' + BONE + '" stroke-width="2"/><rect x="' + (78 + i * 32) + '" y="108" width="18" height="24" fill="#cfe2ee" stroke="' + BONE + '" stroke-width="2"/>').join("");
    return svg('<rect width="400" height="260" fill="url(#lks1)"/>' +
      '<rect x="60" y="50" width="280" height="120" fill="#a8583e"/><rect x="56" y="44" width="288" height="10" fill="' + BONE + '"/><rect x="60" y="100" width="280" height="4" fill="' + BONE + '"/>' + wins +
      '<rect x="176" y="136" width="48" height="34" fill="#3a2418"/><rect x="170" y="130" width="60" height="8" fill="' + BONE + '"/>' +
      '<rect x="150" y="54" width="100" height="12" rx="1" fill="' + BONE + '"/><text x="200" y="64" text-anchor="middle" ' + font + ' font-size="9" fill="#5a2a1a">PUBLIC SCHOOL 6</text>' +
      '<rect x="352" y="20" width="3" height="150" fill="#ccc"/><g class="lk-flag"><rect x="355" y="22" width="34" height="20" fill="#fff"/>' + Array.from({ length: 4 }, (_, i) => '<rect x="355" y="' + (22 + i * 5) + '" width="34" height="2.5" fill="#c8302c"/>').join("") + '<rect x="355" y="22" width="14" height="10" fill="#1f3f8a"/></g>' +
      '<g transform="translate(36 84)"><rect x="-2" y="-10" width="4" height="10" fill="#555"/><g class="lk-bell"><path d="M-10 14q0 -14 10 -14q10 0 10 14z" fill="' + GOLD + '" stroke="#8a6a2a" stroke-width="1.5"/><circle cx="0" cy="16" r="3" fill="#8a6a2a"/></g></g>' +
      '<rect x="0" y="170" width="400" height="90" fill="#9a9a96"/><path d="M0 170h400" stroke="#6a6a66" stroke-width="3"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (30 + i * 76) + '" y="190" width="50" height="4" fill="#fff" opacity=".6"/>').join("") +
      '<circle cx="120" cy="220" r="10" fill="#e84a3a"/><path d="M110 220h20M120 210v20" stroke="#a82a1a" stroke-width="1.5"/>' +
      '<rect x="150" y="234" width="200" height="18" rx="2" fill="#111"/><text x="250" y="247" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">P.S. 6, right across the street</text>',
      sky("lks1", "#7fb4e6", "#eaf0f6"));
  }

  /* 2. The corner diner */
  function lkdiner() {
    const lantern = (x, cls) => '<g class="lk-sw ' + cls + '"><path d="M' + x + ' 0v22" stroke="#3a2a1a" stroke-width="2"/><path d="M' + (x - 10) + ' 22h20l-4 6h-12z" fill="' + COPPER + '"/><rect x="' + (x - 8) + '" y="28" width="16" height="20" fill="#ffd27a" stroke="' + COPPER + '" stroke-width="3"/><path d="M' + (x - 10) + ' 48h20l-4 5h-12z" fill="' + COPPER + '"/></g>';
    const stool = (x) => '<rect x="' + (x - 3) + '" y="196" width="6" height="40" fill="#999"/><ellipse cx="' + x + '" cy="194" rx="14" ry="6" fill="#c8302c"/><ellipse cx="' + x + '" cy="236" rx="12" ry="3" fill="#777"/>';
    const cup = (x) => '<rect x="' + (x - 8) + '" y="158" width="16" height="14" rx="2" fill="#fff" stroke="#aaa"/><path d="M' + (x + 8) + ' 161q6 0 6 5t-6 5" stroke="#aaa" fill="none" stroke-width="2"/>' +
      '<path class="lk-st" d="M' + (x - 3) + ' 154q-4 -6 0 -12q4 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/><path class="lk-st lk-st2" d="M' + (x + 3) + ' 154q-4 -6 0 -12q4 -6 0 -12" stroke="#fff" stroke-width="2" fill="none" opacity=".7"/>';
    return svg('<rect width="400" height="260" fill="#3a2a22"/><rect width="400" height="150" fill="#5a3a2a"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="0" width="38" height="150" fill="#6a4632"/>').join("") +
      lantern(80, "") + lantern(200, "lk-sw") + lantern(320, "") +
      '<rect x="40" y="80" width="140" height="56" fill="#1a2a3a" stroke="#c8b07a" stroke-width="3"/><path d="M48 120q30 -20 60 0t60 0" stroke="#5a7aa0" stroke-width="2" fill="none"/><rect x="60" y="100" width="20" height="16" fill="#f7e7a8" opacity=".6"/>' +
      '<rect x="220" y="84" width="140" height="44" rx="3" fill="#111"/><text x="290" y="104" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">COFFEE  EGGS  PIE</text><text x="290" y="120" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">OPEN EARLY</text>' +
      '<rect x="0" y="150" width="400" height="10" fill="#c8c8c0"/><rect x="0" y="160" width="400" height="34" fill="#b84a2a"/><path d="M0 172h400" stroke="#d86a4a" stroke-width="2"/>' +
      cup(140) + cup(270) + stool(60) + stool(140) + stool(220) + stool(300) +
      '<g transform="translate(330 214)"><path d="M0 14h30q6 0 6 -6h-14l-4 -6h-12z" fill="#2a2a2a"/><path d="M8 6l6 4M14 4l6 4M20 3l4 3" stroke="#fff" stroke-width="1.5"/></g>' +
      '<rect x="20" y="238" width="190" height="16" rx="2" fill="#111"/><text x="115" y="250" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">The old diner down the block</text>');
  }

  /* 3. Grandma's house in Bed-Stuy */
  function lkbedstuy() {
    const house = (x, c, door) => '<g transform="translate(' + x + ' 30)"><rect x="0" y="0" width="120" height="170" fill="' + c + '"/><rect x="-4" y="-6" width="128" height="10" fill="#5a3a2a"/>' +
      [16, 50, 84].map(wx => '<rect x="' + wx + '" y="20" width="20" height="30" fill="#cfe2ee" stroke="' + BONE + '" stroke-width="2"/><rect x="' + wx + '" y="66" width="20" height="30" fill="#cfe2ee" stroke="' + BONE + '" stroke-width="2"/>').join("") +
      '<rect x="' + (door ? 78 : 14) + '" y="112" width="26" height="40" fill="#3a2418" stroke="' + BONE + '" stroke-width="2"/>' +
      '<path d="M' + (door ? 74 : 10) + ' 152h34v6h6v6h6v6h6v6' + '" fill="none"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (door ? 66 - i * 6 : 6 - i * 6) + '" y="' + (152 + i * 6) + '" width="' + (42 + i * 12) + '" height="6" fill="#7a5040"/>').join("") + '</g>';
    return svg('<rect width="400" height="260" fill="url(#lks3)"/>' +
      house(10, "#8a5a44", true) + house(140, "#7a4a3a", true) + house(270, "#9a6a50", false) +
      '<rect x="0" y="200" width="400" height="20" fill="#b8b2a6"/><rect x="0" y="220" width="400" height="40" fill="#55555b"/>' +
      tree(134, 214, 1.3, "#c8732a") + tree(266, 214, 1.2, "#d89a3a") +
      leaf(60, "") + leaf(200, "lk-l2") + leaf(330, "lk-l3") +
      '<rect x="0" y="0" width="0" height="0"/>' +
      '<rect x="10" y="236" width="6" height="0"/>' +
      '<rect x="130" y="236" width="140" height="16" rx="2" fill="#111"/><text x="200" y="248" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">Grandma&apos;s block, Bed-Stuy</text>',
      sky("lks3", "#f2a35a", "#fde6b8"));
  }

  /* 4. E 82nd St and Madison Av */
  function lkcorner() {
    const walker = (cls, y, c) => '<g class="lk-walk ' + cls + '"><circle cx="0" cy="' + (y - 22) + '" r="4" fill="#3a2a24"/><rect x="-4" y="' + (y - 18) + '" width="8" height="12" rx="2" fill="' + c + '"/><rect x="-3" y="' + (y - 6) + '" width="2.5" height="8" fill="#222"/><rect x="0.5" y="' + (y - 6) + '" width="2.5" height="8" fill="#222"/></g>';
    const town = (x, w, c) => '<rect x="' + x + '" y="70" width="' + w + '" height="156" fill="' + c + '"/><rect x="' + x + '" y="66" width="' + w + '" height="6" fill="#c8bea8"/>' +
      Array.from({ length: 3 }, (_, r) => Array.from({ length: Math.floor(w / 26) }, (_, i) => '<rect x="' + (x + 8 + i * 26) + '" y="' + (84 + r * 40) + '" width="14" height="24" fill="#2a3440" stroke="#f4eee0" stroke-width="1.5"/>').join("")).join("");
    const cab = '<g class="lk-cab"><path d="M0 238h80v-10l-10 -4l-8 -10h-34l-10 10l-18 4z" fill="#f2c200" stroke="#7a6000" stroke-width="1.5"/><path d="M30 224l6 -8h20l6 8z" fill="#cfe6f5"/><circle cx="16" cy="240" r="7" fill="#222"/><circle cx="64" cy="240" r="7" fill="#222"/></g>';
    return svg('<rect width="400" height="260" fill="url(#lks4)"/>' +
      tree(240, 90, 1.6, "#3f7a4a") + tree(290, 84, 1.8, "#2f6b3a") + tree(350, 92, 1.5, "#3a7a44") +
      town(220, 80, "#e8dcc0") + town(304, 96, "#d8ccb0") +
      '<rect x="0" y="96" width="200" height="130" fill="#b86a4a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M0 ' + (108 + i * 13) + 'h200" stroke="#a45a3c" stroke-width="1"/>').join("") +
      tag("LENNY", 14, 158, 38, GOLD, -6) + tag("LET LOVE RULE", 18, 198, 16, TEAL, -3) +
      '<rect x="0" y="226" width="400" height="34" fill="#55555b"/><rect x="0" y="224" width="400" height="4" fill="#9a9aa0"/>' + cab +
      walker("", 224, TEAL) + walker("lk-wk2", 224, COPPER) +
      '<rect x="206" y="92" width="6" height="134" fill="#2f2f2f"/>' + sign(214, 94, 100, "E 82 St") + sign(214, 120, 112, "Madison Av") +
      '<g class="lk-sp"><circle cx="150" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="lk-sp lk-spb"><circle cx="156" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>',
      sky("lks4", "#14183a", "#d88a5a"));
  }

  window.SCENES = { lktrain: lktrain, lkschool: lkschool, lkdiner: lkdiner, lkbedstuy: lkbedstuy, lkcorner: lkcorner };
})();
