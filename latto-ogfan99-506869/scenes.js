/* latto scenes (Regions tab: Atlanta; Clayton County - "Riverdale out to Lovejoy", Jonesboro). CSS classes and ids prefixed lt- (the page's own anim-train is kept).
   1 MARTA Red/Gold line at Airport, the south end of the line under the terminal roof, the closest rail stop to Clayton County: silver train pulling in.
   2 Lovejoy High School (the Wildcats, blue and white): Friday night under the lights, pom-poms bouncing on the sideline.
   3 The Rap Game TV stage in Atlanta (she won the first season as Miss Mulatto): spotlights sweeping, a lone mic, the WINNER screen.
   4 Underground Atlanta: old brick storefronts and gas lamps, the giant lit peach dropping at midnight.
   5 Tara Blvd and Mundy's Mill Rd in Jonesboro: green signs, LATTO tagged on the wall, Georgia pines and the old red-brick Clayton County courthouse clock tower behind.
   400 x 260 SVGs. No logos, no faces, no 9s drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes ltcloud{from{transform:translateX(-140px)}to{transform:translateX(460px)}}.lt-cloud{animation:ltcloud 26s linear infinite}.lt-cloud2{animation-delay:-13s}' +
    '@keyframes ltpom{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.lt-pom{animation:ltpom .6s ease-in-out infinite}.lt-pom2{animation-delay:-.3s}' +
    '@keyframes ltbeam{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}.lt-beam{transform-box:fill-box;transform-origin:50% 0%;animation:ltbeam 3.4s ease-in-out infinite}.lt-beam2{animation-delay:-1.7s}' +
    '@keyframes ltblink{0%,100%{opacity:.35}50%{opacity:1}}.lt-bl{animation:ltblink 1.6s ease-in-out infinite}.lt-bl2{animation-delay:-.8s}' +
    '@keyframes ltdrop{0%{transform:translateY(-20px)}80%,100%{transform:translateY(36px)}}.lt-drop{animation:ltdrop 6s ease-in-out infinite}' +
    '@keyframes ltconf{0%{transform:translateY(-20px);opacity:0}20%{opacity:1}100%{transform:translateY(120px);opacity:0}}.lt-cf{animation:ltconf 3s linear infinite}.lt-cf2{animation-delay:-1s}.lt-cf3{animation-delay:-2s}' +
    '@keyframes ltsway{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}.lt-pine{transform-box:fill-box;transform-origin:50% 100%;animation:ltsway 4s ease-in-out infinite}.lt-pine2{animation-delay:-2s}' +
    '@keyframes ltspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.lt-sp{animation:ltspray 1.4s ease-out infinite}.lt-sp2{animation-delay:.45s}' +
    '@keyframes lthand{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.lt-hand{transform-box:fill-box;transform-origin:50% 100%;animation:lthand 10s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, tc) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="4" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="11" fill="' + (tc || "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const label = (txt, y) => '<rect x="' + (200 - txt.length * 3.6 - 12) + '" y="' + (y - 12) + '" width="' + (txt.length * 7.2 + 24) + '" height="18" rx="2" fill="#111" opacity=".78"/><text x="200" y="' + (y + 1) + '" text-anchor="middle" ' + font + ' font-size="10" fill="#fff">' + txt + '</text>';
  const pine = (x, base, h, cls) => '<g class="lt-pine ' + (cls || "") + '"><rect x="' + (x - 2) + '" y="' + (base - h * 0.35) + '" width="4" height="' + (h * 0.35) + '" fill="#6b4a32"/>' +
    [0, 1, 2].map(i => '<path d="M' + (x - h * (0.28 - i * 0.06)) + ' ' + (base - h * (0.3 + i * 0.22)) + 'L' + x + ' ' + (base - h * (0.62 + i * 0.2)) + 'L' + (x + h * (0.28 - i * 0.06)) + ' ' + (base - h * (0.3 + i * 0.22)) + 'z" fill="#1f5a34"/>').join("") + '</g>';
  const RED = "#ce242b", GOLDL = "#d4a723", PEACH = "#ff8a5c", GOLD = "#ffd166", LAV = "#c084fc", BLUE = "#1d4fa0";

  /* 1. MARTA Airport station */
  function ltstop() {
    const win = Array.from({ length: 7 }, (_, i) => '<rect x="' + (40 + i * 44) + '" y="112" width="30" height="22" rx="3" fill="#22303c"/>').join("");
    const train = '<g class="anim-train"><rect x="24" y="100" width="340" height="56" rx="6" fill="#d6dbe0" stroke="#7f8890" stroke-width="2"/>' + win +
      '<rect x="24" y="140" width="340" height="4" fill="' + BLUE + '"/><rect x="24" y="145" width="340" height="3" fill="' + PEACH + '"/>' +
      '<rect x="342" y="108" width="18" height="34" rx="3" fill="#2b3640"/><circle cx="360" cy="150" r="3" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lts1)"/>' +
      '<rect x="0" y="0" width="400" height="44" fill="#e7e2d6"/><path d="M0 44h400" stroke="#b9b2a2" stroke-width="4"/>' +
      Array.from({ length: 8 }, (_, i) => '<rect x="' + (14 + i * 52) + '" y="12" width="36" height="18" rx="2" fill="#fffbe6" opacity=".9"/>').join("") +
      [50, 200, 350].map(x => '<rect x="' + (x - 6) + '" y="44" width="12" height="118" fill="#a8a296"/>').join("") +
      '<rect x="0" y="160" width="400" height="8" fill="#5a5650"/>' + train +
      '<rect x="0" y="168" width="400" height="92" fill="#cfc8ba"/><rect x="0" y="168" width="400" height="6" fill="#e8d36b"/>' +
      '<g transform="translate(40 196)"><rect x="0" y="0" width="34" height="24" rx="3" fill="#3a3f48"/><rect x="12" y="-6" width="10" height="6" rx="2" fill="none" stroke="#3a3f48" stroke-width="2"/><circle cx="6" cy="26" r="3" fill="#222"/><circle cx="28" cy="26" r="3" fill="#222"/></g>' +
      '<rect x="120" y="186" width="200" height="50" rx="3" fill="#111"/><text x="132" y="208" ' + font + ' font-size="16" fill="#fff">Airport</text><text x="132" y="226" ' + font + ' font-size="10" fill="#cfd8e0">MARTA · end of the line</text>' +
      badge(232, 206, "RED", RED) + badge(272, 206, "GOLD", GOLDL, "#111"),
      sky("lts1", "#4a4e58", "#8a8e98"));
  }

  /* 2. Lovejoy High School, the Wildcats */
  function ltschool() {
    const lights = [40, 360].map(x => '<rect x="' + (x - 2) + '" y="30" width="4" height="100" fill="#7a808a"/><rect x="' + (x - 22) + '" y="18" width="44" height="18" rx="2" fill="#2a2e36"/>' +
      [0, 1, 2, 3].map(i => '<circle class="lt-bl' + (i % 2 ? " lt-bl2" : "") + '" cx="' + (x - 15 + i * 10) + '" cy="27" r="4" fill="#fffbe0"/>').join("")).join("");
    const board = '<g transform="translate(140 22)"><rect x="0" y="0" width="120" height="58" rx="3" fill="#111" stroke="' + BLUE + '" stroke-width="3"/><text x="60" y="18" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="2">WILDCATS</text>' +
      '<text x="30" y="46" text-anchor="middle" ' + font + ' font-size="22" fill="' + GOLD + '">28</text><text x="90" y="46" text-anchor="middle" ' + font + ' font-size="22" fill="' + GOLD + '">14</text>' +
      '<g fill="#fff"><ellipse cx="60" cy="42" rx="6" ry="5"/><circle cx="53" cy="33" r="2.4"/><circle cx="58" cy="30" r="2.4"/><circle cx="64" cy="30" r="2.4"/><circle cx="69" cy="33" r="2.4"/></g></g>';
    let stands = "";
    for (let r = 0; r < 4; r++) for (let i = 0; i < 40; i++) stands += '<circle cx="' + (6 + i * 10 + (r % 2) * 5) + '" cy="' + (98 + r * 9) + '" r="3.2" fill="' + ((i + r) % 3 ? BLUE : "#f2f4f8") + '" opacity=".85"/>';
    let yard = "";
    for (let i = 0; i <= 8; i++) yard += '<path d="M' + (20 + i * 45) + ' 146l' + ((i - 4) * -6) + ' 90" stroke="#fff" stroke-width="2" opacity=".6"/>';
    const poms = [90, 150, 250, 310].map((x, i) => '<g class="lt-pom' + (i % 2 ? " lt-pom2" : "") + '"><circle cx="' + (x - 12) + '" cy="186" r="9" fill="' + (i % 2 ? "#fff" : BLUE) + '"/><circle cx="' + (x + 12) + '" cy="186" r="9" fill="' + (i % 2 ? BLUE : "#fff") + '"/></g>' +
      '<rect x="' + (x - 7) + '" y="190" width="14" height="22" rx="3" fill="' + BLUE + '"/><path d="M' + (x - 9) + ' 210h18l4 12h-26z" fill="#fff"/><circle cx="' + x + '" cy="182" r="6" fill="#4a2f22"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lts2)"/>' + lights + board +
      '<rect x="0" y="90" width="400" height="44" fill="#1b2232"/>' + stands +
      '<rect x="0" y="134" width="400" height="10" fill="' + BLUE + '"/><text x="200" y="142.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff" letter-spacing="3">LOVEJOY WILDCATS</text>' +
      '<rect x="0" y="144" width="400" height="116" fill="#2f7a3a"/>' + yard + poms +
      label("LOVEJOY HIGH SCHOOL · CLAYTON COUNTY", 250),
      sky("lts2", "#04061a", "#1c2448"));
  }

  /* 3. The Rap Game stage */
  function ltrapgame() {
    return svg(
      '<rect width="400" height="260" fill="url(#lts3)"/>' +
      '<g class="lt-beam"><path d="M90 0l-50 230h60z" fill="' + PEACH + '" opacity=".22"/></g><g class="lt-beam lt-beam2"><path d="M310 0l50 230h-60z" fill="' + LAV + '" opacity=".22"/></g>' +
      '<rect x="110" y="34" width="180" height="96" rx="4" fill="#0d0d14" stroke="#333" stroke-width="3"/><g class="lt-bl"><rect x="110" y="34" width="180" height="96" rx="4" fill="' + GOLD + '" opacity=".14"/></g>' +
      '<text x="200" y="78" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="34" letter-spacing="4" fill="' + GOLD + '" stroke="#000" stroke-width="1.5" paint-order="stroke">WINNER</text>' +
      '<text x="200" y="106" text-anchor="middle" ' + font + ' font-size="12" fill="#fff" letter-spacing="3">MISS MULATTO</text>' +
      '<ellipse cx="200" cy="214" rx="140" ry="20" fill="#2a2a34"/><ellipse cx="200" cy="210" rx="120" ry="14" fill="#3a3a48"/>' +
      '<g class="lt-bl lt-bl2"><ellipse cx="200" cy="210" rx="60" ry="8" fill="#fff" opacity=".25"/></g>' +
      '<rect x="198" y="150" width="4" height="58" fill="#999"/><ellipse cx="200" cy="208" rx="12" ry="3" fill="#777"/><rect x="194" y="138" width="12" height="16" rx="6" fill="#222" stroke="#888" stroke-width="1.5"/>' +
      [40, 80, 320, 360].map(x => '<g><rect x="' + (x - 14) + '" y="196" width="28" height="22" rx="4" fill="#5a2a3a"/><rect x="' + (x - 14) + '" y="178" width="28" height="20" rx="4" fill="#6a3a4a"/><rect x="' + (x - 2) + '" y="218" width="4" height="16" fill="#333"/></g>').join("") +
      label("THE RAP GAME · ATLANTA", 250),
      sky("lts3", "#05050c", "#22122a"));
  }

  /* 4. Underground Atlanta, the peach drop */
  function ltpeach() {
    const shop = (x, w, c) => '<rect x="' + x + '" y="120" width="' + w + '" height="100" fill="' + c + '"/><rect x="' + x + '" y="116" width="' + w + '" height="6" fill="#5a2a1a"/>' +
      '<rect x="' + (x + 8) + '" y="140" width="' + (w - 16) + '" height="44" fill="#ffd27a" opacity=".75"/><rect x="' + (x + 6) + '" y="132" width="' + (w - 12) + '" height="8" fill="#2a3a2a"/>' + Array.from({ length: Math.floor(w / 14) }, (_, i) => '<path d="M' + (x + 6 + i * 14) + ' 220v-30" stroke="#5a2a1a" stroke-width="1"/>').join("");
    const lamp = x => '<rect x="' + (x - 2) + '" y="160" width="4" height="60" fill="#222"/><rect x="' + (x - 6) + '" y="148" width="12" height="14" rx="2" fill="#222"/><circle class="lt-bl" cx="' + x + '" cy="155" r="4" fill="#ffe08a"/>';
    const peach = '<g class="lt-drop"><g transform="translate(200 64)"><circle cx="0" cy="0" r="24" fill="' + PEACH + '" stroke="#b34a2a" stroke-width="2"/><path d="M0 -24q-6 20 0 46" stroke="#e86a3a" stroke-width="2" fill="none"/><path d="M0 -24q12 -14 24 -8q-12 10 -24 8z" fill="#4a9a3a"/>' +
      '<circle cx="-10" cy="-8" r="4" fill="#fff" opacity=".5"/></g></g>';
    const conf = [[60, PEACH], [120, GOLD], [280, LAV], [340, "#fff"], [170, LAV], [240, GOLD]].map((c, i) => '<rect class="lt-cf lt-cf' + (i % 3 + 1) + '" x="' + c[0] + '" y="20" width="5" height="8" fill="' + c[1] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#lts4)"/>' +
      '<rect x="196" y="20" width="8" height="110" fill="#444"/>' + peach + conf +
      shop(0, 90, "#8a3a2a") + shop(96, 100, "#9a4a32") + shop(204, 96, "#7e3626") + shop(306, 94, "#9a4a32") + lamp(92) + lamp(202) + lamp(302) +
      '<rect x="0" y="220" width="400" height="40" fill="#5a5048"/><path d="M0 232h400M0 246h400" stroke="#4a4038" stroke-width="2"/>' +
      label("UNDERGROUND ATLANTA · THE PEACH DROP", 250),
      sky("lts4", "#06061a", "#3a1e4e"));
  }

  /* 5. Tara Blvd and Mundy's Mill Rd, Jonesboro; old courthouse behind */
  function ltcorner() {
    const court = '<g transform="translate(150 30)"><rect x="0" y="50" width="100" height="56" fill="#a4442e"/><rect x="36" y="0" width="28" height="56" fill="#a4442e"/><path d="M32 2l18 -22 18 22z" fill="#5a5a5a"/>' +
      '<circle cx="50" cy="20" r="9" fill="#f4efe2" stroke="#333" stroke-width="1.5"/><g class="lt-hand"><path d="M50 20v-7" stroke="#222" stroke-width="1.5"/></g><path d="M50 20h5" stroke="#222" stroke-width="1.5"/>' +
      Array.from({ length: 5 }, (_, i) => '<rect x="' + (8 + i * 19) + '" y="64" width="10" height="16" fill="#f4efe2"/>').join("") + '<rect x="40" y="38" width="20" height="10" fill="#f4efe2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#lts5)"/>' +
      '<g class="lt-cloud"><ellipse cx="80" cy="36" rx="36" ry="9" fill="#fff" opacity=".8"/></g>' + court +
      pine(30, 144, 110) + pine(110, 144, 90, "lt-pine2") + pine(290, 144, 96) + pine(372, 144, 120, "lt-pine2") +
      '<rect x="0" y="136" width="400" height="8" fill="#a8a296"/>' +
      '<rect x="0" y="140" width="250" height="88" fill="#d9d2c6"/><rect x="0" y="140" width="250" height="6" fill="#bdb4a4"/>' +
      tag("LATTO", 20, 202, 50, PEACH, -5) + tag("CLAYCO", 150, 224, 18, GOLD, -3) +
      '<g class="lt-sp"><circle cx="232" cy="176" r="3" fill="' + PEACH + '" opacity=".7"/></g><g class="lt-sp lt-sp2"><circle cx="238" cy="170" r="2" fill="' + PEACH + '" opacity=".7"/></g>' +
      '<rect x="262" y="100" width="5" height="128" fill="#5b6168"/>' + sign(272, 106, 116, "TARA BLVD") + sign(272, 132, 116, "MUNDYS MILL RD") +
      '<rect x="0" y="228" width="400" height="32" fill="#6a6c70"/><path d="M0 244h400" stroke="#fff" stroke-width="2" stroke-dasharray="14 12" opacity=".5"/>' +
      '<text x="330" y="214" text-anchor="middle" ' + font + ' font-size="10" fill="#fff" stroke="#000" stroke-width="2" paint-order="stroke">JONESBORO</text>',
      sky("lts5", "#5aa8e0", "#ffd6a8"));
  }

  window.SCENES = { ltstop, ltschool, ltrapgame, ltpeach, ltcorner };
})();
