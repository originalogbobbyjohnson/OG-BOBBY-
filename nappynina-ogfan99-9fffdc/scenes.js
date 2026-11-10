/* nappynina scenes (Regions tab: The Bay Area; Union City, by way of East Oakland). CSS classes prefixed nn- (the page's own anim-train is kept).
   1 Union City BART: the platform under its canopy, a white-and-blue BART train sliding in, Orange + Green line badges.
   2 Oakland jazz radio: her father's world (jazz radio host); an ON AIR light, a record spinning, the upright bass she played in middle school jazz band.
   3 The youth slam poetry stage (Youth Works) where she first rapped: spotlight, mic stand, score cards going up.
   4 Brooklyn, 2012: she moved with $500 to chase the music; brownstone stoop at night, a duffel and a box, the bridge lights behind.
   5 Decoto Rd and Alvarado-Niles Rd, Union City: green signs, NAPPY NINA tagged, the golden East Bay hills behind with a BART train on the line.
   No digit 9 is drawn anywhere. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes nnflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.nn-flk{animation:nnflick 2.2s infinite}.nn-flk2{animation-delay:.7s}' +
    '@keyframes nncar{from{transform:translateX(-140px)}to{transform:translateX(520px)}}.nn-car{animation:nncar 7s linear infinite}' +
    '@keyframes nnspin{from{transform:rotate(0)}to{transform:rotate(360deg)}}.nn-spin{transform-box:fill-box;transform-origin:50% 50%;animation:nnspin 2.4s linear infinite}' +
    '@keyframes nnglow{0%,100%{opacity:.35}50%{opacity:1}}.nn-glow{animation:nnglow 1.6s ease-in-out infinite}.nn-glow2{animation-delay:-.8s}' +
    '@keyframes nnnote{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(18px,-60px);opacity:0}}.nn-note{animation:nnnote 3s ease-out infinite}.nn-note2{animation-delay:-1s}.nn-note3{animation-delay:-2s}' +
    '@keyframes nncard{0%,30%{transform:translateY(30px)}45%,85%{transform:translateY(0)}100%{transform:translateY(30px)}}.nn-card{animation:nncard 3.6s ease-in-out infinite}.nn-card2{animation-delay:-.3s}.nn-card3{animation-delay:-.6s}' +
    '@keyframes nnbeam{0%,100%{opacity:.18}50%{opacity:.32}}.nn-beam{animation:nnbeam 2.8s ease-in-out infinite}' +
    '@keyframes nnwin{0%,100%{opacity:.25}50%{opacity:.95}}.nn-win{animation:nnwin 3s ease-in-out infinite}.nn-win2{animation-delay:-1.5s}' +
    '@keyframes nntrain{from{transform:translateX(-200px)}to{transform:translateX(520px)}}.nn-train{animation:nntrain 9s linear infinite}' +
    '@keyframes nnspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.nn-sp{animation:nnspray 1.4s ease-out infinite}.nn-sp2{animation-delay:.45s}' +
    '@keyframes nnbird{0%{transform:translate(0,0)}100%{transform:translate(420px,-20px)}}.nn-bird{animation:nnbird 12s linear infinite}.nn-bird2{animation-delay:-6s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color, dark) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="3" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="' + (dark ? "#000" : "#fff") + '">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const car = (cls, x, y, c) => '<g class="' + cls + '"><rect x="' + x + '" y="' + y + '" width="58" height="14" rx="5" fill="' + c + '"/><rect x="' + (x + 12) + '" y="' + (y - 8) + '" width="32" height="10" rx="3" fill="' + c + '"/><rect x="' + (x + 15) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><rect x="' + (x + 30) + '" y="' + (y - 6) + '" width="12" height="6" fill="#bfe3ff"/><circle cx="' + (x + 13) + '" cy="' + (y + 14) + '" r="5" fill="#111"/><circle cx="' + (x + 45) + '" cy="' + (y + 14) + '" r="5" fill="#111"/></g>';
  const BART = "#0099d8", ORANGE = "#faa61a", GREEN = "#4db848", GOLD = "#ffb547", SAGE = "#7fd3a0", ROSE = "#e86a8a";

  /* 1. Union City BART: canopy platform, white-and-blue train sliding in */
  function nnstation() {
    const wins = Array.from({ length: 6 }, (_, i) => '<rect x="' + (64 + i * 44) + '" y="104" width="30" height="22" rx="3" fill="#1f2a33"/>').join("");
    const train = '<g class="anim-train"><path d="M30 98h300q30 0 34 34v20H30z" fill="#f2f4f6" stroke="#8a929a" stroke-width="2"/>' + wins +
      '<rect x="30" y="132" width="334" height="8" fill="' + BART + '"/><rect x="30" y="140" width="334" height="2" fill="#1d3f6e"/>' +
      Array.from({ length: 3 }, (_, i) => '<rect x="' + (100 + i * 88) + '" y="108" width="4" height="44" fill="#c9ced3"/>').join("") +
      '<path d="M330 102q26 2 30 28h-30z" fill="#1f2a33"/><circle cx="356" cy="146" r="3.5" fill="#fff6c2"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nns1)"/>' +
      '<path d="M0 92q60 -40 130 -24q80 -34 150 -8q60 -22 120 4v30H0z" fill="#b8915a" opacity=".75"/>' +
      '<path d="M0 64l200 -26l200 26v8H0z" fill="#d9d4c8"/><rect x="0" y="70" width="400" height="6" fill="#a9a396"/>' +
      [30, 200, 370].map(x => '<rect x="' + (x - 3) + '" y="76" width="6" height="82" fill="#bdb7aa"/>').join("") +
      '<g class="nn-flk"><rect x="100" y="76" width="40" height="4" fill="#fff3c4"/></g><g class="nn-flk nn-flk2"><rect x="260" y="76" width="40" height="4" fill="#fff3c4"/></g>' +
      train +
      '<rect x="0" y="154" width="400" height="6" fill="#f2c200"/><rect x="0" y="160" width="400" height="22" fill="#c9c3b6"/>' +
      '<rect x="0" y="182" width="400" height="78" fill="#a8a294"/>' +
      '<rect x="92" y="196" width="216" height="34" rx="3" fill="#111"/><text x="106" y="219" ' + font + ' font-size="17" fill="#fff">Union City</text>' +
      badge(214, 213, "OR", ORANGE, true) + badge(250, 213, "GN", GREEN) +
      '<rect x="0" y="240" width="400" height="20" fill="#3a3a3f" opacity=".9"/>' + car("nn-car", 0, 244, ROSE) +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#fff3e0" opacity=".9">UNION CITY BART · SOUTH OF OAKLAND</text>',
      sky("nns1", "#2c3a64", "#f2a65a"));
  }

  /* 2. Oakland jazz radio booth: ON AIR light, spinning record, upright bass */
  function nnradio() {
    const notes = [0, 1, 2].map(i => '<g class="nn-note' + (i ? " nn-note" + (i + 1) : "") + '"><text x="' + (196 + i * 14) + '" y="140" font-family="serif" font-size="20" fill="' + [GOLD, SAGE, ROSE][i] + '">&#9834;</text></g>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#nns2)"/>' +
      Array.from({ length: 8 }, (_, i) => Array.from({ length: 5 }, (_, j) => '<rect x="' + (8 + i * 50) + '" y="' + (40 + j * 22) + '" width="44" height="18" rx="2" fill="#3a2a22" opacity=".55"/>').join("")).join("") +
      '<rect x="140" y="30" width="120" height="30" rx="5" fill="#2a0a0a" stroke="#5a1a1a" stroke-width="2"/><rect class="nn-glow" x="146" y="35" width="108" height="20" rx="3" fill="#e8322e"/><text x="200" y="50" text-anchor="middle" ' + font + ' font-size="14" fill="#fff">ON AIR</text>' +
      '<rect x="0" y="176" width="400" height="84" fill="#4a3426"/><rect x="0" y="172" width="400" height="8" fill="#6b4a32"/>' +
      '<rect x="120" y="150" width="140" height="26" rx="3" fill="#2a2a2e"/><circle class="nn-spin" cx="160" cy="150" r="30" fill="#111"/>' +
      '<g class="nn-spin"><circle cx="160" cy="150" r="30" fill="#141414"/><circle cx="160" cy="150" r="22" fill="none" stroke="#2a2a2a" stroke-width="1"/><circle cx="160" cy="150" r="16" fill="none" stroke="#2a2a2a" stroke-width="1"/><circle cx="160" cy="150" r="9" fill="' + GOLD + '"/><rect x="157" y="142" width="6" height="3" fill="#7a4a10"/></g>' +
      '<path d="M230 130l-34 18" stroke="#c9ced3" stroke-width="3"/><circle cx="230" cy="130" r="4" fill="#c9ced3"/>' +
      '<rect x="270" y="120" width="10" height="56" fill="#333"/><rect x="262" y="100" width="26" height="26" rx="12" fill="#2a2a2e" stroke="#555" stroke-width="2"/>' +
      Array.from({ length: 5 }, (_, i) => '<path d="M265 ' + (106 + i * 4) + 'h20" stroke="#555" stroke-width="1"/>').join("") +
      '<g><path d="M60 236q-26 -6 -22 -40q4 -20 18 -26q-10 -18 2 -34q10 -10 22 0q12 16 2 34q14 6 18 26q4 34 -22 40z" fill="#8a4a1e" stroke="#4a2408" stroke-width="2"/>' +
      '<path d="M72 136v-70" stroke="#2a1a0a" stroke-width="5"/><path d="M68 62h8v10h-8z" fill="#2a1a0a"/>' +
      '<path d="M66 178q-4 6 0 12M78 178q4 6 0 12" stroke="#2a1208" stroke-width="2" fill="none"/>' +
      [68, 71, 74, 77].map(x => '<path d="M' + x + ' 72v130" stroke="#e8dcc0" stroke-width=".8"/>').join("") +
      '<rect x="64" y="200" width="16" height="6" fill="#2a1a0a"/><path d="M72 236v14" stroke="#555" stroke-width="2"/></g>' +
      notes +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">JAZZ RADIO · OAKLAND · THE UPRIGHT BASS</text>',
      sky("nns2", "#1c1410", "#3a261c"));
  }

  /* 3. Youth slam poetry stage: spotlight, mic stand, score cards */
  function nnslam() {
    const card = (x, n, cls) => '<g class="nn-card ' + cls + '"><rect x="' + x + '" y="196" width="34" height="26" rx="2" fill="#f6f4ee" stroke="#333" stroke-width="1.5"/><text x="' + (x + 17) + '" y="216" text-anchor="middle" ' + font + ' font-size="16" fill="#1a1a1a">' + n + '</text><rect x="' + (x + 15) + '" y="222" width="4" height="22" fill="#6b4a2a"/></g>';
    const heads = Array.from({ length: 10 }, (_, i) => '<circle cx="' + (20 + i * 40) + '" cy="250" r="14" fill="#151018"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#nns3)"/>' +
      '<path class="nn-beam" d="M170 0h60l70 180H100z" fill="#fff6d0"/>' +
      '<rect x="0" y="22" width="400" height="16" fill="#5a1a2a"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M' + (i * 40) + ' 38q20 22 40 0" fill="#7a2236"/>').join("") +
      '<rect x="0" y="180" width="400" height="20" fill="#3a2418"/><rect x="0" y="178" width="400" height="4" fill="#6b4630"/>' +
      '<ellipse cx="200" cy="180" rx="80" ry="8" fill="#fff6d0" opacity=".3"/>' +
      '<path d="M200 178v-86" stroke="#2a2a2e" stroke-width="4"/><path d="M186 178h28" stroke="#2a2a2e" stroke-width="4"/>' +
      '<path d="M200 96l14 -12" stroke="#2a2a2e" stroke-width="3"/><rect x="210" y="76" width="10" height="16" rx="5" transform="rotate(50 215 84)" fill="#3a3a3e" stroke="#777" stroke-width="1"/>' +
      '<rect x="150" y="56" width="100" height="18" rx="3" fill="#1b1220" opacity=".85"/><text x="200" y="69" text-anchor="middle" ' + font + ' font-size="11" fill="' + GOLD + '">YOUTH SLAM</text>' +
      heads + card(40, "10", "") + card(110, "8", "nn-card2") + card(256, "10", "nn-card3") + card(326, "8", "") +
      '<text x="200" y="14" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">SLAM POETRY · WHERE THE RHYMES STARTED</text>',
      sky("nns3", "#1a0f22", "#3a1a30"));
  }

  /* 4. Brooklyn, 2012: brownstone stoop at night, duffel + box, bridge lights behind */
  function nnbrooklyn() {
    const bs = (x, c) => '<g><rect x="' + x + '" y="70" width="96" height="140" fill="' + c + '"/><rect x="' + (x - 2) + '" y="66" width="100" height="8" fill="#3a2418"/>' +
      [0, 1, 2].map(r => [0, 1].map(k => '<rect class="nn-win' + ((r + k) % 2 ? " nn-win2" : "") + '" x="' + (x + 14 + k * 44) + '" y="' + (84 + r * 34) + '" width="24" height="24" fill="#ffd98a"/>').join("")).join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nns4)"/>' +
      Array.from({ length: 18 }, (_, i) => '<circle cx="' + ((i * 61) % 400) + '" cy="' + ((i * 17) % 40 + 6) + '" r="1" fill="#fff" opacity=".7"/>').join("") +
      '<path d="M0 74h400" stroke="#4a5a7a" stroke-width="2"/><path d="M60 74q70 -40 140 0q70 -40 140 0" stroke="#7a8aa8" stroke-width="2" fill="none"/>' +
      [60, 200, 340].map(x => '<rect x="' + (x - 4) + '" y="40" width="8" height="34" fill="#5a6a88"/>').join("") +
      Array.from({ length: 14 }, (_, i) => '<circle class="nn-glow' + (i % 2 ? " nn-glow2" : "") + '" cx="' + (60 + i * 21.5) + '" cy="' + (74 - Math.abs(Math.sin((i % 7) / 6.5 * Math.PI)) * 0) + '" r="2" fill="#fff3c4"/>').join("") +
      bs(0, "#7a4a32") + bs(100, "#8a5636") + bs(200, "#6e4230") + bs(300, "#80503a") +
      '<path d="M130 210l-30 -40h-16v10h10l26 30z" fill="#9a8a78"/>' + Array.from({ length: 5 }, (_, i) => '<rect x="' + (96 + i * 7) + '" y="' + (176 + i * 7) + '" width="44" height="7" fill="#b0a08c"/>').join("") +
      '<rect x="0" y="210" width="400" height="50" fill="#3a3a40"/><rect x="0" y="208" width="400" height="4" fill="#8a8a90"/>' +
      '<rect x="210" y="190" width="56" height="22" rx="10" fill="' + SAGE + '" stroke="#2a4a3a" stroke-width="2"/><path d="M226 190q12 -12 24 0" stroke="#2a4a3a" stroke-width="3" fill="none"/>' +
      '<rect x="272" y="182" width="40" height="30" fill="#c9a26a" stroke="#6b4a1a" stroke-width="2"/><path d="M272 192h40" stroke="#6b4a1a" stroke-width="1.5"/><text x="292" y="206" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2410">$500</text>' +
      '<rect x="356" y="150" width="4" height="60" fill="#2a2a2a"/><circle class="nn-flk" cx="358" cy="148" r="7" fill="#ffe9a8"/>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#f3e6d0" opacity=".9">BROOKLYN, 2012 · OAKLAND TO NEW YORK WITH $500</text>',
      sky("nns4", "#0e1430", "#2a2a50"));
  }

  /* 5. Decoto Rd and Alvarado-Niles Rd, Union City; golden East Bay hills, BART train on the line */
  function nncorner() {
    const train = '<g class="nn-train"><rect x="0" y="104" width="150" height="16" rx="6" fill="#f2f4f6"/><rect x="0" y="114" width="150" height="3" fill="' + BART + '"/>' + Array.from({ length: 6 }, (_, i) => '<rect x="' + (8 + i * 24) + '" y="107" width="14" height="5" fill="#1f2a33"/>').join("") + '</g>';
    return svg(
      '<rect width="400" height="260" fill="url(#nns5)"/>' +
      '<circle cx="320" cy="48" r="20" fill="#ffe7a0" opacity=".9"/>' +
      '<path d="M0 100q60 -50 140 -36q70 -40 150 -10q60 -20 110 6v40H0z" fill="#c9a24a"/>' +
      '<g fill="#5a6e3a"><circle cx="70" cy="84" r="8"/><circle cx="210" cy="72" r="7"/><circle cx="300" cy="86" r="9"/></g>' +
      '<rect x="0" y="120" width="400" height="6" fill="#b5b0a6"/>' + [40, 160, 280, 380].map(x => '<rect x="' + (x - 3) + '" y="126" width="6" height="10" fill="#b5b0a6"/>').join("") + train +
      '<rect x="0" y="134" width="400" height="90" fill="#e8dcc4"/>' + Array.from({ length: 11 }, (_, i) => '<path d="M0 ' + (142 + i * 8) + 'h400" stroke="#d2c4a6" stroke-width="1"/>').join("") +
      tag("NAPPY NINA", 16, 196, 40, GOLD, -6) + tag("WELL VERSED", 26, 150, 14, SAGE, -4) + tag("OAKTOWN", 40, 216, 14, ROSE, -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="342" y="98" width="6" height="126" fill="#2f2f2f"/>' + sign(286, 100, 114, "Decoto Rd") + sign(236, 126, 164, "Alvarado-Niles Rd") +
      car("nn-car", 0, 240, SAGE) +
      '<g class="nn-sp"><circle cx="228" cy="166" r="3" fill="' + GOLD + '" opacity=".7"/></g><g class="nn-sp nn-sp2"><circle cx="234" cy="160" r="2" fill="' + GOLD + '" opacity=".6"/></g>' +
      '<g class="nn-bird"><path d="M0 40q5 -5 10 0q5 -5 10 0" stroke="#3a3a3a" stroke-width="2" fill="none"/></g>' +
      '<text x="200" y="22" text-anchor="middle" ' + font + ' font-size="10" fill="#3a2a1a">DECOTO RD · ALVARADO-NILES RD · UNION CITY</text>',
      sky("nns5", "#8ec8ec", "#fbe2b0"));
  }

  window.SCENES = { nnstation: nnstation, nnradio: nnradio, nnslam: nnslam, nnbrooklyn: nnbrooklyn, nncorner: nncorner };
})();
