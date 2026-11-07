/* saweetie scenes (Regions tab: The Bay Area; Hayward, then Sacramento / Elk Grove). CSS classes prefixed sw- (the page's own anim-train is kept).
   1 Hayward BART: the elevated station over downtown Hayward (Orange and Green lines), a silver BART train gliding in, the East Bay hills behind.
   2 The Hayward Japanese Gardens: arched wooden bridge over the koi pond, pines, stone lantern, koi swimming.
   3 Monterey Trail High in Elk Grove (where she graduated): the stadium under the lights, the track, runners going around.
   4 USC (where she earned her communication degree): the red-brick Bovard tower, palms, cardinal and gold, confetti.
   5 B St and Foothill Blvd in Downtown Hayward: green signs, SAWEETIE tagged on the wall, the San Mateo-Hayward Bridge across the bay behind. */
(function () {
  const W = 400, H = 260;
  const css = '<style>' +
    '@keyframes swflick{0%,100%{opacity:1}45%{opacity:.75}50%{opacity:.3}55%{opacity:.9}}.sw-flk{animation:swflick 2.2s infinite}.sw-flk2{animation-delay:.7s}' +
    '@keyframes swblink{0%,100%{opacity:.3}50%{opacity:1}}.sw-bl{animation:swblink 1.6s ease-in-out infinite}.sw-bl2{animation-delay:-.8s}' +
    '@keyframes swkoi{from{transform:translateX(-60px)}to{transform:translateX(460px)}}.sw-koi{animation:swkoi 9s linear infinite}.sw-k2{animation-delay:-4.5s}' +
    '@keyframes swrip{0%{transform:scale(.4);opacity:.8}100%{transform:scale(1.6);opacity:0}}.sw-rip{animation:swrip 2.4s ease-out infinite;transform-box:fill-box;transform-origin:center}.sw-r2{animation-delay:-1.2s}' +
    '@keyframes swrun{from{transform:translateX(-80px)}to{transform:translateX(480px)}}.sw-run{animation:swrun 5s linear infinite}.sw-run2{animation-delay:-2.5s}' +
    '@keyframes swstep{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.sw-step{animation:swstep .4s ease-in-out infinite}' +
    '@keyframes swconf{0%{transform:translateY(-20px) rotate(0);opacity:0}10%{opacity:1}100%{transform:translateY(200px) rotate(260deg);opacity:0}}.sw-cf{animation:swconf 3.4s linear infinite;transform-box:fill-box;transform-origin:center}.sw-cf2{animation-delay:-1.1s}.sw-cf3{animation-delay:-2.2s}' +
    '@keyframes swsway{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}.sw-palm{animation:swsway 3s ease-in-out infinite;transform-box:fill-box;transform-origin:50% 100%}' +
    '@keyframes swcar{from{transform:translateX(-40px)}to{transform:translateX(440px)}}.sw-car{animation:swcar 12s linear infinite}.sw-car2{animation-delay:-6s}' +
    '@keyframes swspray{0%{transform:translateY(0);opacity:.9}100%{transform:translateY(-26px);opacity:0}}.sw-sp{animation:swspray 1.4s ease-out infinite}.sw-sp2{animation-delay:.45s}' +
    '</style>';
  const svg = (inner, defs) => '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img">' + css + '<defs>' + (defs || "") + '</defs>' + inner + '</svg>';
  const sky = (id, top, bottom) => '<linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bottom + '"/></linearGradient>';
  const tag = (txt, x, y, size, fill, rot) => '<text x="' + x + '" y="' + y + '" transform="rotate(' + (rot || -6) + ' ' + x + ' ' + y + ')" font-family="Sedgwick Ave Display, Permanent Marker, cursive" font-size="' + size +
    '" fill="' + fill + '" stroke="#000" stroke-width="' + Math.max(2, size / 9) + '" paint-order="stroke" stroke-linejoin="round">' + txt + '</text>';
  const font = 'font-family="Helvetica, Arial, sans-serif" font-weight="700"';
  const badge = (x, y, txt, color) => '<rect x="' + x + '" y="' + (y - 9) + '" width="' + (txt.length * 8 + 14) + '" height="18" rx="9" fill="' + color + '"/><text x="' + (x + (txt.length * 8 + 14) / 2) + '" y="' + (y + 4.5) + '" text-anchor="middle" ' + font + ' font-size="12" fill="#fff">' + txt + '</text>';
  const sign = (x, y, w, txt) => '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="22" rx="2" fill="#0f6b3a" stroke="#fff" stroke-width="1.5"/><text x="' + (x + w / 2) + '" y="' + (y + 16) + '" text-anchor="middle" ' + font + ' font-size="13" fill="#fff">' + txt + '</text>';
  const pine = (x, base, s) => '<g><rect x="' + (x - 2 * s) + '" y="' + (base - 20 * s) + '" width="' + (4 * s) + '" height="' + (20 * s) + '" fill="#5b4330"/>' +
    [0, 1, 2].map(i => '<path d="M' + (x - (18 - i * 4) * s) + ' ' + (base - (14 + i * 18) * s) + 'L' + x + ' ' + (base - (40 + i * 18) * s) + 'L' + (x + (18 - i * 4) * s) + ' ' + (base - (14 + i * 18) * s) + 'z" fill="#2f5a3a"/>').join("") + '</g>';
  const stars = n => { let s = ""; for (let i = 0; i < n; i++) s += '<circle class="' + (i % 3 ? "" : "sw-bl" + (i % 2 ? " sw-bl2" : "")) + '" cx="' + ((i * 83) % 400) + '" cy="' + (6 + (i * 41) % 70) + '" r="' + (i % 4 ? 0.9 : 1.4) + '" fill="#fff" opacity=".75"/>'; return s; };
  const palm = (x, base, s) => '<g class="sw-palm"><path d="M' + x + ' ' + base + 'q' + (4 * s) + ' ' + (-40 * s) + ' ' + (2 * s) + ' ' + (-80 * s) + '" stroke="#6b4a2e" stroke-width="' + (5 * s) + '" fill="none"/>' +
    [-60, -25, 10, 40, 75].map((a, i) => '<path d="M' + (x + 2 * s) + ' ' + (base - 80 * s) + 'q' + (Math.cos(a * Math.PI / 180) * 18 * s) + ' ' + (-14 * s) + ' ' + (Math.cos(a * Math.PI / 180) * 34 * s) + ' ' + ((i % 2 ? 6 : 12) * s) + '" stroke="#2f6b3a" stroke-width="' + (4 * s) + '" fill="none" stroke-linecap="round"/>').join("") + '</g>';
  const ICE = "#7fe3ff", PINK = "#ff8fc7", SILV = "#e8eef5", BART = "#0099d8", CARD = "#990000", GOLD = "#ffcc00";

  /* 1. Hayward BART: elevated station, silver train */
  function swstation() {
    const win = Array.from({ length: 6 }, (_, i) => '<rect x="' + (52 + i * 46) + '" y="104" width="34" height="20" rx="4" fill="#1c2630"/>').join("");
    const train = '<g class="anim-train"><path d="M24 160V100q0 -10 12 -10h306q26 4 32 34v36z" fill="#eef1f4" stroke="#8a939b" stroke-width="2"/>' + win +
      '<rect x="24" y="132" width="350" height="5" fill="' + BART + '"/><rect x="24" y="139" width="350" height="2" fill="#2a8f6a"/>' +
      '<path d="M346 96q22 6 26 30h-26z" fill="#1c2630"/><circle cx="362" cy="150" r="3.5" fill="#fff6c2"/>' +
      '<rect x="40" y="92" width="64" height="9" rx="2" fill="#111"/><text x="72" y="99.5" text-anchor="middle" ' + font + ' font-size="7" fill="' + ICE + '">BERRYESSA</text></g>';
    const town = Array.from({ length: 9 }, (_, i) => '<rect x="' + (i * 46) + '" y="' + (190 + (i % 3) * 4) + '" width="40" height="' + (40 - (i % 3) * 4) + '" fill="' + ["#c9b79a", "#9fb0bf", "#d8cdb6", "#a7896b"][i % 4] + '"/><rect x="' + (i * 46 + 8) + '" y="' + (198 + (i % 3) * 4) + '" width="10" height="8" fill="#ffe2a0" class="' + (i % 2 ? "sw-flk" : "") + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sws1)"/>' +
      '<path d="M0 70q60 -34 120 -10t120 -8t160 4v30h-400z" fill="#7d9a6a"/><path d="M0 84q80 -20 160 -6t140 -6t100 6v20h-400z" fill="#5f7d52"/>' +
      [30, 200, 370].map(x => '<rect x="' + (x - 3) + '" y="52" width="6" height="112" fill="#8d949b"/>').join("") +
      '<path d="M0 46h400v8h-400z" fill="#c9cdd2"/><path d="M0 46q200 -16 400 0z" fill="#d8dce0"/>' +
      train +
      '<rect x="0" y="160" width="400" height="6" fill="#f2c200"/><rect x="0" y="166" width="400" height="16" fill="#b8b2a8"/>' +
      '<rect x="0" y="182" width="400" height="12" fill="#a3a8ad"/>' + [60, 200, 340].map(x => '<rect x="' + (x - 10) + '" y="194" width="20" height="66" fill="#a3a8ad"/>').join("") + town +
      '<rect x="0" y="232" width="400" height="28" fill="#4c4c52"/>' +
      '<rect x="96" y="6" width="208" height="30" rx="3" fill="#111"/><text x="112" y="27" ' + font + ' font-size="17" fill="#fff">Hayward</text>' + badge(226, 21, "BART", BART),
      sky("sws1", "#7fb7e6", "#f6d9b8"));
  }

  /* 2. Hayward Japanese Gardens: wooden bridge, koi pond, lantern */
  function swgardens() {
    const koi = (y, c, cls) => '<g class="sw-koi ' + cls + '"><path d="M0 ' + y + 'q12 -7 24 0q-12 7 -24 0z" fill="' + c + '"/><path d="M0 ' + y + 'l-8 -5v10z" fill="' + c + '"/><circle cx="6" cy="' + (y - 1) + '" r="2" fill="#fff"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sws2)"/>' +
      '<path d="M0 120q100 -30 200 -6t200 -10v40h-400z" fill="#5f7d52"/>' + pine(30, 140, 1.4) + pine(90, 130, 1) + pine(330, 136, 1.3) + pine(380, 130, 1) +
      '<rect x="0" y="140" width="400" height="120" fill="#3c6f78"/>' + '<path d="M0 140h400" stroke="#2a4f56" stroke-width="3"/>' +
      '<ellipse class="sw-rip" cx="90" cy="210" rx="16" ry="5" fill="none" stroke="#bfe8ee" stroke-width="1.5"/><ellipse class="sw-rip sw-r2" cx="300" cy="230" rx="16" ry="5" fill="none" stroke="#bfe8ee" stroke-width="1.5"/>' +
      koi(200, "#ff7a2f", "") + koi(226, "#f4f1e8", "sw-k2") + koi(244, "#ff4a3a", "sw-k2") +
      '<path d="M90 160q110 -70 220 0" stroke="#6b3a22" stroke-width="12" fill="none"/><path d="M90 150q110 -70 220 0" stroke="#8a4e2c" stroke-width="3" fill="none"/>' +
      Array.from({ length: 9 }, (_, i) => { const t = (i + 1) / 10, x = 90 + 220 * t, y = 160 - 140 * t * (1 - t) * 1; return '<path d="M' + x + ' ' + (y - 4) + 'v-16" stroke="#8a4e2c" stroke-width="3"/>'; }).join("") +
      '<path d="M90 136q110 -70 220 0" stroke="#8a4e2c" stroke-width="3" fill="none"/>' +
      '<g transform="translate(46 150)"><rect x="-4" y="0" width="8" height="30" fill="#9a968e"/><rect x="-14" y="-10" width="28" height="12" fill="#b4afa6"/><rect x="-8" y="-8" width="16" height="8" class="sw-flk" fill="#ffd98a"/><path d="M-20 -10l20 -12l20 12z" fill="#8a867e"/></g>' +
      '<path d="M330 186q20 -8 40 0q-20 8 -40 0z" fill="#8c8a84"/><path d="M350 176q14 -6 26 2q-12 6 -26 -2z" fill="#a09d96"/>',
      sky("sws2", "#a9d4ec", "#f4e3c4"));
  }

  /* 3. Monterey Trail High, Elk Grove: stadium lights, track, runners */
  function swmonterey() {
    const light = x => '<rect x="' + (x - 2) + '" y="22" width="4" height="80" fill="#666"/><rect x="' + (x - 16) + '" y="14" width="32" height="12" fill="#444"/>' + [0, 1, 2, 3].map(i => '<circle class="sw-bl' + (i % 2 ? " sw-bl2" : "") + '" cx="' + (x - 11 + i * 7.3) + '" cy="20" r="2.6" fill="#fffbe0"/>').join("");
    const runner = (c, cls) => '<g class="sw-run ' + cls + '"><g class="sw-step"><circle cx="0" cy="182" r="5" fill="#6b4532"/><rect x="-5" y="188" width="10" height="14" rx="2" fill="' + c + '"/><path d="M-3 202l-5 10M3 202l6 10" stroke="#3a2a22" stroke-width="3"/></g></g>';
    const crowd = Array.from({ length: 40 }, (_, i) => '<circle cx="' + (6 + i * 10) + '" cy="' + (112 + (i % 3) * 4) + '" r="3.5" fill="' + ["#1f3c88", "#c0c6cc", "#2a5ab8", "#e8ecf2"][i % 4] + '"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sws3)"/>' + stars(12) + light(40) + light(360) +
      '<rect x="140" y="62" width="120" height="30" fill="#2b3446"/><rect x="146" y="68" width="108" height="12" fill="#ffe2a0" class="sw-flk"/><text x="200" y="89" text-anchor="middle" ' + font + ' font-size="8" fill="#fff" letter-spacing="1">MONTEREY TRAIL</text>' +
      '<rect x="0" y="100" width="400" height="28" fill="#3a3f4a"/>' + crowd +
      '<rect x="0" y="128" width="400" height="132" fill="#b4513a"/>' + [0, 1, 2, 3, 4].map(i => '<path d="M0 ' + (150 + i * 14) + 'h400" stroke="#f4efe6" stroke-width="1.5"/>').join("") +
      '<rect x="0" y="222" width="400" height="38" fill="#3f8f3c"/>' +
      runner(ICE, "") + runner(PINK, "sw-run2"),
      sky("sws3", "#0c1030", "#3a3a6a"));
  }

  /* 4. USC: red-brick Bovard tower, palms, cardinal and gold */
  function swusc() {
    const confetti = Array.from({ length: 10 }, (_, i) => '<rect class="sw-cf' + (i % 3 ? " sw-cf" + (i % 3 + 1) : "") + '" x="' + (30 + i * 36) + '" y="20" width="5" height="8" fill="' + (i % 2 ? CARD : GOLD) + '"/>').join("");
    const arches = (y) => [0, 1, 2].map(i => '<path d="M' + (176 + i * 18) + ' ' + (y + 22) + 'v-14q0 -8 6 -8t6 8v14z" fill="#2a1a14"/>').join("");
    return svg(
      '<rect width="400" height="260" fill="url(#sws4)"/>' +
      '<rect x="60" y="130" width="280" height="86" fill="#a8432e"/>' + Array.from({ length: 10 }, (_, i) => '<path d="M60 ' + (138 + i * 8) + 'h280" stroke="#00000022"/>').join("") +
      '<path d="M60 130l10 -10h260l10 10z" fill="#d8c8a8"/>' + [80, 110, 270, 300].map(x => '<path d="M' + x + ' 196v-30q0 -10 10 -10t10 10v30z" fill="#2a1a14"/>').join("") +
      '<rect x="164" y="46" width="72" height="170" fill="#b24a33"/>' + Array.from({ length: 20 }, (_, i) => '<path d="M164 ' + (54 + i * 8) + 'h72" stroke="#00000022"/>').join("") +
      arches(60) + arches(110) + '<path d="M184 216v-36q0 -16 16 -16t16 16v36z" fill="#2a1a14"/>' +
      '<path d="M158 46h84l-8 -10h-68z" fill="#d8c8a8"/><rect x="170" y="30" width="60" height="8" fill="#d8c8a8"/>' +
      '<g class="sw-flk"><rect x="120" y="140" width="18" height="34" fill="' + CARD + '"/><rect x="120" y="140" width="18" height="6" fill="' + GOLD + '"/></g><g class="sw-flk sw-flk2"><rect x="262" y="140" width="18" height="34" fill="' + GOLD + '"/><rect x="262" y="140" width="18" height="6" fill="' + CARD + '"/></g>' +
      palm(46, 230, 1.1) + palm(352, 230, 1.1) +
      '<rect x="0" y="216" width="400" height="44" fill="#4f8a3f"/><rect x="176" y="216" width="48" height="44" fill="#d8cdb6"/>' + confetti,
      sky("sws4", "#5aa8e8", "#f8dcb0"));
  }

  /* 5. B St and Foothill Blvd, Downtown Hayward; the San Mateo-Hayward Bridge behind */
  function swcorner() {
    const bridge = '<g><path d="M0 116h400" stroke="#8a95a3" stroke-width="2"/><path d="M0 112h140l40 -16h80l40 16h100" stroke="#c7cfd8" stroke-width="5" fill="none"/><path d="M180 96l20 16l20 -16l20 16l20 -16M140 112l40 -16M300 112l-40 -16" stroke="#a3acb7" stroke-width="2" fill="none"/>' +
      Array.from({ length: 26 }, (_, i) => '<path d="M' + (i * 16) + ' 112v8" stroke="#a3acb7" stroke-width="2"/>').join("") +
      '<path d="M180 98v22M260 98v22" stroke="#a3acb7" stroke-width="3"/>' +
      '<rect class="sw-car" x="0" y="106" width="8" height="4" fill="#ffe9a8"/><rect class="sw-car sw-car2" x="0" y="106" width="8" height="4" fill="#ff6a5a"/></g>';
    return svg(
      '<rect width="400" height="260" fill="url(#sws5)"/>' + stars(10) +
      '<path d="M0 96q80 -26 160 -8t160 -10t80 6v20h-400z" fill="#3b4a5e"/><rect x="0" y="108" width="400" height="20" fill="#2a3e5a"/>' + bridge +
      '<rect x="0" y="126" width="400" height="98" fill="#d9dee6"/>' + Array.from({ length: 8 }, (_, i) => '<path d="M' + (i * 52 + 20) + ' 126v98" stroke="#c4cad4" stroke-width="2"/>').join("") +
      tag("SAWEETIE", 14, 194, 50, ICE, -6) + tag("ICY GANG", 24, 220, 20, PINK, -4) + tag("ICY GRL", 176, 218, 18, "#b7a0ff", -3) +
      '<rect x="0" y="224" width="400" height="36" fill="#5d5a55"/><rect x="0" y="222" width="400" height="4" fill="#e8ecf2"/>' +
      '<rect x="336" y="96" width="6" height="128" fill="#2f2f2f"/>' + sign(300, 98, 80, "B St") + sign(250, 124, 150, "Foothill Blvd") +
      '<rect x="8" y="110" width="4" height="114" fill="#222"/><circle class="sw-flk" cx="10" cy="108" r="7" fill="#ffe9a8"/>' +
      '<g class="sw-sp"><circle cx="238" cy="160" r="3" fill="' + ICE + '" opacity=".7"/></g><g class="sw-sp sw-sp2"><circle cx="244" cy="154" r="2" fill="' + ICE + '" opacity=".6"/></g>',
      sky("sws5", "#2a2a5c", "#f29a7a"));
  }

  window.SCENES = { swstation: swstation, swgardens: swgardens, swmonterey: swmonterey, swusc: swusc, swcorner: swcorner };
})();
