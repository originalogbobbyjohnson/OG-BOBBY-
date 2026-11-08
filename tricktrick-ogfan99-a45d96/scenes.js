/* tricktrick scenes (Regions tab: Detroit; 7 Mile, "Straight Off 7 Mile", his channel is THE GODFATHER 7M4L = 7 Mile 4 Life). CSS classes prefixed tt- (the page's own anim-train is kept, used on the bus).
   1 DDOT Route 30 Livernois pulling up to the Livernois & 7 Mile stop on the northwest side, brick storefronts and flats at dusk.
   2 The Avenue of Fashion on Livernois between 7 and 8 Mile at night: brick shop fronts, the banners on the lamp posts, a jazz lounge with a piano-key awning, a car cruising.
   3 Detroit Metro Airport, the McNamara terminal ("No Fly Zone": "Flight 472 has been delayed"): the long concourse, the tram gliding overhead, the departures board flickering DELAYED.
   4 The Gordie Howe International Bridge over the Detroit River (opened 2025), the new front door into the city ("Welcome 2 Detroit"): the two tall A-shaped towers, the cables, a truck rolling across.
   5 W 7 Mile Rd and Livernois Ave: green signs, TRICK TRICK tagged with GOON SQWAD and 7M4L on the brick, the clock tower of the University of Detroit Mercy down Livernois.
   No logos, no faces, no numeral 9 anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ttflick{0%,100%{opacity:1}40%{opacity:.7}46%{opacity:.3}52%{opacity:.95}}.tt-flk{animation:ttflick 1.8s infinite}.tt-flk2{animation-delay:.6s}' +
    '@keyframes ttcar{from{transform:translateX(-140px)}to{transform:translateX(540px)}}.tt-car{animation:ttcar 6.5s linear infinite}.tt-car2{animation-delay:-3.2s}' +
    '@keyframes tttram{0%{transform:translateX(-200px)}100%{transform:translateX(560px)}}.tt-tram{animation:tttram 8s linear infinite}' +
    '@keyframes tttruck{from{transform:translateX(-120px)}to{transform:translateX(520px)}}.tt-truck{animation:tttruck 9s linear infinite}' +
    '@keyframes ttwave{0%,100%{transform:translateX(0)}50%{transform:translateX(14px)}}.tt-wave{animation:ttwave 3s ease-in-out infinite}.tt-wave2{animation-delay:-1.5s}' +
    '@keyframes ttsway{0%,100%{transform:skewX(-6deg)}50%{transform:skewX(6deg)}}.tt-ban{transform-box:fill-box;transform-origin:0 0;animation:ttsway 2.4s ease-in-out infinite}.tt-ban2{animation-delay:-1.2s}' +
    '@keyframes ttblink{0%,100%{opacity:.2}50%{opacity:1}}.tt-bl{animation:ttblink 1.2s ease-in-out infinite}.tt-bl2{animation-delay:-.6s}' +
    '@keyframes ttsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(16px,-24px);opacity:0}}.tt-sp{animation:ttsp 1.3s ease-out infinite}.tt-sp2{animation-delay:-.6s}' +
    '@keyframes tthand{from{transform:rotate(0)}to{transform:rotate(360deg)}}.tt-hand{transform-box:view-box;transform-origin:330px 52px;animation:tthand 12s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const DDOT = "#0b6e4f", RED = "#e8402a", GOLD = "#f2c14e", BLUE = "#4ac0ff";
  const win = (x, y, w, h, lit) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + (lit ? "#ffd98a" : "#2a2a36") + '" stroke="#e8e0cc" stroke-width="1.5"/><path d="M' + (x + w / 2) + ' ' + y + 'v' + h + 'M' + x + ' ' + (y + h / 2) + 'h' + w + '" stroke="#e8e0cc" stroke-width="1"/>';

  /* 1. DDOT 30 Livernois at Livernois & 7 Mile */
  function ttstation() {
    const shop = (x, w, c, lit) => '<rect x="' + x + '" y="74" width="' + w + '" height="72" fill="' + c + '"/><rect x="' + x + '" y="70" width="' + w + '" height="6" fill="#4a3428"/>' +
      win(x + 8, 82, 18, 16, lit) + win(x + w - 26, 82, 18, 16, !lit) + '<rect x="' + (x + 6) + '" y="108" width="' + (w - 12) + '" height="34" fill="' + (lit ? "#ffd98a" : "#3a3a48") + '" opacity=".85"/>';
    const bus = '<g class="anim-train"><rect x="34" y="104" width="250" height="74" rx="10" fill="#f4f4f0" stroke="#6b6f73" stroke-width="2"/>' +
      '<rect x="34" y="154" width="250" height="14" fill="' + DDOT + '"/><rect x="34" y="150" width="250" height="4" fill="#ffcc33"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (74 + i * 40) + '" y="114" width="32" height="28" rx="3" fill="#24323c"/>').join("") +
      '<rect x="38" y="112" width="30" height="56" rx="3" fill="#2c3a44"/><path d="M53 112v56" stroke="#8a9096"/>' +
      '<rect x="38" y="106" width="92" height="8" rx="2" fill="#111"/><text x="84" y="112.5" text-anchor="middle" ' + font + ' font-size="6.2" fill="#ffcc33">30 LIVERNOIS · NORTH</text>' +
      '<text x="250" y="165" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">DDOT</text>' +
      '<circle cx="80" cy="180" r="13" fill="#1a1a1a"/><circle cx="80" cy="180" r="5" fill="#888"/><circle cx="240" cy="180" r="13" fill="#1a1a1a"/><circle cx="240" cy="180" r="5" fill="#888"/>' +
      '<circle cx="36" cy="162" r="3.5" fill="#fff6c2" class="tt-flk"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tts1)"/>' +
      shop(0, 90, "#8a4a36", true) + shop(92, 84, "#a8664a", false) + shop(178, 92, "#7a4234", true) + shop(272, 128, "#96583e", false) +
      '<rect x="0" y="146" width="400" height="46" fill="#a9a59c"/><rect x="0" y="190" width="400" height="6" fill="#d8d4cb"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3f4148"/><path d="M0 230h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      bus + car("tt-car", 0, 238, RED) + car("tt-car tt-car2", 0, 238, "#d6d6d6") +
      '<rect x="306" y="100" width="5" height="92" fill="#555"/><rect x="290" y="86" width="38" height="22" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/><text x="309" y="101" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text>' +
      '<rect x="292" y="112" width="15" height="14" rx="3" fill="#ffcc33"/><text x="299.5" y="123" text-anchor="middle" ' + font + ' font-size="10" fill="#111">7</text>' +
      '<rect x="311" y="112" width="15" height="14" rx="3" fill="#ffcc33"/><text x="318.5" y="123" text-anchor="middle" ' + font + ' font-size="8" fill="#111">30</text>' +
      '<rect x="196" y="200" width="196" height="26" rx="3" fill="#111"/><text x="204" y="218" ' + font + ' font-size="14" fill="#fff">Livernois &amp; 7 Mile</text>' +
      '<rect x="344" y="205" width="20" height="16" rx="3" fill="' + DDOT + '"/><text x="354" y="217" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">30</text>' +
      '<rect x="368" y="205" width="18" height="16" rx="3" fill="' + DDOT + '"/><text x="377" y="217" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">7</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">DDOT ROUTE 30 LIVERNOIS · 7 MILE · NORTHWEST SIDE</text>',
      sky("tts1", "#201634", "#e07a48"));
  }

  /* 2. The Avenue of Fashion on Livernois at night */
  function ttavenue() {
    const front = (x, w, c) => '<rect x="' + x + '" y="60" width="' + w + '" height="120" fill="' + c + '"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + x + ' ' + (66 + i * 14) + 'h' + w + '" stroke="#000" stroke-opacity=".12"/>').join("") +
      win(x + 10, 72, 20, 22, true) + win(x + w - 30, 72, 20, 22, false) + '<rect x="' + (x + 6) + '" y="122" width="' + (w - 12) + '" height="54" fill="#ffd98a" opacity=".75"/>';
    const keys = '<rect x="150" y="100" width="100" height="16" fill="#fff"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (150 + i * 10) + ' 100v16" stroke="#333"/>').join("") +
      [0, 1, 3, 4, 5, 7, 8].map(i => '<rect x="' + (156 + i * 10) + '" y="100" width="6" height="10" fill="#111"/>').join("") +
      '<rect x="160" y="80" width="80" height="18" fill="#111" stroke="' + GOLD + '" stroke-width="2"/><text x="200" y="93" text-anchor="middle" ' + font + ' font-size="10" fill="' + GOLD + '" class="tt-flk">JAZZ · LIVE</text>';
    const lamp = (x, c, cls) => '<rect x="' + x + '" y="96" width="4" height="96" fill="#2a2a2a"/><circle cx="' + (x + 2) + '" cy="94" r="6" fill="#fff2b0" class="tt-bl ' + cls + '"/>' +
      '<rect class="tt-ban ' + cls.replace("tt-bl2", "tt-ban2") + '" x="' + (x + 4) + '" y="106" width="22" height="34" fill="' + c + '"/><text x="' + (x + 15) + '" y="126" text-anchor="middle" ' + font + ' font-size="6" fill="#fff" class="tt-ban ' + cls.replace("tt-bl2", "tt-ban2") + '">AVE</text>';
    return svg(
      '<rect width="400" height="260" fill="url(#tts2)"/>' + '<circle cx="340" cy="26" r="13" fill="#f4ecd0"/>' +
      Array.from({ length: 12 }, (_, i) => '<circle class="tt-bl' + (i % 2 ? " tt-bl2" : "") + '" cx="' + ((i * 61 + 13) % 380) + '" cy="' + ((i * 17) % 44 + 6) + '" r="1.2" fill="#fff"/>').join("") +
      front(0, 140, "#7a3e30") + front(140, 120, "#5a4a5a") + front(260, 140, "#8a5638") + keys +
      '<rect x="0" y="180" width="400" height="20" fill="#9a968e"/><rect x="0" y="198" width="400" height="62" fill="#3a3c44"/><path d="M0 232h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      lamp(40, RED, "") + lamp(130, "#2a6ab0", "tt-bl2") + lamp(280, RED, "") + lamp(360, "#2a6ab0", "tt-bl2") +
      car("tt-car", 0, 236, GOLD) +
      '<rect x="100" y="240" width="200" height="16" rx="3" fill="#111"/><text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">AVENUE OF FASHION · LIVERNOIS</text>',
      sky("tts2", "#0e1030", "#3a2a50"));
  }

  /* 3. Detroit Metro Airport, McNamara terminal: the tram overhead, the departures board */
  function ttairport() {
    const board = '<rect x="96" y="104" width="208" height="70" rx="3" fill="#0d0d12" stroke="#555" stroke-width="2"/>' +
      '<text x="106" y="118" ' + font + ' font-size="8" fill="' + GOLD + '">DEPARTURES</text>' +
      [["472", "DETROIT", "DELAYED"], ["NFZ", "NO FLY ZONE", "DELAYED"], ["313", "MOTOR CITY", "DELAYED"]].map((r, i) =>
        '<text x="106" y="' + (134 + i * 15) + '" ' + font + ' font-size="9" fill="#fff">' + r[0] + '</text><text x="138" y="' + (134 + i * 15) + '" ' + font + ' font-size="9" fill="#fff">' + r[1] + '</text>' +
        '<text x="296" y="' + (134 + i * 15) + '" text-anchor="end" ' + font + ' font-size="9" fill="' + RED + '" class="tt-flk' + (i % 2 ? " tt-flk2" : "") + '">' + r[2] + '</text>').join("");
    const tram = '<g class="tt-tram"><rect x="0" y="58" width="150" height="26" rx="8" fill="#e8ecf0" stroke="#7a8088" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (10 + i * 23) + '" y="63" width="16" height="11" rx="2" fill="#2a3a4a"/>').join("") + '<rect x="0" y="76" width="150" height="3" fill="' + BLUE + '"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tts3)"/>' +
      Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 0v50" stroke="#c8ccd2" stroke-width="2"/>').join("") +
      '<path d="M0 50h400" stroke="#9aa0a8" stroke-width="3"/><rect x="0" y="86" width="400" height="8" fill="#8a9098"/>' + tram +
      '<path d="M40 0l60 50h-120z" fill="#fff" opacity=".08"/><path d="M260 0l60 50h-120z" fill="#fff" opacity=".08"/>' +
      '<rect x="0" y="94" width="400" height="96" fill="#cfd4da"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (10 + i * 70) + '" y="100" width="6" height="90" fill="#aeb4bc"/>').join("") + board +
      '<rect x="0" y="190" width="400" height="70" fill="#8e8a80"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 44 - 10) + ' 260l40 -70" stroke="#7a766e"/>').join("") +
      '<rect x="20" y="206" width="30" height="20" rx="3" fill="' + RED + '"/><rect x="33" y="196" width="4" height="10" fill="#333"/><rect x="340" y="204" width="34" height="22" rx="3" fill="#2a5a8a"/><rect x="355" y="194" width="4" height="10" fill="#333"/>' +
      '<rect x="80" y="234" width="240" height="18" rx="3" fill="#111"/><text x="200" y="247" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">DTW · FLIGHT 472 HAS BEEN DELAYED</text>',
      sky("tts3", "#e8ecf2", "#c8d0da"));
  }

  /* 4. The Gordie Howe International Bridge over the Detroit River */
  function ttbridge() {
    const tower = x => '<path d="M' + (x - 16) + ' 196l14 -168h4l14 168h-6l-10 -150l-10 150z" fill="#e8e6e0" stroke="#9a9890" stroke-width="1.5"/><rect x="' + (x - 12) + '" y="150" width="24" height="5" fill="#d0cec8"/>';
    const cables = (x, dir) => Array.from({ length: 9 }, (_, i) => '<path d="M' + x + ' ' + (40 + i * 6) + 'L' + (x + dir * (20 + i * 15)) + ' 158" stroke="#f4f2ec" stroke-width=".9"/>').join("");
    const truck = '<g class="tt-truck"><rect x="0" y="140" width="44" height="16" rx="2" fill="#f4f4f0"/><rect x="44" y="144" width="14" height="12" rx="2" fill="' + RED + '"/><circle cx="10" cy="158" r="3" fill="#111"/><circle cx="34" cy="158" r="3" fill="#111"/><circle cx="52" cy="158" r="3" fill="#111"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tts4)"/>' +
      '<circle cx="70" cy="60" r="16" fill="#ffe0a8"/>' +
      '<g fill="#5a6a7a" opacity=".6"><rect x="0" y="170" width="30" height="20"/><rect x="34" y="160" width="20" height="30"/><rect x="350" y="164" width="24" height="26"/><rect x="376" y="172" width="24" height="18"/></g>' +
      cables(128, -1) + cables(132, 1) + cables(268, -1) + cables(272, 1) + tower(130) + tower(270) +
      '<rect x="0" y="156" width="400" height="8" fill="#c8c6c0"/><rect x="0" y="164" width="400" height="3" fill="#8a8880"/>' + truck +
      '<rect x="0" y="190" width="400" height="70" fill="#2f5f86"/>' +
      '<path class="tt-wave" d="M0 206q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fb4dc" stroke-width="2" fill="none"/>' +
      '<path class="tt-wave tt-wave2" d="M0 222q20 -4 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0" stroke="#7fb4dc" stroke-width="2" fill="none"/>' +
      '<rect x="90" y="234" width="220" height="18" rx="3" fill="#111"/><text x="200" y="247" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">WELCOME 2 DETROIT · THE NEW BRIDGE</text>',
      sky("tts4", "#3a5a8e", "#f2a46a"));
  }

  /* 5. W 7 Mile Rd and Livernois Ave, the University of Detroit Mercy clock tower down Livernois */
  function ttcorner() {
    const towerB = '<rect x="306" y="40" width="48" height="76" fill="#b8916a"/><path d="M302 40h56l-28 -26z" fill="#6a4a3a"/><rect x="326" y="2" width="8" height="14" fill="#6a4a3a"/>' +
      '<circle cx="330" cy="52" r="10" fill="#f4ecd8" stroke="#6a4a3a" stroke-width="2"/><path class="tt-hand" d="M330 52v-7" stroke="#222" stroke-width="1.5"/><path d="M330 52h5" stroke="#222" stroke-width="1.5"/>' +
      '<path d="M316 116v-26q14 -16 28 0v26z" fill="#4a3a30"/><rect x="270" y="80" width="36" height="36" fill="#a8825e"/><rect x="354" y="84" width="40" height="32" fill="#a8825e"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tts5)"/>' + towerB +
      '<rect x="0" y="112" width="400" height="6" fill="#6b6f73"/>' + car("tt-car", 0, 100, "#d6d6d6") +
      '<rect x="0" y="118" width="400" height="106" fill="#5a3a30"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (126 + i * 8) + 'h400" stroke="#47302a" stroke-width="1"/>').join("") +
      Array.from({ length: 13 }, (_, i) => Array.from({ length: 9 }, (_, j) => '<path d="M' + (j * 46 + (i % 2) * 23) + ' ' + (118 + i * 8) + 'v8" stroke="#47302a" stroke-width="1"/>').join("")).join("") +
      tag("TRICK TRICK", 16, 180, 36, GOLD, -6) + tag("GOON SQWAD", 24, 212, 18, RED, -3) + tag("7M4L", 196, 210, 22, BLUE, -5) +
      '<g class="tt-sp"><circle cx="232" cy="156" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="tt-sp tt-sp2"><circle cx="238" cy="148" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="340" y="120" width="6" height="104" fill="#2f2f2f"/>' + sign(278, 128, 120, "W 7 Mile Rd") + sign(282, 154, 112, "Livernois Ave") +
      '<rect x="392" y="200" width="4" height="24" fill="#222"/>',
      sky("tts5", "#1e1838", "#d8784a"));
  }

  window.SCENES = { ttstation: ttstation, ttavenue: ttavenue, ttairport: ttairport, ttbridge: ttbridge, ttcorner: ttcorner };
})();
