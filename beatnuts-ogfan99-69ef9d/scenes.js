/* The Beatnuts game (NYC map, Queens: Corona, the 7 at 111 St).
   1. 111 St on the 7, up on the el over Roosevelt Av: the platform canopy, the black sign with the purple 7, the 7 sliding in.
   2. The Iron Triangle at Willets Point, the junkyards next door to Corona (the Beatnuts call themselves the Junkyard): stacked wrecks, a crane magnet lifting a car, puddles in the dirt road.
   3. A Corona basement beat session: crates of jazz and Latin records, the turntable spinning, a 12-bit sampler with its pads lighting up, the 7 rolling past the little window.
   4. The Fountain of the Planets in Flushing Meadows Corona Park, a walk south from 111 St: the long pool, the jets rising and falling, the park lamps.
   5. Roosevelt Av & 111 St: green street signs, the wall tagged BEATNUTS, the 7 el overhead and the Rocket Thrower statue off in the park behind.
   400 x 260 SVGs. No logos, no faces. All CSS classes prefixed bn-. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes bnflick{0%,100%{opacity:1}45%{opacity:.8}50%{opacity:.3}55%{opacity:.9}}.bn-flk{animation:bnflick 2.4s infinite}.bn-flk2{animation-delay:-1.2s}' +
    '@keyframes bnblink{0%,100%{opacity:.25}50%{opacity:1}}.bn-bl{animation:bnblink 1.2s ease-in-out infinite}.bn-bl2{animation-delay:-.4s}.bn-bl3{animation-delay:-.8s}' +
    '@keyframes bncar{from{transform:translateX(-90px)}to{transform:translateX(490px)}}.bn-car{animation:bncar 8s linear infinite}.bn-car2{animation-delay:-4s}' +
    '@keyframes bnlift{0%,15%{transform:translateY(0)}45%,70%{transform:translateY(-46px)}100%{transform:translateY(0)}}.bn-lift{animation:bnlift 5s ease-in-out infinite}' +
    '@keyframes bnswing{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}.bn-swing{transform-box:fill-box;transform-origin:50% 0%;animation:bnswing 3.2s ease-in-out infinite}' +
    '@keyframes bnspin{to{transform:rotate(360deg)}}.bn-spin{transform-box:fill-box;transform-origin:50% 50%;animation:bnspin 1.8s linear infinite}' +
    '@keyframes bnjet{0%,100%{transform:scaleY(.55)}50%{transform:scaleY(1)}}.bn-jet{transform-box:fill-box;transform-origin:50% 100%;animation:bnjet 2.2s ease-in-out infinite}.bn-jet2{animation-delay:-.7s}.bn-jet3{animation-delay:-1.4s}' +
    '@keyframes bnripple{from{transform:translateX(0)}to{transform:translateX(-40px)}}.bn-rip{animation:bnripple 3s linear infinite}' +
    '@keyframes bnnote{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-36px);opacity:0}}.bn-note{animation:bnnote 2.4s ease-out infinite}.bn-note2{animation-delay:-.8s}.bn-note3{animation-delay:-1.6s}' +
    '@keyframes bnel{from{transform:translateX(420px)}to{transform:translateX(-380px)}}.bn-el{animation:bnel 9s linear infinite}' +
    '@keyframes bnbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.bn-bob{animation:bnbob .6s ease-in-out infinite}.bn-bob2{animation-delay:-.3s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, letter, color, dark) => '<circle cx="' + x + '" cy="' + y + '" r="11" fill="' + color + '"/><text x="' + x + '" y="' + (y + 5.5) + '" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="15" fill="' + (dark ? "#000" : "#fff") + '">' + letter + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="6" fill="' + col + '"/><rect x="' + (x - 6) + '" y="' + (y + 7) + '" width="12" height="20" rx="5" fill="' + col + '"/></g>';
  const GOLD = "#f7b32b", RUST = "#e4572e", MINT = "#7dd3c0", CREAM = "#f6ecd6", SEVEN = "#b933ad";

  /* a 7 train car (silver, purple stripe) */
  const car7 = (x, y, w) => {
    let win = "";
    for (let i = 14; i < w - 30; i += 30) win += '<rect x="' + (x + i) + '" y="' + (y + 10) + '" width="20" height="18" rx="2" fill="#cfe2f5" opacity=".9"/>';
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="52" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
      '<rect x="' + x + '" y="' + (y + 34) + '" width="' + w + '" height="4" fill="' + SEVEN + '"/>';
  };

  /* 1. 111 St on the 7, elevated over Roosevelt Av */
  function seven() {
    let ties = "";
    for (let x = 0; x < 400; x += 14) ties += '<rect x="' + x + '" y="168" width="8" height="5" fill="#3b2f27"/>';
    let roofs = "";
    [[0, 92, 70], [70, 104, 58], [128, 86, 64], [192, 98, 70], [262, 90, 60], [322, 100, 78]].forEach(([x, y, w], i) => {
      roofs += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (180 - y) + '" fill="' + ["#7c4a36", "#8f5a3c", "#6b4434", "#9a6a48", "#7a5240", "#875338"][i] + '"/>';
      for (let wx = x + 8; wx < x + w - 10; wx += 16) roofs += '<rect class="bn-bl bn-bl' + (i % 3 + 1) + '" x="' + wx + '" y="' + (y + 10) + '" width="8" height="10" fill="#ffd98a" opacity=".85"/>';
    });
    return svg(
      '<rect width="400" height="260" fill="url(#bns)"/>' + roofs +
      /* platform canopy */
      '<path d="M0 34h400v10H0z" fill="#3b4d3a"/><path d="M0 44h400l-12 8H12z" fill="#2c3a2b"/>' +
      [30, 130, 230, 330].map(x => '<rect x="' + (x - 3) + '" y="44" width="6" height="120" fill="#3b4d3a"/>').join("") +
      [80, 180, 280].map((x, i) => '<rect class="bn-flk' + (i % 2 ? " bn-flk2" : "") + '" x="' + (x - 22) + '" y="50" width="44" height="5" rx="2" fill="#fff8d6"/>').join("") +
      /* black station sign */
      '<rect x="98" y="62" width="204" height="30" rx="3" fill="#111"/><rect x="98" y="62" width="204" height="3" fill="#fff"/>' +
      '<text x="112" y="84" ' + font + ' font-size="16" fill="#fff">111 St</text>' + bullet(284, 78, "7", SEVEN) +
      /* the 7 sliding in */
      '<g class="anim-train">' + car7(6, 112, 300) +
        '<rect x="286" y="122" width="16" height="22" rx="2" fill="#cfe2f5"/>' + bullet(294, 152, "7", SEVEN) +
        '<circle cx="300" cy="158" r="3" fill="#fff6c2"/></g>' +
      '<rect x="0" y="164" width="400" height="6" fill="#eab308"/><rect x="0" y="170" width="400" height="14" fill="#5b5f66"/>' + ties +
      /* el structure + street below */
      '<rect x="0" y="184" width="400" height="10" fill="#4f6b52"/>' +
      [20, 120, 220, 320].map(x => '<rect x="' + x + '" y="194" width="10" height="44" fill="#4f6b52"/><path d="M' + (x - 14) + ' 194l19 18 19-18" stroke="#4f6b52" stroke-width="4" fill="none"/>').join("") +
      '<rect x="0" y="238" width="400" height="22" fill="#3a3c40"/>' +
      '<g class="bn-car"><rect x="0" y="240" width="48" height="13" rx="4" fill="' + GOLD + '"/><circle cx="10" cy="254" r="4" fill="#111"/><circle cx="38" cy="254" r="4" fill="#111"/></g>' +
      '<g class="bn-car bn-car2"><rect x="0" y="242" width="40" height="11" rx="4" fill="' + MINT + '"/><circle cx="9" cy="254" r="3.5" fill="#111"/><circle cx="31" cy="254" r="3.5" fill="#111"/></g>' +
      person(340, 132, "#1b1b1b", "bn-bob") + person(362, 136, "#2a2320", "bn-bob bn-bob2") +
      txt("ROOSEVELT AV · CORONA", 200, 24, 11, CREAM, 'letter-spacing="3"'),
      sky("bns", "#f2a65a", "#ffd9a8"));
  }

  /* 2. The Iron Triangle at Willets Point: junkyards and auto shops */
  function yard() {
    const wreck = (x, y, w, c) => '<g><rect x="' + x + '" y="' + y + '" width="' + w + '" height="16" rx="3" fill="' + c + '" stroke="#2a2420" stroke-width="1.5"/><rect x="' + (x + 6) + '" y="' + (y + 3) + '" width="' + (w * 0.3) + '" height="6" fill="#56636e"/><path d="M' + (x + w * 0.55) + ' ' + y + 'l6 16" stroke="#2a2420" stroke-width="1"/></g>';
    let pile = "";
    const cols = ["#8a3b2a", "#5a6b7a", "#9c8a4a", "#3d5a44", "#7a4b6a", "#a35a2a", "#6b6b6b"];
    for (let r = 0; r < 5; r++) for (let i = 0; i < 4; i++) pile += wreck(18 + i * 46 + (r % 2) * 14, 186 - r * 17, 42, cols[(r * 4 + i) % cols.length]);
    let tires = "";
    for (let i = 0; i < 6; i++) tires += '<circle cx="' + (300 + (i % 3) * 22) + '" cy="' + (214 - Math.floor(i / 3) * 18) + '" r="10" fill="#1d1d1d" stroke="#3b3b3b" stroke-width="3"/><circle cx="' + (300 + (i % 3) * 22) + '" cy="' + (214 - Math.floor(i / 3) * 18) + '" r="3" fill="#777"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bny)"/>' +
      /* auto-body shop fronts */
      '<rect x="230" y="96" width="170" height="110" fill="#c2b59b"/><rect x="230" y="96" width="170" height="14" fill="' + RUST + '"/>' +
      txt("AUTO PARTS · BODY · GLASS", 315, 107, 8.5, "#fff", 'letter-spacing="1"') +
      '<rect x="244" y="124" width="62" height="70" fill="#4a4a4f"/>' + [130, 140, 150, 160, 170, 180].map(y => '<path d="M244 ' + y + 'h62" stroke="#3a3a3e" stroke-width="2"/>').join("") +
      '<rect x="320" y="124" width="62" height="70" fill="#2c2c30"/><rect class="bn-flk" x="332" y="132" width="38" height="8" fill="#ffdf7a"/>' +
      pile + tires +
      /* crane with the magnet lifting a car */
      '<rect x="196" y="50" width="8" height="150" fill="' + GOLD + '"/><path d="M200 54l-96 -14" stroke="' + GOLD + '" stroke-width="7"/><path d="M196 70l-80 -24M204 120l-8 -50" stroke="#c48a14" stroke-width="2"/>' +
      '<rect x="186" y="190" width="28" height="12" fill="#c48a14"/>' +
      '<g class="bn-lift"><path d="M110 42v68" stroke="#333" stroke-width="2"/><g class="bn-swing"><rect x="96" y="110" width="28" height="8" rx="2" fill="#444"/>' +
        '<rect x="88" y="120" width="44" height="14" rx="3" fill="#2f6f8f" stroke="#1d3a4a" stroke-width="1.5"/><circle cx="98" cy="136" r="4" fill="#111"/><circle cx="122" cy="136" r="4" fill="#111"/></g></g>' +
      /* dirt road, puddles */
      '<rect x="0" y="206" width="400" height="54" fill="#7a6a52"/>' +
      '<ellipse cx="120" cy="236" rx="46" ry="6" fill="#9fb3c2" opacity=".7"/><ellipse cx="300" cy="246" rx="34" ry="5" fill="#9fb3c2" opacity=".7"/>' +
      '<g class="bn-car"><rect x="0" y="222" width="54" height="15" rx="4" fill="#d9d4c7"/><rect x="34" y="214" width="20" height="9" rx="2" fill="#d9d4c7"/><circle cx="12" cy="238" r="4.5" fill="#111"/><circle cx="44" cy="238" r="4.5" fill="#111"/></g>' +
      person(258, 196, "#2b2b2b", "bn-bob") +
      txt("THE IRON TRIANGLE · WILLETS POINT", 200, 20, 11, CREAM, 'letter-spacing="2"') + txt("THE JUNKYARD NEXT DOOR TO CORONA", 200, 33, 8, CREAM, 'letter-spacing="2" opacity=".8"'),
      sky("bny", "#8fb5cf", "#e8e1cf"));
  }

  /* 3. A Corona basement beat session */
  function lab() {
    let paneling = "";
    for (let x = 0; x < 400; x += 20) paneling += '<rect x="' + x + '" y="0" width="18" height="170" fill="' + (x % 40 ? "#5a3a24" : "#62402a") + '"/>';
    let crates = "";
    [[16, 160], [74, 160], [16, 120], [300, 160], [358, 160]].forEach(([x, y], i) => {
      crates += '<rect x="' + x + '" y="' + y + '" width="54" height="40" fill="#c98a3a" stroke="#7a4f1c" stroke-width="2"/>';
      for (let k = 0; k < 6; k++) crates += '<rect x="' + (x + 4 + k * 8) + '" y="' + (y - 6) + '" width="6" height="40" fill="' + ["#1d1d1d", RUST, "#2f6f8f", GOLD, "#3d5a44", "#7a4b6a"][(k + i) % 6] + '"/>';
    });
    let pads = "";
    for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) pads += '<rect class="bn-bl bn-bl' + ((r + c) % 3 + 1) + '" x="' + (238 + c * 13) + '" y="' + (176 + r * 12) + '" width="10" height="9" rx="1.5" fill="' + (c % 2 ? GOLD : RUST) + '"/>';
    return svg(
      '<rect width="400" height="260" fill="#3a2516"/>' + paneling +
      /* the little window up high, the 7 rolling past outside */
      '<rect x="150" y="18" width="100" height="40" fill="#f2a65a" stroke="#2a1a10" stroke-width="4"/>' +
      '<g><clipPath id="bnw"><rect x="152" y="20" width="96" height="36"/></clipPath><g clip-path="url(#bnw)"><rect x="152" y="40" width="96" height="16" fill="#4f6b52"/><g class="bn-el">' + car7(0, 22, 120) + car7(124, 22, 120) + '</g></g></g>' +
      '<path d="M200 18v40" stroke="#2a1a10" stroke-width="3"/>' +
      /* poster */
      '<rect x="300" y="40" width="70" height="88" fill="#f6ecd6" stroke="#222"/>' + txt("JAZZ", 335, 64, 14, RUST) + txt("LATIN", 335, 82, 12, "#2f6f8f") + txt("FUNK", 335, 100, 12, "#222") + txt("BREAKS", 335, 118, 9, "#7a4f1c") +
      /* the table */
      '<rect x="120" y="200" width="200" height="10" fill="#2a1a10"/><rect x="130" y="210" width="8" height="50" fill="#2a1a10"/><rect x="302" y="210" width="8" height="50" fill="#2a1a10"/>' +
      /* turntable, seen from above */
      '<rect x="122" y="134" width="100" height="66" rx="4" fill="#2b2b2e" stroke="#777" stroke-width="1.5"/>' +
      '<g class="bn-spin"><circle cx="162" cy="167" r="28" fill="#111"/><circle cx="162" cy="167" r="20" fill="none" stroke="#2a2a2a"/><circle cx="162" cy="167" r="9" fill="' + RUST + '"/><path d="M140 154q8-10 20-12" stroke="#555" stroke-width="1.5" fill="none"/><circle cx="162" cy="167" r="1.5" fill="#ddd"/></g>' +
      '<circle cx="208" cy="146" r="5" fill="#888"/><path d="M208 146l-6 34l-12 4" stroke="#ccc" stroke-width="2.5" fill="none"/>' +
      /* sampler */
      '<rect x="230" y="160" width="70" height="40" rx="3" fill="#a9a399" stroke="#5a564e" stroke-width="1.5"/><rect x="236" y="164" width="34" height="9" fill="#2a3a2a"/><rect class="bn-flk" x="238" y="166" width="22" height="5" fill="#9cff57" opacity=".8"/>' +
      pads + '<circle cx="288" cy="172" r="5" fill="#5a564e"/><circle cx="288" cy="188" r="5" fill="#5a564e"/>' +
      crates +
      /* floor */
      '<rect x="0" y="200" width="400" height="60" fill="#4a4e45" opacity=".9"/><rect x="0" y="200" width="400" height="3" fill="#2a1a10"/>' +
      '<text class="bn-note" x="190" y="150" font-size="18" fill="' + GOLD + '">&#9834;</text><text class="bn-note bn-note2" x="240" y="146" font-size="15" fill="' + MINT + '">&#9835;</text><text class="bn-note bn-note3" x="146" y="148" font-size="14" fill="' + CREAM + '">&#9834;</text>' +
      txt("A CORONA BASEMENT, CRATES DUG, BEATS CHOPPED", 200, 246, 10, CREAM, 'letter-spacing="1"'));
  }

  /* 4. The Fountain of the Planets, Flushing Meadows Corona Park */
  function planets() {
    let jets = "";
    for (let i = 0; i < 9; i++) {
      const x = 30 + i * 42, h = 40 + (i % 3) * 18;
      jets += '<g class="bn-jet bn-jet' + (i % 3 + 1) + '"><path d="M' + (x - 4) + ' 176q4-' + h + ' 8 0z" fill="#e8f6ff" opacity=".9"/><path d="M' + (x - 10) + ' 176q10-' + (h * 0.6) + ' 20 0" stroke="#cfeaf7" stroke-width="2" fill="none" opacity=".7"/></g>';
    }
    let ripple = "";
    for (let x = 0; x < 480; x += 40) ripple += '<path d="M' + x + ' 196q10-4 20 0t20 0" stroke="#bfe3f2" stroke-width="1.5" fill="none" opacity=".7"/><path d="M' + (x + 14) + ' 214q10-4 20 0t20 0" stroke="#bfe3f2" stroke-width="1.5" fill="none" opacity=".5"/>';
    let trees = "";
    for (let i = 0; i < 10; i++) trees += '<circle cx="' + (i * 44 + 10) + '" cy="' + (128 + (i % 2) * 6) + '" r="' + (22 + (i % 3) * 4) + '" fill="' + ["#2f6b3a", "#3c7d45", "#285c33"][i % 3] + '"/>';
    let lamps = "";
    [24, 376].forEach(x => { lamps += '<rect x="' + (x - 2) + '" y="120" width="4" height="62" fill="#2a2f35"/><circle class="bn-flk" cx="' + x + '" cy="118" r="6" fill="#fff3b0"/>'; });
    return svg(
      '<rect width="400" height="260" fill="url(#bnp)"/>' + trees +
      '<rect x="0" y="150" width="400" height="10" fill="#d8d0bd"/>' +
      /* the long pool */
      '<rect x="0" y="160" width="400" height="80" fill="#4f9fc4"/><rect x="0" y="160" width="400" height="6" fill="#3b88ad"/>' +
      '<g class="bn-rip">' + ripple + '</g>' + jets +
      '<rect x="0" y="236" width="400" height="24" fill="#d8d0bd"/><rect x="0" y="236" width="400" height="3" fill="#b8ae98"/>' + lamps +
      person(300, 226, "#1d2430", "bn-bob") + person(318, 228, "#3a2a22", "bn-bob bn-bob2") +
      txt("FOUNTAIN OF THE PLANETS", 200, 30, 13, "#fff", 'letter-spacing="3" stroke="#1d3a4a" stroke-width="3" paint-order="stroke" stroke-linejoin="round"') +
      txt("FLUSHING MEADOWS CORONA PARK", 200, 48, 9, "#fff", 'letter-spacing="2" stroke="#1d3a4a" stroke-width="2.5" paint-order="stroke" stroke-linejoin="round"'),
      sky("bnp", "#5ea3d9", "#cfe8f7"));
  }

  /* 5. Roosevelt Av & 111 St: green signs, the BEATNUTS wall, the el overhead, the Rocket Thrower in the park behind */
  function corner() {
    let trees = "";
    for (let i = 0; i < 8; i++) trees += '<circle cx="' + (i * 54 + 20) + '" cy="' + (96 + (i % 2) * 5) + '" r="' + (20 + (i % 3) * 4) + '" fill="' + ["#2f6b3a", "#3c7d45", "#285c33"][i % 3] + '" opacity=".9"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#bnc)"/>' +
      /* the Rocket Thrower: a dark bronze figure on a tall pale plinth, one arm flung up, a ring of gold stars arcing off it */
      '<g transform="translate(16 26)"><rect x="92" y="78" width="26" height="34" fill="#cfc6b2"/><rect x="88" y="74" width="34" height="6" fill="#b9b09a"/>' +
        '<path d="M100 74l3 -22l-8 -6l3 -4l9 6l4 -2l2 -14l-5 -10l3 -2l6 10l10 -16l4 2l-11 20l-2 14l5 4l2 24h-4l-3 -20l-4 2l-6 20z" fill="#3e5b4b"/><circle cx="110" cy="26" r="5" fill="#3e5b4b"/>' +
        '<path d="M128 18q28 -20 60 0" stroke="' + GOLD + '" stroke-width="2.5" fill="none"/>' +
        [[140, 10], [156, 6], [172, 8], [186, 16]].map(([x, y], i) => '<circle class="bn-bl bn-bl' + (i % 3 + 1) + '" cx="' + x + '" cy="' + y + '" r="3" fill="' + GOLD + '"/>').join("") + '</g>' +
      trees +
      /* the el overhead */
      '<rect x="0" y="0" width="400" height="16" fill="#4f6b52"/><rect x="0" y="16" width="400" height="5" fill="#3d5540"/>' +
      '<rect x="30" y="21" width="10" height="100" fill="#4f6b52"/><rect x="250" y="21" width="10" height="100" fill="#4f6b52"/>' +
      /* the wall */
      '<rect x="0" y="120" width="400" height="104" fill="#3d3f47"/>' +
      (() => { let b = ""; for (let y = 132; y < 224; y += 12) b += '<path d="M0 ' + y + 'h400" stroke="#33353c" stroke-width="1"/>'; return b; })() +
      tag("BEATNUTS", 16, 188, 44, GOLD, -5) + tag("JUNKYARD", 196, 216, 20, RUST, -4) + tag("BIG JU", 28, 216, 16, MINT, -3) + tag("PSYCH", 292, 156, 18, CREAM, -4) +
      '<rect x="0" y="224" width="400" height="36" fill="#55575c"/><rect x="0" y="224" width="400" height="5" fill="#8a8c90"/>' +
      '<g class="bn-car"><rect x="0" y="236" width="46" height="13" rx="4" fill="' + RUST + '"/><circle cx="10" cy="249" r="4" fill="#111"/><circle cx="36" cy="249" r="4" fill="#111"/></g>' +
      /* sign pole + green signs */
      '<rect x="356" y="60" width="5" height="166" fill="#3d4b3f"/>' +
      '<rect x="290" y="64" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("Roosevelt Av", 343, 80, 12, "#fff") +
      '<rect x="290" y="90" width="106" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/>' + txt("111 St", 343, 106, 12, "#fff") +
      '<circle class="bn-flk" cx="358" cy="58" r="4" fill="#fff6c2"/>',
      sky("bnc", "#f28c52", "#ffd9a8"));
  }

  window.SCENES = { seven: seven, yard: yard, lab: lab, planets: planets, corner: corner };
})();
