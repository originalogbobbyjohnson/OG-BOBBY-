/* Pete Rock & CL Smooth game (NYC map, Westchester: Mount Vernon).
   0 Wakefield–241 St, the 2's last stop up on the open-air terminal at the Mount Vernon line;
   1 Mount Vernon High School on California Rd, where Pete and CL met (maroon and gold, the Knights);
   2 Rye Playland, Westchester's old amusement park: the Art Deco tower, the Dragon Coaster, the lake ("ride through the tunnel of love... carve our name in a tree by the lake");
   3 the Westchester County Center in White Plains, the county's Art Deco show hall;
   4 California Rd & Arizona Pl: green street signs, the wall tagged PETE ROCK & CL SMOOTH, Mount Vernon High behind.
   All CSS classes are prefixed pcl- . No logos, no faces, no 9s drawn. 400 x 260 SVGs. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes pclcloud{from{transform:translateX(-120px)}to{transform:translateX(460px)}}.pcl-cloud{animation:pclcloud 26s linear infinite}.pcl-cloud2{animation-duration:34s;animation-delay:-14s}' +
    '@keyframes pclbird{0%{transform:translate(-40px,0)}50%{transform:translate(200px,-14px)}100%{transform:translate(440px,4px)}}.pcl-bird{animation:pclbird 11s linear infinite}' +
    '@keyframes pclflag{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(-6deg) scaleX(.92)}}.pcl-flag{transform-box:fill-box;transform-origin:0% 50%;animation:pclflag 1.4s ease-in-out infinite}' +
    '@keyframes pclbounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-26px)}}.pcl-ball{animation:pclbounce .9s cubic-bezier(.3,0,.7,1) infinite}' +
    '@keyframes pclride{0%{transform:translate(0,0)}25%{transform:translate(70px,-46px)}50%{transform:translate(140px,0)}75%{transform:translate(210px,-30px)}100%{transform:translate(280px,0)}}.pcl-car{animation:pclride 5s ease-in-out infinite}' +
    '@keyframes pclswan{0%,100%{transform:translateX(0)}50%{transform:translateX(60px)}}.pcl-swan{animation:pclswan 9s ease-in-out infinite}' +
    '@keyframes pclblink{0%,100%{opacity:.25}50%{opacity:1}}.pcl-bl{animation:pclblink 1.2s ease-in-out infinite}.pcl-bl2{animation-delay:.4s}.pcl-bl3{animation-delay:.8s}' +
    '@keyframes pclbob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}.pcl-bob{animation:pclbob .7s ease-in-out infinite}.pcl-bob2{animation-delay:.35s}' +
    '@keyframes pcldrive{from{transform:translateX(-90px)}to{transform:translateX(480px)}}.pcl-drive{animation:pcldrive 6.5s linear infinite}' +
    '@keyframes pclglow{0%,100%{opacity:.5}50%{opacity:1}}.pcl-glow{animation:pclglow 2.2s ease-in-out infinite}' +
    '@keyframes pclripple{0%,100%{transform:scaleX(1);opacity:.5}50%{transform:scaleX(1.25);opacity:.9}}.pcl-rip{transform-box:fill-box;transform-origin:50% 50%;animation:pclripple 2.6s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const txt = (t, x, y, size, fill, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" ' + font + ' font-size="' + size + '" fill="' + fill + '" ' + (extra || "") + '>' + t + '</text>';
  const tag = (t, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" transform="rotate(' + (rot || -5) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + t + '</text>';
  const bullet = (x, y, l, c, dark) => '<circle cx="' + x + '" cy="' + y + '" r="10" fill="' + c + '"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" ' + font + ' font-size="14" fill="' + (dark ? "#000" : "#fff") + '">' + l + '</text>';
  const person = (x, y, col, cls) => '<g class="' + (cls || "") + '"><circle cx="' + x + '" cy="' + y + '" r="5.5" fill="' + col + '"/><rect x="' + (x - 5.5) + '" y="' + (y + 6) + '" width="11" height="18" rx="5" fill="' + col + '"/></g>';
  const cloud = (x, y, s, cls) => '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" fill="#fff" opacity=".85"><ellipse cx="0" cy="0" rx="26" ry="10"/><ellipse cx="16" cy="-7" rx="16" ry="10"/><ellipse cx="-14" cy="-4" rx="12" ry="8"/></g></g>';
  const bird = (x, y) => '<path d="M' + x + ' ' + y + 'q5-5 10 0q5-5 10 0" stroke="#2a2a2a" stroke-width="1.6" fill="none"/>';
  const GOLD = "#f2c14e", MAROON = "#7a1f2b", RED = "#ee352e", GREEN45 = "#00933c";

  /* 0. Wakefield–241 St: the open-air terminal of the 2 (5 at rush hour), concrete platform, the green steel canopy, the black sign, the 2 train sliding in, trees over the Mount Vernon line */
  function pclWakefield() {
    let win = "";
    for (let x = 26; x < 280; x += 30) win += '<rect x="' + x + '" y="128" width="20" height="18" rx="2" fill="#cfe2f5" opacity=".9"/>';
    let posts = "";
    for (let x = 30; x < 400; x += 74) posts += '<rect x="' + (x - 3) + '" y="58" width="6" height="110" fill="#2f6b4f"/>';
    let trees = "";
    [[20, 112], [70, 104], [340, 108], [390, 116]].forEach(([x, y]) => trees += '<circle cx="' + x + '" cy="' + y + '" r="26" fill="#3f7a3a"/><circle cx="' + (x + 16) + '" cy="' + (y + 8) + '" r="18" fill="#4f8f45"/>');
    return svg(
      '<rect width="400" height="260" fill="url(#pclwk)"/>' +
      cloud(60, 34, 1, "pcl-cloud") + cloud(180, 22, .8, "pcl-cloud pcl-cloud2") +
      '<g class="pcl-bird">' + bird(20, 40) + bird(40, 48) + '</g>' +
      trees +
      /* the canopy roof */
      '<path d="M0 50h400v8H0z" fill="#2f6b4f"/><path d="M0 58h400v6H0z" fill="#1f4a36"/>' + posts +
      /* station sign */
      '<rect x="88" y="70" width="230" height="30" rx="3" fill="#111"/><rect x="88" y="70" width="230" height="3" fill="#fff"/>' +
      '<text x="100" y="91" ' + font + ' font-size="14" fill="#fff">Wakefield–241 St</text>' + bullet(272, 86, "2", RED) + bullet(298, 86, "5", GREEN45) +
      /* the train */
      '<g class="anim-train">' +
        '<rect x="10" y="118" width="290" height="50" rx="6" fill="#c9ced6" stroke="#6b7280" stroke-width="2"/>' + win +
        '<rect x="282" y="124" width="14" height="24" rx="2" fill="#cfe2f5"/>' + bullet(289, 158, "2", RED) +
        '<rect x="10" y="150" width="270" height="3" fill="' + RED + '"/>' +
        '<circle cx="296" cy="128" r="3" fill="#fff6c2"/>' +
      '</g>' +
      /* platform */
      '<rect x="0" y="168" width="400" height="8" fill="#eab308"/><rect x="0" y="176" width="400" height="84" fill="#8a8580"/>' +
      '<rect x="0" y="176" width="400" height="3" fill="#6b6762"/>' +
      person(330, 196, "#2a2a2a", "pcl-bob") + person(352, 200, "#3a2f2a", "pcl-bob pcl-bob2") +
      txt("LAST STOP · MOUNT VERNON LINE", 160, 238, 11, "#fff", 'letter-spacing="2"'),
      sky("pclwk", "#7fb6e6", "#f4d6a8"));
  }

  /* 1. Mount Vernon High School on California Rd: the long 1960s brick school, the maroon-and-gold KNIGHTS banner, flag waving, a ball bouncing on the front walk */
  function pclKnights() {
    let wins = "";
    for (let r = 0; r < 3; r++) for (let x = 24; x < 380; x += 26) if (!(x > 160 && x < 240 && r === 2)) wins += '<rect x="' + x + '" y="' + (86 + r * 30) + '" width="18" height="18" fill="' + (r === 1 ? "#d7e6f0" : "#bcd3e3") + '" stroke="#e8dcc4" stroke-width="2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pclkn)"/>' +
      cloud(80, 30, 1, "pcl-cloud") + cloud(260, 44, .7, "pcl-cloud pcl-cloud2") +
      /* building */
      '<rect x="10" y="72" width="380" height="104" fill="#9b4a3a"/><rect x="10" y="66" width="380" height="8" fill="#e8dcc4"/>' + wins +
      /* entrance */
      '<rect x="164" y="146" width="72" height="30" fill="#2a1e18"/><rect x="170" y="150" width="28" height="26" fill="#6f8fa6"/><rect x="202" y="150" width="28" height="26" fill="#6f8fa6"/>' +
      '<rect x="150" y="138" width="100" height="8" fill="#e8dcc4"/>' +
      /* lettering + banner */
      '<rect x="110" y="52" width="180" height="16" fill="#e8dcc4"/>' + txt("MOUNT VERNON HIGH SCHOOL", 200, 64, 10, MAROON, 'letter-spacing="1"') +
      '<rect x="272" y="84" width="40" height="70" fill="' + MAROON + '"/><rect x="272" y="84" width="40" height="8" fill="' + GOLD + '"/><path d="M272 154l20 10l20-10z" fill="' + MAROON + '"/>' +
      '<text x="292" y="116" text-anchor="middle" ' + font + ' font-size="9" fill="' + GOLD + '" transform="rotate(90 292 116)">KNIGHTS</text>' +
      /* flag */
      '<rect x="60" y="20" width="3" height="156" fill="#ddd"/><g class="pcl-flag"><rect x="63" y="22" width="38" height="22" fill="' + MAROON + '"/><rect x="63" y="30" width="38" height="6" fill="' + GOLD + '"/></g>' +
      /* lawn + walk */
      '<rect x="0" y="176" width="400" height="84" fill="#5c8f3e"/><path d="M168 176h64l40 84H128z" fill="#cfc6b4"/>' +
      person(120, 196, "#2a1e18", "pcl-bob") + person(300, 200, MAROON, "pcl-bob pcl-bob2") + person(320, 204, "#1f2a44", "pcl-bob") +
      '<g class="pcl-ball"><circle cx="232" cy="226" r="7" fill="#e07a2e"/><path d="M225 226h14M232 219v14" stroke="#5a2a0a" stroke-width="1"/></g>' +
      txt("WHERE PETE AND CL MET", 200, 250, 10, "#fff", 'letter-spacing="2"'),
      sky("pclkn", "#8cc2ea", "#e6eef2"));
  }

  /* 2. Rye Playland: the white Art Deco tower with teal bands, the Dragon Coaster's wooden hills and its green dragon tunnel, a car riding the hills, the lake with a swan boat */
  function pclPlayland() {
    let lattice = "";
    for (let x = 140; x <= 380; x += 16) lattice += '<path d="M' + x + ' 170V' + (120 + Math.round(30 * Math.sin((x - 140) / 40))) + '" stroke="#c9a678" stroke-width="2"/>';
    for (let x = 140; x < 380; x += 16) lattice += '<path d="M' + x + ' 170L' + (x + 16) + ' 140" stroke="#b08f62" stroke-width="1.2"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pclpl)"/>' +
      cloud(100, 30, .9, "pcl-cloud") + cloud(300, 22, .7, "pcl-cloud pcl-cloud2") +
      /* Art Deco tower */
      '<rect x="40" y="56" width="50" height="124" fill="#f4f1ea"/><rect x="50" y="36" width="30" height="22" fill="#f4f1ea"/><rect x="58" y="22" width="14" height="16" fill="#f4f1ea"/>' +
      '<rect x="40" y="80" width="50" height="5" fill="#2a9d8f"/><rect x="40" y="110" width="50" height="5" fill="#2a9d8f"/><rect x="40" y="140" width="50" height="5" fill="#2a9d8f"/>' +
      '<rect x="50" y="48" width="30" height="4" fill="#2a9d8f"/><rect x="63" y="10" width="4" height="12" fill="#2a9d8f"/>' +
      '<circle class="pcl-bl" cx="65" cy="10" r="3" fill="#ffd27a"/>' +
      /* the coaster track */
      lattice +
      '<path d="M130 170Q160 112 180 120T230 108T280 132T330 112T380 142" stroke="#8b5a2b" stroke-width="4" fill="none"/>' +
      '<g><rect x="-13" y="-14" width="26" height="10" rx="3" fill="#c0392b"/><circle cx="-7" cy="-2" r="3" fill="#2a2a2a"/><circle cx="7" cy="-2" r="3" fill="#2a2a2a"/>' +
        '<animateMotion dur="5s" repeatCount="indefinite" rotate="auto" path="M130 170Q160 112 180 120T230 108T280 132T330 112T380 142"/></g>' +
      /* the dragon tunnel */
      '<path d="M250 170q0-40 40-40q40 0 40 40z" fill="#3a8f3a" stroke="#1f5a1f" stroke-width="2"/><path d="M262 170q0-28 28-28q28 0 28 28z" fill="#1a1a1a"/>' +
      '<path d="M330 150l26-14l-4 12l14 2l-16 12z" fill="#3a8f3a" stroke="#1f5a1f" stroke-width="2"/><circle cx="346" cy="144" r="2.5" fill="#ffd27a"/>' +
      '<path d="M266 132l6-12l6 10l6-12l6 10l6-12l6 12" stroke="#ffd27a" stroke-width="2" fill="none"/>' +
      /* lake */
      '<rect x="0" y="176" width="400" height="84" fill="#3f86a8"/>' +
      '<g class="pcl-rip"><path d="M40 200h50M150 214h60M260 204h50M320 230h50" stroke="#bfe3f2" stroke-width="2"/></g>' +
      '<g class="pcl-swan"><path d="M120 230q0-14 22-14q20 0 24 14z" fill="#fff"/><path d="M140 216q-6-16 4-20q6 0 4 8" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M148 204l6 2" stroke="#e8743b" stroke-width="3"/></g>' +
      /* a tree by the lake, with a carved heart */
      '<rect x="106" y="140" width="10" height="38" fill="#6b4a2b"/><circle cx="111" cy="128" r="20" fill="#4f8f45"/><path d="M108 156a3 3 0 0 1 6 0q0 3-3 6q-3-3-3-6z" fill="#e8743b"/>' +
      txt("PLAYLAND, RYE", 200, 250, 11, "#fff", 'letter-spacing="3"'),
      sky("pclpl", "#9fd3f2", "#ffe7c2"));
  }

  /* 3. The Westchester County Center in White Plains: the Art Deco show hall, tan brick with tall limestone fins, the lettering over the doors, the chasing marquee lights, the line outside */
  function pclCenter() {
    let fins = "";
    for (let x = 70; x <= 330; x += 26) fins += '<rect x="' + (x - 5) + '" y="60" width="10" height="110" fill="#efe6d2"/>';
    let bulbs = "";
    for (let i = 0; i < 22; i++) bulbs += '<circle class="pcl-bl ' + (i % 3 === 1 ? "pcl-bl2" : i % 3 === 2 ? "pcl-bl3" : "") + '" cx="' + (96 + i * 10) + '" cy="150" r="2.6" fill="#ffd27a"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pclcc)"/>' +
      '<circle cx="340" cy="40" r="14" fill="#f4ead8" opacity=".9"/>' +
      /* the hall */
      '<rect x="40" y="56" width="320" height="120" fill="#c8a27a"/><path d="M40 56h320l-14-16H54z" fill="#b38c64"/>' + fins +
      '<rect x="130" y="40" width="140" height="22" fill="#efe6d2"/><path d="M130 40l70-18l70 18z" fill="#efe6d2"/>' +
      '<rect x="138" y="66" width="124" height="16" fill="#3a2a1e"/>' + txt("COUNTY CENTER", 200, 78, 11, "#ffd27a", 'letter-spacing="2"') +
      /* marquee */
      '<rect x="88" y="140" width="224" height="20" fill="#1a1414" stroke="#ffd27a" stroke-width="1.5"/>' + bulbs +
      '<rect x="150" y="160" width="100" height="16" fill="#2a1e18"/>' +
      '<rect x="156" y="162" width="20" height="14" fill="#f2c14e" class="pcl-glow"/><rect x="190" y="162" width="20" height="14" fill="#f2c14e" class="pcl-glow"/><rect x="224" y="162" width="20" height="14" fill="#f2c14e" class="pcl-glow"/>' +
      /* street + line */
      '<rect x="0" y="176" width="400" height="84" fill="#3d3a38"/><rect x="0" y="176" width="400" height="10" fill="#8a8580"/>' +
      person(60, 190, "#1a1a1a", "pcl-bob") + person(78, 192, "#7a1f2b", "pcl-bob pcl-bob2") + person(96, 190, "#2a3a5a", "pcl-bob") + person(114, 193, "#1a1a1a", "pcl-bob pcl-bob2") + person(132, 191, "#3a5a2a", "pcl-bob") +
      txt("WESTCHESTER COUNTY CENTER · WHITE PLAINS", 200, 246, 10, "#fff", 'letter-spacing="1.5"'),
      sky("pclcc", "#1d2147", "#d9875a"));
  }

  /* 4. California Rd & Arizona Pl: green street signs, the brick wall tagged PETE ROCK & CL SMOOTH, Mount Vernon High's maroon-and-gold front behind, a car rolling by */
  function pclCorner() {
    const blade = (x, y, w, t) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="18" rx="2" fill="#0f6e3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 13) + '" text-anchor="middle" ' + font + ' font-size="11" fill="#fff">' + t + '</text>';
    let brick = "";
    for (let y = 128; y < 214; y += 9) for (let x = (y / 9) % 2 ? 0 : 14; x < 400; x += 28) brick += '<rect x="' + x + '" y="' + y + '" width="26" height="7" fill="#8e3f2e"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#pclco)"/>' +
      cloud(90, 28, .8, "pcl-cloud") +
      /* the school behind */
      '<rect x="40" y="58" width="320" height="70" fill="#9b4a3a"/><rect x="40" y="54" width="320" height="6" fill="#e8dcc4"/>' +
      [60, 90, 120, 150, 250, 280, 310, 340].map(x => '<rect x="' + (x - 7) + '" y="70" width="14" height="14" fill="#bcd3e3"/><rect x="' + (x - 7) + '" y="94" width="14" height="14" fill="#bcd3e3"/>').join("") +
      '<rect x="170" y="62" width="60" height="44" fill="#7a1f2b"/><rect x="170" y="62" width="60" height="7" fill="#f2c14e"/>' + txt("KNIGHTS", 200, 92, 10, "#f2c14e", 'letter-spacing="1"') +
      /* wall */
      '<rect x="0" y="122" width="400" height="92" fill="#a24b37"/>' + brick +
      tag("PETE ROCK", 150, 160, 30, "#ffd27a", -5) + tag("& CL SMOOTH", 236, 196, 28, "#7fd1b9", -4) + tag("MECCA", 340, 150, 15, "#e8743b", 6) +
      /* sidewalk + street */
      '<rect x="0" y="214" width="400" height="12" fill="#b9b2a6"/><rect x="0" y="226" width="400" height="34" fill="#3d3a38"/>' +
      '<g class="pcl-drive"><rect x="0" y="230" width="60" height="18" rx="5" fill="#2f4f7a"/><rect x="10" y="224" width="36" height="10" rx="3" fill="#2f4f7a"/><circle cx="14" cy="248" r="5" fill="#111"/><circle cx="46" cy="248" r="5" fill="#111"/></g>' +
      /* sign post + blades */
      '<rect x="34" y="70" width="5" height="148" fill="#5a5f66"/>' + blade(6, 66, 104, "California Rd") + blade(14, 88, 88, "Arizona Pl") +
      /* streetlight */
      '<rect x="370" y="60" width="4" height="158" fill="#5a5f66"/><path d="M372 62q-20 0-24 8" stroke="#5a5f66" stroke-width="4" fill="none"/><ellipse class="pcl-glow" cx="348" cy="72" rx="9" ry="4" fill="#fff3b0"/>',
      sky("pclco", "#f2a65a", "#6b3a5a"));
  }

  window.SCENES = { pclWakefield, pclKnights, pclPlayland, pclCenter, pclCorner };
})();
