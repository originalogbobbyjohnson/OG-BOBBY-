/* chasematthew scenes (Regions: MEMPHIS + TENNESSEE; Genres: country; born in Sevierville, grew up in Nashville, six years an ATV mechanic,
   found online by Upchurch, signed to his Holler Boy label 2021, Warner Music Nashville Oct 2022, Opry NextStage class of 2024).
   CSS classes prefixed cmw- (the page's own anim-train is kept). No logos, no faces, no 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const AMBER = "#e8a33a", CREAM = "#f2ece0", FIELD = "#5f8a3a", BRICK = "#9a3f2c", HILL = "#2f4a2c", HILL2 = "#23391f";
  const css = '<style>' +
    '@keyframes cmwglow{0%,100%{opacity:.45}50%{opacity:1}}.cmw-glow{animation:cmwglow 2.2s ease-in-out infinite}.cmw-g2{animation-delay:-1.1s}' +
    '@keyframes cmwcloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.cmw-cl{animation:cmwcloud 14s ease-in-out infinite alternate}' +
    '@keyframes cmwcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.cmw-car{animation:cmwcar 6s linear infinite}' +
    '@keyframes cmwspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.cmw-spin{transform-box:fill-box;transform-origin:50% 50%;animation:cmwspin 2.4s linear infinite}' +
    '@keyframes cmwflick{0%,100%{transform:scaleY(1)}30%{transform:scaleY(1.15)}60%{transform:scaleY(.9)}}.cmw-fire{transform-box:fill-box;transform-origin:50% 100%;animation:cmwflick .7s ease-in-out infinite}' +
    '@keyframes cmwbug{0%{transform:translate(0,0);opacity:.2}50%{transform:translate(8px,-10px);opacity:1}100%{transform:translate(0,0);opacity:.2}}.cmw-bug{animation:cmwbug 3s ease-in-out infinite}.cmw-b2{animation-delay:-1s}.cmw-b3{animation-delay:-2s}' +
    '@keyframes cmwmud{0%{transform:translate(0,0);opacity:1}100%{transform:translate(-30px,-34px);opacity:0}}.cmw-mud{animation:cmwmud 1s ease-out infinite}.cmw-m2{animation-delay:-.35s}.cmw-m3{animation-delay:-.7s}' +
    '@keyframes cmwrock{0%,100%{transform:translateX(0)}50%{transform:translateX(70px)}}.cmw-rock{animation:cmwrock 5s ease-in-out infinite}' +
    '@keyframes cmwlamp{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.cmw-lamp{transform-box:fill-box;transform-origin:50% 0;animation:cmwlamp 3s ease-in-out infinite}' +
    '@keyframes cmwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.cmw-sp{animation:cmwspray 1.4s ease-out infinite}.cmw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const cap = (txt, y) => '<text x="200" y="' + (y || 252) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const tree = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-6" width="4" height="10" fill="#3a2a1c"/><circle cx="0" cy="-18" r="14" fill="' + c + '"/><circle cx="-9" cy="-10" r="9" fill="' + c + '"/><circle cx="9" cy="-10" r="9" fill="' + c + '"/></g>';
  /* Interstate shield: blue body, red crown, white numbers */
  const iShield = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M-18 -18q18 -6 36 0q4 22 -18 38q-22 -16 -18 -38z" fill="#003f87" stroke="#fff" stroke-width="2"/><path d="M-17.6 -16q17.6 -6 35.2 0l-.6 6h-34z" fill="#c8102e"/><text x="0" y="12" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">' + n + '</text></g>';
  const pickup = (c, s) => '<g transform="scale(' + (s || 1) + ')"><rect x="0" y="6" width="74" height="20" rx="4" fill="' + c + '"/><path d="M42 6v-14h18l12 14z" fill="' + c + '"/><path d="M46 4v-9h12l8 9z" fill="#bfe0ee"/>' +
    '<circle cx="16" cy="28" r="7" fill="#222"/><circle cx="16" cy="28" r="3" fill="#aaa"/><circle cx="58" cy="28" r="7" fill="#222"/><circle cx="58" cy="28" r="3" fill="#aaa"/><rect x="70" y="12" width="5" height="4" fill="#ffe9a0" class="cmw-glow"/></g>';
  const hills = (y, c1, c2) => '<path d="M0 ' + y + 'q50 -40 110 -14t120 -20t100 10t70 -6V260H0z" fill="' + c1 + '"/><path d="M0 ' + (y + 18) + 'q70 -26 150 -6t140 -12t110 8V260H0z" fill="' + c2 + '"/>';
  const bugs = (pts) => pts.map((p, i) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="1.8" fill="#f6ff8a" class="cmw-bug ' + (["", "cmw-b2", "cmw-b3"][i % 3]) + '"/>').join("");

  /* ROOM 0: I-40 west out of the Smokies from Sevierville, his birthplace, crossing into Davidson County: the green county-line sign, the Nashville guide sign, a pickup rolling in */
  function cmwline() {
    return svg(
      '<rect width="400" height="260" fill="url(#cmw1)"/>' +
      '<g class="cmw-cl"><ellipse cx="70" cy="28" rx="44" ry="9" fill="#fff" opacity=".55"/><ellipse cx="300" cy="36" rx="50" ry="9" fill="#fff" opacity=".45"/></g>' +
      hills(150, HILL, HILL2) +
      [20, 52, 350, 384].map((x, i) => tree(x, 164 - (i % 2) * 6, 1 + (i % 2) * .2, i % 2 ? "#2c4a26" : "#3a5a30")).join("") +
      '<rect x="0" y="178" width="400" height="82" fill="#3a3a40"/><path d="M0 220h400" stroke="#f0d040" stroke-width="3" stroke-dasharray="20 14"/><path d="M0 180h400" stroke="#fff" stroke-width="2"/>' +
      /* overhead guide sign */
      '<rect x="160" y="40" width="5" height="140" fill="#8a8e94"/><rect x="356" y="40" width="5" height="140" fill="#8a8e94"/><rect x="160" y="44" width="201" height="5" fill="#8a8e94"/>' +
      '<rect x="176" y="52" width="170" height="78" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' + iShield(206, 86, "40") +
      '<text x="234" y="76" ' + font + ' font-size="12" fill="#fff">WEST</text><text x="234" y="102" ' + font + ' font-size="21" fill="#fff">Nashville</text><text x="234" y="120" ' + font + ' font-size="10" fill="#fff">Downtown</text>' +
      /* county line sign on its posts */
      '<rect x="40" y="128" width="4" height="52" fill="#8a8e94"/><rect x="108" y="128" width="4" height="52" fill="#8a8e94"/>' +
      '<rect x="26" y="96" width="100" height="40" rx="4" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="76" y="113" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">DAVIDSON</text><text x="76" y="129" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">COUNTY LINE</text>' +
      '<g class="anim-train"><g transform="translate(150 192)">' + pickup("#7a1f1f") + '</g></g>' +
      '<g class="cmw-car"><rect x="0" y="230" width="40" height="14" rx="3" fill="#d8d8dc"/><circle cx="9" cy="244" r="4" fill="#222"/><circle cx="31" cy="244" r="4" fill="#222"/></g>' +
      cap("I-40 WEST  ·  DAVIDSON COUNTY LINE  ·  NASHVILLE", 256),
      sky("cmw1", "#7fb0d8", "#e9ece6"));
  }

  /* ROOM 1: the shop: six years as an ATV mechanic before the music: a four-wheeler up on the lift, red tool chest, a wrench turning, the shop light swinging */
  function cmwshop() {
    return svg(
      '<rect width="400" height="260" fill="#2a2622"/>' +
      /* back wall corrugated */
      Array.from({ length: 26 }, (_, i) => '<rect x="' + (i * 16) + '" y="0" width="8" height="190" fill="#332e29"/>').join("") +
      /* pegboard with tools */
      '<rect x="22" y="40" width="120" height="70" fill="#a8865a"/>' + Array.from({ length: 30 }, (_, i) => '<circle cx="' + (30 + (i % 10) * 11) + '" cy="' + (48 + Math.floor(i / 10) * 22) + '" r="1.3" fill="#6a5236"/>').join("") +
      '<path d="M38 56v34M38 56h-6v8h12v-8z" stroke="#c9ced4" stroke-width="3" fill="none"/><path d="M64 54l0 38" stroke="#c9ced4" stroke-width="4"/><circle cx="64" cy="54" r="6" fill="none" stroke="#c9ced4" stroke-width="3"/>' +
      '<path d="M92 54h20l-4 10h-12z" fill="#d23a2a"/><rect x="100" y="64" width="4" height="26" fill="#3a3a3a"/><path d="M122 56l10 30" stroke="#c9ced4" stroke-width="3"/>' +
      /* roll-up door, half open to the night */
      '<rect x="250" y="30" width="130" height="160" fill="#0e1622"/><circle cx="350" cy="60" r="1.4" fill="#fff"/><circle cx="290" cy="80" r="1.2" fill="#fff"/>' +
      '<g>' + Array.from({ length: 6 }, (_, i) => '<rect x="250" y="' + (30 + i * 11) + '" width="130" height="10" fill="#8a8e94" stroke="#6a6e74"/>').join("") + '</g>' +
      /* lift + ATV */
      '<rect x="120" y="176" width="150" height="8" fill="#c8302a"/><rect x="132" y="184" width="8" height="40" fill="#555"/><rect x="250" y="184" width="8" height="40" fill="#555"/>' +
      '<g transform="translate(142 120)"><circle cx="18" cy="42" r="15" fill="#1a1a1a"/><circle cx="18" cy="42" r="6" fill="#777"/><circle cx="104" cy="42" r="15" fill="#1a1a1a"/><circle cx="104" cy="42" r="6" fill="#777"/>' +
      '<path d="M4 30q10 -18 34 -16h50q24 -2 32 16v8H4z" fill="' + FIELD + '"/><rect x="46" y="4" width="30" height="12" rx="4" fill="#1a1a1a"/><path d="M70 4l12 -12h10" stroke="#222" stroke-width="4" fill="none"/>' +
      '<rect x="0" y="10" width="26" height="6" fill="#444"/><rect x="96" y="10" width="26" height="6" fill="#444"/></g>' +
      /* wrench turning on the wheel nut */
      '<g transform="translate(246 162)"><g class="cmw-spin"><rect x="-2" y="-18" width="4" height="36" fill="#c9ced4"/><circle cx="0" cy="-18" r="5" fill="none" stroke="#c9ced4" stroke-width="3"/></g></g>' +
      /* tool chest */
      '<rect x="28" y="140" width="80" height="84" rx="3" fill="#c8302a"/>' + [0, 1, 2, 3, 4].map(i => '<rect x="32" y="' + (146 + i * 15) + '" width="72" height="11" fill="#a82418"/><rect x="58" y="' + (150 + i * 15) + '" width="20" height="3" fill="#ddd"/>').join("") +
      /* floor */
      '<rect x="0" y="224" width="400" height="36" fill="#4a4640"/><ellipse cx="200" cy="236" rx="60" ry="5" fill="#2a2622" opacity=".7"/>' +
      /* swinging shop light */
      '<g class="cmw-lamp"><path d="M200 0v34" stroke="#222" stroke-width="2"/><path d="M186 34h28l-6 10h-16z" fill="#3a3a3a"/><ellipse cx="200" cy="46" rx="8" ry="3" fill="#fff6c8" class="cmw-glow"/></g>' +
      cap("THE SHOP  ·  SIX YEARS AN ATV MECHANIC"),
      "");
  }

  /* ROOM 2: holdin' it down: the little bitty map-dot town at dusk, half-tons circled up in the parking lot, the water tower, square forty fields, lightning bugs */
  function cmwtown() {
    return svg(
      '<rect width="400" height="260" fill="url(#cmw3)"/>' +
      '<circle cx="320" cy="70" r="26" fill="#ffb36a" opacity=".9"/>' +
      hills(118, "#3a4a34", "#2c3a28") +
      /* square fields */
      '<path d="M0 150h400v30H0z" fill="#5f7a34"/>' + [0, 80, 160, 240, 320].map((x, i) => '<rect x="' + x + '" y="150" width="80" height="30" fill="' + (i % 2 ? "#6a8a3a" : "#7a8f3c") + '"/>').join("") +
      Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 34) + ' 152v26" stroke="#4e6a2a" stroke-width="1.5"/>').join("") +
      /* water tower */
      '<g transform="translate(70 40)"><path d="M10 50l-8 60M40 50l8 60M25 50v60M4 84h42" stroke="#9aa0a6" stroke-width="3"/><ellipse cx="25" cy="34" rx="26" ry="20" fill="#d8dce0"/><path d="M0 32h50" stroke="' + AMBER + '" stroke-width="5"/><path d="M14 14q11 -12 22 0" fill="#b8bcc0"/></g>' +
      /* little church steeple + store */
      '<path d="M210 118v-22l8 -14l8 14v22z" fill="#f4f0e6"/><rect x="230" y="104" width="44" height="22" fill="#a8573a"/><rect x="236" y="110" width="10" height="8" fill="#ffe08a" class="cmw-glow"/>' +
      /* parking lot */
      '<rect x="0" y="180" width="400" height="80" fill="#4a4640"/>' +
      '<g transform="translate(40 188)">' + pickup("#2a4a7a", .9) + '</g><g transform="translate(150 200)">' + pickup("#e8e2d4", .9) + '</g><g transform="translate(270 188) scale(-1 1) translate(-74 0)">' + pickup("#7a1f1f", .9) + '</g>' +
      /* fire barrel in the middle */
      '<rect x="128" y="206" width="16" height="22" fill="#5a4a3a"/><path d="M128 206q8 -22 16 0z" fill="#ff8a2a" class="cmw-fire"/>' +
      bugs([[30, 150], [120, 140], [200, 160], [260, 146], [340, 158], [380, 140]]) +
      cap("HOLDIN' IT DOWN  ·  FOUR DIGITS IN THE POPULATION"),
      sky("cmw3", "#3a3a6a", "#e89a6a"));
  }

  /* ROOM 3: pull up: a fire down off in the cut, four wheel drives slinging mud, the tailgates down, stars out till the sun comes up */
  function cmwcut() {
    return svg(
      '<rect width="400" height="260" fill="url(#cmw4)"/>' +
      [[30, 20], [90, 44], [150, 18], [220, 34], [290, 14], [360, 40], [380, 18]].map(s => '<circle cx="' + s[0] + '" cy="' + s[1] + '" r="1.3" fill="#fff"/>').join("") +
      '<circle cx="330" cy="54" r="14" fill="#f3efe0" opacity=".9"/>' +
      /* treeline */
      Array.from({ length: 14 }, (_, i) => tree(i * 30 + 10, 136 - (i % 3) * 4, 1.1, "#101a12")).join("") +
      /* mud flat */
      '<path d="M0 150h400v110H0z" fill="#4a3424"/><path d="M0 172q100 -10 200 0t200 0" stroke="#3a281a" stroke-width="6" fill="none"/>' +
      /* the fire */
      '<g transform="translate(80 210)"><path d="M-22 10l44 -8M-22 2l44 8" stroke="#5a3a20" stroke-width="6" stroke-linecap="round"/><path d="M0 4q-20 -18 -6 -46q4 14 12 16q2 -10 -2 -18q18 14 10 38q-2 10 -14 10z" fill="#ff8a2a" class="cmw-fire"/><path d="M0 4q-8 -10 0 -22q8 12 0 22z" fill="#ffe08a" class="cmw-fire"/></g>' +
      '<ellipse cx="80" cy="214" rx="70" ry="22" fill="#ff8a2a" opacity=".12" class="cmw-glow"/>' +
      /* rocking 4x4 slinging mud */
      '<g class="cmw-rock"><g transform="translate(180 170)"><rect x="0" y="0" width="90" height="26" rx="5" fill="#3e6a3a"/><path d="M50 0v-18h24l14 18z" fill="#3e6a3a"/><path d="M54 -2v-12h16l10 12z" fill="#9ac0d0"/>' +
      '<circle cx="20" cy="30" r="13" fill="#151515"/><circle cx="20" cy="30" r="5" fill="#777"/><circle cx="72" cy="30" r="13" fill="#151515"/><circle cx="72" cy="30" r="5" fill="#777"/>' +
      '<circle cx="8" cy="34" r="4" fill="#6a4a2a" class="cmw-mud"/><circle cx="4" cy="30" r="3" fill="#6a4a2a" class="cmw-mud cmw-m2"/><circle cx="10" cy="26" r="3.5" fill="#6a4a2a" class="cmw-mud cmw-m3"/>' +
      '<rect x="86" y="8" width="5" height="5" fill="#ffe9a0" class="cmw-glow"/></g></g>' +
      /* tailgate truck parked */
      '<g transform="translate(300 206)">' + pickup("#2a2a30", .9) + '</g>' +
      bugs([[150, 150], [240, 140], [360, 160]]) +
      cap("OFF IN THE CUT  ·  TELL 'EM ALL PULL UP"),
      sky("cmw4", "#060a18", "#1c2440"));
  }

  /* ROOM 4: his corner: Music Valley Dr and McGavock Pike, brick wall with his name, the red-brick Opry House behind (Opry NextStage class of 2024) */
  function cmwcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#cmw5)"/>' +
      /* the Opry House: long red-brick hall, big gable, white trim, warm windows */
      '<g transform="translate(150 54)"><rect x="0" y="40" width="240" height="70" fill="' + BRICK + '"/><path d="M70 40l50 -34l50 34z" fill="#f2ece0"/><path d="M78 40l42 -28l42 28z" fill="' + BRICK + '"/>' +
      '<rect x="70" y="40" width="100" height="70" fill="#8a3524"/>' + [84, 104, 124, 144].map(x => '<rect x="' + x + '" y="56" width="12" height="40" fill="#ffd98a" class="cmw-glow"/>').join("") +
      '<rect x="0" y="36" width="240" height="6" fill="#f2ece0"/>' + [14, 34, 194, 214].map(x => '<rect x="' + x + '" y="58" width="12" height="16" fill="#ffd98a" class="cmw-glow cmw-g2"/>').join("") + '</g>' +
      '<path d="M0 164h400v96H0z" fill="#3a3a40"/><path d="M0 200h400" stroke="#f0d040" stroke-width="2" stroke-dasharray="16 12"/>' +
      /* brick wall with tag */
      '<rect x="0" y="96" width="170" height="104" fill="#7a3428"/>' + Array.from({ length: 8 }, (_, r) => '<path d="M0 ' + (104 + r * 12) + 'h170" stroke="#5a2418" stroke-width="1.5"/>').join("") +
      tag("CHASE", 14, 140, 30, AMBER, -6) + tag("MATTHEW", 24, 176, 26, CREAM, -6) +
      '<circle cx="150" cy="150" r="3" fill="' + AMBER + '" class="cmw-sp"/><circle cx="156" cy="146" r="2" fill="' + AMBER + '" class="cmw-sp cmw-sp2"/>' +
      /* sign post */
      '<rect x="196" y="62" width="5" height="142" fill="#8a8e94"/>' + sign(138, 70, 122, "MUSIC VALLEY DR") + sign(150, 94, 100, "MCGAVOCK PK") +
      '<g transform="translate(260 196)">' + pickup("#7a1f1f", .9) + '</g>' +
      cap("MUSIC VALLEY DR & MCGAVOCK PIKE  ·  NASHVILLE"),
      sky("cmw5", "#1a1a3a", "#7a5a6a"));
  }

  window.SCENES = { cmwline, cmwshop, cmwtown, cmwcut, cmwcorner };
})();
