/* TiaCorine scenes (Regions tab: THE CAROLINAS; born and raised in Winston-Salem, NC - "the Twin City" / "Camel City").
   Her world: "anime trap", 34Corine / The Saga of 34Corine, Scorpio, iced-out pinky ring, different colored stones, her daughter.
   1 Clark Campbell Transportation Center (WSTA bus hub, downtown Winston-Salem): city bus pulling into the covered bays.
   2 The Old Salem Coffee Pot (giant tin coffee pot on a post, 1858) with the Salem brick and clapboard houses, steam rising.
   3 Anime-trap room: pink neon 34, mic, laptop, a TV with a sparkle wand and stars (no characters), floating hearts.
   4 Bowman Gray Stadium ("the Madhouse"): quarter-mile asphalt track with stock cars circling, lights on.
   5 4th St and Liberty St, downtown: green signs, TIACORINE tagged, the art-deco Reynolds Building behind.
   CSS classes prefixed "tia" (the page's own anim-train is kept). No logos, no faces, no digit 9 drawn. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes tiaBlink{0%,100%{opacity:1}50%{opacity:.2}}.tiaBl{animation:tiaBlink 1.1s steps(1) infinite}.tiaBl2{animation-delay:.55s}' +
    '@keyframes tiaGlow{0%,100%{opacity:1}50%{opacity:.6}}.tiaGlow{animation:tiaGlow 1.6s ease-in-out infinite}' +
    '@keyframes tiaSteam{0%{transform:translate(0,0);opacity:0}25%{opacity:.8}100%{transform:translate(8px,-40px);opacity:0}}.tiaSteam{animation:tiaSteam 2.6s ease-out infinite}.tiaS2{animation-delay:-.9s}.tiaS3{animation-delay:-1.7s}' +
    '@keyframes tiaFloat{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(-10px,-70px);opacity:0}}.tiaFloat{animation:tiaFloat 3s ease-out infinite}.tiaF2{animation-delay:-1s}.tiaF3{animation-delay:-2s}' +
    '@keyframes tiaTwk{0%,100%{transform:scale(.6);opacity:.3}50%{transform:scale(1.15);opacity:1}}.tiaTwk{transform-box:fill-box;transform-origin:50% 50%;animation:tiaTwk 1.4s ease-in-out infinite}.tiaT2{animation-delay:-.5s}.tiaT3{animation-delay:-1s}' +
    '@keyframes tiaLap{to{transform:rotate(360deg)}}.tiaLap{transform-origin:200px 178px;animation:tiaLap 5s linear infinite}.tiaLap2{animation-duration:6.2s;animation-delay:-2s}.tiaLap3{animation-duration:5.6s;animation-delay:-4s}' +
    '@keyframes tiaCloud{0%{transform:translateX(-120px)}100%{transform:translateX(480px)}}.tiaCloud{animation:tiaCloud 22s linear infinite}.tiaC2{animation-delay:-11s}' +
    '@keyframes tiaBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.tiaBob{animation:tiaBob .8s ease-in-out infinite}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const F = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const PINK = "#ff5fa2", AQUA = "#7ee8fa", GOLD = "#ffd23f", BUS = "#1f5fa8", LAV = "#b28dff";
  const cloud = (x, y, cls) => '<g class="tiaCloud ' + cls + '" fill="#fff" opacity=".85"><ellipse cx="' + x + '" cy="' + y + '" rx="26" ry="9"/><ellipse cx="' + (x + 14) + '" cy="' + (y - 6) + '" rx="16" ry="9"/></g>';
  const star = (x, y, r, fill, cls) => '<path class="tiaTwk ' + (cls || "") + '" d="M' + x + ' ' + (y - r) + 'L' + (x + r * .3) + ' ' + (y - r * .3) + 'L' + (x + r) + ' ' + y + 'L' + (x + r * .3) + ' ' + (y + r * .3) + 'L' + x + ' ' + (y + r) + 'L' + (x - r * .3) + ' ' + (y + r * .3) + 'L' + (x - r) + ' ' + y + 'L' + (x - r * .3) + ' ' + (y - r * .3) + 'z" fill="' + fill + '"/>';
  const heart = (x, y, s, fill, cls) => '<path class="' + cls + '" d="M' + x + ' ' + y + 'c' + (-s) + ' ' + (-s) + ' ' + (-s * 2) + ' ' + (s * .4) + ' 0 ' + (s * 1.6) + 'c' + (s * 2) + ' ' + (-s * 1.2) + ' ' + s + ' ' + (-s * 2.6) + ' 0 ' + (-s * 1.6) + 'z" fill="' + fill + '"/>';

  /* 1. Clark Campbell Transportation Center (WSTA) */
  function tiastation() {
    let wins = "", cols = "";
    for (let x = 60; x < 280; x += 34) wins += '<rect x="' + x + '" y="128" width="28" height="24" rx="2" fill="#23313d"/>';
    for (let x = 18; x < 400; x += 76) cols += '<rect x="' + x + '" y="70" width="8" height="114" fill="#9aa3ab"/>';
    const bus = '<g class="anim-train">' +
      '<rect x="40" y="118" width="270" height="64" rx="8" fill="#f2f4f5" stroke="#2a2a2a" stroke-width="2"/>' + wins +
      '<rect x="40" y="158" width="270" height="9" fill="' + BUS + '"/><rect x="40" y="167" width="270" height="4" fill="#3aa55c"/>' +
      '<path d="M286 124h20q4 0 4 6v34h-24z" fill="#23313d"/><rect x="288" y="120" width="20" height="7" rx="1" fill="#111"/>' +
      '<text x="298" y="126" text-anchor="middle" ' + F + ' font-size="5.5" fill="#ffb627">DOWNTOWN</text>' +
      '<rect x="300" y="170" width="8" height="5" fill="#fff3b0"/>' +
      '<g fill="#1a1a1a"><circle cx="86" cy="184" r="10"/><circle cx="264" cy="184" r="10"/></g><g fill="#888"><circle cx="86" cy="184" r="4"/><circle cx="264" cy="184" r="4"/></g></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#tias1)"/>' + cloud(60, 20, "") + cloud(250, 14, "tiaC2") +
      /* downtown behind: the Reynolds Building and the domed tower */
      '<rect x="292" y="10" width="34" height="60" fill="#b7aa93"/><rect x="298" y="2" width="22" height="10" fill="#b7aa93"/><rect x="304" y="-4" width="10" height="8" fill="#b7aa93"/>' +
      '<rect x="340" y="18" width="40" height="52" fill="#c9b79a"/><path d="M344 18q16 -22 32 0z" fill="#8a9a6a"/>' +
      /* canopy */
      '<path d="M0 60h400v12H0z" fill="#2f5c8a"/><path d="M0 72h400v4H0z" fill="#1d3d5f"/>' + cols +
      '<rect x="0" y="184" width="400" height="10" fill="#c8c8c2"/><rect x="0" y="184" width="400" height="3" fill="' + GOLD + '"/>' +
      bus +
      '<path d="M0 194h400v66H0z" fill="#5a5e63"/><path d="M0 226h400" stroke="#e8e8e8" stroke-width="2" stroke-dasharray="18 14"/>' +
      /* sign */
      '<rect x="18" y="84" width="150" height="30" rx="3" fill="#14243a" stroke="#fff" stroke-width="2"/>' +
      '<text x="93" y="97" text-anchor="middle" ' + F + ' font-size="8.5" fill="#fff" letter-spacing=".5">CLARK CAMPBELL</text>' +
      '<text x="93" y="108" text-anchor="middle" ' + F + ' font-size="7" fill="' + AQUA + '" letter-spacing=".5">TRANSPORTATION CENTER</text>' +
      '<rect x="326" y="84" width="58" height="20" rx="3" fill="' + BUS + '" stroke="#fff" stroke-width="1.5"/><text x="355" y="98" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">WSTA</text>' +
      '<rect x="182" y="84" width="40" height="20" rx="3" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="202" y="98" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">BAY 4</text>',
      sky("tias1", "#8cc4ec", "#f4e6ef"));
  }

  /* 2. The Old Salem Coffee Pot */
  function tiapot() {
    return svg(
      '<rect width="400" height="260" fill="url(#tias2)"/>' + cloud(80, 26, "") + cloud(300, 18, "tiaC2") +
      /* Salem houses: brick with white trim, clapboard */
      '<path d="M10 120l50 -34l50 34z" fill="#4a3b33"/><rect x="18" y="120" width="84" height="80" fill="#a8452f"/>' +
      '<g fill="#f3efe4" stroke="#6b5a4d"><rect x="30" y="134" width="16" height="22"/><rect x="74" y="134" width="16" height="22"/><rect x="52" y="168" width="18" height="32"/></g>' +
      '<path d="M268 122l60 -38l60 38z" fill="#3e4a52"/><rect x="276" y="122" width="106" height="78" fill="#efe6cf"/>' +
      '<g fill="#2d4a3e"><rect x="290" y="136" width="18" height="24"/><rect x="350" y="136" width="18" height="24"/></g><rect x="318" y="164" width="20" height="36" fill="#6b2e22"/>' +
      '<path d="M268 122h120" stroke="#fff" stroke-width="3"/>' +
      /* the pot on its post */
      '<rect x="194" y="150" width="12" height="54" fill="#6f6f6f"/><rect x="186" y="198" width="28" height="6" fill="#555"/>' +
      '<path d="M168 150h64l-6 -70q-26 -8 -52 0z" fill="#b9bec4" stroke="#6c7278" stroke-width="2"/>' +
      '<path d="M174 80q26 -12 52 0" fill="#c9ced3" stroke="#6c7278" stroke-width="2"/><rect x="194" y="62" width="12" height="12" rx="3" fill="#9aa0a6" stroke="#6c7278"/>' +
      '<path d="M174 104q-28 -6 -34 -30l8 -2q6 18 26 22" fill="#b9bec4" stroke="#6c7278" stroke-width="2"/>' +
      '<path d="M226 96q22 4 20 30q-2 12 -20 14" fill="none" stroke="#6c7278" stroke-width="5"/>' +
      '<path d="M172 118h56" stroke="#8d939a" stroke-width="2"/><path d="M174 136h52" stroke="#8d939a" stroke-width="2"/>' +
      '<g fill="#fff" opacity=".85"><circle class="tiaSteam" cx="142" cy="70" r="6"/><circle class="tiaSteam tiaS2" cx="144" cy="66" r="5"/><circle class="tiaSteam tiaS3" cx="140" cy="68" r="7"/></g>' +
      /* brick walk */
      '<path d="M0 200h400v60H0z" fill="#9b5a44"/><g stroke="#7a4434" stroke-width="1">' + [210, 222, 234, 246].map(y => '<path d="M0 ' + y + 'h400"/>').join("") + '</g>' +
      '<rect x="128" y="214" width="144" height="22" rx="3" fill="#2d4a3e" stroke="#e8dcc2" stroke-width="1.5"/>' +
      '<text x="200" y="229" text-anchor="middle" ' + F + ' font-size="10" fill="#e8dcc2" letter-spacing="1">OLD SALEM</text>',
      sky("tias2", "#9fd0f0", "#fbe9d3"));
  }

  /* 3. Anime-trap room */
  function tiaroom() {
    return svg(
      '<rect width="400" height="260" fill="url(#tias3)"/>' +
      /* window with night sky */
      '<rect x="270" y="24" width="104" height="80" rx="4" fill="#1b1440" stroke="#d9c8ff" stroke-width="4"/>' +
      star(296, 48, 5, "#fff", "") + star(338, 40, 4, GOLD, "tiaT2") + star(352, 78, 5, AQUA, "tiaT3") + '<circle cx="318" cy="70" r="11" fill="#fff6c9"/><circle cx="323" cy="66" r="10" fill="#1b1440"/>' +
      /* neon 34 */
      '<g class="tiaGlow"><text x="70" y="96" text-anchor="middle" ' + F + ' font-size="64" fill="none" stroke="' + PINK + '" stroke-width="4">34</text>' +
      '<text x="70" y="96" text-anchor="middle" ' + F + ' font-size="64" fill="none" stroke="#ffd1e6" stroke-width="1.2">34</text></g>' +
      /* TV with a sparkle wand */
      '<rect x="138" y="30" width="116" height="80" rx="6" fill="#222" stroke="#444" stroke-width="3"/><rect x="146" y="38" width="100" height="64" fill="#ffd6ec"/>' +
      '<path d="M170 92l40 -36" stroke="' + LAV + '" stroke-width="5" stroke-linecap="round"/>' + star(214, 52, 12, GOLD, "") + heart(214, 47, 3, PINK, "") +
      star(166, 50, 4, AQUA, "tiaT2") + star(236, 88, 4, "#fff", "tiaT3") +
      '<rect x="186" y="110" width="20" height="10" fill="#333"/>' +
      /* desk */
      '<rect x="0" y="176" width="400" height="84" fill="#3a2440"/><rect x="40" y="150" width="320" height="12" rx="3" fill="#f2c6dd"/><rect x="56" y="162" width="10" height="60" fill="#d79bbb"/><rect x="334" y="162" width="10" height="60" fill="#d79bbb"/>' +
      /* laptop */
      '<path d="M100 150l8 -34h70l-6 34z" fill="#c9cdd2" stroke="#666" stroke-width="1.5"/><path d="M110 120h62l-5 26h-63z" fill="#2b1d3f"/>' +
      '<g class="tiaBl"><rect x="118" y="128" width="30" height="3" fill="' + AQUA + '"/><rect x="118" y="134" width="40" height="3" fill="' + PINK + '"/></g>' +
      /* mic on a stand */
      '<rect x="262" y="96" width="4" height="54" fill="#555"/><rect x="254" y="74" width="20" height="30" rx="10" fill="#bfc4ca" stroke="#555" stroke-width="2"/><path d="M256 84h16M256 90h16M256 96h16" stroke="#777"/>' +
      '<rect x="250" y="146" width="28" height="5" rx="2" fill="#555"/>' +
      /* plushie-style star cushion and hearts drifting */
      star(320, 136, 14, GOLD, "") +
      heart(220, 150, 5, PINK, "tiaFloat") + heart(240, 156, 4, LAV, "tiaFloat tiaF2") + heart(200, 156, 4, AQUA, "tiaFloat tiaF3") +
      tag("ANIME TRAP", 110, 222, 26, PINK, -4),
      sky("tias3", "#5b3a7a", "#2a1736"));
  }

  /* 4. Bowman Gray Stadium */
  function tiatrack() {
    const car = (fill, num, cls) => '<g class="tiaLap ' + cls + '"><g transform="translate(200 16)"><rect x="-14" y="-6" width="28" height="12" rx="4" fill="' + fill + '" stroke="#111"/><rect x="-4" y="-5" width="10" height="10" rx="2" fill="#23313d"/>' +
      '<text x="-9" y="3" ' + F + ' font-size="7" fill="#fff">' + num + '</text></g></g>';
    let seats = "";
    for (let x = 0; x < 400; x += 10) seats += '<rect x="' + x + '" y="' + (58 + (x % 20 ? 0 : 2)) + '" width="6" height="4" fill="' + ['#ff5fa2', '#7ee8fa', '#ffd23f', '#fff'][(x / 10) % 4] + '" opacity=".75"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tias4)"/>' +
      /* light towers */
      [30, 130, 270, 370].map(x => '<rect x="' + (x - 2) + '" y="10" width="4" height="56" fill="#555"/><rect x="' + (x - 12) + '" y="6" width="24" height="10" fill="#333"/><g class="tiaGlow"><circle cx="' + (x - 6) + '" cy="11" r="3" fill="#fff8c4"/><circle cx="' + x + '" cy="11" r="3" fill="#fff8c4"/><circle cx="' + (x + 6) + '" cy="11" r="3" fill="#fff8c4"/></g>').join("") +
      /* stands */
      '<path d="M0 50h400v34H0z" fill="#6b6f75"/>' + seats + '<path d="M0 66h400v4H0zM0 74h400v4H0z" fill="#585c61"/>' +
      '<rect x="0" y="84" width="400" height="6" fill="#d8d8d8"/>' +
      /* the quarter-mile, flat oval */
      '<ellipse cx="200" cy="178" rx="196" ry="80" fill="#3a3c40"/><ellipse cx="200" cy="178" rx="150" ry="44" fill="#4f8a3e"/>' +
      '<ellipse cx="200" cy="178" rx="174" ry="62" fill="none" stroke="#f2f2f2" stroke-width="1.2" stroke-dasharray="10 8"/>' +
      '<ellipse cx="200" cy="178" rx="150" ry="44" fill="none" stroke="#f2f2f2" stroke-width="3"/>' +
      '<path d="M196 222v36" stroke="#fff" stroke-width="6" stroke-dasharray="3 3"/>' +
      /* cars circling (the oval is squashed by a scale) */
      '<g transform="translate(200 178) scale(1 .36) translate(-200 -178)">' + car(PINK, "34", "") + car(BUS, "7", "tiaLap2") + car(GOLD, "12", "tiaLap3") + '</g>' +
      '<rect x="128" y="160" width="144" height="26" rx="3" fill="#14243a" stroke="#fff" stroke-width="1.5"/>' +
      '<text x="200" y="171" text-anchor="middle" ' + F + ' font-size="8.5" fill="#fff" letter-spacing="1">BOWMAN GRAY</text><text x="200" y="181" text-anchor="middle" ' + F + ' font-size="7" fill="' + GOLD + '">THE MADHOUSE</text>',
      sky("tias4", "#1b2350", "#5a3a74"));
  }

  /* 5. 4th St and Liberty St, downtown Winston-Salem */
  function tiacorner() {
    let bricks = "";
    for (let y = 106; y < 204; y += 12) for (let x = (y / 12) % 2 ? 0 : 14; x < 400; x += 28) bricks += '<rect x="' + x + '" y="' + y + '" width="26" height="10" fill="#8c3d4f"/>';
    return svg(
      '<rect width="400" height="260" fill="url(#tias5)"/>' + cloud(70, 22, "") +
      /* the Reynolds Building: art-deco limestone setbacks */
      '<rect x="230" y="40" width="100" height="70" fill="#d8ccb2"/><rect x="246" y="22" width="68" height="20" fill="#d8ccb2"/><rect x="260" y="8" width="40" height="16" fill="#d8ccb2"/><rect x="272" y="0" width="16" height="10" fill="#c9bb9c"/>' +
      '<g fill="#8f846d">' + [252, 266, 280, 294, 308].map(x => '<rect x="' + x + '" y="26" width="5" height="80"/>').join("") + [236, 320].map(x => '<rect x="' + x + '" y="44" width="5" height="62"/>').join("") + '</g>' +
      '<rect x="230" y="38" width="100" height="3" fill="' + GOLD + '"/><rect x="246" y="20" width="68" height="3" fill="' + GOLD + '"/>' +
      '<rect x="0" y="102" width="400" height="102" fill="#6b2a3a"/>' + bricks +
      '<rect x="0" y="98" width="400" height="6" fill="#4a1c28"/>' +
      tag("TIACORINE", 30, 170, 46, PINK, -5) +
      tag("34", 30, 124, 22, GOLD, -4) + tag("ANIME TRAP", 40, 196, 17, AQUA, 2) + tag("TWIN CITY", 200, 196, 16, "#fff", -3) +
      star(370, 186, 9, GOLD, "") + star(214, 124, 7, AQUA, "tiaT2") +
      '<path d="M0 204h400v56H0z" fill="#5c6066"/><rect x="0" y="202" width="400" height="6" fill="#a9a59c"/>' +
      /* sign pole */
      '<rect x="354" y="120" width="5" height="84" fill="#3a5a40"/>' +
      '<rect x="306" y="122" width="94" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="353" y="135" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">W 4TH ST</text>' +
      '<rect x="318" y="142" width="80" height="18" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="358" y="155" text-anchor="middle" ' + F + ' font-size="10" fill="#fff">LIBERTY ST</text>' +
      '<g class="tiaBob">' + heart(80, 226, 6, PINK, "") + '</g>',
      sky("tias5", "#f7a8c8", "#ffe7c2"));
  }

  window.SCENES = { tiastation, tiapot, tiaroom, tiatrack, tiacorner };
})();
