/* gladysknight scenes (Regions tab: Atlanta; GENRES: R&B. Gladys Knight, born in Atlanta 1944; sang gospel at four at Mount Moriah Baptist Church;
   grew up on Merritts Ave, later Chestnut St; Booker T. Washington High then Archer High; the Pips formed in Atlanta in 1952 with her brother Bubba,
   sister Brenda and cousins William and Eleanor Guest; came up playing the Royal Peacock on Auburn Ave).
   CSS classes prefixed gk-. 400 x 260 SVGs. No logos, no faces, no 9s drawn.
   1 King Memorial MARTA station (Blue + Green lines), the stop for Sweet Auburn: open platform, train pulling in.
   2 The Royal Peacock on Auburn Ave: the club front with its neon peacock sign glowing and the marquee bulbs chasing.
   3 Mount Moriah Baptist Church, where she sang gospel at four: white-steepled red-brick church, bell swinging, choir robes on the steps (no faces), notes rising.
   4 Peachtree Station, Atlanta's passenger-rail stop on Peachtree Rd: small brick depot at midnight, the silver midnight train gliding through, moon above.
   5 Merritts Ave NW and Center St NW, the street she grew up on: green signs, GLADYS tagged with THE PIPS and ALL ABOARD, Georgia Tech's red-brick Tech Tower behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes gkglow{0%,100%{opacity:.45}50%{opacity:1}}.gk-glow{animation:gkglow 2.2s ease-in-out infinite}.gk-g2{animation-delay:-1.1s}' +
    '@keyframes gkchase{0%,100%{opacity:.25}50%{opacity:1}}.gk-b{animation:gkchase 1s steps(1) infinite}.gk-b2{animation-delay:-.5s}' +
    '@keyframes gkbell{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}.gk-bell{transform-box:fill-box;transform-origin:50% 0;animation:gkbell 1.8s ease-in-out infinite}' +
    '@keyframes gknote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(26px,-64px);opacity:0}}.gk-n{animation:gknote 3s ease-out infinite}.gk-n2{animation-delay:-1s}.gk-n3{animation-delay:-2s}' +
    '@keyframes gkride{from{transform:translateX(0)}to{transform:translateX(140px)}}.gk-ride{animation:gkride 1.6s linear infinite}' +
    '@keyframes gkfan{0%,100%{transform:scale(1)}50%{transform:scale(1.06)}}.gk-fan{transform-box:fill-box;transform-origin:50% 100%;animation:gkfan 2.6s ease-in-out infinite}' +
    '@keyframes gkspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.gk-sp{animation:gkspray 1.4s ease-out infinite}.gk-sp2{animation-delay:.45s}' +
    '@keyframes gkcar{from{transform:translateX(420px)}to{transform:translateX(-120px)}}.gk-car{animation:gkcar 6s linear infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const GOLD = "#f2c14e", TEAL = "#1fb5a8", ROSE = "#e86a8a", MBLUE = "#0072ce", MGREEN = "#00a651", BRICK = "#9c4a32";
  const stars = n => Array.from({ length: n }, (_, i) => '<circle class="' + (i % 4 ? "" : "gk-glow") + '" cx="' + ((i * 97) % 400) + '" cy="' + (8 + (i * 53) % 60) + '" r="' + (i % 3 ? 0.9 : 1.4) + '" fill="#fff" opacity=".7"/>').join("");
  const note = (x, y, c, cls) => '<g class="gk-n ' + (cls || "") + '"><path d="M' + x + ' ' + y + 'v-16l10 -3v16" stroke="' + c + '" stroke-width="2" fill="none"/><ellipse cx="' + (x - 3) + '" cy="' + y + '" rx="4" ry="3" fill="' + c + '"/><ellipse cx="' + (x + 7) + '" cy="' + (y - 3) + '" rx="4" ry="3" fill="' + c + '"/></g>';
  const bullet = (x, y, c, t) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + c + '"/><text x="' + x + '" y="' + (y + 3.5) + '" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">' + t + '</text>';

  /* 1. King Memorial station: open-air platform under a concrete canopy, the Blue/Green train pulling in, downtown behind */
  function gkstation() {
    const train = '<g class="anim-train"><rect x="20" y="112" width="360" height="74" rx="8" fill="#d9dde2" stroke="#6b737d" stroke-width="2"/>' +
      Array.from({ length: 7 }, (_, i) => '<rect x="' + (34 + i * 48) + '" y="122" width="36" height="28" rx="3" fill="#1d2a38"/>').join("") +
      '<rect x="20" y="158" width="360" height="7" fill="' + MBLUE + '"/><rect x="20" y="165" width="360" height="4" fill="#f58025"/>' +
      '<rect x="44" y="114" width="96" height="7" rx="1" fill="#111"/><text x="92" y="119.8" text-anchor="middle" ' + font + ' font-size="5.5" fill="#ffb020">BLUE  INDIAN CREEK</text>' +
      '<circle cx="372" cy="172" r="4" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#gk1)"/>' +
      /* downtown towers */
      '<rect x="30" y="40" width="34" height="74" fill="#5b6b86"/><rect x="74" y="22" width="26" height="92" fill="#4c5a74"/><path d="M74 22l13 -14l13 14z" fill="#4c5a74"/><rect x="120" y="50" width="40" height="64" fill="#62728c"/>' +
      '<rect x="250" y="30" width="30" height="84" fill="#56667f"/><rect x="292" y="46" width="44" height="68" fill="#4f5e78"/><rect x="346" y="58" width="30" height="56" fill="#62728c"/>' +
      '<rect x="0" y="94" width="400" height="10" fill="#b9b3a6"/><rect x="0" y="102" width="400" height="4" fill="#8f897d"/>' +
      [20, 140, 260, 380].map(x => '<rect x="' + (x - 5) + '" y="104" width="10" height="84" fill="#cbc5b8"/>').join("") +
      train +
      '<rect x="0" y="188" width="400" height="72" fill="#a8a296"/><rect x="0" y="188" width="400" height="5" fill="#f2c200"/>' + Array.from({ length: 9 }, (_, i) => '<path d="M' + (i * 50) + ' 193v67" stroke="#948e82"/>').join("") +
      /* black station sign */
      '<rect x="112" y="204" width="176" height="38" rx="3" fill="#111"/><text x="182" y="229" text-anchor="middle" ' + font + ' font-size="15" fill="#fff">King Memorial</text>' +
      bullet(262, 216, MBLUE, "BL") + bullet(262, 233, MGREEN, "GR") +
      '<text x="200" y="88" text-anchor="middle" ' + font + ' font-size="9" letter-spacing="2" fill="#fff" opacity=".85">MARTA · SWEET AUBURN</text>',
      sky("gk1", "#1b2140", "#e58f5a"));
  }

  /* 2. The Royal Peacock on Auburn Ave: brick club front, glowing neon peacock, marquee bulbs chasing */
  function gkpeacock() {
    const bulbs = Array.from({ length: 20 }, (_, i) => '<circle class="gk-b' + (i % 2 ? " gk-b2" : "") + '" cx="' + (80 + i * 12.6) + '" cy="120" r="2.6" fill="#fff2b0"/>').join("") +
      Array.from({ length: 20 }, (_, i) => '<circle class="gk-b' + (i % 2 ? "" : " gk-b2") + '" cx="' + (80 + i * 12.6) + '" cy="156" r="2.6" fill="#fff2b0"/>').join("");
    const feathers = Array.from({ length: 9 }, (_, i) => { const a = -80 + i * 20; const r = a * Math.PI / 180; const x = 200 + Math.sin(r) * 50, y = 96 - Math.cos(r) * 50;
      return '<line x1="200" y1="96" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" stroke="' + TEAL + '" stroke-width="2"/><circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="6" fill="' + TEAL + '"/><circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="3" fill="' + GOLD + '"/><circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="1.4" fill="#123"/>'; }).join("");
    return svg(
      '<rect width="400" height="260" fill="url(#gk2)"/>' + stars(12) +
      '<rect x="50" y="20" width="300" height="200" fill="' + BRICK + '"/>' + Array.from({ length: 24 }, (_, i) => '<path d="M50 ' + (26 + i * 8) + 'h300" stroke="#843a26" stroke-width="1"/>').join("") +
      /* neon peacock */
      '<g class="gk-fan gk-glow">' + feathers + '</g>' +
      '<path d="M196 96q-4 -16 4 -22q8 6 4 22z" fill="#1a6fb0" stroke="#7fe0ff" stroke-width="1.5"/><circle cx="200" cy="72" r="4" fill="#1a6fb0" stroke="#7fe0ff" stroke-width="1.2"/><path d="M200 68l-2 -6M200 68l2 -6" stroke="' + GOLD + '" stroke-width="1.2"/>' +
      /* marquee */
      '<rect x="72" y="112" width="256" height="52" rx="4" fill="#1b1022" stroke="' + GOLD + '" stroke-width="3"/>' + bulbs +
      '<text x="200" y="137" text-anchor="middle" ' + font + ' font-size="15" letter-spacing="3" fill="' + TEAL + '">ROYAL PEACOCK</text>' +
      '<text x="200" y="151" text-anchor="middle" ' + font + ' font-size="8" letter-spacing="2" fill="#fff">AUBURN AVE · LIVE TONIGHT</text>' +
      /* doors + windows */
      '<rect x="170" y="172" width="60" height="48" fill="#2a1a12"/><path d="M200 172v48" stroke="' + GOLD + '" stroke-width="2"/><rect x="88" y="176" width="52" height="30" fill="#ffd27a" class="gk-glow gk-g2"/><rect x="260" y="176" width="52" height="30" fill="#ffd27a" class="gk-glow"/>' +
      '<rect x="0" y="220" width="400" height="40" fill="#4a4844"/><rect x="0" y="218" width="400" height="4" fill="#cfc9bd"/>' +
      '<rect x="20" y="150" width="5" height="70" fill="#2c2c2c"/>' + sign(0, 150, 96, "Auburn Ave"),
      sky("gk2", "#0d0f24", "#4a2a52"));
  }

  /* 3. Mount Moriah Baptist Church: red brick with a white steeple, the bell swinging, choir robes on the steps, notes rising */
  function gkchurch() {
    const robe = (x, c) => '<path d="M' + x + ' 236l8 -40h12l8 40z" fill="' + c + '"/><circle cx="' + (x + 14) + '" cy="190" r="6" fill="#3a2418"/><rect x="' + (x + 6) + '" y="198" width="16" height="5" fill="' + GOLD + '"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gk3)"/>' +
      '<circle cx="330" cy="46" r="20" fill="#fff4c8" opacity=".9"/>' +
      '<path d="M0 200q60 -20 120 0t140 -4t140 4v60H0z" fill="#3f6d3a"/>' +
      /* church */
      '<rect x="110" y="96" width="180" height="120" fill="' + BRICK + '"/>' + Array.from({ length: 14 }, (_, i) => '<path d="M110 ' + (104 + i * 8) + 'h180" stroke="#843a26"/>').join("") +
      '<path d="M100 98L200 46L300 98z" fill="#efe9dd" stroke="#bdb4a2" stroke-width="2"/>' +
      '<rect x="182" y="24" width="36" height="30" fill="#f4efe4" stroke="#bdb4a2" stroke-width="2"/><path d="M178 26L200 2L222 26z" fill="#f4efe4" stroke="#bdb4a2" stroke-width="2"/>' +
      '<rect x="190" y="30" width="20" height="20" fill="#2a2a2a"/><g class="gk-bell"><path d="M194 32h12l2 12h-16z" fill="' + GOLD + '"/><circle cx="200" cy="46" r="2" fill="#a8822a"/></g>' +
      '<path d="M150 120a12 12 0 0 1 24 0v34h-24z" fill="#5fa0d6" opacity=".85"/><path d="M226 120a12 12 0 0 1 24 0v34h-24z" fill="#e8b84a" opacity=".85"/><path d="M162 108v46M150 130h24M238 108v46M226 130h24" stroke="#fff" stroke-width="2"/>' +
      '<path d="M182 216v-38a18 18 0 0 1 36 0v38z" fill="#4a2a18"/><path d="M200 162v54" stroke="#2a170c" stroke-width="2"/>' +
      '<rect x="120" y="68" width="160" height="16" rx="2" fill="#fff"/><text x="200" y="80" text-anchor="middle" ' + font + ' font-size="9" fill="#3a2418">MT. MORIAH BAPTIST CHURCH</text>' +
      '<rect x="160" y="216" width="80" height="8" fill="#cfc6b4"/><rect x="152" y="224" width="96" height="8" fill="#bfb5a2"/>' +
      robe(40, "#6a2b8a") + robe(70, "#6a2b8a") + robe(300, "#6a2b8a") + robe(330, "#6a2b8a") +
      note(96, 170, GOLD) + note(320, 168, "#fff", "gk-n2") + note(60, 160, "#fff", "gk-n3") +
      '<rect x="20" y="242" width="140" height="14" rx="2" fill="#1e1a2a" opacity=".8"/><text x="90" y="252.5" text-anchor="middle" ' + font + ' font-size="8" fill="#fff">GOSPEL AT FOUR YEARS OLD</text>',
      sky("gk3", "#7fb8e6", "#f6dfb0"));
  }

  /* 4. Peachtree Station at midnight: the little brick depot, platform lamps, the silver midnight train gliding through */
  function gktrain() {
    const car = (x) => '<rect x="' + x + '" y="150" width="130" height="44" rx="6" fill="#c9ced6" stroke="#7d8590" stroke-width="2"/>' +
      Array.from({ length: 6 }, (_, i) => '<rect x="' + (x + 8 + i * 20) + '" y="158" width="14" height="14" rx="2" fill="#ffe6a0"/>').join("") +
      '<rect x="' + x + '" y="180" width="130" height="4" fill="#2a4a8a"/><rect x="' + x + '" y="184" width="130" height="3" fill="#c0392b"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#gk4)"/>' + stars(26) +
      '<circle cx="64" cy="44" r="18" fill="#fff6d6"/><circle cx="72" cy="38" r="16" fill="#141a38"/>' +
      /* depot */
      '<rect x="210" y="70" width="160" height="70" fill="#8a3e2a"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M210 ' + (78 + i * 8) + 'h160" stroke="#743222"/>').join("") +
      '<path d="M200 72L290 40L380 72z" fill="#3c3c46"/><rect x="250" y="94" width="18" height="30" fill="#ffd27a" class="gk-glow"/><rect x="280" y="94" width="18" height="30" fill="#ffd27a" class="gk-glow gk-g2"/><rect x="310" y="94" width="18" height="30" fill="#ffd27a" class="gk-glow"/>' +
      '<rect x="230" y="54" width="120" height="14" rx="2" fill="#f4efe4"/><text x="290" y="64.5" text-anchor="middle" ' + font + ' font-size="8.5" fill="#3a2418">PEACHTREE STATION</text>' +
      /* clock at midnight */
      '<circle cx="230" cy="100" r="14" fill="#f8f4e8" stroke="#3a2418" stroke-width="2"/><path d="M230 100v-10M230 100v-9" stroke="#111" stroke-width="2"/>' +
      [0, 90, 180, 270].map(a => '<rect x="229" y="87" width="2" height="4" fill="#111" transform="rotate(' + a + ' 230 100)"/>').join("") +
      /* platform lamps */
      [30, 130].map(x => '<rect x="' + x + '" y="96" width="4" height="50" fill="#2c2c2c"/><circle class="gk-glow" cx="' + (x + 2) + '" cy="94" r="6" fill="#ffe08a"/>').join("") +
      '<rect x="0" y="140" width="400" height="8" fill="#6b655c"/>' +
      '<g class="gk-ride">' + car(-280) + car(-140) + car(0) + car(140) + car(280) + '</g>' +
      '<rect x="0" y="196" width="400" height="6" fill="#3a3a3a"/>' + Array.from({ length: 20 }, (_, i) => '<rect x="' + (i * 20) + '" y="202" width="10" height="4" fill="#4a3a2a"/>').join("") +
      '<rect x="0" y="206" width="400" height="54" fill="#2a2a30"/>' +
      '<text x="200" y="236" text-anchor="middle" ' + font + ' font-size="14" letter-spacing="4" fill="' + GOLD + '">ALL ABOARD</text>' +
      '<text x="200" y="252" text-anchor="middle" ' + font + ' font-size="8" letter-spacing="2" fill="#fff" opacity=".8">THE MIDNIGHT TRAIN TO GEORGIA</text>',
      sky("gk4", "#0a0e26", "#2a2050"));
  }

  /* 5. Merritts Ave NW and Center St NW: green signs, a brick wall tagged GLADYS, Tech Tower's red-brick spire behind */
  function gkcorner() {
    return svg(
      '<rect width="400" height="260" fill="url(#gk5)"/>' + stars(10) +
      /* Tech Tower: red brick Victorian tower with a dark pointed roof */
      '<rect x="230" y="60" width="120" height="58" fill="#a24a34"/><rect x="270" y="26" width="40" height="92" fill="#ad5038"/><path d="M264 28L290 -4L316 28z" fill="#3a3a42"/>' +
      Array.from({ length: 4 }, (_, i) => '<rect class="gk-glow' + (i % 2 ? " gk-g2" : "") + '" x="' + (240 + i * 28) + '" y="80" width="10" height="16" fill="#ffd27a"/>').join("") +
      '<rect x="282" y="40" width="16" height="22" fill="#ffd27a" class="gk-glow"/>' +
      '<g class="gk-car"><rect x="0" y="104" width="34" height="10" rx="3" fill="#c0392b"/><circle cx="7" cy="115" r="3" fill="#111"/><circle cx="27" cy="115" r="3" fill="#111"/><circle cx="0" cy="108" r="2" fill="#fff6c2"/></g>' +
      '<rect x="0" y="118" width="400" height="106" fill="#8a4a36"/>' + Array.from({ length: 13 }, (_, i) => '<path d="M0 ' + (126 + i * 8) + 'h400" stroke="#743a28"/>').join("") +
      Array.from({ length: 26 }, (_, i) => '<path d="M' + ((i % 2 ? 10 : 0) + Math.floor(i / 2) * 32) + ' ' + (118 + (i % 13) * 8) + 'v8" stroke="#743a28"/>').join("") +
      tag("GLADYS", 16, 196, 48, GOLD, -5) + tag("THE PIPS", 196, 150, 20, TEAL, -4) + tag("ALL ABOARD", 24, 218, 17, ROSE, -3) +
      '<g class="gk-sp"><circle cx="208" cy="190" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="gk-sp gk-sp2"><circle cx="214" cy="184" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<rect x="0" y="224" width="400" height="36" fill="#55534e"/><rect x="0" y="222" width="400" height="4" fill="#e8e4dc"/>' +
      '<rect x="356" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(286, 98, 114, "Merritts Ave NW") + sign(300, 124, 100, "Center St NW"),
      sky("gk5", "#151a3e", "#d0835a"));
  }

  window.SCENES = { gkstation: gkstation, gkpeacock: gkpeacock, gkchurch: gkchurch, gktrain: gktrain, gkcorner: gkcorner };
})();
