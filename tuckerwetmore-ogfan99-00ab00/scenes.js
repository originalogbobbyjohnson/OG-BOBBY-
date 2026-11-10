/* tuckerwetmore scenes (Regions: THE NORTHWEST; Genres: country; Kalama, Cowlitz County, Washington). CSS classes prefixed tkw- (the page's own anim-train is kept).
   Sources: Montana Tech 2018 football roster (hometown Kalama, Wash.; Kalama HS; All-State WR, Offensive Player of the Year, All-Championship team);
   Moose Radio "Tucker Wetmore Montana" (moved to Butte in 2018 for the Orediggers, a spring-ball leg injury ended football - "That was my sign"; Samoan family that sang together; then Nashville);
   Kalama Middle/High School (Chinooks, orange/black/white, "High School Hill", state football champs 2017); AARoads I-5 guide (Exit 30 Elm St into Kalama city center;
   Port of Kalama grain silos on the Columbia; 1st St downtown next to Elm St). No logos, no faces. No 9 drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const ORANGE = "#ff8a2a", TEAL = "#3ec1c9", SBLUE = "#5b8fd6", PINE = "#2a5236", PINE2 = "#1f4029", CREAM = "#f3ead8";
  const css = '<style>' +
    '@keyframes tkwglow{0%,100%{opacity:.4}50%{opacity:1}}.tkw-glow{animation:tkwglow 2.2s ease-in-out infinite}.tkw-g2{animation-delay:-1.1s}' +
    '@keyframes tkwcloud{0%{transform:translateX(0)}100%{transform:translateX(40px)}}.tkw-cl{animation:tkwcloud 14s ease-in-out infinite alternate}' +
    '@keyframes tkwcar{0%{transform:translateX(-120px)}100%{transform:translateX(520px)}}.tkw-car{animation:tkwcar 6s linear infinite}' +
    '@keyframes tkwship{0%{transform:translateX(0)}100%{transform:translateX(-160px)}}.tkw-ship{animation:tkwship 16s ease-in-out infinite alternate}' +
    '@keyframes tkwrv{0%{transform:translateX(0)}100%{transform:translateX(-40px)}}.tkw-rv{animation:tkwrv 3s linear infinite}' +
    '@keyframes tkwball{0%{transform:translate(0,0)}50%{transform:translate(110px,-60px)}100%{transform:translate(220px,0)}}.tkw-ball{animation:tkwball 2.8s ease-in-out infinite}' +
    '@keyframes tkwbeam{0%,100%{opacity:.06}50%{opacity:.18}}.tkw-beam{animation:tkwbeam 2s ease-in-out infinite}' +
    '@keyframes tkwspin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.tkw-spin{transform-box:fill-box;transform-origin:50% 50%;animation:tkwspin 3s linear infinite}' +
    '@keyframes tkwsnow{0%{transform:translateY(-10px);opacity:0}20%{opacity:.9}100%{transform:translateY(240px);opacity:.2}}.tkw-sn{animation:tkwsnow 6s linear infinite}.tkw-sn2{animation-delay:-2s}.tkw-sn3{animation-delay:-4s}' +
    '@keyframes tkwspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.tkw-sp{animation:tkwspray 1.4s ease-out infinite}.tkw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const cap = (txt, y) => '<text x="200" y="' + (y || 252) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff" stroke="#000" stroke-width="2.5" paint-order="stroke">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + txt + '</text>';
  const fir = (x, y, s, c) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><rect x="-2" y="-8" width="4" height="10" fill="#4a3424"/><path d="M0 -70L-10 -50h5L-14 -32h7L-18 -16h6L-22 -4h44L12 -16h6L7 -32h7L5 -50h5z" fill="' + c + '"/></g>';
  /* Interstate shield: blue body, red crown, white numbers */
  const iShield = (x, y, n) => '<g transform="translate(' + x + ' ' + y + ')"><path d="M-18 -18q18 -6 36 0q4 22 -18 38q-22 -16 -18 -38z" fill="#003f87" stroke="#fff" stroke-width="2"/><path d="M-17.6 -16q17.6 -6 35.2 0l-.6 6h-34z" fill="#c8102e"/><text x="0" y="12" text-anchor="middle" ' + font + ' font-size="16" fill="#fff">' + n + '</text></g>';
  /* Mount St. Helens: the flat, broken-top crater with snow */
  const helens = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path d="M-110 40L-40 -18L-22 -24L-6 -16L8 -26L24 -20L40 -14L110 40z" fill="#8a96aa"/><path d="M-52 -8L-40 -18L-22 -24L-6 -16L8 -26L24 -20L40 -14L52 -6L34 -8L22 -12L8 -10L-6 -6L-22 -12L-36 -6z" fill="#f2f5f8"/></g>';
  const pickup = (c) => '<rect x="0" y="6" width="74" height="20" rx="4" fill="' + c + '"/><path d="M42 6v-14h18l12 14z" fill="' + c + '"/><path d="M46 4v-9h12l8 9z" fill="#bfe0ee"/>' +
    '<circle cx="16" cy="28" r="7" fill="#222"/><circle cx="16" cy="28" r="3" fill="#aaa"/><circle cx="58" cy="28" r="7" fill="#222"/><circle cx="58" cy="28" r="3" fill="#aaa"/><rect x="70" y="12" width="5" height="4" fill="#ffe9a0" class="tkw-glow"/>';

  /* ROOM 0: I-5 north along the Columbia, the green guide sign for Exit 30 Kalama / Elm St, the Port's grain silos off to the west, a Silverado-blue pickup rolling in (Kalama has no train stop; this is the drive in) */
  function tkwhwy() {
    return svg(
      '<rect width="400" height="260" fill="url(#tkw1)"/>' +
      '<g class="tkw-cl"><ellipse cx="70" cy="26" rx="44" ry="9" fill="#fff" opacity=".6"/><ellipse cx="300" cy="34" rx="50" ry="9" fill="#fff" opacity=".5"/></g>' +
      helens(330, 104, .7) +
      '<path d="M0 140q80 -30 160 -18t140 -10t100 8v40H0z" fill="#3a6a44"/>' +
      [8, 34, 60, 360, 388].map((x, i) => fir(x, 150 - (i % 2) * 6, 1 + (i % 2) * .2, i % 2 ? PINE : PINE2)).join("") +
      /* grain silos at the port */
      '<g transform="translate(18 0)">' + [0, 16, 32, 48].map(x => '<rect x="' + x + '" y="96" width="14" height="52" fill="#d8d4cc"/><ellipse cx="' + (x + 7) + '" cy="96" rx="7" ry="3" fill="#c8c4bc"/>').join("") + '<rect x="64" y="80" width="14" height="68" fill="#c8c4bc"/></g>' +
      /* roadway */
      '<rect x="0" y="176" width="400" height="84" fill="#3a3a40"/><path d="M0 218h400" stroke="#f0d040" stroke-width="3" stroke-dasharray="20 14"/><path d="M0 178h400" stroke="#fff" stroke-width="2"/>' +
      /* sign gantry */
      '<rect x="110" y="44" width="5" height="134" fill="#8a8e94"/><rect x="314" y="44" width="5" height="134" fill="#8a8e94"/><rect x="110" y="48" width="209" height="5" fill="#8a8e94"/>' +
      '<rect x="226" y="40" width="70" height="16" fill="#0f6b3a" stroke="#fff" stroke-width="2"/><text x="261" y="52" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">EXIT 30</text>' +
      '<rect x="124" y="56" width="180" height="84" rx="6" fill="#0f6b3a" stroke="#fff" stroke-width="2.5"/>' +
      iShield(156, 92, "5") +
      '<text x="186" y="80" ' + font + ' font-size="12" fill="#fff">NORTH</text><text x="186" y="106" ' + font + ' font-size="22" fill="#fff">Kalama</text><text x="186" y="126" ' + font + ' font-size="11" fill="#fff">Elm St</text>' +
      '<g class="anim-train"><g transform="translate(150 190)">' + pickup(SBLUE) + '</g></g>' +
      '<g class="tkw-car"><rect x="0" y="228" width="40" height="14" rx="3" fill="#d8d8dc"/><circle cx="9" cy="242" r="4" fill="#222"/><circle cx="31" cy="242" r="4" fill="#222"/></g>' +
      cap("I-5  ·  EXIT 30  ·  KALAMA, WASHINGTON", 256),
      sky("tkw1", "#86b8dc", "#e8eef0"));
  }

  /* ROOM 1: High School Hill on a Friday night: the Chinooks' field under the lights, orange end zone, a pass spiraling downfield (state champs his senior year, 2017) */
  function tkwfield() {
    const tower = (x) => '<g transform="translate(' + x + ' 0)"><rect x="-2" y="34" width="4" height="96" fill="#8a8e94"/><rect x="-16" y="24" width="32" height="14" fill="#555"/>' +
      [-12, -4, 4, 12].map(b => '<circle cx="' + b + '" cy="31" r="3" fill="#fff8d0" class="tkw-glow"/>').join("") + '<path d="M-14 38l-40 120h108l-40 -120z" fill="#fff8d0" class="tkw-beam"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tkw2)"/>' +
      [[40, 20], [120, 34], [210, 16], [350, 24]].map(s => '<circle cx="' + s[0] + '" cy="' + s[1] + '" r="1.4" fill="#fff"/>').join("") +
      [0, 40, 360, 396].map((x, i) => fir(x, 130, 1.2, "#16261c")).join("") +
      tower(70) + tower(330) +
      /* bleachers */
      '<path d="M110 130h180v-34h-180z" fill="#2a2e3a"/>' + Array.from({ length: 4 }, (_, i) => '<path d="M110 ' + (102 + i * 8) + 'h180" stroke="#4a4e5a" stroke-width="2"/>').join("") +
      /* scoreboard */
      '<rect x="160" y="40" width="80" height="44" rx="3" fill="#111" stroke="' + ORANGE + '" stroke-width="2"/><text x="200" y="56" text-anchor="middle" ' + font + ' font-size="10" fill="' + ORANGE + '">CHINOOKS</text>' +
      '<text x="200" y="76" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="15" fill="#ffd040" class="tkw-glow">HOME 28</text>' +
      /* the field */
      '<path d="M0 130h400v130H0z" fill="#2f7a3a"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (20 + i * 45) + ' 130l' + ((i - 4) * 14) + ' 130" stroke="#fff" stroke-width="2" opacity=".75"/>').join("") +
      '<path d="M0 130h400v24H0z" fill="' + ORANGE + '" opacity=".85"/><text x="200" y="148" text-anchor="middle" ' + font + ' font-size="14" fill="#111" letter-spacing="6">KALAMA</text>' +
      /* goalpost */
      '<path d="M330 236v-36M308 200h44M308 200v-36M352 200v-36" stroke="#ffd040" stroke-width="4" fill="none"/>' +
      /* the ball */
      '<g class="tkw-ball"><g transform="translate(60 210)"><ellipse cx="0" cy="0" rx="9" ry="5.5" fill="#7a3a1a" transform="rotate(-25)"/><path d="M-3 -1l6 -2" stroke="#fff" stroke-width="1.2" transform="rotate(-25)"/></g></g>' +
      cap("HIGH SCHOOL HILL  ·  FRIDAY NIGHT  ·  2017"),
      sky("tkw2", "#0a1424", "#24344a"));
  }

  /* ROOM 2: the Columbia at the Port of Kalama: the long grain terminal, a cargo ship sliding upriver, Mount St. Helens' broken crater on the horizon */
  function tkwriver() {
    return svg(
      '<rect width="400" height="260" fill="url(#tkw3)"/>' +
      '<circle cx="80" cy="60" r="22" fill="#ffd98a" class="tkw-glow"/>' +
      helens(250, 92, 1.3) +
      '<path d="M0 132q100 -14 200 -4t200 -2v14H0z" fill="#3a5a3a"/>' +
      /* Oregon bank pines */
      [10, 30, 50, 70, 340, 360, 380, 400].map((x, i) => fir(x, 138, .6, "#2a4a30")).join("") +
      /* the river */
      '<rect x="0" y="140" width="400" height="120" fill="#3a6a8a"/><g class="tkw-rv">' + Array.from({ length: 14 }, (_, i) => '<path d="M' + (i * 34) + ' ' + (160 + (i % 4) * 22) + 'q10 -4 20 0" stroke="#a8d0e8" stroke-width="2" fill="none"/>').join("") + '</g>' +
      /* cargo ship */
      '<g class="tkw-ship"><g transform="translate(250 150)"><path d="M0 0h130l-10 20h-112z" fill="#2a3a5a"/><rect x="0" y="-4" width="130" height="5" fill="#c8302a"/>' +
      [10, 34, 58, 82].map((x, i) => '<rect x="' + x + '" y="-16" width="20" height="12" fill="' + ["#d8a040", "#4a8a6a", "#c86a3a", "#6a8ac8"][i] + '"/>').join("") +
      '<rect x="106" y="-30" width="18" height="26" fill="#f0f0f0"/><rect x="108" y="-26" width="14" height="4" fill="#2a3a5a"/></g></g>' +
      /* grain terminal on the Washington bank */
      '<rect x="0" y="196" width="400" height="64" fill="#5a5a52"/>' +
      [20, 40, 60, 80, 100].map(x => '<rect x="' + x + '" y="148" width="18" height="50" fill="#e0dcd4"/><ellipse cx="' + (x + 9) + '" cy="148" rx="9" ry="3" fill="#cfcbc2"/>').join("") +
      '<rect x="120" y="128" width="22" height="70" fill="#d0ccc4"/><path d="M142 136l60 40" stroke="#8a8e94" stroke-width="4"/><path d="M142 146l60 40" stroke="#8a8e94" stroke-width="2"/>' +
      cap("PORT OF KALAMA  ·  THE COLUMBIA RIVER"),
      sky("tkw3", "#f2a86a", "#ffe2b8"));
  }

  /* ROOM 3: Butte, Montana: the black steel mine headframe and the big white M on the hill, snow falling - where football ended in 2018 and the songs started */
  function tkwbutte() {
    return svg(
      '<rect width="400" height="260" fill="url(#tkw4)"/>' +
      /* the hill with the M */
      '<path d="M0 150Q80 60 180 70T400 120V260H0z" fill="#6a6a5a"/><path d="M0 170Q100 120 220 130T400 150V260H0z" fill="#5a5a4a"/>' +
      '<path d="M120 102l8 -24 10 14 10 -14 8 24h-6l-4 -12 -8 10 -8 -10 -4 12z" fill="#fff"/>' +
      /* the headframe */
      '<g transform="translate(270 0)"><path d="M0 220L20 70L40 220" stroke="#111" stroke-width="5" fill="none"/><path d="M20 70L70 220" stroke="#111" stroke-width="5"/>' +
      [100, 130, 160, 190].map(y => '<path d="M' + (4 + (220 - y) * .1) + ' ' + y + 'h' + (32 - (220 - y) * .2) + '" stroke="#111" stroke-width="3"/>').join("") +
      '<path d="M8 160l24 -40M8 120l24 40" stroke="#111" stroke-width="2"/>' +
      '<g transform="translate(20 66)"><g class="tkw-spin"><circle r="13" fill="none" stroke="#111" stroke-width="4"/><path d="M-13 0h26M0 -13v26" stroke="#111" stroke-width="2"/></g></g>' +
      '<circle cx="20" cy="52" r="3" fill="#ff3a2a" class="tkw-glow"/></g>' +
      /* brick town at the foot */
      '<rect x="0" y="206" width="400" height="54" fill="#3a3430"/>' + [10, 70, 140, 340].map((x, i) => '<rect x="' + x + '" y="' + (176 + (i % 2) * 10) + '" width="' + (50 + (i % 2) * 14) + '" height="40" fill="#7a3a28"/>' +
        '<rect x="' + (x + 8) + '" y="' + (186 + (i % 2) * 10) + '" width="10" height="10" fill="#ffd98a" class="tkw-glow ' + (i % 2 ? "tkw-g2" : "") + '"/><rect x="' + (x + 28) + '" y="' + (186 + (i % 2) * 10) + '" width="10" height="10" fill="#ffd98a" class="tkw-glow"/>').join("") +
      /* snow */
      [30, 90, 150, 210, 270, 330, 380].map((x, i) => '<circle cx="' + x + '" cy="0" r="2" fill="#fff" class="tkw-sn ' + ["", "tkw-sn2", "tkw-sn3"][i % 3] + '"/>').join("") +
      cap("BUTTE, MONTANA  ·  WHERE THE SONGS STARTED"),
      sky("tkw4", "#5a6a8a", "#c8ccd4"));
  }

  /* ROOM 4: his corner downtown, N 1st St and Elm St, an old brick wall with his name, Mount St. Helens' broken top over the firs behind */
  function tkwcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#tkw5)"/>' +
      '<circle cx="90" cy="70" r="22" fill="#ffe0a0" class="tkw-glow"/>' +
      helens(220, 92, 1.6) +
      [10, 40, 74, 330, 362, 396].map((x, i) => fir(x, 156 - (i % 2) * 6, 1.1 + (i % 2) * .3, i % 2 ? PINE : PINE2)).join("") +
      /* brick wall */
      '<rect x="0" y="150" width="270" height="110" fill="#8a4a34"/>' + Array.from({ length: 10 }, (_, r) => '<path d="M0 ' + (156 + r * 11) + 'h270" stroke="#6a3422" stroke-width="1.5"/>').join("") +
      Array.from({ length: 9 }, (_, r) => Array.from({ length: 9 }, (_, c) => '<path d="M' + (c * 30 + (r % 2) * 15) + ' ' + (167 + r * 11) + 'v-11" stroke="#6a3422" stroke-width="1.5"/>').join("")).join("") +
      tag("WETMORE", 22, 206, 40, ORANGE, -6) + tag("KALAMA", 70, 240, 20, TEAL, -4) +
      '<g class="tkw-sp"><circle cx="232" cy="190" r="3" fill="' + ORANGE + '" opacity=".7"/></g><g class="tkw-sp tkw-sp2"><circle cx="240" cy="184" r="2.5" fill="' + ORANGE + '" opacity=".6"/></g>' +
      /* sidewalk + sign post */
      '<rect x="270" y="226" width="130" height="34" fill="#a8a8a8"/>' +
      '<rect x="326" y="132" width="5" height="96" fill="#5a5a5a"/>' + sign(290, 132, 80, "N 1st St") + sign(304, 158, 80, "Elm St") +
      '<rect x="384" y="150" width="4" height="78" fill="#2a2a2e"/><circle cx="386" cy="148" r="6" fill="#ffe8a0" class="tkw-glow"/>',
      sky("tkw5", "#7ab0d8", "#f4dcb0"));
  }

  window.SCENES = { tkwhwy, tkwfield, tkwriver, tkwbutte, tkwcorner };
})();
