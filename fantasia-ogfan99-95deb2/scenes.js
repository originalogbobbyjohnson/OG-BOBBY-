/* fantasia scenes (Regions tab: THE CAROLINAS; GENRES: R&B. Fantasia Barrino, born and raised in High Point, NC; won American Idol in 2004; High Point put up "home of Fantasia Barrino" welcome signs, and in 2024 gave her a street name and the key to the city at its Juneteenth celebration at the downtown ballpark). CSS classes prefixed fz- (the page's own anim-train is kept).
   1 High Point station, Amtrak (Piedmont and Carolinian): the old red-brick depot up on the street, the tracks down in the downtown train trench, a silver passenger train sliding in.
   2 The highway welcome sign into town: green sign, WELCOME TO HIGH POINT, HOME OF FANTASIA BARRINO, cars passing.
   3 The World's Largest Chest of Drawers on Hamilton St: the giant brown highboy with brass pulls and the two socks hanging out of a drawer.
   4 The downtown ballpark on Juneteenth 2024: brick front, green field, the stage, a big gold key to the city, fireworks.
   5 N Main St and E Lexington Ave in High Point: green signs, TASIA tagged on the wall, the furniture-market showroom towers behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes fzglow{0%,100%{opacity:.4}50%{opacity:1}}.fz-glow{animation:fzglow 2.4s ease-in-out infinite}.fz-g2{animation-delay:-1.2s}' +
    '@keyframes fznote{0%{transform:translate(0,0);opacity:0}15%{opacity:1}100%{transform:translate(-20px,-70px);opacity:0}}.fz-note{animation:fznote 3.6s ease-out infinite}.fz-n2{animation-delay:-1.2s}.fz-n3{animation-delay:-2.4s}' +
    '@keyframes fzsock{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(6deg)}}.fz-sock{transform-box:fill-box;transform-origin:50% 0%;animation:fzsock 2s ease-in-out infinite}.fz-k2{animation-delay:-1s}' +
    '@keyframes fzcar{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.fz-car{animation:fzcar 6s linear infinite}.fz-car2{animation-duration:8.5s;animation-delay:-3s}' +
    '@keyframes fzboom{0%{transform:scale(.1);opacity:0}20%{opacity:1}100%{transform:scale(1.2);opacity:0}}.fz-boom{transform-box:fill-box;transform-origin:50% 50%;animation:fzboom 2.4s ease-out infinite}.fz-b2{animation-delay:-.8s}.fz-b3{animation-delay:-1.6s}' +
    '@keyframes fzkey{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.fz-key{animation:fzkey 2s ease-in-out infinite}' +
    '@keyframes fzcloud{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.fz-cloud{animation:fzcloud 22s linear infinite}' +
    '@keyframes fzspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.fz-sp{animation:fzspray 1.4s ease-out infinite}.fz-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 4 ? "" : "fz-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>'; return s; };
  const tree = (x, y, s, c) => '<rect x="' + (x - 2 * s) + '" y="' + (y - 4 * s) + '" width="' + (4 * s) + '" height="' + (14 * s) + '" fill="#4a3424"/><circle cx="' + x + '" cy="' + (y - 10 * s) + '" r="' + (12 * s) + '" fill="' + c + '"/><circle cx="' + (x - 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/><circle cx="' + (x + 8 * s) + '" cy="' + (y - 4 * s) + '" r="' + (8 * s) + '" fill="' + c + '"/>';
  const cloud = (x, y, cls) => '<g class="fz-cloud ' + (cls || "") + '" opacity=".85"><circle cx="' + x + '" cy="' + y + '" r="12" fill="#fff"/><circle cx="' + (x + 14) + '" cy="' + (y - 6) + '" r="14" fill="#fff"/><circle cx="' + (x + 30) + '" cy="' + y + '" r="11" fill="#fff"/></g>';
  const GOLD = "#f2c14e", PURP = "#9b4dca", PINK = "#ff7aa8", BRICK = "#9a4a34";

  /* 1. High Point station, Amtrak: red-brick depot above, tracks in the downtown trench */
  function fzstation() {
    const car = x => '<rect x="' + x + '" y="172" width="150" height="50" rx="6" fill="#c9cfd6" stroke="#6b737e" stroke-width="2"/>' +
      '<rect x="' + x + '" y="198" width="150" height="4" fill="#c8102e"/><rect x="' + x + '" y="203" width="150" height="4" fill="#1b4a9a"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<rect x="' + (x + 8 + i * 23) + '" y="180" width="16" height="12" rx="2" fill="#20303f"/>').join("");
    const train = '<g class="anim-train">' + car(30) + car(184) + '<circle class="fz-glow" cx="330" cy="212" r="4" fill="#fff6c8"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fz-s1)"/>' + cloud(40, 30) + cloud(220, 46, "") +
      /* the depot up on street level */
      '<rect x="60" y="56" width="280" height="80" fill="' + BRICK + '" stroke="#5a2a1a" stroke-width="2"/>' +
      '<path d="M48 58L200 22L352 58z" fill="#3e4a4a"/><rect x="186" y="12" width="28" height="22" fill="' + BRICK + '"/><path d="M182 14L200 2L218 14z" fill="#3e4a4a"/>' +
      [0, 1, 2, 3, 4, 5].map(i => '<path d="M' + (78 + i * 44) + ' 120v-38q11 -12 22 0v38z" fill="#2c3646" stroke="#e8d8b8" stroke-width="2"/>').join("") +
      '<rect class="fz-glow" x="122" y="84" width="20" height="34" fill="' + GOLD + '" opacity=".35"/><rect class="fz-glow fz-g2" x="254" y="84" width="20" height="34" fill="' + GOLD + '" opacity=".35"/>' +
      '<rect x="60" y="128" width="280" height="8" fill="#e8d8b8"/>' +
      /* street-level wall and trench */
      '<rect x="0" y="136" width="400" height="10" fill="#8a8a80"/><rect x="0" y="146" width="400" height="80" fill="#5a5a54"/>' +
      Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 40) + '" y="146" width="38" height="20" fill="#66665e"/>').join("") +
      train +
      '<rect x="0" y="222" width="400" height="6" fill="#4a3a2a"/>' + Array.from({ length: 25 }, (_, i) => '<rect x="' + (i * 16) + '" y="226" width="10" height="4" fill="#3a2a1a"/>').join("") +
      '<rect x="0" y="230" width="400" height="30" fill="#3a3a36"/>' +
      '<rect x="110" y="232" width="180" height="24" rx="3" fill="#111"/><text x="200" y="249" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">HIGH POINT</text>',
      sky("fz-s1", "#4a7ac0", "#f0c8a0"));
  }

  /* 2. The highway welcome sign: home of Fantasia Barrino */
  function fzsign() {
    return svg(
      '<rect width="400" height="260" fill="url(#fz-s2)"/>' + cloud(20, 40) + cloud(260, 30, "") +
      '<path d="M0 170Q100 150 200 164T400 156V260H0z" fill="#4a7a3a"/>' + tree(30, 168, 1.6, "#2e5a2a") + tree(70, 162, 1.2, "#3a6a30") + tree(356, 160, 1.5, "#2e5a2a") + tree(316, 164, 1.1, "#3a6a30") +
      /* sign posts and panel */
      '<rect x="120" y="120" width="6" height="96" fill="#8a8a8a"/><rect x="274" y="120" width="6" height="96" fill="#8a8a8a"/>' +
      '<rect x="80" y="52" width="240" height="84" rx="8" fill="#0f6b3a" stroke="#fff" stroke-width="3"/>' +
      '<text x="200" y="80" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">WELCOME TO</text>' +
      '<text x="200" y="102" text-anchor="middle" ' + font + ' font-size="21" fill="#fff">HIGH POINT</text>' +
      '<text x="200" y="124" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">HOME OF FANTASIA BARRINO</text>' +
      '<path class="fz-glow" d="M92 64l3 6l6 1l-4 4l1 6l-6 -3l-6 3l1 -6l-4 -4l6 -1z" fill="' + GOLD + '"/><path class="fz-glow fz-g2" d="M308 64l3 6l6 1l-4 4l1 6l-6 -3l-6 3l1 -6l-4 -4l6 -1z" fill="' + GOLD + '"/>' +
      /* the highway */
      '<rect x="0" y="212" width="400" height="48" fill="#3a3a3a"/><rect x="0" y="210" width="400" height="3" fill="#fff"/>' + Array.from({ length: 10 }, (_, i) => '<rect x="' + (i * 44) + '" y="234" width="24" height="3" fill="#f2d24a"/>').join("") +
      '<g class="fz-car"><rect x="0" y="216" width="64" height="16" rx="5" fill="' + PURP + '"/><rect x="12" y="208" width="36" height="11" rx="4" fill="#6a2f90"/><circle cx="14" cy="233" r="5" fill="#111"/><circle cx="50" cy="233" r="5" fill="#111"/></g>' +
      '<g class="fz-car fz-car2"><rect x="0" y="240" width="70" height="16" rx="5" fill="' + PINK + '"/><rect x="14" y="232" width="38" height="11" rx="4" fill="#c84a78"/><circle cx="16" cy="257" r="5" fill="#111"/><circle cx="54" cy="257" r="5" fill="#111"/></g>',
      sky("fz-s2", "#5aa0e0", "#cfe8f6"));
  }

  /* 3. The World's Largest Chest of Drawers on Hamilton St */
  function fzchest() {
    const drawer = (x, y, w, h) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="2" fill="#8a5428" stroke="#4a2a12" stroke-width="2"/>' +
      '<circle cx="' + (x + w * 0.28) + '" cy="' + (y + h / 2) + '" r="3.2" fill="' + GOLD + '" stroke="#8a6a20"/><circle cx="' + (x + w * 0.72) + '" cy="' + (y + h / 2) + '" r="3.2" fill="' + GOLD + '" stroke="#8a6a20"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#fz-s3)"/>' + cloud(30, 34) + cloud(300, 26, "") +
      '<rect x="0" y="140" width="110" height="90" fill="#c9b89a"/><rect x="290" y="150" width="110" height="80" fill="#b8a688"/>' +
      [0, 1].map(i => '<rect x="14" y="' + (156 + i * 30) + '" width="80" height="16" fill="#3a4a5a"/><rect x="304" y="' + (164 + i * 28) + '" width="80" height="14" fill="#3a4a5a"/>').join("") +
      /* the highboy */
      '<path d="M120 54Q200 6 280 54z" fill="#7a4520" stroke="#4a2a12" stroke-width="3"/><path d="M186 28h28v-10h-28z" fill="#8a5428" stroke="#4a2a12" stroke-width="2"/><circle cx="200" cy="12" r="6" fill="' + GOLD + '"/>' +
      '<rect x="118" y="52" width="164" height="10" fill="#6a3a18"/>' +
      '<rect x="122" y="62" width="156" height="152" fill="#a8683a" stroke="#4a2a12" stroke-width="3"/>' +
      drawer(130, 70, 66, 26) + drawer(204, 70, 66, 26) + drawer(130, 102, 140, 26) + drawer(130, 134, 140, 26) + drawer(130, 166, 140, 26) +
      /* the two socks hanging out of the top drawer */
      '<g class="fz-sock"><path d="M150 96v34q0 8 8 8h12v-8h-10v-34z" fill="#f2f2f2" stroke="#999" stroke-width="1.5"/><rect x="150" y="96" width="10" height="5" fill="' + PINK + '"/></g>' +
      '<g class="fz-sock fz-k2"><path d="M232 96v40q0 8 8 8h12v-8h-10v-40z" fill="#f2f2f2" stroke="#999" stroke-width="1.5"/><rect x="232" y="96" width="10" height="5" fill="' + PURP + '"/></g>' +
      /* legs */
      '<path d="M126 214l-6 16h14l2 -16z M274 214l6 16h-14l-2 -16z" fill="#6a3a18"/>' +
      '<rect x="0" y="230" width="400" height="30" fill="#5a5a5a"/><rect x="0" y="228" width="400" height="3" fill="#9a9a9a"/>',
      sky("fz-s3", "#6ab0e8", "#e0f0f8"));
  }

  /* 4. The downtown ballpark, Juneteenth 2024: key to the city */
  function fzpark() {
    const boom = (x, y, c, cls) => '<g class="fz-boom ' + cls + '">' + Array.from({ length: 10 }, (_, i) => { const a = i * Math.PI / 5; return '<path d="M' + x + ' ' + y + 'L' + (x + Math.cos(a) * 22).toFixed(1) + ' ' + (y + Math.sin(a) * 22).toFixed(1) + '" stroke="' + c + '" stroke-width="2.4" stroke-linecap="round"/>'; }).join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#fz-s4)"/>' + stars(12) +
      boom(70, 46, GOLD, "") + boom(320, 40, PINK, "fz-b2") + boom(200, 30, PURP, "fz-b3") +
      /* grandstand and light towers */
      '<path d="M0 96L60 80H340L400 96V150H0z" fill="#7a3a2a"/>' + Array.from({ length: 6 }, (_, r) => '<path d="M0 ' + (104 + r * 8) + 'H400" stroke="#5a2a20" stroke-width="2"/>').join("") +
      [24, 376].map(x => '<rect x="' + (x - 2) + '" y="40" width="4" height="60" fill="#777"/><rect x="' + (x - 14) + '" y="32" width="28" height="12" fill="#ddd"/><rect class="fz-glow" x="' + (x - 12) + '" y="34" width="24" height="8" fill="#fff6c8"/>').join("") +
      /* field */
      '<rect x="0" y="150" width="400" height="110" fill="#2e7a3a"/>' + Array.from({ length: 8 }, (_, i) => '<rect x="' + (i * 50) + '" y="150" width="25" height="110" fill="#348a42"/>').join("") +
      '<path d="M120 260L200 196L280 260z" fill="#b8865a"/>' +
      /* the stage with the big gold key */
      '<rect x="130" y="150" width="140" height="40" fill="#2a1a3a" stroke="' + GOLD + '" stroke-width="2"/><rect x="124" y="188" width="152" height="8" fill="#4a3a5a"/>' +
      '<g class="fz-key"><circle cx="168" cy="168" r="11" fill="none" stroke="' + GOLD + '" stroke-width="5"/><rect x="178" y="165" width="64" height="6" fill="' + GOLD + '"/><rect x="226" y="171" width="5" height="9" fill="' + GOLD + '"/><rect x="236" y="171" width="5" height="12" fill="' + GOLD + '"/></g>' +
      '<rect x="40" y="200" width="30" height="20" fill="' + PURP + '" opacity=".8"/><rect x="330" y="204" width="30" height="20" fill="' + PINK + '" opacity=".8"/>',
      sky("fz-s4", "#0e1030", "#3a2a5a"));
  }

  /* 5. N Main St and E Lexington Ave, the showroom towers behind */
  function fzcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#fz-s5)"/>' +
      /* furniture-market showroom towers */
      '<g fill="#2e2a48"><rect x="20" y="40" width="70" height="90"/><rect x="100" y="20" width="56" height="110"/><rect x="230" y="30" width="80" height="100"/><rect x="320" y="56" width="60" height="74"/></g>' +
      Array.from({ length: 5 }, (_, r) => [30, 46, 62, 108, 124, 140, 240, 258, 276, 294].map(x => '<rect x="' + x + '" y="' + (48 + r * 16) + '" width="8" height="8" fill="' + (((x + r) % 3) ? "#4a4470" : GOLD) + '" opacity=".7"/>').join("")).join("") +
      /* brick wall with the tag */
      '<rect x="0" y="120" width="400" height="98" fill="' + BRICK + '"/>' +
      Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (128 + r * 10) + 'H400" stroke="#6a2a1a" stroke-width="1"/>').join("") +
      tag("TASIA", 30, 184, 46, GOLD, -6) + tag("HIGH POINT", 196, 174, 22, PINK, -4) + tag("FREE YOURSELF", 176, 204, 18, "#c79cf0", -3) +
      '<circle class="fz-sp" cx="168" cy="150" r="3" fill="' + GOLD + '" opacity=".8"/><circle class="fz-sp fz-sp2" cx="174" cy="156" r="2" fill="' + GOLD + '" opacity=".8"/>' +
      '<rect x="338" y="60" width="5" height="160" fill="#4a5a4a"/>' + sign(286, 64, 104, "N MAIN ST") + sign(266, 90, 132, "E LEXINGTON AVE") +
      '<rect x="0" y="218" width="400" height="42" fill="#444"/><rect x="0" y="216" width="400" height="4" fill="#888"/>' +
      '<g class="fz-car"><rect x="0" y="228" width="70" height="18" rx="5" fill="' + PURP + '"/><rect x="12" y="220" width="40" height="12" rx="4" fill="#6a2f90"/><circle cx="16" cy="248" r="6" fill="#111"/><circle cx="54" cy="248" r="6" fill="#111"/></g>',
      sky("fz-s5", "#2a1a4a", "#e0708a"));
  }

  window.SCENES = { fzstation, fzsign, fzchest, fzpark, fzcorner };
})();
