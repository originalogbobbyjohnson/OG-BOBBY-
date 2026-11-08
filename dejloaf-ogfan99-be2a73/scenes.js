/* dejloaf scenes (Regions tab: Detroit; east side, Mack Ave / 48214, Southeastern High). CSS classes prefixed dl- (the page's own anim-train is kept, used on the bus).
   1 DDOT Route 31 Mack pulling up to the Mack & Fairview stop on the east side, brick storefronts and flats at dusk.
   2 The Southeastern High gym (class of 2009, she played JV basketball for the Jungaleers): purple and white, the ball bouncing, the scoreboard blinking.
   3 Saginaw Valley State University, where she studied nursing for three semesters and worked on her first mixtape: red brick hall, a dorm window lit, leaves falling.
   4 The Hurlbut Memorial Gate at Water Works Park on E Jefferson (east side, down from Mack): the cream limestone arch and twin stairs, cars rolling past.
   5 Mack Ave and Fairview St: green signs, DEJ LOAF tagged on the brick, the glass dome of the Belle Isle Conservatory over the trees.
   No logos, no faces, no numeral 9 anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes dlflick{0%,100%{opacity:1}45%{opacity:.7}50%{opacity:.3}55%{opacity:.9}}.dl-flk{animation:dlflick 2.4s infinite}.dl-flk2{animation-delay:.8s}' +
    '@keyframes dltw{0%,100%{opacity:.25}50%{opacity:1}}.dl-tw{animation:dltw 1.6s ease-in-out infinite}.dl-tw2{animation-delay:-.8s}' +
    '@keyframes dlcar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.dl-car{animation:dlcar 6s linear infinite}.dl-car2{animation-delay:-3s}' +
    '@keyframes dlcarL{from{transform:translateX(520px)}to{transform:translateX(-140px)}}.dl-carL{animation:dlcarL 7s linear infinite}' +
    '@keyframes dlball{0%,100%{transform:translateY(0)}50%{transform:translateY(-46px)}}.dl-ball{animation:dlball .9s ease-in infinite}' +
    '@keyframes dlleaf{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}100%{transform:translate(-40px,150px) rotate(300deg);opacity:0}}.dl-lf{animation:dlleaf 4s linear infinite}.dl-lf2{animation-delay:-1.3s}.dl-lf3{animation-delay:-2.6s}' +
    '@keyframes dlbird{0%{transform:translate(-30px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,0)}}.dl-bird{animation:dlbird 9s linear infinite}.dl-bird2{animation-delay:-4.5s}' +
    '@keyframes dlsp{0%{transform:translate(0,0);opacity:.9}100%{transform:translate(16px,-24px);opacity:0}}.dl-sp{animation:dlsp 1.3s ease-out infinite}.dl-sp2{animation-delay:-.6s}' +
    '@keyframes dlglint{0%,100%{opacity:.15}50%{opacity:.85}}.dl-gl{animation:dlglint 2.2s ease-in-out infinite}.dl-gl2{animation-delay:-1.1s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const DDOT = "#0b6e4f", GOLD = "#ffd166", PURPLE = "#7a4bc2", LAV = "#b388ff";
  const ddotBus = (x, y, label) => '<g><rect x="' + x + '" y="' + y + '" width="250" height="74" rx="10" fill="#f4f4f0" stroke="#6b6f73" stroke-width="2"/>' +
    '<rect x="' + x + '" y="' + (y + 50) + '" width="250" height="14" fill="' + DDOT + '"/><rect x="' + x + '" y="' + (y + 46) + '" width="250" height="4" fill="#ffcc33"/>' +
    Array.from({ length: 5 }, (_, i) => '<rect x="' + (x + 40 + i * 40) + '" y="' + (y + 10) + '" width="32" height="28" rx="3" fill="#24323c"/>').join("") +
    '<rect x="' + (x + 4) + '" y="' + (y + 8) + '" width="30" height="56" rx="3" fill="#2c3a44"/><path d="M' + (x + 19) + ' ' + (y + 8) + 'v56" stroke="#8a9096"/>' +
    '<rect x="' + (x + 4) + '" y="' + (y + 2) + '" width="62" height="8" rx="2" fill="#111"/><text x="' + (x + 35) + '" y="' + (y + 8.5) + '" text-anchor="middle" ' + font + ' font-size="6.5" fill="#ffcc33">' + label + '</text>' +
    '<circle cx="' + (x + 46) + '" cy="' + (y + 76) + '" r="13" fill="#1a1a1a"/><circle cx="' + (x + 46) + '" cy="' + (y + 76) + '" r="5" fill="#888"/><circle cx="' + (x + 206) + '" cy="' + (y + 76) + '" r="13" fill="#1a1a1a"/><circle cx="' + (x + 206) + '" cy="' + (y + 76) + '" r="5" fill="#888"/>' +
    '<circle cx="' + (x + 2) + '" cy="' + (y + 58) + '" r="3.5" fill="#fff6c2"/></g>';

  /* 1. DDOT 31 Mack at Mack & Fairview */
  function dlstation() {
    const shop = (x, w, c, awn, txt) => '<rect x="' + x + '" y="70" width="' + w + '" height="76" fill="' + c + '"/><rect x="' + x + '" y="66" width="' + w + '" height="6" fill="#3a2e2a"/>' +
      '<rect x="' + (x + 6) + '" y="78" width="' + (w - 12) + '" height="16" fill="#111"/><text x="' + (x + w / 2) + '" y="90" text-anchor="middle" ' + font + ' font-size="8" fill="' + GOLD + '" class="dl-flk">' + txt + '</text>' +
      '<path d="M' + x + ' 96h' + w + 'l-6 10h-' + (w - 12) + 'z" fill="' + awn + '"/><rect x="' + (x + 8) + '" y="108" width="' + (w - 34) + '" height="30" fill="#ffd98a" opacity=".7"/><rect x="' + (x + w - 22) + '" y="108" width="14" height="38" fill="#3a2a20"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dls1)"/>' +
      '<circle cx="60" cy="22" r="1.4" fill="#fff" class="dl-tw"/><circle cx="150" cy="12" r="1.2" fill="#fff" class="dl-tw dl-tw2"/><circle cx="250" cy="26" r="1.3" fill="#fff" class="dl-tw"/><circle cx="350" cy="16" r="1.2" fill="#fff" class="dl-tw dl-tw2"/>' +
      '<rect x="20" y="40" width="60" height="30" fill="#5a3a30"/><rect x="300" y="44" width="80" height="26" fill="#4a3428"/>' +
      shop(0, 92, "#9a5a44", LAV, "BEAUTY SUPPLY") + shop(96, 92, "#c8b89a", GOLD, "SHOES") + shop(192, 96, "#7a4a3a", "#3a8ad8", "CONEY") + shop(292, 108, "#b8a88a", "#e05a4a", "PARTY STORE") +
      '<rect x="0" y="146" width="400" height="46" fill="#a9a59c"/><rect x="0" y="190" width="400" height="6" fill="#d8d4cb"/>' +
      '<rect x="0" y="196" width="400" height="64" fill="#3f4148"/><path d="M0 230h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      '<g class="anim-train">' + ddotBus(30, 104, "31 MACK") + '</g>' + car("dl-car", 0, 238, LAV) + car("dl-car dl-car2", 0, 238, "#d6d6d6") +
      '<rect x="372" y="110" width="5" height="82" fill="#555"/><rect x="356" y="112" width="38" height="22" rx="3" fill="' + DDOT + '" stroke="#fff" stroke-width="1.5"/><text x="375" y="127" text-anchor="middle" ' + font + ' font-size="9" fill="#fff">BUS</text>' +
      '<rect x="360" y="138" width="30" height="14" rx="3" fill="#ffcc33"/><text x="375" y="149" text-anchor="middle" ' + font + ' font-size="10" fill="#111">31</text>' +
      '<rect x="196" y="200" width="194" height="26" rx="3" fill="#111"/><text x="206" y="218" ' + font + ' font-size="14" fill="#fff">Mack &amp; Fairview</text>' +
      '<rect x="364" y="205" width="22" height="16" rx="3" fill="' + DDOT + '"/><text x="375" y="217" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">31</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">DDOT ROUTE 31 · MACK AVE · EAST SIDE · 48214</text>',
      sky("dls1", "#1a1240", "#d07a5a"));
  }

  /* 2. Southeastern High gym, purple and white */
  function dlschool() {
    const seat = (y, c) => '<rect x="0" y="' + y + '" width="400" height="10" fill="' + c + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#2a1d3e"/>' +
      '<rect x="0" y="0" width="400" height="40" fill="#1c1430"/>' + [40, 120, 200, 280, 360].map(x => '<rect x="' + (x - 14) + '" y="8" width="28" height="10" rx="2" fill="#fff6d0" class="dl-gl' + (x % 80 ? "" : " dl-gl2") + '"/>').join("") +
      '<rect x="10" y="44" width="380" height="30" rx="3" fill="' + PURPLE + '" stroke="#fff" stroke-width="2"/><text x="200" y="66" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="20" fill="#fff" letter-spacing="1">SOUTHEASTERN JUNGALEERS</text>' +
      seat(80, "#5c3f8a") + seat(92, "#e8e2f4") + seat(104, "#5c3f8a") + seat(116, "#e8e2f4") + seat(128, "#5c3f8a") +
      '<rect x="0" y="140" width="400" height="120" fill="#d8a96a"/>' + Array.from({ length: 12 }, (_, i) => '<path d="M' + (i * 36) + ' 140v120" stroke="#c4935a" stroke-width="1"/>').join("") +
      '<path d="M0 200h400" stroke="#fff" stroke-width="2"/><ellipse cx="200" cy="200" rx="50" ry="14" fill="none" stroke="#fff" stroke-width="2"/><ellipse cx="200" cy="200" rx="22" ry="7" fill="' + PURPLE + '" opacity=".85"/>' +
      '<path d="M300 150h100v100h-120z" fill="' + PURPLE + '" opacity=".35"/>' +
      '<g transform="translate(0 40)">' + '<rect x="316" y="60" width="62" height="40" rx="2" fill="#fff" stroke="#999"/><rect x="333" y="78" width="28" height="18" fill="none" stroke="#e05a4a" stroke-width="2"/><rect x="345" y="100" width="4" height="60" fill="#777"/>' +
      '<path d="M333 108l4 16h20l4 -16" fill="none" stroke="#fff" stroke-width="1.5"/><ellipse cx="347" cy="108" rx="15" ry="3" fill="none" stroke="#e8642a" stroke-width="3"/>' +
      '</g>' +
      '<g class="dl-ball"><circle cx="300" cy="226" r="11" fill="#e8742a"/><path d="M289 226h22M300 215v22" stroke="#5a2a10" stroke-width="1.5"/><path d="M292 218q8 8 0 16M308 218q-8 8 0 16" fill="none" stroke="#5a2a10" stroke-width="1.5"/></g>' +
      '<rect x="20" y="150" width="120" height="50" rx="4" fill="#111" stroke="#555" stroke-width="2"/><text x="80" y="164" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">HOME · JV · GUEST</text>' +
      '<text x="48" y="190" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="20" fill="#ff5a4a" class="dl-flk">24</text><text x="112" y="190" text-anchor="middle" font-family="Courier New, monospace" font-weight="700" font-size="20" fill="#ff5a4a" class="dl-flk dl-flk2">18</text>' +
      '<text x="200" y="250" text-anchor="middle" ' + font + ' font-size="9.5" fill="#3a2a10">PURPLE &amp; WHITE · JV HOOPS · EAST SIDE</text>');
  }

  /* 3. Saginaw Valley State: red brick hall in the fall, a dorm window lit late */
  function dlsvsu() {
    const leaf = (cls, x, c) => '<path class="' + cls + '" d="M' + x + ' 20q6 -6 12 0q-6 6 -12 0z" fill="' + c + '"/>';
    const win = (x, y, lit) => '<rect x="' + x + '" y="' + y + '" width="18" height="24" fill="' + (lit ? "#ffd98a" : "#2a2a3a") + '"' + (lit ? ' class="dl-flk"' : "") + '/><path d="M' + (x + 9) + ' ' + y + 'v24M' + x + ' ' + (y + 12) + 'h18" stroke="#e8e0d0" stroke-width="1.5"/>';
    let wins = ""; for (let r = 0; r < 3; r++) for (let c = 0; c < 8; c++) wins += win(64 + c * 36, 74 + r * 36, r === 1 && c === 5);
    return svg(
      '<rect width="400" height="260" fill="url(#dlv1)"/>' +
      '<rect x="50" y="60" width="300" height="130" fill="#a04a36"/><rect x="44" y="54" width="312" height="10" fill="#e8e0d0"/>' + wins +
      '<rect x="170" y="150" width="60" height="40" fill="#5a2a20"/><path d="M170 150h60l-4 -8h-52z" fill="#e8e0d0"/><text x="200" y="146" text-anchor="middle" ' + font + ' font-size="6" fill="#5a2a20">NURSING</text>' +
      '<rect x="272" y="114" width="18" height="24" fill="none"/>' +
      '<rect x="0" y="190" width="400" height="70" fill="#5a8a3a"/><path d="M150 260l40 -70h20l40 70z" fill="#c8c0b0"/>' +
      '<circle cx="24" cy="150" r="34" fill="#e0782a"/><circle cx="12" cy="176" r="22" fill="#c85a1a"/><rect x="20" y="170" width="8" height="30" fill="#4a2a1a"/>' +
      '<circle cx="378" cy="146" r="36" fill="#e8b02a"/><circle cx="392" cy="176" r="22" fill="#d0782a"/><rect x="372" y="170" width="8" height="30" fill="#4a2a1a"/>' +
      '<rect x="92" y="196" width="4" height="50" fill="#555"/><rect x="96" y="200" width="22" height="36" fill="#c8102e"/><rect x="304" y="196" width="4" height="50" fill="#555"/><rect x="282" y="200" width="22" height="36" fill="#0b3d91"/>' +
      '<text x="200" y="40" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="18" fill="#fff" letter-spacing="2">SAGINAW VALLEY STATE</text>' +
      '<g transform="translate(40 40)">' + leaf("dl-lf", 0, "#e0782a") + leaf("dl-lf dl-lf2", 60, "#c8102e") + leaf("dl-lf dl-lf3", 120, "#e8b02a") + '</g>' +
      '<g transform="translate(250 30)">' + leaf("dl-lf dl-lf2", 0, "#e8b02a") + leaf("dl-lf", 50, "#e0782a") + leaf("dl-lf dl-lf3", 100, "#c8102e") + '</g>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">THREE SEMESTERS OF NURSING · THE FIRST MIXTAPE</text>',
      sky("dlv1", "#6aa8e0", "#d8e8f4"));
  }

  /* 4. Hurlbut Memorial Gate, Water Works Park, E Jefferson */
  function dlgate() {
    const LIME = "#e8dcc0", SH = "#c8b890";
    return svg(
      '<rect width="400" height="260" fill="url(#dlg1)"/>' +
      '<g class="dl-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" fill="none" stroke="#333" stroke-width="1.5"/></g><g class="dl-bird dl-bird2"><path d="M0 60q4 -4 8 0q4 -4 8 0" fill="none" stroke="#333" stroke-width="1.5"/></g>' +
      '<circle cx="50" cy="120" r="40" fill="#3f7a3a"/><circle cx="350" cy="116" r="44" fill="#3f7a3a"/><circle cx="90" cy="130" r="28" fill="#4f8a44"/><circle cx="312" cy="132" r="30" fill="#4f8a44"/>' +
      '<rect x="120" y="70" width="160" height="16" fill="' + LIME + '"/><rect x="114" y="62" width="172" height="10" fill="' + SH + '"/><rect x="186" y="44" width="28" height="20" fill="' + LIME + '"/><path d="M182 46h36l-18 -12z" fill="' + SH + '"/>' +
      '<rect x="128" y="86" width="144" height="70" fill="' + LIME + '"/><path d="M172 156v-40a28 28 0 0 1 56 0v40z" fill="#3a4a3a"/>' +
      [136, 152, 248, 264].map(x => '<rect x="' + x + '" y="88" width="8" height="66" fill="' + SH + '"/>').join("") +
      '<path d="M176 156v-38a24 24 0 0 1 48 0v38" fill="none" stroke="' + SH + '" stroke-width="3"/>' +
      '<path d="M128 156l-50 40h40l40 -40zM272 156l50 40h-40l-40 -40z" fill="' + LIME + '" stroke="' + SH + '"/>' +
      Array.from({ length: 6 }, (_, i) => '<path d="M' + (124 - i * 8) + ' ' + (160 + i * 6) + 'h18M' + (258 + i * 8) + ' ' + (160 + i * 6) + 'h18" stroke="' + SH + '" stroke-width="1.5"/>').join("") +
      '<rect x="160" y="156" width="80" height="10" fill="' + SH + '"/>' +
      '<rect x="0" y="196" width="400" height="10" fill="#5a8a3a"/><rect x="0" y="206" width="400" height="54" fill="#3f4148"/><path d="M0 232h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("dl-car", 0, 240, "#c8102e") + car("dl-carL", 0, 214, "#e8e8e8") + car("dl-car dl-car2", 0, 240, LAV) +
      '<text x="200" y="20" text-anchor="middle" ' + font + ' font-size="9.5" fill="#2a2a2a">HURLBUT MEMORIAL GATE · WATER WORKS PARK · E JEFFERSON</text>',
      sky("dlg1", "#7ab8e8", "#f0f4f8"));
  }

  /* 5. Mack Ave and Fairview St */
  function dlcorner() {
    let bricks = ""; for (let r = 0; r < 9; r++) for (let c = 0; c < 15; c++) bricks += '<rect x="' + (c * 20 + (r % 2 ? 10 : 0) - 10) + '" y="' + (112 + r * 10) + '" width="19" height="9" fill="' + ((r + c) % 3 ? "#8a4a36" : "#7a3f2e") + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#dlk1)"/>' +
      '<rect x="140" y="92" width="160" height="24" fill="#c8dfe4" stroke="#8aa8b0"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (148 + i * 16) + ' 92v24" stroke="#8aa8b0"/>').join("") +
      '<rect x="186" y="72" width="68" height="22" fill="#d0e6ea" stroke="#8aa8b0"/>' + Array.from({ length: 5 }, (_, i) => '<path d="M' + (194 + i * 13) + ' 72v22" stroke="#8aa8b0"/>').join("") +
      '<path d="M182 72a38 36 0 0 1 76 0z" fill="#bfe0e8" stroke="#8aa8b0"/><path d="M220 36v36M201 41q-6 14 -6 31M239 41q6 14 6 31M188 54q20 -4 64 0" stroke="#8aa8b0" fill="none"/>' +
      '<rect x="214" y="28" width="12" height="9" fill="#8aa8b0"/><path d="M212 28h16l-8 -6z" fill="#8aa8b0"/>' +
      '<circle cx="216" cy="56" r="3" fill="#fff" class="dl-gl"/><circle cx="236" cy="64" r="2.5" fill="#fff" class="dl-gl dl-gl2"/>' +
      '<circle cx="150" cy="100" r="22" fill="#3f6a3a"/><circle cx="290" cy="98" r="24" fill="#3f6a3a"/><circle cx="320" cy="104" r="18" fill="#4f7a44"/><circle cx="124" cy="106" r="16" fill="#4f7a44"/>' +
      '<g clip-path="url(#dlwall)">' + bricks + '</g>' +
      tag("DEJ LOAF", 30, 168, 38, LAV, -6) + tag("IBGM", 210, 190, 22, GOLD, -4) + tag("48214", 40, 196, 16, "#4dd0e1", 3) +
      '<g class="dl-sp"><circle cx="196" cy="150" r="2" fill="' + LAV + '"/></g><g class="dl-sp dl-sp2"><circle cx="202" cy="146" r="1.6" fill="' + LAV + '"/></g>' +
      '<rect x="330" y="70" width="6" height="134" fill="#666"/>' + sign(296, 70, 74, "Mack Ave") + sign(300, 94, 70, "Fairview St") +
      '<rect x="0" y="202" width="400" height="58" fill="#3f4148"/><rect x="0" y="202" width="400" height="6" fill="#a9a59c"/><path d="M0 236h400" stroke="#ffd36b" stroke-width="2" stroke-dasharray="16 12"/>' +
      car("dl-car", 0, 240, "#2a2a2a") + car("dl-car dl-car2", 0, 240, GOLD) +
      '<text x="200" y="254" text-anchor="middle" ' + font + ' font-size="9.5" fill="#fff">MACK AVE · FAIRVIEW ST · EAST SIDE · BELLE ISLE DOME DOWN THE ROAD</text>',
      sky("dlk1", "#f0a070", "#fbd8b0") + '<clipPath id="dlwall"><rect x="0" y="112" width="290" height="90"/></clipPath>');
  }

  window.SCENES = { dlstation, dlschool, dlsvsu, dlgate, dlcorner };
})();
